import React, { useReducer } from "react";

export default function ReducerHookForm() {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  function formReducer(state, action) {
    return {
        ...state,
        [action.field]:action.value
    }
  }

//   action={
//         field:e.target.name,
//         value:e.target.value
//   }

  const [state, dispatch] = useReducer(formReducer, initialState );

  function handalinput(e){
    dispatch({
        field:e.target.name,
        value:e.target.value
    })
  }
  return (
    <div>
      <h2>Usereducer form</h2>
      <input
        type="text"
        value={state.name}
        name="name"
        onChange={handalinput}
        placeholder="Enter a name"
      />
      <input
        type="email"
        value={state.email}
        name="email"
        onChange={handalinput}
        placeholder="Enter a email"
      />
      <input
        type="password"
        value={state.password}
        name="password"
        onChange={handalinput}
        placeholder="Enter a password"
      />
    </div>
  );
}
