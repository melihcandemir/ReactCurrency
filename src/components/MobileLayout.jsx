import { currencies, inputClass, selectClass } from "../partner";

export default function MobileLayout({
  amount,
  setAmount,
  firstCurrency,
  setFirstCurrency,
  secondCurrency,
  setSecondCurrency,
  result,
  isSwapping,
  swapCurrencies,
}) {
  return (
    <div className="md:hidden space-y-4">
      <div className="flex gap-3">
        <input
          type="number"
          id="amountMobile"
          placeholder="Miktar"
          value={amount}
          min="0"
          onChange={(e) => setAmount(e.target.value)}
          className={inputClass}
        />
        <select
          id="firstCurrencyOptionMobile"
          className={selectClass}
          value={firstCurrency}
          onChange={(e) => setFirstCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      {/* Mobile Swap İkonu */}
      <div className="flex justify-center">
        <svg
          id="swapIconMobile"
          onClick={swapCurrencies}
          className={`w-50 h-8 text-gray-600 dark:text-gray-400 cursor-pointer transition-all duration-300 active:scale-95 ${
            isSwapping ? "rotate-[180deg]" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 20V7m0 13-4-4m4 4 4-4m4-12v13m0-13 4 4m-4-4-4 4"
          />
        </svg>
      </div>

      <div className="flex gap-3">
        <select
          id="secondCurrencyOptionMobile"
          className={selectClass}
          value={secondCurrency}
          onChange={(e) => setSecondCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <input
          type="text"
          id="resultMobile"
          placeholder="Sonuç"
          value={result || ""}
          readOnly
          className={inputClass}
        />
      </div>
    </div>
  );
}
