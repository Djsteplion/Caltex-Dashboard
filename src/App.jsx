import React from 'react'
import { Routes, Route} from'react-router-dom'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import dashboardPage from './dashboardPage';
import DepositPage from './components/Deposit/DepositPage';
import InvestPage from './components/Invest/InvestPage';
import WithdrawPage from './components/Withdraw/WithdrawPage';
import StarterPlanInvF from './components/ForexInvestForms/StarterPlanInvF';
import ProfessionalPlanInvF from './components/ForexInvestForms/ProfessionalPlanInvF';
import MasterPlanInvF from './components/ForexInvestForms/MasterPlanInvF';
import StarterPlanInvC from './components/CryptoInvestForms/StarterPlanInvC';
import ProfessionalPlanInvC from './components/CryptoInvestForms/ProfessionalPlanInvC';
import MasterPlanInvC from './components/CryptoInvestForms/MasterPlanInvC';
import starterplanForex from './components/ForexDetails/starterplanForex';
import professionalplanForex from './components/ForexDetails/professionalplanForex';
import masterplanForex from './components/ForexDetails/masterplanForex';
import starterplanCrypto from './components/CryptoDetails/starterplanCrypto';
import professionalplanCrypto from './components/CryptoDetails/professionalplanCrypto';
import masterplanCrypto from './components/CryptoDetails/masterplanCrypto';
import DepositsForm from  './components/DepositForm/DepositsForm';






const App = () => {
  return (
     
    <Router>
    <Routes>
      <Route path='/Deposit/DepositPage'  Component={DepositPage} />
      <Route path='/CryptoDetails/masterplanCrypto'   Component={masterplanCrypto} />
      <Route path='/CryptoDetails/professionalplanCrypto'  Component={professionalplanCrypto} />
      <Route path='/CryptoDetails/starterplanCrypto'  Component={starterplanCrypto} />
      <Route path='/ForexDetails/masterplanForex'  Component={masterplanForex} />
      <Route path='/ForexDetails/professionalplanForex'  Component={professionalplanForex} />
      <Route path='/ForexDetails/starterplanForex'  Component={starterplanForex} />
      <Route path='/CryptoInvestForms/MasterPlanInvC'  Component={MasterPlanInvC} />
      <Route path='/CryptoInvestForms/ProfessionalPlanInvC'  Component={ProfessionalPlanInvC} />
      <Route path='/CryptoInvestForms/StarterPlanInvC'  Component={StarterPlanInvC} />
      <Route path='/ForexInvestForms/MasterPlanInvF'  Component={MasterPlanInvF} />
      <Route path='/ForexInvestForms/ProfessionalPlanInvF'  Component={ProfessionalPlanInvF} />
      <Route path='/ForexInvestForms/StarterPlanInvF'  Component={StarterPlanInvF} />
      <Route path='/Withdraw/WithdrawPage'  Component={WithdrawPage} />
      <Route path='/Invest/InvestPage'    Component = {InvestPage} />
      <Route path='/Deposit/DepositPage'  Component = {DepositPage} />
      <Route path= "/" Component={dashboardPage} index={true}/>
      <Route path='/DepositForm/DepositsForm' exact Component={DepositsForm} />
      </Routes>
    
{/*
    <Routes>
      <Route path='/CryptoInvestForms/masterPlanInvC' element={<masterPlanInvC/>} />
      <Route path='/CryptoInvestForms/professionalPlanInvC' element={<professionalPlanInvC/>} />
      <Route path='/CryptoInvestForms/starterPlanInvC' element={<starterPlanInvC/>} />
      <Route path='/ForexInvestForms/masterPlanInvF' element={<masterPlanInvF/>} />
      <Route path='/ForexInvestForms/professionalPlanInvF' element={<professionalPlanInvF/>} />
      <Route path='/ForexInvestForms/starterPlanInvF' element={<starterPlanInvF/>} />
      <Route path='/Withdraw/withdrawPage' element={<withdrawPage/>} />
      
      <Route path= "/Deposit/DepositPage" element={<DepositPage/>} />
      <Route path= "/" element={<dashboardPage/>} index={true}/>
  </Routes>*/}
    </Router>
 
  
  )
}

export default App