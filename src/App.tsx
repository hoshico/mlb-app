import theme from './theme/theme';
import './App.css';
import { Home } from './components/pages/Home';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Router />
          <Home />          
        </div>
        </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
