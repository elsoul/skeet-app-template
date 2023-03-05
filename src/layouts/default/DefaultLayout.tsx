import LanguageChanger from '@/components/utils/LanguageChanger'
import tw from '@/lib/tailwind'
import type { ReactNode } from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import SkeetLogoHorizontal from '@assets/logo/SkeetLogoHorizontal.svg'
import SkeetLogoHorizontalInvert from '@assets/logo/SkeetLogoHorizontalInvert.svg'

type Props = {
  children: ReactNode
}
export default function DefaultLayout({ children }: Props) {
  return (
    <>
      <View style={tw`relative w-full h-full bg-white dark:bg-gray-900`}>
        <SafeAreaView>
          <View style={tw`h-24 w-full bg-white dark:bg-gray-900`}>
            <View
              style={tw`flex flex-row items-center justify-between p-6 md:justify-start md:gap-10`}
            >
              <View style={tw`flex flex-1`}>
                <SkeetLogoHorizontal
                  style={tw`h-10 w-28 sm:h-10 dark:hidden`}
                />
                <SkeetLogoHorizontalInvert
                  style={tw`hidden h-10 w-28 dark:block`}
                />
              </View>
              <View style={tw`flex items-center justify-end`}>
                <LanguageChanger />
              </View>
            </View>
          </View>
          {children}
        </SafeAreaView>
      </View>
    </>
  )
}
