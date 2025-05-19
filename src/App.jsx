import HeroSection from './components/HeroSection';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggleButton from './context/ThemeToggleButton';
import ThemeToggle from './ThemeToggle';

function App() {
  return (
    <>
      <ThemeProvider>
      <HeroSection />
      <ThemeToggleButton />
    </ThemeProvider>
    </>
  );
}

export default App;
