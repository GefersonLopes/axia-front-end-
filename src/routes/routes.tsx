import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Homepage } from '../pages/Homepage';

export const RouteInPage = (): any => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
