
import React from 'react';
import './dashboard.css';
import caltexTrader from './images/caltexTrader.png';
import logo from './images/logo (1).png';
import john from './images/John.jpg';
import forex from './images/forex.png';
import crypto from './images/crypto.png';
import withdraw from './images/withdraw.png';
import help from './images/help.png';
import profile from './images/profile.png';
import deposit from './images/deposit.png';
import legal from './images/legal.png';
import logout from './images/logout.png';
import closedeye from './images/closedeye.png';


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




const dashboardPage = () => {

/** Begininng Of script for menu **/

function openNav(){
    document.getElementById("sidenav").style.width="70%";
   
}

function closeNav(){
    document.getElementById("sidenav").style.width="0";
   
}

/** End Of script for menu */

  return (
    <div>

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

{/*  <!--This is the container that displays the Total Balance, monetary options & ctforex info--> */ }

                    <div class="ct" id="ct">
                        <div class="ct-inner">
                            <div class="total-balance">
                                <h5>Total Balance</h5>
                                <h3>
                                    $50,000.09
                                    <span class="bell-notification" id=" " onclick=" ">
                                    <img src={closedeye} id="closedEye-icon" alt="closedeye-icon"/>   
                                    </span> 
                                </h3>
                            </div>
                            <div class="monetary-options">
                                 
                                    
                                 <Link to = "/Invest/InvestPage" className='invests'>Invest  </Link>
                                    
                                 <Link to = "/Deposit/DepositPage" className='deposits'>Deposit  </Link>  

                                 <Link to = "/Withdraw/withdrawPage" className='withdraws'>Withdraw  </Link> 

                                 <Link to = " " className='investments'>Investment  </Link>           
                                
                                
                            </div>
                            <div class="ct-forex">
                                <p>
                                 CTFOREX is an international online broker offering 
                                 financial services in various financial instruments. 
                               </p>
                                <p> 
                                 The brand is authorized and regulated in various jur
                                 isdictions. CTFOREX (www.ctforex.com/eu) is regulated 
                                 by the Singapore Securities and Exchange Commission wi
                                 th CIF license number 195/12, licensed by the Financial
                                 Sector Conduct Authority (FSCA) of Singapore, with FSP No. 48914.  
                                </p>
                                <p> 
                                 The company is also registered with the Financial Conduct
                                 Authority of the UK with number 770475. The office is at 85, 
                                 saint mellanby Tower, Donlads Castle, Manchester, UK.    
                                </p>
                                <p> 
                                 Caltex Trading is UK Limited is authorised and regulated by
                                 the Financial Conduct Authority, firm reference number 777911, 
                                 and is situated at 30 Churchill Place, London, E14 5EU, UK.  
                                </p>
                                <p> 
                                 Your capital is at risk. You should not spend more than you can 
                                 afford to lose and should ensure that you fully understand the risks 
                                 involved. Using the products offered may not be suitable for everyone. 
                                 Before you use these products, please take into consideration your level
                                 of experience, and financial objectives and seek independent advice if ne
                                 cessary. It is the responsibility of the Client to ascertain whether he/she 
                                 is permitted to use the services of the CTFOREX brand based on the legal requ
                                 irements in his/her country of residence. Please read CTFOREX’S full Risk 
                                </p>
                                <p> 
                                  Disclosure  © 2023
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>


        );
        }

export default dashboardPage