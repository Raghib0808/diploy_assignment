import './App.css';
import { useEffect, useState } from 'react';
import Body from './components/Body';
import Header from './components/Header';

import './Slider.css';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate DOMContentLoaded by using useEffect
    const handleLoad = () => {
      setLoading(false);  // Remove the loader once content is loaded
    };

    // Mimic DOMContentLoaded behavior
    window.addEventListener('load', handleLoad);

    // Cleanup function
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  // Render the Loader when the content is loading
  if (loading) {
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
