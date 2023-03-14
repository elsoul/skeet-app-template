import { Text } from 'react-native'
import DefaultLayout from '@/layouts/default/DefaultLayout'
import useAnalytics from '@/hooks/useAnalytics'

export default function ActionScreen() {
  useAnalytics()
  return (
    <>
      <DefaultLayout>
        <Text>Action</Text>
      </DefaultLayout>
    </>
  )
}
