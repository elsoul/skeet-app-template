import { userState } from '@/store/user'
import { NavigationContainer } from '@react-navigation/native'
import { useRecoilValue } from 'recoil'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import AppLoading from '@/components/loading/AppLoading'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserRoutes from './UserRoutes'
import DefaultRoutes from './DefaultRoutes'

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
