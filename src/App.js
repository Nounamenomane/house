import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./page/HomePage/HomePage";
import LoginPage from "./page/LoginPage/LoginPage";
import DashboardPage from "./page/DashboardPage/DashboardPage";
import CreatePage from "./page/CreatePage/CreatePage";
import Preloader from "./components/preloader/Preloader";
import DetailPage from "./page/detail/DetailPage";
import AboutUs from "./page/aboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/dashBoard" element={<DashboardPage />}></Route>
        <Route path="/create-house" element={<CreatePage />}></Route>
        <Route path="/detail/:id" element={<DetailPage />}></Route>
        <Route path="/aboutUs" element={<AboutUs />}></Route>
        <Route path="*" element={<h1>404</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
