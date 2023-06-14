import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
// import useCart from "../../../hooks/useCart";
import { useLoaderData } from 'react-router-dom';
import Checkoutform from './Checkoutform';



const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
    const cart=useLoaderData();
    const{price}=cart;

    return (
        <div>
            <h2>Please Pay first to Enroll the Class</h2>
            <h6>{price}</h6>
            <Elements stripe={stripePromise}>
                <Checkoutform cart={cart} ></Checkoutform>
            </Elements>
        </div>
    );
};

export default Payment;