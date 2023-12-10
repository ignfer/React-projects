import './ClientCard.css'
export default function ClientCard({clients}){
  return(
    <>
    {clients.map((client) => (
        <div className="clientCard" key={client.AccountNumber}>
        <p className="clientCardTitle">{client.Email}</p>
        </div>
      ))}
    </>
  );
}