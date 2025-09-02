import { useState } from "react";
import { exchange } from "../partner";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";

export default function Currency() {
  // State yönetimi
  const [firstCurrency, setFirstCurrency] = useState("USD");
  const [secondCurrency, setSecondCurrency] = useState("TRY");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");
  const [isSwapping, setIsSwapping] = useState(false);

  // Para birimlerini değiştir fonksiyonu
  const swapCurrencies = () => {
    setIsSwapping(true);

    // Animasyon için kısa bir gecikme
    setTimeout(() => {
      const tempCurrency = firstCurrency;
      setFirstCurrency(secondCurrency);
      setSecondCurrency(tempCurrency);
      setResult(""); // Sonucu temizle
      setIsSwapping(false);
    }, 130);
  };

  // Döviz çevirme fonksiyonu
  const handleConvert = async () => {
    if (amount && firstCurrency && secondCurrency) {
      const convertedResult = await exchange(
        parseFloat(amount),
        firstCurrency,
        secondCurrency
      );
      setResult(convertedResult);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700">
        {/* Başlık */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white text-center mb-8">
          DÖVİZ KURU ÇEVİRİCİ
        </h1>

        <div className="space-y-6">
          {/* Desktop Layout */}
          <DesktopLayout
            amount={amount}
            setAmount={setAmount}
            firstCurrency={firstCurrency}
            setFirstCurrency={setFirstCurrency}
            secondCurrency={secondCurrency}
            setSecondCurrency={setSecondCurrency}
            result={result}
            isSwapping={isSwapping}
            swapCurrencies={swapCurrencies}
          />

          {/* Mobile Layout */}
          <MobileLayout
            amount={amount}
            setAmount={setAmount}
            firstCurrency={firstCurrency}
            setFirstCurrency={setFirstCurrency}
            secondCurrency={secondCurrency}
            setSecondCurrency={setSecondCurrency}
            result={result}
            isSwapping={isSwapping}
            swapCurrencies={swapCurrencies}
          />

          {/* Çevir Butonu */}
          <div className="flex justify-center mt-6">
            <button
              id="convertBtn"
              onClick={handleConvert}
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
