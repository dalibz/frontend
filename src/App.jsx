import { BrowserRouter as Router,Route, Routes } from "react-router-dom"
import Listarticles from "./Components/articles/Listarticles"
import Insertarticle from "./Components/articles/Insertarticle"
import Editarticle from "./Components/articles/Editarticle"
import Viewarticle from "./Components/articles/Viewarticle"
import Listcategories from "./Components/categories/Listcategories"
import Insertcategorie from "./Components/categories/Insertcategorie"
import Editcategorie from "./Components/categories/Editcategorie"
import Viewcategorie from "./Components/categories/Viewcategorie"
import Listscategories from "./Components/scategories/Listscategories"
import Insertscategorie from "./Components/scategories/Insertscategorie"
import Editscategorie from "./Components/scategories/Editscategorie"
import Viewscategorie from "./Components/scategories/Viewscategorie"
import Menu from "./Components/Menu.jsx"
function App() {


  return (//ho

    <>
    Bienvenue dans notre site
    <Router>
      <Menu>

      </Menu>
      <Routes>
        <Route path="/articles" element={<Listarticles/>}/>
        <Route path="/articles/add" element={<Insertarticle/>}/>
        <Route path="/articles/edit/:id" element={<Editarticle/>}/>
        <Route path="/articles/view/:id" element={<Viewarticle/>}/>

        <Route path="/categories" element={<Listcategories/>}/>
        <Route path="/categories/add" element={<Insertcategorie/>}/>
        <Route path="/categories/edit/:id" element={<Editcategorie/>}/>
        <Route path="/categories/view/:id" element={<Viewcategorie/>}/>

        <Route path="/scategories" element={<Listscategories/>}/>
        <Route path="/scategories/add" element={<Insertscategorie/>}/>
        <Route path="/scategories/edit/:id" element={<Editscategorie/>}/>
        <Route path="/scategories/view/:id" element={<Viewscategorie/>}/>
        

      </Routes>
    </Router>
    </>
    
      
  )
}

export default App
