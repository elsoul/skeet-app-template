import tw from '@/lib/tailwind'
import type { ReactNode } from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {
  children: ReactNode
}

export default function UserLayout({ children }: Props) {
  return (
    <>
      <View style={tw`w-full h-full bg-white dark:bg-gray-900`}>
        <SafeAreaView>{children}</SafeAreaView>
      </View>
    </>
  )
}
