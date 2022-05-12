import './App.css';
import Display from './components/Display';
import TabOne from './components/TabOne';

const App = () => {


  const onClickHandler = (e) => {
    alert("You have chosen content");
}




  return (
    <div className="App">
      <TabOne onClickHandler={onClickHandler}/>
      <Display/>
    </div>
  );
}

export default App;
