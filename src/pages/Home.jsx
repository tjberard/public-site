import HomeHero from '@/components/HomeHero.jsx'
import ComingSoon from '@/components/ComingSoon.jsx'
// The "Selected work" cards are hidden for now. To bring them back, swap <ComingSoon />
// for: <FeaturedWork items={featuredWork} />, with these imports:
//   import FeaturedWork from '@/components/FeaturedWork.jsx'
//   import { featuredWork } from '@/data/featuredWork.js'

function Home() {
  return (
    <div className="pb-8">
      <HomeHero />
      <ComingSoon waitSteps={4} className="mt-14 lg:mt-20" />
    </div>
  )
}

export default Home
