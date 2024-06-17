import React from 'react';
import { UserProvider } from './Context/UserContext';
import UserForm from './Component/UserForm';
import Header from './Component/Header';

const App = () => {
    return (
        <UserProvider>
            <Header />
            <UserForm />
        </UserProvider>
    );
};

export default App;