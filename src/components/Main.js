import React from 'react';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faSlidersH, faUniversity } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee, faSlidersH, faUniversity);

import Header from './Header/Header';
import Greeter from './Greeter/Greeter';

const Main = () => (
  <div>
    <Header />
    <main>
      <Greeter />
    </main>
  </div>
);

export default Main;
