import React from 'react';
import { Redirect } from 'react-router-dom';

import Profile from './views/Profile';
import Product from './views/Product';
import ProductList from './views/ProductList';
import CreateReview from './views/CreateReview';

// Layout Types
import { DefaultLayout, BlankLayout } from './layouts';

export default [
  {
    path: '/',
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/products" />
  },
  {
    exact: true,
    path: '/products',
    layout: DefaultLayout,
    component: ProductList
  },
  {
    exact: true,
    path: '/products/:id/reviews/new',
    layout: BlankLayout,
    component: CreateReview
  },
  {
    path: '/products/:id',
    layout: BlankLayout,
    component: Product
  },
  {
    path: '/profile',
    layout: DefaultLayout,
    component: Profile
  }
];
