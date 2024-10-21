type AppProps = {
  isChecked: boolean;
  typeTitle: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function MortageTypeRadio({
  isChecked,
  typeTitle,
  value,
  onChange,
}: AppProps) {
  return (
    <label
      className="px-200 py-150 gap-200 hover:border-lime has-[:focus]:border-lime has-[:checked]:bg-lime/15 has-[:checked]:border-lime flex cursor-pointer items-center overflow-hidden rounded-md border border-slate-500 text-xl transition duration-300"
      htmlFor={`mortagetype-${value}`}
    >
      <div className="grid place-items-center">
        <input
          className="checked:border-lime focus-visible:ring-lime peer col-start-1 row-start-1 size-[20px] cursor-pointer appearance-none rounded-full border-2 border-slate-500 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          type="radio"
          name="mortagetype"
          id={`mortagetype-${value}`}
          value={value}
          checked={isChecked}
          onChange={onChange}
          required
        />
        <div className="peer-checked:bg-lime col-start-1 row-start-1 size-[10px] scale-0 rounded-full transition duration-300 peer-checked:scale-100"></div>
      </div>
      <span className="text-slate-900">{typeTitle}</span>
    </label>
  );
}
