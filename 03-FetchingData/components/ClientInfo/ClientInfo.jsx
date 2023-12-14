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
          <label>Advisor account name</label>
          <input type='text' placeholder={selectedAdvisor.AccountName} readOnly></input>
          <label>Advisor account number</label>
          <input type='text' placeholder={selectedAdvisor.AccountNumber} readOnly></input>
        </form>
      </div>
    </>
  );
}