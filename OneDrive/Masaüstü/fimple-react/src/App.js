import "./App.css";
import Calculate from "./components/Calculate";
import UserEntries from "./components/UserEntries";
import { StoreProvider } from "./store";

function App() {
  return (
    <StoreProvider>
       <UserEntries /> 
      {/* <Calculate/> */}
    </StoreProvider>
  );
}

export default App;
