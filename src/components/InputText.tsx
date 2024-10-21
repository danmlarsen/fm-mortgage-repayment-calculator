type AppProps = {
  name: string;
  label: string;
  unit: string;
  unitAlignment?: string;
  value: string;
  isSubmitted: boolean;
  valid?: boolean;
  invalidText?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputText({
  name,
  label,
  unit,
  unitAlignment = "left",
  isSubmitted = false,
  value = "",
  valid = false,
  invalidText = "",
  onChange,
}: AppProps) {
  return (
    <div className="space-y-150">
      <label className="cursor-pointer" htmlFor={name}>
        {label}
      </label>
      <div
        className={`group flex overflow-hidden rounded-md border text-xl text-slate-700 transition duration-300 ${!valid && isSubmitted ? "border-red" : valid ? "has-[:focus]:border-lime" : "border-slate-500 has-[:focus]:border-slate-900 has-[:hover]:border-slate-900"} ${unitAlignment === "right" ? "flex-row-reverse" : ""}`}
      >
        <span
          className={`dura-300 px-200 flex items-center bg-slate-100 transition ${!valid && isSubmitted ? "!bg-red text-white" : valid ? "group-focus-within:bg-lime" : ""}`}
        >
          {unit}
        </span>
        <input
          className="px-200 py-150 group w-full border-slate-500 text-slate-900 focus:outline-none"
          type="text"
          inputMode="numeric"
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          required
        />
      </div>
      {!valid && isSubmitted && <p className="text-red">{invalidText}</p>}
    </div>
  );
}
