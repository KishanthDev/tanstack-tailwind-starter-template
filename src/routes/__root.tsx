import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <>
      {/* This is where a global Navbar would go */}
      <div className="p-4 bg-brewflock-navy text-white font-bold">
        Brewflock Constructions
      </div>
      <hr />
      {/* This renders whatever page you are currently on */}
      <Outlet />
    </>
  ),
})