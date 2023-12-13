import { useState, useEffect } from 'react'
import './App.css'

import AdvisorCard from '../components/AdvisorCard/AdvisorCard'; 
import ClientCard from '../components/ClientCard/ClientCard';
import ClientInfo from '../components/ClientInfo/ClientInfo';

import ProjectDescription from '../components/ProjectDescription/ProjectDescription';

function App() {

  const [advisors, setAdvisors] = useState(null);
  const [selectedAdvisor, setSelectedAdvisor] = useState(null);
  const [clients, setClients] = useState(null);
  const [selectedClient, setSelectedClient] = useState(null);

  /**
   * fetch the heroku service and parse the response into json, then
   * set that data as the state of the advisors.
   * because we set an empty dependency array, this prevent the update for happening
   * more than the first time when the app component is rendered
   */
  useEffect(() => {
    fetch('https://altimetrik-bootcamp.herokuapp.com/LegalAccounts')
    .then(response => {
      return response.json();
    })
    .then(data => setAdvisors(data));
  },[])

  /**
   * whenever the 'selectedAdvisor' state is updated, this hook runs and
   * get the clients from the selected advisor
   */
  useEffect(() => {
    if(advisors){
      advisors.forEach((advisor) => {
        if(advisor.AccountNumber === selectedAdvisor){
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
          {advisors && <AdvisorCard advisors={advisors} setSelectedAdvisor={setSelectedAdvisor}></AdvisorCard>}
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
