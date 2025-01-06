import { calculateInvestmentResults, formatter } from "../util/investment";
import React from "react";

export default function ResultSection({ theadTitle, input }) {
  const resultData = calculateInvestmentResults(input);
  const initialInvestment = input.initialInvestment;

  return (
    <table id="result">
      <thead>
        {theadTitle.map((title) => (
          <th>{title}</th>
        ))}
      </thead>
      <tbody>
        {resultData.map((item) => {
          const totalInterest =
            item.valueEndOfYear -
            item.annualInvestment * item.year -
            initialInvestment;

          const totalAmountInvested = item.valueEndOfYear - totalInterest;

          return (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
