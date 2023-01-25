import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Data,
  GlobalInterfaceContext,
  INode,
} from '../interfaces/globalInterfaces';

export const Context = createContext({} as GlobalInterfaceContext);

export const ContextProvider = ({ children }: INode) => {
  const url = 'http://localhost:3002';
  const [news, setNews] = useState<Data[]>();
  const navigate = useNavigate();

  return (
    <Context.Provider
      value={{
        navigate,
        url,
        news,
        setNews,
      }}
    >
      {children}
    </Context.Provider>
  );
};
