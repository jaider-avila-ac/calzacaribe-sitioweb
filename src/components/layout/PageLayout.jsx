import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function PageLayout() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 pt-[68px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
