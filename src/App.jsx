import react from "react";
import Home from "./pages/Home";
import favorite from "./pages/Favorites";
import NavBar from "./components/NavBar";

function App() {
  const movieNumber = 2;
  return (
    <div>
      <NavBar />
   <main className=",ain-content">
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/favorites" element={<favorite />}></Route>
    </Routes>
   </main>
   </div>
  );
}

export default App;
