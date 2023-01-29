import type { Component } from 'solid-js';

import Logo from './components/svgs/logo';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <Logo width="500" /> 
      </header>
    </div>
  );
};

export default App;
