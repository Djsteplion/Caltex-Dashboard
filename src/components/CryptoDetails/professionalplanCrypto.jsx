import React from 'react';
import ReactDoM from 'react-dom';
import '../../components/CryptoDetails/professionalplanCrypto.css';
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
import { BrowserRouter as Router ,Route } from 'react-router-dom';

import { BiSolidDashboard } from 'react-icons/bi';

const professionalplanCrypto = () => {
  return (
   
    <div class="dashboard-container">
    <div class="board">
        <div class="dashboard-panel">
            <div class="panel">
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


                    <div class="invest-carltex"  id="invest-carltex">
                    <div class="invest-inner">
                        <Link to ='/Invest/InvestPage'><img src={backarrow} alt='backarrow' id='arrow'/></Link>
                        <div class="invest-wt-caltex">
                            <p class="cal-text">Invest with Caltex</p>
                            <div class="forex-or-crypto">
                                <div class="forex-or-crypto-inner">
                                <Link to ='/Invest/InvestPage' class="forex" id="forexC" >Forex</Link>
                                    <span class="crypto" id="cryptoC" >Crypto</span>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>


                 {/*  <!--Professional Plan Crypto--> */}
                 <div class="professional-planCrypto" >
                    <div class="professional-planC">
                    <h4>Professional Plan</h4>
                    <p><i class="fa fa-check" id="check"></i>Minimum Investment:$16,000</p>
                    <p><i class="fa fa-check" id="check"></i>Maximum Investment:$100,000</p>
                    <p><i class="fa fa-check" id="check"></i>Withdrawal fee:10% withdrawal charges</p>
                    <p><i class="fa fa-check" id="check"></i>3 stages referral commission</p>
                    <p><i class="fa fa-check" id="check"></i>15% referral for first person</p>
                    <p><i class="fa fa-check" id="check"></i>10% referral for second person</p>
                    <p><i class="fa fa-check" id="check"></i>7% referral for third person</p>
                </div>
                <div class="investment-buttons">
                        <Link to='/CryptoInvestForms/professionalPlanInvC' class="invest-professionalCrypto">Invest</Link>
                        <Link to='/Invest/InvestPage' class="change-professionalCrypto">Change Plan</Link>
                </div>
                </div>



                    </div>
                    </div>
                    </div>
                    </div>





  )
}

export default professionalplanCrypto