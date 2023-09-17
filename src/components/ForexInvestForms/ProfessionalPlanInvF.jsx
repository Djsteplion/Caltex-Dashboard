import React from 'react';
import ReactDoM from 'react-dom';
import { useState, useEffect } from 'react';
import DatePicker from'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../components/ForexInvestForms/starterPlanInvF.css';
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





const ProfessionalPlanInvF = () => {
    const [amount, setAmount] = useState('');
    const [balanceMessage, setBalanceMessage] = useState('');
    const [roi, setROI] = useState('');

   // const [day, setDay] = useState('');
    //const [month, setMonth] = useState('');
   // const [year, setYear] = useState('');
    const [dayOI, setDayOI] = useState('');
    const [monthOI, setMonthOI] = useState('');
    const [yearOI, setYearOI] = useState('');

    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + 14); // add the number of days here

    const [myMonth, setMyMonth] = useState(currentDate);
    const [myYear, setMyYear] = useState(currentDate);
    const [myDay, setMyDay] = useState(currentDate);

    const [futureDay, setFutureDay] = useState(futureDate.getDate());
    const [futureMonth, setFutureMonth] = useState(futureDate.getMonth() + 1);
    const [futureYear, setFutureYear] = useState(futureDate.getFullYear());

    useEffect(() =>{
        setMyDay(new Date(myYear.getFullYear(), myMonth.getMonth(), myDay.getDate())); 
    }, [myMonth, myYear, setMyDay]);

    const renderDayContents = (day, date) => {
        const minDate = new Date(myYear.getFullYear(), myMonth.getMonth(), 1);
        const maxDate = new Date(myYear.getFullYear(), myMonth.getMonth() + 1, 0);

        if (date < minDate || date > maxDate){
            return <span></span>
        }
        return <span>{date.getDate()}</span>
        
    };



    const handleDateChange = (date) => {
           // increase the futuredate by 14 days      
        const futureDate =new Date(date);
        futureDate.setDate(date.getDate() + 14);

        setFutureDay(futureDate.getDate());
        setFutureMonth(futureDate.getMonth() + 1);
        setFutureYear(futureDate.getFullYear());
    };

    
    const handleAmountChange = (e) => {
        const inputValue = parseFloat(e.target.value);

        if (inputValue < 11000) {
            setBalanceMessage('You have entered an amount below the limit');
            setROI('');
        } else if (inputValue > 50000) {
            setBalanceMessage('You have entered an amount above the limit');
            setROI('');   
        } else {
             // calculate 2.5%(ROI) INTEREST
             const interest = inputValue * 0.025;
             const total =inputValue + interest;
             setBalanceMessage('');
             setROI(total.toFixed(2));
        }
            setAmount(inputValue);
};


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

                    <Link to ='/Invest/InvestPage'><img src={backarrow} alt='backarrow' id='arrowI'/></Link>


                    <div class="invest-wt-caltexF">
                    <p class="cal-text">Invest with Caltex</p>
                    <div class="forex-or-crypto">
                        <div class="forex-or-crypto-inner">
                            <span class="forex" id="forex" onclick=" ">Forex</span>
                            <Link to ='/Invest/InvestPage'  class="crypto" id="crypto" onclick=" ">Crypto</Link>
                        </div>
                    </div>
                </div>

               {/* <!--Professional Plan Invest Forex Form--> */}
                <div class="professional-planInvestF"  >
                    <form action="#">
                        <div class="invest-text">
                            <h3>Invest for Professional Plan</h3>
                        </div>
                        <div class="input-amount">
                        <span class="input-des">Input Amount</span>
                        <input type="number" id="amount" value={amount} onChange={handleAmountChange} placeholder="$11,000 - $50,000"/>
                        </div><br/>

                        <p id='low-balance'>{balanceMessage}</p>
                        
                        <div class="input-amount">
                        <span class="input-des">Return Of Investment</span>
                        <input type="number" id="roi" value={roi} readOnly/>
                        </div><br/>

                        

                        <div class="input-amount">
                        <span class="input-des">Date Of Investment</span>
                        <div class="input-date">

                           <DatePicker
                        dateFormat="dd"
                        renderCustomHeader={({ date }) => <div></div>  } 
                        selected={myDay}
                        value={myDay.getDate()}
                        renderDayContents={renderDayContents}
                        onChange={(date) => {
                            setMyDay(date);
                                handleDateChange(date);
                            }}
                        id='DayOi'
                        
                        />   

                        <DatePicker
                        showMonthYearPicker
                        dateFormat="MMMM"
                        renderCustomHeader={({ date }) => <div></div>  } 
                        selected={myMonth}
                        renderDayContents={renderDayContents}
                        onChange={(date) => setMyMonth(date)}
                       
                        id='MonthOi'
                        />

                      

                        <DatePicker
                        selected={myYear}
                        onChange={(date) => {
                            setMyDay(date);
                                handleDateChange(date);
                            }}
                        showYearPicker
                        dateFormat="yyyy"
                        id='YearOi'
                        />                          

                        </div>
                        </div><br/>

                        
                        <div class="input-amount">
                        <span class="input-des">Duration Of Investment</span>
                        <input type="text" id="doi" name="doi" placeholder="14 DAYS " readOnly/>
                        </div><br/>  
                          
                       
                        <div class="input-amount">
                        <span class="input-des">Investment Last till</span>
                        <div class="input-date">
    <span class="dayOI"><input type="text"  value={futureDay} onChange = {(e) => setFutureDay(e.target.value)}  
     id="dayOI" name="dayOI" readOnly /></span>
    <span class="dayOI"><input type="text"  
    value={futureMonth.toLocaleString('default', { month: 'long'})} onChange = {(e) => setFutureMonth(e.target.value)}   id="dayOI" name="monthOI" readOnly /></span>
   <span class="dayOI"><input type="text"  
   value={futureYear} onChange = {(e) => setFutureYear(e.target.value)} id="dayOI"
    name="yearOI" placeholder='' readOnly/></span>
                        </div>
                        </div><br/>
                        
                        <div class="invest-starter-btn">
                        <span class="invest-starter" onclick=" ">Invest</span>
                        </div>

                       </form>
                </div>

                {/*<!--You have succesfully invested with Caltex----->*/}
                <div class="congratulations" id="congratulations">
                    <div class="congrats">
                        <div class="congrat-text">
                            <p>Congratulations, you have invested with caltex successfully</p>
                            <div class="see-investment-btn">
                                <span class="see-btn" onclick=" ">See Your Investment</span>
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

export default ProfessionalPlanInvF