import { motion } from 'framer-motion';
import { INode } from '../../interfaces/globalInterfaces';
import { MainDashboard } from './styled';

export const Main = ({ children }: INode) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1.0 },
      }}
    >
      <MainDashboard>
        <aside>
          <div>
            <h1>AXIA</h1>
          </div>
          <ul>
            <li>
              <button>
                <h3>Geferson</h3>
              </button>
            </li>
            <li>
              <button>
                <h3>Almeida</h3>
              </button>
            </li>
            <li>
              <button>
                <h3>Lopes</h3>
              </button>
            </li>
          </ul>
        </aside>
        {children}
      </MainDashboard>
    </motion.div>
  );
};
