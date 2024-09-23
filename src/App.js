import React, { useState, useEffect } from 'react';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import './Slider.css';
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timer;
    const startTime = Date.now();

    const handleLoaded = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(2000 - elapsedTime, 0);

      timer = setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    };

    if (document.readyState === 'complete') {
      handleLoaded();
    } else {
      window.addEventListener('load', handleLoaded);
    }

    return () => {
      window.removeEventListener('load', handleLoaded);
      if (timer) clearTimeout(timer);
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