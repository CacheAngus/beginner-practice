import { Route, Routes } from "react-router";
import HomePage from "./components/pages/HomePage";
import CreatePage from "./components/pages/CreatePage";
import NoteDetailsPage from "./components/pages/NoteDetailsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:noteId" element={<NoteDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
