import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux"; //импортируем Provider и store
import { store } from "./app/store.ts";

createRoot(document.getElementById("root")!).render(
  //передаем через Provider созданный store
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
