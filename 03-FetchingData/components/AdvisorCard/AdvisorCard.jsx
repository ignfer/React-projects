import './AdvisorCard.css'

function AdvisorCard({advisors, setSelectedAdvisor}){
  return(
    <>
      {advisors.map((advisor) => (
        <div className='advisorCard' key={advisor.AccountNumber} onClick={() => setSelectedAdvisor(advisor)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 100 100"><path d="M38 29h4c.6 0 1-.4 1-1v-3h14v3c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-3c0-3.3-2.7-6-6-6H43c-3.3 0-6 2.7-6 6v3c0 .6.4 1 1 1zm36 6H26c-3.3 0-6 2.7-6 6v32c0 3.3 2.7 6 6 6h48c3.3 0 6-2.7 6-6V41c0-3.3-2.7-6-6-6z"/></svg>
        <p className='advisorCardTitle'>{advisor.AccountName} <span className={advisor.AccountStatus}>{advisor.AccountStatus}</span></p>
        <p className='advisorCardDescription'>Total clients: {advisor.Clients.length}<br></br>
        Working since: {advisor.AsOfDate}</p>
        </div>
      ))}
    </>
  );
}

export default AdvisorCard;