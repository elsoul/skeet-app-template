import { userState } from '@/store/user'
import { useRecoilValue } from 'recoil'
import { useMemo } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserRoutes from './UserRoutes'
import DefaultRoutes from './DefaultRoutes'
import { NavigationContainer } from '@react-navigation/native'
import AppLoading from '@/components/loading/AppLoading'
import { useTranslation } from 'react-i18next'

const Stack = createNativeStackNavigator()

export default function Routes() {
  const { t } = useTranslation()
  const user = useRecoilValue(userState)
  const isLoggedIn = useMemo(() => {
    return user.uid !== ''
  }, [user])

  return (
    <>
      <NavigationContainer
        documentTitle={{
          formatter: (_options, route) =>
            `${t(`routes.${route?.name}`)} - ${t('appTitle')}`,
        }}
        fallback={<AppLoading />}
      >
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={isLoggedIn ? 'User' : 'Default'}
        >
          {isLoggedIn ? (
            <Stack.Screen name="User" component={UserRoutes} />
          ) : (
            <Stack.Screen name="Default" component={DefaultRoutes} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
