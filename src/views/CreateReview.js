import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { CREATE_REVIEW } from '../graphql/mutations.graphql';

const CreateReview = () => {
  const history = useHistory();
  const { id: productId } = useParams();
  const [addReview, { data }] = useMutation(CREATE_REVIEW);
  const { register, handleSubmit, errors } = useForm(); // initialise the hook

  const onSubmit = async data => {
    console.log(data);
    const review = { productId, ...data };
    await addReview({ variables: { review } });
    history.goBack();
  };

  return (
    <div>
      <h3>Product ID: {productId}</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Title</label>
          <input name="title" ref={register} />
        </div>

        <div>
          <label htmlFor="review">Review</label>
          <input name="review" ref={register} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateReview;
