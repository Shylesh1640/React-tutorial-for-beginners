import PropTypes from "prop-types"
function Usergreet(props){

    // if(props.isLoggedIn){
    //     return(<h2 className="logedin">Welcome {props.username}</h2>)
    // }
    // else{
    //     return(<h2 className="login">Please log in</h2>)
    // }

    const welcomemsg = <h2 className="logedin">Welcome {props.username}</h2>
    const loginmsg = <h2 className="login">Please log in</h2>

    return(
        props.isLoggedIn ? welcomemsg : loginmsg  );
    
    
}
Usergreet.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    username: PropTypes.string
}
Usergreet.defaultProps = {
    isloggedIn: false,
    username: "Guest", 
}
export default Usergreet