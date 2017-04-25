//user reducer
// import * as actions from './actions';
// const initialUserState = {};

// export default function userReducer(state = initialUserState, action) {
//   if(action.type === actions.VERIFY_USER) {
//       return [...state, {
//         email: '',
//         password: ''
//       }];
//
//     return state;
//
// }

// create object for user reducer
const init = {};

export default function userReducer(user = init, action) {
    // console.log('My userReducer', action)
    switch (action.type) {
        case 'VERIFY_USER':
            return action.user;
        default:
            return user;
    }
}
