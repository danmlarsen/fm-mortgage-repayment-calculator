import { MortgageResults } from "../App";
import CalculatorResultsEmpty from "./CalculatorResultsEmpty";

export default function CalculatorResults({
  results,
}: {
  results: MortgageResults | null;
}) {
  return (
    <div className="flex h-full items-center text-slate-300">
      {results !== null ? (
        <div className="space-y-500">
          <div className="space-y-200">
            <h2 className="text-2xl text-white">Your results</h2>
            <p>
              Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click
              “calculate repayments” again.
            </p>
          </div>
          <div className="p-400 space-y-400 border-t-lime divide-y divide-slate-300/25 rounded-lg border-t-4 bg-black/25">
            <div className="space-y-100">
              <p>Your monthly repayments</p>
              <h3 className="text-lime text-3xl">
                £{results.monthly.toFixed(2)}
              </h3>
            </div>
            <div className="space-y-100">
              <p>Total you'll repay over the term</p>
              <h4 className="text-2xl text-white">
                {results.total.toFixed(2)}
              </h4>
            </div>
          </div>
        </div>
      ) : (
        <CalculatorResultsEmpty />
      )}
    </div>
  );
}
