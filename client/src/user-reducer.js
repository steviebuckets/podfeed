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



const init = {};

// create object for user
// another for podcasts
// create another red
export default function userReducer(users = init, action) {
    console.log('what does action', action)
    switch (action.type) {
            case 'VERIFY_USER':
                return action.user(action.payload);
        default:
            return users;
    }
}
