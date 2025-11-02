import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { CHAIN_SHORTNAME } from '../constants'

export const GRAPH_NODE_URL = process.env.REACT_APP_GRAPH_NODE_URL ?? `https://graph.swap.w3us.site`

export const client = new ApolloClient({
  link: new HttpLink({
    uri: `https://graph.swap.w3us.site/subgraphs/name/base-sepolia/uniswap-v2`,
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/index-node/graphql',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const v1Client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const stakingClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/way2rach/talisman',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: `https://graph.swap.w3us.site/subgraphs/name/base-sepolia/blocks`,
  }),
  cache: new InMemoryCache(),
})
