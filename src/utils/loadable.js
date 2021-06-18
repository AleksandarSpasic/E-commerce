import React, { lazy, Suspense } from 'react';

const loadable = importFunc => {
  const LazyComponent = lazy(importFunc);

  return props => (
    <Suspense fallback={null}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
