import { useState, useEffect } from "react";
import { getAllUsers, getUserByName } from "../services/UserService";

export default function useUsers() {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Cargar todos los usuarios al inicio
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getAllUsers();
                setUsers(data);
            } catch (error) {
                console.log("Error al cargar usuarios:", error);
            }
        };
        fetchUsers();
    }, []);

    // Buscar un usuario por nombre cuando el término de búsqueda cambia
    useEffect(() => {
        if (searchTerm) {
            const fetchUserByName = async () => {
                try {
                    const data = await getUserByName(searchTerm);
                    if (data.error) {
                        setUsers([]); // Si no se encuentra el usuario, mostrar lista vacía
                    } else {
                        setUsers([data]); // Mostrar solo el usuario encontrado
                    }
                } catch (error) {
                    console.log("Error al buscar usuario:", error);
                }
            };
            fetchUserByName();
        } else {
            // Si no hay término de búsqueda, mostrar todos los usuarios
            const fetchUsers = async () => {
                try {
                    const data = await getAllUsers();
                    setUsers(data);
                } catch (error) {
                    console.log("Error al cargar usuarios:", error);
                }
            };
            fetchUsers();
        }
    }, [searchTerm]);

    return { users, setSearchTerm };
}