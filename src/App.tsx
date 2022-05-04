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
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/login' element={<Login />} />
          <Route path='/singUp' element={<SingUp />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem', textAlign: 'center'}}>
                <p style={{ fontSize: 'var(--large)', color: '#fff', fontWeight: 'bold' }}>
                  Nada encontrado aqui!
                </p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
