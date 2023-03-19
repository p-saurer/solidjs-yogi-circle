import type { Component } from "solid-js";
import LogoLotusFlower from "./components/svgs/lotus-flower/LotusFlower";
import { initializeTheme } from "./util/theme";

initializeTheme();

const App: Component = () => {
  return (
    <div>
      <header>
        <h1 class="my-4 text-center text-xl font-bold">Solid js app hosted on firebase, coming soon...</h1>
        <LogoLotusFlower width="500" class="fill-[url('#lotusFlowerGradient')]" />
      </header>
    </div>
  );
};

export default App;
