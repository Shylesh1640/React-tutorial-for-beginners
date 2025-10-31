import profilePic from "./assets/asaas.jpg"

function Card() {

    return(
        <div className="card">
            <img className="profile" src={profilePic} alt="profile pic"></img>
            <h2 className="title">Shylesh</h2>
            <p className="text">I am Engineering Student</p>
            

        </div>
    );

}
export default Card