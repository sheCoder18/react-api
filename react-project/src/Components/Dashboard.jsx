

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
            const res = await axios.get(url);
            const data = res.data;
            if (data.length > 0) {
                setUsers(data);
            }
            console.log(data);
        } catch (e) {
            console.error(e);
        }
    };

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
                    <UserDisplay users={users} />
                </tbody>
            </table>
        </>
    );
};

export default Dashboard;
