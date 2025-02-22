import './App.css';
import useUsers from './hooks/useUser';

function App() {
    const users = useUsers();

    return (
        <div>
            <h2>Lista de Usuarios</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.name}>{user.email}-{user.last_name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
