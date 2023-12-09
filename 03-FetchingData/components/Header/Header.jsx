import './Header.css'

function Header({title}){
  return(
    <>
      <div className="headerBackground">
          <h1>{title}</h1>
          <img src="../../src/assets/IF_logo.png"></img>
      </div>
    </>
  );
}

export default Header;