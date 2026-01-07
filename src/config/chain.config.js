/**
 * Chain Configuration File
 *
 * This is the single source of truth for all chain-specific values.
 * When adding support for a new chain, copy this file and update all values.
 *
 * See NEW_CHAIN_SETUP.md for detailed instructions.
 */

const chainConfig = {
  // ═══════════════════════════════════════════════════════════════════════════
  // NETWORK IDENTITY
  // ═══════════════════════════════════════════════════════════════════════════

  /** Chain display name (shown in UI header) */
  name: 'Zircuit',

  /** Subgraph path identifier (used in GraphQL endpoint URLs) */
  shortname: 'zircuit-mainnet',

  // ═══════════════════════════════════════════════════════════════════════════
  // ENDPOINTS & URLS
  // ═══════════════════════════════════════════════════════════════════════════

  /** Graph node base URL for subgraph queries */
  graphNodeUrl: 'https://graph.zircuit-swap.w3us.site',

  /** Block explorer base URL (no trailing slash) */
  blockExplorerUrl: 'https://explorer.zircuit.com',

  /** Block explorer display name for UI links */
  blockExplorerName: 'Zircuit Explorer',

  /** Swap interface URL for trade/liquidity buttons */
  swapLink: 'https://staging.zircuit-swap.w3us.site',

  /** Canonical URL for SEO meta tags */
  websiteUrl: 'https://v2-info.staging.zircuit-swap.w3us.site',

  // ═══════════════════════════════════════════════════════════════════════════
  // CONTRACTS - CRITICAL: Must be updated for each chain
  // ═══════════════════════════════════════════════════════════════════════════

  /** UniswapV2Factory contract address */
  factoryAddress: '0x712ebc47689c0d4bac7dda9c7b31bbf7361b6fce',

  /**
   * Wrapped native token address (WETH equivalent)
   *
   * CRITICAL: This address is used in:
   * - Swap link generation (converts to native token symbol in URLs)
   * - Price calculations
   * - Token logo display (shows native token logo)
   * - Token name overrides
   *
   * Must be updated for each chain!
   * Examples:
   * - Ethereum: 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
   * - BSC: 0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c (WBNB)
   * - Polygon: 0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270 (WMATIC)
   */
  wrappedNativeTokenAddress: '0x4200000000000000000000000000000000000006',

  /** Symbol for wrapped native token (WETH, WBNB, WMATIC, etc.) */
  wrappedNativeTokenSymbol: 'WETH',

  /** Symbol for native token displayed in UI (ETH, BNB, MATIC, etc.) */
  nativeTokenSymbol: 'ETH',

  // ═══════════════════════════════════════════════════════════════════════════
  // BRANDING
  // ═══════════════════════════════════════════════════════════════════════════

  /** Primary brand color (hex) - used in theme, charts, UI elements */
  primaryColor: '#0cb259',

  /** Browser tab/window title */
  pageTitle: 'Zircuit Swap Info',

  // ═══════════════════════════════════════════════════════════════════════════
  // TOKEN DISPLAY OVERRIDES
  // Override token names/symbols returned from subgraph
  // Keys should be lowercase addresses
  // ═══════════════════════════════════════════════════════════════════════════

  tokenOverrides: {
    // Wrapped native token display name
    '0x4200000000000000000000000000000000000006': {
      name: 'Wrapped Ether',
      symbol: 'WETH',
    },
    // Add other token overrides as needed:
    // '0x1416946162b1c2c871a73b07e932d2fb6c932069': {
    //   name: 'Energi',
    //   symbol: 'NRGE',
    // },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TOKEN/PAIR MANAGEMENT
  // Blacklists and overrides for filtering/tracking
  // ═══════════════════════════════════════════════════════════════════════════

  /** Tokens hidden from overview lists (lowercase addresses) */
  tokenBlacklist: [
    // Add problematic tokens here
    // '0x495c7f3a713870f68f8b418b355c085dfdc412c3',
  ],

  /** Pairs hidden from overview lists (lowercase addresses) */
  pairBlacklist: [
    // Add problematic pairs here
    // '0xb6a741f37d6e455ebcc9f17e2c16d0586c3f57a5',
  ],

  /** Custom warning messages for specific tokens */
  blockedWarnings: {
    // '0xf4eda77f0b455a12f3eb44f8653835f377e36b76':
    //   'This token has been flagged for trademark violations.',
  },

  /** Tokens that cause fee calculation errors */
  feeWarningTokens: [
    // '0xd46ba6d942050d489dbd938a2c909a5d5039a161',
  ],

  /** Pairs to force-track despite subgraph indexing delays */
  trackedOverridesPairs: [
    // '0x9928e4046d7c6513326ccea028cd3e7a91c7590a',
  ],

  /** Tokens to force-track (all pairs containing these tokens) */
  trackedOverridesTokens: [
    // '0x956f47f50a910163d8bf957cf5846d573e7f87ca',
  ],
}

export default chainConfig
