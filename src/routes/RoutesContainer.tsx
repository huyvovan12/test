import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

type IPages = Record<string, React.LazyExoticComponent<() => JSX.Element>>;
type ILazyImport = Promise<{
  default: () => JSX.Element;
}>;

/**
 * Add new page here
 * then you can use it with <Pages.YourPage />
 */
const pages = ['Login'];

const Pages = pages.reduce<IPages>((P: IPages, p) => {
  P[p] = lazy(
    async () => import(/* @vite-ignore */ `../pages/${p}`) as ILazyImport
  );
  return P;
}, {});

const RoutesContainer = () => {
  return (
    <Suspense fallback={<>Loading ...</>}>
      <Routes>
        <Route path='/' element={<>hihi</>} />

        <Route path='/login' element={<Pages.Login />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesContainer;
