import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <SearchForm />
      <Outlet />
      <p>Footer</p>
    </>
  );
}

export default App;
