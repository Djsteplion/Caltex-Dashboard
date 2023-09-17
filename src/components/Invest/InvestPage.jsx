import React from 'react';
import ReactDoM from 'react-dom'
import './InvestPage.css';
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

import {Link} from 'react-router-dom';

import { BiSolidDashboard } from 'react-icons/bi'
import { BiSolidUser } from 'react-icons/bi'
import { BiMoneyWithdraw } from 'react-icons/bi'
import { RiLuggageDepositFill } from 'react-icons/ri'
import { HiDocumentText } from 'react-icons/hi'
import { IoLogOutOutline }  from 'react-icons/io5'
import { AiOutlineArrowLeft }  from 'react-icons/ai'

import { SiVisa }  from 'react-icons/si'
import { BrowserRouter as Router ,Route } from 'react-router-dom'

const InvestPage = () => {
function starterPlanF() {

          document.getElementById('choose-plan1').style.display = 'none';
          document.getElementById('plan-forex').style.display = 'none';
          document.getElementById('close-plan1').style.display = 'none';
          document.getElementById('invest-now').style.display = 'none';
          document.getElementById('starter-planForex').style.display = 'block';
          document.getElementById('professional-planForex').style.display = 'none';
          document.getElementById('master-planForex').style.display = 'none';
          document.getElementById('starter-planCrypto').style.display = 'none';
          document.getElementById('professional-planCrypto').style.display = 'none';
          document.getElementById('master-planCrypto').style.display = 'none';
          document.getElementById('starter-planInvestF').style.display = 'none';
          document.getElementById('professional-planInvestF').style.display = 'none';
          document.getElementById('master-planInvestF').style.display = 'none';
          document.getElementById('starter-planInvestC').style.display = 'none';
          document.getElementById('professional-planInvestC').style.display = 'none';
          document.getElementById('master-planInvestC').style.display = 'none';
          }

          function professionalPlanF(){
            document.getElementById('choose-plan1').style.display = 'none';
            document.getElementById('plan-forex').style.display = 'none';
            document.getElementById('close-plan1').style.display = 'none';
            document.getElementById('invest-now').style.display = 'none';
            document.getElementById('starter-planForex').style.display = 'none';
            document.getElementById('professional-planForex').style.display = 'block';
            document.getElementById('master-planForex').style.display = 'none';
            document.getElementById('starter-planCrypto').style.display = 'none';
            document.getElementById('professional-planCrypto').style.display = 'none';
            document.getElementById('master-planCrypto').style.display = 'none';
            
            
            document.getElementById('starter-planInvestF').style.display = 'none';
            document.getElementById('professional-planInvestF').style.display = 'none';
            document.getElementById('master-planInvestF').style.display = 'none';
            document.getElementById('starter-planInvestC').style.display = 'none';
            document.getElementById('professional-planInvestC').style.display = 'none';
            document.getElementById('master-planInvestC').style.display = 'none';
            
            }
            
            function masterPlanF(){
            document.getElementById('choose-plan1').style.display = 'none';
            document.getElementById('plan-forex').style.display = 'none';
            document.getElementById('close-plan1').style.display = 'none';
            document.getElementById('invest-now').style.display = 'none';
            document.getElementById('starter-planForex').style.display = 'none';
            document.getElementById('professional-planForex').style.display = 'none';
            document.getElementById('master-planForex').style.display = 'block';
            document.getElementById('starter-planCrypto').style.display = 'none';
            document.getElementById('professional-planCrypto').style.display = 'none';
            document.getElementById('master-planCrypto').style.display = 'none';
            
            
            document.getElementById('starter-planInvestF').style.display = 'none';
            document.getElementById('professional-planInvestF').style.display = 'none';
            document.getElementById('master-planInvestF').style.display = 'none';
            document.getElementById('starter-planInvestC').style.display = 'none';
            document.getElementById('professional-planInvestC').style.display = 'none';
            document.getElementById('master-planInvestC').style.display = 'none';
            
            }
           

            const closeNav = () => {
                document.getElementById("sidenav").style.width="0";
            }

  return (
    <>

      {/* <!--Menu--> */}
      <div class="mySidenav" id="sidenav">
      <Link  to=" " class="closebtn" id='close-btn' onClick={closeNav}>&times;</Link>
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
                            <div class="menu-button" onClick={openNav}>
                            &#9776;
                            </div>
                        </div>
                    </div>

                 {/* <!--Invest With Caltex[ --** CHOOSE YOUR FOREX/CRYPTO PLAN **-- ] Page---> */}

                  <div class="invest-carltex"  id="invest-carltex">
                    <div class="invest-inner">
                        <Link to ='/'><img src={backarrow} alt='backarrow' id='arrow'/></Link>
                        <div class="invest-wt-caltex">
                            <p class="cal-text">Invest with Caltex</p>
                            <div class="forex-or-crypto">
                                <div class="forex-or-crypto-inner">
                                    <span class="forex" id="forex" onClick={checkForexPlan}>Forex</span>
                                    <span class="crypto" id="crypto" onClick={checkCryptoPlan}>Crypto</span>
                                </div>
                            </div>
                        </div>
                        <div class="invest-forex">
                            <div class="invex-forex-inner">
                                <p class="wide-array"> 
                                  We have a wide array of investment plans to choose from.
                                  Choose from the options below the investment plan  which best suits you.
                                </p>

                                <div class="choose-your-plan">
                                    <div class="choose">
                                        <div class="choose-plan1" id="choose-plan1" onClick={reviewPlan1}>
                                            <span>Choose Plan</span>
                                            <span class="view-plan" id="view-plan" onClick={reviewPlan1}><i class="fa fa-caret-down"></i></span>
                                        </div>
                                        <div class="close-plan1" id="close-plan1" onClick={closePlan1}>
                                            <span>Choose Plan</span>
                                            <span class="close-plan" id="close-plan" onClick={closePlan1}><i class="fa fa-caret-up"></i></span>
                                        </div>

                                        {/* <!--options for forex-->*/}
                                         <div class="plan-options-forex" id="plan-forex">
                                            <div class="plan" >

                                            <Link to='/ForexDetails/starterplanForex' class="starter-plan" >Starter Plan 2.5% ROI, 7 DAYS PACKAGE $100-$10000</Link>
                                            <Link to='/ForexDetails/professionalplanForex' class="professional-plan" >
                                            Professional Plan 2.5% ROI, 14 DAYS PACKAGE $11000-$50000
                                            </Link>
                                            <Link to='/ForexDetails/masterplanForex' class="master-plan" >
                                            Master Plan 2.5% ROI, 21 DAYS PACKAGE $50000-$100000
                                            </Link>
                                                {/*<div class="starter-plan" >
                                                    <Link to='/'></Link>
                                                    <span class=" " id="view-plan" >
                                                     Starter Plan 2.5% ROI, 7 DAYS PACKAGE $100-$10000 
                                                    </span>
                                                </div>
                                                <div class="professional-plan"  onClick={professionalPlanF}>
                                                    <span class=" " id="view-plan">
                                                     Professional Plan 2.5% ROI, 14 DAYS PACKAGE $11000-$50000
                                                    </span>
                                                </div>
                                                <div class="master-plan" onClick={masterPlanF}>
                                                    <span class=" " id="view-plan" onclick="masterPlanF()">
                                                      Master Plan 2.5% ROI, 21 DAYS PACKAGE $50000-$100000
                                                    </span>
    </div>*/}
                                            </div>
                                        </div>

                                        {/* <!--Options for crypto-->*/}
                                         <div class="choose-plan2" id="choose-plan2" onClick={reviewPlan2}>
                                            <span>Choose Plan</span>
                                            <span class="view-plan" id="view-plan" onClick={reviewPlan2}><i class="fa fa-caret-down"></i></span>
                                        </div>
                                        <div class="close-plan2" id="close-plan2" onClick={closePlan2}>
                                            <span>Choose Plan</span>
                                            <span class="close-plan" id="close-plan" onClick={closePlan2}><i class="fa fa-caret-up"></i></span>
                                        </div>
                                        <div class="plan-options-crypto" id="plan-crypto">
                                            <div class="plan" >
                                            <Link to='/CryptoDetails/starterplanCrypto' class="starter-plan" >
                                            Starter Plan 3.0% ROI, 10 DAYS PACKAGE $300-$15000 
                                            </Link>
                                            <Link to='/CryptoDetails/professionalplanCrypto' class="professional-plan" >
                                             Professional Plan 3.5% ROI, 20 DAYS PACKAGE $16000-$100000
                                            </Link>
                                            <Link to='/CryptoDetails/masterplanCrypto' class="master-plan" >
                                             Master Plan 4.0% ROI, 30 DAYS PACKAGE $101000-$UNLIMITED
                                            </Link>

                                                {/*<div class="starter-plan" onclick="starterPlanC()">
                                                    <span class=" " id="view-plan" >
                                                     Starter Plan 3.0% ROI, 10 DAYS PACKAGE $300-$15000 
                                                    </span>
                                                </div>
                                                <div class="professional-plan"  onclick="professionalPlanC()">
                                                    <span class=" " id="view-plan" >
                                                     Professional Plan 3.5% ROI, 20 DAYS PACKAGE $16000-$100000
                                                    </span>
                                                </div>
                                                <div class="master-plan" onclick="masterPlanC()">
                                                    <span class=" " id="view-plan" >
                                                      Master Plan 4.0% ROI, 30 DAYS PACKAGE $101000-$UNLIMITED
                                                    </span>
                                                </div>
*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="invest-now" id="invest-now">
                                    <span>Invest</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="second-page" id="second-page">
                   {/* <!--Starter Plan Forex-->*/}
                    <div class="starter-planForex" id='starter-planForex'>
                        <div class="starter-planF">
                        <h4>Starter Plan</h4>
                        <p><i class="fa fa-check" id="check"></i>Minimum Investment:$100</p>
                        <p><i class="fa fa-check" id="check"></i>Maximum Investment:$10,000</p>
                        <p><i class="fa fa-check" id="check"></i>Withdrawal fee:10% withdrawal charges</p>
                        <p><i class="fa fa-check" id="check"></i>3 stages referral commission</p>
                        <p><i class="fa fa-check" id="check"></i>10% referral for first person</p>
                        <p><i class="fa fa-check" id="check"></i>7% referral for second person</p>
                        <p><i class="fa fa-check" id="check"></i>3% referral for third person</p>
                    </div>
                    <div class="investment-buttons">
                        <span class="invest-starterF" onclick=" "><a href="C:\Users\User\Desktop\HTML Crashcourse\STEVO\CALTEX TRADER DASHBOARD PROJECT\starterPlanFormF.html">Invest</a></span>
                        <span class="change-starterF" onClick={changeStarterF}>Change Plan</span>
                    </div>
                    </div>


                    {/*<!--Professional  Plan Forex--> */}
                 <div class="professional-planForex" id="professional-planForex">
                    <div class="professional-planF">
                    <h4>Professional Plan</h4>
                    <p><i class="fa fa-check" id="check"></i>Minimum Investment:$11,000</p>
                    <p><i class="fa fa-check" id="check"></i>Maximum Investment:$50,000</p>
                    <p><i class="fa fa-check" id="check"></i>Withdrawal fee:7% withdrawal charges</p>
                    <p><i class="fa fa-check" id="check"></i>3 stages referral commission</p>
                    <p><i class="fa fa-check" id="check"></i>15% referral for first person</p>
                    <p><i class="fa fa-check" id="check"></i>10% referral for second person</p>
                    <p><i class="fa fa-check" id="check"></i>7% referral for third person</p>
                </div>
                <div class="investment-buttons">
                    <span class="invest-professionalF" onclick=" "><a href='C:\Users\User\Desktop\HTML Crashcourse\STEVO\CALTEX TRADER DASHBOARD PROJECT\professionalPlanInvFormF.html'>
                        Invest</a></span>
                    <span class="change-professionalF" onclick="changeProfessionalF() ">Change Plan</span>
                </div>
                </div>


                {/* <!--Master Plan Forex--> */}
                <div class="master-planForex" id="master-planForex">
                    <div class="master-planF">
                    <h4>Master Plan</h4>
                    <p><i class="fa fa-check" id="check"></i>Minimum Investment:$51,000</p>
                    <p><i class="fa fa-check" id="check"></i>Maximum Investment:$100,000</p>
                    <p><i class="fa fa-check" id="check"></i>Withdrawal fee:5% withdrawal charges</p>
                    <p><i class="fa fa-check" id="check"></i>3 stages referral commission</p>
                    <p><i class="fa fa-check" id="check"></i>20% referral for first person</p>
                    <p><i class="fa fa-check" id="check"></i>15% referral for second person</p>
                    <p><i class="fa fa-check" id="check"></i>10% referral for third person</p>
                </div>
                <div class="investment-buttons">
                    <span class="invest-masterF" onclick=" ">
                        <a href="C:\Users\User\Desktop\HTML Crashcourse\STEVO\CALTEX TRADER DASHBOARD PROJECT\masterPlanInvFormF.html">
                        Invest</a></span>
                    <span class="change-masterF" onclick="changeMasterF()">Change Plan</span>
                </div>
                </div>


                 {/* <!--Starter Plan Crypto--> */}
                 <div class="starter-planCrypto" id="starter-planCrypto">
                    <div class="starter-planC">
                    <h4>Starter Plan</h4>
                    <p><i class="fa fa-check" id="check"></i>Minimum Investment:$300</p>
                    <p><i class="fa fa-check" id="check"></i>Maximum Investment:$15,000</p>
                    <p><i class="fa fa-check" id="check"></i>Withdrawal fee:5% withdrawal charges</p>
                    <p><i class="fa fa-check" id="check"></i>3 stages referral commission</p>
                    <p><i class="fa fa-check" id="check"></i>10% referral for first person</p>
                    <p><i class="fa fa-check" id="check"></i>7% referral for second person</p>
                    <p><i class="fa fa-check" id="check"></i>3% referral for third person</p>
                </div>
                <div class="investment-buttons">
                    <span class="invest-starterC" onclick=" ">Invest</span>
                    <span class="change-starterC" onclick="changeStarterC()">Change Plan</span>
                </div>
                </div>


                  {/*  <!--Professional Plan Crypto--> */}
                   <div class="professional-planCrypto" id="professional-planCrypto">
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
                    <span class="invest-professionalC" onclick=" ">Invest</span>
                    <span class="change-professionalC" onclick="changeProfessionalC()">Change Plan</span>
                </div>
                </div>

                 {/* <!--Master Plan Crypto--> */}
                 <div class="master-planCrypto" id="master-planCrypto">
                    <div class="master-planC">
                    <h4>Master Plan</h4>
                    <p><i class="fa fa-check" id="check"></i>Minimum Investment:$101,000</p>
                    <p><i class="fa fa-check" id="check"></i>Maximum Investment:UNLIMITED</p>
                    <p><i class="fa fa-check" id="check"></i>Withdrawal fee:10% withdrawal charges</p>
                    <p><i class="fa fa-check" id="check"></i>3 stages referral commission</p>
                    <p><i class="fa fa-check" id="check"></i>20% referral for first person</p>
                    <p><i class="fa fa-check" id="check"></i>15% referral for second person</p>
                    <p><i class="fa fa-check" id="check"></i>10% referral for third person</p>
                </div>
                <div class="investment-buttons">
                    <span class="invest-masterC" onclick=" ">Invest</span>
                    <span class="change-masterC" onclick="changeMasterC() ">Change Plan</span>
                </div>
                </div>

                </div>
            </div>
        </div>
    </div>
</div>
</>

  )
  function checkCryptoPlan(){
    document.getElementById('crypto').style.borderBottomColor = 'black';
    document.getElementById('crypto').style.color = 'black';
    document.getElementById('forex').style.color = 'grey';
    document.getElementById('forex').style.borderBottomColor = '#D7D7D7';
    document.getElementById('choose-plan1').style.display = 'none';
    document.getElementById('choose-plan2').style.display = 'block';
    document.getElementById('choose-plan2').style.display = 'flex';
    document.getElementById('plan-forex').style.display = 'none';
    document.getElementById('invest-now').style.display = 'none';
    document.getElementById('close-plan1').style.display = 'none';
    document.getElementById('plan-crypto').style.display = 'none';
    document.getElementById('close-plan2').style.display = 'none';
    document.getElementById('starter-planForex').style.display = 'none';
    document.getElementById('professional-planForex').style.display = 'none';
    document.getElementById('master-planForex').style.display = 'none';
    document.getElementById('starter-planCrypto').style.display = 'none';
    document.getElementById('professional-planCrypto').style.display = 'none';
    document.getElementById('master-planCrypto').style.display = 'none';
    } 

          /** Begininng Of script for menu **/
                
          function openNav(){
            document.getElementById("sidenav").style.width="70%";
           
        }
        
       
        
        /** End Of script for menu */

    function checkForexPlan() {
      document.getElementById('crypto').style.borderBottomColor = '#D7D7D7';
      document.getElementById('forex').style.borderBottomColor = 'black';
      document.getElementById('crypto').style.color = 'rgb(176, 167, 167)';
      document.getElementById('forex').style.color = 'black';
      document.getElementById('choose-plan1').style.display = 'block';
      document.getElementById('choose-plan1').style.display = 'flex';
      document.getElementById('choose-plan2').style.display = 'none'; 
      document.getElementById('plan-crypto').style.display = 'none';
      document.getElementById('invest-now').style.display = 'none';
      document.getElementById('close-plan2').style.display = 'none';
      document.getElementById('plan-forex').style.display = 'none';
      document.getElementById('close-plan2').style.display = 'none';
      document.getElementById('close-plan1').style.display = 'none';
      document.getElementById('starter-planForex').style.display = 'none';
      document.getElementById('professional-planForex').style.display = 'none';
      document.getElementById('master-planForex').style.display = 'none';
      document.getElementById('starter-planCrypto').style.display = 'none';
      document.getElementById('professional-planCrypto').style.display = 'none';
      document.getElementById('master-planCrypto').style.display = 'none';
      }


      
function reviewPlan1(){
  document.getElementById('plan-forex').style.display = 'block';
  document.getElementById('plan-crypto').style.display = 'none';
  document.getElementById('invest-now').style.display = 'block';
  document.getElementById('choose-plan1').style.display = 'none';
  document.getElementById('close-plan1').style.display = 'block';
  document.getElementById('close-plan1').style.display = 'flex';
  document.getElementById('close-plan2').style.display = 'none';
  }

  function reviewPlan2(){
    document.getElementById('plan-crypto').style.display = 'block';
    document.getElementById('plan-forex').style.display = 'none';
    document.getElementById('invest-now').style.display = 'block';
    document.getElementById('choose-plan2').style.display = 'none';
    document.getElementById('close-plan2').style.display = 'block';
    document.getElementById('close-plan2').style.display = 'flex';
    }

    function closePlan1(){
      document.getElementById('plan-forex').style.display = 'none';
      document.getElementById('invest-now').style.display = 'none';
      document.getElementById('choose-plan1').style.display = 'block';
      document.getElementById('choose-plan1').style.display = 'flex';
      document.getElementById('close-plan1').style.display = 'none';
      }

      function closePlan2(){
        document.getElementById('plan-crypto').style.display = 'none';
        document.getElementById('invest-now').style.display = 'none';
        document.getElementById('close-plan2').style.display = 'none';
        document.getElementById('choose-plan2').style.display = 'block';
        document.getElementById('choose-plan2').style.display = 'flex';
        }

        
            
            
            function changeStarterF(){
            document.getElementById('starter-planForex').style.display = 'none';
            document.getElementById('choose-plan1').style.display = 'block';
            document.getElementById('choose-plan1').style.display = 'flex';
            }
            
            function changeProfessionalF() {
            document.getElementById('professional-planForex').style.display = 'none';
            document.getElementById('choose-plan1').style.display = 'block';
            document.getElementById('choose-plan1').style.display = 'flex';
            }
            
            function changeMasterF() {
            document.getElementById('master-planForex').style.display = 'none';
            document.getElementById('choose-plan1').style.display = 'block';
            document.getElementById('choose-plan1').style.display = 'flex';
            }
            
            
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
            
            function starterPlanC(){
            document.getElementById('choose-plan1').style.display = 'none';
            document.getElementById('plan-forex').style.display = 'none';
            document.getElementById('close-plan1').style.display = 'none';
            document.getElementById('invest-now').style.display = 'none';
            document.getElementById('starter-planForex').style.display = 'none';
            document.getElementById('professional-planForex').style.display = 'none';
            document.getElementById('master-planForex').style.display = 'none';
            document.getElementById('starter-planCrypto').style.display = 'block';
            document.getElementById('professional-planCrypto').style.display = 'none';
            document.getElementById('master-planCrypto').style.display = 'none';
            document.getElementById('choose-plan2').style.display = 'none';
            document.getElementById('close-plan2').style.display = 'none';
            document.getElementById('plan-crypto').style.display = 'none';
            }
            
            function changeStarterC(){
            document.getElementById('starter-planCrypto').style.display = 'none';
            document.getElementById('choose-plan2').style.display = 'block';
            document.getElementById('choose-plan2').style.display = 'flex';
            }
            
            function professionalPlanC(){
            document.getElementById('choose-plan1').style.display = 'none';
            document.getElementById('plan-forex').style.display = 'none';
            document.getElementById('close-plan1').style.display = 'none';
            document.getElementById('invest-now').style.display = 'none';
            document.getElementById('starter-planForex').style.display = 'none';
            document.getElementById('professional-planForex').style.display = 'none';
            document.getElementById('master-planForex').style.display = 'none';
            document.getElementById('starter-planCrypto').style.display = 'none';
            document.getElementById('professional-planCrypto').style.display = 'block';
            document.getElementById('master-planCrypto').style.display = 'none';
            document.getElementById('choose-plan2').style.display = 'none';
            document.getElementById('close-plan2').style.display = 'none';
            document.getElementById('plan-crypto').style.display = 'none';
            }
            
            function changeProfessionalC(){
            document.getElementById('professional-planCrypto').style.display = 'none';
            document.getElementById('choose-plan2').style.display = 'block';
            document.getElementById('choose-plan2').style.display = 'flex';
            }
            
            function masterPlanC(){
            document.getElementById('choose-plan1').style.display = 'none';
            document.getElementById('plan-forex').style.display = 'none';
            document.getElementById('close-plan1').style.display = 'none';
            document.getElementById('invest-now').style.display = 'none';
            document.getElementById('starter-planForex').style.display = 'none';
            document.getElementById('professional-planForex').style.display = 'none';
            document.getElementById('master-planForex').style.display = 'none';
            document.getElementById('starter-planCrypto').style.display = 'none';
            document.getElementById('professional-planCrypto').style.display = 'none';
            document.getElementById('master-planCrypto').style.display = 'block';
            document.getElementById('choose-plan2').style.display = 'none';
            document.getElementById('close-plan2').style.display = 'none';
            document.getElementById('plan-crypto').style.display = 'none';
            }
            
            
            function changeMasterC(){
            document.getElementById('master-planCrypto').style.display = 'none';
            document.getElementById('choose-plan2').style.display = 'block';
            document.getElementById('choose-plan2').style.display = 'flex';
            }
  


}

export default InvestPage