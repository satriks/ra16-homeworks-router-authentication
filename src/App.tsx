import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Board from './components/Board';


export function App() {
    const [token, setToken] = useState<string | null>(null)
    const tokenStorage = localStorage.getItem("token")

    if (tokenStorage && !token) {
        setToken(tokenStorage)
    };
    
    return (
        <div id="app">
            <Header token={token} setToken={setToken}/>
            <Board token={token} setToken={setToken}/>
            <div>.</div>
        </div>
    );
}

export default App
