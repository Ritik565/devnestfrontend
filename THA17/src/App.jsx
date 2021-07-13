import './App.css';
import Card from "./card"

function App() {
  return (
    <div className="App">
      <Card h1= "Pizza" h2= "160 calories"/>
      <Card h1= "Pasta" h2= "180 calories"/>
      <Card h1= "Panipuri" h2= "100 calories"/>
      <Card h1= "Dosa" h2= "200 calories"/>
      <Card h1= "Gulabjamun" h2= "120 calories"/>
    </div>
  );
}

export default App;
