import { Text } from 'react-native'

type Props = {
  oobCode: string
}

export default function ResetPasswordAction({ oobCode }: Props) {
  return (
    <>
      <Text>Reset{oobCode}</Text>
    </>
  )
}
