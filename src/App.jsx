import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Start from './pages/Start/Start'
import CatalogPage from './pages/Catalog/Catalog'
import {Routes,Route} from 'react-router-dom'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
       <Header />
       <Routes>
        <Route path="/" element ={<Start />} />
        <Route path ="/catalog" element={<CatalogPage />} />
       </Routes>
       <Footer />
    </>
  )
}

export default App
