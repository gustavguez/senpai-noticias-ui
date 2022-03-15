import { Route, Routes } from "react-router-dom";
import { Header } from "./components/common/Header";
import { ContactPage } from "./components/pages/ContactPage";
import { HomePage } from "./components/pages/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
