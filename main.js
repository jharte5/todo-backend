/********************
 * OPTIONAL HELPERS *
 ********************/

/*

These functions will greatly simplify things if you want to write them. They are
implementations of map and filter, plus a very simple sort. If you can do them first, they will make the following functions a lot easier, but they aren't super easy
concepts, so if you want to skip them, you can.

They'll also become easier later once you've written a few of the iteration functions and seen how they can be generalized. Those iteration functions in the last section are good practice for writing these!

*/

const map = function() {

}

const filter = function() {

}

const twoPileSort = function(arr, func) {
  const pass = []
  const fail = []
  arr.forEach(function(arr){
    if (func(arr)) {
      pass.push(arr)
    } else {
      fail.push(arr)
    }
  })
  return [...pass, ...fail]  
}



/********************
 * HELPER FUNCTIONS *
 ********************/

const getTodoName = function(todos) {
  return todos.text

}

const getCompleteness = function (todos) {
  return todos.complete
}

const getPriority = function (todos) {
  return todos.priority
}

const isComplete = function(todos) {
  // const newArr = []
  // todos.forEach(todos =>newArr.getCompleteness(todos) ? newArr.push(todos) : '')
  // return newArr
  // if (todos.complete === true) {
    return todos.complete
  // }
}

const isHighPriority = function(todos) {
  if (todos.priority === 1) {
    return false
  } else if (todos.priority === 2) {
    return true
  }

}

const todoNameAndPriority = function (todos) {
  // return getTodoName() '+' getPriority()
} 

/***********************
 * ITERATION FUNCTIONS *
 ***********************/

const names = function(todos) {
  const newArr = []
  todos.forEach(text =>newArr.push(getTodoName(text))) 
  return newArr
  
}

const namesAndPriorities = function(todos) {
  const newArr = [];
  todos.forEach(name => {
  if(isHighPriority(name)) {
      newArr.push(name.text + ' - High')
    } else  {
      newArr.push(name.text + ' - Low')
    } 
  })
    
    //  newArr.push(getTodoName(name) + isHighPriority(name)))
  
  return newArr

}

const justNotComplete = function(todos) {
  const newArr = [];
  if (todos.complete === false){
  } newArr.push(todos)
  todos.forEach(notdone => newArr.push())
  
}

const justComplete = function(todos) {
  const newArr = []
  todos.forEach(text =>newArr.push(getCompleteness(text))) 
  return newArr
  
}

const priority2Only = function(todos) {
  return filter (todos, isHighPriority)

}

const priority1Only = function() {
  return filter(todos, (arr) => arr.priority === 1)
}

const notCompleteFirst = function() {
  return twoPileSort(todos, (arr) => arr.complete === false)
}

const priority2First = function() {
  return twoPileSort(todos, (arr)=> arr.priority === 2)
  
}



module.exports = {
  map,
  filter,
  twoPileSort,
  getTodoName,
  getCompleteness,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
  notCompleteFirst,
  priority2First,
}