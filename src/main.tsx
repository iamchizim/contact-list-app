import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactApp from "./components/ContactApp";
import ContactDetails from "./components/ContactDetails";

const router = createBrowserRouter([
  { path: "/", element: <ContactApp /> },
  { path: "/ContactDetails/:contactId", element: <ContactDetails /> },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
