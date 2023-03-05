import { View, Text } from 'react-native'
import { useDeviceContext } from 'twrnc'

import ExpoLogo from '@assets/logo/SkeetLogoHorizontal.svg'
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
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ExpoLogo width={84} height={32} />
      <Text style={tw`font-loaded-extrabold text-3xl`}>Testテスト</Text>
    </View>
  )
}
