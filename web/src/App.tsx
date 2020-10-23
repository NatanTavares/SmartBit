import React from 'react';

import Header from './sections/Header/Header';
import Services from './sections/Services/Services';
import Instructions from './sections/Instructions/Instructions';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

function App() {
  return (
    <main className="App">
      <Header />
      <Services />
      <Instructions />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
