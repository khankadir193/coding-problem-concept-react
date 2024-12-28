import logo from './logo.svg';
import './App.css';
import RadioComponent from './RadioExample';
import CountryComponent from './CountryExample';
import CounterComponent from './CustomHooks/Counter';
import CounterComponent2 from './CustomHooks/Counter2';
import CheckBoxItems from './CheckBoxExample';
import Pagination from './Pagination';
import UserInput from './UserInput';
import DebouncedSearch from './Debaunce/Debaunce';
import TimerWatch from './StopWatch/TimerWatch';
import Calculator from './Calculator/Calculator';
import EmojiIcon from './EmojiSearch/EmojiIcon';
import WeatherMaps from './WeatherApp/WeatherMaps';
import HOC from './HOComponent.js/HOC';
import Hello from './HOComponent.js/ListItem';
import SampleComponent, { HOCofSampleComponent } from './MainHOC/SampleComponent';
import DataFetch from './ApiCall/DataFetch';
import ApiCall from './ApiAxiosCall/ApiCall';
import ApiPostCall from './ApiAxiosCall/ApiPostCall';
import CrudOperation from './CrudApp/CrudOperation';
import CrudOperation2 from './CrudApp/CrudOperation22';
import BrowserEvent from './BrowserEvent/BrowserEvent';
import Counter from './CustomHooks/Counter';
import Counter2 from './CustomHooks/Counter2';
import DebounceComp from './TechniqueMethod/DebounceComp';
import ThrottlingComp from './TechniqueMethod/ThrottlingComp';
import ClockComp from './DigitalClock/ClockComp';
import CountDown from './DigitalClock/CountDown';
import FormValidationComp from './FormValidation/FormValidationComp';

function App() {

  // const TODOS = [
  //   { id: '1', Name: 'Abdul Kadir Khan', completed: true },
  //   { id: '2', Name: 'Abdul Jabir Khan', completed: false },
  // ];

  // <HOC data={TODOS} />

  
  return (
    <div className='App'>
      {/* <HOCofSampleComponent name="abdul kadir khan" address="i am from gorakhpur uttarpradesh" /> */}
      {/* <TimerWatch /> */}
      {/* <Calculator /> */}
      {/* <BrowserEvent /> */}
      {/* <CrudOperation /> */}
      {/* <RadioComponent /> */}
      {/* counter using alongwith customhooks */}
      {/* <Counter /> */}
      {/* <Counter2 /> */}

      {/* throttlinga and debounce technique */}
      {/* <DebounceComp /> */}
      {/* <ThrottlingComp /> */}
      {/* <CrudOperation2 /> */}
      {/* <ClockComp /> */}
      {/* <CountDown />  i need to practice timer this component */}
      {/* <TimerWatch /> */}
      <FormValidationComp />

    </div>
  );
}

export default App;

// className="App"
