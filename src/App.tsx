import {Login} from  './pages/Login';
import { SingUp } from './pages/SingUp';
import { SnackbarProvider } from 'notistack';
import { Products } from './pages/Products';
import { Header } from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <SnackbarProvider>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/login' element={<Login />} />
        <Route path='/singUp' element={<SingUp />} />
      </Routes>
    </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
