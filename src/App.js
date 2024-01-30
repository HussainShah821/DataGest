import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Advantages from './components/Advantages';
import Solutions from './components/Solutions';
import Expert from './components/Expert';
import Promotions from './components/Promotion';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <MyNavbar/>
    <Home/>
    <Dashboard/>
    <Advantages />
    <Solutions />
    <Expert />
    <Promotions />
    <ContactForm />
    <Footer />
    </>
  );
}

export default App;
