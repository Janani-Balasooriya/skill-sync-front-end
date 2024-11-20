import Hero from "./components/Hero";
import JobSection from "./components/JobSection";

function HomePage() {
  return (
    <div className='p-4'>
      <Hero/>
      <JobSection />
    </div>
  );
}

export default HomePage;