import ActionLoading from '@/components/loading/ActionLoading'
import tw from '@/lib/tailwind'
import { View, Text } from 'react-native'
import { useState } from 'react'

type Props = {
  oobCode: string
}

export default function VerifyEmailAction({ oobCode }: Props) {
  const [isLoading, setLoading] = useState(true)

  if (isLoading) {
    return (
      <>
        <ActionLoading />
      </>
    )
  }

  return (
    <>
      <View style={tw`w-full h-full flex-col items-center justify-center`}>
        <Text>Verify{oobCode}</Text>
      </View>
    </>
  )
}
