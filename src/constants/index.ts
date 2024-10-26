import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,

    starbucks,
    tesla,
   
    carrent,
    jobit,
    tripguide,
    threejs,
   
 

  
    
    

  

  } from "../assets";
  import tour from "../assets/tour.png";
  import
  job from "../assets/job.png";
  import home from "../assets/home.png";


 
  
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Learner",
      icon: mobile,
    },
    {
      title: "  AI/ML enthusiast",
      icon: backend,
    },
    {
      title: "Power BI Analyst",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company_name: "Intrainz",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2023 - April 2023",
      points: [
        " Aligned designs with brand aesthetics and UX principles, ensuring a visually cohesive and user-friendly experience.",
        " Used React to build interactive components, enhancing the website's responsiveness and interactivity for a seamless user experience",
        "Built responsive layouts with HTML and CSS for cross-device consistency.",
        "Enhanced UX by focusing on performance and accessibility..",
      ],
    },
    {
      title: "Data Analyst Intern ",
      company_name: "Wistride",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        " Ensured data accuracy and consistency by removing errors and standardizing information.",
        "Conducted calculations, generated reports, and tracked key performance indicators efficiently.",
        "Created insightful, interactive dashboards to visualize trends and performance metrics",
        " Provided data-driven insights to support decision-making with regularly updated visualizations and summaries",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  
const projects = [
  {
    name: "Elderly Care",
    description:
      "Elderly Care is a user-friendly platform enabling seniors to book and schedule doctor appointments at nearby hospitals for essential services like diabetes care and dialysis, with options to book additional helper assistance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://eldcare.vercel.app/",
  },
  {
    name: "AI INTERVIEW MOCKER",
    description:
      "The Next.js project conducts virtual interviews with live mic and video, generating role-specific questions based on years of experience and job description, then provides targeted feedback for improvement based on responses.",
    tags: [
      {
        name: "next js",
        color: "blue-text-gradient",
      },
      {
        name: "drizzle",
        color: "green-text-gradient",
      },
      {
        name: "clerk",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://ai-mock-interview.vercel.app/sign-in?redirect_url=https%3A%2F%2Fai-mock-interview.vercel.app%2Fdashboard",
  },
  {
    name: "Podcastr",
    description:
      "Podcastr, built with Next.js, lets users create engaging podcasts by selecting an AI voice, writing a brief description, choosing a category, and generating the content through AI, making it accessible for everyone to enjoy.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "clerk",
        color: "green-text-gradient",
      },
      {
        name: "convex",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },

  {
    name: "Tour Planner/Scheduler",
    description:
      "Experience the world like never before with our tour booking system, where you can explore a diverse range of customizable tours across various global destinations, tailored to accommodate any number of participants, all while enjoying a seamless booking experience and secure payment processing through Stripe to ensure your transactions are safe and hassle-free",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: tour,
    source_code_link: "https://github.com/Aryan05032004/MernStack-Tour-Management-main",
  },

  {
    name: "Job Portal",
    description:
      "Discover your dream job on our comprehensive job portal, where you can filter listings by salary ranges and work schedules—whether you’re looking for full-time, part-time, daily, or weekly opportunities—allowing you to find the perfect role that matches your preferences and financial expectations, ensuring a tailored job search experience that meets your unique needs",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: job,
    source_code_link: "https://github.com/Aryan05032004/JOB-PORTAL",
  },
  
  {
    name: "Home service ",
    description:
      "Home service is a user-friendly platform enabling users to book and schedule services like plumbing, electrical, and carpentry, with options to book additional helper assistance.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image:home,
    source_code_link: "https://github.com/Aryan05032004/JOB-PORTAL",
  },
];
  
  export { services, technologies, experiences, testimonials, projects };