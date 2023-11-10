import {
  wrappingsheet,
  frames,
  gift,
  hamper,
  home,
  homecat,
  products,
} from "../constants/contants";
import { makeRequest } from "../makeRequest";

/* eslint-disable no-useless-catch */
export const homeproducts = async () => {
  try {
    const { data } = await makeRequest.get(home);
    return data.data;
  } catch (error) {
    throw error;
  }
};

export const homecatagories = async () => {
  try {
    const { data } = await makeRequest.get(homecat);
    return data.data;
  } catch (error) {
    throw error;
  }
};

export const giftpage = async () => {
  try {
    const { data } = await makeRequest.get(gift);
    return data.data.attributes.products.data;
  } catch (error) {
    throw error;
  }
};
export const framespage = async () => {
  try {
    const { data } = await makeRequest.get(frames);
    return data.data.attributes.products.data;
  } catch (error) {
    throw error;
  }
};
export const hamperpage = async () => {
  try {
    const { data } = await makeRequest.get(hamper);
    return data.data.attributes.products.data;
  } catch (error) {
    throw error;
  }
};

export const wrappingsheetPage = async () => {
  try {
    const { data } = await makeRequest.get(wrappingsheet);
    return data.data.attributes.products.data;
  } catch (error) {
    throw error;
  }
};

export const productpage = async () => {
  try {
    const { data } = await makeRequest.get(products);
    console.log(data);
    return data.data;
  } catch (error) {
    throw error;
  }
};

export const sigleproductpage = async (id) => {
  try {
    const { data } = await makeRequest.get(`/products/${id}?populate=*`);
    return data.data;
  } catch (error) {
    throw error;
  }
};
