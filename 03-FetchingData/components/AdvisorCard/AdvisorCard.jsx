import './AdvisorCard.css'

function AdvisorCard({advisors, setSelectedClient}){
  return(
    <>
      {advisors.map((advisor) => (
        <div className="advisorCard" key={advisor.AccountNumber} onClick={() => setSelectedClient(advisor.AccountNumber)}>
        <p className="advisorCardTitle">{advisor.AccountName}</p>
        <p>Total clients: {advisor.Clients.length}</p>
        <p>{advisor.AccountStatus}</p>
        </div>
      ))}
    </>
  );
}

export default AdvisorCard;