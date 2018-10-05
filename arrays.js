var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(arr, el) {
  var arr = [1, 2, 3]
  var el
  arr.unshift(el)
  return arr
}

function destructivelyAddElementToBeginningOfArray(arr, el) {
  var arr = [1, 2, 3]
  var el = 4
  arr = [el, ...arr]
  return arr
}

function addElementToEndOfArray(arr, el) {
  var arr = [1, 2, 3]
  var el = 4
  arr = [...arr, el]
  return arr
}

function destructivelyAddElementToEndOfArray(arr, el) {
  var arr = [1, 2, 3]
  var el = 2
  arr.unshift(el)
  return arr
}

function accessElementInArray() {
  var arr = [1, 2, 3]
  return arr[0]
}

function destructivelyRemoveElementFromBeginningOfArray() {
  var arr = [1, 2, 3]
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray() {
  var arr = [1, 2, 3]
  arr = arr.slice()
}

function destructivelyRemoveElementFromEndOfArray() {
  var things = [1, 2, 3]
  things.pop()
  return things
}

function removeElementFromEndOfArray() {
  var things = [1, 2, 3]
  things = things.slice(0, things.length - 1)
  return things
}
