import { Button } from "../button/Button";
import LotusFlower from "../svgs/lotus-flower/LotusFlower";
import { UserInfo as FirebaseUserInfo } from "firebase/auth";

interface HeaderProps {
  user?: FirebaseUserInfo;
}

export const Header = (props: HeaderProps) => {
  const handleLogin = (): void => {
    // TODO
  };

  const handleLogout = (): void => {
    // TODO
  };

  return (
    <header class="sticky flex items-center justify-between p-6 dark:bg-as-black dark:text-as-white">
      <div class="flex items-center gap-x-4">
        <div class="flex h-14 w-14 items-center justify-center rounded-full border-2 border-as-black dark:border-as-white">
          <LotusFlower class="w-10 fill-cascade-400 dark:fill-[url(#lotusFlowerGradient)]" />
        </div>
        <h1>Yogi Circle</h1>
      </div>
      <div class="flex items-center gap-x-6">
        {props.user ? (
          <>
            <span class="text-as-black dark:text-as-white">
              Welcome, <b>{props.user.displayName}</b>!
            </span>
            <Button onClick={handleLogout} label="Logout" />
          </>
        ) : (
          <>
            <Button onClick={handleLogin} label="Sign in" />
          </>
        )}
      </div>
    </header>
  );
};
