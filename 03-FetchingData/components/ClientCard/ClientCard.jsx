import './ClientCard.css'
export default function ClientCard({clients, setSelectedClient}){

  return(
    <>
    
    {
      clients.map((client) => (
        <div className='clientCard' key={client.ClientNumber} onClick={() => setSelectedClient(client)}>
        <svg height="80" width="80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M458.159 404.216c-18.93-33.65-49.934-71.764-100.409-93.431-28.868 20.196-63.938 32.087-101.745 32.087-37.828 0-72.898-11.89-101.767-32.087-50.474 21.667-81.479 59.782-100.398 93.431C28.731 448.848 48.417 512 91.842 512h328.317c43.424 0 63.11-63.152 38-107.784zM256.005 300.641c74.144 0 134.231-60.108 134.231-134.242v-32.158C390.236 60.108 330.149 0 256.005 0 181.85 0 121.753 60.108 121.753 134.242V166.4c0 74.133 60.098 134.241 134.252 134.241z"/></svg>
        <p className='clientCardTitle'>{client.FirstName + ' ' + client.LastName}</p>
        <p>Email: {client.Email}</p>
        </div>
      ))
    }
    </>
  );
}