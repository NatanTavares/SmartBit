import React from 'react';

import Header from './sections/Header/Header';
import Services from './sections/Services/Services';
import Instructions from './sections/Instructions/Instructions';
import Contact from './sections/Contact/Contact';

function App() {
  return (
    <main className="App">
      <Header />
      <Services />
      <Instructions />
      <Contact />
    </main>
  );
}

export default App;
