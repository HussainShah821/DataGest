import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Advantages from './components/Advantages';
import Solutions from './components/Solutions';

function App() {
  return (
    <>
    <MyNavbar/>
    <Home/>
    <Dashboard/>
    <Advantages />
    <Solutions />
    </>
  );
}

export default App;
