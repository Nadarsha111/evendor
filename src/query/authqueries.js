/* eslint-disable no-useless-catch */
import {
  emailresend,
  forgotpassword,
  login,
  register,
  resetpass,
} from "../constants/contants";
import { makeRequest } from "../makeRequest";

export const signupUser = async ({ username, email, password, lastname }) => {
  try {
    const { data } = await makeRequest.post(register, {
      username,
      email,
      password,
      lastname,
    });
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

export const resendEmail = async ({ email }) => {
  try {
    const { data } = await makeRequest.post(emailresend, {
      email,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const signinUser = async ({ email, password }) => {
  try {
    const { data } = await makeRequest.post(login, {
      identifier: email,
      password,
    });
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

export const forgotPassword = async ({ email }) => {
  try {
    const { data } = await makeRequest.post(forgotpassword, {
      email,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const resetPassword = async ({
  code,
  password,
  passwordConfirmation,
}) => {
  try {
    const { data } = await makeRequest.post(resetpass, {
      code,
      password,
      passwordConfirmation,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

//sends only to verified email
// export const forgotPassword = async ({ email }) => {
//   try {
//     const { data } = await makeRequest.post(emailresend, {
//       email,
//     });
//     console.log(data);
//     return data;
//   } catch (error) {
//     if (error.response.data.error.message === "Already confirmed") {
//       const { data } = await makeRequest.post(forgotpassword, {
//         email,
//       });
//       return data;
//     }else{
//       console.log(error);
//       throw error;
//     }
//   }
// };
