import React, { useEffect } from 'react';
import PillItem from '../PillItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PILLS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PILLS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
// import spinner from '../../assets/spinner.gif';
import { Pill } from '../../../../server/models';

function PillList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PILLS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PILLS,
        pills: data.pills,
      });
      data.pills.forEach((pill) => {
        idbPromise('pills', 'put', pill);
      });
    } else if (!loading) {
      idbPromise('pills', 'get').then((pills) => {
        dispatch({
          type: UPDATE_PILLS,
          pills: pills,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterPills() {
    if (!currentCategory) {
      return state.pills;
    }

    return state.pills.filter(
      (pill) => pill.category._id === currentCategory
    );
  }

  return (
    <div className="my-2">
      <h2>Our Pills:</h2>
      {state.pills.length ? (
        <div className="flex-row">
          {filterPill().map((pill) => (
            <PillItem
              key={Pill._id}
              _id={pill._id}
              // image={pill.image}
              // name={pill.name}
              // price={pill.price}
              // quantity={pill.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any pills yet!</h3>
      )}
      {/* {loading ? <img src={spinner} alt="loading" /> : null} */}
    </div>
  );
}

export default PillList;
