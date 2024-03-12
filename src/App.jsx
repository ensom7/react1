import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Start from './pages/Start/Start'
import Slider from './components/Slider/Slider';
import Accordion from './components/Accordion/Accordion';
import Catalog from './pages/Catalog/Catalog'
import CardPage from './pages/Card/CardPage'
import UsersPage from './pages/UsersPage/UsersPage'
import CreatePage from './pages/CreatePage/CreatePage'
import {Routes,Route} from 'react-router-dom'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
       <Header />
       <Routes>
        <Route path="/" element ={<Start />} />
        <Route path ="/catalog" element={<Catalog />} />
        <Route path ="/catalog/:id" element={<CardPage />} />
        <Route path ="/users" element={<UsersPage />} />
        <Route path ="/create" element={<CreatePage />} />
       </Routes>
       <Footer />
    </>
  )
}

export default App
