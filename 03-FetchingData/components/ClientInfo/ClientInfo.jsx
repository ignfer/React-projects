import './ClientInfo.css'
export default function ClientInfo({selectedClient, selectedAdvisor}){

  return(
    <>
      <div>
        <form className='clientInfoForm'>
          <label>Client number</label>
          <input type='text' placeholder={selectedClient.ClientNumber} readOnly></input>
          <label>Email</label>
          <input type='text' placeholder={selectedClient.Email} readOnly></input>
          <label>Phone</label>
          <input type='text' placeholder={selectedClient.Phone} readOnly></input>
          <label>Asesored by</label>
          <input type='text' placeholder={selectedAdvisor} readOnly></input>
        </form>
      </div>
    </>
  );
}