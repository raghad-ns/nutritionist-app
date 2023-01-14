import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/core/header/header.component';
import DietProgramsProvider from './components/providers/diet-programs.provider';
import FoodProvider from './components/providers/food.provider';
import Add from './pages/add/add.page';
import FoodTable from './pages/food-table/food-table.page';
import Home from './pages/home/home.page';
import NotFound from './pages/not-found/not-found';
import SpecificProgram from './pages/specific-program/specific-program.page';
import ViewPrograms from './pages/view-programs/view-programs.page';

function App() {
  return (
    <div className="App">
      <FoodProvider>
        <DietProgramsProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/foodTable" element={<FoodTable />} />
              <Route path="/viewPrograms" element={<ViewPrograms />} />
              <Route path="/add" element={<Add />} />
              <Route path="/dietProgram/:id" element={<SpecificProgram />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </DietProgramsProvider>
      </FoodProvider>
    </div>
  );
}

export default App;
