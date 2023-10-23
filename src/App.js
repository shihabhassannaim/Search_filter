import { useState } from 'react';
import './App.css';
import data from './search_filter.json'

function App() {
  const [cng , setCng] = useState("");
  return (
    <div className="App">
      <input type="text" placeholder='Search....' onChange={(event) =>setCng(event.target.value)} />
      <ul>{data.filter((user) => 
        user.first_name.toLowerCase().includes(cng)
      ).map(user => (
        <li>{user.first_name}</li>
        ))}
        </ul>
    </div>
  );
}

export default App;
