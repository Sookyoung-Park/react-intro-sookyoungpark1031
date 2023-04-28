// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import './style.scss';

// import App from './components/app';

// /*
// function App() {
//   return <div className="test">All the REACT are belong to us!</div>;
// }
// */

// const root = createRoot(document.getElementById('main'));
// root.render(<App />);

import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter, Routes, Route, NavLink,
} from 'react-router-dom';

import YouTube from './components/youtube';

function Nav(props) {
  return (
    <nav>
      <ul>
        <li><NavLink to="/youtube">YouTube</NavLink></li>
      </ul>
    </nav>
  );
}

function App() {
  return (
  // <div>
  //   <h1>My App</h1>
  //   <Counter />
  //   <Controls />
  //   {/* other components */}
  // </div>

    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          {/* <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/test/:id" element={<Test />} /> */}
          <Route path="/youtube" element={<YouTube />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
const root = createRoot(document.getElementById('main'));
export default App;
