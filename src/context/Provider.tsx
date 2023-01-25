import { createContext, useState } from 'react';
import { INode } from '../interfaces/globalInterfaces';
import { InterfaceContextLogic } from '../interfaces/interfaces';
import { useNavigate } from 'react-router-dom';

export const ContextLogic = createContext({} as InterfaceContextLogic);

export const ContextProviderLogic = ({ children }: INode) => {
  const [isLoad, setIsLoad] = useState(true);

  const loading = () => {
    setIsLoad(false);
  };

  return (
    <ContextLogic.Provider
      value={{
        isLoad,
        loading,
      }}
    >
      {children}
    </ContextLogic.Provider>
  );
};
