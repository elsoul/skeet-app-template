import tw from '@/lib/tailwind'
import { useCallback, useMemo } from 'react'
import { Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import { LanguageIcon } from 'react-native-heroicons/outline'
import {
  Menu,
  MenuOptions,
  MenuTrigger,
  MenuOption,
} from 'react-native-popup-menu'

export default function LanguageChanger() {
  const { i18n } = useTranslation()
  const currentLanguage = useMemo(() => {
    return i18n.language
  }, [i18n])
  console.log(currentLanguage)

  const changeLanguage = useCallback(
    async (lang: string) => {
      await i18n.changeLanguage(lang)
    },
    [i18n]
  )
  return (
    <>
      <Menu>
        <MenuTrigger>
          <LanguageIcon style={tw`text-gray-700 dark:text-gray-200`} />
        </MenuTrigger>
        <MenuOptions>
          <MenuOption>
            <Text
              style={{
                ...tw`font-loaded-medium text-gray-900 dark:text-gray-50`,
              }}
            >
              English
            </Text>
          </MenuOption>
          <MenuOption>
            <Text
              style={{
                ...tw`font-loaded-medium text-gray-900 dark:text-gray-50`,
              }}
            >
              日本語
            </Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </>
  )
}
