import React, { lazy, Suspense } from 'react'

const lazyLoader = (importFunc, fallback) => {
  const LazyComponent = lazy(importFunc)

  return (props) => (
    <Suspense
      fallback={
        fallback || (
          <div
            style={{
              width: 100,
              margin: '0 auto',
              position: 'fixed',
              top: '40%',
              left: '45%',
              fontSize: '2rem',
              color: '#3355ff',
            }}>
            Loading...
          </div>
        )
      }>
      <LazyComponent {...props} />
    </Suspense>
  )
}

export default lazyLoader
