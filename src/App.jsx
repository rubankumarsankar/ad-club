import HeroSection from './components/HeroSection';
import LegacySection from './components/LegacySection';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggleButton from './context/ThemeToggleButton';
import ThemeToggle from './ThemeToggle';

function App() {
  return (
    <>
      <ThemeProvider>
      <HeroSection />
      <LegacySection />
      <ThemeToggleButton />
    </ThemeProvider>
    </>
  );
}

export default App;
