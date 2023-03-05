import { Text } from 'react-native'
import DefaultLayout from '@/layouts/default/DefaultLayout'
import tw from '@/lib/tailwind'
import { useTranslation } from 'react-i18next'
import useColorModeRefresh from '@/hooks/useColorModeRefresh'

export default function LoginScreen() {
  useColorModeRefresh()
  const { t } = useTranslation()
  return (
    <>
      <DefaultLayout>
        <Text style={tw`font-loaded-bold dark:text-gray-50`}>
          {t('routes.Login')}
        </Text>
      </DefaultLayout>
    </>
  )
}
