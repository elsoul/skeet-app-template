import { atom } from 'recoil'

export type ColorModeRefreshState = {
  mode: 'light' | 'dark'
}

export const colorModeRefreshState = atom<ColorModeRefreshState>({
  key: 'colorModeRefreshState',
  default: {
    mode: 'light',
  },
})
