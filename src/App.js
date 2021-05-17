import logo from './logo.svg';
import './App.css';
import MyRenderer from './MyRenderer';
// import ParentComponent from './component/view/ParentComponent';


function App() {
  // var DateTimeField = require('react-bootstrap-datetimepicker');

  return (
    <div className="App">
      {/* <DateTimeField /> */}
      <MyRenderer />
    </div>
  );
}

export default App;
