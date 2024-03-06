import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Applicants from "./components/Applicants/Applicants.jsx";
import ApplicantDetail from './components/Applicants/ApplicantDetails.jsx'
import "./index.css";
import ContentWrap from "./components/contentWrap.jsx";
import Formulario from "./components/Formulario.jsx";
import Professions from "./components/Professions/Professions.jsx";

const app = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <div className="text-2xl text-red-800">upps un error</div>
    ),
    children: [
      {index: true, element: <ContentWrap />},
      {
        path: 'applicants',
        element: <Applicants />
       },
       {
        path: 'applicants/:idApplicant',
        element: <ApplicantDetail />
       },
       {
        path: 'company',
        element: <div>companias</div>,
       },
       {
        path: 'professions',
        element: <Professions />,
       },
       {
        path: 'form',
        element: <Formulario />
       },
       {
        path: 'contact',
        element: <div>contacto</div>
       }
    ],
     
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={app} />
  </React.StrictMode>
);
