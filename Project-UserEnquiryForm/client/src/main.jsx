import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import EnquiryForm from "./EnquiryForm.jsx";

import "sweetalert2/src/sweetalert2.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EnquiryForm />
  </StrictMode>
);
