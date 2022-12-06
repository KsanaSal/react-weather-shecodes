import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header } from './WeatherLayout.styled';

export const WeatherLayout = () => {
  return (
    <Container>
      <Header>
        <li>
          <a href="/">Kyiv</a>
        </li>
        <li>
          <a href="/lviv">Lviv</a>
        </li>
        <li>
          <a href="/odesa">Odesa</a>
        </li>
        <li>
          <a href="/city">City</a>
        </li>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
