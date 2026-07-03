// // import React, { useState } from 'react';
// // import { Helmet, HelmetProvider } from 'react-helmet-async';
// // import { motion } from 'framer-motion';
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import { Pagination, Autoplay } from 'swiper/modules';

// // import 'swiper/css';
// // import 'swiper/css/pagination';

// // const scrollToId = (id: string) => {
// //   const el = document.getElementById(id);
// //   if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
// // };

// // const navItems = [
// //   { id: 'hero', label: 'Home' },
// //   { id: 'about', label: 'About' },
// //   { id: 'services', label: 'Services' },
// //   { id: 'process', label: 'Process' },
// //   { id: 'projects', label: 'Projects' },
// //   { id: 'team', label: 'Team' },
// //   { id: 'reviews', label: 'Reviews' },
// //   { id: 'contact', label: 'Contact' },
// // ];

// // const reviews = [
// //   {
// //     name: 'Sara Kim',
// //     role: 'VP Marketing, Atlas Labs',
// //     company: 'B2B SaaS',
// //     quote: 'They helped us tell a very technical story in a way that feels human and polished. The new portal finally matches the quality of our product.',
// //     rating: 5,
// //     initials: 'SK',
// //   },
// //   {
// //     name: 'Mohammed Khan',
// //     role: 'Founder, Linea Commerce',
// //     company: 'E‑commerce',
// //     quote: 'From discovery to launch, everything felt carefully considered. We saw a real impact on conversion and support load within weeks.',
// //     rating: 5,
// //     initials: 'MK',
// //   },
// //   {
// //     name: 'Emily Carter',
// //     role: 'Head of Product, Signal Analytics',
// //     company: 'Data & analytics',
// //     quote: 'The combination of UX, visual design, and performance tuning made our internal tools feel like a premium product. Teams actually enjoy using them now.',
// //     rating: 5,
// //     initials: 'EC',
// //   },
// //   {
// //     name: 'James Liu',
// //     role: 'CTO, Flow Logistics',
// //     company: 'Logistics',
// //     quote: 'Accurate Software Integrators understood our integration constraints from day one. The result is a single dashboard that our ops team relies on daily.',
// //     rating: 5,
// //     initials: 'JL',
// //   },
// //   {
// //     name: 'Priya Desai',
// //     role: 'Director of Operations, Northline',
// //     company: 'Professional services',
// //     quote: 'We went from spreadsheets and email chains to a clear, auditable system. Implementation was smooth and the handover documentation was excellent.',
// //     rating: 5,
// //     initials: 'PD',
// //   },
// // ];

// // function StarRating({ rating }: { rating: number }) {
// //   return (
// //     <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
// //       {[1, 2, 3, 4, 5].map((star) => (
// //         <span
// //           key={star}
// //           className={star <= rating ? 'text-amber-400' : 'text-slate-300'}
// //           aria-hidden
// //         >
// //           <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20">
// //             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// //           </svg>
// //         </span>
// //       ))}
// //     </div>
// //   );
// // }

// // const stats = [
// //   { label: 'Years in delivery', value: '10+' },
// //   { label: 'Projects shipped', value: '120+' },
// //   { label: 'Client retention', value: '95%' },
// //   { label: 'Countries served', value: '15+' },
// // ];

// // const services = [
// //   {
// //     title: 'Custom Web Applications',
// //     description:
// //       'From internal tools to client‑facing portals, we design and build browser‑based applications aligned to your workflows, data models, and compliance needs.',
// //     badge: 'Core',
// //   },
// //   {
// //     title: 'Systems Integration',
// //     description:
// //       'We connect CRMs, ERPs, billing, support, and custom systems via robust APIs and event pipelines so your business runs on a single, accurate picture of reality.',
// //     badge: 'Integration',
// //   },
// //   {
// //     title: 'Product Modernization',
// //     description:
// //       'We modernize legacy applications with new UX, modular frontends, and cloud‑ready architectures without disrupting ongoing operations.',
// //     badge: 'Modernize',
// //   },
// //   {
// //     title: 'Dedicated Engineering Pods',
// //     description:
// //       'Cross‑functional pods (engineering, UX, QA) that integrate with your team, ship against your roadmap, and stay accountable to your metrics.',
// //     badge: 'Team',
// //   },
// // ];

// // const projects = [
// //   {
// //     title: 'ClearFlow Operations Suite',
// //     category: 'Enterprise web platform',
// //     description:
// //       'A single web console that unifies orders, inventory, and support for a global distributor.',
// //     metrics: '↓ 40% manual processes · ↑ 32% order accuracy',
// //   },
// //   {
// //     title: 'InsightHub Analytics',
// //     category: 'B2B SaaS dashboard',
// //     description:
// //       'Self‑service analytics for non‑technical users with role‑based views and guided workflows.',
// //     metrics: '↑ 3x active users · ↓ 55% custom report requests',
// //   },
// //   {
// //     title: 'ClientConnect Portal',
// //     category: 'Customer portal',
// //     description:
// //       'Secure, branded portal for clients to track projects, documents, and support in one place.',
// //     metrics: '↑ 48% NPS · ↓ 30% inbound status emails',
// //   },
// // ];

// // const faqs = [
// //   {
// //     q: 'What kind of software does Accurate Software Integrators build?',
// //     a: 'We design and build web‑based applications: internal tools, customer portals, dashboards, and custom B2B platforms—always tailored to your processes.',
// //   },
// //   {
// //     q: 'How do projects usually start?',
// //     a: 'We begin with a discovery phase to understand your goals, systems, and constraints. Then we propose a roadmap with milestones, responsibilities, and timelines.',
// //   },
// //   {
// //     q: 'Can you integrate with our existing systems?',
// //     a: 'Yes. A large part of our work is connecting CRMs, ERPs, billing, support tools, and custom databases using APIs and secure integration patterns.',
// //   },
// // ];

// // const teamMembers = [
// //   {
// //     initials: 'AK',
// //     name: 'Arjun Kumar',
// //     role: 'Founder & Principal Architect',
// //     focus:
// //       'Systems design, integration patterns, and aligning engineering decisions with business outcomes.',
// //   },
// //   {
// //     initials: 'SR',
// //     name: 'Sneha Rao',
// //     role: 'Head of Delivery',
// //     focus:
// //       'Project governance, delivery rituals, and keeping cross‑functional teams moving in sync.',
// //   },
// //   {
// //     initials: 'DV',
// //     name: 'Dev Verma',
// //     role: 'Lead Frontend Engineer',
// //     focus:
// //       'High‑quality React frontends, design systems, and performance‑focused implementations.',
// //   },
// //   {
// //     initials: 'MN',
// //     name: 'Meera Nair',
// //     role: 'Product Designer',
// //     focus:
// //       'Flows, UX writing, and interfaces that make complex tools approachable for end‑users.',
// //   },
// // ];

// // const techStack = ['React', 'TypeScript', 'Node.js', '.NET', 'PostgreSQL', 'MongoDB', 'REST & GraphQL APIs', 'Azure', 'AWS'];

// // const fadeInUp = (delay = 0) => ({
// //   initial: { opacity: 0, y: 32 },
// //   whileInView: { opacity: 1, y: 0 },
// //   viewport: { once: true, amount: 0.3 },
// //   transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
// // });

// // function App() {
// //   const [openFaq, setOpenFaq] = useState<number | null>(0);
// //   const [mobileNavOpen, setMobileNavOpen] = useState(false);
// //   const [showPrivacy, setShowPrivacy] = useState(false);
// //   const [showTerms, setShowTerms] = useState(false);

// //   const closeMobileNav = () => setMobileNavOpen(false);
// //   const handleNavClick = (id: string) => {
// //     scrollToId(id);
// //     closeMobileNav();
// //   };

// //   const closeLegal = () => {
// //     setShowPrivacy(false);
// //     setShowTerms(false);
// //   };

// //   if (showPrivacy) {
// //     return (
// //       <HelmetProvider>
// //         <div className="min-h-screen bg-[#f2f5fb] text-slate-900">
// //           <Helmet>
// //             <title>Privacy Policy | Accurate Software Integrators</title>
// //             <meta name="description" content="Privacy Policy for Accurate Software Integrators" />
// //           </Helmet>
// //           <div className="max-w-4xl mx-auto px-6 py-20 md:px-10 xl:px-16">
// //             <button
// //               onClick={closeLegal}
// //               className="mb-8 inline-flex items-center gap-2 text-sm text-sky-600 hover:text-sky-700"
// //             >
// //               ← Back to Home
// //             </button>
// //             <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
// //               <h1 className="text-3xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
// //               <p className="text-slate-500 mb-8">Last updated: April 11, 2026</p>

// //               <div className="space-y-6 text-slate-700">
// //                 <section>
// //                   <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Introduction</h2>
// //                   <p>Accurate Software Integrators ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
// //                 </section>

// //                 <section>
// //                   <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Data We Collect</h2>
// //                   <p>We may collect, use, store and transfer different kinds of personal data about you including:</p>
// //                   <ul className="list-disc pl-6 mt-2 space-y-1">
// //                     <li>Identity Data (name, job title)</li>
// //                     <li>Contact Data (email address, phone number, company name)</li>
// //                     <li>Technical Data (IP address, browser type, device information)</li>
// //                     <li>Usage Data (how you use our website and services)</li>
// //                   </ul>
// //                 </section>

// //                 <section>
// //                   <h2 className="text-xl font-semibold text-slate-900 mb-3">3. How We Collect Your Data</h2>
// //                   <p>We collect data through:</p>
// //                   <ul className="list-disc pl-6 mt-2 space-y-1">
// //                     <li>Contact forms and email communications</li>
// //                     <li>Cookies and similar tracking technologies</li>
// //                     <li>Direct interactions when you inquire about our services</li>
// //                   </ul>
// //                 </section>

// //                 <section>
// //                   <h2 className="text-xl font-semibold text-slate-900 mb-3">4. How We Use Your Data</h2>
// //                   <p>We use your personal data to:</p>
// //                   <ul className="list-disc pl-6 mt-2 space-y-1">
// //                     <li>Respond to your inquiries and provide requested information</li>
// //                     <li>Improve our website, services, and customer experience</li>
// //                     <li>Comply with legal obligations</li>
// //                   </ul>
// //                 </section>

// //                 <section>
// //                   <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Data Security</h2>
// //                   <p>We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, accessed, altered, or disclosed. We limit access to your personal data to employees and partners who have a business need to access it.</p>
// //                 </section>

// //                 <section>
// //                   <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Your Legal Rights</h2>
// //                   <p>Under certain circumstances, you have rights under data protection laws including the right to access, correct, erase, restrict, or object to processing of your personal data. You also have the right to data portability.</p>
// //                 </section>

// //                 <section>
// //                   <h2 className="text-xl font-semibold text-slate-900 mb-3">7. Contact Us</h2>
// //                   <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
// //                   <p className="mt-2">Email: privacy@accuratesoftwareintegrators.com</p>
// //                 </section>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </HelmetProvider>
// //     );
// //   }

// //   if (showTerms) {
// //     return (
// //       <HelmetProvider>
// //         <div className="min-h-screen bg-[#f2f5fb] text-slate-900">
// //           <Helmet>
// //             <title>Terms & Conditions | Accurate Software Integrators</title>
// //             <meta name="description" content="Terms and Conditions for Accurate Software Integrators" />
// //           </Helmet>
// //           <div className="max-w-4xl mx-auto px-6 py-20 md:px-10 xl:px-16">
// //             <button
// //               onClick={closeLegal}
// //               className="mb-8 inline-flex items-center gap-2 text-sm text-sky-600 hover:text-sky-700"
// //             >
// //               ← Back to Home
// //             </button>
// //             <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
// //               <h1 className="text-3xl font-bold text-slate-900 mb-6">Terms & Conditions</h1>
// //               <p className="text-slate-500 mb-8">Last updated: April 11, 2026</p>

// //               <div className="space-y-6 text-slate-700">
// //                 <section>
// //                   <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Agreement to Terms</h2>
// //                   <p>By accessing or using our website and services, you agree to be bound by these Terms & Conditions. If you disagree with any part of these terms, you may not access our services.</p>
// //                 </section>

// //                 <section>
// //                   <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Intellectual Property</h2>
// //                   <p>The content, design, logos, and all intellectual property on this website are owned by Accurate Software Integrators unless otherwise stated. You may not reproduce, distribute, or create derivative works without our explicit written consent.</p>
// //                 </section>

// //                 <section>
// //                   <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Services & Engagement</h2>
// //                   <p>We provide software development and integration services. Specific terms for each engagement will be outlined in a separate Statement of Work (SOW) or Master Services Agreement (MSA). These general terms apply to website use and initial inquiries.</p>
// //                 </section>

// //                 <section>
// //                   <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Client Responsibilities</h2>
// //                   <p>Clients agree to provide timely access to necessary information, personnel, and systems required for project delivery. Delays caused by client inaction may affect project timelines.</p>
// //                 </section>

// //                 <section>
// //                   <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Payment Terms</h2>
// //                   <p>Payment terms for services will be specified in project-specific agreements. Generally, we require deposits before commencing work and invoices are payable within the agreed timeframe.</p>
// //                 </section>

// //                 <section>
// //                   <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Limitation of Liability</h2>
// //                   <p>To the maximum extent permitted by law, Accurate Software Integrators shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or website.</p>
// //                 </section>

// //                 <section>
// //                   <h2 className="text-xl font-semibold text-slate-900 mb-3">7. Governing Law</h2>
// //                   <p>These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
// //                 </section>

// //                 <section>
// //                   <h2 className="text-xl font-semibold text-slate-900 mb-3">8. Changes to Terms</h2>
// //                   <p>We reserve the right to modify these terms at any time. Changes become effective immediately upon posting. Your continued use of the website constitutes acceptance of modified terms.</p>
// //                 </section>

// //                 <section>
// //                   <h2 className="text-xl font-semibold text-slate-900 mb-3">9. Contact Information</h2>
// //                   <p>For questions about these Terms & Conditions, please contact us at:</p>
// //                   <p className="mt-2">Email: legal@accuratesoftwareintegrators.com</p>
// //                 </section>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </HelmetProvider>
// //     );
// //   }

// //   return (
// //     <HelmetProvider>
// //       <div className="min-h-screen bg-[#f2f5fb] text-slate-900">
// //         <Helmet>
// //           <title>Accurate Software Integrators – Web Applications & Integrations</title>
// //           <meta
// //             name="description"
// //             content="Accurate Software Integrators builds modern web‑based applications and system integrations for manufacturing, production, hospital, and trading businesses, with 20+ years of experience."
// //           />
// //           <meta property="og:title" content="Accurate Software Integrators" />
// //           <meta
// //             property="og:description"
// //             content="Advanced web applications and integrations for manufacturing, production, hospital, and trading businesses."
// //           />
// //           <meta property="og:type" content="website" />
// //         </Helmet>

// //         {/* background shapes */}
// //         <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
// //           <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl" />
// //           <div className="absolute right-[-50px] top-40 h-80 w-80 rounded-full bg-indigo-200/50 blur-3xl" />
// //           <div className="absolute bottom-[-60px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-slate-200/50 blur-3xl" />
// //         </div>

// //         {/* NAVBAR */}
// //         <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#f2f5fb]/80 backdrop-blur-xl">
// //           <div className="flex w-full items-center justify-between px-6 py-4 md:px-10 xl:px-16">
// //             <button
// //               onClick={() => scrollToId('hero')}
// //               className="flex items-center gap-3"
// //             >
// //               <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-600 text-[11px] font-semibold text-white shadow-sm">
// //                 AS
// //               </div>
// //               <div className="leading-tight text-left">
// //                 <p className="text-sm font-semibold tracking-wide text-slate-900">
// //                   Accurate Software <span className="text-sky-600">Integrators</span>
// //                 </p>
// //                 <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
// //                   Web Applications & Integrations
// //                 </p>
// //               </div>
// //             </button>

// //             {/* Desktop nav */}
// //             <nav className="hidden items-center gap-7 text-xs font-medium text-slate-600 lg:flex">
// //               {navItems.map((item) => (
// //                 <button
// //                   key={item.id}
// //                   onClick={() => scrollToId(item.id)}
// //                   className="relative transition-colors hover:text-slate-900"
// //                 >
// //                   {item.label}
// //                 </button>
// //               ))}
// //               <button
// //                 onClick={() => scrollToId('contact')}
// //                 className="rounded-full bg-sky-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-md transition hover:-translate-y-0.5 hover:bg-sky-700"
// //               >
// //                 Talk to us
// //               </button>
// //             </nav>

// //             {/* Mobile menu button */}
// //             <button
// //               type="button"
// //               onClick={() => setMobileNavOpen(true)}
// //               className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 bg-white/80 text-slate-700 shadow-sm hover:bg-white"
// //               aria-label="Open menu"
// //             >
// //               <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
// //               </svg>
// //             </button>
// //           </div>
// //         </header>

// //         {/* Mobile overlay menu */}
// //         {mobileNavOpen && (
// //           <div
// //             className="fixed inset-0 z-50 lg:hidden"
// //             role="dialog"
// //             aria-modal="true"
// //             aria-label="Navigation menu"
// //           >
// //             <div
// //               className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
// //               onClick={closeMobileNav}
// //               aria-hidden
// //             />
// //             <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl">
// //               <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
// //                 <span className="text-sm font-semibold text-slate-900">Menu</span>
// //                 <button
// //                   type="button"
// //                   onClick={closeMobileNav}
// //                   className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
// //                   aria-label="Close menu"
// //                 >
// //                   <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //                   </svg>
// //                 </button>
// //               </div>
// //               <nav className="flex flex-col gap-1 p-4">
// //                 {navItems.map((item) => (
// //                   <button
// //                     key={item.id}
// //                     onClick={() => handleNavClick(item.id)}
// //                     className="w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-slate-100"
// //                   >
// //                     {item.label}
// //                   </button>
// //                 ))}
// //                 <button
// //                   onClick={() => handleNavClick('contact')}
// //                   className="mt-2 w-full rounded-full bg-sky-600 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-md hover:bg-sky-700"
// //                 >
// //                   Talk to us
// //                 </button>
// //               </nav>
// //             </div>
// //           </div>
// //         )}

// //         <main className="w-full">
// //           {/* HERO - with brochure content integrated */}
// //           <section
// //             id="hero"
// //             className="w-full min-h-[95vh] bg-gradient-to-b from-[#f2f5fb] via-white to-[#eef2fb] px-6 pt-10 pb-16 md:px-10 md:pt-16 xl:px-16"
// //           >
// //             <div className="grid w-full gap-10 md:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)] md:items-center">
// //               <div className="space-y-6">
// //                 <motion.p
// //                   initial={{ opacity: 0, y: 10 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ duration: 0.4 }}
// //                   className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[11px] text-slate-700 shadow-sm"
// //                 >
// //                   <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
// //                   20+ years of experience · Manufacturing · Production · Hospital · Trading
// //                 </motion.p>

// //                 <motion.h1
// //                   initial={{ opacity: 0, y: 18 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
// //                   className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl"
// //                 >
// //                   Trusted web applications
// //                   <span className="block text-sky-600">for industry leaders.</span>
// //                 </motion.h1>

// //                 <motion.p
// //                   initial={{ opacity: 0, y: 20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ duration: 0.6, delay: 0.1 }}
// //                   className="max-w-2xl text-sm text-slate-700 sm:text-base"
// //                 >
// //                   With over 20 years of experience, we deliver powerful customized web applications
// //                   for manufacturing, production, hospital, and trading businesses. Our solutions
// //                   improve efficiency, streamline operations, and support business growth.
// //                 </motion.p>

// //                 <motion.div
// //                   initial={{ opacity: 0, y: 22 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ duration: 0.6, delay: 0.15 }}
// //                   className="flex flex-wrap items-center gap-3"
// //                 >
// //                   <button
// //                     onClick={() => scrollToId('projects')}
// //                     className="group flex items-center gap-2 rounded-full bg-sky-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-sky-700"
// //                   >
// //                     View project examples
// //                     <span className="text-[10px] transition-transform group-hover:translate-x-1">
// //                       ↗
// //                     </span>
// //                   </button>
// //                   <button
// //                     onClick={() => scrollToId('contact')}
// //                     className="flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-xs font-medium text-slate-800 shadow-sm transition hover:bg-white"
// //                   >
// //                     Book a discovery call
// //                   </button>
// //                 </motion.div>

// //                 <motion.div
// //                   initial={{ opacity: 0, y: 24 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ duration: 0.6, delay: 0.2 }}
// //                   className="grid gap-4 pt-4 text-xs text-slate-700 sm:grid-cols-4"
// //                 >
// //                   <div className="space-y-1">
// //                     <p className="text-xl font-semibold text-slate-900">20+</p>
// //                     <p>Years of experience</p>
// //                   </div>
// //                   <div className="space-y-1">
// //                     <p className="text-xl font-semibold text-slate-900">20+</p>
// //                     <p>Satisfied customers</p>
// //                   </div>
// //                   <div className="space-y-1">
// //                     <p className="text-xl font-semibold text-slate-900">4</p>
// //                     <p>Industry sectors</p>
// //                   </div>
// //                   <div className="space-y-1">
// //                     <p className="text-xl font-semibold text-slate-900">24/7</p>
// //                     <p>Reliability & support</p>
// //                   </div>
// //                 </motion.div>
// //               </div>

// //               {/* HERO RIGHT CARDS */}
// //               <motion.div
// //                 initial={{ opacity: 0, y: 32, scale: 0.96 }}
// //                 animate={{ opacity: 1, y: 0, scale: 1 }}
// //                 transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
// //                 className="flex w-full flex-col gap-4"
// //               >
// //                 <motion.div
// //                   whileHover={{ y: -8 }}
// //                   className="rounded-3xl bg-gradient-to-br from-sky-600 to-sky-400 p-5 text-white shadow-[0_24px_60px_rgba(15,23,42,0.4)]"
// //                 >
// //                   <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-100/80">
// //                     Manufacturing & Production
// //                   </p>
// //                   <h3 className="mt-3 text-sm font-semibold">
// //                     Raw materials · Production tracking · Stock control · Finished goods
// //                   </h3>
// //                   <p className="mt-2 text-[11px] text-sky-100/90">
// //                     Complete visibility across the production lifecycle.
// //                   </p>
// //                 </motion.div>

// //                 <motion.div
// //                   whileHover={{ y: -8 }}
// //                   className="rounded-3xl bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.2)]"
// //                 >
// //                   <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
// //                     Hospital Applications
// //                   </p>
// //                   <h3 className="mt-3 text-sm font-semibold text-slate-900">
// //                     Patient management · Administration · Daily workflow operations
// //                   </h3>
// //                   <p className="mt-2 text-[11px] text-slate-700">
// //                     Built to improve accuracy, organization, and workflow efficiency.
// //                   </p>
// //                 </motion.div>

// //                 <motion.div
// //                   whileHover={{ y: -8 }}
// //                   className="rounded-3xl bg-gradient-to-b from-indigo-100 via-white to-sky-50 p-5 text-slate-900 shadow-[0_20px_50px_rgba(15,23,42,0.16)]"
// //                 >
// //                   <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
// //                     Trading Applications
// //                   </p>
// //                   <h3 className="mt-3 text-sm font-semibold">
// //                     Product listings · Pricing · Orders · Stock · Customer management
// //                   </h3>
// //                   <p className="mt-2 text-[11px] text-slate-700">
// //                     One platform to handle all business transactions.
// //                   </p>
// //                 </motion.div>
// //               </motion.div>
// //             </div>
// //           </section>

// //           {/* ABOUT - with brochure expertise statement */}
// //           <section
// //             id="about"
// //             className="w-full min-h-[85vh] bg-white px-6 py-20 md:px-10 xl:px-16"
// //           >
// //             <div className="grid gap-10 lg:grid-cols-[minmax(0,0.5fr),minmax(0,1.5fr)] lg:items-start">
// //               <motion.div
// //                 {...fadeInUp(0)}
// //                 className="flex flex-col gap-6 border-l-2 border-sky-500/60 pl-4"
// //               >
// //                 <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
// //                   About us
// //                 </p>
// //                 <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl md:text-3xl">
// //                   We create business applications
// //                   <span className="block text-sky-600">
// //                     tailored to real-world industry needs.
// //                   </span>
// //                 </h2>
// //                 <p className="text-sm text-slate-700 sm:text-base">
// //                   With over 20 years of experience, we deliver powerful and customized web applications
// //                   that help organizations work smarter. Our practical digital solutions fit each client's
// //                   process and business model.
// //                 </p>
// //               </motion.div>

// //               <motion.div
// //                 {...fadeInUp(0.05)}
// //                 className="space-y-4"
// //               >
// //                 <div className="grid gap-4 md:grid-cols-2">
// //                   <div className="rounded-3xl border border-slate-200 bg-[#f7f9ff] p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
// //                     <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
// //                       Who we are
// //                     </p>
// //                     <p className="mt-3 text-sm text-slate-800">
// //                       A trusted software development company with a senior-leaning team of architects,
// //                       engineers and designers who enjoy solving complex operations problems with clean,
// //                       maintainable web applications.
// //                     </p>
// //                   </div>
// //                   <div className="rounded-3xl border border-slate-200 bg-[#f7f9ff] p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
// //                     <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
// //                       Our expertise
// //                     </p>
// //                     <p className="mt-3 text-sm text-slate-800">
// //                       Manufacturing web applications. Production management systems. Hospital
// //                       management applications. Trading and sales applications. Custom business
// //                       software development.
// //                     </p>
// //                   </div>
// //                 </div>

// //                 <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
// //                   <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
// //                     Why choose us
// //                   </p>
// //                   <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-slate-800">
// //                     <div>✓ 20+ years of experience</div>
// //                     <div>✓ Many happy customers</div>
// //                     <div>✓ Industry-specific solutions</div>
// //                     <div>✓ Custom-built and scalable applications</div>
// //                     <div>✓ Focus on quality, reliability, and support</div>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             </div>
// //           </section>

// //           {/* SERVICES - enhanced with brochure offerings */}
// //           <section
// //             id="services"
// //             className="w-full min-h-[85vh] bg-white px-6 py-20 md:px-10 xl:px-16"
// //           >
// //             <motion.div {...fadeInUp(0)} className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
// //               <div>
// //                 <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
// //                   Services
// //                 </p>
// //                 <h2 className="mt-1 text-xl font-semibold text-slate-900 sm:text-2xl md:text-3xl">
// //                   Industry-specific web applications tailored to your business.
// //                 </h2>
// //                 <p className="mt-2 max-w-3xl text-sm text-slate-700 sm:text-base">
// //                   We specialize in creating business applications for manufacturing, production,
// //                   hospital, and trading businesses — solutions that manage operations in a structured way.
// //                 </p>
// //               </div>
// //             </motion.div>

// //             <div className="mt-8 grid gap-6 lg:grid-cols-2">
// //               <motion.div {...fadeInUp(0.06)} className="space-y-5">
// //                 <div className="relative min-h-[200px] overflow-hidden rounded-3xl border border-slate-200 bg-[#f7f9ff] p-6">
// //                   <span className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-[11px] font-medium text-sky-700">
// //                     Manufacturing & Production
// //                   </span>
// //                   <h3 className="mt-3 text-sm font-semibold text-slate-900">
// //                     Production Management Systems
// //                   </h3>
// //                   <p className="mt-2 text-xs text-slate-700 sm:text-sm">
// //                     Track raw materials, monitor production stages, manage inventory, and control
// //                     finished goods. Complete visibility across the production lifecycle.
// //                   </p>
// //                 </div>

// //                 <div className="relative min-h-[200px] overflow-hidden rounded-3xl border border-slate-200 bg-white p-6">
// //                   <span className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-[11px] font-medium text-sky-700">
// //                     Healthcare
// //                   </span>
// //                   <h3 className="mt-3 text-sm font-semibold text-slate-900">
// //                     Hospital Management Applications
// //                   </h3>
// //                   <p className="mt-2 text-xs text-slate-700 sm:text-sm">
// //                     Support patient records, staff coordination, administration, and day-to-day
// //                     operations. Built to improve accuracy, organization, and workflow efficiency.
// //                   </p>
// //                 </div>
// //               </motion.div>

// //               <motion.div {...fadeInUp(0.08)} className="space-y-5">
// //                 <div className="relative min-h-[200px] overflow-hidden rounded-3xl border border-slate-200 bg-[#f2f5fb] p-6">
// //                   <span className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-[11px] font-medium text-sky-700">
// //                     Trading & Commerce
// //                   </span>
// //                   <h3 className="mt-3 text-sm font-semibold text-slate-900">
// //                     Trading and Sales Applications
// //                   </h3>
// //                   <p className="mt-2 text-xs text-slate-700 sm:text-sm">
// //                     Handle product listings, pricing, orders, stock, and customer management in
// //                     one place. Ideal for companies that sell products and manage business transactions.
// //                   </p>
// //                 </div>

// //                 <div className="relative min-h-[200px] overflow-hidden rounded-3xl border border-slate-200 bg-white p-6">
// //                   <span className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-[11px] font-medium text-sky-700">
// //                     Custom Development
// //                   </span>
// //                   <h3 className="mt-3 text-sm font-semibold text-slate-900">
// //                     Custom Business Software
// //                   </h3>
// //                   <p className="mt-2 text-xs text-slate-700 sm:text-sm">
// //                     Reliable, scalable, and user-friendly web applications that help organizations
// //                     work smarter. Practical digital solutions that fit your process and business model.
// //                   </p>
// //                 </div>
// //               </motion.div>
// //             </div>
// //           </section>

// //           {/* PROCESS */}
// //           <section
// //             id="process"
// //             className="w-full min-h-[85vh] bg-[#f2f5fb] px-6 py-20 md:px-10 xl:px-16"
// //           >
// //             <motion.h2
// //               {...fadeInUp(0)}
// //               className="text-lg font-semibold text-slate-900 sm:text-xl"
// //             >
// //               A delivery process built for complex systems
// //             </motion.h2>
// //             <motion.p
// //               {...fadeInUp(0.05)}
// //               className="mt-2 max-w-3xl text-sm text-slate-700 sm:text-base"
// //             >
// //               We keep projects predictable with a structured delivery process. Each phase
// //               has a clear outcome, set of artifacts, and people involved.
// //             </motion.p>

// //             <motion.div
// //               {...fadeInUp(0.08)}
// //               className="mt-10 grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:grid-cols-4"
// //             >
// //               {['Discover', 'Design', 'Build', 'Launch & evolve'].map((step, i) => (
// //                 <div key={step} className="flex flex-col min-h-[220px]">
// //                   <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
// //                     <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f2f5fb] text-[11px] text-sky-700">
// //                       {i + 1}
// //                     </span>
// //                     {step}
// //                   </div>
// //                   <p className="mt-3 text-xs text-slate-700 sm:text-sm flex-1">
// //                     {i === 0 &&
// //                       'Workshops, system walkthroughs, and documentation review to understand how things work today, pain points, and what success looks like.'}
// //                     {i === 1 &&
// //                       'User flows, information architecture, and interaction patterns designed around your roles, permissions and data structures.'}
// //                     {i === 2 &&
// //                       'Incremental implementation with weekly demos, automated testing, observability hooks, and early integration with your environments.'}
// //                     {i === 3 &&
// //                       'Launch planning, training, runbooks and optional dedicated pods for continuous improvements and new integrations.'}
// //                   </p>
// //                   <div className="mt-3 h-1 rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-400" />
// //                 </div>
// //               ))}
// //             </motion.div>
// //           </section>

// //           {/* PROJECTS */}
// //           <section
// //             id="projects"
// //             className="w-full min-h-[90vh] bg-[#eef2fb] px-6 py-20 md:px-10 xl:px-16"
// //           >
// //             <motion.div {...fadeInUp(0)} className="mb-6">
// //               <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
// //                 Comprehensive project examples
// //               </h2>
// //               <p className="mt-2 max-w-3xl text-sm text-slate-700 sm:text-base">
// //                 Here are a few ways we've used web applications and integrations to
// //                 streamline operations, unlock insights, and improve customer experience.
// //               </p>
// //             </motion.div>

// //             <Swiper
// //               modules={[Pagination, Autoplay]}
// //               spaceBetween={32}
// //               slidesPerView={1.05}
// //               centeredSlides
// //               pagination={{ clickable: true }}
// //               autoplay={{ delay: 6000, disableOnInteraction: false }}
// //               breakpoints={{
// //                 1024: { slidesPerView: 1.3, centeredSlides: true },
// //               }}
// //               className="!pb-12"
// //             >
// //               {projects.map((p) => (
// //                 <SwiperSlide key={p.title}>
// //                   <motion.div
// //                     initial={{ opacity: 0, y: 40, scale: 0.96 }}
// //                     whileInView={{ opacity: 1, y: 0, scale: 1 }}
// //                     viewport={{ once: true, amount: 0.4 }}
// //                     transition={{
// //                       duration: 0.7,
// //                       delay: 0.05,
// //                       ease: [0.16, 1, 0.3, 1],
// //                     }}
// //                     className="relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_28px_80px_rgba(15,23,42,0.15)]"
// //                   >
// //                     <div className="relative h-64 w-full bg-gradient-to-r from-sky-600 via-indigo-600 to-sky-500">
// //                       <div className="absolute inset-4 rounded-2xl bg-[#f2f5fb] shadow-[0_24px_60px_rgba(0,0,0,0.35)]" />
// //                       <div className="absolute left-7 top-7 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] text-sky-100">
// //                         Web app + Integrations
// //                       </div>
// //                       <div className="absolute right-7 bottom-7 flex gap-2 text-[10px] text-sky-100/90">
// //                         <span className="rounded-full bg-slate-900/70 px-2 py-1">
// //                           React
// //                         </span>
// //                         <span className="rounded-full bg-slate-900/70 px-2 py-1">
// //                           Tailwind
// //                         </span>
// //                         <span className="rounded-full bg-slate-900/70 px-2 py-1">
// //                           APIs
// //                         </span>
// //                       </div>
// //                     </div>

// //                     <div className="grid gap-6 p-6 md:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)] md:items-center">
// //                       <div>
// //                         <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500">
// //                           {p.category}
// //                         </p>
// //                         <h3 className="mt-3 text-lg font-semibold text-slate-900 sm:text-xl">
// //                           {p.title}
// //                         </h3>
// //                         <p className="mt-2 text-sm text-slate-700 sm:text-base">
// //                           {p.description}
// //                         </p>
// //                         <p className="mt-3 text-xs text-sky-700">{p.metrics}</p>
// //                       </div>
// //                       <div className="space-y-3 text-xs text-slate-700">
// //                         <div className="rounded-2xl border border-slate-200 bg-[#f7f9ff] p-3">
// //                           <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
// //                             What we delivered
// //                           </p>
// //                           <ul className="mt-2 space-y-1">
// //                             <li>• UX design and responsive UI</li>
// //                             <li>• Core web application build</li>
// //                             <li>• API integrations & monitoring</li>
// //                           </ul>
// //                         </div>
// //                         <div className="rounded-2xl border border-slate-200 bg-white p-3">
// //                           <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
// //                             Outcome
// //                           </p>
// //                           <p className="mt-1">
// //                             Reliable data, fewer manual steps, and clearer visibility
// //                             for both leadership and on-the-ground teams.
// //                           </p>
// //                         </div>
// //                       </div>
// //                     </div>

// //                     <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-sky-600 via-indigo-600 to-sky-500" />
// //                   </motion.div>
// //                 </SwiperSlide>
// //               ))}
// //             </Swiper>
// //           </section>

// //           {/* TEAM */}
// //           <section
// //             id="team"
// //             className="w-full min-h-[85vh] bg-white px-6 py-20 md:px-10 xl:px-16"
// //           >
// //             <motion.h2
// //               {...fadeInUp(0)}
// //               className="text-lg font-semibold text-slate-900 sm:text-xl"
// //             >
// //               Team behind Accurate Software Integrators
// //             </motion.h2>
// //             <motion.p
// //               {...fadeInUp(0.05)}
// //               className="mt-2 max-w-3xl text-sm text-slate-700 sm:text-base"
// //             >
// //               We're a focused team of architects, engineers, and designers who enjoy
// //               turning complex system diagrams into clean, maintainable web applications.
// //             </motion.p>

// //             <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.2fr),minmax(0,0.9fr)] lg:items-start">
// //               <motion.div
// //                 {...fadeInUp(0.08)}
// //                 className="grid gap-5 md:grid-cols-2"
// //               >
// //                 {teamMembers.map((m) => (
// //                   <div
// //                     key={m.name}
// //                     className="flex flex-col rounded-3xl border border-slate-200 bg-[#f7f9ff] p-5 shadow-[0_16px_45px_rgba(15,23,42,0.08)]"
// //                   >
// //                     <div className="flex items-center gap-3">
// //                       <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 text-sm font-semibold text-white">
// //                         {m.initials}
// //                       </div>
// //                       <div>
// //                         <p className="text-sm font-semibold text-slate-900">
// //                           {m.name}
// //                         </p>
// //                         <p className="text-[11px] text-slate-500">{m.role}</p>
// //                       </div>
// //                     </div>
// //                     <p className="mt-3 text-xs text-slate-700 sm:text-sm">
// //                       {m.focus}
// //                     </p>
// //                   </div>
// //                 ))}
// //               </motion.div>

// //               <motion.div
// //                 {...fadeInUp(0.12)}
// //                 className="space-y-4 rounded-3xl border border-slate-200 bg-[#f2f5fb] p-6 shadow-[0_18px_55px_rgba(15,23,42,0.1)]"
// //               >
// //                 <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
// //                   Our Promise
// //                 </p>
// //                 <p className="text-sm text-slate-800">
// //                   We create software that simplifies work, improves business visibility,
// //                   and supports growth. Every application is designed to match your process,
// //                   your goals, and your industry needs.
// //                 </p>
// //                 <ul className="mt-2 space-y-2 text-xs text-slate-700 sm:text-sm">
// //                   <li>• Role-based access control and audit logs available by design.</li>
// //                   <li>• Environments and release pipelines aligned with your governance.</li>
// //                   <li>• Monitoring hooks to feed into your existing observability stack.</li>
// //                 </ul>
// //               </motion.div>
// //             </div>
// //           </section>

// //           {/* CUSTOMER REVIEWS */}
// //           <section
// //             id="reviews"
// //             className="w-full min-h-[85vh] overflow-x-hidden bg-[#eef2fb] px-6 py-20 md:px-10 xl:px-16"
// //           >
// //             <motion.div {...fadeInUp(0)} className="mb-10">
// //               <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-500">
// //                 Customer reviews
// //               </p>
// //               <h2 className="mt-2 text-xl font-semibold text-slate-900 sm:text-2xl md:text-3xl">
// //                 What our clients say about working with us
// //               </h2>
// //               <p className="mt-3 max-w-2xl text-sm text-slate-700 sm:text-base">
// //                 Teams across SaaS, logistics, and professional services share their
// //                 experience with our delivery, communication, and the impact of the
// //                 software we built together.
// //               </p>
// //             </motion.div>

// //             <div className="w-full overflow-hidden">
// //               <Swiper
// //                 modules={[Pagination, Autoplay]}
// //                 spaceBetween={24}
// //                 slidesPerView={1}
// //                 loop
// //                 pagination={{ clickable: true }}
// //                 autoplay={{ delay: 5000, disableOnInteraction: false }}
// //                 breakpoints={{
// //                   640: { slidesPerView: 1, spaceBetween: 24 },
// //                   1024: { slidesPerView: 2, spaceBetween: 32 },
// //                 }}
// //                 className="!pb-14"
// //               >
// //                 {reviews.map((r) => (
// //                   <SwiperSlide key={r.name}>
// //                     <motion.div
// //                       initial={{ opacity: 0, y: 24 }}
// //                       whileInView={{ opacity: 1, y: 0 }}
// //                       viewport={{ once: true, amount: 0.3 }}
// //                       transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
// //                       className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_55px_rgba(15,23,42,0.1)] transition hover:shadow-[0_24px_60px_rgba(15,23,42,0.14)] md:p-7"
// //                     >
// //                       <div className="flex items-start justify-between gap-3">
// //                         <StarRating rating={r.rating} />
// //                         <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-medium text-emerald-700">
// //                           Verified
// //                         </span>
// //                       </div>
// //                       <blockquote className="mt-4 flex-1 text-sm text-slate-800 sm:text-base">
// //                         &ldquo;{r.quote}&rdquo;
// //                       </blockquote>
// //                       <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
// //                         <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-sky-600 text-sm font-semibold text-white shadow-md">
// //                           {r.initials}
// //                         </div>
// //                         <div className="min-w-0">
// //                           <p className="text-sm font-semibold text-slate-900">
// //                             {r.name}
// //                           </p>
// //                           <p className="text-xs text-slate-500">{r.role}</p>
// //                           <p className="mt-0.5 text-[11px] text-sky-600 font-medium">
// //                             {r.company}
// //                           </p>
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   </SwiperSlide>
// //                 ))}
// //               </Swiper>
// //             </div>
// //           </section>

// //           {/* FAQ + CTA */}
// //           <section className="w-full min-h-[80vh] bg-[#f2f5fb] px-6 py-20 md:px-10 xl:px-16">
// //             <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)] md:items-start">
// //               <motion.div {...fadeInUp(0)}>
// //                 <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
// //                   Get clear answers to your questions
// //                 </h2>
// //                 <p className="mt-2 max-w-xl text-sm text-slate-700 sm:text-base">
// //                   Here are some of the things teams usually ask before we kick off a
// //                   project. If you need something different, we're happy to talk.
// //                 </p>

// //                 <div className="mt-6 space-y-2">
// //                   {faqs.map((item, idx) => {
// //                     const isOpen = openFaq === idx;
// //                     return (
// //                       <motion.div
// //                         key={item.q}
// //                         initial={{ opacity: 0, y: 10 }}
// //                         whileInView={{ opacity: 1, y: 0 }}
// //                         viewport={{ once: true, amount: 0.3 }}
// //                         transition={{ duration: 0.4, delay: 0.03 * idx }}
// //                         className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
// //                       >
// //                         <button
// //                           type="button"
// //                           onClick={() => setOpenFaq(isOpen ? null : idx)}
// //                           className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-slate-900"
// //                         >
// //                           <span>{item.q}</span>
// //                           <span className="ml-4 text-xl text-slate-400">
// //                             {isOpen ? '−' : '+'}
// //                           </span>
// //                         </button>
// //                         {isOpen && (
// //                           <div className="border-t border-slate-200 px-4 py-3 text-xs text-slate-700 sm:text-sm">
// //                             {item.a}
// //                           </div>
// //                         )}
// //                       </motion.div>
// //                     );
// //                   })}
// //                 </div>
// //               </motion.div>

// //               <motion.div
// //                 {...fadeInUp(0.08)}
// //                 className="flex h-full flex-col justify-between rounded-3xl bg-gradient-to-br from-sky-600 via-sky-500 to-indigo-600 p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.6)]"
// //               >
// //                 <div>
// //                   <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-100/80">
// //                     Modern software, human partnership
// //                   </p>
// //                   <h3 className="mt-3 text-xl font-semibold sm:text-2xl">
// //                     Your next web application can be clearer, faster, and better connected.
// //                   </h3>
// //                   <p className="mt-3 text-sm text-sky-100">
// //                     We combine engineering depth with a calm, structured approach so that
// //                     complex projects feel understandable at every step.
// //                   </p>
// //                 </div>
// //                 <div className="mt-6 flex flex-wrap items-center gap-3">
// //                   <button
// //                     onClick={() => scrollToId('contact')}
// //                     className="rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 shadow-md transition hover:bg-sky-50"
// //                   >
// //                     Start your project
// //                   </button>
// //                   <p className="text-[11px] text-sky-100/90">
// //                     Typical kickoff in 2–4 weeks after agreement.
// //                   </p>
// //                 </div>
// //               </motion.div>
// //             </div>
// //           </section>

// //           {/* CONTACT */}
// //           <section
// //             id="contact"
// //             className="w-full min-h-[90vh] bg-white px-6 py-20 md:px-10 xl:px-16"
// //           >
// //             <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr),minmax(0,1fr)] md:items-center">
// //               <motion.div {...fadeInUp(0)}>
// //                 <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
// //                   Contact Accurate Software Integrators
// //                 </p>
// //                 <h2 className="mt-3 text-xl font-semibold text-slate-900 sm:text-2xl md:text-3xl">
// //                   Let's talk about your web‑based application or integration roadmap.
// //                 </h2>
// //                 <p className="mt-2 max-w-xl text-sm text-slate-700 sm:text-base">
// //                   Share a short overview of your company, systems, and what you're
// //                   hoping to achieve. We'll follow up with a perspective, rough timeline,
// //                   and next steps.
// //                 </p>
// //                 <ul className="mt-4 space-y-1 text-xs text-slate-600">
// //                   <li>• Projects typically range from 6–16 weeks.</li>
// //                   <li>• We collaborate closely with your product and IT stakeholders.</li>
// //                 </ul>
// //               </motion.div>

// //               <motion.form
// //                 {...fadeInUp(0.05)}
// //                 className="space-y-3 text-sm"
// //                 onSubmit={(e) => e.preventDefault()}
// //               >
// //                 <div className="grid gap-3 sm:grid-cols-2">
// //                   <div>
// //                     <label className="mb-1 block text-xs font-medium text-slate-800">
// //                       Name
// //                     </label>
// //                     <input
// //                       type="text"
// //                       className="w-full rounded-xl border border-slate-300 bg-[#f2f5fb] px-3 py-2 text-sm text-slate-900 outline-none ring-sky-600/0 transition focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20"
// //                       placeholder="Your name"
// //                     />
// //                   </div>
// //                   <div>
// //                     <label className="mb-1 block text-xs font-medium text-slate-800">
// //                       Email
// //                     </label>
// //                     <input
// //                       type="email"
// //                       className="w-full rounded-xl border border-slate-300 bg-[#f2f5fb] px-3 py-2 text-sm text-slate-900 outline-none ring-sky-600/0 transition focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20"
// //                       placeholder="you@company.com"
// //                     />
// //                   </div>
// //                 </div>
// //                 <div>
// //                   <label className="mb-1 block text-xs font-medium text-slate-800">
// //                     Company
// //                   </label>
// //                   <input
// //                     type="text"
// //                     className="w-full rounded-xl border border-slate-300 bg-[#f2f5fb] px-3 py-2 text-sm text-slate-900 outline-none ring-sky-600/0 transition focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20"
// //                     placeholder="Company name"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label className="mb-1 block text-xs font-medium text-slate-800">
// //                     What are you looking to build?
// //                   </label>
// //                   <textarea
// //                     rows={4}
// //                     className="w-full rounded-xl border border-slate-300 bg-[#f2f5fb] px-3 py-2 text-sm text-slate-900 outline-none ring-sky-600/0 transition focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20"
// //                     placeholder="Tell us about your application, existing systems, timelines, and success metrics."
// //                   />
// //                 </div>
// //                 <button
// //                   type="submit"
// //                   className="mt-2 inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-md transition hover:bg-sky-700"
// //                 >
// //                   Send message
// //                 </button>
// //               </motion.form>
// //             </div>
// //           </section>
// //         </main>

// //         {/* FOOTER with legal links */}
// //         <footer className="w-full bg-slate-900 text-slate-200">
// //           <div className="w-full px-6 py-10 md:px-10 xl:px-16">
// //             <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)] md:items-start">
// //               <div>
// //                 <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
// //                   Accurate Software Integrators
// //                 </p>
// //                 <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
// //                   Accurate
// //                   <br />
// //                   Software Integrators
// //                 </h3>
// //                 <p className="mt-3 max-w-md text-sm text-slate-300">
// //                   Web‑based applications and integrations that help your business run on clear, accurate data.
// //                 </p>
// //               </div>
// //               <div className="grid gap-6 text-xs text-slate-300 sm:grid-cols-3">
// //                 <div>
// //                   <p className="font-semibold text-white">Contact</p>
// //                   <p className="mt-2">info@accuratesoftwareintegrators.com</p>
// //                   <p className="mt-1">+91‑9843820269</p>
// //                   <p className="mt-1">Coimbatore · Remote‑first</p>
// //                 </div>
// //                 <div>
// //                   <p className="font-semibold text-white">Services</p>
// //                   <p className="mt-2">Manufacturing web apps</p>
// //                   <p className="mt-1">Hospital applications</p>
// //                   <p className="mt-1">Trading platforms</p>
// //                   <p className="mt-1">Custom business software</p>
// //                 </div>
// //                 <div>
// //                   <p className="font-semibold text-white">Legal</p>
// //                   <button onClick={() => setShowPrivacy(true)} className="mt-2 block hover:text-white transition-colors">
// //                     Privacy Policy
// //                   </button>
// //                   <button onClick={() => setShowTerms(true)} className="mt-1 block hover:text-white transition-colors">
// //                     Terms & Conditions
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="mt-8 border-t border-slate-800 pt-4 text-[11px] text-slate-500">
// //               <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
// //                 <p>
// //                   © {new Date().getFullYear()} Accurate Software Integrators. All rights reserved.
// //                 </p>
// //                 <p>Built with React, Tailwind CSS, Framer Motion & Swiper.</p>
// //               </div>
// //             </div>
// //           </div>
// //         </footer>
// //       </div>
// //     </HelmetProvider>
// //   );
// // }

// // export default App;


// import React, { useState } from 'react';
// import { Helmet, HelmetProvider } from 'react-helmet-async';
// import { motion } from 'framer-motion';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/pagination';

// const scrollToId = (id: string) => {
//   const el = document.getElementById(id);
//   if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
// };

// const navItems = [
//   { id: 'hero', label: 'Home' },
//   { id: 'about', label: 'About' },
//   { id: 'services', label: 'Services' },
//   { id: 'products', label: 'Products' },
//   { id: 'process', label: 'Process' },
//   { id: 'projects', label: 'Projects' },
//   { id: 'team', label: 'Team' },
//   { id: 'reviews', label: 'Reviews' },
//   { id: 'contact', label: 'Contact' },
// ];

// const reviews = [
//   {
//     name: 'Sara Kim',
//     role: 'VP Marketing, Atlas Labs',
//     company: 'B2B SaaS',
//     quote: 'They helped us tell a very technical story in a way that feels human and polished. The new portal finally matches the quality of our product.',
//     rating: 5,
//     initials: 'SK',
//   },
//   {
//     name: 'Mohammed Khan',
//     role: 'Founder, Linea Commerce',
//     company: 'E‑commerce',
//     quote: 'From discovery to launch, everything felt carefully considered. We saw a real impact on conversion and support load within weeks.',
//     rating: 5,
//     initials: 'MK',
//   },
//   {
//     name: 'Emily Carter',
//     role: 'Head of Product, Signal Analytics',
//     company: 'Data & analytics',
//     quote: 'The combination of UX, visual design, and performance tuning made our internal tools feel like a premium product. Teams actually enjoy using them now.',
//     rating: 5,
//     initials: 'EC',
//   },
//   {
//     name: 'James Liu',
//     role: 'CTO, Flow Logistics',
//     company: 'Logistics',
//     quote: 'Accurate Software Integrators understood our integration constraints from day one. The result is a single dashboard that our ops team relies on daily.',
//     rating: 5,
//     initials: 'JL',
//   },
//   {
//     name: 'Priya Desai',
//     role: 'Director of Operations, Northline',
//     company: 'Professional services',
//     quote: 'We went from spreadsheets and email chains to a clear, auditable system. Implementation was smooth and the handover documentation was excellent.',
//     rating: 5,
//     initials: 'PD',
//   },
// ];

// function StarRating({ rating }: { rating: number }) {
//   return (
//     <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
//       {[1, 2, 3, 4, 5].map((star) => (
//         <span
//           key={star}
//           className={star <= rating ? 'text-amber-400' : 'text-slate-300'}
//           aria-hidden
//         >
//           <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20">
//             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//           </svg>
//         </span>
//       ))}
//     </div>
//   );
// }

// const stats = [
//   { label: 'Years in delivery', value: '10+' },
//   { label: 'Projects shipped', value: '120+' },
//   { label: 'Client retention', value: '95%' },
//   { label: 'Countries served', value: '15+' },
// ];

// const services = [
//   {
//     title: 'Custom Web Applications',
//     description:
//       'From internal tools to client‑facing portals, we design and build browser‑based applications aligned to your workflows, data models, and compliance needs.',
//     badge: 'Core',
//   },
//   {
//     title: 'Systems Integration',
//     description:
//       'We connect CRMs, ERPs, billing, support, and custom systems via robust APIs and event pipelines so your business runs on a single, accurate picture of reality.',
//     badge: 'Integration',
//   },
//   {
//     title: 'Product Modernization',
//     description:
//       'We modernize legacy applications with new UX, modular frontends, and cloud‑ready architectures without disrupting ongoing operations.',
//     badge: 'Modernize',
//   },
//   {
//     title: 'Dedicated Engineering Pods',
//     description:
//       'Cross‑functional pods (engineering, UX, QA) that integrate with your team, ship against your roadmap, and stay accountable to your metrics.',
//     badge: 'Team',
//   },
// ];

// const projects = [
//   {
//     title: 'ClearFlow Operations Suite',
//     category: 'Enterprise web platform',
//     description:
//       'A single web console that unifies orders, inventory, and support for a global distributor.',
//     metrics: '↓ 40% manual processes · ↑ 32% order accuracy',
//   },
//   {
//     title: 'InsightHub Analytics',
//     category: 'B2B SaaS dashboard',
//     description:
//       'Self‑service analytics for non‑technical users with role‑based views and guided workflows.',
//     metrics: '↑ 3x active users · ↓ 55% custom report requests',
//   },
//   {
//     title: 'ClientConnect Portal',
//     category: 'Customer portal',
//     description:
//       'Secure, branded portal for clients to track projects, documents, and support in one place.',
//     metrics: '↑ 48% NPS · ↓ 30% inbound status emails',
//   },
// ];

// const faqs = [
//   {
//     q: 'What kind of software does Accurate Software Integrators build?',
//     a: 'We design and build web‑based applications: internal tools, customer portals, dashboards, and custom B2B platforms—always tailored to your processes.',
//   },
//   {
//     q: 'How do projects usually start?',
//     a: 'We begin with a discovery phase to understand your goals, systems, and constraints. Then we propose a roadmap with milestones, responsibilities, and timelines.',
//   },
//   {
//     q: 'Can you integrate with our existing systems?',
//     a: 'Yes. A large part of our work is connecting CRMs, ERPs, billing, support tools, and custom databases using APIs and secure integration patterns.',
//   },
// ];

// const teamMembers = [
//   {
//     initials: 'AK',
//     name: 'Arjun Kumar',
//     role: 'Founder & Principal Architect',
//     focus:
//       'Systems design, integration patterns, and aligning engineering decisions with business outcomes.',
//   },
//   {
//     initials: 'SR',
//     name: 'Sneha Rao',
//     role: 'Head of Delivery',
//     focus:
//       'Project governance, delivery rituals, and keeping cross‑functional teams moving in sync.',
//   },
//   {
//     initials: 'DV',
//     name: 'Dev Verma',
//     role: 'Lead Frontend Engineer',
//     focus:
//       'High‑quality React frontends, design systems, and performance‑focused implementations.',
//   },
//   {
//     initials: 'MN',
//     name: 'Meera Nair',
//     role: 'Product Designer',
//     focus:
//       'Flows, UX writing, and interfaces that make complex tools approachable for end‑users.',
//   },
// ];

// const techStack = ['React', 'TypeScript', 'Node.js', '.NET', 'PostgreSQL', 'MongoDB', 'REST & GraphQL APIs', 'Azure', 'AWS'];

// const fadeInUp = (delay = 0) => ({
//   initial: { opacity: 0, y: 32 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true, amount: 0.3 },
//   transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
// });

// function App() {
//   const [openFaq, setOpenFaq] = useState<number | null>(0);
//   const [mobileNavOpen, setMobileNavOpen] = useState(false);
//   const [showPrivacy, setShowPrivacy] = useState(false);
//   const [showTerms, setShowTerms] = useState(false);

//   const closeMobileNav = () => setMobileNavOpen(false);
//   const handleNavClick = (id: string) => {
//     scrollToId(id);
//     closeMobileNav();
//   };

//   const closeLegal = () => {
//     setShowPrivacy(false);
//     setShowTerms(false);
//   };

//   if (showPrivacy) {
//     return (
//       <HelmetProvider>
//         <div className="min-h-screen bg-[#f2f5fb] text-slate-900">
//           <Helmet>
//             <title>Privacy Policy | Accurate Software Integrators</title>
//             <meta name="description" content="Privacy Policy for Accurate Software Integrators" />
//           </Helmet>
//           <div className="max-w-4xl mx-auto px-6 py-20 md:px-10 xl:px-16">
//             <button
//               onClick={closeLegal}
//               className="mb-8 inline-flex items-center gap-2 text-sm text-sky-600 hover:text-sky-700"
//             >
//               ← Back to Home
//             </button>
//             <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
//               <h1 className="text-3xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
//               <p className="text-slate-500 mb-8">Last updated: April 11, 2026</p>

//               <div className="space-y-6 text-slate-700">
//                 <section>
//                   <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Introduction</h2>
//                   <p>Accurate Software Integrators ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
//                 </section>

//                 <section>
//                   <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Data We Collect</h2>
//                   <p>We may collect, use, store and transfer different kinds of personal data about you including:</p>
//                   <ul className="list-disc pl-6 mt-2 space-y-1">
//                     <li>Identity Data (name, job title)</li>
//                     <li>Contact Data (email address, phone number, company name)</li>
//                     <li>Technical Data (IP address, browser type, device information)</li>
//                     <li>Usage Data (how you use our website and services)</li>
//                   </ul>
//                 </section>

//                 <section>
//                   <h2 className="text-xl font-semibold text-slate-900 mb-3">3. How We Collect Your Data</h2>
//                   <p>We collect data through:</p>
//                   <ul className="list-disc pl-6 mt-2 space-y-1">
//                     <li>Contact forms and email communications</li>
//                     <li>Cookies and similar tracking technologies</li>
//                     <li>Direct interactions when you inquire about our services</li>
//                   </ul>
//                 </section>

//                 <section>
//                   <h2 className="text-xl font-semibold text-slate-900 mb-3">4. How We Use Your Data</h2>
//                   <p>We use your personal data to:</p>
//                   <ul className="list-disc pl-6 mt-2 space-y-1">
//                     <li>Respond to your inquiries and provide requested information</li>
//                     <li>Improve our website, services, and customer experience</li>
//                     <li>Comply with legal obligations</li>
//                   </ul>
//                 </section>

//                 <section>
//                   <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Data Security</h2>
//                   <p>We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, accessed, altered, or disclosed. We limit access to your personal data to employees and partners who have a business need to access it.</p>
//                 </section>

//                 <section>
//                   <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Your Legal Rights</h2>
//                   <p>Under certain circumstances, you have rights under data protection laws including the right to access, correct, erase, restrict, or object to processing of your personal data. You also have the right to data portability.</p>
//                 </section>

//                 <section>
//                   <h2 className="text-xl font-semibold text-slate-900 mb-3">7. Contact Us</h2>
//                   <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
//                   <p className="mt-2">Email: privacy@accuratesoftwareintegrators.com</p>
//                 </section>
//               </div>
//             </div>
//           </div>
//         </div>
//       </HelmetProvider>
//     );
//   }

//   if (showTerms) {
//     return (
//       <HelmetProvider>
//         <div className="min-h-screen bg-[#f2f5fb] text-slate-900">
//           <Helmet>
//             <title>Terms & Conditions | Accurate Software Integrators</title>
//             <meta name="description" content="Terms and Conditions for Accurate Software Integrators" />
//           </Helmet>
//           <div className="max-w-4xl mx-auto px-6 py-20 md:px-10 xl:px-16">
//             <button
//               onClick={closeLegal}
//               className="mb-8 inline-flex items-center gap-2 text-sm text-sky-600 hover:text-sky-700"
//             >
//               ← Back to Home
//             </button>
//             <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
//               <h1 className="text-3xl font-bold text-slate-900 mb-6">Terms & Conditions</h1>
//               <p className="text-slate-500 mb-8">Last updated: April 11, 2026</p>

//               <div className="space-y-6 text-slate-700">
//                 <section>
//                   <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Agreement to Terms</h2>
//                   <p>By accessing or using our website and services, you agree to be bound by these Terms & Conditions. If you disagree with any part of these terms, you may not access our services.</p>
//                 </section>

//                 <section>
//                   <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Intellectual Property</h2>
//                   <p>The content, design, logos, and all intellectual property on this website are owned by Accurate Software Integrators unless otherwise stated. You may not reproduce, distribute, or create derivative works without our explicit written consent.</p>
//                 </section>

//                 <section>
//                   <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Services & Engagement</h2>
//                   <p>We provide software development and integration services. Specific terms for each engagement will be outlined in a separate Statement of Work (SOW) or Master Services Agreement (MSA). These general terms apply to website use and initial inquiries.</p>
//                 </section>

//                 <section>
//                   <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Client Responsibilities</h2>
//                   <p>Clients agree to provide timely access to necessary information, personnel, and systems required for project delivery. Delays caused by client inaction may affect project timelines.</p>
//                 </section>

//                 <section>
//                   <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Payment Terms</h2>
//                   <p>Payment terms for services will be specified in project-specific agreements. Generally, we require deposits before commencing work and invoices are payable within the agreed timeframe.</p>
//                 </section>

//                 <section>
//                   <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Limitation of Liability</h2>
//                   <p>To the maximum extent permitted by law, Accurate Software Integrators shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or website.</p>
//                 </section>

//                 <section>
//                   <h2 className="text-xl font-semibold text-slate-900 mb-3">7. Governing Law</h2>
//                   <p>These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
//                 </section>

//                 <section>
//                   <h2 className="text-xl font-semibold text-slate-900 mb-3">8. Changes to Terms</h2>
//                   <p>We reserve the right to modify these terms at any time. Changes become effective immediately upon posting. Your continued use of the website constitutes acceptance of modified terms.</p>
//                 </section>

//                 <section>
//                   <h2 className="text-xl font-semibold text-slate-900 mb-3">9. Contact Information</h2>
//                   <p>For questions about these Terms & Conditions, please contact us at:</p>
//                   <p className="mt-2">Email: legal@accuratesoftwareintegrators.com</p>
//                 </section>
//               </div>
//             </div>
//           </div>
//         </div>
//       </HelmetProvider>
//     );
//   }

//   return (
//     <HelmetProvider>
//       <div className="min-h-screen bg-[#f2f5fb] text-slate-900">
//         <Helmet>
//           <title>Accurate Software Integrators – Web Applications & Integrations</title>
//           <meta
//             name="description"
//             content="Accurate Software Integrators builds modern web‑based applications and system integrations for manufacturing, production, hospital, and trading businesses, with 20+ years of experience."
//           />
//           <meta property="og:title" content="Accurate Software Integrators" />
//           <meta
//             property="og:description"
//             content="Advanced web applications and integrations for manufacturing, production, hospital, and trading businesses."
//           />
//           <meta property="og:type" content="website" />
//         </Helmet>

//         {/* background shapes */}
//         <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
//           <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl" />
//           <div className="absolute right-[-50px] top-40 h-80 w-80 rounded-full bg-indigo-200/50 blur-3xl" />
//           <div className="absolute bottom-[-60px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-slate-200/50 blur-3xl" />
//         </div>

//         {/* NAVBAR */}
//         <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#f2f5fb]/80 backdrop-blur-xl">
//           <div className="flex w-full items-center justify-between px-6 py-4 md:px-10 xl:px-16">
//             <button
//               onClick={() => scrollToId('hero')}
//               className="flex items-center gap-3"
//             >
//               <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-600 text-[11px] font-semibold text-white shadow-sm">
//                 AS
//               </div>
//               <div className="leading-tight text-left">
//                 <p className="text-sm font-semibold tracking-wide text-slate-900">
//                   Accurate Software <span className="text-sky-600">Integrators</span>
//                 </p>
//                 <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
//                   Web Applications & Integrations
//                 </p>
//               </div>
//             </button>

//             {/* Desktop nav */}
//             <nav className="hidden items-center gap-7 text-xs font-medium text-slate-600 lg:flex">
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollToId(item.id)}
//                   className="relative transition-colors hover:text-slate-900"
//                 >
//                   {item.label}
//                 </button>
//               ))}
//               <button
//                 onClick={() => scrollToId('contact')}
//                 className="rounded-full bg-sky-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-md transition hover:-translate-y-0.5 hover:bg-sky-700"
//               >
//                 Talk to us
//               </button>
//             </nav>

//             {/* Mobile menu button */}
//             <button
//               type="button"
//               onClick={() => setMobileNavOpen(true)}
//               className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 bg-white/80 text-slate-700 shadow-sm hover:bg-white"
//               aria-label="Open menu"
//             >
//               <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>
//         </header>

//         {/* Mobile overlay menu */}
//         {mobileNavOpen && (
//           <div
//             className="fixed inset-0 z-50 lg:hidden"
//             role="dialog"
//             aria-modal="true"
//             aria-label="Navigation menu"
//           >
//             <div
//               className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
//               onClick={closeMobileNav}
//               aria-hidden
//             />
//             <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl">
//               <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
//                 <span className="text-sm font-semibold text-slate-900">Menu</span>
//                 <button
//                   type="button"
//                   onClick={closeMobileNav}
//                   className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
//                   aria-label="Close menu"
//                 >
//                   <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//               </div>
//               <nav className="flex flex-col gap-1 p-4">
//                 {navItems.map((item) => (
//                   <button
//                     key={item.id}
//                     onClick={() => handleNavClick(item.id)}
//                     className="w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-slate-100"
//                   >
//                     {item.label}
//                   </button>
//                 ))}
//                 <button
//                   onClick={() => handleNavClick('contact')}
//                   className="mt-2 w-full rounded-full bg-sky-600 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-md hover:bg-sky-700"
//                 >
//                   Talk to us
//                 </button>
//               </nav>
//             </div>
//           </div>
//         )}

//         <main className="w-full">
//           {/* HERO - with brochure content integrated */}
//           <section
//             id="hero"
//             className="w-full min-h-[95vh] bg-gradient-to-b from-[#f2f5fb] via-white to-[#eef2fb] px-6 pt-10 pb-16 md:px-10 md:pt-16 xl:px-16"
//           >
//             <div className="grid w-full gap-10 md:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)] md:items-center">
//               <div className="space-y-6">
//                 <motion.p
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4 }}
//                   className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[11px] text-slate-700 shadow-sm"
//                 >
//                   <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
//                   20+ years of experience · Manufacturing · Production · Hospital · Trading
//                 </motion.p>

//                 <motion.h1
//                   initial={{ opacity: 0, y: 18 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//                   className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl"
//                 >
//                   Trusted web applications
//                   <span className="block text-sky-600">for industry leaders.</span>
//                 </motion.h1>

//                 <motion.p
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 0.1 }}
//                   className="max-w-2xl text-sm text-slate-700 sm:text-base"
//                 >
//                   With over 20 years of experience, we deliver powerful customized web applications
//                   for manufacturing, production, hospital, and trading businesses. Our solutions
//                   improve efficiency, streamline operations, and support business growth.
//                 </motion.p>

//                 <motion.div
//                   initial={{ opacity: 0, y: 22 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 0.15 }}
//                   className="flex flex-wrap items-center gap-3"
//                 >
//                   <button
//                     onClick={() => scrollToId('projects')}
//                     className="group flex items-center gap-2 rounded-full bg-sky-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-sky-700"
//                   >
//                     View project examples
//                     <span className="text-[10px] transition-transform group-hover:translate-x-1">
//                       ↗
//                     </span>
//                   </button>
//                   <button
//                     onClick={() => scrollToId('contact')}
//                     className="flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-xs font-medium text-slate-800 shadow-sm transition hover:bg-white"
//                   >
//                     Book a discovery call
//                   </button>
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, y: 24 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 0.2 }}
//                   className="grid gap-4 pt-4 text-xs text-slate-700 sm:grid-cols-4"
//                 >
//                   <div className="space-y-1">
//                     <p className="text-xl font-semibold text-slate-900">20+</p>
//                     <p>Years of experience</p>
//                   </div>
//                   <div className="space-y-1">
//                     <p className="text-xl font-semibold text-slate-900">20+</p>
//                     <p>Satisfied customers</p>
//                   </div>
//                   <div className="space-y-1">
//                     <p className="text-xl font-semibold text-slate-900">4</p>
//                     <p>Industry sectors</p>
//                   </div>
//                   <div className="space-y-1">
//                     <p className="text-xl font-semibold text-slate-900">24/7</p>
//                     <p>Reliability & support</p>
//                   </div>
//                 </motion.div>
//               </div>

//               {/* HERO RIGHT CARDS */}
//               <motion.div
//                 initial={{ opacity: 0, y: 32, scale: 0.96 }}
//                 animate={{ opacity: 1, y: 0, scale: 1 }}
//                 transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
//                 className="flex w-full flex-col gap-4"
//               >
//                 <motion.div
//                   whileHover={{ y: -8 }}
//                   className="rounded-3xl bg-gradient-to-br from-sky-600 to-sky-400 p-5 text-white shadow-[0_24px_60px_rgba(15,23,42,0.4)]"
//                 >
//                   <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-100/80">
//                     Garments & Apparel ERP
//                   </p>
//                   <h3 className="mt-3 text-sm font-semibold">
//                     Style management · Cutting · Sewing · QC · Shipment
//                   </h3>
//                   <p className="mt-2 text-[11px] text-sky-100/90">
//                     Full ERP + MES for garment factories and export houses.
//                   </p>
//                 </motion.div>

//                 <motion.div
//                   whileHover={{ y: -8 }}
//                   className="rounded-3xl bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.2)]"
//                 >
//                   <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
//                     Milk Procurement Software
//                   </p>
//                   <h3 className="mt-3 text-sm font-semibold text-slate-900">
//                     Farmer management · Collection · Quality testing · Payments
//                   </h3>
//                   <p className="mt-2 text-[11px] text-slate-700">
//                     End-to-end dairy procurement from village center to plant.
//                   </p>
//                 </motion.div>

//                 <motion.div
//                   whileHover={{ y: -8 }}
//                   className="rounded-3xl bg-gradient-to-b from-indigo-100 via-white to-sky-50 p-5 text-slate-900 shadow-[0_20px_50px_rgba(15,23,42,0.16)]"
//                 >
//                   <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
//                     POS &amp; Printing ERP
//                   </p>
//                   <h3 className="mt-3 text-sm font-semibold">
//                     Billing · Inventory · Quotations · Job tracking · GST
//                   </h3>
//                   <p className="mt-2 text-[11px] text-slate-700">
//                     Ready-to-deploy software for retail and print businesses.
//                   </p>
//                 </motion.div>
//               </motion.div>
//             </div>
//           </section>

//           {/* ABOUT - with brochure expertise statement */}
//           <section
//             id="about"
//             className="w-full min-h-[85vh] bg-white px-6 py-20 md:px-10 xl:px-16"
//           >
//             <div className="grid gap-10 lg:grid-cols-[minmax(0,0.5fr),minmax(0,1.5fr)] lg:items-start">
//               <motion.div
//                 {...fadeInUp(0)}
//                 className="flex flex-col gap-6 border-l-2 border-sky-500/60 pl-4"
//               >
//                 <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
//                   About us
//                 </p>
//                 <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl md:text-3xl">
//                   We create business applications
//                   <span className="block text-sky-600">
//                     tailored to real-world industry needs.
//                   </span>
//                 </h2>
//                 <p className="text-sm text-slate-700 sm:text-base">
//                   With over 20 years of experience, we deliver powerful and customized web applications
//                   that help organizations work smarter. Our practical digital solutions fit each client's
//                   process and business model.
//                 </p>
//               </motion.div>

//               <motion.div
//                 {...fadeInUp(0.05)}
//                 className="space-y-4"
//               >
//                 <div className="grid gap-4 md:grid-cols-2">
//                   <div className="rounded-3xl border border-slate-200 bg-[#f7f9ff] p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
//                     <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
//                       Who we are
//                     </p>
//                     <p className="mt-3 text-sm text-slate-800">
//                       A trusted software development company with a senior-leaning team of architects,
//                       engineers and designers who enjoy solving complex operations problems with clean,
//                       maintainable web applications.
//                     </p>
//                   </div>
//                   <div className="rounded-3xl border border-slate-200 bg-[#f7f9ff] p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
//                     <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
//                       Our expertise
//                     </p>
//                     <p className="mt-3 text-sm text-slate-800">
//                       Manufacturing web applications. Production management systems. Hospital
//                       management applications. Trading and sales applications. Custom business
//                       software development.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
//                   <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
//                     Why choose us
//                   </p>
//                   <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-slate-800">
//                     <div>✓ 20+ years of experience</div>
//                     <div>✓ Many happy customers</div>
//                     <div>✓ Industry-specific solutions</div>
//                     <div>✓ Custom-built and scalable applications</div>
//                     <div>✓ Focus on quality, reliability, and support</div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </section>

//           {/* SERVICES - enhanced with brochure offerings */}
//           <section
//             id="services"
//             className="w-full min-h-[85vh] bg-white px-6 py-20 md:px-10 xl:px-16"
//           >
//             <motion.div {...fadeInUp(0)} className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
//               <div>
//                 <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
//                   Services
//                 </p>
//                 <h2 className="mt-1 text-xl font-semibold text-slate-900 sm:text-2xl md:text-3xl">
//                   Industry-specific web applications tailored to your business.
//                 </h2>
//                 <p className="mt-2 max-w-3xl text-sm text-slate-700 sm:text-base">
//                   We specialize in creating business applications for manufacturing, production,
//                   hospital, and trading businesses — solutions that manage operations in a structured way.
//                 </p>
//               </div>
//             </motion.div>

//             <div className="mt-8 grid gap-6 lg:grid-cols-2">
//               <motion.div {...fadeInUp(0.06)} className="space-y-5">
//                 <div className="relative min-h-[200px] overflow-hidden rounded-3xl border border-slate-200 bg-[#f7f9ff] p-6">
//                   <span className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-[11px] font-medium text-sky-700">
//                     Manufacturing & Production
//                   </span>
//                   <h3 className="mt-3 text-sm font-semibold text-slate-900">
//                     Production Management Systems
//                   </h3>
//                   <p className="mt-2 text-xs text-slate-700 sm:text-sm">
//                     Track raw materials, monitor production stages, manage inventory, and control
//                     finished goods. Complete visibility across the production lifecycle.
//                   </p>
//                 </div>

//                 <div className="relative min-h-[200px] overflow-hidden rounded-3xl border border-slate-200 bg-white p-6">
//                   <span className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-[11px] font-medium text-sky-700">
//                     Healthcare
//                   </span>
//                   <h3 className="mt-3 text-sm font-semibold text-slate-900">
//                     Hospital Management Applications
//                   </h3>
//                   <p className="mt-2 text-xs text-slate-700 sm:text-sm">
//                     Support patient records, staff coordination, administration, and day-to-day
//                     operations. Built to improve accuracy, organization, and workflow efficiency.
//                   </p>
//                 </div>
//               </motion.div>

//               <motion.div {...fadeInUp(0.08)} className="space-y-5">
//                 <div className="relative min-h-[200px] overflow-hidden rounded-3xl border border-slate-200 bg-[#f2f5fb] p-6">
//                   <span className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-[11px] font-medium text-sky-700">
//                     Trading & Commerce
//                   </span>
//                   <h3 className="mt-3 text-sm font-semibold text-slate-900">
//                     Trading and Sales Applications
//                   </h3>
//                   <p className="mt-2 text-xs text-slate-700 sm:text-sm">
//                     Handle product listings, pricing, orders, stock, and customer management in
//                     one place. Ideal for companies that sell products and manage business transactions.
//                   </p>
//                 </div>

//                 <div className="relative min-h-[200px] overflow-hidden rounded-3xl border border-slate-200 bg-white p-6">
//                   <span className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-[11px] font-medium text-sky-700">
//                     Custom Development
//                   </span>
//                   <h3 className="mt-3 text-sm font-semibold text-slate-900">
//                     Custom Business Software
//                   </h3>
//                   <p className="mt-2 text-xs text-slate-700 sm:text-sm">
//                     Reliable, scalable, and user-friendly web applications that help organizations
//                     work smarter. Practical digital solutions that fit your process and business model.
//                   </p>
//                 </div>
//               </motion.div>
//             </div>
//           </section>


//           {/* PRODUCTS */}
//           <section
//             id="products"
//             className="w-full bg-[#f2f5fb] px-6 py-20 md:px-10 xl:px-16"
//           >
//             <motion.div {...fadeInUp(0)} className="mb-10">
//               <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
//                 Our Products
//               </p>
//               <h2 className="mt-1 text-xl font-semibold text-slate-900 sm:text-2xl md:text-3xl">
//                 Ready-to-deploy software for your industry.
//               </h2>
//               <p className="mt-2 max-w-3xl text-sm text-slate-700 sm:text-base">
//                 Each product is a complete, battle-tested system built for a specific industry — customizable to your workflows and deployable on-premise or in the cloud.
//               </p>
//             </motion.div>

//             <div className="grid gap-6 lg:grid-cols-2">

//               {/* Garments ERP */}
//               <motion.div {...fadeInUp(0.04)} className="rounded-3xl border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)] overflow-hidden">
//                 <div className="bg-gradient-to-r from-sky-600 to-indigo-600 px-6 pt-6 pb-10 text-white">
//                   <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
//                     Garments &amp; Apparel
//                   </span>
//                   <h3 className="mt-3 text-lg font-semibold sm:text-xl">Garments ERP / MES</h3>
//                   <p className="mt-2 text-sm text-sky-100">
//                     A full manufacturing ERP + execution system covering the entire fashion and garment lifecycle — from design to shipment.
//                   </p>
//                 </div>
//                 <div className="px-6 py-5 -mt-4">
//                   <div className="rounded-2xl bg-[#f7f9ff] border border-slate-100 p-4 grid grid-cols-2 gap-3 text-xs text-slate-700">
//                     <div>
//                       <p className="font-semibold text-slate-900 mb-1">Core Modules</p>
//                       <ul className="space-y-0.5">
//                         <li>&#10022; Style &amp; BOM Management</li>
//                         <li>&#10022; Merchandising &amp; T&amp;A Calendar</li>
//                         <li>&#10022; Fabric &amp; Trim Procurement</li>
//                         <li>&#10022; Cutting &amp; Sewing Production</li>
//                         <li>&#10022; Quality Control (AQL / Inline)</li>
//                         <li>&#10022; Packing &amp; Export Management</li>
//                       </ul>
//                     </div>
//                     <div>
//                       <p className="font-semibold text-slate-900 mb-1">Advanced Features</p>
//                       <ul className="space-y-0.5">
//                         <li>&#10022; Costing &amp; Margin Analysis</li>
//                         <li>&#10022; Barcode / RFID Tracking</li>
//                         <li>&#10022; IoT Machine Integration</li>
//                         <li>&#10022; Line Efficiency &amp; SAM Tracking</li>
//                         <li>&#10022; GST &amp; Export Documentation</li>
//                         <li>&#10022; Multi-factory Cloud Dashboard</li>
//                       </ul>
//                     </div>
//                   </div>
//                   <p className="mt-3 text-[11px] text-slate-500">
//                     Suitable for: Knitwear · Woven · Denim · Uniform · Export houses · Fast fashion
//                   </p>
//                 </div>
//               </motion.div>

//               {/* Milk Procurement */}
//               <motion.div {...fadeInUp(0.06)} className="rounded-3xl border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)] overflow-hidden">
//                 <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-6 pt-6 pb-10 text-white">
//                   <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
//                     Dairy &amp; Agriculture
//                   </span>
//                   <h3 className="mt-3 text-lg font-semibold sm:text-xl">Milk Procurement Software</h3>
//                   <p className="mt-2 text-sm text-emerald-50">
//                     Designed around the daily workflow of dairy collection centers, societies, transport teams, and dairy plants — from farm to factory.
//                   </p>
//                 </div>
//                 <div className="px-6 py-5 -mt-4">
//                   <div className="rounded-2xl bg-[#f7f9ff] border border-slate-100 p-4 grid grid-cols-2 gap-3 text-xs text-slate-700">
//                     <div>
//                       <p className="font-semibold text-slate-900 mb-1">Core Modules</p>
//                       <ul className="space-y-0.5">
//                         <li>&#10022; Farmer Registration &amp; Management</li>
//                         <li>&#10022; Morning / Evening Milk Collection</li>
//                         <li>&#10022; Fat / SNF Quality Testing</li>
//                         <li>&#10022; Auto Rate Calculation</li>
//                         <li>&#10022; Payment &amp; Bank Transfer</li>
//                         <li>&#10022; Route &amp; Tanker Logistics</li>
//                       </ul>
//                     </div>
//                     <div>
//                       <p className="font-semibold text-slate-900 mb-1">Advanced Features</p>
//                       <ul className="space-y-0.5">
//                         <li>&#10022; Milk Analyzer Integration</li>
//                         <li>&#10022; Offline Sync for Rural Areas</li>
//                         <li>&#10022; Aadhaar &amp; UPI Payments</li>
//                         <li>&#10022; Chilling Center / BMC Module</li>
//                         <li>&#10022; Farmer Mobile App</li>
//                         <li>&#10022; Tamil Language UI Support</li>
//                       </ul>
//                     </div>
//                   </div>
//                   <p className="mt-3 text-[11px] text-slate-500">
//                     Suitable for: Cooperatives · Private dairies · Collection centers · Dairy plants
//                   </p>
//                 </div>
//               </motion.div>

//               {/* POS */}
//               <motion.div {...fadeInUp(0.08)} className="rounded-3xl border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)] overflow-hidden">
//                 <div className="bg-gradient-to-r from-violet-600 to-purple-700 px-6 pt-6 pb-10 text-white">
//                   <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
//                     Retail &amp; Commerce
//                   </span>
//                   <h3 className="mt-3 text-lg font-semibold sm:text-xl">POS — Point of Sale Software</h3>
//                   <p className="mt-2 text-sm text-violet-100">
//                     A complete billing and inventory platform for retail shops, supermarkets, restaurants, pharmacies, and textile stores.
//                   </p>
//                 </div>
//                 <div className="px-6 py-5 -mt-4">
//                   <div className="rounded-2xl bg-[#f7f9ff] border border-slate-100 p-4 grid grid-cols-2 gap-3 text-xs text-slate-700">
//                     <div>
//                       <p className="font-semibold text-slate-900 mb-1">Core Modules</p>
//                       <ul className="space-y-0.5">
//                         <li>&#10022; Fast Barcode Billing</li>
//                         <li>&#10022; Multi-payment (UPI / Card / Cash)</li>
//                         <li>&#10022; Real-time Stock Management</li>
//                         <li>&#10022; Customer &amp; Loyalty Points</li>
//                         <li>&#10022; GST Invoice &amp; e-Invoice</li>
//                         <li>&#10022; Shift &amp; Employee Management</li>
//                       </ul>
//                     </div>
//                     <div>
//                       <p className="font-semibold text-slate-900 mb-1">Specialized Modes</p>
//                       <ul className="space-y-0.5">
//                         <li>&#10022; Restaurant: Table / KOT / Delivery</li>
//                         <li>&#10022; Pharmacy: Expiry &amp; Batch Tracking</li>
//                         <li>&#10022; Retail: Offers, Coupons, Memberships</li>
//                         <li>&#10022; Multi-branch &amp; Cloud Sync</li>
//                         <li>&#10022; Offline + Online Mode</li>
//                         <li>&#10022; AI Demand Forecasting</li>
//                       </ul>
//                     </div>
//                   </div>
//                   <p className="mt-3 text-[11px] text-slate-500">
//                     Suitable for: Supermarkets · Textile shops · Restaurants · Pharmacies · Retail chains
//                   </p>
//                 </div>
//               </motion.div>

//               {/* Printing ERP */}
//               <motion.div {...fadeInUp(0.10)} className="rounded-3xl border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)] overflow-hidden">
//                 <div className="bg-gradient-to-r from-orange-500 to-rose-600 px-6 pt-6 pb-10 text-white">
//                   <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
//                     Print Industry
//                   </span>
//                   <h3 className="mt-3 text-lg font-semibold sm:text-xl">Printing Industry ERP / MIS</h3>
//                   <p className="mt-2 text-sm text-orange-50">
//                     A specialized ERP/MIS managing the complete print workflow — from quotation and prepress to production, finishing, dispatch, and billing.
//                   </p>
//                 </div>
//                 <div className="px-6 py-5 -mt-4">
//                   <div className="rounded-2xl bg-[#f7f9ff] border border-slate-100 p-4 grid grid-cols-2 gap-3 text-xs text-slate-700">
//                     <div>
//                       <p className="font-semibold text-slate-900 mb-1">Core Modules</p>
//                       <ul className="space-y-0.5">
//                         <li>&#10022; Estimation &amp; Auto Quotation</li>
//                         <li>&#10022; Job Order &amp; Work Order</li>
//                         <li>&#10022; Prepress &amp; Artwork Approval</li>
//                         <li>&#10022; Production Scheduling</li>
//                         <li>&#10022; Paper / Ink / Plate Inventory</li>
//                         <li>&#10022; GST Billing &amp; Finance</li>
//                       </ul>
//                     </div>
//                     <div>
//                       <p className="font-semibold text-slate-900 mb-1">Advanced Features</p>
//                       <ul className="space-y-0.5">
//                         <li>&#10022; Machine Runtime &amp; IoT Integration</li>
//                         <li>&#10022; QC — Color, Density, Alignment</li>
//                         <li>&#10022; Web-to-Print Online Portal</li>
//                         <li>&#10022; WhatsApp Quotation Sharing</li>
//                         <li>&#10022; Multi-plant Cloud Management</li>
//                         <li>&#10022; Predictive Maintenance AI</li>
//                       </ul>
//                     </div>
//                   </div>
//                   <p className="mt-3 text-[11px] text-slate-500">
//                     Suitable for: Offset · Digital · Packaging · Label · Flexo · Screen printing
//                   </p>
//                 </div>
//               </motion.div>

//             </div>

//             <motion.div {...fadeInUp(0.12)} className="mt-8 rounded-3xl bg-gradient-to-br from-sky-600 via-sky-500 to-indigo-600 p-6 text-white text-center shadow-[0_20px_60px_rgba(15,23,42,0.25)]">
//               <p className="text-sm font-semibold">All products include GST support, multi-user roles, reporting dashboards, and can be customized for your specific business needs.</p>
//               <button
//                 onClick={() => scrollToId('contact')}
//                 className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-6 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 shadow-md transition hover:bg-sky-50"
//               >
//                 Request a Demo
//               </button>
//             </motion.div>
//           </section>

//           {/* PROCESS */}
//           <section
//             id="process"
//             className="w-full min-h-[85vh] bg-[#f2f5fb] px-6 py-20 md:px-10 xl:px-16"
//           >
//             <motion.h2
//               {...fadeInUp(0)}
//               className="text-lg font-semibold text-slate-900 sm:text-xl"
//             >
//               A delivery process built for complex systems
//             </motion.h2>
//             <motion.p
//               {...fadeInUp(0.05)}
//               className="mt-2 max-w-3xl text-sm text-slate-700 sm:text-base"
//             >
//               We keep projects predictable with a structured delivery process. Each phase
//               has a clear outcome, set of artifacts, and people involved.
//             </motion.p>

//             <motion.div
//               {...fadeInUp(0.08)}
//               className="mt-10 grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:grid-cols-4"
//             >
//               {['Discover', 'Design', 'Build', 'Launch & evolve'].map((step, i) => (
//                 <div key={step} className="flex flex-col min-h-[220px]">
//                   <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
//                     <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f2f5fb] text-[11px] text-sky-700">
//                       {i + 1}
//                     </span>
//                     {step}
//                   </div>
//                   <p className="mt-3 text-xs text-slate-700 sm:text-sm flex-1">
//                     {i === 0 &&
//                       'Workshops, system walkthroughs, and documentation review to understand how things work today, pain points, and what success looks like.'}
//                     {i === 1 &&
//                       'User flows, information architecture, and interaction patterns designed around your roles, permissions and data structures.'}
//                     {i === 2 &&
//                       'Incremental implementation with weekly demos, automated testing, observability hooks, and early integration with your environments.'}
//                     {i === 3 &&
//                       'Launch planning, training, runbooks and optional dedicated pods for continuous improvements and new integrations.'}
//                   </p>
//                   <div className="mt-3 h-1 rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-400" />
//                 </div>
//               ))}
//             </motion.div>
//           </section>

//           {/* PROJECTS */}
//           <section
//             id="projects"
//             className="w-full min-h-[90vh] bg-[#eef2fb] px-6 py-20 md:px-10 xl:px-16"
//           >
//             <motion.div {...fadeInUp(0)} className="mb-6">
//               <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
//                 Comprehensive project examples
//               </h2>
//               <p className="mt-2 max-w-3xl text-sm text-slate-700 sm:text-base">
//                 Here are a few ways we've used web applications and integrations to
//                 streamline operations, unlock insights, and improve customer experience.
//               </p>
//             </motion.div>

//             <Swiper
//               modules={[Pagination, Autoplay]}
//               spaceBetween={32}
//               slidesPerView={1.05}
//               centeredSlides
//               pagination={{ clickable: true }}
//               autoplay={{ delay: 6000, disableOnInteraction: false }}
//               breakpoints={{
//                 1024: { slidesPerView: 1.3, centeredSlides: true },
//               }}
//               className="!pb-12"
//             >
//               {projects.map((p) => (
//                 <SwiperSlide key={p.title}>
//                   <motion.div
//                     initial={{ opacity: 0, y: 40, scale: 0.96 }}
//                     whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                     viewport={{ once: true, amount: 0.4 }}
//                     transition={{
//                       duration: 0.7,
//                       delay: 0.05,
//                       ease: [0.16, 1, 0.3, 1],
//                     }}
//                     className="relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_28px_80px_rgba(15,23,42,0.15)]"
//                   >
//                     <div className="relative h-64 w-full bg-gradient-to-r from-sky-600 via-indigo-600 to-sky-500">
//                       <div className="absolute inset-4 rounded-2xl bg-[#f2f5fb] shadow-[0_24px_60px_rgba(0,0,0,0.35)]" />
//                       <div className="absolute left-7 top-7 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] text-sky-100">
//                         Web app + Integrations
//                       </div>
//                       <div className="absolute right-7 bottom-7 flex gap-2 text-[10px] text-sky-100/90">
//                         <span className="rounded-full bg-slate-900/70 px-2 py-1">
//                           React
//                         </span>
//                         <span className="rounded-full bg-slate-900/70 px-2 py-1">
//                           Tailwind
//                         </span>
//                         <span className="rounded-full bg-slate-900/70 px-2 py-1">
//                           APIs
//                         </span>
//                       </div>
//                     </div>

//                     <div className="grid gap-6 p-6 md:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)] md:items-center">
//                       <div>
//                         <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500">
//                           {p.category}
//                         </p>
//                         <h3 className="mt-3 text-lg font-semibold text-slate-900 sm:text-xl">
//                           {p.title}
//                         </h3>
//                         <p className="mt-2 text-sm text-slate-700 sm:text-base">
//                           {p.description}
//                         </p>
//                         <p className="mt-3 text-xs text-sky-700">{p.metrics}</p>
//                       </div>
//                       <div className="space-y-3 text-xs text-slate-700">
//                         <div className="rounded-2xl border border-slate-200 bg-[#f7f9ff] p-3">
//                           <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
//                             What we delivered
//                           </p>
//                           <ul className="mt-2 space-y-1">
//                             <li>• UX design and responsive UI</li>
//                             <li>• Core web application build</li>
//                             <li>• API integrations & monitoring</li>
//                           </ul>
//                         </div>
//                         <div className="rounded-2xl border border-slate-200 bg-white p-3">
//                           <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
//                             Outcome
//                           </p>
//                           <p className="mt-1">
//                             Reliable data, fewer manual steps, and clearer visibility
//                             for both leadership and on-the-ground teams.
//                           </p>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-sky-600 via-indigo-600 to-sky-500" />
//                   </motion.div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </section>

//           {/* TEAM */}
//           <section
//             id="team"
//             className="w-full min-h-[85vh] bg-white px-6 py-20 md:px-10 xl:px-16"
//           >
//             <motion.h2
//               {...fadeInUp(0)}
//               className="text-lg font-semibold text-slate-900 sm:text-xl"
//             >
//               Team behind Accurate Software Integrators
//             </motion.h2>
//             <motion.p
//               {...fadeInUp(0.05)}
//               className="mt-2 max-w-3xl text-sm text-slate-700 sm:text-base"
//             >
//               We're a focused team of architects, engineers, and designers who enjoy
//               turning complex system diagrams into clean, maintainable web applications.
//             </motion.p>

//             <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.2fr),minmax(0,0.9fr)] lg:items-start">
//               <motion.div
//                 {...fadeInUp(0.08)}
//                 className="grid gap-5 md:grid-cols-2"
//               >
//                 {teamMembers.map((m) => (
//                   <div
//                     key={m.name}
//                     className="flex flex-col rounded-3xl border border-slate-200 bg-[#f7f9ff] p-5 shadow-[0_16px_45px_rgba(15,23,42,0.08)]"
//                   >
//                     <div className="flex items-center gap-3">
//                       <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 text-sm font-semibold text-white">
//                         {m.initials}
//                       </div>
//                       <div>
//                         <p className="text-sm font-semibold text-slate-900">
//                           {m.name}
//                         </p>
//                         <p className="text-[11px] text-slate-500">{m.role}</p>
//                       </div>
//                     </div>
//                     <p className="mt-3 text-xs text-slate-700 sm:text-sm">
//                       {m.focus}
//                     </p>
//                   </div>
//                 ))}
//               </motion.div>

//               <motion.div
//                 {...fadeInUp(0.12)}
//                 className="space-y-4 rounded-3xl border border-slate-200 bg-[#f2f5fb] p-6 shadow-[0_18px_55px_rgba(15,23,42,0.1)]"
//               >
//                 <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
//                   Our Promise
//                 </p>
//                 <p className="text-sm text-slate-800">
//                   We create software that simplifies work, improves business visibility,
//                   and supports growth. Every application is designed to match your process,
//                   your goals, and your industry needs.
//                 </p>
//                 <ul className="mt-2 space-y-2 text-xs text-slate-700 sm:text-sm">
//                   <li>• Role-based access control and audit logs available by design.</li>
//                   <li>• Environments and release pipelines aligned with your governance.</li>
//                   <li>• Monitoring hooks to feed into your existing observability stack.</li>
//                 </ul>
//               </motion.div>
//             </div>
//           </section>

//           {/* CUSTOMER REVIEWS */}
//           <section
//             id="reviews"
//             className="w-full min-h-[85vh] overflow-x-hidden bg-[#eef2fb] px-6 py-20 md:px-10 xl:px-16"
//           >
//             <motion.div {...fadeInUp(0)} className="mb-10">
//               <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-500">
//                 Customer reviews
//               </p>
//               <h2 className="mt-2 text-xl font-semibold text-slate-900 sm:text-2xl md:text-3xl">
//                 What our clients say about working with us
//               </h2>
//               <p className="mt-3 max-w-2xl text-sm text-slate-700 sm:text-base">
//                 Teams across SaaS, logistics, and professional services share their
//                 experience with our delivery, communication, and the impact of the
//                 software we built together.
//               </p>
//             </motion.div>

//             <div className="w-full overflow-hidden">
//               <Swiper
//                 modules={[Pagination, Autoplay]}
//                 spaceBetween={24}
//                 slidesPerView={1}
//                 loop
//                 pagination={{ clickable: true }}
//                 autoplay={{ delay: 5000, disableOnInteraction: false }}
//                 breakpoints={{
//                   640: { slidesPerView: 1, spaceBetween: 24 },
//                   1024: { slidesPerView: 2, spaceBetween: 32 },
//                 }}
//                 className="!pb-14"
//               >
//                 {reviews.map((r) => (
//                   <SwiperSlide key={r.name}>
//                     <motion.div
//                       initial={{ opacity: 0, y: 24 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true, amount: 0.3 }}
//                       transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
//                       className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_55px_rgba(15,23,42,0.1)] transition hover:shadow-[0_24px_60px_rgba(15,23,42,0.14)] md:p-7"
//                     >
//                       <div className="flex items-start justify-between gap-3">
//                         <StarRating rating={r.rating} />
//                         <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-medium text-emerald-700">
//                           Verified
//                         </span>
//                       </div>
//                       <blockquote className="mt-4 flex-1 text-sm text-slate-800 sm:text-base">
//                         &ldquo;{r.quote}&rdquo;
//                       </blockquote>
//                       <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
//                         <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-sky-600 text-sm font-semibold text-white shadow-md">
//                           {r.initials}
//                         </div>
//                         <div className="min-w-0">
//                           <p className="text-sm font-semibold text-slate-900">
//                             {r.name}
//                           </p>
//                           <p className="text-xs text-slate-500">{r.role}</p>
//                           <p className="mt-0.5 text-[11px] text-sky-600 font-medium">
//                             {r.company}
//                           </p>
//                         </div>
//                       </div>
//                     </motion.div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           </section>

//           {/* FAQ + CTA */}
//           <section className="w-full min-h-[80vh] bg-[#f2f5fb] px-6 py-20 md:px-10 xl:px-16">
//             <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)] md:items-start">
//               <motion.div {...fadeInUp(0)}>
//                 <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
//                   Get clear answers to your questions
//                 </h2>
//                 <p className="mt-2 max-w-xl text-sm text-slate-700 sm:text-base">
//                   Here are some of the things teams usually ask before we kick off a
//                   project. If you need something different, we're happy to talk.
//                 </p>

//                 <div className="mt-6 space-y-2">
//                   {faqs.map((item, idx) => {
//                     const isOpen = openFaq === idx;
//                     return (
//                       <motion.div
//                         key={item.q}
//                         initial={{ opacity: 0, y: 10 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true, amount: 0.3 }}
//                         transition={{ duration: 0.4, delay: 0.03 * idx }}
//                         className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
//                       >
//                         <button
//                           type="button"
//                           onClick={() => setOpenFaq(isOpen ? null : idx)}
//                           className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-slate-900"
//                         >
//                           <span>{item.q}</span>
//                           <span className="ml-4 text-xl text-slate-400">
//                             {isOpen ? '−' : '+'}
//                           </span>
//                         </button>
//                         {isOpen && (
//                           <div className="border-t border-slate-200 px-4 py-3 text-xs text-slate-700 sm:text-sm">
//                             {item.a}
//                           </div>
//                         )}
//                       </motion.div>
//                     );
//                   })}
//                 </div>
//               </motion.div>

//               <motion.div
//                 {...fadeInUp(0.08)}
//                 className="flex h-full flex-col justify-between rounded-3xl bg-gradient-to-br from-sky-600 via-sky-500 to-indigo-600 p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.6)]"
//               >
//                 <div>
//                   <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-100/80">
//                     Modern software, human partnership
//                   </p>
//                   <h3 className="mt-3 text-xl font-semibold sm:text-2xl">
//                     Your next web application can be clearer, faster, and better connected.
//                   </h3>
//                   <p className="mt-3 text-sm text-sky-100">
//                     We combine engineering depth with a calm, structured approach so that
//                     complex projects feel understandable at every step.
//                   </p>
//                 </div>
//                 <div className="mt-6 flex flex-wrap items-center gap-3">
//                   <button
//                     onClick={() => scrollToId('contact')}
//                     className="rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 shadow-md transition hover:bg-sky-50"
//                   >
//                     Start your project
//                   </button>
//                   <p className="text-[11px] text-sky-100/90">
//                     Typical kickoff in 2–4 weeks after agreement.
//                   </p>
//                 </div>
//               </motion.div>
//             </div>
//           </section>

//           {/* CONTACT */}
//           <section
//             id="contact"
//             className="w-full min-h-[90vh] bg-white px-6 py-20 md:px-10 xl:px-16"
//           >
//             <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr),minmax(0,1fr)] md:items-center">
//               <motion.div {...fadeInUp(0)}>
//                 <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
//                   Contact Accurate Software Integrators
//                 </p>
//                 <h2 className="mt-3 text-xl font-semibold text-slate-900 sm:text-2xl md:text-3xl">
//                   Let's talk about your web‑based application or integration roadmap.
//                 </h2>
//                 <p className="mt-2 max-w-xl text-sm text-slate-700 sm:text-base">
//                   Share a short overview of your company, systems, and what you're
//                   hoping to achieve. We'll follow up with a perspective, rough timeline,
//                   and next steps.
//                 </p>
//                 <ul className="mt-4 space-y-1 text-xs text-slate-600">
//                   <li>• Projects typically range from 6–16 weeks.</li>
//                   <li>• We collaborate closely with your product and IT stakeholders.</li>
//                 </ul>
//               </motion.div>

//               <motion.form
//                 {...fadeInUp(0.05)}
//                 className="space-y-3 text-sm"
//                 onSubmit={(e) => e.preventDefault()}
//               >
//                 <div className="grid gap-3 sm:grid-cols-2">
//                   <div>
//                     <label className="mb-1 block text-xs font-medium text-slate-800">
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       className="w-full rounded-xl border border-slate-300 bg-[#f2f5fb] px-3 py-2 text-sm text-slate-900 outline-none ring-sky-600/0 transition focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20"
//                       placeholder="Your name"
//                     />
//                   </div>
//                   <div>
//                     <label className="mb-1 block text-xs font-medium text-slate-800">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       className="w-full rounded-xl border border-slate-300 bg-[#f2f5fb] px-3 py-2 text-sm text-slate-900 outline-none ring-sky-600/0 transition focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20"
//                       placeholder="you@company.com"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="mb-1 block text-xs font-medium text-slate-800">
//                     Company
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full rounded-xl border border-slate-300 bg-[#f2f5fb] px-3 py-2 text-sm text-slate-900 outline-none ring-sky-600/0 transition focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20"
//                     placeholder="Company name"
//                   />
//                 </div>
//                 <div>
//                   <label className="mb-1 block text-xs font-medium text-slate-800">
//                     What are you looking to build?
//                   </label>
//                   <textarea
//                     rows={4}
//                     className="w-full rounded-xl border border-slate-300 bg-[#f2f5fb] px-3 py-2 text-sm text-slate-900 outline-none ring-sky-600/0 transition focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20"
//                     placeholder="Tell us about your application, existing systems, timelines, and success metrics."
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="mt-2 inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-md transition hover:bg-sky-700"
//                 >
//                   Send message
//                 </button>
//               </motion.form>
//             </div>
//           </section>
//         </main>

//         {/* FOOTER with legal links */}
//         <footer className="w-full bg-slate-900 text-slate-200">
//           <div className="w-full px-6 py-10 md:px-10 xl:px-16">
//             <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)] md:items-start">
//               <div>
//                 <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
//                   Accurate Software Integrators
//                 </p>
//                 <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
//                   Accurate
//                   <br />
//                   Software Integrators
//                 </h3>
//                 <p className="mt-3 max-w-md text-sm text-slate-300">
//                   Web‑based applications and integrations that help your business run on clear, accurate data.
//                 </p>
//               </div>
//               <div className="grid gap-6 text-xs text-slate-300 sm:grid-cols-3">
//                 <div>
//                   <p className="font-semibold text-white">Contact</p>
//                   <p className="mt-2">info@accuratesoftwareintegrators.com</p>
//                   <p className="mt-1">+91‑00000‑00000</p>
//                   <p className="mt-1">Coimbatore · Remote‑first</p>
//                 </div>
//                 <div>
//                   <p className="font-semibold text-white">Our Products</p>
//                   <p className="mt-2">Garments ERP / MES</p>
//                   <p className="mt-1">Milk Procurement Software</p>
//                   <p className="mt-1">POS — Point of Sale</p>
//                   <p className="mt-1">Printing Industry ERP / MIS</p>
//                 </div>
//                 <div>
//                   <p className="font-semibold text-white">Legal</p>
//                   <button onClick={() => setShowPrivacy(true)} className="mt-2 block hover:text-white transition-colors">
//                     Privacy Policy
//                   </button>
//                   <button onClick={() => setShowTerms(true)} className="mt-1 block hover:text-white transition-colors">
//                     Terms & Conditions
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-8 border-t border-slate-800 pt-4 text-[11px] text-slate-500">
//               <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
//                 <p>
//                   © {new Date().getFullYear()} Accurate Software Integrators. All rights reserved.
//                 </p>
//                 <p>Built with React, Tailwind CSS, Framer Motion & Swiper.</p>
//               </div>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </HelmetProvider>
//   );
// }

// export default App;


import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'products', label: 'Products' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

const reviews = [
  {
    name: 'Rajesh Kumar',
    role: 'Owner, Raj Garments Export',
    company: 'Garments & Apparel',
    quote: 'Our entire cutting-to-shipment process is now tracked in one system. Fabric wastage dropped and we never miss a T&A deadline anymore.',
    rating: 5,
    initials: 'RK',
  },
  {
    name: 'Annamalai S.',
    role: 'Manager, Kaveri Dairy Society',
    company: 'Dairy & Milk Procurement',
    quote: 'Farmer payments are now automatic. Our collection operators use the app offline, and everything syncs when they reach town. Fully Tamil supported.',
    rating: 5,
    initials: 'AS',
  },
  {
    name: 'Meena Suresh',
    role: 'Owner, Sri Lakshmi Textiles',
    company: 'Retail & POS',
    quote: 'The POS software handles our GST billing, customer loyalty, and stock in one screen. Setup was fast and support has been excellent.',
    rating: 5,
    initials: 'MS',
  },
  {
    name: 'Bala Chandran',
    role: 'Director, CBP Offset Printers',
    company: 'Printing Industry',
    quote: 'Quotations used to take hours. Now they are generated in minutes. The job card system keeps every department in sync and we rarely miss delivery dates.',
    rating: 5,
    initials: 'BC',
  },
  {
    name: 'Vijay Narayan',
    role: 'CEO, VN Knitwear Factory',
    company: 'Garments Manufacturing',
    quote: 'Line efficiency reports and operator tracking transformed how we run our sewing floor. Production targets are actually being met now.',
    rating: 5,
    initials: 'VN',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? 'text-amber-400' : 'text-slate-300'}
          aria-hidden
        >
          <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </span>
      ))}
    </div>
  );
}

const faqs = [
  {
    q: 'Do you offer Garments ERP software for small factories in Coimbatore?',
    a: 'Yes. Our Garments ERP is designed for factories of all sizes — from small boutique units to large export houses. It covers style management, cutting, sewing, QC, and shipment documentation, and can be deployed on-premise or in the cloud.',
  },
  {
    q: 'Can the Milk Procurement Software work offline in rural areas?',
    a: 'Absolutely. Our milk software is built offline-first — collection operators can enter milk data, weights, and fat readings without internet. Data automatically syncs when connectivity is available. It also supports Tamil language UI and UPI/Aadhaar payments.',
  },
  {
    q: 'Is your POS software suitable for textile shops and restaurants in Tamil Nadu?',
    a: 'Yes. Our POS supports GST billing, HSN codes, multi-payment (UPI, card, cash), loyalty programs, and inventory — all in one. It has specialized modes for retail, restaurant (with KOT and table management), and pharmacy (expiry and batch tracking).',
  },
  {
    q: 'Does the Printing ERP handle estimation and quotation automatically?',
    a: 'Yes. Our Printing ERP/MIS automatically calculates paper, ink, plate, and machine costs to generate accurate quotations in minutes. You can share quotations via WhatsApp and track job cards through every stage from prepress to dispatch.',
  },
  {
    q: 'Can your software be customized for our specific business workflow?',
    a: 'Every project starts with a discovery phase where we map your existing processes. All our products are fully customizable — we adapt modules, reports, user roles, and integrations to match exactly how your business operates.',
  },
  {
    q: 'Do your products support GST, e-invoicing, and Indian compliance?',
    a: 'Yes. All products are GST-ready with HSN/SAC code support, e-invoice generation, and export documentation. They are built for Indian business requirements including multi-tax support, vendor payments, and regional language support.',
  },
];

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Accurate Software Integrators',
  url: 'https://www.accuratesoftwareintegrators.com',
  logo: 'https://www.accuratesoftwareintegrators.com/logo.png',
  description: 'Business software company in Coimbatore offering Garments ERP, Milk Procurement Software, POS, and Printing ERP solutions.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Coimbatore',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-00000-00000',
    contactType: 'sales',
    email: 'info@accuratesoftwareintegrators.com',
  },
  sameAs: [],
};

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const closeMobileNav = () => setMobileNavOpen(false);
  const handleNavClick = (id: string) => {
    scrollToId(id);
    closeMobileNav();
  };

  const closeLegal = () => {
    setShowPrivacy(false);
    setShowTerms(false);
  };

  if (showPrivacy) {
    return (
      <HelmetProvider>
        <div className="min-h-screen bg-[#f2f5fb] text-slate-900">
          <Helmet>
            <title>Privacy Policy | Accurate Software Integrators</title>
            <meta name="description" content="Privacy Policy for Accurate Software Integrators – software company in Coimbatore, Tamil Nadu." />
            <meta name="robots" content="noindex" />
          </Helmet>
          <div className="max-w-4xl mx-auto px-6 py-20">
            <button onClick={closeLegal} className="mb-8 inline-flex items-center gap-2 text-sm text-sky-600 hover:text-sky-700">
              ← Back to Home
            </button>
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <h1 className="text-3xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
              <p className="text-slate-500 mb-8">Last updated: April 11, 2026</p>
              <div className="space-y-6 text-slate-700">
                <section><h2 className="text-xl font-semibold text-slate-900 mb-3">1. Introduction</h2><p>Accurate Software Integrators ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy informs you about how we look after your personal data when you visit our website.</p></section>
                <section><h2 className="text-xl font-semibold text-slate-900 mb-3">2. Data We Collect</h2><p>We may collect Identity Data (name, job title), Contact Data (email, phone, company name), Technical Data (IP address, browser type), and Usage Data (how you use our website).</p></section>
                <section><h2 className="text-xl font-semibold text-slate-900 mb-3">3. How We Collect Your Data</h2><p>We collect data through contact forms, email communications, cookies and tracking technologies, and direct interactions when you inquire about our services.</p></section>
                <section><h2 className="text-xl font-semibold text-slate-900 mb-3">4. How We Use Your Data</h2><p>We use your personal data to respond to inquiries, improve our website and services, and comply with legal obligations.</p></section>
                <section><h2 className="text-xl font-semibold text-slate-900 mb-3">5. Data Security</h2><p>We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, accessed, altered, or disclosed.</p></section>
                <section><h2 className="text-xl font-semibold text-slate-900 mb-3">6. Your Legal Rights</h2><p>Under data protection laws you have the right to access, correct, erase, restrict, or object to processing of your personal data, and the right to data portability.</p></section>
                <section><h2 className="text-xl font-semibold text-slate-900 mb-3">7. Contact Us</h2><p>Email: <a href="mailto:privacy@accuratesoftwareintegrators.com" className="text-sky-600">privacy@accuratesoftwareintegrators.com</a></p></section>
              </div>
            </div>
          </div>
        </div>
      </HelmetProvider>
    );
  }

  if (showTerms) {
    return (
      <HelmetProvider>
        <div className="min-h-screen bg-[#f2f5fb] text-slate-900">
          <Helmet>
            <title>Terms & Conditions | Accurate Software Integrators</title>
            <meta name="description" content="Terms and Conditions for Accurate Software Integrators – software company in Coimbatore, Tamil Nadu." />
            <meta name="robots" content="noindex" />
          </Helmet>
          <div className="max-w-4xl mx-auto px-6 py-20">
            <button onClick={closeLegal} className="mb-8 inline-flex items-center gap-2 text-sm text-sky-600 hover:text-sky-700">
              ← Back to Home
            </button>
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <h1 className="text-3xl font-bold text-slate-900 mb-6">Terms & Conditions</h1>
              <p className="text-slate-500 mb-8">Last updated: April 11, 2026</p>
              <div className="space-y-6 text-slate-700">
                <section><h2 className="text-xl font-semibold text-slate-900 mb-3">1. Agreement to Terms</h2><p>By accessing or using our website and services, you agree to be bound by these Terms & Conditions.</p></section>
                <section><h2 className="text-xl font-semibold text-slate-900 mb-3">2. Intellectual Property</h2><p>The content, design, logos, and all intellectual property on this website are owned by Accurate Software Integrators. You may not reproduce or distribute without explicit written consent.</p></section>
                <section><h2 className="text-xl font-semibold text-slate-900 mb-3">3. Services & Engagement</h2><p>We provide software development and integration services. Specific terms will be outlined in a Statement of Work (SOW) or Master Services Agreement (MSA).</p></section>
                <section><h2 className="text-xl font-semibold text-slate-900 mb-3">4. Client Responsibilities</h2><p>Clients agree to provide timely access to necessary information, personnel, and systems. Delays caused by client inaction may affect project timelines.</p></section>
                <section><h2 className="text-xl font-semibold text-slate-900 mb-3">5. Payment Terms</h2><p>Payment terms will be specified in project-specific agreements. Deposits are required before commencing work.</p></section>
                <section><h2 className="text-xl font-semibold text-slate-900 mb-3">6. Limitation of Liability</h2><p>To the maximum extent permitted by law, Accurate Software Integrators shall not be liable for any indirect, incidental, or consequential damages.</p></section>
                <section><h2 className="text-xl font-semibold text-slate-900 mb-3">7. Governing Law</h2><p>These terms shall be governed by and construed in accordance with the laws of India. Jurisdiction: Coimbatore, Tamil Nadu.</p></section>
                <section><h2 className="text-xl font-semibold text-slate-900 mb-3">8. Contact</h2><p>Email: <a href="mailto:legal@accuratesoftwareintegrators.com" className="text-sky-600">legal@accuratesoftwareintegrators.com</a></p></section>
              </div>
            </div>
          </div>
        </div>
      </HelmetProvider>
    );
  }

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-[#f2f5fb] text-slate-900">
        <Helmet>
          <html lang="en" />
          <title>Accurate Software Integrators – Garments ERP, Milk Software, POS & Printing ERP | Coimbatore</title>
          <meta
            name="description"
            content="Accurate Software Integrators, Coimbatore – Specialists in Garments ERP, Milk Procurement Software, POS Point of Sale, and Printing Industry ERP. 20+ years of business software experience in Tamil Nadu."
          />
          <meta name="keywords" content="garments ERP software Coimbatore, milk procurement software Tamil Nadu, POS software Coimbatore, printing ERP software, apparel software India, dairy software Tamil Nadu, point of sale software Tamil Nadu, knitwear software Tirupur" />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Accurate Software Integrators" />
          <meta name="geo.region" content="IN-TN" />
          <meta name="geo.placename" content="Coimbatore" />
          <link rel="canonical" href="https://www.accuratesoftwareintegrators.com/" />
          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.accuratesoftwareintegrators.com/" />
          <meta property="og:title" content="Accurate Software Integrators – Garments ERP, Milk Software, POS & Printing ERP | Coimbatore" />
          <meta property="og:description" content="Business software specialists in Coimbatore. Garments ERP, Milk Procurement Software, POS, and Printing ERP trusted by businesses across Tamil Nadu." />
          <meta property="og:image" content="https://www.accuratesoftwareintegrators.com/og-image.jpg" />
          <meta property="og:locale" content="en_IN" />
          <meta property="og:site_name" content="Accurate Software Integrators" />
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Accurate Software Integrators – Business Software Coimbatore" />
          <meta name="twitter:description" content="Garments ERP, Milk Procurement Software, POS & Printing ERP. 20+ years experience. Based in Coimbatore, Tamil Nadu." />
          {/* JSON-LD Structured Data */}
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </Helmet>

        {/* Background blobs */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl" />
          <div className="absolute right-[-50px] top-40 h-80 w-80 rounded-full bg-indigo-200/50 blur-3xl" />
          <div className="absolute bottom-[-60px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-slate-200/50 blur-3xl" />
        </div>

        {/* ── NAVBAR ── */}
        <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#f2f5fb]/80 backdrop-blur-xl" role="banner">
          <div className="flex w-full items-center justify-between px-6 py-4 md:px-10 xl:px-16">
            <button onClick={() => scrollToId('home')} className="flex items-center gap-3" aria-label="Go to homepage">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-600 text-[11px] font-semibold text-white shadow-sm">
                AS
              </div>
              <div className="leading-tight text-left">
                <p className="text-sm font-semibold tracking-wide text-slate-900">
                  Accurate Software <span className="text-sky-600">Integrators</span>
                </p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
                  Business Software · Coimbatore
                </p>
              </div>
            </button>

            <nav className="hidden items-center gap-6 text-xs font-medium text-slate-600 lg:flex" aria-label="Main navigation">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToId(item.id)}
                  className="relative transition-colors hover:text-slate-900"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToId('contact')}
                className="rounded-full bg-sky-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-md transition hover:-translate-y-0.5 hover:bg-sky-700"
              >
                Get a Demo
              </button>
            </nav>

            <button
              type="button"
              onClick={() => setMobileNavOpen(true)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 bg-white/80 text-slate-700 shadow-sm hover:bg-white"
              aria-label="Open navigation menu"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>

        {/* Mobile overlay */}
        {mobileNavOpen && (
          <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
            <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={closeMobileNav} aria-hidden="true" />
            <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
                <span className="text-sm font-semibold text-slate-900">Menu</span>
                <button
                  type="button"
                  onClick={closeMobileNav}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col gap-1 p-4" aria-label="Mobile navigation">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-slate-100"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => handleNavClick('contact')}
                  className="mt-2 w-full rounded-full bg-sky-600 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-md hover:bg-sky-700"
                >
                  Get a Demo
                </button>
              </nav>
            </div>
          </div>
        )}

        <main id="main-content" className="w-full">

          {/* ── HERO ── */}
          <section
            id="home"
            className="w-full min-h-[95vh] bg-gradient-to-b from-[#f2f5fb] via-white to-[#eef2fb] px-6 pt-10 pb-16 md:px-10 md:pt-16 xl:px-16"
            aria-label="Hero"
          >
            <div className="grid w-full gap-10 md:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)] md:items-center">
              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[11px] text-slate-700 shadow-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-600" aria-hidden="true" />
                  Coimbatore-based · 20+ Years Experience · Tamil Nadu
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl"
                >
                  Business Software Built
                  <span className="block text-sky-600">for Indian Industries.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="max-w-2xl text-sm text-slate-700 sm:text-base"
                >
                  Accurate Software Integrators delivers ready-to-deploy ERP, POS, and procurement software tailored for Garments factories, Dairy businesses, Retail shops, and Printing companies across Tamil Nadu and India.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="flex flex-wrap items-center gap-3"
                >
                  <button
                    onClick={() => scrollToId('products')}
                    className="group flex items-center gap-2 rounded-full bg-sky-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-sky-700"
                  >
                    Explore Our Products
                    <span className="text-[10px] transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                  </button>
                  <button
                    onClick={() => scrollToId('contact')}
                    className="flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-xs font-medium text-slate-800 shadow-sm transition hover:bg-white"
                  >
                    Request a Free Demo
                  </button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="grid gap-4 pt-4 text-xs text-slate-700 sm:grid-cols-4"
                >
                  {[
                    { value: '20+', label: 'Years of Experience' },
                    { value: '200+', label: 'Businesses Served' },
                    { value: '4', label: 'Industry Products' },
                    { value: '24/7', label: 'Support & Reliability' },
                  ].map((s) => (
                    <div key={s.label} className="space-y-1">
                      <p className="text-xl font-semibold text-slate-900">{s.value}</p>
                      <p>{s.label}</p>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Hero product preview cards */}
              <motion.div
                initial={{ opacity: 0, y: 32, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="flex w-full flex-col gap-4"
              >
                <motion.div whileHover={{ y: -6 }} className="rounded-3xl bg-gradient-to-br from-sky-600 to-indigo-600 p-5 text-white shadow-[0_24px_60px_rgba(15,23,42,0.4)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-100/80">Garments ERP / MES</p>
                  <h3 className="mt-2 text-sm font-semibold">Style · Cutting · Sewing · QC · Shipment</h3>
                  <p className="mt-1.5 text-[11px] text-sky-100/90">Full ERP + MES for garment factories and export houses.</p>
                </motion.div>

                <motion.div whileHover={{ y: -6 }} className="rounded-3xl bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.2)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-600">Milk Procurement Software</p>
                  <h3 className="mt-2 text-sm font-semibold text-slate-900">Farmer Mgmt · Collection · Quality · Payments</h3>
                  <p className="mt-1.5 text-[11px] text-slate-600">Offline-ready dairy procurement — village center to plant.</p>
                </motion.div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.div whileHover={{ y: -6 }} className="rounded-3xl bg-gradient-to-b from-violet-100 to-white p-5 text-slate-900 shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-600">POS Software</p>
                    <h3 className="mt-2 text-[11px] font-semibold">Billing · Stock · GST · UPI</h3>
                  </motion.div>
                  <motion.div whileHover={{ y: -6 }} className="rounded-3xl bg-gradient-to-b from-orange-100 to-white p-5 text-slate-900 shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">Printing ERP</p>
                    <h3 className="mt-2 text-[11px] font-semibold">Quotation · Job Cards · Dispatch</h3>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ── ABOUT ── */}
          <section
            id="about"
            className="w-full bg-white px-6 py-20 md:px-10 xl:px-16"
            aria-labelledby="about-heading"
          >
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.5fr),minmax(0,1.5fr)] lg:items-start">
              <motion.div {...fadeInUp(0)} className="flex flex-col gap-6 border-l-2 border-sky-500/60 pl-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">About Us</p>
                <h2 id="about-heading" className="text-xl font-semibold text-slate-900 sm:text-2xl md:text-3xl">
                  20+ Years Building Software
                  <span className="block text-sky-600">for Real Indian Businesses.</span>
                </h2>
                <p className="text-sm text-slate-700 sm:text-base">
                  Based in Coimbatore, Tamil Nadu, we specialize in industry-specific business software — not generic tools. Every product we build is designed around the actual workflows of garment factories, dairy cooperatives, retail shops, and print businesses.
                </p>
              </motion.div>

              <motion.div {...fadeInUp(0.05)} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-[#f7f9ff] p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Who We Are</p>
                    <p className="mt-3 text-sm text-slate-800">
                      A trusted software company from Coimbatore with a senior team of domain experts, engineers, and support staff who understand Indian business needs — including GST, Tamil language, UPI, and rural connectivity challenges.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-[#f7f9ff] p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Our Specialization</p>
                    <p className="mt-3 text-sm text-slate-800">
                      Garments &amp; Apparel ERP. Milk &amp; Dairy Procurement Software. POS Point of Sale. Printing Industry ERP/MIS. All products are GST-compliant, customizable, and built for Tamil Nadu and Indian businesses.
                    </p>
                  </div>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Why Businesses Choose Us</p>
                  <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-slate-800">
                    <div>✓ 20+ years domain experience</div>
                    <div>✓ 200+ businesses served</div>
                    <div>✓ GST & Indian compliance built-in</div>
                    <div>✓ Tamil &amp; multi-language support</div>
                    <div>✓ On-premise or cloud deployment</div>
                    <div>✓ Dedicated post-launch support</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ── PRODUCTS ── */}
          <section
            id="products"
            className="w-full bg-[#f2f5fb] px-6 py-20 md:px-10 xl:px-16"
            aria-labelledby="products-heading"
          >
            <motion.div {...fadeInUp(0)} className="mb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Our Products</p>
              <h2 id="products-heading" className="mt-1 text-xl font-semibold text-slate-900 sm:text-2xl md:text-3xl">
                Ready-to-Deploy Industry Software
              </h2>
              <p className="mt-2 max-w-3xl text-sm text-slate-700 sm:text-base">
                Four complete, battle-tested products — each built for a specific Indian industry. GST-compliant, customizable, and available on-premise or cloud.
              </p>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-2">

              {/* Garments ERP */}
              <motion.article {...fadeInUp(0.04)} className="rounded-3xl border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)] overflow-hidden" aria-labelledby="product-garments">
                <div className="bg-gradient-to-r from-sky-600 to-indigo-600 px-6 pt-6 pb-10 text-white">
                  <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
                    Garments &amp; Apparel
                  </span>
                  <h3 id="product-garments" className="mt-3 text-lg font-semibold sm:text-xl">Garments ERP / MES Software</h3>
                  <p className="mt-2 text-sm text-sky-100">
                    A complete manufacturing ERP + MES covering the entire apparel lifecycle. Ideal for knitwear factories in Tirupur, export houses, and uniform manufacturers across Tamil Nadu.
                  </p>
                </div>
                <div className="px-6 py-5 -mt-4">
                  <div className="rounded-2xl bg-[#f7f9ff] border border-slate-100 p-4 grid grid-cols-2 gap-3 text-xs text-slate-700">
                    <div>
                      <p className="font-semibold text-slate-900 mb-2">Core Modules</p>
                      <ul className="space-y-1">
                        <li>• Style &amp; BOM Management</li>
                        <li>• Merchandising &amp; T&amp;A Calendar</li>
                        <li>• Fabric &amp; Trim Procurement</li>
                        <li>• Cutting &amp; Sewing Floor Tracking</li>
                        <li>• Quality Control – AQL / Inline</li>
                        <li>• Packing &amp; Export Documentation</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-2">Advanced Features</p>
                      <ul className="space-y-1">
                        <li>• Apparel Costing &amp; Margin Analysis</li>
                        <li>• Barcode &amp; RFID Bundle Tracking</li>
                        <li>• Sewing Machine IoT Integration</li>
                        <li>• Line Efficiency &amp; SAM Tracking</li>
                        <li>• GST &amp; Export Documentation</li>
                        <li>• Multi-factory Cloud Dashboard</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-3 text-[11px] text-slate-500">
                    <strong>Suitable for:</strong> Knitwear · Woven · Denim · Uniform · Export Houses · Fast Fashion
                  </p>
                </div>
              </motion.article>

              {/* Milk Procurement */}
              <motion.article {...fadeInUp(0.06)} className="rounded-3xl border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)] overflow-hidden" aria-labelledby="product-milk">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-6 pt-6 pb-10 text-white">
                  <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
                    Dairy &amp; Milk Procurement
                  </span>
                  <h3 id="product-milk" className="mt-3 text-lg font-semibold sm:text-xl">Milk Procurement Software</h3>
                  <p className="mt-2 text-sm text-emerald-50">
                    Built for dairy cooperatives and collection centers across Tamil Nadu. Handles farmer payments, fat/SNF quality testing, offline sync, and Aadhaar-based UPI payments.
                  </p>
                </div>
                <div className="px-6 py-5 -mt-4">
                  <div className="rounded-2xl bg-[#f7f9ff] border border-slate-100 p-4 grid grid-cols-2 gap-3 text-xs text-slate-700">
                    <div>
                      <p className="font-semibold text-slate-900 mb-2">Core Modules</p>
                      <ul className="space-y-1">
                        <li>• Farmer Registration &amp; ID Management</li>
                        <li>• Morning / Evening Milk Collection</li>
                        <li>• Fat &amp; SNF Quality Testing</li>
                        <li>• Auto Rate Calculation</li>
                        <li>• Farmer Payment &amp; Bank Transfer</li>
                        <li>• Route &amp; Milk Tanker Logistics</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-2">Advanced Features</p>
                      <ul className="space-y-1">
                        <li>• Milk Analyzer Device Integration</li>
                        <li>• Offline Sync – Rural Area Ready</li>
                        <li>• Aadhaar &amp; UPI Farmer Payments</li>
                        <li>• Chilling Center / BMC Module</li>
                        <li>• Farmer Mobile App (Android)</li>
                        <li>• Tamil Language UI Support</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-3 text-[11px] text-slate-500">
                    <strong>Suitable for:</strong> Cooperatives · Private Dairies · Collection Centers · Dairy Plants
                  </p>
                </div>
              </motion.article>

              {/* POS */}
              <motion.article {...fadeInUp(0.08)} className="rounded-3xl border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)] overflow-hidden" aria-labelledby="product-pos">
                <div className="bg-gradient-to-r from-violet-600 to-purple-700 px-6 pt-6 pb-10 text-white">
                  <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
                    Retail &amp; Point of Sale
                  </span>
                  <h3 id="product-pos" className="mt-3 text-lg font-semibold sm:text-xl">POS – Point of Sale Software</h3>
                  <p className="mt-2 text-sm text-violet-100">
                    A complete billing, inventory, and customer management platform. GST-ready with UPI, barcode billing, and offline mode — perfect for textile shops, supermarkets, restaurants, and pharmacies in Tamil Nadu.
                  </p>
                </div>
                <div className="px-6 py-5 -mt-4">
                  <div className="rounded-2xl bg-[#f7f9ff] border border-slate-100 p-4 grid grid-cols-2 gap-3 text-xs text-slate-700">
                    <div>
                      <p className="font-semibold text-slate-900 mb-2">Core Modules</p>
                      <ul className="space-y-1">
                        <li>• Fast Barcode &amp; Touch Billing</li>
                        <li>• Multi-payment: UPI / Card / Cash</li>
                        <li>• Real-time Stock Management</li>
                        <li>• Customer Profiles &amp; Loyalty Points</li>
                        <li>• GST Invoice &amp; e-Invoice</li>
                        <li>• Shift &amp; Employee Management</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-2">Specialized Modes</p>
                      <ul className="space-y-1">
                        <li>• Restaurant: Table / KOT / Delivery</li>
                        <li>• Pharmacy: Expiry &amp; Batch Tracking</li>
                        <li>• Retail: Offers, Coupons &amp; Memberships</li>
                        <li>• Multi-branch Sync &amp; Cloud POS</li>
                        <li>• Offline + Online Auto-sync Mode</li>
                        <li>• AI Demand Forecasting</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-3 text-[11px] text-slate-500">
                    <strong>Suitable for:</strong> Supermarkets · Textile Shops · Restaurants · Pharmacies · Retail Chains
                  </p>
                </div>
              </motion.article>

              {/* Printing ERP */}
              <motion.article {...fadeInUp(0.10)} className="rounded-3xl border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)] overflow-hidden" aria-labelledby="product-printing">
                <div className="bg-gradient-to-r from-orange-500 to-rose-600 px-6 pt-6 pb-10 text-white">
                  <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
                    Printing Industry
                  </span>
                  <h3 id="product-printing" className="mt-3 text-lg font-semibold sm:text-xl">Printing Industry ERP / MIS Software</h3>
                  <p className="mt-2 text-sm text-orange-50">
                    A specialized ERP/MIS for print shops — from quotation and prepress to production, finishing, and dispatch. Supports offset, digital, packaging, label, and screen printing businesses.
                  </p>
                </div>
                <div className="px-6 py-5 -mt-4">
                  <div className="rounded-2xl bg-[#f7f9ff] border border-slate-100 p-4 grid grid-cols-2 gap-3 text-xs text-slate-700">
                    <div>
                      <p className="font-semibold text-slate-900 mb-2">Core Modules</p>
                      <ul className="space-y-1">
                        <li>• Auto Estimation &amp; Quotation</li>
                        <li>• Job Order &amp; Work Order Management</li>
                        <li>• Prepress &amp; Artwork Approval</li>
                        <li>• Machine Scheduling &amp; Production</li>
                        <li>• Paper / Ink / Plate Inventory</li>
                        <li>• GST Billing &amp; Finance Module</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-2">Advanced Features</p>
                      <ul className="space-y-1">
                        <li>• Machine Runtime &amp; IoT Monitoring</li>
                        <li>• QC – Color, Density, Alignment</li>
                        <li>• Web-to-Print Customer Portal</li>
                        <li>• WhatsApp Quotation Sharing</li>
                        <li>• Multi-plant Cloud Management</li>
                        <li>• Predictive Maintenance &amp; Analytics</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-3 text-[11px] text-slate-500">
                    <strong>Suitable for:</strong> Offset · Digital · Packaging · Label · Flexo · Screen Printing
                  </p>
                </div>
              </motion.article>
            </div>

            <motion.div {...fadeInUp(0.12)} className="mt-8 rounded-3xl bg-gradient-to-br from-sky-600 via-sky-500 to-indigo-600 p-6 text-white text-center shadow-[0_20px_60px_rgba(15,23,42,0.25)]">
              <p className="text-base font-semibold">All products include GST support, multi-user roles, reporting dashboards, and can be fully customized for your business.</p>
              <p className="mt-1 text-sm text-sky-100">Available on-premise, cloud, or hybrid deployment. Post-launch support included.</p>
              <button
                onClick={() => scrollToId('contact')}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 shadow-md transition hover:bg-sky-50"
              >
                Request a Free Demo
              </button>
            </motion.div>
          </section>

          {/* ── SERVICES / HOW WE WORK ── */}
          <section
            id="services"
            className="w-full bg-white px-6 py-20 md:px-10 xl:px-16"
            aria-labelledby="services-heading"
          >
            <motion.div {...fadeInUp(0)} className="mb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Services</p>
              <h2 id="services-heading" className="mt-1 text-xl font-semibold text-slate-900 sm:text-2xl md:text-3xl">
                What We Offer Beyond Products
              </h2>
              <p className="mt-2 max-w-3xl text-sm text-slate-700 sm:text-base">
                Beyond our core products, we provide end-to-end services to ensure your software runs perfectly for your business.
              </p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: 'Custom Software Development',
                  badge: 'Custom',
                  color: 'bg-sky-50 text-sky-700',
                  desc: 'Need something beyond our products? We design and build fully custom web applications tailored to your specific industry workflows, data models, and compliance requirements.',
                },
                {
                  title: 'Software Customization',
                  badge: 'Customize',
                  color: 'bg-indigo-50 text-indigo-700',
                  desc: 'Every business is different. We customize our products — adding modules, adjusting workflows, creating custom reports, and integrating with your existing tools.',
                },
                {
                  title: 'Implementation & Training',
                  badge: 'Training',
                  color: 'bg-emerald-50 text-emerald-700',
                  desc: 'We handle the full implementation — data migration, staff training, user manuals, and go-live support. Your team will be confident from day one.',
                },
                {
                  title: 'Annual Maintenance & Support',
                  badge: 'Support',
                  color: 'bg-amber-50 text-amber-700',
                  desc: 'Post-launch support with dedicated account managers. Regular updates, bug fixes, feature enhancements, and priority helpdesk for all our clients.',
                },
              ].map((s) => (
                <motion.div
                  key={s.title}
                  {...fadeInUp(0.04)}
                  className="rounded-3xl border border-slate-200 bg-[#f7f9ff] p-6 shadow-[0_16px_45px_rgba(15,23,42,0.07)]"
                >
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium ${s.color}`}>
                    {s.badge}
                  </span>
                  <h3 className="mt-3 text-sm font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-xs text-slate-700 sm:text-sm">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── PROCESS ── */}
          <section
            id="process"
            className="w-full bg-[#f2f5fb] px-6 py-20 md:px-10 xl:px-16"
            aria-labelledby="process-heading"
          >
            <motion.div {...fadeInUp(0)} className="mb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Our Process</p>
              <h2 id="process-heading" className="mt-1 text-lg font-semibold text-slate-900 sm:text-xl">
                How We Deliver Your Software
              </h2>
              <p className="mt-2 max-w-3xl text-sm text-slate-700 sm:text-base">
                A clear, structured delivery approach so you always know what is happening at every stage.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp(0.08)}
              className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:grid-cols-4"
            >
              {[
                { step: 'Discover', desc: 'We study your business workflows, pain points, and goals. Site visits, interviews, and process mapping — we understand your operations before writing a single line of code.' },
                { step: 'Configure & Customize', desc: 'We configure the right product for your business, customize modules, set up user roles, and connect any required integrations (accounting, devices, government portals).' },
                { step: 'Train & Launch', desc: 'Full staff training with hands-on sessions in your language. We handle data migration and go-live support so the transition is smooth for your team.' },
                { step: 'Support & Grow', desc: 'Dedicated post-launch support, periodic updates, and a roadmap for future enhancements as your business grows. Annual maintenance contracts available.' },
              ].map((item, i) => (
                <div key={item.step} className="flex flex-col min-h-[200px]">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f2f5fb] text-[11px] text-sky-700">
                      {i + 1}
                    </span>
                    {item.step}
                  </div>
                  <p className="mt-3 text-xs text-slate-700 sm:text-sm flex-1">{item.desc}</p>
                  <div className="mt-3 h-1 rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-400" />
                </div>
              ))}
            </motion.div>
          </section>

          {/* ── TESTIMONIALS ── */}
          <section
            id="testimonials"
            className="w-full overflow-x-hidden bg-[#eef2fb] px-6 py-20 md:px-10 xl:px-16"
            aria-labelledby="testimonials-heading"
          >
            <motion.div {...fadeInUp(0)} className="mb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-500">Client Testimonials</p>
              <h2 id="testimonials-heading" className="mt-2 text-xl font-semibold text-slate-900 sm:text-2xl md:text-3xl">
                What Our Clients Say
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-slate-700 sm:text-base">
                Businesses across Tamil Nadu and India share their experience working with Accurate Software Integrators.
              </p>
            </motion.div>

            <div className="w-full overflow-hidden">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                loop
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                breakpoints={{
                  640: { slidesPerView: 1, spaceBetween: 24 },
                  1024: { slidesPerView: 2, spaceBetween: 32 },
                }}
                className="!pb-14"
              >
                {reviews.map((r) => (
                  <SwiperSlide key={r.name}>
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_55px_rgba(15,23,42,0.1)] transition hover:shadow-[0_24px_60px_rgba(15,23,42,0.14)] md:p-7"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <StarRating rating={r.rating} />
                        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-medium text-emerald-700">Verified</span>
                      </div>
                      <blockquote className="mt-4 flex-1 text-sm text-slate-800 sm:text-base">
                        &ldquo;{r.quote}&rdquo;
                      </blockquote>
                      <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-sky-600 text-sm font-semibold text-white shadow-md">
                          {r.initials}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-slate-900">{r.name}</p>
                          <p className="text-xs text-slate-500">{r.role}</p>
                          <p className="mt-0.5 text-[11px] text-sky-600 font-medium">{r.company}</p>
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section
            id="faq"
            className="w-full bg-white px-6 py-20 md:px-10 xl:px-16"
            aria-labelledby="faq-heading"
          >
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)] lg:items-start">
              <motion.div {...fadeInUp(0)}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">FAQ</p>
                <h2 id="faq-heading" className="mt-2 text-lg font-semibold text-slate-900 sm:text-xl">
                  Frequently Asked Questions
                </h2>
                <p className="mt-2 max-w-xl text-sm text-slate-700 sm:text-base">
                  Common questions from garment factories, dairy businesses, retailers, and print shops before getting started.
                </p>

                <div className="mt-6 space-y-2" itemScope itemType="https://schema.org/FAQPage">
                  {faqs.map((item, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <motion.div
                        key={item.q}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: 0.03 * idx }}
                        className="overflow-hidden rounded-2xl border border-slate-200 bg-[#f7f9ff]"
                        itemScope
                        itemType="https://schema.org/Question"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? null : idx)}
                          className="flex w-full items-center justify-between px-4 py-3.5 text-left text-sm font-medium text-slate-900"
                          aria-expanded={isOpen}
                        >
                          <span itemProp="name">{item.q}</span>
                          <span className="ml-4 text-xl text-slate-400 flex-shrink-0" aria-hidden="true">
                            {isOpen ? '−' : '+'}
                          </span>
                        </button>
                        {isOpen && (
                          <div
                            className="border-t border-slate-200 px-4 py-3.5 text-sm text-slate-700"
                            itemScope
                            itemType="https://schema.org/Answer"
                            itemProp="acceptedAnswer"
                          >
                            <p itemProp="text">{item.a}</p>
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div
                {...fadeInUp(0.08)}
                className="flex h-full flex-col justify-between rounded-3xl bg-gradient-to-br from-sky-600 via-sky-500 to-indigo-600 p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.3)]"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-100/80">
                    Industry-specific · GST-ready · Tamil Nadu
                  </p>
                  <h3 className="mt-3 text-xl font-semibold sm:text-2xl">
                    The right software for your industry is ready to deploy.
                  </h3>
                  <p className="mt-3 text-sm text-sky-100">
                    Whether you run a garment factory in Tirupur, a dairy cooperative in a village, a retail shop in Coimbatore, or a print business anywhere — we have a product built for you.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-sky-100">
                    <li>✓ Garments ERP / MES</li>
                    <li>✓ Milk Procurement Software</li>
                    <li>✓ POS – Point of Sale</li>
                    <li>✓ Printing Industry ERP / MIS</li>
                  </ul>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => scrollToId('contact')}
                    className="rounded-full bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 shadow-md transition hover:bg-sky-50"
                  >
                    Get a Free Demo
                  </button>
                  <p className="text-[11px] text-sky-100/90">No commitment · We come to you</p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ── CONTACT ── */}
          <section
            id="contact"
            className="w-full bg-[#f2f5fb] px-6 py-20 md:px-10 xl:px-16"
            aria-labelledby="contact-heading"
          >
            <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr),minmax(0,1fr)] md:items-start">
              <motion.div {...fadeInUp(0)}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Contact Us
                </p>
                <h2 id="contact-heading" className="mt-3 text-xl font-semibold text-slate-900 sm:text-2xl md:text-3xl">
                  Get in Touch with Accurate Software Integrators
                </h2>
                <p className="mt-2 max-w-xl text-sm text-slate-700 sm:text-base">
                  Tell us about your business and which product you are interested in. We will come to your location for a free demo and consultation.
                </p>
                <div className="mt-6 space-y-3 text-sm text-slate-700">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-600 text-xs">📍</span>
                    <span>Coimbatore, Tamil Nadu, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-600 text-xs">📞</span>
                    <a href="tel:+910000000000" className="hover:text-sky-600 transition-colors">+91-00000-00000</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-600 text-xs">✉</span>
                    <a href="mailto:info@accuratesoftwareintegrators.com" className="hover:text-sky-600 transition-colors">info@accuratesoftwareintegrators.com</a>
                  </div>
                </div>
                <div className="mt-6 rounded-2xl bg-white border border-slate-200 p-4 text-xs text-slate-600">
                  <p className="font-semibold text-slate-800 mb-2">We serve clients across:</p>
                  <p>Coimbatore · Tirupur · Chennai · Erode · Salem · Madurai · Trichy · Tamil Nadu · Pan India</p>
                </div>
              </motion.div>

              <motion.form
                {...fadeInUp(0.05)}
                className="space-y-3 text-sm rounded-3xl bg-white border border-slate-200 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)]"
                onSubmit={(e) => e.preventDefault()}
                aria-label="Contact form"
              >
                <h3 className="text-base font-semibold text-slate-900 mb-4">Request a Free Demo</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-1 block text-xs font-medium text-slate-800">
                      Your Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      className="w-full rounded-xl border border-slate-300 bg-[#f2f5fb] px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="mb-1 block text-xs font-medium text-slate-800">
                      Phone Number <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      className="w-full rounded-xl border border-slate-300 bg-[#f2f5fb] px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1 block text-xs font-medium text-slate-800">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    className="w-full rounded-xl border border-slate-300 bg-[#f2f5fb] px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="contact-business" className="mb-1 block text-xs font-medium text-slate-800">
                    Business Name &amp; Location
                  </label>
                  <input
                    id="contact-business"
                    type="text"
                    className="w-full rounded-xl border border-slate-300 bg-[#f2f5fb] px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20"
                    placeholder="Your business name, city"
                  />
                </div>
                <div>
                  <label htmlFor="contact-product" className="mb-1 block text-xs font-medium text-slate-800">
                    Product You Are Interested In <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <select
                    id="contact-product"
                    required
                    className="w-full rounded-xl border border-slate-300 bg-[#f2f5fb] px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20"
                  >
                    <option value="">Select a product…</option>
                    <option value="garments">Garments ERP / MES</option>
                    <option value="milk">Milk Procurement Software</option>
                    <option value="pos">POS – Point of Sale Software</option>
                    <option value="printing">Printing Industry ERP / MIS</option>
                    <option value="custom">Custom Software Development</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-1 block text-xs font-medium text-slate-800">
                    Tell Us About Your Business
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    className="w-full rounded-xl border border-slate-300 bg-[#f2f5fb] px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20"
                    placeholder="Describe your business, number of users, current challenges, and what you need from the software."
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 w-full inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-md transition hover:bg-sky-700"
                >
                  Send Message & Request Demo
                </button>
              </motion.form>
            </div>
          </section>
        </main>

        {/* ── FOOTER ── */}
        <footer className="w-full bg-slate-900 text-slate-200" role="contentinfo">
          <div className="w-full px-6 py-12 md:px-10 xl:px-16">
            <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)] md:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
                  Accurate Software Integrators
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  Business Software<br />
                  <span className="text-sky-400">Built for India.</span>
                </h3>
                <p className="mt-3 max-w-md text-sm text-slate-300">
                  Garments ERP, Milk Procurement Software, POS, and Printing ERP — trusted by businesses across Tamil Nadu and India for 20+ years.
                </p>
                <p className="mt-4 text-xs text-slate-400">
                  📍 Coimbatore, Tamil Nadu, India &nbsp;·&nbsp;
                  <a href="tel:+910000000000" className="hover:text-white transition-colors">+91-00000-00000</a> &nbsp;·&nbsp;
                  <a href="mailto:info@accuratesoftwareintegrators.com" className="hover:text-white transition-colors">info@accuratesoftwareintegrators.com</a>
                </p>
              </div>
              <div className="grid gap-6 text-xs text-slate-300 sm:grid-cols-3">
                <div>
                  <p className="font-semibold text-white mb-2">Our Products</p>
                  <button onClick={() => scrollToId('products')} className="block mt-1 hover:text-white transition-colors text-left">Garments ERP / MES</button>
                  <button onClick={() => scrollToId('products')} className="block mt-1 hover:text-white transition-colors text-left">Milk Procurement Software</button>
                  <button onClick={() => scrollToId('products')} className="block mt-1 hover:text-white transition-colors text-left">POS – Point of Sale</button>
                  <button onClick={() => scrollToId('products')} className="block mt-1 hover:text-white transition-colors text-left">Printing Industry ERP / MIS</button>
                </div>
                <div>
                  <p className="font-semibold text-white mb-2">Quick Links</p>
                  <button onClick={() => scrollToId('about')} className="block mt-1 hover:text-white transition-colors text-left">About Us</button>
                  <button onClick={() => scrollToId('services')} className="block mt-1 hover:text-white transition-colors text-left">Services</button>
                  <button onClick={() => scrollToId('testimonials')} className="block mt-1 hover:text-white transition-colors text-left">Client Testimonials</button>
                  <button onClick={() => scrollToId('faq')} className="block mt-1 hover:text-white transition-colors text-left">FAQ</button>
                  <button onClick={() => scrollToId('contact')} className="block mt-1 hover:text-white transition-colors text-left">Contact / Demo</button>
                </div>
                <div>
                  <p className="font-semibold text-white mb-2">Legal</p>
                  <button onClick={() => setShowPrivacy(true)} className="block mt-1 hover:text-white transition-colors text-left">Privacy Policy</button>
                  <button onClick={() => setShowTerms(true)} className="block mt-1 hover:text-white transition-colors text-left">Terms &amp; Conditions</button>
                  <p className="mt-4 text-slate-400">
                    GST Reg: XXXXXXXXXXXX<br />
                    Coimbatore, Tamil Nadu
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-slate-800 pt-5 text-[11px] text-slate-500">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <p>© {new Date().getFullYear()} Accurate Software Integrators. All rights reserved. | Coimbatore, Tamil Nadu, India</p>
                <p>Garments ERP · Milk Software · POS · Printing ERP</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
}

export default App;