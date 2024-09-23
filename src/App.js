import React, { useState, useEffect } from 'react';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Slider.css';
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoaded = () => {
      setIsLoading(false);
    };

    if (document.readyState === 'complete') {
      handleLoaded();
    } else {
      window.addEventListener('load', handleLoaded);
    }

    return () => {
      window.removeEventListener('load', handleLoaded);
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;