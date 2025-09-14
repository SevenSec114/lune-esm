/**
 * This library provides Julian date conversion helpers
 *
 * Author: Ryan Seys (https://github.com/ryanseys)
 */

function fromDate(date) {
  return date.getTime() / 86400000 + 2440587.5
}

function toDate(julian) {
  return new Date((julian - 2440587.5) * 86400000)
}

export { fromDate, toDate }