import React, { memo, useEffect } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'

const Routes = ({ routeConfig }) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Switch>
      {Object.keys(routeConfig).map((routeKey, index) => {
        const Component = routeConfig[routeKey].render
        return (
          <Route
            exact={routeConfig[routeKey].exact}
            key={index}
            path={routeConfig[routeKey].path}
            render={() => <Component {...routeConfig[routeKey].props} />}
          />
        )
      })}
    </Switch>
  )
}

export default memo(Routes)
