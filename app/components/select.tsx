"use client";

import { useState } from "react";

/**
 * key: value
 * value: label
 *
 */
interface Options {
  [key: string | number]: string | number;
}

interface Props<T extends Options> {
  onChange: (value: keyof T) => void;
  defaultValue: keyof T;
  options: T;
}

const Select = <T extends Options>({
  options,
  defaultValue,
  onChange,
}: Props<T>) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(true)}
      className="relative flex cursor-pointer select-none content-between items-center rounded-md bg-slate-300 px-3 pb-[0.19rem] pt-[0.44rem] text-inherit dark:bg-slate-700"
    >
      {options[defaultValue]}
      <ChevronSVG
        width="17.5px"
        height="20px"
        className="ml-[0.63rem] text-slate-400 dark:text-slate-500"
      />

      {/* backdrop */}
      <div
        onClick={(event) => {
          event.stopPropagation();
          setOpen(false);
        }}
        className={`${
          open ? "block" : "hidden"
        } fixed inset-0 z-50 cursor-auto bg-transparent`}
      />

      <ul
        className={`${
          open ? "block" : "hidden"
        } absolute left-0 top-[calc(100%_+_0.5rem)] z-[999] flex w-[10.94rem] flex-col rounded-md bg-white px-[1.13rem] py-[0.563rem] text-slate-500 shadow-[0_14px_30px_rgba(103,132,187,.15),0_4px_4px_rgba(103,132,187,.05)] dark:bg-slate-700 dark:text-slate-400 dark:shadow-none`}
      >
        {Object.entries(options).map(([value, label]) => {
          if (value === defaultValue) {
            return;
          }

          return (
            <li key={value} className="text-lg">
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  setOpen(false);
                  onChange(value);
                }}
                className="w-full py-[0.563rem] text-left hover:text-sky-400"
              >
                {label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const ChevronSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg aria-hidden viewBox="0 0 448 512" fill="currentColor" {...props}>
    <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
  </svg>
);

export default Select;
