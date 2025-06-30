import React, { useCallback, useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import Text from 'ui/components/restyles/Text';
import { Button } from 'ui/components/custom/Button';
import RadioGroup from 'react-native-radio-buttons-group';

import { Filter } from 'lucide-react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from 'ui/theme/theme';
import { useTranslation } from 'react-i18next';
import { FilterOptions, OrderByOptions } from 'types/types';
import { SliderComponent } from 'ui/components/custom/SliderComponent';

type FilterHotelsComponentProps = {
  setFilters: (filters: any) => void;
  setOrder: (order: OrderByOptions) => void;
  order: OrderByOptions;
  filters: FilterOptions[];
  maxHotelPrice: number;
};

export const FilterHotelsComponent = ({
  setFilters,
  setOrder,
  order,
  filters,
  maxHotelPrice,
}: FilterHotelsComponentProps) => {
  const { colors } = useTheme<Theme>();
  const { t } = useTranslation();

  const radioButtons = [
    {
      id: 'price-asc',
      label: t('filters.price-asc'),
      value: 'price-asc',
    },
    {
      id: 'price-desc',
      label: t('filters.price-desc'),
      value: 'price-desc',
    },
    {
      id: 'rating-asc',
      label: t('filters.rating-asc'),
      value: 'rating-asc',
    },
    {
      id: 'rating-desc',
      label: t('filters.rating-desc'),
      value: 'rating-desc',
    },
    {
      id: 'stars-asc',
      label: t('filters.stars-asc'),
      value: 'stars-asc',
    },
    {
      id: 'stars-desc',
      label: t('filters.stars-desc'),
      value: 'stars-desc',
    },
  ];

  const [selectedOrder, setSelectedOrder] = useState<OrderByOptions>(order);
  const [selectedFilters, setSelectedFilters] =
    useState<FilterOptions[]>(filters);

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  const [isVisible, setIsVisible] = useState(false);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleClose = useCallback(() => {
    bottomSheetRef.current?.close();
    setIsVisible(false);
  }, []);

  const handleOpen = useCallback(() => {
    bottomSheetRef.current?.snapToPosition(1);
    setIsVisible(true);
  }, []);

  const onApply = useCallback(() => {
    setFilters(selectedFilters);
    setOrder(selectedOrder);
    handleClose();
  }, [setFilters, setOrder, handleClose, selectedOrder, selectedFilters]);

  const onReset = useCallback(() => {
    setSelectedFilters([]);
    setFilters([]);
    setSelectedOrder('price-asc');
    setOrder('price-asc');
    handleClose();
  }, [setSelectedFilters, setSelectedOrder, handleClose, setFilters, setOrder]);

  // renders
  return !isVisible ? (
    <TouchableOpacity
      testID="filterButton"
      onPress={handleOpen}
      style={[
        styles.circleButton,
        {
          backgroundColor: colors.mainBackground,
        },
      ]}
    >
      <Filter size={24} color="white" />
    </TouchableOpacity>
  ) : (
    <BottomSheet
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      onClose={handleClose}
      enablePanDownToClose
      enableDynamicSizing
      snapPoints={['80%', '90%']}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Text variant="headerSmall" marginBottom="s">
          {t('filters.title')}
        </Text>
        <Text variant="body" marginBottom="s">
          {t('filters.priceUntil')}
        </Text>
        <SliderComponent
          testID="priceSlider"
          value={
            selectedFilters.find(filter => filter.type === 'price')?.value || 0
          }
          onValueChange={value =>
            setSelectedFilters([{ type: 'price', value }])
          }
          upperLimit={maxHotelPrice}
          lowerLimit={0}
        />

        <Text variant="body" marginBottom="s">
          {t('filters.stars')}
        </Text>
        <SliderComponent
          testID="starsSlider"
          value={
            selectedFilters.find(filter => filter.type === 'stars')?.value || 5
          }
          onValueChange={value => {
            setSelectedFilters([{ type: 'stars', value }]);
          }}
          upperLimit={5}
          lowerLimit={1}
        />
        <Text variant="headerSmall">{t('order')}</Text>

        <RadioGroup
          containerStyle={styles.radioGroupContainer}
          radioButtons={radioButtons}
          onPress={value => setSelectedOrder(value as OrderByOptions)}
          layout="column"
          selectedId={selectedOrder}
        />

        <Button
          testID="applyFilters"
          title={t('apply')}
          variant="primary"
          onPress={onApply}
        />
        <Button
          testID="resetFilters"
          title={t('reset')}
          variant="primary"
          outline
          onPress={onReset}
          style={{ marginTop: 10 }}
        />
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 36,
  },
  circleButton: {
    backgroundColor: 'black',
    padding: 20,
    position: 'absolute',
    bottom: 50,
    right: 20,
    zIndex: 1000,
    borderRadius: 100,
  },
  radioGroupContainer: {
    flexDirection: 'column',
    gap: 10,
    alignItems: 'flex-start',
    marginBottom: 20,
  },
});
