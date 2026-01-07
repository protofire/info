import { ethers } from 'ethers'

/**
 * Validates a URL to ensure it uses http(s) protocol
 * @param {string} url - The URL to validate
 * @param {string} fieldName - Name of the field for error messages
 * @returns {string} - Validated URL with trailing slashes removed
 */
export function validateUrl(url, fieldName) {
  if (!url || typeof url !== 'string') {
    throw new Error(`${fieldName} is required`)
  }
  try {
    const parsed = new URL(url)
    if (!['https:'].includes(parsed.protocol)) {
      console.warn(`${fieldName} should use HTTPS for security`)
    }
    if (!['https:', 'http:'].includes(parsed.protocol)) {
      throw new Error(`${fieldName} must use http(s) protocol`)
    }
    // Remove trailing slashes for consistent URL building
    return url.replace(/\/+$/, '')
  } catch (e) {
    if (e.message.includes('is required') || e.message.includes('must use')) {
      throw e
    }
    throw new Error(`Invalid ${fieldName}: ${e.message}`)
  }
}

/**
 * Validates an Ethereum address and returns checksummed version
 * @param {string} address - The address to validate
 * @param {string} fieldName - Name of the field for error messages
 * @returns {string} - Checksummed Ethereum address
 */
export function validateAddress(address, fieldName) {
  if (!address || typeof address !== 'string') {
    throw new Error(`${fieldName} is required`)
  }
  try {
    return ethers.utils.getAddress(address)
  } catch (e) {
    throw new Error(`Invalid ${fieldName}: not a valid Ethereum address`)
  }
}

/**
 * Validates a hex color code
 * @param {string} color - The color to validate (e.g., "#FF0000" or "#F00")
 * @param {string} fieldName - Name of the field for error messages
 * @returns {string} - Validated hex color
 */
export function validateHexColor(color, fieldName) {
  if (!color || typeof color !== 'string') {
    throw new Error(`${fieldName} is required`)
  }
  const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
  if (!hexRegex.test(color)) {
    throw new Error(`${fieldName} must be a valid hex color (e.g., #FF0000 or #F00)`)
  }
  return color
}

/**
 * Validates an array of Ethereum addresses and normalizes to lowercase
 * Invalid addresses are filtered out with a warning
 * @param {string[]} addresses - Array of addresses to validate
 * @param {string} fieldName - Name of the field for error messages
 * @returns {string[]} - Array of validated, lowercase addresses
 */
export function validateAddressArray(addresses, fieldName) {
  if (!Array.isArray(addresses)) {
    throw new Error(`${fieldName} must be an array`)
  }
  return addresses
    .map((addr, i) => {
      if (!addr || typeof addr !== 'string') {
        console.warn(`Invalid address at ${fieldName}[${i}]: empty or not a string`)
        return null
      }
      try {
        // Validate and convert to lowercase for case-insensitive comparison
        return ethers.utils.getAddress(addr).toLowerCase()
      } catch (e) {
        console.warn(`Invalid address at ${fieldName}[${i}]: ${addr}`)
        return null
      }
    })
    .filter(Boolean)
}

/**
 * Validates a non-empty string
 * @param {string} value - The value to validate
 * @param {string} fieldName - Name of the field for error messages
 * @returns {string} - Validated string
 */
export function validateString(value, fieldName) {
  if (!value || typeof value !== 'string' || value.trim() === '') {
    throw new Error(`${fieldName} is required and must be a non-empty string`)
  }
  return value.trim()
}
