import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home_page';
import UpdateCard from './pages/update_card';
import Layout from './pages/layout';
import NoPage from './pages/no_page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<NoPage />}/>
          <Route index element={<HomePage />}/>
          <Route path="card_update" element={<UpdateCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
