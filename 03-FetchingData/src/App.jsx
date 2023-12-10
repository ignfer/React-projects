import { useState, useEffect } from 'react'
import './App.css'

import AdvisorCard from '../components/AdvisorCard/AdvisorCard'; 
import ClientCard from '../components/ClientCard/ClientCard';

import Header from '../components/Header/Header';
import ProjectDescription from '../components/ProjectDescription/ProjectDescription';

function App() {

  const [advisors, setAdvisors] = useState(null);
  const [selectedClient, setSelectedClient] = useState(null);
  const [clients, setClients] = useState(null);

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
    advisors.forEach((advisor) => {
      if(advisor.AccountNumber === selectedClient){
        setClients(advisor.Clients);
      }
    });
    console.log(clients);
  },[selectedClient]);
  
  return (
    <>
      <Header title={'03 - Fetching Data'}></Header>

      <ProjectDescription></ProjectDescription>
      <p>Now showing the clients of the client number: {selectedClient}</p>
      
      {advisors && <AdvisorCard advisors={advisors} setSelectedClient={setSelectedClient}></AdvisorCard>}
      {clients && <ClientCard clients={clients}></ClientCard>}
    </>
  );
}

export default App
