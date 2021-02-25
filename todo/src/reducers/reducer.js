export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const initialState = {
  todos: [
    { todo: "Mow the lawn", completed: false, id: 12345 },
    { todo: "Take out trash", completed: false, id: 67890 },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    // action.type is the type or name of the action
    // action.payload is the data
    case ADD_TODO:
      console.log("state: ", state);
      return {
        ...state,
        todos: [
          ...state.todos,

          { todo: action.payload, completed: false, id: Date.now() },
        ],
      };
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...state,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      });
    case "CLEAR_COMPLETED":
      return {...state, todos: state.todos.filter((todo) => !todo.completed)}
    default:
      return state;
  }
};
