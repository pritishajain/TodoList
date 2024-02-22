import React from "react";
import { Routes, Route } from "react-router-dom";
import TodoDisplay from "./to-do-display";
import List from "./list";
import SignUp from "./signup";
import Login from "./login";

const Main = () => {

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<TodoDisplay />} />
        <Route path="/complete" element={<List />} />
        <Route path="/active" element={<List />} />
        <Route path="/recycle" element={<List />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </React.Fragment>
  );
};

export default Main;
