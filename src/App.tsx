import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './components/pages/home';
import { SectionPage } from './components/pages/section-page';

export const App = () => (
  <HashRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/section' element={<SectionPage />}>

      </Route>
    </Routes>

  </HashRouter>

) 
