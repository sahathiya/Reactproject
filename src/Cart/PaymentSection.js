
import React, { useContext } from 'react';
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
// import { Cartcontext } from '../context/Addcart';
import { MyCart } from '../useContext/Cartcontext';
const stripePromise = loadStripe("pk_test_51QL0NfIOd1YKkok3bexsMLR2SoxLwjv9eYagzjkywq3fFTOxTr4taZiLfUOY1Bvkr1vCxFuR2CFyAggEhumWMF9m002EgokSgb");
function PaymentSection() {
  
    // const clientSecret = fchgvbn

  const {clientSecret} = useContext(MyCart)


  const option = { clientSecret }
  console.log("option",option);
  

  return (
    <div className= 'bg-white mt-16'>
  <div className="m-auto max-w-lg p-6 text-blue-900 pt-16 bg-white rounded-lg shadow-lg">
    <h1 className="text-3xl py-2 text-center font-semibold">Payment</h1>
    <EmbeddedCheckoutProvider className="bg-gray-600 p-4 rounded-md" stripe={stripePromise} options={option}>
      <EmbeddedCheckout   />
    </EmbeddedCheckoutProvider>
  </div>
</div>


  )
  
}

export default PaymentSection



