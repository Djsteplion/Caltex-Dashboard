import React from 'react';
import ReactDoM from 'react-dom';
import { useState } from 'react';
import '../../components/Deposit/DepositPage.css';

import {Link} from 'react-router-dom';
import caltexTrader from '../../images/caltexTrader.png';
import logo from '../../images/logo (1).png'
import john from '../../images/John.jpg';
import forex from '../../images/forex.png';
import crypto from '../../images/crypto.png';
import withdraw from '../../images/withdraw.png';
import help from '../../images/help.png';
import profile from '../../images/profile.png';
import deposit from '../../images/deposit.png';
import legal from '../../images/legal.png';
import logout from '../../images/logout.png';
import closedeye from '../../images/closedeye.png';
import backarrow from '../../images/backArrow.png';
import visa from '../../images/visa.png';
import mastercard from '../../images/mastercard.png';
import cryptovec from '../../images/cryptovector.png';
import btc from '../../images/Bitcoin.png';
import wallet from '../../images/wallet.png';
import creditcard from '../../images/creditcard.png';
import { BrowserRouter as Router ,Route } from 'react-router-dom';

import { BiSolidDashboard } from 'react-icons/bi';



const DepositPage = () => {

  function revealTransDetails(){
    document.getElementById('trans-pro-det').style.display = 'block';
    document.getElementById('transactionPro2').style.display = 'block';
    document.getElementById('transactionPro2').style.display = 'flex';
    document.getElementById('transactionPro1').style.display = 'none';
    document.getElementById('transactionPro2').style.backgroundColor = 'rgba(30,30,30,0.05)';
}

function closeTransDetails(){
    document.getElementById('trans-pro-det').style.display = 'none';
    document.getElementById('transactionPro1').style.display = 'block';
    document.getElementById('transactionPro1').style.display = 'flex';
    document.getElementById('transactionPro2').style.display = 'none';
}

function cryptoDeposit(){
    document.getElementById('crypto-options').style.display = 'none';
    document.getElementById('crypto-payments').style.display = 'none';
    document.getElementById('credit-options').style.display = 'none';
    document.getElementById('credit-card-payments').style.display = 'none';
    document.getElementById('copy-and-paste').style.display = 'none';
    document.getElementById('cdm').style.display = 'block';
    document.getElementById('cryptoDeposit').style.display = 'block';
    document.getElementById('withdrawNow').style.display = 'block';
    document.getElementById('withdrawal-network').style.display = 'block';
    document.getElementById('enter-amount').style.display = 'block';
    document.getElementById('depositFee-processingTime').style.display = 'block';
    document.getElementById('cardDeposit').style.display = 'none';   
    document.getElementById('enter-id').style.display = 'block';
}

function showAll(){
    document.getElementById('crypto-options').style.display = 'block';
    document.getElementById('crypto-payments').style.display = 'block';
    document.getElementById('credit-options').style.display = 'block';
    document.getElementById('credit-card-payments').style.display = 'block';
    document.getElementById('cryptoDeposit').style.display = 'none';
    document.getElementById('cdm').style.display = 'none';
    document.getElementById('depositFee-processingTime').style.display = 'none'; 
    document.getElementById('cardDeposit').style.display = 'none'; 
}


function cardDeposit(){
    document.getElementById('crypto-options').style.display = 'none';
    document.getElementById('crypto-payments').style.display = 'none';
    document.getElementById('credit-options').style.display = 'none';
    document.getElementById('credit-card-payments').style.display = 'none';
    document.getElementById('cdm').style.display = 'block';
    document.getElementById('depositFee-processingTime').style.display = 'block'; 
    document.getElementById('cardDeposit').style.display = 'block'; 
    document.getElementById('cryptoDeposit').style.display = 'none';
}

function depositCryptoNow(){
    document.getElementById('copy-and-paste').style.display = 'block';
    document.getElementById('withdrawNow').style.display = 'none';
    document.getElementById('withdrawal-network').style.display = 'none';
    document.getElementById('enter-amount').style.display = 'none';
    document.getElementById('enter-id').style.display = 'none';
}
                                     

function congratOnWithdraw(){
    document.getElementById('cryptoWithdrawal').style.display = 'none';
    document.getElementById('withraw-limit-text').style.display = 'none';
    document.getElementById('withdraw-options').style.display = 'none';
    document.getElementById('transactionPro1').style.display = 'none';
    document.getElementById('transactionPro2').style.display = 'none';
    document.getElementById('trans-pro-del').style.display = 'none';
    document.getElementById('congratulations').style.display = 'block';
}



/** Begininng Of script for menu **/

function openNav(){
    document.getElementById("sidenav").style.width="70%";
   
}

function closeNav(){
    document.getElementById("sidenav").style.width="0";
   
}
/** End Of script for menu */


    const [name, setName ] = useState('');
    const [currency, setCurrency ] = useState('USD');
    const [ cryptoNetwork, setCryptoNetwork ] =useState('');
    const [ amount, setAmount ] = useState('');
    const [ paymentStatus, setPaymentStatus] = useState(null);
    const [ investmentId, setInvestmentId] = useState('');
    const [ investment, setInvestment] = useState( {} );

const handlePayment = async() => {



    try{
        // make an API  request to your backend to create a Coinbase commerce charge
        const response = await fetch('https://caltex-api.onrender.com/api/transactions/process-fiat-payment',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                productName: 'Crypto Deposit',
                amount: parseFloat(amount), //convert the amount to a number
                investmentId,
                investment,
                currency: currency,
                network: cryptoNetwork,

            }),
        });

        if (response.ok){
            // charge creation successful, extract payment details from the response
            const chargeData = await response.json();

            ///Redirect or display payment details to the user
            setPaymentStatus('Payment created successfully. Charge ID: ${chargeData.id}');
        }else{
            // Handle error if charge creation fails
            setPaymentStatus('Payment creation failed');
        }
    } catch (error) {
        console.error('Error creating charge:', error);
        setPaymentStatus('Error creating payment');
    }
   
    document.getElementById('copy-and-paste').style.display = 'block';
    document.getElementById('withdrawNow').style.display = 'none';
    document.getElementById('withdrawal-network').style.display = 'none';
    document.getElementById('enter-amount').style.display = 'none';
    document.getElementById('enter-id').style.display = 'none';
};

  return (
        <div>
     {/* <!--Menu--> */}
    <div class="mySidenav" id="sidenav">
        <Link  to="" class="closebtn" id='close-btn' onClick={closeNav}>&times;</Link>
        <Link to="/" class=" "><BiSolidDashboard id="other-icon" className="dashboard-icon"/>Dashboard</Link>
        <Link to="/" class="linkss"><img src={profile} id="other-icon" alt="profile-icon"/>Profile</Link>
        <Link to="/Deposit/DepositPage" class="linkss"><img src={deposit} id="other-icon" alt="deposit-icon"/>Deposit</Link>
        <Link to="/Withdraw/withdrawPage" class="linkss"><img src={withdraw} id="other-icon" alt="withdraw-icon"/>Withdraw</Link>
        <Link to="/Invest/InvestPage" class="linkss"><img src={crypto} id="other-icon" alt="crypto-icon"/>Crypto</Link>  
        <Link to="/Invest/InvestPage" class="linkss"><img src={forex} id="other-icon" alt="forex-icon"/>Forex</Link>
        <Link to="/" class="linkss"><img src={help} id="other-icon" alt="help-icon"/>HELP</Link>
        <Link to="/" class="linkss"><img src={legal} id="other-icon" alt="legal-icon"/>Legal Documents</Link>
        <Link to="/" class="linkss"><img src={logout} id="other-icon" alt="logout-icon"/>LogOut</Link>
    </div>

    <div class="dashboard-container">
    <div class="board">
        <div class="dashboard-panel">
            <div class="panels">
                <div class="logo">
                <span><img src={logo} alt="logo"/></span>
                <span><img src={caltexTrader} alt="caltek-logo"/></span>
                </div>
                <div class="panel-control">
                <Link to='/'class="controld" id="dashboard" onclick=" " ><BiSolidDashboard id="other-icon" className="dashboard-icon"/>Dashboard</Link>
                    <span class="control" id=" " onclick=" "><img src={profile} id="other-icon" alt="profile-icon"/>Profile</span>
                    <Link to ='/Deposit/DepositPage'  class="control" id="funding" onclick=" "><b>FUNDING</b></Link>
                    <Link to ='/Deposit/DepositPage' class="control" id=" " onclick=" "><img src={deposit} id="other-icon" alt="deposit-icon"/>Deposit</Link>
                    <Link to ='/Withdraw/WithdrawPage' class="control" id=" " onclick=" "><img src={withdraw} id="other-icon" alt="withdraw-icon"/>Withdraw</Link>
                    <Link to ='/Invest/InvestPage' class="control" id="trading" onclick=" "><b>TRADING</b></Link>
                    <Link to ='/Invest/InvestPage' class="control" id=" " onclick=" "><img src={crypto} id="other-icon" alt="crypto-icon"/>Crypto</Link>
                    <Link to ='/Invest/InvestPage' class="control" id=" " onclick=" "><img src={forex} id="other-icon" alt="forex-icon"/>Forex</Link>
                    <span class="control" id="partners" onclick=" "><b> PARTNERS</b></span>
                    <span class="control" id="bam" onclick=" ">Become a Merchant</span>
                    <span class="control" id="help" onclick=" "><img src={help} id="other-icon" alt="help-icon"/>HELP</span>
                    <span class="control" id=" " onclick=" "><img src={legal} id="other-icon" alt="legal-icon"/>Legal Documents</span>
                    <span class="control" id=" " onclick=" "><img src={logout} id="other-icon" alt="logout-icon"/>LogOut</span>
                </div>   
            </div>
        </div>
        

        <div class="dashboard-content">
                <div class="board-content">
        {/*
         This is the Container that displays "Welome back John" 
        */}
                    <div class="welcome-user">
                        <div class="welcome">
                            <div class="welcome-text">
                                <p>Welcome back, John</p>
                            </div>
                            <div class="welcome-asset">
                                <span><img src={john} alt="user-avatar"/></span>
                                <span class="john"><p>John Smith</p></span>
                                <span class="bell-notification" id=" " onclick=" "><i class="fa fa-bell"></i></span>
                            </div>
                            <div class="menu-button" onClick={openNav}>
                            &#9776;
                            </div>
                        </div>
                    </div>



                  {/* <!--DEPOSIT CONTAINER-->  */}
                 <div class="deposit-funds-container" >
                    <div class="deposit-funds">
                        <div class="deposit-fund-text">
                            <h3>Deposit Fund</h3>
                        </div>
                        <div class="deposit-content-container">
                            <div class="deposit-container">
                                <div class="deposit-limit-text">
                                    <p>Your deposit limit is $5,000 , get your account fully 
                                        verified to increase your deposit limit by  
                                        <span class="clicking-here"> <b>clicking here</b> </span>
                                    </p>
                                </div>
                                <div class="deposit-options">
                                    <div class="depo-options">
                                        <div class="all" onClick={showAll}>
                                             <img src={wallet} id='depo-icon' alt='wallet-icon' />
                                            <p>All</p>
                                        </div>
                                        <div class="cryptos" onClick={cryptoDeposit}>
                                            <img src={btc} id='depo-icon' alt='btc-icon' />
                                            <span>Crypto</span>
                                        </div>
                                        <div class="credit-cards" onClick={cardDeposit}>
                                            <img src={creditcard} id='depo-icon' alt='creditCard-icon' />
                                            <span>Credit Cards</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="cdm" id="cdm" onClick={showAll}>   
                                 <span ><i class='fa fa-arrow-left' id='CDM'></i></span><span>Change deposit mode</span>
                                </div>

                                <div class="crypto-options" id="crypto-options">
                                    <h3 class="crypto-opt">Cryptos</h3>
                                </div>

                                <div class="crypto-payments" id="crypto-payments"  onClick={cryptoDeposit}>
                                    <div class="crypto-pay">
                                        <span><b>Crypto Payments</b></span>
                                        <span class='cp4'><img src={cryptovec} alt='crypto-icon' />Crypto</span>
                                    </div>
                                </div>
                               

                                <div class="credit-options" id="credit-options" >
                                    <h3 class="credit-opt">Credit Card</h3>
                                </div>

                                <div class="credit-card-payments" id="credit-card-payments" onClick={cardDeposit}>
                                    <div class="credit-pay">
                                        <span class='interS'><b>Interswitch</b></span>
                                        <span class='cp1'>
                                        <span class="visa"><img src={visa} alt='visa-icon' /></span>
                                        <span class="master"><img src={mastercard} alt='mastercard-icon'/></span>
                                        </span>
                                    </div>
                                </div>

                                <div class="cryptoDeposit"  id="cryptoDeposit">
                                    <div class="cryptodeposit">
                                      <div class="cryptoprefix">
                                       <span><h3>Crypto Payments</h3></span>
                                       <span class="cp2"><h4><img src={cryptovec}/> Crypto</h4></span>
                                     </div>

                                     <div class="imp-instruction">
                                       <h4>Important instructions before making the payment</h4>
                                       <p> <i class="fa fa-circle" id="circle"></i> Payments with this method may at our request be subject to enhanced
                                          due dilligence and security checks to ensure that they are not fraudulent.
                                      </p>
                                       <p> <i class="fa fa-circle" id="circle"></i> Make sure you send the Crypto Payment within the 15 minutes
                                        before invoice expiration.
                                       </p>
                                       <p> <i class="fa fa-circle" id="circle"></i> Make sure you always add the Payment Destination Tag/Memo or ID 
                                        before making the transaction.
                                      </p>
                                      <p> <i class="fa fa-circle" id="circle"></i> Please make sure you always use the updated payment details that will be
                                        presented to you after you click Deposit. HFM will bear no responsibility
                                        for crediting and returning funds if you use invalid payment details.
                                    </p>
                                    <p> <i class="fa fa-circle" id="circle"></i> Only accepted cryptocurrencies are processed using this method.
                                        Other currencies or tokens are not supported.
                                    </p>
                                     </div>


                                     <div class="copy-and-paste" id="copy-and-paste">
                                        <p>Copy and paste the payment details into your wallet</p>
                                        
                                         {paymentStatus && <p>{paymentStatus}</p>}

                                        <p> Deposit only <span id="currency-choice">{cryptoNetwork}</span> to this wallet</p>

                                     </div>

                                     <div class="enter-amount" id="enter-amount">
                                        <h4>Enter amount</h4>
                                        <form>
                                        <select id="currency" name="currency" size="1" value={currency} 
                                        onChange = {(e) => setCurrency(e.target.value)}>
                                            <option value="USD" id="usd">USD</option>
                                            <option value="EURO" id="euro">EURO</option>
                                        </select>
                                        <input type="number" id="number" value={amount} placeholder=" " 
                                          onChange = {(e) => setAmount(e.target.value)} />
                                         
                                        </form>
                                     </div>

                                     <div class="enter-amount" id="enter-id">
                                        <h4>Enter Investment ID</h4>
                                      <input type="text" id="invID" value={investmentId} placeholder="enter any combination
                                          of  numbers e.g. 1456" 
                                          onChange = {(e) => setInvestmentId(e.target.value)} />
                                        </div>

                                     <div class="withdrawal-network" id="withdrawal-network">
                                        <h4>Accepted Cryptocurrencies</h4>
                                        <select id="withdraw-net" name="withdraw-net" size="1" value={cryptoNetwork}
                                        onChange = {(e) => setCryptoNetwork(e.target.value)}>
                                            <option value="BTC - Bitcoin" id="btc">BTC - Bitcoin</option>
                                            <option value="ETH - Ethereum" id="eth">ETH - Ethereum</option>
                                            <option value="LTC - Litecoin" id="ltc">LTC - Litecoin</option>
                                            <option value="USDT - ERC20" id="usdtErc20">USDT - ERC20</option>
                                            <option value="USDT - TRC20" id="usdtTrc20">USDT - TRC20</option>
                                            <option value="USDT - BEP20" id="usdtBep20">USDT - BEP20</option>
                                        </select>
                                     </div>
                                     

                                     <div class="withdraw-now" id="withdrawNow" onClick={handlePayment}>
                                        <span class="withdrawNow-crypto" >Deposit</span>
                                     </div>
                                 </div>
                            </div>



              {/* <!-------------------Begining of deposit by card----------------------------> */}
               <div class="cardDeposit"  id="cardDeposit">
                <div class="depositWithCard">

                  <div class="cryptoprefix">
                   <span><h3 class='intersw'>INTERSWITCH</h3></span>
                   <span class="cp3"><img src={mastercard} /><p>Credit Card</p></span>
                 </div>

                 <div class="imp-instructionForCard">
                   <h4>Important instructions before making the payment</h4>
                   <p> <i class="fa fa-circle" id="circle"></i> Verification is important before
                    completing the transaction.
                  </p>
                 </div>



                 <div class="enter-amount" id="enter-amount">
                    <h4>Enter amount</h4>
                    <select id="currency" name="currency" size="1" value={currency} 
                                        onChange = {(e) => setCurrency(e.target.value)}>
                        <option value="USD" id="usd">USD</option>
                        <option value="EURO" id="euro">EURO</option>
                    </select>
                    <input type="number" id="number" value={amount} placeholder=" " 
                                          onChange = {(e) => setAmount(e.target.value)} />
                 </div>
                 

                 <div class="withdraw-now" id="withdrawNow" onClick='' >
                 <Link to="/DepositForm/DepositsForm"  class=" ">Deposit</Link>
                 </div>
            </div>
        </div>

    {/*<!------------------------------------ End of deposit-by-card-----------------------------------> */}


    <div class="trans-pro-del" >
        <div class="transaction-processings" id="transactionPro1" onClick={revealTransDetails}>
            <span>Transaction Processing And Security Of Funds</span>
            <span><i class="fa fa-caret-down"></i></span>
        </div>
        <div class="transaction-processings" id="transactionPro2" onClick={closeTransDetails}>
            <span>Transaction Processing And Security Of Funds</span>
            <span><i class="fa fa-caret-up"></i></span>
        </div>
        
        <div class="transaction-processing-details" id="trans-pro-det">
          <p>
            <i class="fa fa-circle" id="circle"></i> Manual deposits or refunds are credited to myWallet only.
            To transfer funds to your trading account, please proceed with an internal
            transfer from myWallet.
         </p>  
         <p>
            <i class="fa fa-circle" id="circle"></i> The company  is not liable for potential losses that may occur as a
            result of market moves during the time your deposit is being approved.
         </p>
         <p>
            <i class="fa fa-circle" id="circle"></i> CALTEX does not collect, store, or process any personal credit or debit Card
            information.All payment transactions are processed through our independent
            international payment processors.
         </p>
         <p>
            <i class="fa fa-circle" id="circle"></i> CALTEX ahall not accept any deposits from any third-party to the customer's
            account.
         </p>
         <p>
            <i class="fa fa-circle" id="circle"></i> CALTEX  does not accept cheque payments.
         </p>
         <p>
            <i class="fa fa-circle" id="circle"></i> Deposits are processed 24/5 between 00:00 Server Time Monday to
            00:00 Server Time Saturday.
         </p>
        </div>
        </div>

        <div class="depositFee-processingTime"  id="depositFee-processingTime">
            <div class="depoFeeProTime">
                <div class="deposit-fee">
                    <h4>Deposit Fee:</h4>
                    <p>No Deposit Fee</p>
                </div>
                <div class="processingTime">
                    <h4>Processing Time:</h4>
                    <p>
                        Up to 5 minutes, but it can take longer depending on
                        the payment processor and blockchain network.
                    </p>
                </div>
            </div>
         </div>




             </div>
                </div>
                </div>
                </div>
















                    </div>
                    </div>
                    </div>
                    </div>
</div>








  )
}

export default DepositPage