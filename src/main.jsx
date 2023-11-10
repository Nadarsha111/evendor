import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css"; // Weight 300
import "@fontsource/poppins/600.css"; // Weight 600
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store,persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={new QueryClient()}>
        <Provider store={store}> 
        <PersistGate loading={"loading"} persistor={persistor}>
          <App />
        </PersistGate>
        </Provider>
        <ReactQueryDevtools initialIsOpen={false} position="right" />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
