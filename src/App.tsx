/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  Mail, 
  Users, 
  Target, 
  Calendar, 
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = ({ onOpenContact }: { onOpenContact: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <Zap className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">LeadFlow<span className="text-indigo-600">Pro</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#process" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Process</a>
          <a href="#results" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Results</a>
          <a href="#case-studies" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Case Studies</a>
          <button 
            onClick={onOpenContact}
            className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-sm"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-900">Process</a>
              <a href="#results" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-900">Results</a>
              <a href="#case-studies" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-900">Case Studies</a>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="bg-indigo-600 text-white px-5 py-3 rounded-xl text-base font-semibold"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              B2B Lead Generation Agency
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
              We Book <span className="text-indigo-600">Qualified Meetings</span> While You Close Deals.
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
              Stop chasing cold leads. We build predictable sales pipelines for high-growth B2B companies using data-driven outreach and strategic appointment setting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 group">
                Get a Free Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                View Case Studies
              </button>
            </div>
            
            <div className="mt-10 flex items-center gap-6 text-slate-500">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/100/100`} 
                    alt="Client" 
                    className="w-10 h-10 rounded-full border-2 border-white"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <p className="text-sm font-medium">Trusted by 50+ B2B Founders & Sales Teams</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl relative z-10 border border-slate-800">
              <div className="flex items-center justify-between mb-8">
                <div className="text-white">
                  <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">Monthly Performance</p>
                  <h3 className="text-2xl font-bold">Campaign Dashboard</h3>
                </div>
                <div className="bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-lg text-xs font-bold">Live Data</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700">
                  <p className="text-slate-400 text-xs mb-1">Emails Sent</p>
                  <p className="text-2xl font-bold text-white">12,480</p>
                  <div className="mt-2 flex items-center gap-1 text-emerald-400 text-xs">
                    <TrendingUp className="w-3 h-3" /> +14%
                  </div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700">
                  <p className="text-slate-400 text-xs mb-1">Open Rate</p>
                  <p className="text-2xl font-bold text-white">68.2%</p>
                  <div className="mt-2 flex items-center gap-1 text-emerald-400 text-xs">
                    <TrendingUp className="w-3 h-3" /> +5.2%
                  </div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700">
                  <p className="text-slate-400 text-xs mb-1">Replies</p>
                  <p className="text-2xl font-bold text-white">412</p>
                  <div className="mt-2 flex items-center gap-1 text-emerald-400 text-xs">
                    <TrendingUp className="w-3 h-3" /> +8%
                  </div>
                </div>
                <div className="bg-indigo-600 p-4 rounded-2xl shadow-lg shadow-indigo-900/20">
                  <p className="text-indigo-100 text-xs mb-1">Meetings Booked</p>
                  <p className="text-2xl font-bold text-white">42</p>
                  <div className="mt-2 flex items-center gap-1 text-white/80 text-xs font-medium">
                    Target: 40/mo
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-slate-800/30 rounded-xl border border-slate-700/50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-white text-xs font-bold">New Meeting Booked</p>
                      <p className="text-slate-400 text-[10px]">VP of Sales @ TechCorp</p>
                    </div>
                  </div>
                  <span className="text-slate-500 text-[10px]">2m ago</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-800/30 rounded-xl border border-slate-700/50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-white text-xs font-bold">Positive Reply Received</p>
                      <p className="text-slate-400 text-[10px]">CEO @ InnovateFlow</p>
                    </div>
                  </div>
                  <span className="text-slate-500 text-[10px]">15m ago</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  return (
    <section className="py-12 border-y border-slate-100 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">Trusted by industry leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {['Stripe', 'HubSpot', 'Salesforce', 'Slack', 'Zoom', 'Intercom'].map((brand) => (
            <span key={brand} className="text-xl md:text-2xl font-black text-slate-400 tracking-tighter">{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "ICP & Persona Mapping",
      description: "We define your Ideal Customer Profile and map out decision-makers using technographic and firmographic data."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Verified List Building",
      description: "Our team builds custom, human-verified prospect lists. No stale databases, only active buyers with intent."
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Strategic Outreach",
      description: "We craft personalized, multi-channel sequences (Email + LinkedIn) that cut through the noise and spark conversations."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Appointment Setting",
      description: "We handle the back-and-forth and book qualified meetings directly onto your sales team's calendar."
    }
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3">Our Mechanism</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">How We Generate ROI For You</h3>
          <p className="text-lg text-slate-600">We don't just send emails. We execute a comprehensive sales development strategy designed to fill your pipeline with high-value opportunities.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="bg-slate-50 rounded-3xl p-8 h-full border border-slate-100 group-hover:border-indigo-100 group-hover:bg-white group-hover:shadow-xl group-hover:shadow-indigo-500/5 transition-all duration-300">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h4>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-10">
                  <ChevronRight className="text-slate-200 w-8 h-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Results = () => {
  return (
    <section id="results" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-3">The Proof</h2>
            <h3 className="text-4xl font-bold mb-6">Numbers That Speak Louder Than Words</h3>
            <p className="text-lg text-slate-400 mb-10">We focus on the metrics that matter: Qualified Sales Meetings and Pipeline Value. Here is what we deliver on average for our clients.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-xl">100% Human Verified Leads</p>
                  <p className="text-slate-500 text-sm">Zero bounce rates, maximum deliverability.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-xl">Predictable Appointment Volume</p>
                  <p className="text-slate-500 text-sm">Scalable outreach that grows with your team.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-xl">Performance-Based Model</p>
                  <p className="text-slate-500 text-sm">We are incentivized by your success.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 text-center">
              <p className="text-indigo-400 text-4xl font-bold mb-2">15-40</p>
              <p className="text-slate-300 font-medium">Qualified Meetings / Mo</p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 text-center">
              <p className="text-indigo-400 text-4xl font-bold mb-2">22%</p>
              <p className="text-slate-300 font-medium">Avg. Reply Rate</p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 text-center">
              <p className="text-indigo-400 text-4xl font-bold mb-2">$2.4M</p>
              <p className="text-slate-300 font-medium">Pipeline Generated</p>
            </div>
            <div className="bg-indigo-600 p-8 rounded-3xl text-center shadow-xl shadow-indigo-900/20">
              <p className="text-white text-4xl font-bold mb-2">12x</p>
              <p className="text-white/90 font-medium">Average ROI</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/5 blur-[120px] -z-0"></div>
    </section>
  );
};

const CaseStudy = () => {
  return (
    <section id="case-studies" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3">Success Stories</h2>
            <h3 className="text-4xl font-bold text-slate-900">Real Results for Real Companies</h3>
          </div>
          <button className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
            See All Case Studies <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-3xl mb-6">
              <img 
                src="https://picsum.photos/seed/agency1/800/500" 
                alt="Case Study" 
                className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white font-medium">Read the full story</p>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">SaaS</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">Outbound</span>
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">How we helped CloudScale book 34 meetings in 60 days.</h4>
            <p className="text-slate-600">Targeting CTOs at Enterprise FinTech companies with highly personalized video outreach.</p>
          </div>

          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-3xl mb-6">
              <img 
                src="https://picsum.photos/seed/agency2/800/500" 
                alt="Case Study" 
                className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white font-medium">Read the full story</p>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">FinTech</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">Appointment Setting</span>
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Scaling PayFlow's sales pipeline by 300% in one quarter.</h4>
            <p className="text-slate-600">Building a multi-channel outreach system that generated $1.2M in new pipeline value.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = ({ onOpenContact }: { onOpenContact: () => void }) => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-indigo-500/20">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">Ready to Fill Your Calendar With <br className="hidden md:block" /> Qualified Sales Meetings?</h2>
          <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">Book a free 15-minute strategy call. We'll analyze your current outreach and show you exactly how we can scale your appointments.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={onOpenContact}
              className="bg-white text-indigo-600 px-10 py-5 rounded-full text-xl font-bold hover:bg-indigo-50 transition-all flex items-center justify-center gap-2"
            >
              Contact Us
              <Mail className="w-6 h-6" />
            </button>
            <button className="bg-indigo-500 text-white border border-indigo-400 px-10 py-5 rounded-full text-xl font-bold hover:bg-indigo-400 transition-all">
              Request a Sample List
            </button>
          </div>
        </div>
        
        {/* Decorative circles */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Zap className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">LeadFlow<span className="text-indigo-600">Pro</span></span>
            </div>
            <p className="text-slate-500 max-w-sm mb-8">
              The premium B2B lead generation agency for high-growth companies. We build the pipeline, you close the deals.
            </p>
            <div className="flex gap-4">
              {/* Social icons placeholder */}
              <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-100 transition-all cursor-pointer">
                <Users className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-100 transition-all cursor-pointer">
                <Mail className="w-5 h-5" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Agency</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#process" className="hover:text-indigo-600 transition-colors">Process</a></li>
              <li><a href="#results" className="hover:text-indigo-600 transition-colors">Results</a></li>
              <li><a href="#case-studies" className="hover:text-indigo-600 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> leadflowpro@yourcompany.com</li>
              <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Privacy Policy</li>
              <li className="flex items-center gap-2"><BarChart3 className="w-4 h-4" /> Terms of Service</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs">© 2026 LeadFlowPro Agency. All rights reserved.</p>
          <p className="text-slate-400 text-xs flex items-center gap-1">Made with <Zap className="w-3 h-3 text-indigo-500" /> for B2B Growth</p>
        </div>
      </div>
    </footer>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "LeadFlowPro transformed our sales process. We went from struggling to find leads to having a calendar full of qualified prospects every single week.",
      author: "Sarah Jenkins",
      role: "Founder @ SaaSify",
      image: "https://picsum.photos/seed/sarah/100/100"
    },
    {
      quote: "The quality of the meetings they book is exceptional. These aren't just leads; they are decision-makers ready to talk business.",
      author: "Michael Chen",
      role: "Head of Sales @ DataStream",
      image: "https://picsum.photos/seed/michael/100/100"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 relative">
              <div className="absolute -top-6 left-10 w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-serif">
                "
              </div>
              <p className="text-xl text-slate-700 italic mb-8 leading-relaxed">
                {t.quote}
              </p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full" referrerPolicy="no-referrer" />
                <div>
                  <p className="font-bold text-slate-900">{t.author}</p>
                  <p className="text-slate-500 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setEmail('');
        setMessage('');
      }, 2000);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden"
          >
            <div className="p-8 md:p-12">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-8">
                <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Contact Us</h3>
                <p className="text-slate-500">Let's talk about your project. Our team will get back to you as soon as possible.</p>
              </div>

              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl text-center"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-emerald-900 font-bold text-xl mb-1">Message Received!</h4>
                  <p className="text-emerald-700">You've taken the first step towards a great collaboration.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Your Email Address</label>
                    <input 
                      required
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="yourname@company.com"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Your Message</label>
                    <textarea 
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can we help you?"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none"
                    />
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-indigo-600 text-white py-5 rounded-2xl text-lg font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// --- Main App ---

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      <main>
        <Hero />
        <TrustBar />
        <Process />
        <Results />
        <CaseStudy />
        <Testimonials />
        <CTA onOpenContact={() => setIsContactOpen(true)} />
      </main>
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
