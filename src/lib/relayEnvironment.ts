import 'regenerator-runtime/runtime'
import { Environment, RecordSource, Store } from 'relay-runtime'
import {
  authMiddleware,
  cacheMiddleware,
  RelayNetworkLayer,
  urlMiddleware,
  retryMiddleware,
} from 'react-relay-network-modern'
import appConfig from '@/config/app'
import { Platform } from 'react-native'

let storeEnvironment: Environment | null = null
let beforeToken: string | null = null

export const createEnvironment = (token: string) => {
  if (storeEnvironment && beforeToken && beforeToken === token)
    return storeEnvironment
  const source = new RecordSource()
  const store = new Store(source)
  storeEnvironment = new Environment({
    store,
    network: new RelayNetworkLayer([
      cacheMiddleware({
        size: 1000,
        ttl: 15 * 60 * 1000,
        allowMutations: true,
        allowFormData: true,
        clearOnMutation: true,
      }),
      authMiddleware({
        token,
      }),
      retryMiddleware(),
      urlMiddleware({
        url: () =>
          process.env.NODE_ENV !== 'production'
            ? Platform.OS === 'android'
              ? `http://${appConfig.localIp}:4000/graphql`
              : 'http://localhost:4000/graphql'
            : `https://${appConfig.skeetApiDomain}/graphql`,
      }),
    ]),
  })
  beforeToken = token
  return storeEnvironment
}
