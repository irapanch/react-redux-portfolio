import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalSyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import "modern-normalize";
// import "flowbite-react"
import { BrowserRouter } from "react-router-dom";
// import ContextProvider from "./context/ContextProvider";

import ThemeProviderContext from "./context/ThemeProviderContext.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import { Provider } from "react-redux";
// import { store } from "redux/store";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter basename="/react-redux-portfolio">
    <ThemeProviderContext>
    <AuthProvider>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
      </Provider>
   
    </AuthProvider>
      
    </ThemeProviderContext>
   
    </BrowserRouter>
    <ToastContainer autoClose={1000} />
    <GlobalSyles />
  </ThemeProvider>
//   <ThemeProvider theme={theme}>
//   <ContextProvider>
//     <ThemeProviderContext>
//     <App />
//     </ThemeProviderContext>
 
//   </ContextProvider>
//   <ToastContainer autoClose={1000} />
//   <GlobalSyles />
// </ThemeProvider>
);
