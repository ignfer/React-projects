import { useState, useEffect } from 'react'
import './App.css'

import AdvisorCard from '../components/AdvisorCard/AdvisorCard'; 
import ClientCard from '../components/ClientCard/ClientCard';
import ClientInfo from '../components/ClientInfo/ClientInfo';

import Header from '../components/Header/Header';
import ProjectDescription from '../components/ProjectDescription/ProjectDescription';

function App() {

  const [advisors, setAdvisors] = useState(null);
  const [selectedAdvisor, setSelectedAdvisor] = useState(null);
  const [clients, setClients] = useState(null);
  const [selectedClient, setSelectedClient] = useState({});

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

  useEffect(() => {
    if(advisors != null){
      advisors.forEach((advisor) => {
        if(advisor.AccountNumber === selectedAdvisor){
          setClients(advisor.Clients);
        }
      });
    }
  },[selectedAdvisor]);
  
  return (
    <>
      <Header title={'03 - Fetching Data'}></Header>

      <ProjectDescription></ProjectDescription>
      <p>Now showing the clients of the client number: {selectedAdvisor}</p>

      <div className='container'>
        <div className='cardsContainer'>
          <h1>Advisors</h1>
          {advisors && <AdvisorCard advisors={advisors} setSelectedAdvisor={setSelectedAdvisor}></AdvisorCard>}
        </div>
        <div className='cardsContainer'>
          <h1>Clients</h1>
          {clients && <ClientCard clients={clients} setSelectedClient={setSelectedClient}></ClientCard>}
        </div>
        <div className='clientInfoContainer'>
          <h1>Selected client info</h1>
          {selectedClient && selectedAdvisor && <ClientInfo selectedClient={selectedClient} selectedAdvisor={selectedAdvisor}></ClientInfo>}
        </div>
      </div>
    </>
  );
}

export default App
