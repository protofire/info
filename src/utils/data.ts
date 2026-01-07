import {
  TOKEN_OVERRIDES,
  WRAPPED_NATIVE_TOKEN_ADDRESS,
  WRAPPED_NATIVE_TOKEN_SYMBOL,
  NATIVE_TOKEN_SYMBOL,
} from '../constants'

interface BasicData {
  token0?: {
    id: string
    name: string
    symbol: string
  }
  token1?: {
    id: string
    name: string
    symbol: string
  }
}

// Merge chain-specific overrides with wrapped native token override
// keys are lowercase token addresses
const MERGED_TOKEN_OVERRIDES: { [address: string]: { name: string; symbol: string } } = {
  ...TOKEN_OVERRIDES,
  [WRAPPED_NATIVE_TOKEN_ADDRESS]: {
    name: `${NATIVE_TOKEN_SYMBOL} (Wrapped)`,
    symbol: WRAPPED_NATIVE_TOKEN_SYMBOL,
  },
}

// override tokens with incorrect symbol or names
export function updateNameData(data: BasicData): BasicData | undefined {
  if (data?.token0?.id && Object.keys(MERGED_TOKEN_OVERRIDES).includes(data.token0.id)) {
    data.token0.name = MERGED_TOKEN_OVERRIDES[data.token0.id].name
    data.token0.symbol = MERGED_TOKEN_OVERRIDES[data.token0.id].symbol
  }

  if (data?.token1?.id && Object.keys(MERGED_TOKEN_OVERRIDES).includes(data.token1.id)) {
    data.token1.name = MERGED_TOKEN_OVERRIDES[data.token1.id].name
    data.token1.symbol = MERGED_TOKEN_OVERRIDES[data.token1.id].symbol
  }

  return data
}
