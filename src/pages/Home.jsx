import HomeHero from '@/components/HomeHero.jsx'
import FeaturedWork from '@/components/FeaturedWork.jsx'
import { featuredWork } from '@/data/featuredWork.js'

function Home() {
  return (
    <div className="pb-8">
      <HomeHero />
      <FeaturedWork items={featuredWork} />
    </div>
  )
}

export default Home
