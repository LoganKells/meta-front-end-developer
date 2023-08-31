/**  Task

 1. Create a component called DisplayLogin. DisplayLogin should accept a prop called `status`.
 2. Using the ternary operator:
 If `status` is true, the DisplayLogin component should display: "You are currently logged in."
 If `status` is false, the component should display: "Please login in to view this page!"
 **/
function DisplayLogin(props) {
    let message
    props.status ? message = 'You are currently logged in' : message = 'Please login to view this page'
    return (
        <h2 id='displayLogin'>
            {message}
        </h2>
    )

}

export { DisplayLogin }