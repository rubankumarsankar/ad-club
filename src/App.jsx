import Community from './components/com';
import CommunityBanner from './components/CommunityBanner';
import DiscoverMoments from './components/DiscoverMoments';
import EventSection from './components/EventSection';
import FooterBanner from './components/foot';
import FooterSection from './components/FooterSection';
import HeroSection from './components/HeroSection';
import JoinClubSection from './components/JoinClubSection';
import JoinUsBanner from './components/JoinUsBanner';
import JoinUsSection from './components/JoinUsSection';
import LatestNews from './components/LatestNews';
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
      {/* <Community /> */}
      <WhyJoinUsBanner />
      <JoinClubSection />
      <EventSection />
      <UpcomingEvents />
      <LatestNews />
      {/* <JoinUsBanner /> */}
      <JoinUsSection />
      <DiscoverMoments />
      {/* <FooterBanner /> */}
      <FooterSection />
      <ThemeToggleButton />
    </ThemeProvider>
    </>
  );
}

export default App;
