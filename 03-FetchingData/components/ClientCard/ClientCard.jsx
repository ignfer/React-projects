import './ClientCard.css'
export default function ClientCard({clients, setSelectedClient}){

  return(
    <>
    
    {
      clients.map((client) => (
        <div className='clientCard' key={client.ClientNumber} onClick={() => setSelectedClient(client)}>
        <img className='advisorCardImg' src='../../src/assets/client.png'></img>
        <p className='clientCardTitle'>{client.FirstName + ' ' + client.LastName}</p>
        <p>Email: {client.Email}</p>
        </div>
      ))
    }
    </>
  );
}