"use client";

import store from "@/store/store";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <div className="max-w-screen-lg mt-10 mx-auto">{children}</div>;
    </Provider>
  );
};

export default layout;
