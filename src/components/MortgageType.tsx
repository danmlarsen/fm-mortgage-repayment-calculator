import MortgageTypeRadio from "./MortgageTypeRadio";

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
      <legend>Mortgage Type</legend>
      <MortgageTypeRadio
        isChecked={selectedType === "repayment"}
        value="repayment"
        onChange={onChange}
        typeTitle="Repayment"
      />
      <MortgageTypeRadio
        isChecked={selectedType === "interest"}
        value="interest"
        onChange={onChange}
        typeTitle="Interest Only"
      />
      {!valid && invalidText && <p className="text-red">{invalidText}</p>}
    </fieldset>
  );
}
