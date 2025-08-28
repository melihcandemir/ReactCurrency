import axios from "axios";
import { useState } from "react";

export default function Currency() {
  // Url
  const URL =
    "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_LBa940rnurxaVhJghV93BLYGb516CJWmNBHJdnhi&base_currency=";

  const [FirstCurrency, setFirstCurrency] = useState("USD");
  const [SecondCurrency, setSecondCurrency] = useState("TRY");
  const [Conclusion, setConclusion] = useState();
  const [amount, setAmount] = useState("");
  const [isSwapping, setIsSwapping] = useState(false);

  const exchange = async (amount, firstCurrency, secondCurrency) => {
    try {
      const response = await axios.get(`${URL}${firstCurrency}`);
      const rate = response.data.data[secondCurrency];
      const result = rate * amount;
      setConclusion(result.toFixed(2));
    } catch (error) {
      console.error("Döviz kuru alınırken hata oluştu:", error);
      setConclusion("Hata");
    }
  };

  // Para birimlerini değiştir fonksiyonu
  const swapCurrencies = () => {
    setIsSwapping(true);

    // Animasyon için kısa bir gecikme
    setTimeout(() => {
      const tempCurrency = FirstCurrency;
      setFirstCurrency(SecondCurrency);
      setSecondCurrency(tempCurrency);
      setConclusion(""); // Sonucu temizle
      setIsSwapping(false);
    }, 130);
  };

  // Para birimleri listesi
  const currencies = [
    "TRY",
    "USD",
    "EUR",
    "GBP",
    "JPY",
    "CHF",
    "CAD",
    "AUD",
    "SEK",
    "NOK",
    "DKK",
    "PLN",
    "CZK",
    "HUF",
    "RON",
    "BGN",
    "HRK",
    "RUB",
    "CNY",
    "INR",
    "KRW",
    "SGD",
    "HKD",
    "MXN",
    "BRL",
    "ZAR",
    "THB",
    "MYR",
    "PHP",
    "IDR",
    "ILS",
    "NZD",
    "ISK",
  ];
  //  Ortak CSS sınıfları
  const inputClass =
    "w-full h-12 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400";
  const selectClass =
    "w-full h-12 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700";

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700">
        {/* Başlık */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white text-center mb-8">
          DÖVİZ KURU ÇEVİRİCİ
        </h1>

        <div className="space-y-6">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center gap-4">
            <input
              type="number"
              id="amount"
              placeholder="Miktar"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className={inputClass}
            />

            <select
              id="firstCurrencyOption"
              className={selectClass}
              value={FirstCurrency}
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
              value={SecondCurrency}
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
              value={Conclusion || ""}
              readOnly
              className={inputClass}
            />
          </div>
          {/* Mobile Layout */}
          <div className="md:hidden space-y-4">
            <div className="flex gap-3">
              <input
                type="number"
                id="amountMobile"
                placeholder="Miktar"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className={inputClass}
              />
              <select
                id="firstCurrencyOptionMobile"
                className={selectClass}
                value={FirstCurrency}
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
                value={SecondCurrency}
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
                value={Conclusion || ""}
                readOnly
                className={inputClass}
              />
            </div>
          </div>

          {/* Çevir Butonu */}
          <div className="flex justify-center mt-6">
            <button
              id="convertBtn"
              onClick={() => {
                if (amount && FirstCurrency && SecondCurrency) {
                  exchange(parseFloat(amount), FirstCurrency, SecondCurrency);
                }
              }}
              className="bg-blue-600 dark:bg-blue-500 md:hover:bg-blue-700 md:dark:hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-md md:hover:shadow-lg active:scale-95"
            >
              Çevir
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-gray-500 dark:text-gray-400 text-sm">
          Powered by Melih Can Demir
        </div>
      </div>
    </div>
  );
}
