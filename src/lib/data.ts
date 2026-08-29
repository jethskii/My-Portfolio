import { withBasePath } from "./basePath";

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
  avatar: withBasePath("/images/jethroooo.jpg"),
  qualificationsPortrait: withBasePath("/images/Qualification.png"),
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

export type Certification = {
  title: string;
  issuer: string;
  date?: string;
  image?: string;
};

function certImage(path: string) {
  return withBasePath(encodeURI(path));
}

export const certifications: Certification[] = [
  {
    title: "Managing a Business Venture",
    issuer: "Cisco Networking Academy",
    date: "2025",
    image: certImage("/certificates/managingbusinessventure.png"),
  },
  {
    title: "AI in Data Analytics",
    issuer: "Department of Information and Communications Technology (DICT)",
    date: "2025",
    image: certImage("/certificates/DICT.png"),
  },
  {
    title: "Ethical Hacking and Data Security Seminar",
    issuer: "Pamantasan ng Lungsod ng San Pablo",
    date: "2025",
    image: certImage("/certificates/ethical hacking.png"),
  },
  {
    title: "Data Analytics for Accounting and Business Decision Making",
    issuer: "Pamantasan ng Lungsod ng San Pablo",
    date: "2026",
    image: certImage(
      "/certificates/Data Analytics for Accounting ang Business Decision Making.png"
    ),
  },
  {
    title: "Walang Iwanan sa Digital Bayanihan",
    issuer: "National ICT Month Celebration — Pamantasan ng Lungsod ng San Pablo",
    date: "2025",
    image: certImage("/certificates/digital bayanihan.png"),
  },
  {
    title: "Arduino Microprocessor Training",
    issuer: "Hands-on embedded systems and microcontroller training",
  },
  {
    title: "Stakeholder Conference",
    issuer: "Industry and academic stakeholder engagement",
  },
  {
    title: "On-the-Job Training — 486 Hours",
    issuer: "Alexa's Engineering Services",
  },
];

export const targetRoles = [
  "Business Analyst",
  "Data Analyst",
  "Systems Analyst",
  "IT Specialist",
  "Web Developer",
  "Software/Programming",
  "Business Intelligence",
  "Technical/Operations",
];

export type Qualification = {
  title: string;
  description: string;
  icon: string;
};

export const qualifications: Qualification[] = [
  {
    title: "Credentialed",
    description: "BS Information Systems Graduate",
    icon: "graduation-cap",
  },
  {
    title: "Specialized",
    description: "Major in Business Analytics",
    icon: "bar-chart-3",
  },
  {
    title: "Proven Hands-On",
    description:
      'Lead Programmer — "Web-Based Predictive Analytics & Inventory Forecasting System"',
    icon: "code",
  },
  {
    title: "Leadership-Capable",
    description: "IS Club Vice President",
    icon: "users",
  },
  {
    title: "High Performer",
    description: "Dean's Lister",
    icon: "star",
  },
];

export const academicCredential = {
  institution: "Pamantasan ng Lungsod ng San Pablo",
  degree: "BS Information Systems",
  major: "Major in Business Analytics",
  status: "Graduate",
  secondary: [
    { label: "IS Club Vice President", icon: "users" },
    { label: "Leadership Awardee", icon: "award" },
  ],
};

export type TechQualification = { name: string; icon: string };

export const technicalQualifications: TechQualification[] = [
  { name: "Laravel", icon: "layers" },
  { name: "PHP", icon: "file-code" },
  { name: "JavaScript", icon: "braces" },
  { name: "MySQL", icon: "database" },
  { name: "Git", icon: "git-branch" },
  { name: "GitHub", icon: "github" },
  { name: "VS Code", icon: "code-2" },
  { name: "Chart.js", icon: "bar-chart-3" },
  { name: "Flutter", icon: "smartphone" },
];

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

export type ProjectStatus = "Completed" | "In Progress" | "Production";

export type ProjectVideo =
  | { type: "drive"; fileId: string }
  | { type: "file"; src: string; poster?: string };

export type Project = {
  id: string;
  number: string;
  title: string;
  description: string;
  technologies: string[];
  gradient: string;
  image?: string;
  screenshots?: string[];
  video?: ProjectVideo;
  problemSolved?: string;
  keyFeatures?: string[];
  challenges?: string;
  myRole?: string;
  status?: ProjectStatus;
  liveDemo?: string;
  githubRepo?: string;
  caseStudy?: string;
};

export const projects: Project[] = [
  {
    id: "inventory-demand-forecasting",
    number: "01",
    title: "GenRev — Inventory Demand Forecasting System",
    description:
      "A predictive analytics system developed for Joshua's Meat Products Inc. that forecasts inventory demand using historical sales data and business intelligence techniques.",
    technologies: ["Laravel", "PHP", "MySQL", "Chart.js"],
    gradient: "from-violet-600/30 via-purple-600/20 to-fuchsia-500/20",
    image: withBasePath("/images/genrev.png"),
    screenshots: [withBasePath("/images/genrev.png")],
    video: { type: "drive", fileId: "1cycaufQV_DLGk7mAX20n3Yo7EbxQVnPJ" },
    problemSolved:
      "Joshua's Meat Products Inc. needed a reliable way to forecast inventory demand instead of relying on guesswork — using historical sales data and business intelligence techniques to plan production and materials.",
    keyFeatures: [
      "Real-time sales & revenue dashboard (total revenue, units sold, average price per unit)",
      "Production and materials tracking (weekly materials on hand, total products)",
      "Sales transaction logging with product, variant, price, and date breakdown",
      "Top-selling products and variant ranking",
      "Inventory, product, and employee management modules",
    ],
    myRole: "Lead Programmer (Capstone Project)",
    status: "Completed",
  },
  {
    id: "succor-haven",
    number: "02",
    title: "Succor Haven",
    description:
      "A tutoring platform that connects teachers and students with a booking system, live 1-on-1 video sessions, and real-time collaboration tools for the duration of each class.",
    technologies: [
      "Flutter",
      "Riverpod",
      "WebRTC",
      "Socket.IO",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "coturn",
      "Render",
    ],
    gradient: "from-cyan-500/25 via-blue-600/20 to-violet-600/20",
    video: { type: "drive", fileId: "1xKL33D-CDo3dH3Ioa4gb_cht2VFvotCh" },
    problemSolved:
      "Teachers and students needed a complete remote tutoring workflow — booking, live 1-on-1 classes, and in-session collaboration — built entirely on self-hosted infrastructure (no Google, Firebase, or AWS) so it stays reachable in restricted network environments like China.",
    keyFeatures: [
      "Student, Teacher, and Admin accounts with email OTP, phone OTP, or password login",
      "Session booking: students request a date/time/subject, teachers approve, decline, or reschedule",
      "Admin approval gate before a teacher profile can go live",
      "\"My Sessions\" meeting room: WebRTC video calls, screen sharing with pin & zoom, live chat, whiteboard, notes, and file sharing",
      "Raise hand / reactions plus an auto session timer that closes the room when time is up",
      "Admin dashboard for user management and teacher approvals, announcements with comments, and learning modules",
    ],
    status: "In Progress",
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/jethskii", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jethromandalones/", icon: "linkedin" },
  { label: "Facebook", href: "https://www.facebook.com/jethjeth.mandalones", icon: "facebook" },
];
