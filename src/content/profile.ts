import type { Profile } from "@/lib/types";

export const profile: Profile = {
  name: "Liam Feiz",
  role: "Senior Full-Stack & AI Developer",
  location: "San Jose, CA",
  email: "liamfeiz@protonmail.com",
  phone: "+1 817 779 4073",
  summary:
    "Full-stack and AI developer building production web applications with Python (FastAPI), React/Next.js, Node.js, and TypeScript. Experience across e-commerce (Shopify, WooCommerce), WordPress, financial analytics, and telemedicine products, with a focus on clean architecture, API design, and performance optimization. Experienced in containerized development and in integrating AI capabilities into user-facing products.",
  nav: [
    { href: "#work", label: "Work" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ],
  skills: [
    {
      label: "Languages",
      items: ["Python", "JavaScript", "TypeScript", "C#", "Go"],
    },
    {
      label: "Frontend",
      items: ["React", "Next.js", "Responsive UI design"],
    },
    {
      label: "Backend & APIs",
      items: [
        "Node.js",
        "FastAPI",
        "REST API design",
        "API integrations",
        "Authentication",
      ],
    },
    {
      label: "Databases",
      items: ["PostgreSQL", "MongoDB", "SQL", "Supabase", "Firebase"],
    },
    {
      label: "E-commerce & CMS",
      items: ["Shopify", "WooCommerce", "WordPress", "HubSpot CRM integration"],
    },
    {
      label: "AI",
      items: ["AI-powered product recommendations", "AI feature integration"],
    },
    {
      label: "DevOps & Practices",
      items: [
        "Docker",
        "Containerized development",
        "Cloud deployment",
        "Clean architecture",
        "Performance optimization",
      ],
    },
  ],
  featuredWork: [
    {
      id: "financial-analytics",
      title: "Financial analytics dashboard",
      summary:
        "Financial data integration, backend APIs, and cloud deployment for an analytics product used to inspect and act on financial signals.",
      tags: ["Python", "FastAPI", "PostgreSQL", "Cloud"],
    },
    {
      id: "telemedicine",
      title: "Telemedicine platform",
      summary:
        "Patient–provider communication, mobile app, backend integration, and data management for a clinical product workflow.",
      tags: ["React", "Node.js", "APIs", "Data management"],
    },
    {
      id: "ai-ecommerce",
      title: "AI-powered e-commerce",
      summary:
        "Shopify-integrated storefront with AI-driven product recommendations and performance optimization.",
      tags: ["Shopify", "AI", "Next.js", "Performance"],
    },
  ],
  experience: [
    {
      id: "boldspan",
      title: "AI-Powered Full-Stack Developer",
      company: "BoldSpan Technologies",
      location: "Toronto, Ontario, Canada",
      start: "May 2024",
      end: "Aug 2025",
      highlights: [
        "Built a financial analytics dashboard, including financial data integration, backend APIs, and cloud deployment.",
        "Developed a telemedicine platform with a mobile app, backend integration, patient–provider communication, and data management.",
        "Delivered an AI-powered e-commerce solution with Shopify integration, AI-driven product recommendations, and performance optimization.",
      ],
      technologies: [
        "Python",
        "FastAPI",
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "Docker",
        "REST APIs",
        "Shopify",
        "AI integrations",
      ],
    },
    {
      id: "litz",
      title: "WordPress Developer & Designer",
      company: "Litz Digital",
      location: "Manchester, New Hampshire, United States",
      start: "Apr 2021",
      end: "Dec 2022",
      highlights: [
        "Built a searchable research library with interactive maps on correctional oversight, using responsive design and accessible content management.",
        "Developed a custom trip calculator that estimates pet transportation costs, integrated with HubSpot CRM and an e-commerce checkout.",
        "Designed and built a responsive website for luxury residences.",
        "Created a custom WordPress site with responsive layouts for a lifestyle blog.",
      ],
      technologies: [
        "WordPress",
        "HubSpot CRM",
        "E-commerce",
        "API integrations",
      ],
    },
    {
      id: "yohdev",
      title: "Shopify & eCommerce Developer",
      company: "YohDev",
      location: "Winston-Salem, North Carolina, United States",
      start: "May 2019",
      end: "Jan 2021",
      highlights: [
        "Migrated an e-commerce store between WooCommerce and Shopify.",
        "Migrated a CMS and rebuilt the website on WordPress.",
        "Redesigned a website and carried out an SEO overhaul.",
        "Modernized a custom ERP system.",
        "Rebuilt a website and added job-application analytics.",
        "Developed a custom analytics and QR-code tracking plugin.",
      ],
      technologies: [
        "WordPress",
        "WooCommerce",
        "Shopify",
        "Custom plugins",
        "API integrations",
      ],
    },
  ],
  education: [
    {
      school: "Santa Clara University",
      degree: "Bachelor of Science in Computer Science",
      location: "Santa Clara, CA",
      start: "Sep 2014",
      end: "Sep 2017",
      detail: "GPA: 4.0",
    },
  ],
};
