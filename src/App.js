import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
    <MyNavbar/>
    <Home/>
    <Dashboard/>
    </>
  );
}

export default App;
