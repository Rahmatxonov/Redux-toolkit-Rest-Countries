import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";
import CountrieDetail from "./pages/Countrie-details/CountrieDetail";

const App = () => {
  return (
    <main className="main-container">
      <Routes>
        <Route exact path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/:code" element={<CountrieDetail />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
