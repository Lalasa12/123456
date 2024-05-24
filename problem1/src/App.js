// App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import TrainList from './TrainList';
import Footer from './Footer';

function App() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const response = await fetch('/trains.json'); // Fetching from the mock API
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTrains(data);
      } catch (error) {
        console.error('Failed to fetch train data:', error);
      }
    };

    fetchTrains();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="content">
        <TrainList trains={trains} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
