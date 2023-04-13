import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UpdateCard from './pages/update_card';
import Layout from './pages/layout'
import NoPage from './pages/no_page'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UpdateCard />}/>
          <Route path="*" element={<NoPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
