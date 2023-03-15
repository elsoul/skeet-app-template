import { Text } from 'react-native'
import DefaultLayout from '@/layouts/default/DefaultLayout'
import useAnalytics from '@/hooks/useAnalytics'
import { useRoute } from '@react-navigation/native'

export default function ActionScreen() {
  useAnalytics()
  const route = useRoute()
  console.log(route)
  return (
    <>
      <DefaultLayout>
        <Text>Action</Text>
      </DefaultLayout>
    </>
  )
}
