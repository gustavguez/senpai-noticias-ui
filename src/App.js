import { Route, Routes } from "react-router-dom";
import { Header } from "./components/common/Header";
import { Nav } from "./components/common/Nav";
import { ContactPage } from "./components/pages/ContactPage";
import { HomePage } from "./components/pages/HomePage";
import { LoginPage } from "./components/pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
