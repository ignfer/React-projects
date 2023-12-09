import './AdvisorCard.css'

function AdvisorCard({advisors}){
  return(
    <>
      {advisors.map((advisor) => (
        <div className="advisorCard" key={advisor.AccountNumber}>
        <p className="advisorCardTitle">{advisor.AccountName}</p>
        <p>Total clients: {advisor.Clients.length}</p>
        <p>{advisor.AccountStatus}</p>
        </div>
      ))}
    </>
  );
}

export default AdvisorCard;