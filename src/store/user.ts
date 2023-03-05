import { atom } from 'recoil'
import ReactNativeRecoilPersist from 'react-native-recoil-persist'

export type UserState = {
  userId: string
  uid: string
  email: string
  username: string
  pubkey: string
  githubUid: string
  iconUrl: string
  role: string
}

export const userState = atom<UserState>({
  key: 'userState',
  default: {
    userId: '',
    uid: '',
    email: '',
    username: '',
    pubkey: '',
    githubUid: '',
    iconUrl: '',
    role: 'user',
  },
  effects_UNSTABLE: [ReactNativeRecoilPersist.persistAtom],
})
