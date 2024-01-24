
import './App.css';
import CustomButton from './components/customButton/CustomButton';
import ArrowApp from './containers/arrowApp/ArrowApp';
import CounterApp from './containers/counterApp/CounterApp';
import SimpleCalculator from './containers/simpleCalculator/SimpleCalculator';

function App() {
  return (
    <div className="App">
   
    {/* <ArrowApp/> */}
    {/* <CounterApp/> */}
    <SimpleCalculator/>
    </div>
  );
}

export default App;
