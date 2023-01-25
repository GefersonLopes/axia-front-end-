import { Div } from './styled';
import { motion } from 'framer-motion';

export const UserCard = () => {
  return (
    <Div>
      <ul>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1.5 },
          }}
        >
          <div>
            <p>
              {'TITLE'}
              {
                'Japan cuts economic view as exports to Asia weaken, article with image'
              }{' '}
            </p>
            <p>
              {'DATATIME'} {'2023/01/25  13:00h'}
            </p>
            <a
              href={
                'https://www.reuters.com/world/china/japan-cuts-economic-view-exports-asia-weaken-2023-01-25/'
              }
            >
              {'NOTICIA'}
            </a>
          </div>
        </motion.li>
      </ul>
    </Div>
  );
};
