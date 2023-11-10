import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeRequestWithToken } from "../makeRequest";
import { resetCart } from "../redux/slice/cartControl";
import { clearToken } from "../redux/slice/authReducer";
const useUpdatecart = () => {
  const dispatch = useDispatch();
  const { cartId, products } = useSelector((state) => state.cart);
  const jwt = useSelector((state) => state.auth.user.jwt);
  useEffect(() => {
    if (!jwt) {
      return;
    }
    if (jwt) {
      //check if jwt is expired
      const jwtExp = JSON.parse(atob(jwt.split(".")[1])).exp;
      const dateNow = new Date();

      if (dateNow.getTime() > jwtExp * 1000) {
        dispatch(clearToken());
        dispatch(resetCart());
      } else {
        const updateCart = async () => {
          const { data } = await makeRequestWithToken(jwt).put(
            `/carts/${cartId}`,
            {
              data: {
                mycart: products,
              },
            }
          );
          return data;
        };
        updateCart();
      }
    }
  }, [cartId, products, jwt, dispatch]);

  return { products, cartId };
};

export default useUpdatecart;
