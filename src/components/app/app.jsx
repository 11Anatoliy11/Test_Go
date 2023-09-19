import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from '../sharedLayout/sharedLayout';

const HomePage = lazy(() => import('../../pages/homePage/homePage'));
const TweetsPage = lazy(() => import('../../pages/tweetsPage/tweetsPage'));

export const App = () => {
  const curentUserId = localStorage.getItem(`curentUserId`);
  if (!curentUserId) {
    localStorage.setItem(`curentUserId`, Math.round(Math.random() * 1000));
  }
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route index element={<Navigate to="/tweets" />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
