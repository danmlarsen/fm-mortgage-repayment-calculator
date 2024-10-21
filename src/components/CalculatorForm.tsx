import { FormEvent, useReducer } from "react";
import InputText from "./InputText";
import Button from "./Button";

import IconCalculator from "../assets/images/icon-calculator.svg";
import MortgageType from "./MortgageType";
import { MortgageData } from "../App";

import {
  validateInterestRate,
  validateMortgageAmount,
  validateMortgageTerm,
  validateMortgageType,
} from "./CalculatorFormValidation";
import { formReducer, initialState } from "./CalculatorFormReducer";

export default function CalculatorForm({
  handleCalculation,
  handleReset,
}: {
  handleCalculation: (data: MortgageData) => void;
  handleReset: () => void;
}) {
  const [
    { isSubmitted, mortgageAmount, mortgageTerm, interestRate, mortgageType },
    dispatch,
  ] = useReducer(formReducer, initialState);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const [mortgageAmountValid, mortgageAmountInvalidText] =
      validateMortgageAmount(mortgageAmount.value);

    const [mortgageTermValid, mortgageTermInvalidText] = validateMortgageTerm(
      mortgageTerm.value,
    );

    const [interestRateValid, interestRateInvalidText] = validateInterestRate(
      interestRate.value,
    );

    const [mortgageTypeValid, mortgageTypeInvalidText] = validateMortgageType(
      mortgageType.value,
    );

    const payload = {
      mortgageAmount: {
        ...mortgageAmount,
        valid: mortgageAmountValid,
        invalidText: mortgageAmountInvalidText,
      },
      mortgageTerm: {
        ...mortgageTerm,
        valid: mortgageTermValid,
        invalidText: mortgageTermInvalidText,
      },
      interestRate: {
        ...interestRate,
        valid: interestRateValid,
        invalidText: interestRateInvalidText,
      },
      mortgageType: {
        ...mortgageType,
        valid: mortgageTypeValid,
        invalidText: mortgageTypeInvalidText,
      },
    };

    dispatch({ type: "submit", payload });

    if (
      !mortgageAmountValid ||
      !mortgageTermValid ||
      !interestRateValid ||
      !mortgageTypeValid
    ) {
      return;
    }

    const data = {
      amount: Number(mortgageAmount.value.trim().replace(/,/g, "")),
      term: Number(mortgageTerm.value),
      interestRate: Number(interestRate.value),
      type: mortgageType.value,
    };

    handleCalculation(data);
  }

  function handleClear() {
    dispatch({ type: "clear" });
    handleReset();
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="space-y-300 md:space-y-500">
        <div className="gap-100 flex flex-col items-start md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl text-slate-900">Mortgage Calculator</h1>
          <button
            className="text-slate-700 underline transition duration-300 hover:text-slate-900 focus:outline-none focus-visible:text-slate-900 focus-visible:ring focus-visible:ring-slate-900 focus-visible:ring-offset-4"
            type="button"
            onClick={handleClear}
          >
            Clear All
          </button>
        </div>

        <div className="space-y-300">
          <InputText
            name="mortgage-amount"
            label="Mortgage Amount"
            unit="£"
            value={mortgageAmount.value}
            isSubmitted={isSubmitted}
            valid={mortgageAmount.valid}
            invalidText={mortgageAmount.invalidText}
            onChange={(e) =>
              dispatch({ type: "mortgageAmount/set", payload: e.target.value })
            }
          />

          <div className="gap-300 grid md:grid-cols-2">
            <InputText
              name="mortgage-term"
              label="Mortgage Term"
              unit="years"
              unitAlignment="right"
              value={mortgageTerm.value}
              isSubmitted={isSubmitted}
              valid={mortgageTerm.valid}
              invalidText={mortgageTerm.invalidText}
              onChange={(e) =>
                dispatch({
                  type: "mortgageTerm/set",
                  payload: e.target.value,
                })
              }
            />
            <InputText
              name="interest-rate"
              label="Interest Rate"
              unit="%"
              unitAlignment="right"
              value={interestRate.value}
              isSubmitted={isSubmitted}
              valid={interestRate.valid}
              invalidText={interestRate.invalidText}
              onChange={(e) =>
                dispatch({ type: "interestRate/set", payload: e.target.value })
              }
            />
          </div>

          <MortgageType
            selectedType={mortgageType.value}
            valid={mortgageType.valid}
            invalidText={mortgageType.invalidText}
            onChange={(e) =>
              dispatch({ type: "mortgageType/set", payload: e.target.value })
            }
          />
        </div>

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
