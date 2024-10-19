export default function MortageType() {
  return (
    <fieldset className="space-y-150">
      <legend>Mortage Type</legend>
      <label
        className="px-200 py-150 gap-200 flex cursor-pointer items-center overflow-hidden rounded-md border border-slate-500 text-xl"
        htmlFor="mortagetype-repayment"
      >
        <input
          className="size-300 cursor-pointer accent-slate-700"
          type="radio"
          name="mortagetype"
          id="mortagetype-repayment"
        />
        <span>Repayment</span>
      </label>
      <label
        className="px-200 py-150 gap-200 flex cursor-pointer items-center overflow-hidden rounded-md border border-slate-500 text-xl"
        htmlFor="mortagetype-interest"
      >
        <input
          className="size-300 cursor-pointer accent-slate-700"
          type="radio"
          name="mortagetype"
          id="mortagetype-interest"
        />
        <span>Interest Only</span>
      </label>
    </fieldset>
  );
}
