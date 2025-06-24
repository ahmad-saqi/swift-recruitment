import ChoseUs from "@/components/choose-us.tsx";
import Hero from "../components/hero.tsx";
import Navbar from "../components/nabbar.tsx";
import Feature from "@/components/feature.tsx";
import Trends from "@/components/trends.tsx";
import Recruitments from "@/components/recruitments.tsx";
import Stories from "@/components/stories.tsx";
import Reviews from "@/components/reviews.tsx";
import FindJob from "@/components/find-job.tsx";
import Footer from "@/components/footer.tsx";
const Landing = () => {
  return (
    <div className="w-full ">
      <Navbar />
      <Hero />
      <ChoseUs/>
      <Feature/>
      <Trends/>
      <Recruitments/>
      <Stories/>
      <Reviews/>
      <FindJob/>
      <Footer/>
    </div>
  );
};

export default Landing;
