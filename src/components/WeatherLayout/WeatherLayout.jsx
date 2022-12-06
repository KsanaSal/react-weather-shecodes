import { SearchCity } from 'components/Search/SearchCity';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link, List } from './WeatherLayout.styled';

export const WeatherLayout = () => {
  return (
    <Container>
      <Header>
        <List>
          <span>
            <Link href="/">Kyiv</Link>
          </span>
          <span>
            <Link href="/lviv">Lviv</Link>
          </span>
          <span>
            <Link href="/odesa">Odesa</Link>
          </span>
        </List>
        <span>
          <Link href="/city">City</Link>
        </span>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      <div>
        <SearchCity />
        <div>sfdgftghgyj</div>
        <div>argtrgh</div>
      </div>
    </Container>
  );
};
