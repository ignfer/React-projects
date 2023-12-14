import { useState, useEffect } from 'react'
import './App.css'

import AdvisorCard from '../components/AdvisorCard/AdvisorCard'; 
import ClientCard from '../components/ClientCard/ClientCard';
import ClientInfo from '../components/ClientInfo/ClientInfo';

import ProjectDescription from '../components/ProjectDescription/ProjectDescription';

function App() {

  const [fetchButton, setFetchButton] = useState(false);
  const [advisors, setAdvisors] = useState(null);
  const [selectedAdvisor, setSelectedAdvisor] = useState(null);
  const [clients, setClients] = useState(null);
  const [selectedClient, setSelectedClient] = useState(null);
  
  /**
   * fetch the heroku service and parse the response into json, then
   * set that data as the state of the advisors.
   * we set the 'fetchButton' state as the dependency array of this side effect so
   * it will only fetch the data when the state is true, by default is set on false
   */
  useEffect(() => {
    if(fetchButton){
      fetch('https://altimetrik-bootcamp.herokuapp.com/LegalAccounts')
      .then(response => {
        return response.json();
      })
      .then(data => setAdvisors(data));
    }
  },[fetchButton]);

  /**
   * whenever the 'selectedAdvisor' state is updated, this hook runs and
   * get the clients from the selected advisor
   */
  useEffect(() => {
    if(advisors){
      advisors.forEach((advisor) => {
        if(advisor.AccountNumber === selectedAdvisor.AccountNumber){
          setClients(advisor.Clients);
        }
      });
    }
  },[selectedAdvisor]);
  
  return (
    <>
      <ProjectDescription></ProjectDescription>
      
      <div className='container'>
        <div className='cardsContainer'>
          <h1>Advisors</h1>
          {advisors ? <AdvisorCard advisors={advisors} setSelectedAdvisor={setSelectedAdvisor}></AdvisorCard> : <><h3>Nothing to see here yet, fetch some data!</h3><button className='fetchButton' onClick={() => setFetchButton(!fetchButton)}>Fetch</button></>}
        </div>
        <div className='cardsContainer'>
          <h1>Clients</h1>
          {clients ? <ClientCard clients={clients} setSelectedClient={setSelectedClient}></ClientCard> : <h3>Select an advisor to visualize their clients.</h3>}
        </div>
        <div className='cardsContainer'>
          <h1>Selected client info</h1>
          {selectedClient ? <ClientInfo selectedClient={selectedClient} selectedAdvisor={selectedAdvisor}></ClientInfo> : <h3>Select a client to visualize their data.</h3>}
        </div>
      </div>
    </>
  );
}

export default App
