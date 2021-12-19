import Employees from "./Resources/Employees";
import "./Resources/hero.css"



function App() {
  return (
    
    <div class="App">
     <h1 class>Welcome To Kilo Kick's Employees</h1>

     <div class="hero-image">
       <img class="hero" src="hero.jpg" alt="Hero"></img>
    </div>
  
    
      <Employees />
      
    </div>
  );
}

export default App;

