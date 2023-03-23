import appSetting from '../../app.json'

const appConfig = {
  domain: 'app-template-pwa.skeet.dev',
  iosId: appSetting.expo.ios.bundleIdentifier,
  androidId: appSetting.expo.android.package,
  skeetApiDomain: 'api-template.skeet.dev',
  localIp: '192.168.2.35',
}

export default appConfig
