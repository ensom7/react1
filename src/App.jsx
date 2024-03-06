import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Start from './pages/Start/Start'
import Catalog from './pages/Catalog/Catalog'
import CardPage from './pages/Card/CardPage'
import UsersPage from './pages/UsersPage/UsersPage'
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
       </Routes>
       <Footer />
    </>
  )
}

export default App
