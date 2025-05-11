export const prompts = [
  {
    id: 1,
    name: "Develop a responsive e-commerce website with cart and checkout",
    description: "A complete e-commerce platform with product listings and payment processing",
    prompt: "[SYSTEM INSTRUCTION]

You are an expert React Native developer and UI/UX designer with 10+ years of experience

creating high-performance mobile applications for both iOS and Android. You specialize in

creating modular, maintainable design systems that follow platform-specific guidelines while

maintaining brand consistency. Your expertise includes component architecture, animation

optimization, accessibility implementation, and responsive layouts.

[CONTEXT]

App Name: {app_name}

App Description: {app_description}

Target Platforms: {target_platforms}

Primary User Demographics: {primary_user_demographics}

Brand Identity: {brand_identity}

Core Functionality: {core_functionality}

Performance Requirements: {performance_requirements}

Design Preferences: {design_preferences}

Accessibility Requirements: {accessibility_requirements}

Device Support: {device_support}

Testing Requirements: {testing_requirements}

[TASK]

Create a comprehensive React Native UI/UX design system that addresses:

1. Visual design tokens (colors, typography, spacing, shadows)

2. Component architecture with performance optimization

3. Platform-specific adaptations (Material Design and Human Interface Guidelines)

4. Navigation patterns and screen transitions

5. Animation and interaction patterns

6. Comprehensive accessibility implementation (WCAG 2.1 AA)

7. Responsive layouts for different devices

8. Testing strategy for UI components

9. Component documentation approach

[THINKING PROCESS]

Let's approach this systematically:

1. First, analyze the app's purpose, audience, and design requirements

2. Define platform-specific design considerations based on Material Design and Human

Interface Guidelines

3. Create a comprehensive token system for visual consistency

4. Design a performance-optimized component architecture

5. Implement navigation patterns and transitions

6. Create animation utilities optimized for the React Native bridge

7. Ensure accessibility is built into every component

8. Define responsive layouts for different device sizes

9. Document the implementation approach for the development tea",
    category: "E-commerce",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzoUa-E1GByKkiRn9naWH8VFoRTBPRJQulQ&s",
    author: "Edward Hiuhu",
    dateCreated: "2025-05-08",
    tags: ["React", "Tailwind CSS", "Node.js", "Stripe", "E-commerce"],
    difficulty: "Intermediate"
  },
  {
    id: 2,
    name: "Craft a viral TikTok script for a personal brand",
    description: "Engaging TikTok video script to boost personal brand visibility",
    prompt: "Write a 60-second TikTok script for a personal brand in fitness, including hooks, storytelling, and a strong CTA to drive followers",
    category: "Creator & Personal Brands",
    image: "",
    author: "Edward Hiuhu",
    dateCreated: "2025-05-07",
    tags: ["TikTok", "Personal Branding", "Storytelling", "CTA", "Fitness"],
    difficulty: "Beginner"
  },
  {
    id: 3,
    name: "Design a modern SaaS landing page with Figma",
    description: "A visually appealing landing page for a SaaS product",
    prompt: "Create a Figma design for a SaaS landing page with a clean, modern aesthetic, including hero section, features, testimonials, and pricing",
    category: "Design",
    image: "",
    author: "Edward Hiuhu",
    dateCreated: "2025-05-06",
    tags: ["Figma", "SaaS", "UI/UX", "Landing Page", "Design"],
    difficulty: "Intermediate"
  },
  {
    id: 4,
    name: "Generate a B2B email campaign for lead nurturing",
    description: "A series of emails to nurture B2B leads for a software product",
    prompt: "Write a 5-email sequence for a B2B software product to nurture leads, including subject lines, personalized content, and CTAs",
    category: "Marketing & Sales Automation",
    image: "",
    author: "Edward Hiuhu",
    dateCreated: "2025-05-05",
    tags: ["Email Marketing", "B2B", "Lead Nurturing", "CTAs", "Automation"],
    difficulty: "Beginner"
  },
  {
    id: 5,
    name: "Build a chatbot for customer support using Python",
    description: "An AI-powered chatbot for handling customer inquiries",
    prompt: "Develop a customer support chatbot using Python, Flask, and a natural language processing library like spaCy, with integration to a CRM",
    category: "AI & Chatbots",
    image: "",
    author: "Edward Hiuhu",
    dateCreated: "2025-05-04",
    tags: ["Python", "Flask", "NLP", "Chatbot", "CRM"],
    difficulty: "Advanced"
  },
  {
    id: 6,
    name: "Create a financial forecasting model for startups",
    description: "A spreadsheet model for startup financial projections",
    prompt: "Build an Excel/Google Sheets financial forecasting model for a SaaS startup, including revenue, expenses, and cash flow for 3 years",
    category: "Finance & Analytics",
    image: "",
    author: "Edward Hiuhu",
    dateCreated: "2025-05-03",
    tags: ["Excel", "Financial Modeling", "SaaS", "Startups", "Forecasting"],
    difficulty: "Intermediate"
  },
  {
    id: 7,
    name: "Write a job description for a senior software engineer",
    description: "A compelling job posting to attract top tech talent",
    prompt: "Craft a job description for a Senior Software Engineer role at a tech startup, including responsibilities, qualifications, and company culture",
    category: "HR & Hiring",
    image: "",
    author: "Edward Hiuhu",
    dateCreated: "2025-05-02",
    tags: ["Job Description", "Hiring", "Tech", "Software Engineer", "Recruitment"],
    difficulty: "Beginner"
  },
  {
    id: 8,
    name: "Develop a mobile app prototype for task management",
    description: "A prototype for a task management app with core features",
    prompt: "Create a mobile app prototype using Flutter for a task management app, including task creation, categorization, and notifications",
    category: "Software & Web Development",
    image: "",
    author: "Edward Hiuhu",
    dateCreated: "2025-05-01",
    tags: ["Flutter", "Mobile App", "Task Management", "Prototype", "Development"],
    difficulty: "Intermediate"
  },
  {
    id: 9,
    name: "Create a sales funnel for an online course",
    description: "A step-by-step sales funnel to sell online courses",
    prompt: "Design a sales funnel for an online course on digital marketing, including lead magnet, email sequence, landing page, and upsell strategy",
    category: "Course Creators & Coaches",
    image: "",
    author: "Edward Hiuhu",
    dateCreated: "2025-04-30",
    tags: ["Sales Funnel", "Online Course", "Digital Marketing", "Email", "Upsell"],
    difficulty: "Intermediate"
  },
  {
    id: 10,
    name: "Generate an Instagram content calendar for a small business",
    description: "A 30-day content plan for Instagram engagement",
    prompt: "Create a 30-day Instagram content calendar for a small coffee shop, including post types, captions, hashtags, and posting schedule",
    category: "Marketing & Sales Automation",
    image: "",
    author: "Edward Hiuhu",
    dateCreated: "2025-04-29",
    tags: ["Instagram", "Content Calendar", "Small Business", "Social Media", "Engagement"],
    difficulty: "Beginner"
  },
  {
    id: 11,
    name: "Design a logo for a tech startup",
    description: "A professional logo for a technology company",
    prompt: "Create a logo in Adobe Illustrator for a tech startup focused on AI, incorporating modern typography and a minimalist design",
    category: "Design",
    image: "",
    author: "Edward Hiuhu",
    dateCreated: "2025-04-28",
    tags: ["Logo Design", "Adobe Illustrator", "AI", "Minimalist", "Branding"],
    difficulty: "Intermediate"
  },
  {
    id: 12,
    name: "Build a dashboard for tracking startup KPIs",
    description: "A web-based dashboard for startup performance metrics",
    prompt: "Develop a KPI dashboard using Vue.js and Chart.js to track metrics like MRR, churn rate, and user growth for a SaaS startup",
    category: "Online Businesses & Startups",
    image: "",
    author: "Edward Hiuhu",
    dateCreated: "2025-04-27",
    tags: ["Vue.js", "Chart.js", "SaaS", "KPI", "Dashboard"],
    difficulty: "Advanced"
  },
  {
    id: 13,
    name: "Write a cold outreach script for B2B sales",
    description: "A cold call script to pitch software solutions to businesses",
    prompt: "Craft a cold outreach phone script for a B2B software company selling CRM solutions, including objection handling and a strong close",
    category: "Sales",
    image: "",
    author: "Edward Hiuhu",
    dateCreated: "2025-04-26",
    tags: ["Cold Outreach", "B2B", "Sales Script", "CRM", "Pitch"],
    difficulty: "Beginner"
  },
  {
    id: 14,
    name: "Create a content strategy for a YouTube channel",
    description: "A 3-month content plan for a YouTube channel in education",
    prompt: "Develop a 3-month content strategy for a YouTube channel teaching coding, including video topics, SEO keywords, and thumbnail ideas",
    category: "Creator & Personal Brands",
    image: "",
    author: "Edward Hiuhu",
    dateCreated: "2025-04-25",
    tags: ["YouTube", "Content Strategy", "Coding", "SEO", "Education"],
    difficulty: "Intermediate"
  },
  {
    id: 15,
    name: "Analyze customer data for actionable insights",
    description: "A data analysis report for improving customer retention",
    prompt: "Analyze a customer dataset using Python and Pandas to identify churn patterns and provide actionable insights for a subscription service",
    category: "Finance & Analytics",
    image: "",
    author: "Edward Hiuhu",
    dateCreated: "2025-04-24",
    tags: ["Python", "Pandas", "Data Analysis", "Churn", "Customer Retention"],
    difficulty: "Advanced"
  }
];
