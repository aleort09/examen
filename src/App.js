import './App.css';
import useUsers from './hooks/useUser';

function App() {
    const users = useUsers();

    return (
        <div>
            <h2>Lista de Usuarios</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.name}>
                            <td>{user.name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;