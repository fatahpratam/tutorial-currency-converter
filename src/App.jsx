import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo.js';
import { InputBox } from "./components/index.js";

function App() {
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('idr');
  const [convertedAmount, setConvertedAmount] = useState('');

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    const result = Math.floor(amount * currencyInfo[to] * 100) / 100
    setConvertedAmount(result);
  }
  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  return (
    <div className='w-full min-h-screen flex flex-wrap justify-center items-center bg-cover bg-no-re' style={{ backgroundImage: 'url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
      <div className='w-full m-4'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-m bg-white/30'>
          <form onSubmit={(event) => {
            event.preventDefault();
            amount !== '' && convert();
          }}>
            <div className='w-full mb-1'>
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => {
                  setFrom(currency);
                }}
                onAmountChange={(amount) => {
                  setAmount(amount);
                }}
                selectedCurrency={from}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button
                onClick={swap}
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
              >Swap</button>
            </div>
            <div className='w-full mb-1'>
              <InputBox
                label="To"
                currencyOptions={options}
                amount={convertedAmount}
                onCurrencyChange={(currency) => {
                  setTo(currency);
                }}
                selectedCurrency={to}
                amountDisabled
              />
            </div>
            <button
              type='submit'
              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
