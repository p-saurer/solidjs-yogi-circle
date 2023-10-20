import { splitProps, JSX } from "solid-js";

interface TextFieldProps extends JSX.HTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  placeholder?: string;
}

export const TextField = (props: TextFieldProps) => {
  const [local, rest] = splitProps(props, ["label"]);

  return (
    <div class="flex w-72 items-center">
      <label for={rest.id} class="mr-4 text-as-black dark:text-as-white">
        {local.label}
      </label>
      <input
        {...rest}
        class="form-control flex-1 truncate rounded-full border border-transparent bg-as-black/10 px-5 py-3 text-as-black outline-none placeholder:text-as-black/40 hover:border-as-black/40 hover:bg-transparent focus:border-as-black motion-safe:transition-colors dark:bg-as-white/10 dark:text-as-white dark:placeholder:text-as-white/40 dark:hover:border-as-white/40 dark:hover:bg-transparent dark:focus:border-as-white"
      />
    </div>
  );
};
