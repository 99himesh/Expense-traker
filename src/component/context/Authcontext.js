import React from "react";

const AuthContext = React.createContext({
    token: '',
    userId: '',
    isLoggedIn: false,
    // isVarified:false,
    login: (token) => {},
    logout: () => {},

});

export default AuthContext;