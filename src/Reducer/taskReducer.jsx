export const initialState = JSON.parse(
  window.localStorage.getItem("tasks") || "[]"
);


export const updateLocalStorage = (state) => {
  window.localStorage.setItem("tasks", JSON.stringify(state))
}

export default function taskReducer(state, action){
  const {type, payload} = action;

  switch(type){
    case "ADD_TASK": {

      const newState = [...state, 
        {
          id: crypto.randomUUID(),
          text: payload.text, 
        }];
        updateLocalStorage(newState)
        return newState;

    }

    case "TASK_COMPLETED": {

       const newTask = state.map((task) =>
        task.id === payload.id ? {...task, completed: !task.completed} : task)
       updateLocalStorage(newTask);
       return newTask;

    }
       

    case "DELETE_TASK":
      {
        const newTask = state.filter((task) => task.id !== payload.id)

        updateLocalStorage(newTask);
        return newTask;
      }
      

    case "EDIT_TASK": {
      const newTask = state.map((task) =>
        task.id === payload.id 
        ? {...task, text: payload.text}
        : task
      )

      updateLocalStorage(newTask);
      return newTask
    }
    

      default:
      return state;
    }
}