import theme from './theme/theme';
import './App.css';
import { Main } from './components/pages/Main';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Router />
          <Main />          
        </div>
        </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
