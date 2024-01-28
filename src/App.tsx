import { useState } from "react";
import "./App.css";
import Context from "./components/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import News from "./pages/News";
import NewsDetails from "./pages/NewsDetail";
import NotFound from "./pages/NotFound";

export function App() {
  const [token, setToken] = useState<string | null>(null);
  const tokenStorage = localStorage.getItem("token");

  if (tokenStorage && !token) {
    setToken(tokenStorage);
  }

  return (
    <Context>
      <BrowserRouter>
        <div id="app">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Context>
  );
}

export default App;
