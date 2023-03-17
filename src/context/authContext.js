import { createContext, useContext } from "react";

const authContext = createContext();

/*Utilizamos esta funcion para no tener que importar en los componentes
el objeto context y la el metod useContext*/
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is not authProvider");
  return context;
};

//Este componente proporciona el acceso al contexto a los componentes que englobe
export function AuthProvider({ children }) {
  const user = {
    login: true,
  };
  return (
    <authContext.Provider value={{ user }}>{children}</authContext.Provider>
  );
}
