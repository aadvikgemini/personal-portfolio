/**
 * ==============================================================================
 * PORTFOLIO CONFIGURATION FILE
 * ==============================================================================
 * All links, personal details, contact info, and project repository URLs
 * can be updated directly in this file without modifying component logic.
 */

export interface PortfolioConfig {
  personal: {
    name: string;
    headline: string[];
    tagline: string;
    bio: string;
    aboutStatement: string[];
    education: {
      degree: string;
      school: string;
      university: string;
      batch: string;
      location: string;
      highlights: string[];
    };
    status: string;
  };
  contact: {
    email: string;
    displayEmail: string;
    location: string;
    formNotice: string;
  };
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
  projects: {
    roomrush: {
      githubUrl: string;
      liveUrl: string;
    };
    nstNotesExtension: {
      githubUrl: string;
      liveUrl: string;
    };
    sihLidar: {
      githubUrl: string;
      liveUrl: string;
    };
    portfolio: {
      githubUrl: string;
      liveUrl: string;
    };
  };
}

export const siteConfig: PortfolioConfig = {
  personal: {
    name: 'Aadvik Gemini',
    headline: ['Learning.', 'Building.', 'Innovating.'],
    tagline: 'COMPUTER SCIENCE STUDENT • BUILDER • TECHNOLOGY ENTHUSIAST',
    bio: "I'm Aadvik, a CS student at Newton School of Technology exploring AI, cybersecurity, and software development. I love turning ideas into real-world projects and building things that solve meaningful problems.",
    aboutStatement: [
      "I'm a Computer Science student at Newton School of Technology with a growing interest in AI, cybersecurity, and software development.",
      "I enjoy exploring new technologies, participating in hackathons, experimenting with ideas, and building projects that solve practical problems.",
      "I'm currently focused on strengthening my programming fundamentals, learning how software systems work, and turning my ideas into functional products.",
      "My journey is just beginning, and I'm excited about what I can build next.",
    ],
    education: {
      degree: 'Computer Science / AI & ML',
      school: 'Newton School of Technology (NST)',
      university: 'Rishihood University',
      batch: 'Undergraduate Program',
      location: 'Delhi NCR, India',
      highlights: [
        'Curriculum emphasizing hands-on project execution, modern systems, and AI models',
        'Active participant in university hackathons and student engineering initiatives',
        'Strong focus on computer science fundamentals, data structures, and algorithms',
      ],
    },
    status: 'Currently learning & building',
  },
  contact: {
    email: 'aadvik.gemini@newtonschool.co',
    displayEmail: 'aadvik.gemini@newtonschool.co',
    location: 'Newton School of Technology, Rishihood University',
    formNotice:
      'Form triggers your email client directly via mailto. To hook up an automated backend (like Formspree or EmailJS), update endpoint in src/config.ts.',
  },
  socials: {
    github: 'https://github.com/aadvikgemini',
    linkedin: 'https://linkedin.com/in/aadvikgemini',
    email: 'mailto:aadvik.gemini@newtonschool.co',
  },
  projects: {
    roomrush: {
      githubUrl: 'https://github.com/aadvikgemini/roomrush-marketplace',
      liveUrl: '#', // Set your live demo URL when ready
    },
    nstNotesExtension: {
      githubUrl: 'https://github.com/aadvikgemini/nst-academic-notes-extension',
      liveUrl: '#', // Set your demo / Chrome Web Store URL when ready
    },
    sihLidar: {
      githubUrl: 'https://github.com/aadvikgemini/sih-2026-lidar-mapping',
      liveUrl: '#', // Set demo URL when ready
    },
    portfolio: {
      githubUrl: 'https://github.com/aadvikgemini/personal-portfolio',
      liveUrl: 'https://aadvik-portfolio.vercel.app',
    },
  },
};
