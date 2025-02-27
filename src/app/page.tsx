import Navbar from '@/components/Navbar';
import { HeroParallax } from '@/components/ui/hero-parallax';
import products from '@/constants/products';

const Home = () => {
  return(
    <div>
      <Navbar />
      <HeroParallax products={products} />
    </div>
  )
}

export default Home;