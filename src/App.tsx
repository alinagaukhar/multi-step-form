import React, { useState } from "react";
import "./App.scss";
import Sidebar from "./components/SideBar/Sidebar";
import MyForm from "./components/Form/Form";
import { StepContextProvider } from "./context/stepContext";
import { FormContextProvider } from "./context/formContext";

function App() {
  return (
    <StepContextProvider>
      <FormContextProvider>
        <div className="App">
          <Sidebar />
          <MyForm />
        </div>
      </FormContextProvider>
    </StepContextProvider>
  );
}

export default App;
