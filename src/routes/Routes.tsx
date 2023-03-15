import { userState } from '@/store/user'
import { useRecoilValue } from 'recoil'
import { useMemo } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserRoutes from './UserRoutes'
import DefaultRoutes from './DefaultRoutes'
import { NavigationContainer } from '@react-navigation/native'
import AppLoading from '@/components/loading/AppLoading'
import { useTranslation } from 'react-i18next'
import * as Linking from 'expo-linking'

const Stack = createNativeStackNavigator()
const prefix = Linking.createURL('/')

export default function Routes() {
  const { t } = useTranslation()
  const user = useRecoilValue(userState)
  const isLoggedIn = useMemo(() => {
    return user.uid !== ''
  }, [user])

  const linking = useMemo(
    () => ({
      prefixes: [prefix, 'https://app-template-pwa.skeet.dev/'],
      config: {
        screens: {
          default: '',
        },
      },
    }),
    []
  )

  return (
    <>
      <NavigationContainer
        documentTitle={{
          formatter: (_options, route) =>
            `${t(`routes.${route?.name}`)} - ${t('appTitle')}`,
        }}
        fallback={<AppLoading />}
        linking={linking}
      >
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={isLoggedIn ? 'user' : 'default'}
        >
          {isLoggedIn ? (
            <Stack.Screen name="user" component={UserRoutes} />
          ) : (
            <Stack.Screen name="default" component={DefaultRoutes} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
