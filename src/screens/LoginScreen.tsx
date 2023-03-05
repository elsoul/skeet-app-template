import { Text } from 'react-native'
import DefaultLayout from '@/layouts/default/DefaultLayout'
import tw from '@/lib/tailwind'

export default function LoginScreen() {
  return (
    <>
      <DefaultLayout>
        <Text style={tw`font-loaded-bold`}>Login</Text>
      </DefaultLayout>
    </>
  )
}
