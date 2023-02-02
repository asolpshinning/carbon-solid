import { Accessor, Component, Setter } from 'solid-js';

import logo from './assets/logo.svg';
import styles from './App.module.css';
import Mine, { state, setState, color, setColor } from './mine';
import DonutChartExample from '../examples/DonutChartExample';
import PieChartExample from '../examples/PieChartExample';

type colorState = { color: Accessor<string>, setColor: Setter<string> }

const App: Component = () => {

  return (
    <div class={styles.App}>
      <DonutChartExample />
      <br />
      <PieChartExample />
      <br />
      <Mine />
      <br />
      <button
        style={{ "background-color": state.style.color /* color() */ }}
        onClick={
          () => {
            setState("style", { color: "blue" });
            //setColor("yellow");
          }
        }>Change Theme
      </button>
      <br />
      <h2 style={{ color: color() }}>`Just showing Color Change`</h2>
      <br />
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>

    </div>
  );
};

export default App;
