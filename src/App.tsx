import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './components/pages/home';
import { SectionPage } from './components/pages/section-page';

export const App = () => (
  <HashRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/recommended' element={<SectionPage heading='Recommended For You' section="recommended" />} />
      <Route path='/best' element={<SectionPage heading='Best Seller' section="best" />} />
      <Route path='/new' element={<SectionPage heading='New Releases' section="new" />} />
      <Route path='/trending' element={<SectionPage heading='Trending Now' section="trending" />} />
    </Routes>

  </HashRouter>

) 
