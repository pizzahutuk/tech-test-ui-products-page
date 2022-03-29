import React from "react";

export interface CurrencyProps {
  value: number;
  locale: string;
  currency: string;
}

export function Currency(props: CurrencyProps) {
  const value = new Intl.NumberFormat(props.locale, {
    style: "currency",
    currency: props.currency,
  }).format(props.value);

  return <span className="currency">{value}</span>;
}
