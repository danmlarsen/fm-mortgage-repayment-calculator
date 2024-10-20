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
      <label htmlFor={name}>
        <p className="mb-150">{label}</p>
        <div
          className={`group flex overflow-hidden rounded-md border text-xl text-slate-700 ${!valid && isSubmitted ? "border-red" : "has-[:focus]:border-lime border-slate-500 has-[:hover]:border-slate-900"} ${unitAlignment === "right" ? "flex-row-reverse" : ""}`}
        >
          <span
            className={`px-200 flex items-center ${!valid && isSubmitted ? "bg-red text-white" : "group-focus-within:bg-lime bg-slate-100"}`}
          >
            {unit}
          </span>
          <input
            className="px-200 py-150 group w-full border-slate-500 focus:outline-none"
            type="number"
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            required
          />
        </div>
      </label>
      {!valid && isSubmitted && <p className="text-red">{invalidText}</p>}
    </div>
  );
}
