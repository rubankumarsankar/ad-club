import CommunityBanner from './components/CommunityBanner';
import EventSection from './components/EventSection';
import FooterSection from './components/FooterSection';
import HeroSection from './components/HeroSection';
import JoinClubSection from './components/JoinClubSection';
import LegacySection from './components/LegacySection';
import LegacyHeroSection from './components/new';
import UpcomingEvents from './components/UpcomingEvents';
import WhyJoinUsBanner from './components/WhyJoinUsBanner';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggleButton from './context/ThemeToggleButton';
import ThemeToggle from './ThemeToggle';

function App() {
  return (
    <>
      <ThemeProvider>
      <HeroSection />
      <LegacySection />
      {/* <LegacyHeroSection/> */}
      <CommunityBanner />
      <WhyJoinUsBanner />
      <JoinClubSection />
      <EventSection />
      <UpcomingEvents />
      <FooterSection />
      <ThemeToggleButton />
    </ThemeProvider>
    </>
  );
}

export default App;
