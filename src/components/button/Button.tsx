import { splitProps } from "solid-js";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  isPrimary?: boolean;
  isOutline?: boolean;
}

export const Button = (props: ButtonProps) => {
  const [local, rest] = splitProps(props, ["isPrimary", "label", "isOutline"]);

  return (
    <button
      {...rest}
      type="button"
      class="group relative overflow-hidden rounded px-5 py-2.5 transition-colors duration-300 ease-out"
      classList={{
        "bg-cascade-400 text-as-white": local.isOutline !== true,
        "bg-transparent border-2 border-cascade-400 text-as-black dark:text-as-white hover:bg-cascade-400 hover:text-as-white":
          local.isOutline === true,
      }}
    >
      <span class="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40" />
      <span>{local.label}</span>
    </button>
  );
};
