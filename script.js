/**
* randomInt:
* Returns a random positive integer from min (inclusive) to max (inclusive)
* @param {int} min - the smallest possible number
* @param {int} max - largest possible number
* @returns {int} - random number
* @src https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/
function randomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Retrieve HTML Elements
const $body = document.body
const $response = document.getElementById('response')
