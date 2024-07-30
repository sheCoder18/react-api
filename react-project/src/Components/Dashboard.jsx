

import {useEffect, useState} from "react";
import axios from "axios";
import UserDisplay from "./userDisplay";
import "./Dashboard.css";

const API = "https://jsonplaceholder.typicode.com/users";

const Dashboard = () => {
    const [users, setUsers] = useState([]);

    //fetching data from API using axios
    const fetchUsers = async (url) => {
        try {

            // This line sends a GET request to the provided URL using the axios library. 
            // The await keyword pauses the function execution until the request is complete and the response is returned.
            const res = await axios.get(url);

            //extracting data from response came
            const data = res.data;

            if (data.length > 0) {
                setUsers(data);
            }
            console.log(data);
        } catch (e) {
            console.error(e);
        }
    };

    // Inside the useEffect, the fetchUsers function is called with the API URL
    // The empty dependency array [] means that this effect will run only once, after the initial render.
    useEffect(() => {
        fetchUsers(API);
    }, []);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {/* passing users as props */}
                    <UserDisplay users={users} />
                </tbody>
            </table>
        </>
    );
};

export default Dashboard;
