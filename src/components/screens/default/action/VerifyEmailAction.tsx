import { Text } from 'react-native'

type Props = {
  oobCode: string
}

export default function VerifyEmailAction({ oobCode }: Props) {
  return (
    <>
      <Text>Verify{oobCode}</Text>
    </>
  )
}
