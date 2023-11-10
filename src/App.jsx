import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Products from "./pages/productpages/Products";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Singleproduct from "./pages/productpages/Singleproduct";
import { Signup } from "./pages/Auth/Signup/SignUp";
import SignIn from "./pages/Auth/Signin/SignIn";
import Emailverify from "./pages/Auth/Emailverification/Emailverify";
import VerificationSuccess from "./pages/Auth/VerificationSucess/VerificationSuccess";
import ForgotPass from "./pages/Auth/ForgotPass/ForgotPass";
import PassReset from "./pages/Auth/PassReset/PassReset";
import EmailSend from "./pages/Auth/EmailSendSuccesfully/EmailSend";
import Gifts from "./pages/productpages/Gifts";
import Frames from "./pages/productpages/Frames";
import WeddingGift from "./pages/productpages/WeddingGift";
import Hamper from "./pages/productpages/Hamper";
import Pagination from "./components/ProductList/Pagination"
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/products", element: <Products /> },
    { path: "/contact", element: <Contact /> },
    { path: "/cart", element: <Cart /> },
    { path: "/product/:id/:title", element: <Singleproduct /> },
    { path: "/signup", element: <Signup /> },
    { path: "/signin", element: <SignIn /> },
    { path: "/email-verify", element: <Emailverify /> },
    { path: "/verification-success", element: <VerificationSuccess /> },
    { path: "/forgot-password", element: <ForgotPass /> },
    { path: "/reset-password", element: <PassReset /> },
    { path: "/email-sent-successfully", element: <EmailSend /> },
    { path: "/gift-box", element: <Gifts /> },
    { path: "/photo-frames", element: <Frames /> },
    { path: "/wrappingsheet", element: <WeddingGift /> },
    { path: "/hamper", element: <Hamper /> },
    {path:"/pagination",element:<Pagination/>}
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
