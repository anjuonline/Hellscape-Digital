import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import SharedLayout from './pages/SharedLayout';
import Home from './pages/Home';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
