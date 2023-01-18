import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Guard from './components/core/guard/gurd.component.jsx';
import Header from './components/core/header/header.component';
import DietProgramsProvider from './components/providers/diet-programs.provider';
import FoodProvider from './components/providers/food.provider';
import UserProvider from './components/providers/user.provider';
import Add from './pages/add/add.page';
import FoodTable from './pages/food-table/food-table.page';
import Home from './pages/home/home.page';
import Login from './pages/login/login.page';
import NotFound from './pages/not-found/not-found';
import SpecificProgram from './pages/specific-program/specific-program.page';
import ViewPrograms from './pages/view-programs/view-programs.page';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <DietProgramsProvider>
          <FoodProvider>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/foodTable" element={<FoodTable />} />
                <Route path="/viewPrograms" element={<Guard><ViewPrograms /></Guard>} />
                <Route path="/add" element={<Guard><Add /></Guard>} />
                <Route path="/dietProgram/:id" element={<Guard><SpecificProgram /></Guard>} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </FoodProvider>
        </DietProgramsProvider>
      </UserProvider>
    </div>
  );
}

export default App;
