import { getTokenDisplaySymbol } from './tokenSymbols'

/**
 * Priority list for base tokens that should appear first in pair names.
 * Tokens earlier in the list have higher priority.
 */
const BASE_TOKEN_PRIORITY = ['WFLOW', 'WETH', 'USDC', 'USDT', 'DAI', 'WBTC']

/**
 * Formats a pair name with a deterministic ordering.
 * If one token is in the priority list, it appears first.
 * If both or neither are in the priority list, they are ordered alphabetically.
 * 
 * @param {string} token0Symbol - Symbol of the first token
 * @param {string} token1Symbol - Symbol of the second token
 * @param {string} separator - Separator between token symbols (default: '-')
 * @returns {string} Formatted pair name (e.g., 'WFLOW-USDF')
 */
export function formatPairName(token0Symbol, token1Symbol, separator = '-') {
  if (!token0Symbol || !token1Symbol) {
    return ''
  }

  // Get display symbols (applies any symbol overrides)
  const displaySymbol0 = getTokenDisplaySymbol(token0Symbol)
  const displaySymbol1 = getTokenDisplaySymbol(token1Symbol)

  // Find priority indices (-1 if not in list)
  const priority0 = BASE_TOKEN_PRIORITY.indexOf(displaySymbol0.toUpperCase())
  const priority1 = BASE_TOKEN_PRIORITY.indexOf(displaySymbol1.toUpperCase())

  // Determine ordering
  let firstSymbol, secondSymbol

  if (priority0 !== -1 && priority1 !== -1) {
    // Both tokens are in priority list - use the one with higher priority (lower index)
    if (priority0 < priority1) {
      firstSymbol = displaySymbol0
      secondSymbol = displaySymbol1
    } else {
      firstSymbol = displaySymbol1
      secondSymbol = displaySymbol0
    }
  } else if (priority0 !== -1) {
    // Only token0 is in priority list
    firstSymbol = displaySymbol0
    secondSymbol = displaySymbol1
  } else if (priority1 !== -1) {
    // Only token1 is in priority list
    firstSymbol = displaySymbol1
    secondSymbol = displaySymbol0
  } else {
    // Neither token is in priority list - order alphabetically
    if (displaySymbol0.localeCompare(displaySymbol1) <= 0) {
      firstSymbol = displaySymbol0
      secondSymbol = displaySymbol1
    } else {
      firstSymbol = displaySymbol1
      secondSymbol = displaySymbol0
    }
  }

  return `${firstSymbol}${separator}${secondSymbol}`
}
