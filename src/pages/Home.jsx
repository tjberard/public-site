import HomeHero from '@/components/HomeHero.jsx'
import WorkCarousel from '@/components/WorkCarousel.jsx'
import { featuredWork } from '@/data/featuredWork.js'

function Home() {
  return (
    <div className="pb-8">
      <HomeHero />
      <WorkCarousel items={featuredWork} />
    </div>
  )
}

export default Home
