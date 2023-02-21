import './App.css';
import './styles.css';
import Header from './components/Header/Header';
import InputData from './components/InputBooking/InputBooking';
import PreviewData from './components/PreviewBooking/PreviewBooking';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
        <InputData />
        <PreviewData />
      </div>
    </Provider>
  );
}

export default App;
