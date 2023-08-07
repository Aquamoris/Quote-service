import './App.css';
import Header from './components/Header/Header'

const App = (props) => {
  return (
    <div className="App">
      <Header headerState={props.state.header}></Header>
    </div>
  );
}

export default App;
