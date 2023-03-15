import appSetting from '../../app.json'

const appConfig = {
  domain: 'app-template-pwa.skeet.dev',
  iosId: appSetting.expo.ios.bundleIdentifier,
  androidId: appSetting.expo.android.package,
}

export default appConfig
