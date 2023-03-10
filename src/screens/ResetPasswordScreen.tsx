import { Pressable, Text, View } from 'react-native'
import DefaultLayout from '@/layouts/default/DefaultLayout'
import tw from '@/lib/tailwind'
import { useTranslation } from 'react-i18next'
import useColorModeRefresh from '@/hooks/useColorModeRefresh'
import LogoHorizontal from '@/components/common/atoms/LogoHorizontal'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'
import clsx from 'clsx'
import { useCallback } from 'react'
import Toast from 'react-native-toast-message'
import useAnalytics from '@/hooks/useAnalytics'

export default function ResetPasswordScreen() {
  useColorModeRefresh()
  useAnalytics()
  const { t } = useTranslation()
  const navigation = useNavigation<any>()

  const resetPassword = useCallback(() => {
    navigation.navigate('CheckEmail')
    Toast.show({
      type: 'success',
      text1: t('sentResetPasswordRequest') ?? 'Succeed Reset Password Request',
      text2: t('confirmEmail') ?? 'Check your email',
    })
  }, [navigation, t])

  return (
    <>
      <DefaultLayout>
        <View
          style={tw`flex h-full flex-col items-center justify-start py-12 sm:px-6 lg:px-8`}
        >
          <View style={tw`sm:mx-auto sm:w-full sm:max-w-md`}>
            <LogoHorizontal />
            <Text
              style={tw`font-loaded-bold mt-6 text-center text-3xl tracking-tight text-gray-900 dark:text-white`}
            >
              {t('resetYourPassword')}
            </Text>
            <Pressable
              onPress={() => {
                navigation.navigate('Register')
              }}
            >
              <Text
                style={tw`mt-2 text-center text-sm text-gray-600 dark:text-gray-300`}
              >
                {t('or')}{' '}
                <Text
                  style={tw`font-loaded-medium text-indigo-500 dark:text-indigo-200`}
                >
                  {t('registerYourAccount')}
                </Text>
              </Text>
            </Pressable>
          </View>
          <View style={tw`w-full sm:mx-auto sm:max-w-md`}>
            <View style={tw`px-4 py-6 sm:px-10 gap-6`}>
              <View>
                <Text
                  style={tw`text-sm font-loaded-medium leading-6 text-gray-900 dark:text-gray-50`}
                >
                  {t('email')}
                </Text>
                <View style={tw`mt-2`}>
                  <TextInput
                    style={tw`w-full border-2 border-gray-900 dark:border-gray-50 p-3 text-lg font-loaded-bold text-gray-900 dark:text-white sm:leading-6`}
                    inputMode="email"
                  />
                </View>
              </View>
              <View>
                <Pressable
                  onPress={() => {
                    resetPassword()
                  }}
                  style={({ pressed }) =>
                    tw`${clsx(
                      pressed
                        ? 'bg-gray-700 dark:bg-gray-300'
                        : 'bg-gray-900 dark:bg-gray-50',
                      'flex w-full justify-center py-2 px-3'
                    )}`
                  }
                >
                  <Text
                    style={tw`text-center font-loaded-bold text-lg text-white dark:text-gray-900`}
                  >
                    {t('reset')}
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </DefaultLayout>
    </>
  )
}
