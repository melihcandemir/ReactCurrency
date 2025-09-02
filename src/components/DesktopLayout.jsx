import { currencies, inputClass, selectClass } from "../partner";

export default function DesktopLayout({
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
    <div className="hidden md:flex items-center gap-4">
      <input
        type="number"
        id="amount"
        placeholder="Miktar"
        value={amount}
        min="0"
        onChange={(e) => setAmount(e.target.value)}
        className={inputClass}
      />

      <select
        id="firstCurrencyOption"
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

      {/* Swap İkonu */}
      <svg
        id="swapIcon"
        onClick={swapCurrencies}
        className={`w-50 h-12 text-gray-600 dark:text-gray-400 rotate-90 cursor-pointer transition-all duration-300 md:hover:scale-110 md:hover:text-blue-500 md:dark:hover:text-blue-400 active:scale-95 ${
          isSwapping ? "rotate-[270deg]" : ""
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

      <select
        id="secondCurrencyOption"
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
        id="result"
        placeholder="Sonuç"
        value={result || ""}
        readOnly
        className={inputClass}
      />
    </div>
  );
}
