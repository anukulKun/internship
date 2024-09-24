import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { TodayTodo, ErrorPage } from "./routes/index.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Important from "./routes/Important.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/today-tasks" />} />
        <Route path="today-tasks" element={<TodayTodo />} />
        <Route path="important-tasks" element={<Important />} />
        <Route path="all-tasks" element={<div>Page for all tasks</div>} />
        <Route
          path="planned-tasks"
          element={<div>Page for planned tasks</div>}
        />
        <Route
          path="assigned-tasks"
          element={<div>Page for assigned tasks</div>}
        />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
