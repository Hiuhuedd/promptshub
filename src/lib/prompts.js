export const prompts = [
  {
    id: 1,
    name: "Develop a responsive e-commerce website with cart and checkout",
    description: "A complete e-commerce platform with product listings and payment processing",
    prompt: `[SYSTEM INSTRUCTION]

You are an expert React Native developer and UI/UX designer with 10+ years of experience creating high-performance mobile applications for both iOS and Android. You specialize in creating modular, maintainable design systems that follow platform-specific guidelines while maintaining brand consistency. Your expertise includes component architecture, animation optimization, accessibility implementation, and responsive layouts.

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

Approach this systematically:

1. Analyze the app’s purpose, audience, and design requirements  
2. Define platform-specific design considerations  
3. Create a token system for visual consistency  
4. Design a performance-optimized component structure  
5. Implement navigation patterns and transitions  
6. Build animation utilities optimized for React Native  
7. Ensure accessibility is integrated into all components  
8. Define responsive layouts for various screen sizes  
9. Document the implementation approach for developers`,
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
    prompt: "Write a 60-second TikTok script for a personal fitness brand. Include a strong hook, compelling storytelling, and a call to action that encourages followers.",
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
    prompt: "Create a Figma design for a SaaS landing page with a clean, modern aesthetic. Include a hero section, feature highlights, testimonials, and pricing plans.",
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
    prompt: "Write a 5-email sequence to nurture B2B leads for a software product. Include subject lines, personalized messaging, and strong CTAs in each email.",
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
    prompt: "Develop a customer support chatbot using Python and Flask. Integrate a natural language processing library like spaCy and connect it to a CRM system.",
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
    prompt: "Build a financial forecasting model in Excel or Google Sheets for a SaaS startup. Include projections for revenue, expenses, and cash flow over 3 years.",
    category: "Finance & Analytics",
    image: "",
    author: "Edward Hiuhu",
    dateCreated: "2025-05-03",
    tags: ["Excel", "Financial Modeling", "SaaS", "Startups", "Forecasting"],
    difficulty: "Intermediate"
  }
];
