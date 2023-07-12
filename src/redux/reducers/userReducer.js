import { produce } from 'immer'

const initialState = {
    user: {},
    loginUser:false,
    allOptions:[]

}

const reducer = produce((state, action) => {
    switch (action.type) {
        case 'UPDATE_USER':
            { state.user = action.payLoad 
            console.log(state.user) }
            break;
            case 'ADD_USER':
              {
                  state.user = action.payLoad
                  state.loginUser = true;
  
                  console.log(state.user, "state addusertoredux");
              }break;
              
              case 'SET_ALL_OPTIONS':
                {state.allOptions=action.payLoad}
    }
}, initialState)

export default reducer

// import { current, produce } from 'immer'
// import createReducer from './ReducerUtils'

// const initialState = {
//   user:{},
//   currentUser:{

//   },
//   loginUser:false


// }


// const userReducer = {
 
//     updateUser(state, action) {
//         state.user = action.payload
//     }

// }

// export default produce((state, action) => createReducer(state, action, userReducer), initialState)
