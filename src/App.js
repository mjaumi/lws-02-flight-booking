import 'react-toastify/dist/ReactToastify.css';
import './styles.css';
import './App.css';
import Header from './components/Header/Header';
import InputData from './components/InputBooking/InputBooking';
import PreviewData from './components/PreviewBooking/PreviewBooking';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
        <InputData />
        <PreviewData />
        <ToastContainer position='top-center' theme='colored' />
      </div>
    </Provider>
  );
}

export default App;
