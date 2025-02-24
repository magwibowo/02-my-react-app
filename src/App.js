import './App.css';
import React, {useState} from 'react';
import Counter from './Counter';
import Greeting from './Greeting';
import TodoList from "./TodoList";



function Header() {
    return (
        <header>
            <h1>Aplikasi React Saya</h1>
        </header>
    );
}

function Main() {
    return (
        <main>
            <h2>Selamat datang di Aplikasi React Saya!</h2>
            <p>Ini adalah area konten utama.</p>
        </main>
    );
}

function Footer() {
    return (
        <footer>
            <p>Hak Cipta &copy; 2025 Aplikasi React Saya</p>
        </footer>
    );
}

function Example() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);  
    const [email, setEmail] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div>
            <input type="text" placeholder="Nama" value={name} onChange={handleNameChange} />
            <input type="number" placeholder="Umur" value={age} onChange={handleAgeChange} />
            <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
            <p>{name} berumur {age} tahun dan emailnya adalah {email}.</p>
        </div>
    );
}


function App() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <Header />
            <Main />
            <Greeting name="Agung" />
            <Counter /> 
            <Example />
            <TodoList />
            <Footer />
        </div>
    );
}

export { Header, Main, Footer, };
export default App;

