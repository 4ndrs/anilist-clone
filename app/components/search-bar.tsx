import CloseSVG from "./close-svg";
import SearchSVG from "./search-svg";

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: () => void;
};

const SearchBar = ({ value, onChange, onDelete }: Props) => (
  <div className="flex items-center gap-3 rounded-md bg-white py-[0.69rem] pl-[0.813rem] pr-4 shadow-[0_14px_30px_rgba(103,132,187,.1),0_4px_4px_rgba(103,132,187,.04)]">
    <SearchSVG width="13px" height="16px" className="text-slate-300" />

    <input
      type="text"
      placeholder="Search"
      className="flex-1 bg-transparent pt-[0.19rem] text-[0.813rem] font-normal text-slate-500 placeholder-slate-400 outline-none"
      value={value}
      onChange={onChange}
    />

    <button
      aria-label="delete text"
      onClick={onDelete}
      className={`${
        value === "" ? "hidden" : "block"
      } text-slate-300 transition-colors duration-[250ms] ease-in-out hover:text-slate-400`}
    >
      <CloseSVG width="11px" height="16px" />
    </button>
  </div>
);

export default SearchBar;
