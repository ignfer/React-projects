import { useState, useEffect } from 'react'
import './App.css'
import AdvisorCard from '../components/AdvisorCard/AdvisorCard'; 
import Header from '../components/Header/Header';

function App() {

  const [advisors, setAdvisors] = useState(null);

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
  
  return (
    <>
      <Header title={'03 - Fetching Data'}></Header>
      <p>The purpose of this small project is to <strong>fetch data from a Rest API published on Heroku</strong>, the JSON response contains
        Legal Advisors and Clients asesored by Legal Advisors. In the process of building this small project I learned a lot
        of new tools and concepts such as <strong>useEffect (which I wanted to learn for a long time), promises, the fetch
        function</strong> among others things that makes me more familiar at the time of connecting the <strong>frontend with
        external services or my own backend.</strong>
      </p>
      {advisors && <AdvisorCard advisors={advisors}></AdvisorCard>}
    </>
  );
}

export default App
