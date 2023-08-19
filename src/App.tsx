import type { Component } from "solid-js";
import LogoLotusFlower from "./components/svgs/lotus-flower/LotusFlower";
import { initializeTheme } from "./util/theme";
import { Header } from "./components/header/Header";
import { mockFirebaseUsers } from "../tests/__mocks__/firebase-users";

initializeTheme();

const App: Component = () => {
  return (
    <div>
      <header>
        <Header user={mockFirebaseUsers[0]} />
        <h1 class="my-4 text-center text-xl font-bold">Solid js app hosted on firebase, coming soon...</h1>
        <LogoLotusFlower width="500" class="fill-[url('#lotusFlowerGradient')]" />
      </header>
    </div>
  );
};

export default App;
