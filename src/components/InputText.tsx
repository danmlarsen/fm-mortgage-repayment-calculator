type AppProps = {
  name: string;
  label: string;
  unit: string;
  unitAlignment?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputText({
  name,
  label,
  unit,
  unitAlignment = "left",
  value = "",
  onChange,
}: AppProps) {
  return (
    <div>
      <label htmlFor={name}>
        <p className="mb-150">{label}</p>
        <div
          className={`flex overflow-hidden rounded-md border border-slate-500 text-xl text-slate-700 ${unitAlignment === "right" ? "flex-row-reverse" : ""}`}
        >
          <span className="px-200 flex items-center bg-slate-100">{unit}</span>
          <input
            className="px-200 py-150 w-full border-slate-500 focus:outline-none"
            type="number"
            name={name}
            id={name}
            value={value}
            onChange={onChange}
          />
        </div>
      </label>
    </div>
  );
}
