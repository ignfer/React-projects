import './AdvisorCard.css'

function AdvisorCard({advisors, setSelectedAdvisor}){
  return(
    <>
      {advisors.map((advisor) => (
        <div className='advisorCard' key={advisor.AccountNumber} onClick={() => setSelectedAdvisor(advisor)}>
        <img className='advisorCardImg' src='../../src/assets/advisor.png'></img>
        <p className='advisorCardTitle'>{advisor.AccountName} <span className={advisor.AccountStatus}>{advisor.AccountStatus}</span></p>
        <p className='advisorCardDescription'>Total clients: {advisor.Clients.length}<br></br>
        Working since: {advisor.AsOfDate}</p>
        </div>
      ))}
    </>
  );
}

export default AdvisorCard;