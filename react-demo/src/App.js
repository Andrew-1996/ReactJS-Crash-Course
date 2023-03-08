import './App.css';
// import { ClickHandler } from './components/ClickHandler';
// import { Greet } from './components/Greet';
// import { Message } from './components/message';
import { ParentComponent } from './components/ParentComponent';


function App() {
  return (
    <div className="App">
      {/* <Greet name='Bruce' heroName='Batman' />
      <Greet name='Clark' heroName='Superman' > <button> Action </button> </Greet>
      <Greet name='Diana' heroName='Wonder Woman' > <p> This is childern props. </p> </Greet> */}
    {/* <Message />  */}
    {/* <ClickHandler /> */}
      <ParentComponent />
    </div>
  );
}

export default App;
