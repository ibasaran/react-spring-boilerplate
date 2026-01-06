import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { NavLink } from './-components/nav-link'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className="container mx-auto mx-w-xl">
      <div className='space-x-2'>
        <NavLink   to='/'>
        Main Page
      </NavLink>
      <NavLink   to='/about'>
        About Page
      </NavLink>
      </div>
      <Outlet />
    </div>
  )
}
