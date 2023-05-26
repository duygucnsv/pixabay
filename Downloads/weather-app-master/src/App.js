import './App.css';
import {WeatherProvider} from './context/WeatherContext';
import Main from './containers/Main';


function App() {


  return (
    <WeatherProvider>
      <Main />
    </WeatherProvider>
  );
}

export default App;
