import { Pressable, Text, View } from 'react-native'
import DefaultLayout from '@/layouts/default/DefaultLayout'
import tw from '@/lib/tailwind'
import { useTranslation } from 'react-i18next'
import useColorModeRefresh from '@/hooks/useColorModeRefresh'
import LogoHorizontal from '@/components/common/atoms/LogoHorizontal'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'

export default function LoginScreen() {
  useColorModeRefresh()
  const { t } = useTranslation()
  const navigation = useNavigation<any>()
  return (
    <>
      <DefaultLayout>
        <View
          style={tw`flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8`}
        >
          <View style={tw`sm:mx-auto sm:w-full sm:max-w-md`}>
            <LogoHorizontal />
            <Text
              style={tw`font-loaded-bold mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white`}
            >
              {t('loginToYourAccount')}
            </Text>
            <Pressable
              onPress={() => {
                navigation.navigate('Register', {})
              }}
            >
              <Text
                style={tw`mt-2 text-center text-sm text-gray-600 dark:text-gray-300`}
              >
                {t('or')}{' '}
                <Text
                  style={tw`font-medium text-indigo-500 dark:text-indigo-200`}
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
                    style={tw`w-full border-2 border-gray-900 p-3 text-lg font-loaded-bold text-gray-900 dark:text-white sm:leading-6`}
                  />
                </View>
              </View>
              <View>
                <Text
                  style={tw`text-sm font-loaded-medium leading-6 text-gray-900 dark:text-gray-50`}
                >
                  {t('password')}
                </Text>
                <View style={tw`mt-2`}>
                  <TextInput
                    style={tw`w-full border-2 border-gray-900 p-3 text-lg font-loaded-bold text-gray-900 dark:text-white sm:leading-6`}
                  />
                </View>
              </View>

              <View style={tw`flex-row items-center`}>
                <View style={tw`flex flex-1`}></View>
                <View style={tw`flex flex-1 text-right`}>
                  <Pressable
                    onPress={() => {
                      navigation.navigate('ResetPassword', {})
                    }}
                  >
                    <Text
                      style={tw`px-2 font-medium text-indigo-500 dark:text-indigo-200`}
                    >
                      {t('forgotYourPassword')}
                    </Text>
                  </Pressable>
                </View>
              </View>
              <View>
                <Pressable
                  onPress={() => {
                    navigation.navigate('ResetPassword', {})
                  }}
                  style={tw`flex w-full justify-center bg-gray-900 dark:bg-gray-50 py-2 px-3`}
                >
                  <Text
                    style={tw`text-center font-loaded-bold text-lg text-white dark:text-gray-900`}
                  >
                    {t('login')}
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
