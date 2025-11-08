

function Profile(){
    const image = './src/assets/shyleshinbluecoat.jpg';

    const handleClick = (e) => e.target.style.display = 'none';

    // return(
    //     <div>
    //         <img src={image} alt="profile pic" width="250px"/>
    //         <h2>Shylesh S</h2>
    //         <p>Frontend Developer | React Enthusiast</p>
    //     </div>
    // )
    return(<img onClick={(e) => handleClick(e)} src={image}></img>)



}
export default Profile