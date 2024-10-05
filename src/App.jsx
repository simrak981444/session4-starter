import Button from './components/Button';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Card title="Card Title 1" content="Hi Jaswinder Ji." />
        <Card title="Card Title 2" content="You are welcome" />
        <Card title="Card Title 3" content="Hope you are doing well." />  {/* New card */}
        <Button label="Click Me" onClick={handleClick} />
      </div>
      <Footer />
    </div>
  );
}


export default App;