import store from "../store";
import types from "../types";
import { SIGNUP, LOGIN } from "../../configs/urls";
import { apiPost } from "../../utils/utils";


const { dispatch } = store;

// export const logIN = (data) => {
//     dispatch({
//         type: types.LOGIN,
//         payload: data,

//     })
// }

const saveUserData = (data) => {
    dispatch({
      type: types.LOGIN,
      payload: data,
    });
  };
  

export const Logout = () => {
    dispatch({
        type: types.LOGOUT
    })
}

export function signUp(data) {
    console.log("user data****************", data)
    return apiPost(SIGNUP, data)
}

export const login = (data) => {
    console.log(data, 'the given data')
    return new Promise((resolve, reject) => {
      apiPost(LOGIN, data)
        .then((res) => {
          saveUserData(res.data)
          resolve(res)
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
// export const login = (data) => {
//     console.log(data, 'the given data')
//     return new Promise((resolve, reject) => {
//       apiPost(logIN, data)
//         .then((res) => {
//           saveUserData(res.data)
//           resolve(res)
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   };


