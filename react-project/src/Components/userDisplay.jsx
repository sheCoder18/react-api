//this arrow function is taking array as parameter, list of users.


const UserDisplay = ({users}) => {
    return (

        // the jsx code must return single piece od code
        <>

         {/* the jsx code must be written in curly braces */}

            {
                // users list is being mapped with curUser as single item
                users.map((curUser) => {

                    // destructuring currUser
                    const {id, name, email} = curUser;
                    const {street, city, zipcode} = curUser.address;

                    return (

                        // filling the table 
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{street}, {city}, {" "}, {zipcode}</td>
                        </tr>
                    )
                })

            }
        </>
    )
}
export default UserDisplay;