import './App.css';
import PokerApp from './components/poker/PokerApp';
import {useEffect} from "react";


function App() {
    //
    let themelink = document.getElementById("app-theme");

    useEffect(() => {
        if(themelink){themelink.href = "/themes/lara-light-blue/theme.css"}
        },[])

  return (
    <div className="App">
      <PokerApp/>
    </div>
  );
}

export default App;
