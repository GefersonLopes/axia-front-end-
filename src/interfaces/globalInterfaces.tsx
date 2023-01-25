import { ReactNode } from 'react';

export interface GlobalInterfaceContext {
  navigate: (value: string) => void;
  url: string;
  news: Data[] | undefined;
  setNews: (value: Data[]) => void;
}

export interface INode {
  children: ReactNode;
}

export interface Data {
  title: string | undefined;
  datatime: Date | undefined;
  link: string | undefined;
}
