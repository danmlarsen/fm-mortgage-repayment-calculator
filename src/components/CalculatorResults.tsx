import { AnimatePresence, motion } from "framer-motion";
import { MortgageResults } from "../App";
import CalculatorResultsCalculated from "./CalculatorResultsCalculated";
import CalculatorResultsEmpty from "./CalculatorResultsEmpty";

export default function CalculatorResults({
  results,
}: {
  results: MortgageResults | null;
}) {
  let formattedMonthly, formattedTotal;
  if (results) {
    formattedMonthly = new Intl.NumberFormat("en-EN", {
      style: "currency",
      currency: "GBP",
    }).format(results.monthly);
    formattedTotal = new Intl.NumberFormat("en-EN", {
      style: "currency",
      currency: "GBP",
    }).format(results.total);
  }

  return (
    <div className="flex h-full items-center text-slate-300">
      <AnimatePresence initial={false} mode="wait">
        {results !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={0}
          >
            <CalculatorResultsCalculated
              monthly={formattedMonthly!}
              total={formattedTotal!}
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={1}
          >
            <CalculatorResultsEmpty />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
