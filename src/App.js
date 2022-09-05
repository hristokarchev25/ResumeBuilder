import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Help from './components/Help/Help';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' exact element={<Dashboard />} />
        <Route path='/help' exact element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
