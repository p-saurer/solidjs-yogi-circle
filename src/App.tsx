import type { Component } from "solid-js";

import Logo from "./components/svgs/logo";

const App: Component = () => {
  return (
    <div>
      <header>
        <h1 class="text-xl font-bold text-center my-4">Solid js app hosted on firebase, coming soon...</h1>
        <Logo width="500" />
      </header>
    </div>
  );
};

export default App;
