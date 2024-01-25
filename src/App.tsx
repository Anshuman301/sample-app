import './App.scss'
import Content from './pages/Content'
import LangProvider from './component/context/LangProvider'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage';
import ProductPage from './pages/ProductPage';

function App() {

  return (
    <LangProvider>
      <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}>
          <Route index element={<Content />} />
          <Route path='blogs' element={<BlogPage />} />
          <Route path='products' element={<ProductPage />} />
        </Route>
      </Routes>
      </Router>
    </LangProvider>
  )
}

export default App
