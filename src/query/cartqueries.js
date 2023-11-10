import { getuser } from "../constants/contants";
import { makeRequestWithToken } from "../makeRequest";


export const getCart = async (token) => {
  const { data } = await makeRequestWithToken(token).get(getuser);

  return data;
};


