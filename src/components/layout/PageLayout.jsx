import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function PageLayout() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 pt-[68px] max-w-[1920px] w-full mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
