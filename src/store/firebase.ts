import { atom } from 'recoil'
import type { FirebaseApp } from 'firebase/app'
import type { Analytics } from 'firebase/analytics'
import type { Auth } from 'firebase/auth'

export type FirebaseState = {
  firebaseApp: FirebaseApp | undefined
  analytics: Analytics | undefined
  auth: Auth | undefined
}

export const firebaseState = atom<FirebaseState>({
  key: 'firebaseState',
  default: {
    firebaseApp: undefined,
    analytics: undefined,
    auth: undefined,
  },
})
