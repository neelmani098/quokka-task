import React from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    email: '',
    password:''
})

export default AuthContext;

