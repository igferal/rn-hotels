# RNHotels

## Setup Guide
The project has been tested with an iOS emulator.
Node version 22.17.0
RN version 0.80


```
git clone https://github.com/igferal/rn-hotels.git
cd rnhotels
npm install 
npx pod-install 
npm run ios
```

## Project structure

```
src/                          # Main source directory
├── api/                      # UseHotels hook to download hotels json.
├── types/                    # TypeScript type definitions
│   ├── index.ts              # Main types (Hotel)
├── ui/                       
│   ├── components/           # UI Components
│   ├── screens/              # Screen components
│   └── navigation/           # Navigation configuration         
│   └── theme/                # Theme configuration         
├── utils/                    # Utility functions, such as filters and sorting
├── i18n/                     # Internationalization
│   └── languages/            
└── tests/                    # Test files and configurations
    ├── components/           # Component tests
    ├── screens/              # Screen tests
    ├── e2e/                  # Simple e2e flow 
    
```


## Libraries

The following 3rd party libraries have been used:

* React Native Navigation & dependencies
    * Navigation between screens
* react-i18next 
    * I18n
* react-native-svg & lucide-react-native
    * Used for icons across all screens
* @gorhom/bottom-sheet
    * Better UX component with filter options
* @react-native-community/slider
    * Cost filter
* react-native-maps
    * Hotel location component in Detail Screen
* @shopify/restyle
    * Reusing theme across the app
* react-native-radio-buttons-group
    * Choose just one sorting option in the filters and sort sheet
* @tanstack/react-query
    * There's no API, it's a single JSON file. It could be hardcoded in a TypeScript file exporting an array. However, wrapping the JSON call in react-query provides cache, future maintainability, and the option to simulate filters and sorting easily.


## User Guide

![ListViewImage](readme-images/list.jpeg) 

From the Main Screen you can see the hotels at a glance. For each hotel you have easy visibility of the name, location, stars, cost per night, and user rating.

![Filters](readme-images/filter.jpeg)

From the main screen you can also access the filters sheet where you can search for hotels up to a certain cost threshold, maximum stars, or sort them.

![Map View](readme-images/mapview.jpeg)

And finally from the Main List you can see all the hotels in an Map View, markers are the library ones to be more performant. Once you tap on them it opens a little description view and from it you can tap to navigate to the actual detail screen.

![Detail Image 1](readme-images/detail.jpeg)
![Detail Image 2](readme-images/detail2.jpeg)

When you tap on a hotel card you are redirected to the hotel detail screen.

Here you have the rest of the information available for the hotel:

* Check-in and Check-out times
* Hotel location with map preview
* Contact information (tapping both email and phone opens the mail or phone app)
* Image gallery (trivial implementation where you change the header image)


## Testing

### Components and screens

Simple testing provided by Jest and React Native Testing Library, run with `npm run test`

### e2e

Very basic e2e testing with Maestro, [(Install Guide)](https://github.com/mobile-dev-inc/maestro-docs/blob/main/getting-started/installing-maestro/README.md). With the app already installed and the emulator running, just run `npm run e2e`

