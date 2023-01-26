import { Div } from './styled';
import { motion } from 'framer-motion';
import socketIOClient from 'socket.io-client';
import { useContext, useEffect, useState } from 'react';
import { Data } from '../../interfaces/globalInterfaces';
import moment from 'moment';
import { Context } from '../../context/Context';

export const UserCard = () => {
  const { news, setNews, url } = useContext(Context);
  const socket = socketIOClient(url, { secure: true });

  useEffect(() => {
    socket.on('connect', () => {
      socket.emit('getNews');
    });
    socket.on('getNews', (data: Data[]) => {
      setNews(data);
    });
    socket.on('error', (error: any) => {
      console.error(error);
    });
    return () => {
      socket.off('getNews');
      socket.off('error');
    };
  }, []);

  return (
    <Div>
      <ul>
        {news?.length === 0 ? (
          <p>Carregando...</p>
        ) : (
          news?.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 1.5 },
              }}
            >
              <div>
                <p>{item.title}</p>
                <p>
                  {moment(item.datatime).year()}/
                  {moment(item.datatime).month() + 1}/
                  {moment(item.datatime).date()}
                </p>
                <p>
                  {moment(item.datatime).hour()}:
                  {moment(item.datatime).minute()}
                </p>
                <a href={item.link}>Ver notícia</a>
              </div>
            </motion.li>
          ))
        )}
      </ul>
    </Div>
  );
};
