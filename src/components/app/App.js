import Header from "../header/Header";
import decoration from "../../resources/img/vision.png";
import { CharacterPage, ComicsPage, NotFoundPage, SingleComicPage } from "../pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
      <Header />
        <main>
          <Routes>
            <Route path="/" element={<CharacterPage />} />
            <Route path="/comics" element={<ComicsPage />} />
            <Route path="/comics/:comicId" element={<SingleComicPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </Router>

      <img className="bg-decoration" src={decoration} alt="vision" />
    </div>
  );
}
export default App;
