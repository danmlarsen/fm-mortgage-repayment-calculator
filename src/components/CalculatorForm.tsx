import { FormEvent, useReducer } from "react";
import InputText from "./InputText";
import Button from "./Button";

import IconCalculator from "../assets/images/icon-calculator.svg";
import MortageType from "./MortageType";
import { MortgageData } from "../App";

interface FormState {
  isSubmitted: boolean;
  mortgageAmount: {
    value: string;
    valid: boolean;
    invalidText: string;
  };
  mortgageTerm: {
    value: string;
    valid: boolean;
    invalidText: string;
  };
  interestRate: {
    value: string;
    valid: boolean;
    invalidText: string;
  };
  mortgageType: {
    value: string;
    valid: boolean;
    invalidText: string;
  };
}

const initialState: FormState = {
  isSubmitted: false,
  mortgageAmount: {
    value: "",
    valid: false,
    invalidText: "",
  },
  mortgageTerm: {
    value: "",
    valid: false,
    invalidText: "",
  },
  interestRate: {
    value: "",
    valid: false,
    invalidText: "",
  },
  mortgageType: {
    value: "",
    valid: false,
    invalidText: "",
  },
};

type FormAction =
  | { type: "mortgageAmount/set"; payload: string }
  | { type: "mortgageAmount/invalid"; payload: string }
  | { type: "mortgageTerm/set"; payload: string }
  | { type: "mortgageTerm/invalid"; payload: string }
  | { type: "interestRate/set"; payload: string }
  | { type: "mortgageAmount/set"; payload: string }
  | { type: "interestRate/invalid"; payload: string }
  | { type: "mortgageType/set"; payload: string }
  | { type: "mortgageType/invalid"; payload: string }
  | { type: "submit" }
  | { type: "clear" };

const validateMortgageAmount = (
  amount: string,
): [isValid: boolean, invalidText: string] => {
  if (!amount) return [false, "This field is required"];
  return [true, ""];
};
const validateMortgageTerm = (
  amount: string,
): [isValid: boolean, invalidText: string] => {
  if (!amount) return [false, "This field is required"];
  return [true, ""];
};
const validateInterestRate = (
  amount: string,
): [isValid: boolean, invalidText: string] => {
  if (!amount) return [false, "This field is required"];
  return [true, ""];
};
const validateMortgageType = (
  amount: string,
): [isValid: boolean, invalidText: string] => {
  if (!amount) return [false, "This field is required"];
  return [true, ""];
};

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "mortgageAmount/set": {
      const [isValid, invalidText] = validateMortgageAmount(action.payload);

      return {
        ...state,
        mortgageAmount: {
          ...state.mortgageAmount,
          value: action.payload,
          valid: isValid,
          invalidText: invalidText,
        },
      };
    }
    case "mortgageAmount/invalid":
      return {
        ...state,
        mortgageAmount: {
          ...state.mortgageAmount,
          valid: false,
          invalidText: action.payload,
        },
      };
    case "mortgageTerm/set": {
      const [isValid, invalidText] = validateMortgageTerm(action.payload);

      return {
        ...state,
        mortgageTerm: {
          ...state.mortgageTerm,
          value: action.payload,
          valid: isValid,
          invalidText: invalidText,
        },
      };
    }
    case "mortgageTerm/invalid":
      return {
        ...state,
        mortgageTerm: {
          ...state.mortgageTerm,
          valid: false,
          invalidText: action.payload,
        },
      };
    case "interestRate/set": {
      const [isValid, invalidText] = validateInterestRate(action.payload);

      return {
        ...state,
        interestRate: {
          ...state.interestRate,
          value: action.payload,
          valid: isValid,
          invalidText: invalidText,
        },
      };
    }
    case "interestRate/invalid":
      return {
        ...state,
        interestRate: {
          ...state.interestRate,
          valid: false,
          invalidText: action.payload,
        },
      };
    case "mortgageType/set": {
      const [isValid, invalidText] = validateMortgageType(action.payload);

      return {
        ...state,
        mortgageType: {
          ...state.mortgageType,
          value: action.payload,
          valid: isValid,
          invalidText: invalidText,
        },
      };
    }
    case "mortgageType/invalid":
      return {
        ...state,
        mortgageType: {
          ...state.mortgageType,
          valid: false,
          invalidText: action.payload,
        },
      };
    case "submit":
      return {
        ...state,
        isSubmitted: true,
      };
    case "clear":
      return initialState;
    default:
      return state;
  }
}

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

    dispatch({ type: "submit" });

    // if (!mortgageAmount.value)
    //   dispatch({
    //     type: "mortgageAmount/invalid",
    //     payload: "This field is required",
    //   });
    // if (!mortgageTerm.value)
    //   dispatch({
    //     type: "mortgageTerm/invalid",
    //     payload: "This field is required",
    //   });
    // if (!interestRate.value)
    //   dispatch({
    //     type: "interestRate/invalid",
    //     payload: "This field is required",
    //   });
    // if (!mortgageType.value)
    //   dispatch({
    //     type: "mortgageType/invalid",
    //     payload: "This field is required",
    //   });

    if (
      !mortgageAmount.valid ||
      !mortgageTerm.valid ||
      !mortgageType.valid ||
      interestRate.valid
    ) {
      return;
    }

    const data = {
      amount: Number(mortgageAmount.value),
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
      <div className="space-y-300">
        <div className="gap-100 flex flex-col items-start md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl text-slate-900">Mortgage Calculator</h1>
          <button className="underline" type="button" onClick={handleClear}>
            Clear All
          </button>
        </div>

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

        <MortageType
          selectedType={mortgageType.value}
          valid={mortgageType.valid}
          invalidText={mortgageType.invalidText}
          onChange={(e) =>
            dispatch({ type: "mortgageType/set", payload: e.target.value })
          }
        />

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
