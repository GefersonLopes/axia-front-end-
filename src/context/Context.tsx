import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalInterfaceContext, INode } from '../interfaces/globalInterfaces';

export const Context = createContext({} as GlobalInterfaceContext);

export const ContextProvider = ({ children }: INode) => {
  const navigate = useNavigate();

  return (
    <Context.Provider
      value={{
        navigate,
      }}
    >
      {children}
    </Context.Provider>
  );
};
