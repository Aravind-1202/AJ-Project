import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/hero/Hero';
import { SocialProof } from '../components/social-proof/SocialProof';
import { About } from '../components/about/About';
import { Solutions } from '../components/solutions/Solutions';
import { TechStackShowcase } from '../components/techstack/TechStackShowcase';
import { Features } from '../components/features/Features';
import { CaseStudies } from '../components/casestudies/CaseStudies';
import { Process } from '../components/process/Process';
import { ProjectEstimator } from '../components/calculator/ProjectEstimator';
import { WhyUs } from '../components/why-us/WhyUs';
import { EnterpriseComparison } from '../components/comparison/EnterpriseComparison';
import { CtaSection } from '../components/cta/CtaSection';
import { ContactForm } from '../components/contact/ContactForm';
import { Footer } from '../components/layout/Footer';
import { NexaAssistant } from '../components/assistant/NexaAssistant';

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-violet-500/20 selection:text-violet-900 antialiased overflow-x-hidden">
      {/* Floating Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <SocialProof />
        <About />
        <Solutions />
        <TechStackShowcase />
        <Features />
        <CaseStudies />
        <Process />
        <ProjectEstimator />
        <WhyUs />
        <EnterpriseComparison />
        <CtaSection />
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating AI Tech Strategist Assistant */}
      <NexaAssistant />
    </div>
  );
};

