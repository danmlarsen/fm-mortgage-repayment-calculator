export const validateMortgageAmount = (
  amount: string,
): [isValid: boolean, invalidText: string] => {
  if (!amount) return [false, "This field is required"];
  const trimmedAmount = Number(amount.trim().replace(/,/g, ""));

  if (
    isNaN(trimmedAmount) ||
    Number(trimmedAmount) < 0.1 ||
    Number(trimmedAmount) > Number.MAX_SAFE_INTEGER
  )
    return [false, "Please enter a valid number"];
  return [true, ""];
};
export const validateMortgageTerm = (
  amount: string,
): [isValid: boolean, invalidText: string] => {
  if (!amount) return [false, "This field is required"];
  if (isNaN(Number(amount)) || Number(amount) < 0.1 || Number(amount) > 100)
    return [false, "Please enter a valid number between 0.1 and 100"];
  return [true, ""];
};
export const validateInterestRate = (
  amount: string,
): [isValid: boolean, invalidText: string] => {
  if (!amount) return [false, "This field is required"];
  if (isNaN(Number(amount)) || Number(amount) < 0.1 || Number(amount) > 100)
    return [false, "Please enter a valid number between 0.1 and 100"];
  return [true, ""];
};
export const validateMortgageType = (
  amount: string,
): [isValid: boolean, invalidText: string] => {
  if (!amount) return [false, "This field is required"];
  return [true, ""];
};
