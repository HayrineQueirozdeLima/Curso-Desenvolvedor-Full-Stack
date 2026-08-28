import {createContext, useContext, useState} from "react";

const AuthContext = createContext(null);

export function AuthProvider({children}){
    const [usuario, setUsuario] = useState(()=>{
        const salvo = localStorage.setItem("usuario");
        return salvo ? JSON.parse(salvo) : null;
    });

    function login (email,senha){
        if(email === "jonah@clarim.com" && senha === "odeioaranha123"){
            const dados = { nome: "J. Jonah Jameson", email: email };
            setUsuario(dados);
            localStorage.setItem("usuario", JSON.stringify(dados));
            return dados;
        }
        throw new Error("E-mail ou senha incorretos");
    }

    function logout() {
        setUsuario(null);
        localStorage.removeItem("usuario");
    }

    return (
        <AuthContext.Provider value={{usuario, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext);
    if (!context){
        throw new Error("useAuth deve ser udado dentro de AuthProvider");
    } 
    return context;
}