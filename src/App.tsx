import { useState } from "react";
import CalculatorForm from "./components/CalculatorForm";
import CalculatorResults from "./components/CalculatorResults";

export interface MortgageData {
  amount: number;
  term: number;
  interestRate: number;
  type: string;
}

export interface MortgageResults {
  monthly: number;
  total: number;
}

const calcMonthlyInterestRate = (annualInterestRate: number) =>
  annualInterestRate / (100 * 12);
const calcTotalNumberOfPayments = (termYears: number) => termYears * 12;
const calcMonthlyPayment = (
  amount: number,
  monthlyInterestRate: number,
  totalNumberOfPayments: number,
) =>
  amount *
  ((monthlyInterestRate * (1 + monthlyInterestRate) ** totalNumberOfPayments) /
    ((1 + monthlyInterestRate) ** totalNumberOfPayments - 1));
const calcMonthlyInterestOnlyPayment = (
  amount: number,
  monthlyInterestRate: number,
) => amount * monthlyInterestRate;
const calcTotalPayment = (monthlyPayment: number, term: number) =>
  monthlyPayment * term * 12;

function App() {
  const [results, setResults] = useState<MortgageResults | null>(null);

  function handleCalculation(data: MortgageData) {
    const monthlyInterestRate = calcMonthlyInterestRate(data.interestRate);
    const totalNumberOfPayments = calcTotalNumberOfPayments(data.term);

    const monthlyPayment =
      data.type === "repayment"
        ? calcMonthlyPayment(
            data.amount,
            monthlyInterestRate,
            totalNumberOfPayments,
          )
        : calcMonthlyInterestOnlyPayment(data.amount, monthlyInterestRate);

    const totalPayment = calcTotalPayment(monthlyPayment, data.term);

    const results = {
      monthly: monthlyPayment,
      total: totalPayment,
    };

    setResults(results);
  }

  function handleReset() {
    setResults(null);
  }

  return (
    <div className="md:py-500 min-h-screen lg:grid lg:place-items-center">
      <main className="mx-auto grid max-w-2xl overflow-hidden bg-white shadow-lg shadow-slate-900/10 md:rounded-3xl lg:max-w-5xl lg:grid-cols-2">
        <div className="py-400 px-300 md:p-500">
          <CalculatorForm
            handleCalculation={handleCalculation}
            handleReset={handleReset}
          />
        </div>
        <div className="py-400 px-300 md:p-500 bg-slate-900 lg:rounded-bl-[100px]">
          <CalculatorResults results={results} />
        </div>
      </main>
    </div>
  );
}

export default App;
