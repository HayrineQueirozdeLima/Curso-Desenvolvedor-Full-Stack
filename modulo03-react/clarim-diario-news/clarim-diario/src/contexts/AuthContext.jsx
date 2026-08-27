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
}