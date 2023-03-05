import 'react-native-gesture-handler'
import '@/lib/i18n'
import { View, Text } from 'react-native'
import { useDeviceContext } from 'twrnc'
import tw from '@/lib/tailwind'
import { useFonts } from 'expo-font'
import {
  Outfit_300Light,
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_700Bold,
  Outfit_800ExtraBold,
} from '@expo-google-fonts/outfit'
import {
  NotoSansJP_300Light,
  NotoSansJP_400Regular,
  NotoSansJP_500Medium,
  NotoSansJP_700Bold,
  NotoSansJP_900Black,
} from '@expo-google-fonts/noto-sans-jp'
import AppLoading from '@/components/loading/AppLoading'
import { Suspense } from 'react'
import { RecoilRoot } from 'recoil'
import ReactNativeRecoilPersist, {
  ReactNativeRecoilPersistGate,
} from 'react-native-recoil-persist'
import { MenuProvider } from 'react-native-popup-menu'
import Toast from 'react-native-toast-message'
import { toastConfig } from '@/lib/toast'

import Routes from '@/routes/Routes'

export default function App() {
  useDeviceContext(tw)

  const [fontsLoaded] = useFonts({
    Outfit_300Light,
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_700Bold,
    Outfit_800ExtraBold,
    NotoSansJP_300Light,
    NotoSansJP_400Regular,
    NotoSansJP_500Medium,
    NotoSansJP_700Bold,
    NotoSansJP_900Black,
  })

  if (!fontsLoaded) {
    return (
      <>
        <AppLoading />
      </>
    )
  }

  return (
    <>
      <Suspense fallback={<AppLoading />}>
        <RecoilRoot>
          <ReactNativeRecoilPersistGate store={ReactNativeRecoilPersist}>
            <MenuProvider>
              <Routes />
              <Toast config={toastConfig} />
            </MenuProvider>
          </ReactNativeRecoilPersistGate>
        </RecoilRoot>
      </Suspense>
    </>
  )
}
