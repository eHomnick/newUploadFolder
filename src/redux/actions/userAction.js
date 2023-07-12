

function convertActionNameToType(actionName) {
    return actionName.replace(/([A-Z])/g, "_$1").toUpperCase();
}
// setUserName,value
// action.setUserNmae(value)
// export const actions = new Proxy(
//     {},
//     {
//         // prop="updateUser"
//         get: function (target, prop) {
//             if (target[prop] === undefined)
//                 //args=value
//                 return function (args) {
//                     return {
//                         // 'UPDATE_USER'
//                         type: convertActionNameToType(prop),
//                         payload: args
//                     };
//                 };

//             else return target[prop];
//         }
//     }
// );

export  function addUser(newUser) {
    return { type: 'ADD_USER', payLoad: newUser }
}


export  function setAllOptions(options) {
    return { type: 'SET_ALL_OPTIONS', payLoad: options }
}