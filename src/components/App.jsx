import { Routes, Route, Navigate } from 'react-router-dom';
import { Kyiv } from 'pages/Kyiv';
import { Lviv } from 'pages/Lviv';
// import { WeatherLayout } from './WeatherLayout';
import { Odesa } from 'pages/Odesa';
import { City } from 'pages/City';
import { WeatherLayout } from './WeatherLayout/WeatherLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WeatherLayout />}>
        <Route index element={<Kyiv />} />
        <Route path="lviv" element={<Lviv />} />
        <Route path="odesa" element={<Odesa />} />
        <Route path="city" element={<City />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
