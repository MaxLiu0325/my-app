import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/core';
import { useParams, useHistory } from 'react-router-dom';
import { useQuery, useSubscription } from '@apollo/react-hooks';

import { PRODUCT } from '../graphql/queries.graphql';
import { REVIEW_ADDED } from '../graphql/subscription.graphql';

const Product = () => {
  const history = useHistory();
  const { id } = useParams();
  const { loading, error, data } = useQuery(PRODUCT, {
    fetchPolicy: 'cache-and-network',
    variables: { id }
  });

  // useSubscription(REVIEW_ADDED, {
  //   onSubscriptionData: data => {
  //     console.log('data :', data);
  //   }
  // });

  if (loading) return <div>Loading...</div>;

  const { product } = data;

  return (
    <div>
      <button onClick={() => history.push('/products')}>Go Back!!</button>
      <div>Product</div>
      <h3>ID: {id}</h3>
      <div>
        <label>Name : </label>
        {product.name}
      </div>
      <div>
        <label>Description : </label>
        {product.description}
      </div>
      <div>
        <label>Price : </label>
        {product.price}
      </div>
      <div>
        <Link to={`/products/${id}/reviews/new`}>Add Review</Link>
      </div>
      {product.reviews.map((review, i) => (
        <div key={i} css={reviewStyle}>
          <div>
            <label>Title : </label>
            {review.title}
          </div>
          <div>
            <label>Review : </label>
            {review.review}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;

const reviewStyle = css`
  border: 1px solid black;
  padding: 10px;
  margin-top: 10px;
`;
