export const site = {
  name: "Jethro Katigbak Mandalones",
  shortName: "Jethro",
  title: "BS Information Systems Graduate | Business Analytics Major | Web Developer",
  tagline: "I Build Modern Digital Solutions",
  intro:
    "Information Systems graduate passionate about web development, business analytics, and creating innovative solutions that solve real-world problems.",
  location: "San Pablo City, Laguna, Philippines",
  email: "Mandalonesjeth748@gmail.com",
  phone: "0945 730 2942",
  avatar: "/images/jethroooo.jpg",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const heroTechBadges = ["Laravel", "React", "MySQL", "Business Analytics"];

export const aboutText =
  "I am a graduate of Bachelor of Science in Information Systems with a specialization in Business Analytics. Throughout my academic journey, I gained experience in web development, database management, system analysis, and business intelligence. I enjoy transforming ideas into functional digital solutions and continuously improving my technical and analytical skills.";

export const aboutStats = [
  { title: "BSIS Graduate", subtitle: "Information Systems", icon: "graduation-cap" },
  { title: "Dean's Lister", subtitle: "Academic Excellence", icon: "award" },
  { title: "IS Club VP", subtitle: "Student Leadership", icon: "users" },
  { title: "Leadership Awardee", subtitle: "Recognized Excellence", icon: "trophy" },
] as const;

export type SkillCategory = {
  title: string;
  icon: string;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "layout-template",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Bootstrap", level: 85 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
  {
    title: "Backend",
    icon: "server",
    skills: [
      { name: "PHP", level: 85 },
      { name: "Laravel", level: 88 },
    ],
  },
  {
    title: "Database",
    icon: "database",
    skills: [{ name: "MySQL", level: 88 }],
  },
  {
    title: "Tools",
    icon: "wrench",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "XAMPP", level: 85 },
    ],
  },
  {
    title: "Analytics",
    icon: "bar-chart-3",
    skills: [
      { name: "Business Analytics", level: 85 },
      { name: "Data Visualization", level: 82 },
      { name: "Predictive Analytics", level: 78 },
    ],
  },
];

export type Project = {
  id: string;
  number: string;
  title: string;
  description: string;
  technologies: string[];
  gradient: string;
};

export const projects: Project[] = [
  {
    id: "inventory-demand-forecasting",
    number: "01",
    title: "Inventory Demand Forecasting System",
    description:
      "A predictive analytics system developed for Joshua's Meat Products Inc. that forecasts inventory demand using historical sales data and business intelligence techniques.",
    technologies: ["Laravel", "PHP", "MySQL", "Chart.js"],
    gradient: "from-violet-600/30 via-purple-600/20 to-fuchsia-500/20",
  },
  {
    id: "succor-haven",
    number: "02",
    title: "Succor Haven",
    description:
      "A student support and learning platform featuring AI tutoring, scheduling, notifications, and educational management tools.",
    technologies: ["Flutter", "Riverpod", "Firebase"],
    gradient: "from-cyan-500/25 via-blue-600/20 to-violet-600/20",
  },
  {
    id: "business-analytics-dashboard",
    number: "03",
    title: "Business Analytics Dashboard",
    description:
      "An interactive dashboard that visualizes business performance metrics, KPIs, and data insights for decision-making.",
    technologies: ["Laravel", "MySQL", "Chart.js"],
    gradient: "from-fuchsia-500/25 via-violet-600/20 to-indigo-600/20",
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/jethskii", icon: "github" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Facebook", href: "#", icon: "facebook" },
];
