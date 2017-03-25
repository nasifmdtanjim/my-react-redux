/**
 * next todo's id
 * @type {Number}
 */
let nextTodoId = 0;


//------------------ action types ------------------//

/**
 * action types
 * @type {String}
 */
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';


/**
 * visibility filters
 * @type {Object}
 */
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};


//------------------ action creators ------------------//

/**
 * add a todo
 * @param  {String} todo todo
 * @return {Object} add todo action
 */
export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    todo: todo
  };
}


/**
 * toggle a todo
 * @param  {Number} id todo's id
 * @return {Object} toggle todo action
 */
export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  }
}


/**
 * set visibility filter
 * @param  {String} filter filter
 * @return {Object} set visibility filter action
 */
export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
}
