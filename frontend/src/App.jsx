import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AddNotePage from "./pages/AddNotePage";
import ViewNotePage from "./pages/ViewNotePage";

function App() {
  return (
    <>
      <div className="relative h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddNotePage />} />
          <Route path="/note/:id" element={<ViewNotePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
