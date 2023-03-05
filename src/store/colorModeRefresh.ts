import { atom } from 'recoil'

export type ColorModeRefreshState = {
  count: number
}

export const colorModeRefreshState = atom<ColorModeRefreshState>({
  key: 'colorModeRefreshState',
  default: {
    count: 0,
  },
})
