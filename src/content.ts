/**
 * Aadvik Gemini — Personal Portfolio Content & Telemetry
 * Infused with SELENE's celestial / aerospace design language.
 */

import { siteConfig } from './config';

export const brand = {
  name: 'Aadvik Gemini',
  wordmark: 'AADVIK GEMINI',
  initials: 'AG',
  role: 'CS & AI/ML Student @ Newton School of Technology (NST)',
  university: 'Rishihood University',
  location: 'Delhi NCR · 28.98°N 77.06°E',
  email: siteConfig.contact.email,
  github: siteConfig.socials.github,
  linkedin: siteConfig.socials.linkedin,
};

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Trajectory', href: '#trajectory' },
  { label: 'Skills', href: '#skills' },
  { label: 'Beyond', href: '#activities' },
  { label: 'Exploring', href: '#exploring' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  title: 'AADVIK GEMINI',
  kicker: 'COMPUTER SCIENCE STUDENT • BUILDER • TECHNOLOGY ENTHUSIAST',
  headline: 'Learning. Building. Innovating.',
  supporting:
    "I'm Aadvik, a CS student at Newton School of Technology exploring AI, cybersecurity, and software development. I love turning ideas into real-world projects and building things that solve meaningful problems.",
  site: 'Newton School of Technology · 28.98°N 77.06°E',
  status: 'CURRENTLY LEARNING & BUILDING',
};

export const about = {
  eyebrow: 'Identity & Foundations',
  heading: 'More Than Just Code.',
  paragraphs: [
    "I'm a Computer Science student at Newton School of Technology with a growing interest in AI, cybersecurity, and software development.",
    'I enjoy exploring new technologies, participating in hackathons, experimenting with ideas, and building projects that solve practical problems.',
    "I'm currently focused on strengthening my programming fundamentals, learning how software systems work, and turning my ideas into functional products.",
    "My journey is just beginning, and I'm excited about what I can build next.",
  ],
  education: {
    school: 'Newton School of Technology (NST)',
    university: 'Rishihood University',
    degree: 'B.Tech in Computer Science & AI / ML',
    period: 'Class of 2028 · Undergraduate',
    location: 'Delhi NCR, India',
    note: 'Rigorous computer science curriculum emphasizing low-level systems, algorithmic problem solving, and modern intelligent applications.',
  },
  interests: [
    { title: 'Artificial Intelligence & ML', category: 'Specialization', desc: 'Understanding core models, neural pipelines, and intelligent interfaces.' },
    { title: 'Cybersecurity', category: 'Systems & Security', desc: 'Exploring network defense, packet analysis, and OWASP principles.' },
    { title: 'Web Development', category: 'Engineering', desc: 'Crafting responsive, accessible, and high-performance user experiences.' },
    { title: 'Software Engineering', category: 'Foundations', desc: 'Mastering clean code, modular architectures, and algorithm design.' },
    { title: 'Hackathons', category: 'Innovation', desc: 'Testing ideas against real clocks and building collaborative solutions.' },
    { title: 'Startup Building', category: 'Venture', desc: 'Transforming student pain points into functional products with real users.' },
    { title: 'Open Source', category: 'Ecosystem', desc: 'Learning collaborative Git workflows and aiming for impactful public contributions.' },
    { title: 'Entrepreneurship', category: 'Impact', desc: 'Understanding product-market fit, student utilities, and sustainable leverage.' },
  ],
  goals: [
    { id: '01', goal: 'Become a skilled software developer', focus: 'Mastering algorithmic problem-solving and software architecture' },
    { id: '02', goal: 'Build meaningful real-world projects', focus: 'Shipping practical tools that solve everyday friction for real users' },
    { id: '03', goal: 'Participate in national and international hackathons', focus: 'Competing with diverse builder teams on global stages' },
    { id: '04', goal: 'Contribute to open-source projects', focus: 'Giving back to developer tools and public repositories' },
    { id: '05', goal: 'Explore Google Summer of Code', focus: 'Diving deep into mentored open-source engineering under GSoC' },
    { id: '06', goal: 'Build startups and innovative technology products', focus: 'Validating early-stage concepts into sustainable ventures' },
    { id: '07', goal: 'Develop expertise in cybersecurity and AI', focus: 'Securing automated systems and mastering intelligent defenses' },
  ],
};

export interface ProjectDetail {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  category: string;
  status: string;
  hasLiveDemo: boolean;
  demoLabel: string;
  description: string;
  specificNotice?: string;
  team?: string;
  image: string;
  tech: string[];
  overview: string;
  problem: string;
  solution: string;
  contribution: string;
  currentStatus: string;
  futureImprovements: string[];
  githubUrl: string;
  liveUrl: string;
}

export const projects = {
  eyebrow: 'Mission Log · Builds',
  heading: "Things I'm Building.",
  body: 'Authentic student engineering projects and prototypes, frame by frame. Labeled with genuine development status.',
  items: [
    {
      id: 'roomrush',
      tag: 'BUILD-01',
      title: 'RoomRush',
      subtitle: 'Hostel Marketplace & Student Pickup Concept',
      category: 'Startup / Web Development',
      status: 'In Development',
      hasLiveDemo: false,
      demoLabel: 'Coming Soon',
      image: '/media/cards/m3-base.webp',
      description:
        'A hostel marketplace concept designed to help students discover products available in student-run hostel shops and arrange convenient self-pickup.',
      specificNotice: 'Important: RoomRush is a student self-pickup marketplace, not a delivery service.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Local Storage', 'Mobile UX'],
      overview:
        'RoomRush addresses the common campus problem of late-night snack and essentials shortages. By cataloging student-run micro shops across hostel blocks, students can browse what is currently open and pick up items directly.',
      problem:
        'Hostel students frequently need supplies after main campus shops close. While multiple peers operate informal room shops, there is zero inventory visibility, forcing buyers to walk between floors and knock blindly.',
      solution:
        'A lightweight web directory where room shop owners toggle open/closed status and list current inventory (snacks, stationery, hygiene essentials) for fast, peer-to-peer self-pickup.',
      contribution:
        'Conceptualized the platform model, designed the mobile-friendly user flow, and built the early interactive prototype with instant item categorization.',
      currentStatus: 'In Development — refining UI workflow and testing prototype feedback among hostel peers.',
      futureImprovements: [
        'Real-time WhatsApp / Telegram pickup confirmation notifications',
        'Batch shop owner authentication and catalog update dashboards',
        'Hostel block filtering (e.g. R1, R2, R3, R4) with live room status',
      ],
      githubUrl: siteConfig.projects.roomrush.githubUrl,
      liveUrl: siteConfig.projects.roomrush.liveUrl,
    },
    {
      id: 'nst-notes-extension',
      tag: 'BUILD-02',
      title: 'NST Academic Notes Extension',
      subtitle: 'Centralized Academic Access for Students',
      category: 'Productivity / Browser Extension',
      status: 'In Development',
      hasLiveDemo: false,
      demoLabel: 'Coming Soon',
      image: '/media/cards/m2-orbit.webp',
      description:
        'A proposed browser extension concept to help NST students access and organize academic notes more conveniently instead of downloading lecture materials individually.',
      tech: ['JavaScript', 'WebExtensions API', 'HTML5', 'CSS3', 'Storage API'],
      overview:
        'Navigating fragmented portals, lecture slide drives, and disparate subject links creates needless friction before study sessions. This extension aims to bring all course notes into a single browser overlay.',
      problem:
        'Students spend excessive time manually digging through scattered folders, messaging peers for PDFs, and downloading duplicated copies of slides across multiple courses.',
      solution:
        'A lightweight Chrome/Edge browser extension that indexes subject folders, provides 1-click preview of syllabus modules, and maintains quick bookmarks to essential study decks.',
      contribution:
        'Defined the extension architecture, designed the popup interaction layout, and researched WebExtensions API permission structures.',
      currentStatus: 'In Development — structuring Manifest v3 extension bundle and testing UI prototypes.',
      futureImprovements: [
        'Subject-wise offline caching for frequently viewed reference sheets',
        'Quick search filter for lecture topics and assignment deadlines',
        'Integration with verified peer-shared study guides',
      ],
      githubUrl: siteConfig.projects.nstNotesExtension.githubUrl,
      liveUrl: siteConfig.projects.nstNotesExtension.liveUrl,
    },
    {
      id: 'sih-lidar-mapping',
      tag: 'BUILD-03',
      title: 'SIH 2026 LiDAR Mapping',
      subtitle: 'Adaptive Variable-Resolution 2.5D Mapping Concept',
      category: 'Hackathon / Smart Vehicle Software',
      team: 'Team ENIX',
      status: 'In Development',
      hasLiveDemo: false,
      demoLabel: 'Coming Soon',
      image: '/media/cards/m1-launch.webp',
      description:
        'A Smart India Hackathon project concept focused on adaptive variable-resolution 2.5D LiDAR mapping.',
      tech: ['Python', 'Point Cloud Data', 'Algorithmic Geometry', '2.5D Elevation Grid'],
      overview:
        'Smart vehicle navigation and obstacle detection demand efficient spatial mapping without overwhelming onboard processing units. This concept explores dynamic resolution adjustments based on vehicle speed and terrain complexity.',
      problem:
        'Standard uniform 3D LiDAR point cloud processing introduces high computational latency and memory bottlenecks, making real-time autonomous path planning computationally expensive.',
      solution:
        'An adaptive 2.5D spatial representation that dynamically increases resolution in high-risk proximity zones while compressing distant or planar terrain data.',
      contribution:
        'Collaborated with Team ENIX on the software concept, algorithmic pipeline research, and problem statement presentation architecture for SIH 2026.',
      currentStatus: 'In Development / Concept Phase — researching point cloud downsampling and elevation grid mapping algorithms.',
      futureImprovements: [
        'Simulation benchmarking on synthetic vehicle telemetry datasets',
        'Optimized bounding box algorithms for real-time edge hardware',
        'Comparative latency analysis against standard fixed-grid approaches',
      ],
      githubUrl: siteConfig.projects.sihLidar.githubUrl,
      liveUrl: siteConfig.projects.sihLidar.liveUrl,
    },
    {
      id: 'personal-portfolio',
      tag: 'BUILD-04',
      title: 'Personal Developer Portfolio',
      subtitle: 'Celestial Telemetry & Interactive Profile',
      category: 'Web Development',
      status: 'Active Build',
      hasLiveDemo: true,
      demoLabel: 'Live View',
      image: '/media/cards/m4-walk.webp',
      description:
        'My personal portfolio showcasing my learning journey, projects, interests, and development goals.',
      tech: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Lenis', 'Michroma Font'],
      overview:
        'Built from scratch to serve as a digital footprint that accurately represents my stage as an ambitious CS student, learning in public, and experimenting with software.',
      problem:
        'Many student portfolios rely on generic templates with exaggerated claims and meaningless percentage bars, failing to reflect genuine curiosity and hands-on learning.',
      solution:
        'A custom-built, responsive portfolio with dark editorial aesthetics, authentic milestone tracking, honest skill indicators, and a clean configuration architecture.',
      contribution:
        'Designed the user experience, implemented single-rAF scroll kinematics with Lenis, styled with Michroma typography, and deployed live to production.',
      currentStatus: 'Active & Continuously Updated — adding new project updates, hackathon milestones, and learning logs as I progress.',
      futureImprovements: [
        'Interactive code playground for lightweight algorithm visualizers',
        'Automated GitHub repository activity feed integration',
        'Expanded cybersecurity lab write-ups section',
      ],
      githubUrl: siteConfig.projects.portfolio.githubUrl,
      liveUrl: siteConfig.projects.portfolio.liveUrl,
    },
  ] as ProjectDetail[],
};

/** Trajectory flight path from Earth to Moon mapped to Aadvik's engineering trajectory */
export const trajectory = {
  eyebrow: 'Engineering Flight Path',
  heading: '384,400 km of compounding skills, drawn as you scroll.',
  legs: [
    {
      day: 'Phase 01',
      title: 'Computer Science Foundations @ NST',
      body: 'Enrolled at Newton School of Technology (NST), Rishihood University. Drilling core programming in Python, memory pointers in C++, and discrete mathematics.',
      stat: 'Core CS · First Principles',
    },
    {
      day: 'Phase 02',
      title: 'Modern Web & Practical Prototyping',
      body: 'Mastered responsive UI architecture with React, TypeScript, and Tailwind CSS. Shipped working campus prototypes including the RoomRush marketplace concept and NST Notes extension.',
      stat: 'RoomRush · Notes Ext',
    },
    {
      day: 'Phase 03',
      title: 'Hackathon Arena & Team ENIX',
      body: 'Formed Team ENIX for Smart India Hackathon 2026 to tackle adaptive variable-resolution 2.5D LiDAR mapping. Participated in high-velocity 24-48h sprint problem solving.',
      stat: 'SIH 2026 · Team ENIX',
    },
    {
      day: 'Phase 04',
      title: 'Systems Security & Continuous Exploration',
      body: 'Expanding into defensive cybersecurity, network sockets, packet traces, and open-source contributions. Preparing for bigger engineering frontiers and GSoC.',
      stat: 'Cybersecurity · Open Source',
    },
  ],
};

export const skillsData = {
  eyebrow: 'Tech Stack & Arsenal',
  heading: 'Honest Capabilities.',
  note: 'Orbital rings indicate focus intensity. Zero fake percentage bars.',
  classes: [
    {
      name: 'Programming & Logic',
      days: 3, // renders 3 orbit rings
      badge: 'Core Foundation',
      skills: ['Python (Daily Driver & ML)', 'C++ (Memory & Pointers)', 'JavaScript (ES6+ & Web)'],
      status: 'Practicing & Building',
      cta: 'Explore Code Repo',
    },
    {
      name: 'Frontend & Architecture',
      days: 4, // renders 4 orbit rings
      badge: 'Primary Build Track',
      featured: true,
      skills: ['HTML5 Semantic Markup', 'CSS3 / Tailwind CSS v4', 'Responsive Mobile-First UI', 'Single rAF Kinematics'],
      status: 'Building With',
      cta: 'Inspect Layouts',
    },
    {
      name: 'Tools & Systems Security',
      days: 3, // renders 3 orbit rings
      badge: 'DevOps & Defense',
      skills: ['Git & GitHub Workflows', 'VS Code & Unix Terminal', 'Cybersecurity Fundamentals', 'Networking & Sockets'],
      status: 'Exploring & Practicing',
      cta: 'View Lab Notes',
    },
  ],
};

export const hackathonsData = {
  eyebrow: 'Beyond the Classroom',
  heading: 'Hackathons & Initiatives.',
  note: 'Documented with transparent status — distinguishing concept submissions, participation, and active prototypes.',
  items: [
    {
      id: 'sih-2026',
      name: 'Smart India Hackathon 2026',
      year: '2026',
      badge: 'SIH 2026',
      category: 'National Hackathon',
      project: 'Adaptive Variable-Resolution 2.5D LiDAR Mapping',
      teamRole: 'Software & Algorithm Contributor (Team ENIX)',
      status: 'Participation / Concept Submission',
      desc: 'Collaborated with Team ENIX to formulate an adaptive 2.5D LiDAR spatial processing pipeline aimed at optimizing point cloud processing for smart vehicle software.',
      takeaway: 'Gained hands-on experience in sensor data geometry and structuring competitive technical proposals.',
    },
    {
      id: 'nst-construct',
      name: 'NST Construct Hackathon',
      year: '2026',
      badge: 'Campus Sprint',
      category: 'Prototyping Sprint',
      project: 'Rapid Campus Solution Prototyping',
      teamRole: 'Frontend Prototyping & Product Ideation',
      status: 'Hackathon Participant',
      desc: 'High-intensity on-campus engineering hackathon focused on transforming student friction points into functional prototypes under clock pressure.',
      takeaway: 'Never spend 6 hours debating architecture you can validate with real users in 30 minutes.',
    },
    {
      id: 'dtu-vivekananda',
      name: 'DTU Vivekananda Innovation Hackathon',
      year: '2026',
      badge: 'Inter-College',
      category: 'Innovation Challenge',
      project: 'Practical Innovation Challenge',
      teamRole: 'Team Collaborator & Research',
      status: 'Participant / Project Submission',
      desc: 'Participated in an inter-college innovation challenge exploring tech-driven approaches to everyday community and academic workflow improvements.',
      takeaway: 'Interacted with diverse peer teams and deepened commitment to building software that solves practical issues.',
    },
  ],
};

export const currentlyExploringData = {
  eyebrow: 'Developer Telemetry',
  heading: 'Currently Exploring.',
  note: 'A transparent view into the technical topics I am actively studying, practicing, and building projects around.',
  topics: [
    { id: 'exp-1', title: 'Python Programming', track: 'Active Practice', desc: 'Mastering idioms, scripts, file I/O, algorithmic logic, and preparing for ML data handling.' },
    { id: 'exp-2', title: 'C++ Fundamentals', track: 'Core Study', desc: 'Pointers, memory management, stack vs heap allocation, and standard template library (STL).' },
    { id: 'exp-3', title: 'Data Structures & Algorithms', track: 'Continuous Practice', desc: 'Arrays, linked lists, trees, graphs, sorting algorithms, and Big-O time/space complexity analysis.' },
    { id: 'exp-4', title: 'Cybersecurity Fundamentals', track: 'Exploring & Labs', desc: 'Defensive security principles, OWASP Top 10 vulnerabilities, authentication, and secure coding.' },
    { id: 'exp-5', title: 'Networking Protocols', track: 'Hands-on Discovery', desc: 'TCP/IP stack, OSI layers, DNS resolution, HTTP/HTTPS headers, and client-server socket communication.' },
    { id: 'exp-6', title: 'Backend Architecture', track: 'Early Building', desc: 'RESTful API principles, request-response lifecycles, JSON validation, and simple database persistence.' },
    { id: 'exp-7', title: 'Artificial Intelligence & ML', track: 'Specialization Track', desc: 'Mathematical foundations of machine learning, classification, evaluation metrics, and neural nets.' },
    { id: 'exp-8', title: 'Open Source', track: 'Getting Started', desc: 'Navigating public GitHub repositories, issue triage, documentation reading, and preparing for GSoC.' },
  ],
};

export const contactData = {
  eyebrow: 'Connect & Manifest',
  heading: 'Put your name on the manifest.',
  body: 'Whether you want to discuss a hackathon idea, early startup prototypes, or talk about AI and cybersecurity — I am always ready to connect with fellow ambitious builders.',
  windowLabel: 'Next hackathon / sprint window',
  window: '2027-01-15T00:00:00Z',
};
