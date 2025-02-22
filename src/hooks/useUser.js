import { useState, useEffect } from "react";
import { getAllUsers } from "../services/UserService";


export default function useUsers() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const data = await getAllUsers();
            console.log("Datos recibidos:", data);
            setUsers(data);
        } catch (error) {
            console.log("Error: ", error);
        }
    }
    useEffect(() => {
        fetchUsers();
    }, []);
    
    return users;
}