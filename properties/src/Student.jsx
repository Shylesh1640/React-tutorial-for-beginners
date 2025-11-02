function Student(props) {

    return(
        <div className="student">
            <h2>Student</h2>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Grade: {props.grade}</p>
        </div>

    );

}
// Student.propTypes = {
//     name: PropTypes.string.isRequired,
//     age: PropTypes.number.isRequired,
//     grade: PropTypes.string.isRequired
// }; 

Student.defaultProps = {
    name: "Guest",
    age: 0,
    grade: "N/A"
}


export default Student