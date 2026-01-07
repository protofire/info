import chainConfig from '../config/chain.config'
import { validateUrl, validateAddress, validateAddressArray } from '../config/validators'

// ═══════════════════════════════════════════════════════════════════════════
// Chain-specific configuration (from chain.config.js with env var overrides)
// ═══════════════════════════════════════════════════════════════════════════

export const BLOCK_EXPLORER_URL = validateUrl(
  process.env.REACT_APP_BLOCK_EXPLORER_URL || chainConfig.blockExplorerUrl,
  'BLOCK_EXPLORER_URL'
)

export const BLOCK_EXPLORER_NAME = process.env.REACT_APP_BLOCK_EXPLORER_NAME || chainConfig.blockExplorerName

export const CHAIN_SHORTNAME = process.env.REACT_APP_CHAIN_SHORTNAME || chainConfig.shortname

export const FACTORY_ADDRESS = validateAddress(
  process.env.REACT_APP_FACTORY_ADDRESS || chainConfig.factoryAddress,
  'FACTORY_ADDRESS'
)

export const SWAP_LINK = validateUrl(process.env.REACT_APP_SWAP_LINK || chainConfig.swapLink, 'SWAP_LINK')

// Wrapped native token (WETH equivalent) - CRITICAL for swap links
export const WRAPPED_NATIVE_TOKEN_ADDRESS = validateAddress(
  chainConfig.wrappedNativeTokenAddress,
  'WRAPPED_NATIVE_TOKEN_ADDRESS'
).toLowerCase()

export const WRAPPED_NATIVE_TOKEN_SYMBOL = chainConfig.wrappedNativeTokenSymbol
export const NATIVE_TOKEN_SYMBOL = chainConfig.nativeTokenSymbol

// Chain identity
export const CHAIN_NAME = chainConfig.name
export const WEBSITE_URL = validateUrl(chainConfig.websiteUrl, 'WEBSITE_URL')

// Branding
export const PRIMARY_COLOR = chainConfig.primaryColor

// ═══════════════════════════════════════════════════════════════════════════
// Token/Pair management (from chain.config.js)
// ═══════════════════════════════════════════════════════════════════════════

// Token display overrides
export const TOKEN_OVERRIDES = chainConfig.tokenOverrides || {}

// Blacklists (normalized to lowercase for case-insensitive comparison)
export const TOKEN_BLACKLIST = validateAddressArray(chainConfig.tokenBlacklist || [], 'TOKEN_BLACKLIST')

export const PAIR_BLACKLIST = validateAddressArray(chainConfig.pairBlacklist || [], 'PAIR_BLACKLIST')

export const BLOCKED_WARNINGS = chainConfig.blockedWarnings || {}

export const FEE_WARNING_TOKENS = validateAddressArray(chainConfig.feeWarningTokens || [], 'FEE_WARNING_TOKENS')

export const TRACKED_OVERRIDES_PAIRS = validateAddressArray(
  chainConfig.trackedOverridesPairs || [],
  'TRACKED_OVERRIDES_PAIRS'
)

export const TRACKED_OVERRIDES_TOKENS = validateAddressArray(
  chainConfig.trackedOverridesTokens || [],
  'TRACKED_OVERRIDES_TOKENS'
)

// ═══════════════════════════════════════════════════════════════════════════
// Non-chain-specific constants
// ═══════════════════════════════════════════════════════════════════════════

export const BUNDLE_ID = '1'

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  HALF_YEAR: '6 months',
  ALL_TIME: 'All time',
}

// Token list URLs for warnings on tokens and pairs
export const SUPPORTED_LIST_URLS__NO_ENS = [
  'https://gateway.ipfs.io/ipns/tokens.uniswap.org',
  'https://www.coingecko.com/tokens_list/uniswap/defi_100/v_0_0_0.json',
]

export const UNTRACKED_COPY = 'Derived USD values may be inaccurate without liquid stablecoin or ETH pairings.'
