import { userState } from '@/store/user'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useMemo, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserRoutes from './UserRoutes'
import DefaultRoutes from './DefaultRoutes'
import { NavigationContainer } from '@react-navigation/native'
import AppLoading from '@/components/loading/AppLoading'
import { useTranslation } from 'react-i18next'
import { firebaseState } from '@/store/firebase'
import firebaseConfig from '@/config/firebase'
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const Stack = createNativeStackNavigator()

export default function Routes() {
  const { t } = useTranslation()
  const user = useRecoilValue(userState)
  const isLoggedIn = useMemo(() => {
    return user.uid !== ''
  }, [user])

  const [firebase, setFirebase] = useRecoilState(firebaseState)

  useEffect(() => {
    if (!firebase.firebaseApp) {
      setFirebase({
        ...firebase,
        firebaseApp: !getApps().length
          ? initializeApp(firebaseConfig)
          : getApp(),
      })
    }
    if (firebase.firebaseApp && !firebase.analytics) {
      if (
        typeof window !== 'undefined' &&
        process.env.NODE_ENV !== 'development'
      ) {
        setFirebase({
          ...firebase,
          analytics: getAnalytics(firebase.firebaseApp),
        })
      }
    }
  }, [firebase])

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
