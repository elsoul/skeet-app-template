import UserDashboardScreen from '@/screens/user/UserDashboardScreen'
import UserSettingsScreen from '@/screens/user/UserSettingsScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function UserRoutes() {
  return (
    <>
      <Stack.Navigator
        initialRouteName="dashboard"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="dashboard" component={UserDashboardScreen} />
        <Stack.Screen name="settings" component={UserSettingsScreen} />
      </Stack.Navigator>
    </>
  )
}
