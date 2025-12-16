import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Speakers from '@/components/Speakers';
import PracticalCourses from '@/components/PracticalCourses';
import Schedule from '@/components/Schedule';
import Tickets from '@/components/Tickets';
import Edital from '@/components/Edital';
import Location from '@/components/Location';
import Partners from '@/components/Partners';
import InstitutionalSupport from '@/components/InstitutionalSupport';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9F4F5]">
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Speakers />
        <PracticalCourses />
        <Schedule />
        <Tickets />
        <Edital />
        <Location />
        <Partners />
        <InstitutionalSupport />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
