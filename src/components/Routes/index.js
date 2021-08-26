import React, { memo } from 'react'
import { Route, Switch } from 'react-router-dom'

const Routes = ({ routeConfig }) => {
  return (
    <Switch>
      {Object.keys(routeConfig).map((routeKey, index) => {
        return (
          <Route
            exact={routeConfig[routeKey].exact}
            key={index}
            path={routeConfig[routeKey].path}
            render={routeConfig[routeKey].render}
          />
        )
      })}
    </Switch>
  )
}

export default memo(Routes)
