import { useState } from 'react';
import './App.css';
import Character from './pages/Character';
import Profile from './pages/Profile';
import Start from './pages/Start';

function App() {
  const [page, setPage] = useState('menu')
  return (
    <div className="app">
      {page === 'start' && (
        <Start />
      )}
      {page === 'character' && (
        <Character />
      )}
      {page === 'menu' && (
        <Profile />
      )}
    </div>
  );
}

export default App;
