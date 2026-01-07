import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { CHAIN_SHORTNAME } from '../constants'
import chainConfig from '../config/chain.config'
import { validateUrl } from '../config/validators'

export const GRAPH_NODE_URL = validateUrl(
  process.env.REACT_APP_GRAPH_NODE_URL ?? chainConfig.graphNodeUrl,
  'GRAPH_NODE_URL'
)

// TODO: revert
// Temporary measure until migrated fully
const subgraphName = GRAPH_NODE_URL === `https://graph-node.reservoir.tools` ? 'v2-subgraph' : 'uniswap-v2'
const blockSubgraphName = GRAPH_NODE_URL === `https://graph-node.reservoir.tools` ? 'blocks-subgraph' : 'blocks'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: `${GRAPH_NODE_URL}/subgraphs/name/${CHAIN_SHORTNAME}/${subgraphName}`,
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
    uri: `${GRAPH_NODE_URL}/subgraphs/name/${CHAIN_SHORTNAME}/${blockSubgraphName}`,
  }),
  cache: new InMemoryCache(),
})
