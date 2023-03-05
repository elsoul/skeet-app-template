import { Text } from 'react-native'
import DefaultLayout from '@/layouts/default/DefaultLayout'
import tw from '@/lib/tailwind'
import { useTranslation } from 'react-i18next'

export default function LoginScreen() {
  const { t } = useTranslation()
  return (
    <>
      <DefaultLayout>
        <Text style={tw`font-loaded-bold`}>{t('routes.Login')}</Text>
      </DefaultLayout>
    </>
  )
}
