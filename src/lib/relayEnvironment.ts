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

const source = new RecordSource()
const store = new Store(source)

let storeEnvironment: Environment | null = null

export const createEnvironment = (token: string) => {
  if (storeEnvironment) return storeEnvironment
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
            ? 'http://localhost:4000/graphql'
            : `https://${appConfig.skeetApiDomain}/graphql`,
      }),
    ]),
  })
  return storeEnvironment
}
