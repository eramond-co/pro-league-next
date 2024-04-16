"use client";

// import { NextUIProvider } from "@nextui-org/react";
import { store } from "./store";
import { Provider } from "react-redux";

export const Providers: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  return (
    <Provider store={store}>
      {children}
      {/* {children} */}
    </Provider>
  );
};
