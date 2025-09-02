import axios from "axios";

// API URL'i
const URL =
  "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_LBa940rnurxaVhJghV93BLYGb516CJWmNBHJdnhi&base_currency=";

// API isteği fonksiyonu
export const exchange = async (amount, firstCurrency, secondCurrency) => {
  try {
    const response = await axios.get(`${URL}${firstCurrency}`);
    const rate = response.data.data[secondCurrency];
    const result = rate * amount;
    return result.toFixed(2);
  } catch (error) {
    console.error("Döviz kuru alınırken hata oluştu:", error);
    return "Hata";
  }
};

// Para birimleri listesi
export const currencies = [
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
export const inputClass =
  "w-full h-12 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none";
export const selectClass =
  "w-full h-12 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700";
