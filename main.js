/********************
 * OPTIONAL HELPERS *
 ********************/

/*

These functions will greatly simplify things if you want to write them. They are
implementations of map and filter, plus a very simple sort. If you can do them first, they will make the following functions a lot easier, but they aren't super easy
concepts, so if you want to skip them, you can.

They'll also become easier later once you've written a few of the iteration functions and seen how they can be generalized. Those iteration functions in the last section are good practice for writing these!

*/

const map = function(arr, func) {
  const newArr = [];
  arr.forEach(function(arr) {
    newArr.push(func(arr))
  });
  return newArr

}

const filter = function(arr, func) {
  const newArr = [];
  arr.forEach(function(arr){
    if (func(arr)===true) {
      newArr.push(arr)
    }
  })
    return newArr
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
const isNotComplete = function (todos) {
  return !isComplete(todos)
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

const names = (todos) => todos.map(todo => todo.text)
  // const newArr = []
  // todos.forEach(text =>newArr.push(getTodoName(text))) 
  // return newArr
 

  // return map(todos, getTodoName)
  

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

const justNotComplete = (todos) => todos.filter((todos) => !todos.complete)
  // const newArr = [];
  // if (todos.complete === false){
  // } newArr.push(todos)
  // todos.forEach(notdone => newArr.push());
  // return newArr


const justComplete = (todos) => todos.filter((todos) => todos.complete)

const priority2Only = (todos) => todos.filter ((todos) => todos.priority === 2)
 
const priority1Only = (todos) =>todos.filter((todos)=> todos.priority === 1)

const notCompleteFirst = (todos) => twoPileSort(todos, (todos)=> todos.complete === false)

const priority2First = (todos) => twoPileSort(todos, (todos)=> todos.priority === 2)
  




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