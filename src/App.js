import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

function App() {
  return (
    <div className="App">
      <Navigation />

       <Logo />
      <ImageLinkForm />
             {/*<faceRecognition /> */ }
   </div>
  )
}

export default App;
