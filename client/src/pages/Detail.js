import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Count from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_COUNT,
  UPDATE_COUNT_QUANTITY,
  ADD_TO_COUNT,
  UPDATE_PILLS,
} from '../utils/actions';
import { QUERY_PILLS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
// import spinner from '../assets/spinner.gif';

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentPill, setCurrentPill] = useState({});

  const { loading, data } = useQuery(QUERY_PILLS);

  const { pills, count } = state;

  useEffect(() => {
    // already in global store
    if (pills.length) {
      setCurrentPill(pills.find((pill) => pill._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PILLS,
        pills: data.pills,
      });

      data.pills.forEach((pill) => {
        idbPromise('pills', 'put', pill);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('pills', 'get').then((indexedPills) => {
        dispatch({
          type: UPDATE_PILLS,
          pills: indexedPills,
        });
      });
    }
  }, [pills, data, loading, dispatch, id]);

  const newPillCount = () => {
    const currentPillCount = minerals.find((mineralItem) => mineralItem._id === id);
    if (currentPillCount) {
      dispatch({
        type: UPDATE_COUNT_QUANTITY,
        _id: id,
        // purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      // idbPromise('cart', 'put', {
      //   ...itemInCart,
      //   purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      // });
    } else {
      dispatch({
        type: ADD_TO_COUNT,
        pill: { ...currentPill, mineralQuantity: [] },
      });
      idbPromise('count', 'put', { ...currentPill, mineralQuantity: [] });
    }
  };

  const removeFromCount = () => {
    dispatch({
      type: REMOVE_FROM_COUNT,
      _id: currentPill._id,
    });

    idbPromise('count', 'delete', { ...currentPill });
  };

  return (
    <>
      {currentPill && count ? (
        <div className="container my-1">
          <Link to="/">← Back to Pills</Link>

          <h2>{setCurrentPill.name}</h2>

          <p>{currentPill.description}</p>

          <p>
            <strong>Price:</strong>${currentPill.price}{' '}
            <button onClick={ADD_TO_COUNT}>Add to Count</button>
            <button
              disabled={!count.find((p) => p._id === currentPill._id)}
              onClick={removeFromCount}
            >
              Remove from Count
            </button>
          </p>

          <img
            src={`/images/${currentPill.image}`}
            alt={currentPill.name}
          />
        </div>
      ) : null}
      {loading ? <img src={Image2} alt="loading" /> : null}
      <Count />
    </>
  );
}

export default Detail;
