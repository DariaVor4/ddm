import { CustomProvider } from 'rsuite';
import AppRouter from './components/AppRouter/AppRouter';
import Footer from './components/Footer';
import Header from './components/Header';
import useMainStore from './store/main.store';

function App() {
  const state = useMainStore();

  return (
    <CustomProvider theme={state.isDarkMode ? 'dark' : 'light'}>
      <div className='App'>
        <Header />
        <AppRouter />
        <Footer />
      </div>
    </CustomProvider>
  );
}

export default App;
