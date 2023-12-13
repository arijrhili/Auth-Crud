import Hero from '@/components/home/Hero';
import Dialogue from '@/components/home/Radio/dialogue';
import Footer from '@/components/home/Footer';
import Articles from '@/components/home/mieux-vivre/Article';
import Newquestions from '@/components/home/questions';

function HomePage() {
  return <>
  <Hero/>
  <br></br>
  <Newquestions/>
  <Articles/>
  <Dialogue/>
  <Footer/>
  </>
}

export default HomePage;
