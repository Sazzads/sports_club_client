import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-hot-toast';
// import './formStyle.css'

const CheckoutForm = ({ price, cart }) => {
    const stripe = useStripe()
    const elements = useElements()
    const { user } = useAuth();
    const [cardError, setCardError] = useState('')
    const [axiosSecure] = useAxiosSecure()
    const [process, setProcess] = useState(false)
    const [clientSecret, setClientSecret] = useState('')
    const [trxID, setTrxId] = useState('')
    // console.log(cart);
    // console.log(cart[0].email,cart[0].courseId,cart[0].seat);
    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                // console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret)
            })
    }, [price, axiosSecure]);



    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('[error]', error);
            setCardError(error.message)


        }
        else {
            // console.log('[PaymentMethod]', paymentMethod);
            setCardError('')

        }
        setProcess(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || "anonymous",
                        name: user?.displayName || "anonymous",
                    },
                },
            },);

        if (confirmError) {
            console.log(confirmError);
        }

        console.log(paymentIntent);

        setProcess(false);

        if (paymentIntent.status === 'succeeded') {

            setTrxId(paymentIntent.id)

            const payment = {
                email: user?.email,
                trxID: paymentIntent.id,
                price,
                date: new Date(),
                email: cart[0]?.email,
                courseId: cart[0].courseId,
                cartId: cart.map(data => data._id),
                seat: cart[0]?.seat,
                className: cart[0]?.className,
                image: cart[0]?.image,
            }
            axiosSecure.post('/pays', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        // console.log(res.data); 
                        toast.success("Payment succesful")
                    }
                })

            //new api for seat update

            // fetch(`http://localhost:5000/allclass/${cart[0].courseId}`, {
            //     method: 'PATCH'
            // })
            //     .then(res => res.json())
            //     .then(data => {
            //         if (data.modifiedCount) {
            //             console.log('update class');
            //         }
            //     })


            const seat = 1;
            const availableSeat = {
                availableSeat: seat
            }
            console.log(availableSeat);
            // const newAvailableSeat = { availableSeat }

            console.log(cart[0].courseId);
            fetch(`http://localhost:5000/aallclass/${cart[0].courseId}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(availableSeat)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
            //--------------------
        }

    }
    return (
        <div className='w-full'>
            <form className='' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-info btn-sm my-5 px-3' type="submit" disabled={!stripe || !clientSecret || process}>
                    Payment
                </button>
            </form>
            <span className='font-thin text-xs'>Card Example: 4242424242424242</span>

            <div className='my-3'>
                {cardError && <p className='text-red-700 text-xl'>{cardError}</p>} {trxID && <p className='text-green-700'>Payment success.    <br /> your transiction ID is:  {trxID}</p>}
            </div>
        </div>
    );
};

export default CheckoutForm;