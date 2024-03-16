import './App.css';
import './appStyles.css';
import styles from './appStyles.modules.css';
// import { Inline } from './components/Inline';
// import { Stylesheet } from './components/Stylesheet';
// import { NameList } from './components/NameList';
// import { UserGreeting } from './components/UserGreeting';
// import { ClickHandler } from './components/ClickHandler';
// import { Greet } from './components/Greet';
// import { Message } from './components/message';
// import { ParentComponent } from './components/ParentComponent';


function App() {
  return (
    <div className="App">
      {/* <Greet name='Bruce' heroName='Batman' />
      <Greet name='Clark' heroName='Superman' > <button> Action </button> </Greet>
      <Greet name='Diana' heroName='Wonder Woman' > <p> This is childern props. </p> </Greet> */}
    {/* <Message />  */}
    {/* <ClickHandler /> */}
    {/* <ParentComponent /> */}
    {/* <UserGreeting /> */}
    {/* <NameList /> */}
    {/* <Stylesheet /> */}
    {/* <Inline /> */}
      <h1 className='error'> Error </h1>
      <h1 className={styles.success}> Success </h1>
    </div>
  );
}

export default App;
