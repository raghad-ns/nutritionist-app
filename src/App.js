import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/core/header/header.component';
import Add from './pages/add/add.page';
import FoodTable from './pages/food-table/food-table.page';
import Home from './pages/home/home.page';
import ViewPrograms from './pages/view-programs/view-programs.page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header homeIcon={true} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foodTable" element={<FoodTable />} />
          <Route path="/viewPrograms" element={<ViewPrograms />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
