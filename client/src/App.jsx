import { Home, NotFound } from '@/pages';
import { BrowserRouter, Route, Routes } from 'react-router';
import { RootLayout } from './RootLayout';

const providers = [BrowserRouter, Routes];

const Nest = ({ providers, children }) =>
  providers.reduceRight(
    (acc, Provider) => <Provider>{acc}</Provider>,
    children,
  );

export const App = () => {
  return (
    <Nest providers={providers}>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Nest>
  );
};
