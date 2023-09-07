export default function Welcome({isAdmin,user}){
    const usertType = isAdmin ? "w-div admin" : "w-div "
    const description = isAdmin ? "you are running with admin privileges." : 
    "you are running with normal user privileges."
    
    return(
        <>
            <div className={usertType}>
                <h2>Welcome {user}!</h2>
                <h4>{description}</h4>
            </div>
        </>
    );
}