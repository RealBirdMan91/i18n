import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./utils/i18n";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<h1>loading....</h1>}>
      <App />
    </Suspense>
  </React.StrictMode>
);
