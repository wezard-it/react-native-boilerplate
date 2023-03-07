# Basic Project Structure

## How to create a new project from this one
- remove remote ``git remote remove origin``
- remove the previous git history: ``rm -rf .git/``
- Use react-native-rename ``npx react-native-rename <newName> -b <bundleIdentifier> ``
- Android - search all com.basic and change it with the new namespace
- Android - change folders name inside android/app/src/main/java
- Set up permissions ``npx react-native setup-ios-permissions``


## Features:

- Navigation init
- Storage with redux
- Basic folder structure
- Multi language with i18n
- Eslint and autosave
- Utils for bottomsheet, camera, device, font, screen navigation

## src structure

- assets: all folders related to UI, like fonts, locales, pngs, svgs and lottie files
- components subdivided in:
  - atomics:
    - atoms: include basic building blocks of the UI interface: labels, input, buttons etc.
    - molecules: groups of UI elements functioning together as a unit.
    - organisms: complex UI components made of groups of molecules and/or atoms and/or other organisms.
  - hocs: higher-order components, wrapper functions that take a component as a parameter and return a new component
  - hooks: allow us to use state in React Native functional components.
  - providers: component is responsible to pass state value to consuming components that are descendants of this Provider.
- configs: configuration files.
- container: containers for screens inside a tab view.
- providers: app themes.
- screens: main screens.
- store: redux store modules.
- utils:
  - helpers: methods that will be used across the app
  - redux: methods that will be used in redux
  - validation: methods related to form validation
  - sdk: centralized api requests handler (should be named ``project-sdk``)

## Code quality covered with:

- Eslint
- Husky
- Prettier

## Committing recap

- fix: bug fixes, e.g. fix crash due to deprecated method.
- feat: new features, e.g. add new method to the module.
- refactor: code refactor, e.g. migrate from class components to hooks.
- docs: changes into documentation, e.g. add usage example for the module..
- test: adding or updating tests, eg add integration tests using detox.
- chore: tooling changes, e.g. change CI config.
- wip: work in progress, e.g. working on a feature but not finished yet.
