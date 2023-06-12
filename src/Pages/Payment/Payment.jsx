import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';

import { Link, useLoaderData } from "react-router-dom";


const stripPromise = loadStripe(import.meta.env.VITE_PAYMENT_PK_GATEWAY)

const Payment = () => {
    const cart = useLoaderData()
    const total = cart[0].price
    // const total = cart.reduce((sum, coursePrice) => coursePrice.price + sum, 0)
    const price = parseFloat(total.toFixed(2))
    // console.log(total);

    return (
        <div >
            <div className='flex justify-between my-10'>
                <h2 className='5xl uppercase'>Payment Information:</h2>
                <Link to='/paymenthistory' className='btn btn-sm btn-warning'>Payment history</Link>
            </div>
            <Elements stripe={stripPromise}>
                <CheckoutForm price={price} cart={cart}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;