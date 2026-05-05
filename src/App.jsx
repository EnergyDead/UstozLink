import './App.css';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { WhyMentorsAccept } from './components/WhyMentorsAccept';
import { WhatYouGet } from './components/WhatYouGet';
import { GrowthLedger } from './components/GrowthLedger';
import { InstitutionalReporting } from './components/InstitutionalReporting';
import { FinalCTA } from './components/FinalCTA';

function App() {
  return (
    <div className="page">
      <Hero />
      <HowItWorks />
      <WhyMentorsAccept />
      <WhatYouGet />
      <GrowthLedger />
      <InstitutionalReporting />
      <FinalCTA />
    </div>
  );
}

export default App;
