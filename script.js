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

// Status variables
let secret = 0
let tries = 3

/**
 * start
 * reset game
 * @returns {string} 
 */
function start () {
  tries = 3
  secret = randomInt(1, 10)
  $body.className = ''
  $response.textContent = 'GUESS A NUMBER'

  return 'Guess a number between 1 and 10.'
}

/**
 * guess
 * takes a num and compares it with the secret number
 * if guess matches, player wins
 * else if tries remaining, response high/low
 * else, player loses
 * @param {int} - guess between 1 and 10 
 * @returns {string}
 */
function guess (num) {
  tries--

  if (num === secret) {
    $body.className = 'win'
    $response.textContent = 'YOU WIN!'
    return 'You win.'
  } else if (tries > 0) {
    if (num < secret) {
      $response.textContent = 'TOO LOW!'
      $body.className = 'low'
    } else {
      $response.textContent = 'TOO HIGH!'
      $body.className = 'high'
    }

    return 'Try Again.'
  }

  $body.className = 'lose'
  $response.textContent = 'YOU LOSE!'
  return `You lose. The number was ${secret}.`
}

start()

