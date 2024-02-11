import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./page/HomePage/HomePage";
import LoginPage from "./page/LoginPage/LoginPage";
import DashboardPage from "./page/DashboardPage/DashboardPage";
import CreatePage from "./page/CreatePage/CreatePage";
import DetailPage from "./page/detail/DetailPage";
import AboutUs from "./page/aboutUs/AboutUs";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ProrectedRoute from "./components/routes/ProrectedRoute";
import PublickdRoute from "./components/routes/PublickRoute";
import { fetchHouses } from "./redux/AsyncThuncks";
import Error from "./components/error/Error";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHouses());
  }, []);

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/login"
          element={
            <PublickdRoute>
              <LoginPage />
            </PublickdRoute>
          }
        ></Route>
        <Route
          path="/dashBoard"
          element={
            <ProrectedRoute>
              {" "}
              <DashboardPage />{" "}
            </ProrectedRoute>
          }
        ></Route>
        <Route
          path="/create-house"
          element={
            <ProrectedRoute>
              {" "}
              <CreatePage />{" "}
            </ProrectedRoute>
          }
        ></Route>
        <Route path="/detail/:id" element={<DetailPage />}></Route>
        <Route path="/aboutUs" element={<AboutUs />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
