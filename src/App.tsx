import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './components/pages/home';
import { SectionPage } from './components/pages/section-page';

export const App = () => (
  <HashRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/recommended' element={<SectionPage heading='Recommended For You' />} />
      <Route path='/best' element={<SectionPage heading='Best Seller' />} />
      <Route path='/new' element={<SectionPage heading='New Releases' />} />
      <Route path='/trending' element={<SectionPage heading='Trending Now' />} />
    </Routes>

  </HashRouter>

) 
