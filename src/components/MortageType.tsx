type AppProps = {
  selectedType: string;
  valid?: boolean;
  invalidText?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function MortageType({
  selectedType = "",
  valid = false,
  invalidText = "",
  onChange,
}: AppProps) {
  return (
    <fieldset className="space-y-150">
      <legend>Mortage Type</legend>
      <label
        className="px-200 py-150 gap-200 hover:border-lime has-[:focus]:border-lime has-[:checked]:bg-lime/15 flex cursor-pointer items-center overflow-hidden rounded-md border border-slate-500 text-xl"
        htmlFor="mortagetype-repayment"
      >
        <input
          className="size-300 accent-lime cursor-pointer"
          type="radio"
          name="mortagetype"
          id="mortagetype-repayment"
          value="repayment"
          checked={selectedType === "repayment"}
          onChange={onChange}
          required
        />
        <span className="text-slate-900">Repayment</span>
      </label>
      <label
        className="px-200 py-150 gap-200 hover:border-lime has-[:checked]:bg-lime/15 flex cursor-pointer items-center overflow-hidden rounded-md border border-slate-500 text-xl"
        htmlFor="mortagetype-interest"
      >
        <input
          className="size-300 accent-lime cursor-pointer"
          type="radio"
          name="mortagetype"
          id="mortagetype-interest"
          value="interest"
          checked={selectedType === "interest"}
          onChange={onChange}
          required
        />
        <span className="text-slate-900">Interest Only</span>
      </label>
      {!valid && invalidText && <p className="text-red">{invalidText}</p>}
    </fieldset>
  );
}
