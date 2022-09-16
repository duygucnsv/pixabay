export const calculateMontlyPayments = (interest, capital, installment) => {
  const totalPayment = (capital * (1 - interest)) ^ installment;
  const monthlyPayment = totalPayment / installment;
  const result = [];
  let remaningCapital = capital;
  for (let i = 0; i < installment; i++) {
    const calculatedInsterest = remaningCapital*interest;
    const remaning= monthlyPayment - calculatedInsterest;
    remaningCapital = remaningCapital-remaning;
    const payment = {
      no: i + 1,
      monthlyPayment,
      capital: remaningCapital,
      remaning,
      interest: calculatedInsterest,
      KKDF: calculatedInsterest * 0.15,
      BSMV: calculatedInsterest*0.1,
    };
    result.push(payment);
  }
  return result;
};

console.log(calculateMontlyPayments(0.027,100000,12));