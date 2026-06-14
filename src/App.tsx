import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main dashboard route */}
        <Route
          path="/"
          element={<Dashboard />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;