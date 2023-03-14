import { Pressable, Text, View } from 'react-native'
import DefaultLayout from '@/layouts/default/DefaultLayout'
import tw from '@/lib/tailwind'
import { useTranslation } from 'react-i18next'
import useColorModeRefresh from '@/hooks/useColorModeRefresh'
import LogoHorizontal from '@/components/common/atoms/LogoHorizontal'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'
import clsx from 'clsx'
import { useCallback, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { userState } from '@/store/user'
import Toast from 'react-native-toast-message'
import useAnalytics from '@/hooks/useAnalytics'
import { firebaseState } from '@/store/firebase'
import {
  getAuth,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth'
import { emailSchema, passwordSchema } from '@/utils/form'

export default function LoginScreen() {
  useColorModeRefresh()
  useAnalytics()
  const { t } = useTranslation()
  const navigation = useNavigation<any>()
  const [user, setUser] = useRecoilState(userState)
  const [firebase, setFirebase] = useRecoilState(firebaseState)
  const [isLoading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const validateEmail = useCallback(() => {
    try {
      emailSchema.parse(email)
      setEmailError('')
    } catch (err) {
      setEmailError('emailErrorText')
    }
  }, [email, setEmailError])

  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const validatePassword = useCallback(() => {
    try {
      passwordSchema.parse(password)
      setPasswordError('')
    } catch (err) {
      setPasswordError('passwordErrorText')
    }
  }, [password, setPasswordError])

  useEffect(() => {
    if (!firebase.auth && firebase.firebaseApp) {
      setFirebase({
        ...firebase,
        auth: getAuth(firebase.firebaseApp),
      })
    }
  }, [firebase, setFirebase])

  const validate = useCallback(() => {
    validateEmail()
    validatePassword()
  }, [validateEmail, validatePassword])

  const login = useCallback(async () => {
    if (firebase.auth && emailError === '' && passwordError === '') {
      try {
        setLoading(true)
        const userCredential = await signInWithEmailAndPassword(
          firebase.auth,
          email,
          password
        )
        console.log(userCredential)
        if (!userCredential.user.emailVerified) {
          await sendEmailVerification(userCredential.user)
          throw new Error('Not verified')
        }

        const fbToken = await userCredential.user.getIdToken()
        console.log({ fbToken })

        Toast.show({
          type: 'success',
          text1: t('succeedLogin') ?? 'Succeed to sign in🎉',
          text2: t('howdy') ?? 'Howdy?',
        })
        setUser({
          ...user,
          uid: userCredential.user.uid,
        })
      } catch (err) {
        console.log(err)
        if (err instanceof Error && err.message === 'Not verified') {
          Toast.show({
            type: 'error',
            text1: t('errorNotVerifiedTitle') ?? 'Not verified.',
            text2:
              t('errorNotVerifiedBody') ??
              'Sent email to verify. Please check your email box.',
          })
        } else {
          Toast.show({
            type: 'error',
            text1: t('errorLoginTitle') ?? 'Failed to sign in.',
            text2:
              t('errorLoginBody') ??
              'Something went wrong... Please try it again.',
          })
        }
      } finally {
        setLoading(false)
      }
    }
  }, [
    firebase.auth,
    user,
    setUser,
    t,
    email,
    password,
    emailError,
    passwordError,
  ])

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
              {t('loginToYourAccount')}
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
                  {emailError !== '' && (
                    <Text style={tw`text-red-500 dark:text-red-300 text-xs`}>
                      {' : '}
                      {t(emailError)}
                    </Text>
                  )}
                </Text>
                <View style={tw`mt-2`}>
                  <TextInput
                    style={tw`w-full border-2 border-gray-900 dark:border-gray-50 p-3 text-lg font-loaded-bold text-gray-900 dark:text-white sm:leading-6`}
                    inputMode="email"
                    value={email}
                    onChangeText={setEmail}
                  />
                </View>
              </View>
              <View>
                <Text
                  style={tw`text-sm font-loaded-medium leading-6 text-gray-900 dark:text-gray-50`}
                >
                  {t('password')}
                  {passwordError !== '' && (
                    <Text style={tw`text-red-500 dark:text-red-300 text-xs`}>
                      {' : '}
                      {t(passwordError)}
                    </Text>
                  )}
                </Text>
                <View style={tw`mt-2`}>
                  <TextInput
                    style={tw`w-full border-2 border-gray-900 dark:border-gray-50 p-3 text-lg font-loaded-bold text-gray-900 dark:text-white sm:leading-6`}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                  />
                </View>
              </View>

              <View style={tw`flex-row items-center`}>
                <View style={tw`flex flex-1`}></View>
                <View style={tw`flex flex-1`}>
                  <Pressable
                    onPress={() => {
                      navigation.navigate('ResetPassword')
                    }}
                  >
                    <Text
                      style={tw`px-2 text-right font-loaded-medium text-indigo-500 dark:text-indigo-200`}
                    >
                      {t('forgotYourPassword')}
                    </Text>
                  </Pressable>
                </View>
              </View>
              <View>
                <Pressable
                  onPress={() => {
                    validate()
                    login()
                  }}
                  disabled={isLoading}
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
