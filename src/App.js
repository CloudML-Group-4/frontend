import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home_page';
import UpdateCard from './pages/update_card';
import Layout from './pages/layout';
import NoPage from './pages/no_page';
import Contact from './pages/contact'
import Results from './pages/results'
import EditCard from './pages/edit_card';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<NoPage />}/>
          <Route index element={<HomePage />}/>
          <Route path="card_update" element={<UpdateCard />} />
          <Route path='card_edit' element={<EditCard />} />
          <Route path="contact" element={<Contact />} />
          <Route path='results' element={<Results />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
