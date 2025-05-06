import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectHasSeenSprites, setHasSeenSprites } from 'redux/reducers/sprites';

const SpritesAnimation = () => {
  const hasSeenSprites = useSelector(selectHasSeenSprites);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!hasSeenSprites) {
        dispatch(setHasSeenSprites(true));
      }
    }, 6000);

    return () => clearTimeout(timeout);
  }, [dispatch, hasSeenSprites]);

  if (hasSeenSprites) {
    return null;
  }

  return (
    <>
      <div className="opening"/>
      <div className="flex items-center opening--sprites--wrapper">
        <div className="opening--sprites"/>
      </div>
    </>
  );
};

export default SpritesAnimation;
