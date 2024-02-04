import './App.css';
import SidebarToggler from './components/SidebarToggler/SidebarToggler';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';



function App() {

  return (
    <div className="App">
      <SidebarToggler />
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
