![Skeet App Template](https://storage.googleapis.com/skeet-assets/imgs/samples/skeet-app-template.png)

<p align="center">
  <a href="https://twitter.com/intent/follow?screen_name=ELSOUL_LABO2">
    <img src="https://img.shields.io/twitter/follow/ELSOUL_LABO2.svg?label=Follow%20@ELSOUL_LABO2" alt="Follow @ELSOUL_LABO2" />
  </a>
  <br/>

  <a aria-label="npm version" href="https://www.npmjs.com/package/skeet">
    <img alt="" src="https://badgen.net/npm/v/skeet">
  </a>
  <a aria-label="Downloads Number" href="https://www.npmjs.com/package/skeet">
    <img alt="" src="https://badgen.net/npm/dt/skeet">
  </a>
  <a aria-label="License" href="https://github.com/elsoul/skeet/blob/master/LICENSE.txt">
    <img alt="" src="https://badgen.net/badge/license/Apache/blue">
  </a>
    <a aria-label="Code of Conduct" href="https://github.com/elsoul/skeet/blob/master/CODE_OF_CONDUCT.md">
    <img alt="" src="https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg">
  </a>
</p>

# Skeet App Template

React Native (Expo) App Environment for Skeet Framework

[Skeet - TypeScript Serverless Framework](https://github.com/elsoul/skeet)

## Aiming to

- Fast Development
- High Performance
- Global Scale
- Maintainable Code
- Multi-Platform(iOS,Android,PWA)

## Summary

- [x] [React Native](https://reactnative.dev/)
- [x] [Expo](https://docs.expo.dev/)
- [x] [EAS Build](https://docs.expo.dev/build/introduction/)
- [x] [TypeScript - Type Check](https://www.typescriptlang.org/)
- [x] [ESLint - Linter](https://eslint.org/)
- [x] [Prettier - Formatter](https://prettier.io/)
- [x] [Recoil - State Management](https://recoiljs.org/)
- [x] [React i18n - Localization](https://react.i18next.com/)
- [x] [twrnc - TailwindCSS](https://github.com/jaredh159/tailwind-react-native-classnames)
- [x] [React Navigation - Routing](https://reactnavigation.org/)
- [x] [Firebase - Hosting, Analytics & Authentication](https://firebase.google.com/)

## Quick start

```bash
# Node version (using nodenv)
$ node -v
v18.14.2

# Install dependencies
$ yarn install --frozen-lockfile

# Run dev server
$ yarn dev
```

## Firebase Hosting

You need to login to Firebase to use Firebase Hosting to publish your media website.

```bash
# Install Firebase tools
$ npm i -g firebase-tools

# Login to Firebase to enable `yarn deploy` from local
$ firebase login

# Get FIREBASE_DEPLOY_TOKEN to use CI/CD
$ firebase login:ci

```

## EAS Build

[EAS Build](https://docs.expo.dev/build/introduction/)

You need to run this command to setup EAS Build project.
(Edit app.json for example changing names and deleting "extra" to build new project.)

```
yarn build:configure
```

## GitHub Actions (CI/CD)

Needs to set Secrets on GitHub to work with GitHub Actions.

```
FIREBASE_DEPLOY_TOKEN
```
