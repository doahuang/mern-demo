import React from 'react'

export default ({ review, openModal, deleteReview, history }) => {
  const { _id, rating, text } = review;
  const update = () => {
    history.push(`/reviews/${_id}/edit`);
    openModal('editReview');
  };

  return (
    <li>
      <article>
        <b>Rating: { rating }</b>
        <p>{ text }</p>
      </article>
      <div>
        <button onClick={update}>
          Update
        </button>
        <button onClick={() => deleteReview(_id)}>
          Delete
        </button>
      </div>
    </li>
  )
};