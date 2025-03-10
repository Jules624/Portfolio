import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './site/Layout'; 
import Home from './site/Home';
import About from './site/About';
import Contact from './site/Contact';
import Boutique from './site/Boutique';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="boutique" element={<Boutique />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
