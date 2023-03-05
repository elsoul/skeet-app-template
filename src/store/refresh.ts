import { atom } from 'recoil'

export type RefreshState = {
  count: number
}

export const refreshState = atom<RefreshState>({
  key: 'refreshState',
  default: {
    count: 0,
  },
})
