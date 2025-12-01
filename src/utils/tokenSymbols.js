const SYMBOL_OVERRIDES = {
  stgusdc: 'USDC',
}

export function getTokenDisplaySymbol(symbol) {
  if (!symbol || typeof symbol !== 'string') {
    return symbol
  }
  const normalized = symbol.trim()
  const override = SYMBOL_OVERRIDES[normalized.toLowerCase()]
  return override ?? normalized
}
