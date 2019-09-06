import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation.js";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
   number: {
     value: 100,
     density: {
       enable: true,
       value_area: 700
     }
   }
  }
}

class App extends React.Component {
  constructor() {
  super()
  this.state = {
    input: '',
  }
}

onInputChange = (event) => {
console.log(event.target.value);
}

onButtonSubmit = () => {
  console.log('click');
}

render() {
  return (
    <div className="App">
      <Particles className='particles'
        params={particlesOptions} 
        />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      {/*<faceRecognition /> */}
    </div>
  );
  }
}

export default App;