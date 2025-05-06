import { useEffect } from 'react';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import { selectHasSeenSprites } from './redux/reducers/sprites';

function App() {
  // TODO: add sprites animation
  const hasSeenSprites = useSelector(selectHasSeenSprites);

  useEffect(() => {
    console.log(hasSeenSprites);
  }, [hasSeenSprites]);

  return <Outlet />;
}

export default App;
