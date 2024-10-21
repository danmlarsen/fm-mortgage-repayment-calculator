import {
  validateInterestRate,
  validateMortgageAmount,
  validateMortgageTerm,
  validateMortgageType,
} from "./CalculatorFormValidation";

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

export const initialState: FormState = {
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
  | { type: "mortgageTerm/set"; payload: string }
  | { type: "interestRate/set"; payload: string }
  | { type: "mortgageType/set"; payload: string }
  | { type: "submit"; payload: object }
  | { type: "clear" };

export function formReducer(state: FormState, action: FormAction): FormState {
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
    case "submit":
      return {
        ...state,
        ...action.payload,
        isSubmitted: true,
      };
    case "clear":
      return initialState;
    default:
      return state;
  }
}
