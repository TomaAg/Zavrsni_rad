import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/homePage/homePage";
import IndexPage from "./components/indexPage/indexPage";
import StudentJobPage from "./components/studentJobPage/studentJobPage";
import "./components/cssAll.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/indexPage" element={<IndexPage />} />
        <Route path="/studentJobPage" element={<StudentJobPage />} />
      </Routes>
    </>
  );
}

export default App;
