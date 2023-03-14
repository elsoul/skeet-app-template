import firebaseConfig from '@/config/firebase'
import { getAnalytics } from 'firebase/analytics'
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'

export const firebaseApp = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp()

export const firebaseAuth = firebaseApp ? getAuth(firebaseApp) : undefined

export const analytics =
  typeof window !== 'undefined' &&
  process.env.NODE_ENV !== 'development' &&
  firebaseApp
    ? getAnalytics(firebaseApp)
    : undefined
