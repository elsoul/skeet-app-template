import { View } from 'react-native'

import ExpoLogo from '@assets/SkeetLogoHorizontal.svg'

export default function App() {
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
    </View>
  )
}
