import React from 'react';
import ReactDoM from 'react-dom';
import '../DepositForm/DepositForm.css';
import { useState } from 'react';
import {Link} from 'react-router-dom';
//import { CardElement, injectStripe } from 'react-stripe-elements';
//import { CardExpiryElement, CardNumberElement, useElements } from '@stripe/react-stripe-js';
//import { useStripe } from '@stripe/react-stripe-js';
import calogo from '../../images/logo (3).png';
import caltxTrader from '../../images/CALTEX TRADER (4).png';
import masterCard from '../../images/mastercard.png';
import toggle from '../../images/Vector (4).png';
import visA from '../../images/Group 23.png';
import { BrowserRouter as Router ,Route } from 'react-router-dom';
//import { loadStripe } from '@stripe/stripe-js';
//import { Elements } from '@stripe/react-stripe-js';



//const stripePromise =loadStripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc'); // This is a test api, replace with original publishable api key

const DepositsForm = () => {
     /*  const stripe = useStripe();
        const elements = useElements();
        const [formData, setFormData] = useState({
             cardholder: '',
             email: '',
        }); 

        const [loading, setLoading] = useState(false);

        const handleInputChange = (e) =>{
            const { name, value } = e.target;
            setFormData({
                    ...formData,
                    [name]: value,
            });
        }; 


        const handleSubmit = async (e) => {
            e.preventDefault();
            setLoading(true);

         /*   //Create a PaymentMethod with the card data
            const { paymentMethod, error } =await stripe.createPaymentMethod({
                type: 'card',
                card: elements.getElement(CardElement),
            }); */


          /*  if (!error) {
                // send payment data to the backend
                try{
                    const response = await fetch('/your-api-endpoint', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            paymentMethod: paymentMethod.id,
                            cardholder: formData.cardholder,
                            email: formData.email,
                        }),
                       
                    });

                     if (response.ok){
                        const responseData = await response.json();
                    // Handle the response from the backend (success or error)
                    console.log(response.data);  // can be replaced with your desired logic
                     } else {
                    console.error('Error communicating with the backend:', response.statusText);
                }

            } catch (error) {
                console.error('Error communicating with the backend:', error);
            }
            
         } else {
                console.error('Error creating PaymentMethod:', error);
            }

            setLoading(false);
        
        }; */


  return ( 
   
    <div class="bodywrapper">
    <div class="bodywraps">
       <div class="logos">
        <span>
        <img src={calogo} />
        </span>
        <span>
        <img src={caltxTrader} />
        </span>
       </div>
    
       <div class="rest-of-form">
        <div class="the-rest">
            <div class="amount-to-deposit">
               <p> 50000.00.USD </p>
            </div>
            
            
            <form onsubmit='' id='formz'>
            <div class="card-number">
                <span>Card Number</span>
                <input type="number" id="cardNo" name="cardNumber" value=''  
                  onChange=''   placeholder="1234 5678 9101 1121" />
            </div>


            
            <div class="edCv">
                <div class="expiryDate">
                    <span>Expiry Date</span>
                    <input type="text" id="eD" value="" placeholder="MM/YY" />
                </div>


                <div class="cvv">
                    <span>CVV</span>
                    <input type="number" id="cvv" value="" placeholder="123" />
                </div>
            </div>


      
            <div class="cardHolder">
                <span>Card Holder</span>
                <input type="text" id="cd" value='' onChange=''
                 name="cardholder" placeholder="Charles Fredick" />
            </div>
  

            <div class="emailAddress">
                <span>Email address</span>
                <input type="email" id="emailAdr" value='' name="email" onChange=''
                placeholder="charlesfredick@gmail.com" />
            </div>
        

            {/*<button type='submit' disabled={!stripe || loading}>
                {loading ? 'Processing...' : 'Deposit'}
                 </button> */}

            <div class="save-details">
                <img src={toggle} />
                <span>Save details for subsequent payments</span>
            </div>

            <div class="pay">
                <h2>Pay</h2>
            </div>
            

            <div class="images">
                <span>
                    <img src={masterCard} />
                </span>
                <span>
                    <img src={visA} />
                </span>
            </div>
            </form>
           
            
       </div>
       </div>


    </div>
</div>

  )
}

export default DepositsForm; 