import { FormEvent, useState } from "react";
import InputText from "./InputText";
import Button from "./Button";

import IconCalculator from "../assets/images/icon-calculator.svg";
import MortageType from "./MortageType";

export default function CalculatorForm() {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    console.log(mortgageAmount, mortgageTerm, interestRate);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-300">
        <div className="flex flex-col items-start md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl">Mortgage Calculator</h1>
          <button>Clear All</button>
        </div>

        <InputText
          name="mortgage-amount"
          label="Mortgage Amount"
          unit="£"
          value={mortgageAmount}
          onChange={(e) => setMortgageAmount(e.target.value)}
        />

        <div className="gap-300 grid md:grid-cols-2">
          <InputText
            name="mortgage-term"
            label="Mortgage Term"
            unit="years"
            unitAlignment="right"
            value={mortgageTerm}
            onChange={(e) => setMortgageTerm(e.target.value)}
          />
          <InputText
            name="interest-rate"
            label="Interest Rate"
            unit="%"
            unitAlignment="right"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </div>

        <MortageType />

        <div>
          <Button>
            <span className="gap-150 flex items-center">
              <img src={IconCalculator} alt="Calculator Icon" />
              <span>Calculate Repayments</span>
            </span>
          </Button>
        </div>
      </div>
    </form>
  );
}
