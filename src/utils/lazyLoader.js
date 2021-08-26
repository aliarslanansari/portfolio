import React, { lazy, Suspense } from 'react'

const lazyLoader = (importFunc, fallback) => {
  const LazyComponent = lazy(importFunc)

  return (props) => (
    <Suspense fallback={fallback || 'Loading...'}>
      <LazyComponent {...props} />
    </Suspense>
  )
}

export default lazyLoader
