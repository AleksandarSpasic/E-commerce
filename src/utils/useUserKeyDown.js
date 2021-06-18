import { useCallback, useEffect } from 'react';

const useUserKeyDown = (key, depend, callback) => {
  const handleUserKeyPress = useCallback(e => {
    const { code } = e;

    if (code === key) {
      callback(e);
      e.preventDefault();
    }
  }, depend); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress);

    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, [handleUserKeyPress]);
};

export default useUserKeyDown;
