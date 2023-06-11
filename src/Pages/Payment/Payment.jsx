import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import useCourseCart from '../../hooks/useCourseCart';


const stripPromise = loadStripe(import.meta.env.VITE_PAYMENT_PK_GATEWAY)


const Payment = () => {
    const [cart] = useCourseCart()
    const total = cart.reduce((sum, coursePrice) => coursePrice.price + sum, 0)
    const price = parseFloat(total.toFixed(2))

    return (
        <div>
            <div>
                <h2 className='5xl uppercase'>Payment Information:</h2>
            </div>
            <Elements stripe={stripPromise}>
                <CheckoutForm price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;