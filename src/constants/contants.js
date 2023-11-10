export const register = "/auth/local/register";
export const emailresend = "auth/send-email-confirmation";
export const login = "/auth/local";
export const forgotpassword = "/auth/forgot-password";
export const resetpass = "/auth/reset-password";
export const getuser = "/users/me?populate=*";

export const home = "/products?pagination[limit]=16&&populate=*";
export const homecat =
  "/catagories?fields[0]=title&fields[1]=description&fields[2]=route&populate[0]=img";

export const gift = "catagories/1?&fields[0]=title&populate=products.img";

export const frames = "catagories/2?&fields[0]=title&populate=products.img";
export const hamper = "catagories/3?&fields[0]=title&populate=products.img";
export const wrappingsheet =
  "catagories/4?&fields[0]=title&populate=products.img";
export const products = "/products?populate=*";

export const product = "/products/${id}?populate=*";