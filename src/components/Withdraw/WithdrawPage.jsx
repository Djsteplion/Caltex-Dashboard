import React from 'react';
import ReactDoM from 'react-dom';
import { useState } from 'react';
import '../../components/Deposit/DepositPage.css';
import {Link} from 'react-router-dom';
import caltexTrader from '../../images/caltexTrader.png';
import logo from '../../images/logo (1).png'
import john from '../../images/John.jpg';
import forex from '../../images/forex.jpg';
import crypto from '../../images/crypto.png';
import withdraw from '../../images/withdraw.jpg';
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

const WithdrawPage = () => {

  function revealTransDetails(){
    document.getElementById('trans-pro-det').style.display = 'block';
    document.getElementById('transactionPro2').style.display = 'block';
    document.getElementById('transactionPro2').style.display = 'flex';
    document.getElementById('transactionPro1').style.display = 'none';
}

function closeTransDetails(){
    document.getElementById('trans-pro-det').style.display = 'none';
    document.getElementById('transactionPro1').style.display = 'block';
    document.getElementById('transactionPro1').style.display = 'flex';
    document.getElementById('transactionPro2').style.display = 'none';
}

function cryptoWithdrawal(){
    document.getElementById('crypto-options').style.display = 'none';
    document.getElementById('crypto-payments').style.display = 'none';
    document.getElementById('credit-options').style.display = 'none';
    document.getElementById('credit-card-payments').style.display = 'none';
    document.getElementById('cryptoWithdrawal').style.display = 'block';
}

function showAll(){
    document.getElementById('crypto-options').style.display = 'block';
    document.getElementById('crypto-payments').style.display = 'block';
    document.getElementById('credit-options').style.display = 'block';
    document.getElementById('credit-card-payments').style.display = 'block';
    document.getElementById('cryptoWithdrawal').style.display = 'none';
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


const [name, setName ] = useState('');
    const [currency, setCurrency ] = useState('');
    const [ cryptoNetwork, setCryptoNetwork ] =useState('');
    const [ amount, setAmount ] = useState('');
    const [ walletAddress, setWalletAddress ] = useState('');

  return (
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
                        </div>
                    </div>



                   {/* <!--WITHDRAW CONTAINER--> */}
                    <div class="withdraw-funds-container"  id="withdraw-funds-container">
                        <div class="withdraw-funds">
                            <div class="withdraw-fund-text">
                                <h3>Withdraw Funds</h3>
                            </div>
                            <div class="withdraw-content-container">
                                <div class="withdraw-container">
                                    <div class="withdraw-limit-text" id="withraw-limit-text">
                                        <p>Your withdrawal limit is $5,000 , get your account fully 
                                            verified to increase your withdraw limit by 
                                            <span class="clicking-here"><b>clicking here</b></span>
                                        </p>
                                    </div>
                                    <div class="withdraw-options" id="withdraw-options">
                                        <div class="withdr-options">
                                            <div class="all" onClick={showAll}>
                                              <img src={wallet} id='depo-icon' alt='wallet-icon' />
                                                <p>All</p>
                                            </div>
                                            <div class="cryptos" onClick={cryptoWithdrawal}>
                                            <img src={btc} id='depo-icon' alt='btc-icon' />
                                                <span>Cryptos</span>
                                            </div>
                                            <div class="credit-cards">
                                            <img src={creditcard} id='depo-icon' alt='creditCard-icon' />
                                                <span>Credit Cards</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="crypto-options" id="crypto-options">
                                        <h3 class="crypto-opt">Cryptos</h3>
                                    </div>


                                    <div class="crypto-payments" id="crypto-payments"  onClick={cryptoWithdrawal}>
                                    <div class="crypto-pay">
                                        <span><b>Crypto Payments</b></span>
                                        <span class='cp2'><img src={cryptovec} alt='crypto-icon' />Crypto</span>
                                    </div>
                                </div>


                                    <div class="credit-options" id="credit-options">
                                        <h3 class="credit-opt">Credit Card</h3>
                                    </div>


                                    <div class="credit-card-payments" id="credit-card-payments" onclick=''>
                                    <div class="credit-pay">
                                        <span class='interS'><b>Interswitch</b></span>
                                        <span class='cp1'>
                                        <span class="visa"><img src={visa} alt='visa-icon' /></span>
                                        <span class="master"><img src={mastercard} alt='mastercard-icon'/></span>
                                        </span>
                                    </div>
                                </div>


                                     {/*<!------------------This is the CRYPTO WITHDRAWAL FORM-------------> */}
                                    <div class="cryptoWithdrawal"  id="cryptoWithdrawal">
                                        <div class="cryptowithdraw">

                                          <div class="cryptoprefix">
                                           <span><h4>Crypto Withdrawal</h4></span>
                                           <span class="cp2"><h4>Crypto</h4></span>
                                         </div>

                                         <div class="imp-instruction">
                                           <h4>Important instruction for successful withdrawing</h4>
                                           <p>At caltex, we strive to make withdrawals quick, convenient and easy</p>
                                           <p>To withdraw successfully, ensure that:</p>
                                           <p>- Your withdrawals are proportional to
                                              your deposit.
                                          </p>
                                          <p>- Your account has suficient funds and is in good standing
                                        </p>
                                        <p>In the unlikely event of a withdrawal issue,please contact our friendly
                                            support team.Our team is always on hand to assist you.
                                        </p>
                                         </div>


                                         <div class="enter-amount">
                                            <h4>Enter amount</h4>
                                            <select id="currency" name="currency" size="1" value={currency} 
                                        onChange = {(e) => setCurrency(e.target.value)}>
                                                <option value="USD" id="usd">USD</option>
                                                <option value="EURO" id="euro">EURO</option>
                                            </select>
                                            <input type="number" id="number" name=" " placeholder=" " />
                                         </div>


                                         <div class="withdrawal-network">
                                            <h4>Withdrawal Network</h4>
                                            <select id="withdraw-net" name="withdraw-net" size="1" 
                                            value={cryptoNetwork}
                                            onChange = {(e) => setCryptoNetwork(e.target.value)}>
                                                <option value="BTC - Bitcoin" id="btc">BTC - Bitcoin</option>
                                                <option value="ETH - Ethereum" id="eth">ETH - Ethereum</option>
                                                <option value="LTC - Litecoin" id="ltc">LTC - Litecoin</option>
                                                <option value="USDT - ERC20" id="usdtErc20">USDT - ERC20</option>
                                                <option value="USDT - TRC20" id="usdtTrc20">USDT - TRC20</option>
                                                <option value="USDT - BEP20" id="usdtBep20">USDT - BEP20</option>
                                            </select>
                                         </div>

                                         
                                         <div class="wallet-address">
                                            <h4>Wallet Address</h4>
                                            <input type="text" id="wallet-addr" name="wallet-address " 
                                            value={walletAddress} placeholder=" " 
                                            onChange = {(e) => setWalletAddress(e.target.value)} />
                                         </div>

                                         <div class="withdraw-now"  onclick=''>
                                            <span class="withdrawNow-crypto" >Withdraw</span>
                                         </div>


                                         <div class="depositFee-processingTime">
                                            <div class="depoFeeProTime">
                                                <div class="deposit-fee">
                                                    <h4>Deposit Fee:</h4>
                                                    <p>10% withdrawal Fee</p>
                                                </div>
                                                <div class="processingTime">
                                                    <h4>Processing Time:</h4>
                                                    <p>
                                                        Up to 5minutes, but it can take longer depending on
                                                        the payment processor and blockchain network.
                                                    </p>
                                                </div>
                                            </div>
                                         </div>

                    </div>
                </div>


                                    {/*<!------------------This is the Transaction Processing Detail------------> */}
                                    <div class="trans-pro-del"  id="trans-pro-del">
                                    <div class="transaction-processing" id="transactionPro1" onClick={revealTransDetails}>
                                        <span>Transaction Processing And Security Of Funds</span>
                                        <span><i class="fa fa-caret-down"></i></span>
                                    </div>
                                    <div class="transaction-processing" id="transactionPro2" onClick={closeTransDetails}>
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
                                        <i class="fa fa-circle" id="circle"></i> CALTEX shall not accept any deposits from any third-party to the customer's
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


                     {/*<!--Congratulations, your payment has been approved-----> */}
                    <div class="congratulations" id="congratulations">
                        <div class="congrats">
                            <div class="congrat-text">
                                <p>Congratulations, your payment has been approved</p>
                                <div class="see-investment-btn">
                                    <span class=" " onclick=" ">
                                        <Link to ='/' class='see-btn'>Trade More</Link> 
                                    </span>
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

export default WithdrawPage