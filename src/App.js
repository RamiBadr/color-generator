import './App.css';
import Colors from './components/Colors';
import Generator from './components/Generator';
import ListContextProvider from './contexts/ListContextProvider';

function App() {
  
  return (
    <ListContextProvider>
      <Generator />
      <Colors />
    </ListContextProvider>
  );
}

export default App;
