import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => (
    <div className="p-8">
      <h3 className="text-2xl font-bold text-brewflock-orange">Welcome to the Jobsite</h3>
      <p>Your type-safe routing is now working!</p>
    </div>
  )
})