import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/core';

import { useQuery } from '@apollo/react-hooks';

import { PRODUCT_LIST } from '../graphql/queries.graphql';

const ProductList = () => {
  const { loading, error, data } = useQuery(PRODUCT_LIST);

  if (loading) return <div>Loading...</div>;

  return (
    <div css={mainStyle}>
      <div>ProductList</div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Name</th>
            <th>Price</th>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {data.products.map(({ id, type, name, description, price }, i) => (
            <tr key={i}>
              <td>{id}</td>
              <td>{type}</td>
              <td>{name}</td>
              <td>{price}</td>
              <td>
                <Link to={`/products/${id}`}>Detail</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;

const mainStyle = css`
  table,
  th,
  td {
    border: 1px solid black;
  }

  th {
    padding: 13px;
  }
  td {
    padding: 15px;
  }
`;
