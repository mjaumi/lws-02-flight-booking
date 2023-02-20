import './App.css';
import './styles.css';
import Header from './components/Header/Header';
import InputData from './components/InputData/InputData';
import PreviewData from './components/PreviewBooking/PreviewBooking';

function App() {
  return (
    <div className='App'>
      <Header />
      <InputData />
      <PreviewData />
    </div>
  );
}

export default App;
