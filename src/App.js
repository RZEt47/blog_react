import Navbar from "./Components/Home/Navbar"
import Home from "./Components/Home/Home"
import Create from "./Components/Create/Create"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import BlogDetails from "./Components/Blog/BlogDetails"
import NotFound from "./Components/NotFoundPage/NotFound";

function App() {
  return (
      <Router>
        <div className="app">
            <Navbar/>
            <main className="main">
              <Routes>
                  <Route path= "/" element={<Home/>} />
                  <Route path= "/Сreate" element={<Create/>} />
                  <Route path= "/blogs/:id" element={<BlogDetails/>} />
                  <Route path= "*" element={<NotFound/>}/>
              </Routes>
            </main>
        </div>
      </Router>
  );
}

export default App;
