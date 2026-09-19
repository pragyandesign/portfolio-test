export const PERSONAL_INFO = {
  name: "Pragyan Chaudhary",
  role: "Product Designer",
  email: "pragyandesignco@gmail.com",
  tagline: "Creative Designer Crafting Digital Experiences.",
  subtitle: "UX designer | Thinking out loud about products that frustrate me. Brand strategy background.",
  location: "Haryana, India",
  badge: "[Hi! I am Pragyan Chaudhary!]",
  avatar: "https://framerusercontent.com/images/9TyW1YD9S9SUeDbGCDvMJtzeXo.png?width=367&height=367",
  banner: "https://framerusercontent.com/images/mlAuq6KaZYkeUOKpKNskLMfsbT0.png",
  logo: "https://framerusercontent.com/images/mjEA7cgjthIuUURWJ9Z2v4IQe8.png",
  socials: [
    { name: "LinkedIn", url: "https://linkedin.com/in/pragyanchaudhary" },
    { name: "Instagram", url: "https://instagram.com/pragyandesignco" },
    { name: "X/Twitter", url: "https://x.com/pragyanchaudhary" }
  ]
};

export const CASE_STUDIES = [
  {
    id: "enhancing-travel-planning-25-more-bookings",
    caseNumber: "Case 01",
    industry: "Travel",
    tag: "Bookings • UX Design",
    title: "25% More Bookings Through Simplified Navigation",
    subtitle: "Enhancing Travel Planning 25% More Bookings",
    image: "https://framerusercontent.com/images/YpXhC9dyBYB81t1zXuqkOwNPt8.png?width=872&height=1160",
    overview: "Faced with a 40% cart abandonment rate, I redesigned the checkout and booking flow to address key user pain points by simplifying navigation and optimizing for mobile.",
    problemStatement: "The platform struggled with a 40% cart abandonment rate during checkout. Users encountered unclear error messages, redundant fields, and poor mobile optimization, leading to frustration and drop-offs.",
    role: "Lead Designer",
    platforms: "Desktop and Android",
    timeline: "January 2024 - March 2024",
    metrics: [
      { label: "Checkout Completion", value: "+25%", detail: "Increase in checkout completion rates." },
      { label: "Cart Abandonment", value: "-30%", detail: "Reduction in cart abandonment on mobile devices." },
      { label: "Ease of Use", value: "+40%", detail: "Improvement in perceived ease of use in post-launch surveys." }
    ],
    persona: {
      name: "Jhon Roberts",
      title: "Marketing Manager",
      quote: "I just want the checkout to be quick and painless—no surprises or unnecessary steps!",
      age: 29,
      location: "New York City",
      techProficiency: "Moderate",
      gender: "Male",
      goals: [
        "Quickly complete purchases without interruptions.",
        "Trust the platform to handle payment securely.",
        "Access a seamless mobile shopping experience."
      ],
      frustrations: [
        "Long or confusing checkout processes.",
        "Error messages that don't explain the issue.",
        "Poor mobile optimization that slows him down."
      ]
    },
    process: [
      {
        step: "01",
        title: "User Research",
        desc: "Conducted user interviews with 15 participants to understand their frustrations and preferences. Analyzed user behavior data to pinpoint where users dropped off."
      },
      {
        step: "02",
        title: "Insights",
        desc: "Users were frustrated by unclear error messages and redundant form fields. Mobile users struggled with small touch targets and unresponsive layouts."
      },
      {
        step: "03",
        title: "Design Solution",
        desc: "Simplified the checkout process into three intuitive steps: Cart Summary, Payment, Confirmation. Added autofill suggestions and real-time validation."
      },
      {
        step: "04",
        title: "Testing & Iteration",
        desc: "Conducted A/B testing with 500 users comparing original and redesigned flows. Refined component hierarchy based on direct usability feedback."
      }
    ],
    keyLearnings: [
      "Users value a quick and easy process, especially on mobile.",
      "Regular testing uncovered hidden friction points before public release.",
      "Micro-improvements like instant validation yield outsized conversion gains."
    ]
  },
  {
    id: "accelerating-15-growth-in-acquisition-for-payment-solutions",
    caseNumber: "Case 02",
    industry: "Fintech",
    tag: "Onboarding • Growth",
    title: "Accelerating 15% Growth in Acquisition for Payment Solutions",
    subtitle: "25% Growth in Checkout Completion",
    image: "https://framerusercontent.com/images/mpqC2zIQwgZ56VISO8JmlUOv36o.png?width=872&height=1160",
    overview: "Faced with high user drop-offs during identity verification, I redesigned the payment solution onboarding experience to streamline KYC and speed up merchant signups.",
    problemStatement: "The payment solution suffered from high drop-off rates during identity verification due to complex form layouts, vague compliance requirements, and non-responsive mobile views.",
    role: "Lead Designer",
    platforms: "Desktop and Android",
    timeline: "January 2024 - March 2024",
    metrics: [
      { label: "Acquisition Growth", value: "+15%", detail: "Increase in new merchant signups." },
      { label: "Verification Speed", value: "2.5x", detail: "Faster completion of KYC requirements." },
      { label: "Mobile Conversions", value: "+35%", detail: "Higher conversion rate across Android users." }
    ],
    persona: {
      name: "Jhon Roberts",
      title: "Small Business Owner",
      quote: "I need a payment setup that just works, so I can focus on serving my customers.",
      age: 32,
      location: "San Francisco",
      techProficiency: "Moderate",
      gender: "Male",
      goals: [
        "Get payments activated on day one.",
        "Clear guidance on necessary tax & ID documents.",
        "Transparent fee structures without hidden charges."
      ],
      frustrations: [
        "Repetitive document uploads.",
        "Lack of progress indicators during compliance review.",
        "Confusing financial jargon in onboarding forms."
      ]
    },
    process: [
      {
        step: "01",
        title: "User Research",
        desc: "Audited existing onboarding conversion funnels and interviewed 20 small business owners who abandoned signup."
      },
      {
        step: "02",
        title: "Insights",
        desc: "Discovered that 60% of drop-offs occurred at document upload due to file size limits and confusing instructions."
      },
      {
        step: "03",
        title: "Design Solution",
        desc: "Created a progressive disclosure flow with smart camera scanning for document uploads and live status tracking."
      },
      {
        step: "04",
        title: "Testing & Iteration",
        desc: "Ran unmoderated usability tests across 50 users, iterating on tooltips, input field masks, and mobile touch targets."
      }
    ],
    keyLearnings: [
      "Progressive disclosure reduces cognitive load during sensitive onboarding steps.",
      "Clear feedback loops reassure users when submitting official credentials.",
      "Mobile-first design is essential for modern business tools."
    ]
  },
  {
    id: "healthcare-appointments-30-faster-booking-times",
    caseNumber: "Case 03",
    industry: "Healthcare",
    tag: "Booking • Design",
    title: "Healthcare Appointments: 30% Faster Booking Times",
    subtitle: "30% Faster Booking Times",
    image: "https://framerusercontent.com/images/YpXhC9dyBYB81t1zXuqkOwNPt8.png?width=872&height=1160",
    overview: "A ground-up redesign of India's government OPD booking system, built for patients who can't afford to get it wrong. Streamlined slot selection and doctor schedule discovery.",
    problemStatement: "Patients struggled to schedule OPD consultations due to fragmented hospital directories, sluggish search filters, and multi-step verification bottlenecks.",
    role: "Lead Designer",
    platforms: "Desktop and Mobile Web",
    timeline: "February 2024 - April 2024",
    metrics: [
      { label: "Booking Speed", value: "30%", detail: "Faster completion time for hospital bookings." },
      { label: "Accessibility Score", value: "98/100", detail: "WCAG AAA compliance rating for low-tech literacy users." },
      { label: "Successful Bookings", value: "+45%", detail: "Increase in completed OPD appointment slots." }
    ],
    persona: {
      name: "Ramesh Sharma",
      title: "Senior Patient Advocate",
      quote: "Finding an available doctor slot shouldn't feel like fighting a maze.",
      age: 48,
      location: "Haryana, India",
      techProficiency: "Basic",
      gender: "Male",
      goals: [
        "Easily search doctors by specialty and location.",
        "Instant confirmation via SMS and whatsapp.",
        "High legibility and simple local language support."
      ],
      frustrations: [
        "Hidden fees or unclear hospital slot availability.",
        "Small text and cluttered UI buttons.",
        "Complex login requirements before searching."
      ]
    },
    process: [
      {
        step: "01",
        title: "User Research",
        desc: "Spent 2 weeks observing patient check-ins at regional OPD centers and interviewing patients and hospital administrators."
      },
      {
        step: "02",
        title: "Insights",
        desc: "Many users were searching on budget smartphones with spotty internet connectivity. High visual contrast and minimal data payloads were imperative."
      },
      {
        step: "03",
        title: "Design Solution",
        desc: "Built a 3-tap slot picker with offline-capable confirmation codes, instant SMS receipts, and high contrast typography."
      },
      {
        step: "04",
        title: "Testing & Iteration",
        desc: "Tested prototypes with first-time smartphone users in tier-2 cities to ensure absolute clarity and zero friction."
      }
    ],
    keyLearnings: [
      "Designing for extreme constraints makes the product better for everyone.",
      "Typography and spatial hierarchy are critical for inclusive accessibility.",
      "Clear confirmation feedback builds immediate trust."
    ]
  },
  {
    id: "accelerating-25-growth-in-checkout-completion",
    caseNumber: "Case 04",
    industry: "E-Commerce",
    tag: "Checkout • Conversion",
    title: "Accelerating 25% Growth in Checkout Completion",
    subtitle: "25% Growth in Checkout Completion",
    image: "https://framerusercontent.com/images/mpqC2zIQwgZ56VISO8JmlUOv36o.png?width=872&height=1160",
    overview: "Faced with high cart drop-offs, I redesigned the e-commerce checkout flow with guest checkout, one-click address autofill, and transparent pricing summaries.",
    problemStatement: "The platform suffered from a 40% cart abandonment rate due to mandatory account creation, hidden shipping fees at final step, and lack of localized payment options.",
    role: "Lead Designer",
    platforms: "Desktop and Android",
    timeline: "January 2024 - March 2024",
    metrics: [
      { label: "Checkout Completion", value: "+25%", detail: "Increase in checkout completion rate." },
      { label: "Guest Conversions", value: "+50%", detail: "Higher conversion among first-time shoppers." },
      { label: "Form Errors", value: "-65%", detail: "Reduction in user input validation errors." }
    ],
    persona: {
      name: "Jhon Roberts",
      title: "Marketing Manager",
      quote: "I just want the checkout to be quick and painless—no surprises or unnecessary steps!",
      age: 29,
      location: "New York City",
      techProficiency: "Moderate",
      gender: "Male",
      goals: [
        "Quickly complete purchases without interruptions.",
        "Trust the platform to handle payment securely.",
        "Access a seamless mobile shopping experience."
      ],
      frustrations: [
        "Long or confusing checkout processes.",
        "Error messages that don't explain the issue.",
        "Poor mobile optimization that slows him down."
      ]
    },
    process: [
      {
        step: "01",
        title: "User Research",
        desc: "Analyzed heatmaps and session recordings of over 10,000 checkout visits to identify exact drop-off points."
      },
      {
        step: "02",
        title: "Insights",
        desc: "Mandatory account creation accounted for 35% of total abandonments. Surprise shipping fees at step 4 accounted for another 28%."
      },
      {
        step: "03",
        title: "Design Solution",
        desc: "Introduced guest checkout, inline fee calculators, address auto-completion, and express digital wallet options."
      },
      {
        step: "04",
        title: "Testing & Iteration",
        desc: "Ran multi-variant testing across 1,000 active shoppers and refined button contrast, field labels, and security badges."
      }
    ],
    keyLearnings: [
      "Transparency at every step prevents last-second cart abandonment.",
      "Reducing input fields directly correlates with higher completion rates.",
      "Express payment buttons significantly boost mobile conversion."
    ]
  }
];

export const ABOUT_DATA = {
  quote: "Simplicity is the ultimate sophistication.",
  quoteAuthor: "Leonardo da Vinci",
  bioHeadline: "Hey, I'm Pragyan Chaudhary, a UX Designer who started in brand identity and never looked back.",
  bioParagraph1: "A background in branding taught me that good design isn't just how something looks, it's how it speaks. That thinking followed me into UX, where I now obsess over the space between a user's intent and the experience they actually get.",
  bioParagraph2: "Google-certified and self-driven, I bring a visual sensibility to every problem I solve — whether that's mapping out a user flow or sweating the details on a final screen. My passion lies in crafting intuitive, user-centered designs that bridge the gap between technology and its users.",
  pillars: [
    {
      title: "Human-Centered Approach",
      subtitle: "Designing experiences that prioritize user needs and behaviors."
    },
    {
      title: "Problem-Solving Expertise",
      subtitle: "Transforming challenges into simple, impactful solutions."
    },
    {
      title: "Freelance Brand Designer",
      subtitle: "Crafting distinct visual identities and communication systems."
    }
  ],
  experiences: [
    {
      role: "Freelance Brand & UX Designer",
      company: "Self-Employed • Independent",
      period: "2023 – Present",
      location: "Remote, India",
      details: [
        "Designed 12+ visual identities for small businesses and personal brands.",
        "Built logo systems, colour palettes, and type hierarchies from scratch.",
        "Managed client briefs, feedback cycles, and final delivery end-to-end."
      ]
    },
    {
      role: "Google UX Design Professional Certificate",
      company: "Certificate • Coursera",
      period: "2026 • Completed",
      location: "Online",
      details: [
        "Completed 8 comprehensive courses covering foundational UX, research, wireframing, and prototyping.",
        "Built end-to-end UX case studies validated through usability testing."
      ]
    },
    {
      role: "UI/UX Case Studies",
      company: "Personal Projects",
      period: "2025 – Present",
      location: "India",
      details: [
        "Ground-up redesign of India's OPD booking portal for accessibility.",
        "Fintech, Healthcare, and E-commerce checkout conversion systems."
      ]
    }
  ],
  funFacts: {
    books: [
      { title: "Atomic Design", author: "Brad Frost" },
      { title: "Don't Make Me Think", author: "Steve Krug" },
      { title: "Non-Designer's Design Book", author: "Robin Williams" }
    ],
    podcasts: [
      { title: "UI Breakfast", host: "Jane Portman" }
    ],
    hobby: {
      name: "Traveling & Photography",
      desc: "Capturing architecture, street typography, and cultures around the world."
    }
  }
};

export const CREDENTIALS_DATA = {
  headline: "Certified. Still learning.",
  subhead: "A structured foundation in UX, backed by Google — and the base I'm building my practice on.",
  certificate: {
    title: "Google UX Design Professional Certificate",
    issuer: "Google • via Coursera",
    coursesCount: "8 Courses Completed",
    status: "Completed (2026)",
    verifyUrl: "https://coursera.org",
    skills: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "Figma",
      "Information Architecture",
      "Accessibility (WCAG)",
      "Design Systems"
    ]
  },
  resume: {
    title: "Pragyan Chaudhary UI / UX Designer Resume",
    summary: "4+ years of brand and visual design experience, now focused on product UX. Includes education, skills, tools, and freelance work history."
  }
};
