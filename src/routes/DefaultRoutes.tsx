import ActionScreen from '@/screens/ActionScreen'
import LoginScreen from '@/screens/LoginScreen'
import RegisterScreen from '@/screens/RegisterScreen'
import ResetPasswordScreen from '@/screens/ResetPasswordScreen'
import CheckEmailScreen from '@/screens/CheckEmailScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function DefaultRoutes() {
  return (
    <>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="register" component={RegisterScreen} />
        <Stack.Screen name="reset-password" component={ResetPasswordScreen} />
        <Stack.Screen name="check-email" component={CheckEmailScreen} />
        <Stack.Screen name="action" component={ActionScreen} />
      </Stack.Navigator>
    </>
  )
}
