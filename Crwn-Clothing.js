import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./Crwn-Clothing/Crwn-Clothing-github/App.jsx";
import { CartProvider } from "./Crwn-Clothing/Crwn-Clothing-github/context/cart.context.jsx";

import { CategoriesProvider } from "./Crwn-Clothing/Crwn-Clothing-github/context/categories.context.jsx";
import { UserProvider } from "./Crwn-Clothing/Crwn-Clothing-github/context/user.context.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UserProvider>
      <CategoriesProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CategoriesProvider>
    </UserProvider>
  </BrowserRouter>
);
