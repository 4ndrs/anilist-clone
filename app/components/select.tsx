/**
 * key: value
 * value: label
 *
 */
interface Options {
  [key: string | number]: string | number;
}

interface Props<T extends Options, U extends keyof T> {
  onChange: (value: U) => void;
  defaultValue: U;
  options: T;
}

const Select = <
  T extends Options,
  U extends Extract<keyof T, string | number>
>({
  options,
  defaultValue,
}: Props<T, U>) => (
  <div className="flex cursor-pointer content-between items-center rounded-md bg-slate-300 px-3 pb-[0.19rem] pt-[0.44rem] text-inherit dark:bg-slate-700">
    {options[defaultValue]}
    <ChevronSVG
      width="17.5px"
      height="20px"
      className="ml-[0.63rem] text-slate-400 dark:text-slate-500"
    />
  </div>
);

const ChevronSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg aria-hidden viewBox="0 0 448 512" fill="currentColor" {...props}>
    <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
  </svg>
);

export default Select;
