import LanguageChanger from '@/components/utils/LanguageChanger'
import tw from '@/lib/tailwind'
import type { ReactNode } from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ColorModeChanger from '@/components/utils/ColorModeChanger'
import useColorModeRefresh from '@/hooks/useColorModeRefresh'

type Props = {
  children: ReactNode
}
export default function DefaultLayout({ children }: Props) {
  useColorModeRefresh()
  return (
    <>
      <View
        style={tw`relative max-w-full min-h-full bg-white dark:bg-gray-900`}
      >
        <SafeAreaView>
          <View style={tw`h-24 w-full bg-white dark:bg-gray-900`}>
            <View
              style={tw`flex flex-row items-center justify-between p-6 md:justify-start md:gap-10`}
            >
              <View style={tw`flex flex-1`}></View>
              <View style={tw`flex flex-row items-center justify-end gap-6`}>
                <LanguageChanger />
                <ColorModeChanger />
              </View>
            </View>
          </View>
          {children}
        </SafeAreaView>
      </View>
    </>
  )
}
