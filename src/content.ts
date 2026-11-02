/**
 * Aadvik Gemini — Portfolio Content & Data Definitions
 * Strict fidelity to user's identity as a CS & AI/ML student at Newton School of Technology (NST).
 */

import { siteConfig } from './config';

export interface NavItem {
  label: string;
  href: string;
}

export interface LearningInterest {
  title: string;
  category: string;
  desc: string;
  icon: string;
}

export interface PersonalGoal {
  id: number;
  goal: string;
  category: 'Mastery' | 'Projects' | 'Community' | 'Venture';
  focus: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  tagline: string;
  category: string;
  badge: string;
  status: 'In Development' | 'Active';
  hasLiveDemo: boolean;
  demoLabel: string;
  description: string;
  specificNotice?: string;
  team?: string;
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

export interface SkillItem {
  name: string;
  category: 'Programming' | 'Frontend' | 'Tools' | 'Areas of Interest';
  status: 'Learning' | 'Practicing' | 'Exploring' | 'Building With';
  description: string;
  focusArea: string;
  iconName: string;
}

export interface JourneyMilestone {
  period: string;
  headline: string;
  description: string;
  area: string;
  tags: string[];
  isCurrent?: boolean;
}

export interface HackathonActivity {
  id: string;
  name: string;
  year: string;
  category: 'Hackathon' | 'Innovation Challenge' | 'Team Project' | 'Technical Learning';
  projectOrActivity: string;
  teamRole: string;
  status: string;
  statusType: 'participation' | 'submission' | 'in-progress';
  description: string;
  takeaway: string;
  tech: string[];
}

export interface ExploringTopic {
  id: string;
  topic: string;
  status: string;
  shortDescription: string;
  focusTrack: string;
  relatedProjects?: string;
  tags: string[];
}

// Navigation links matching user specification
export const navigationItems: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Activities', href: '#activities' },
  { label: 'Exploring', href: '#exploring' },
  { label: 'Contact', href: '#contact' },
];

export const heroContent = {
  smallIntro: 'COMPUTER SCIENCE STUDENT • BUILDER • TECHNOLOGY ENTHUSIAST',
  headline: ['Learning.', 'Building.', 'Innovating.'],
  supportingText:
    "I'm Aadvik, a CS student at Newton School of Technology exploring AI, cybersecurity, and software development. I love turning ideas into real-world projects and building things that solve meaningful problems.",
  statusIndicator: siteConfig.personal.status,
  primaryBtn: {
    label: 'Explore My Projects',
    href: '#projects',
  },
  secondaryBtn: {
    label: "Let's Connect",
    href: '#contact',
  },
  socialLinks: {
    github: siteConfig.socials.github,
    linkedin: siteConfig.socials.linkedin,
    email: siteConfig.socials.email,
  },
};

export const aboutContent = {
  heading: 'More Than Just Code',
  subheading: 'ABOUT ME & MY ASPIRATIONS',
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
    period: 'Current Undergraduate',
    location: 'Delhi NCR, India',
    note: 'Focused on hands-on software development, systems thinking, and applied artificial intelligence from day one.',
  },
  currentInterests: [
    { title: 'Artificial Intelligence & ML', category: 'Specialization', desc: 'Understanding core models, neural pipelines, and intelligent interfaces.', icon: 'Brain' },
    { title: 'Cybersecurity', category: 'Systems & Security', desc: 'Exploring network defense, packet analysis, and OWASP principles.', icon: 'Shield' },
    { title: 'Web Development', category: 'Engineering', desc: 'Crafting responsive, accessible, and high-performance user experiences.', icon: 'Layout' },
    { title: 'Software Engineering', category: 'Foundations', desc: 'Mastering clean code, modular architectures, and algorithm design.', icon: 'Code' },
    { title: 'Hackathons', category: 'Innovation', desc: 'Testing ideas against real clocks and building collaborative solutions.', icon: 'Trophy' },
    { title: 'Startup Building', category: 'Venture', desc: 'Transforming student pain points into functional products with real users.', icon: 'Rocket' },
    { title: 'Open Source', category: 'Ecosystem', desc: 'Learning collaborative Git workflows and aiming for impactful public contributions.', icon: 'GitPullRequest' },
    { title: 'Entrepreneurship', category: 'Impact', desc: 'Understanding product-market fit, student utilities, and sustainable leverage.', icon: 'Compass' },
  ],
  longTermGoals: [
    { id: 1, goal: 'Become a skilled software developer', category: 'Mastery', focus: 'Mastering algorithmic problem-solving and software architecture' },
    { id: 2, goal: 'Build meaningful real-world projects', category: 'Projects', focus: 'Shipping practical tools that solve everyday friction for real users' },
    { id: 3, goal: 'Participate in national and international hackathons', category: 'Community', focus: 'Competing with diverse builder teams on global stages' },
    { id: 4, goal: 'Contribute to open-source projects', category: 'Community', focus: 'Giving back to developer tools and public repositories' },
    { id: 5, goal: 'Explore Google Summer of Code', category: 'Mastery', focus: 'Diving deep into mentored open-source engineering under GSoC' },
    { id: 6, goal: 'Build startups and innovative technology products', category: 'Venture', focus: 'Validating early-stage concepts into sustainable ventures' },
    { id: 7, goal: 'Develop expertise in cybersecurity and AI', category: 'Mastery', focus: 'Securing automated systems and mastering intelligent defenses' },
  ] as PersonalGoal[],
};

export const projectsContent: {
  heading: string;
  subheading: string;
  note: string;
  items: ProjectDetail[];
} = {
  heading: "Things I'm Building",
  subheading: 'PROJECT SHOWCASE',
  note: 'Authentic student engineering projects and concepts. Clearly labeled to reflect genuine development status.',
  items: [
    {
      id: 'roomrush',
      title: 'RoomRush',
      tagline: 'Hostel Marketplace & Student Pickup Concept',
      category: 'Startup / Web Development',
      badge: 'Campus Venture',
      status: 'In Development',
      hasLiveDemo: false,
      demoLabel: 'Coming Soon',
      description:
        'A hostel marketplace concept designed to help students discover products available in student-run hostel shops and arrange convenient self-pickup.',
      specificNotice: 'Important: RoomRush is a student self-pickup marketplace, not a delivery service.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Local Storage', 'Responsive UX'],
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
      title: 'NST Academic Notes Extension',
      tagline: 'Centralized Academic Access for Students',
      category: 'Productivity / Browser Extension',
      badge: 'Student Productivity',
      status: 'In Development',
      hasLiveDemo: false,
      demoLabel: 'Coming Soon',
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
      title: 'SIH 2026 LiDAR Mapping',
      tagline: 'Adaptive Variable-Resolution 2.5D Mapping Concept',
      category: 'Hackathon / Smart Vehicle Software',
      badge: 'SIH 2026 • Team ENIX',
      status: 'In Development',
      hasLiveDemo: false,
      demoLabel: 'Coming Soon',
      description:
        'A Smart India Hackathon project concept focused on adaptive variable-resolution 2.5D LiDAR mapping.',
      team: 'Team ENIX',
      tech: ['Python', 'Point Cloud Data', 'Algorithmic Geometry', '2.5D Elevation Grid', 'Sensor Processing'],
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
      title: 'Personal Developer Portfolio',
      tagline: 'Interactive Showcase of Journey & Projects',
      category: 'Web Development',
      badge: 'Active Build',
      status: 'In Development',
      hasLiveDemo: true,
      demoLabel: 'Live View',
      description:
        'My personal portfolio showcasing my learning journey, projects, interests, and development goals.',
      tech: ['React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
      overview:
        'Built from scratch to serve as a digital footprint that accurately represents my stage as an ambitious CS student, learning in public, and experimenting with software.',
      problem:
        'Many student portfolios rely on generic templates with exaggerated claims and meaningless percentage bars, failing to reflect genuine curiosity and hands-on learning.',
      solution:
        'A custom-built, responsive portfolio with dark editorial aesthetics, authentic milestone tracking, honest skill indicators, and a clean configuration architecture.',
      contribution:
        'Designed the entire user experience, wrote modular React components, implemented smooth scroll and particle canvas interactions, and configured responsive styles.',
      currentStatus: 'Active & Continuously Updated — adding new project updates, hackathon milestones, and learning logs as I progress.',
      futureImprovements: [
        'Interactive code playground for lightweight algorithm visualizers',
        'Automated GitHub repository activity feed integration',
        'Expanded cybersecurity lab write-ups section',
      ],
      githubUrl: siteConfig.projects.portfolio.githubUrl,
      liveUrl: '#hero',
    },
  ],
};

export const skillsContent = {
  heading: 'My Tech Stack',
  subheading: 'SKILLS & CAPABILITIES',
  note: 'Honest assessment of my current learning progress. Grouped by discipline with no arbitrary percentage bars.',
  categories: ['All', 'Programming', 'Frontend', 'Tools', 'Areas of Interest'] as const,
  items: [
    // Programming
    {
      name: 'Python',
      category: 'Programming',
      status: 'Practicing',
      description: 'Core language for scripting, algorithmic problem-solving, and AI/ML experiments.',
      focusArea: 'Logic building, file I/O, automation scripts, and data structures.',
      iconName: 'Terminal',
    },
    {
      name: 'C++',
      category: 'Programming',
      status: 'Learning',
      description: 'Building strong foundations in memory models, pointers, and performance-critical code.',
      focusArea: 'Memory management, OOP fundamentals, and standard template library (STL).',
      iconName: 'Cpu',
    },
    {
      name: 'JavaScript',
      category: 'Programming',
      status: 'Building With',
      description: 'Used for dynamic web scripting, DOM manipulation, and interactive application logic.',
      focusArea: 'ES6+ syntax, asynchronous programming (Promises/async-await), and event handling.',
      iconName: 'Code2',
    },
    // Frontend
    {
      name: 'HTML5',
      category: 'Frontend',
      status: 'Building With',
      description: 'Writing clean, semantic, and accessible markup for modern web experiences.',
      focusArea: 'Semantic tags, SEO foundations, accessibility (ARIA), and structured layouts.',
      iconName: 'FileCode',
    },
    {
      name: 'CSS3 / Modern Styling',
      category: 'Frontend',
      status: 'Building With',
      description: 'Styling interfaces using modern CSS, Flexbox, CSS Grid, and custom animations.',
      focusArea: 'Flexbox, Grid, CSS variables, fluid typography, and transitions.',
      iconName: 'Palette',
    },
    {
      name: 'Responsive Design',
      category: 'Frontend',
      status: 'Building With',
      description: 'Ensuring seamless usability across mobile, tablet, laptop, and ultra-wide displays.',
      focusArea: 'Mobile-first breakpoints, touch-friendly UI, and responsive image scaling.',
      iconName: 'Smartphone',
    },
    // Tools
    {
      name: 'Git',
      category: 'Tools',
      status: 'Practicing',
      description: 'Managing source code changes, branching workflows, and commit hygiene.',
      focusArea: 'Branching, merging, commit discipline, and resolving conflicts.',
      iconName: 'GitBranch',
    },
    {
      name: 'GitHub',
      category: 'Tools',
      status: 'Practicing',
      description: 'Hosting project code, collaborating with teammates, and exploring open source.',
      focusArea: 'Repositories, issues, pull requests, and collaborative code reviews.',
      iconName: 'Github',
    },
    {
      name: 'VS Code',
      category: 'Tools',
      status: 'Building With',
      description: 'Primary code editor configured with linting, formatting, and debugging workflows.',
      focusArea: 'Extensions, workspace settings, integrated terminal, and productivity shortcuts.',
      iconName: 'Monitor',
    },
    {
      name: 'Terminal / CLI',
      category: 'Tools',
      status: 'Practicing',
      description: 'Navigating Unix environments, running scripts, and managing package dependencies.',
      focusArea: 'Bash navigation, shell commands, SSH basics, and process monitoring.',
      iconName: 'CommandLine',
    },
    // Areas of Interest
    {
      name: 'Artificial Intelligence',
      category: 'Areas of Interest',
      status: 'Exploring',
      description: 'Understanding intelligent agents, heuristic search, and foundational AI principles.',
      focusArea: 'Agent concepts, search algorithms, and intelligent systems design.',
      iconName: 'Sparkles',
    },
    {
      name: 'Machine Learning',
      category: 'Areas of Interest',
      status: 'Learning',
      description: 'Studying statistical learning models, feature engineering, and model evaluation.',
      focusArea: 'Supervised/unsupervised algorithms, evaluation metrics, and basic neural nets.',
      iconName: 'Brain',
    },
    {
      name: 'Cybersecurity',
      category: 'Areas of Interest',
      status: 'Exploring',
      description: 'Investigating defense principles, secure coding standards, and vulnerability analysis.',
      focusArea: 'OWASP top 10, network reconnaissance, and defense-in-depth concepts.',
      iconName: 'ShieldCheck',
    },
    {
      name: 'Web Development',
      category: 'Areas of Interest',
      status: 'Building With',
      description: 'Creating full-featured client applications with responsive design and modern tooling.',
      focusArea: 'Modern frontend frameworks, component architecture, and API integration.',
      iconName: 'Globe',
    },
    {
      name: 'Software Engineering',
      category: 'Areas of Interest',
      status: 'Practicing',
      description: 'Applying methodical software practices, testing basics, and modular system design.',
      focusArea: 'Clean code principles, design patterns, and sustainable project architecture.',
      iconName: 'Layers',
    },
  ] as SkillItem[],
};

export const journeyContent = {
  heading: 'The Journey So Far',
  subheading: 'TIMELINE & MILESTONES',
  note: 'A chronological view of my computer science trajectory, learning focus, and hands-on milestones.',
  milestones: [
    {
      period: '2026',
      headline: 'Started Computer Science Journey at NST',
      description:
        'Commenced my undergraduate degree in Computer Science / AI & ML at Newton School of Technology (NST), Rishihood University. Focused on building deep foundations in programming, algorithmic thinking, and core systems.',
      area: 'Core Computer Science',
      tags: ['Newton School of Technology', 'Rishihood University', 'CS Foundations'],
      isCurrent: false,
    },
    {
      period: '2026',
      headline: 'Began Exploring Programming, Web & AI/ML',
      description:
        'Initiated daily coding practice in Python and C++, studying memory allocation, data structures, and object-oriented paradigms, while diving into modern responsive web interfaces.',
      area: 'Programming & Web Dev',
      tags: ['Python', 'C++', 'Modern Web', 'Data Structures'],
      isCurrent: false,
    },
    {
      period: '2026',
      headline: 'Participated in Hackathon Projects & Problem Solving',
      description:
        'Engaged in collaborative hackathon environments. Formed team ENIX for Smart India Hackathon 2026 to tackle adaptive LiDAR mapping and participated in sprint-based problem statements.',
      area: 'Hackathons & Teamwork',
      tags: ['SIH 2026', 'Team ENIX', 'Sprint Hacking', 'Collaborative Builds'],
      isCurrent: false,
    },
    {
      period: '2026',
      headline: 'Started Developing Startup & Productivity Concepts',
      description:
        'Conceptualized RoomRush—a self-pickup student marketplace for hostel dorm shops—and designed the NST Academic Notes browser extension to solve genuine everyday campus friction.',
      area: 'Student Utilities & Startups',
      tags: ['RoomRush', 'NST Notes Extension', 'Product Ideation', 'Campus Solutions'],
      isCurrent: false,
    },
    {
      period: 'Present',
      headline: 'Learning, Building & Exploring Cybersecurity',
      description:
        'Continuously refining technical fundamentals, practicing algorithms, building practical software projects, and diving into foundational cybersecurity concepts and open-source ecosystems.',
      area: 'Continuous Growth & Cybersecurity',
      tags: ['Cybersecurity Labs', 'Open Source', 'Algorithm Practice', 'Active Building'],
      isCurrent: true,
    },
  ] as JourneyMilestone[],
};

export const hackathonsContent = {
  heading: 'Beyond the Classroom',
  subheading: 'HACKATHONS & ACTIVITIES',
  note: 'Hands-on participation, collaborative hackathons, and technical problem-solving sprints. Transparently documented with no exaggerated claims.',
  items: [
    {
      id: 'sih-2026',
      name: 'Smart India Hackathon 2026',
      year: '2026',
      category: 'Hackathon',
      projectOrActivity: 'Adaptive Variable-Resolution 2.5D LiDAR Mapping Concept',
      teamRole: 'Software & Algorithm Concept Contributor (Team ENIX)',
      status: 'Participation / Concept Submission',
      statusType: 'submission',
      description:
        'Collaborated with Team ENIX to formulate an adaptive variable-resolution 2.5D LiDAR processing pipeline aimed at optimizing spatial point cloud efficiency for smart vehicle software.',
      takeaway:
        'Gained valuable experience in sensor data paradigms, team role distribution under technical requirements, and structuring competitive proposals.',
      tech: ['Python', 'LiDAR Data', 'Algorithmic Geometry', 'Team ENIX'],
    },
    {
      id: 'nst-construct-hackathon',
      name: 'NST Construct Hackathon',
      year: '2026',
      category: 'Hackathon',
      projectOrActivity: 'Rapid Campus Solution Prototyping',
      teamRole: 'Frontend Prototyping & Product Ideation',
      status: 'Hackathon Participant',
      statusType: 'participation',
      description:
        'High-intensity on-campus engineering hackathon focused on taking student friction points and engineering functional prototypes under strict time constraints.',
      takeaway:
        'Learned how to prioritize the critical path of an MVP, make swift architectural trade-offs, and pitch technical ideas clearly.',
      tech: ['Rapid Prototyping', 'JavaScript', 'Tailwind CSS', 'User Testing'],
    },
    {
      id: 'dtu-vivekananda-hackathon',
      name: 'DTU Vivekananda Innovation Hackathon 2026',
      year: '2026',
      category: 'Innovation Challenge',
      projectOrActivity: 'Practical Technological Innovation Challenge',
      teamRole: 'Team Collaborator & Research',
      status: 'Participant / Project Submission',
      statusType: 'submission',
      description:
        'Participated in an inter-college innovation challenge exploring tech-driven approaches to everyday community and academic workflow improvements.',
      takeaway:
        'Interacted with diverse peer teams, gathered perspective on problem framing, and deepened commitment to building software that solves practical issues.',
      tech: ['Innovation Sprint', 'Collaborative Research', 'System Design'],
    },
  ] as HackathonActivity[],
};

export const currentlyExploringContent = {
  heading: 'Currently Exploring',
  subheading: "DEVELOPER'S LEARNING DASHBOARD",
  note: 'A transparent view into the technical topics I am actively studying, practicing, and building projects around.',
  topics: [
    {
      id: 'topic-python',
      topic: 'Python Programming',
      status: 'Active Practice',
      shortDescription: 'Mastering idioms, standard libraries, scripting automation, and preparing for algorithmic problem-solving.',
      focusTrack: 'Algorithms, automation, and backend scripting foundations.',
      relatedProjects: 'Scripting tools, data manipulation & basic network utilities',
      tags: ['Language', 'Daily Practice', 'Algorithms'],
    },
    {
      id: 'topic-cpp',
      topic: 'C++ Fundamentals',
      status: 'Core Study',
      shortDescription: 'Deepening understanding of low-level memory layout, pointer mechanics, references, and object-oriented design.',
      focusTrack: 'Memory management, pointers, and performance-first thinking.',
      relatedProjects: 'Console data structure implementations & memory lab exercises',
      tags: ['Systems', 'Memory', 'CS Core'],
    },
    {
      id: 'topic-dsa',
      topic: 'Data Structures & Algorithms',
      status: 'Continuous Practice',
      shortDescription: 'Practicing arrays, linked lists, stacks, queues, trees, graphs, sorting techniques, and Big-O complexity.',
      focusTrack: 'Time/space complexity analysis and disciplined problem decomposition.',
      relatedProjects: 'Algorithmic problem-solving repository',
      tags: ['DSA', 'Problem Solving', 'Complexity'],
    },
    {
      id: 'topic-cybersecurity',
      topic: 'Cybersecurity Fundamentals',
      status: 'Exploring & Labs',
      shortDescription: 'Learning fundamental defensive security concepts, OWASP security principles, and common threat vectors.',
      focusTrack: 'Secure code practices, authentication basics, and vulnerability identification.',
      relatedProjects: 'Hands-on security lab exercises & protocol inspection',
      tags: ['Security', 'Defensive', 'OWASP'],
    },
    {
      id: 'topic-networking',
      topic: 'Networking',
      status: 'Hands-on Discovery',
      shortDescription: 'Studying the OSI model, TCP/IP stack, DNS resolution, HTTP/HTTPS protocol headers, and packet flows.',
      focusTrack: 'Client-server communications, socket basics, and network traffic traces.',
      relatedProjects: 'Socket scripting experiments & packet inspection tools',
      tags: ['Protocols', 'TCP/IP', 'Sockets'],
    },
    {
      id: 'topic-backend',
      topic: 'Backend Development',
      status: 'Early Building',
      shortDescription: 'Exploring RESTful API design principles, server runtimes, request-response lifecycles, and database integration.',
      focusTrack: 'Endpoints, routing, JSON validation, and simple persistent stores.',
      relatedProjects: 'API prototype endpoints & database connection tests',
      tags: ['APIs', 'Server', 'Architecture'],
    },
    {
      id: 'topic-aiml',
      topic: 'Artificial Intelligence & ML',
      status: 'Specialization Track',
      shortDescription: 'Studying mathematical intuitions behind machine learning, linear models, classification metrics, and neural nets.',
      focusTrack: 'Supervised learning workflows, feature sets, and model evaluation.',
      relatedProjects: 'Introductory ML notebooks & predictive experimentation',
      tags: ['AI/ML', 'NST Specialization', 'Neural Nets'],
    },
    {
      id: 'topic-opensource',
      topic: 'Open Source',
      status: 'Getting Started',
      shortDescription: 'Learning public repository navigation, issue tracking etiquette, documentation reading, and Git pull request hygiene.',
      focusTrack: 'Community collaboration, contributing guidelines, and open source exploration.',
      relatedProjects: 'Preparing for initial repository contributions & GSoC research',
      tags: ['Community', 'Git', 'GSoC Aspirations'],
    },
  ] as ExploringTopic[],
};

export const contactContent = {
  heading: "Have an Idea? Let's Build Something.",
  subheading: 'CONNECT & COLLABORATE',
  supportingText:
    "I'm always interested in learning, collaborating, exploring new ideas, and building meaningful projects.",
  location: siteConfig.contact.location,
  email: siteConfig.contact.email,
  displayEmail: siteConfig.contact.displayEmail,
  socials: siteConfig.socials,
  formNotice: siteConfig.contact.formNotice,
};

export const footerContent = {
  name: siteConfig.personal.name,
  tagline: 'Learning • Building • Innovating',
  quote: 'Designed and built with curiosity.',
  socials: siteConfig.socials,
};
