import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UsersList from "./Components/DynamicFetchingClassComp/classComponentAxios";
import DynamicInput from "./Components/DynamicInput/dynamicInput";
import ImageSlider from "./Components/ImageSlider/imageSlider";
import UserCard from "./Components/DynamicFetchingFuncComp/funcComponentAxios";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <nav className="bg-indigo-500  p-6 shadow-lg ">
          <div className="container mx-auto flex justify-between items-center">
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dynamic-input" className="nav-link">
                  Dynamic Input
                </Link>
              </li>
              <li>
                <Link to="/image-slider" className="nav-link">
                  Image Slider
                </Link>
              </li>
              <li>
                <Link to="/users-list" className="nav-link">
                  Users List
                </Link>
              </li>
              <li>
                <Link to="/users-card" className="nav-link">
                  Users card
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="flex-grow container mx-auto p-8">
          <Routes>
            <Route path="/dynamic-input" element={<DynamicInput />} />
            <Route path="/image-slider" element={<ImageSlider />} />
            <Route path="/users-list" element={<UsersList />} />
            <Route path="/users-card" element={<UserCard />} />
            <Route
              path="/"
              element={
                <div className="text-center text-gray-800">
                  <h1 className="text-4xl font-bold mb-6">Welcome to My App</h1>
                  <p className="text-lg">
                    Select a component from the navigation bar to get started.
                  </p>
                </div>
              }
            />
          </Routes>
        </div>

        <footer className="bg-gray-800 text-white text-center py-4">
          <p>&copy; 2024 My App. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
