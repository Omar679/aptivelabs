// All site copy, taken from the approved "Website & LinkedIn Copy v1" in Notion.
// Edit text here; every page reads from this file.

export const company = {
  brand: "Aptive Labs",
  legal: "Aptive Industries Limited",
  rc: "9681118",
  tin: "2621963877379",
  incorporated: "2026",
  city: "Kano, Nigeria",
  phone: "+234 806 231 5857",
  phoneHref: "tel:+2348062315857",
  email: "omarsabiu679@gmail.com",
  tagline: "Built here. Built properly.",
  legalLine: "Aptive Labs is the IT division of Aptive Industries Limited, RC 9681118.",
  linkedin: "https://www.linkedin.com/company/aptive-labs",
};

export type ServiceKey = "it-as-a-service" | "software" | "data-protection" | "security-systems" | "networks" | "training";

export type Service = {
  slug: ServiceKey;
  n: string;
  name: string;
  short: string;
  h1: string;
  lead: string;
  problem: string;
  get: string[];
  steps: [string, string][];
  bestFor: string;
  engagement: string;
  clients?: string[];
  faqs?: [string, string][];
  extra?: { title: string; items: string[] };
  offers?: { title: string; body: string; items: string[] }[];
  packages?: { title: string; note: string; names: string[] };
  sectors?: { title: string; items: string[] };
  cta: string;
  metaTitle: string;
  metaDescription: string;
  icon: "lifebuoy" | "code" | "shield" | "cctv" | "network" | "graduation";
};

export const services: Service[] = [
  {
    slug: "it-as-a-service",
    n: "01",
    name: "IT-as-a-Service",
    short: "Your outsourced IT department under a monthly agreement.",
    h1: "Your outsourced IT department",
    lead: "We take over the day-to-day running of your IT under a monthly agreement, so your team can get on with its own work.",
    problem:
      "Most growing companies do not need a full-time IT team, but they still need someone to fix problems, keep devices running and plan ahead. Without that, issues wait, nobody owns the network, and knowledge leaves with every contractor.",
    get: [
      "Day-to-day support for your staff",
      "Computer and device setup, maintenance and repair",
      "Network management",
      "User accounts and access for new and departing staff",
      "Documentation of your systems, kept up to date",
      "One point of contact for every IT issue",
    ],
    steps: [
      ["Assess", "We review your devices, network, accounts and current pain points."],
      ["Agree", "We agree the scope, response times and monthly fee in writing."],
      ["Onboard", "We document what you have and fix urgent issues first."],
      ["Run", "We handle day-to-day IT and keep your records current."],
      ["Review", "We meet regularly to review issues and plan improvements."],
    ],
    bestFor: "Companies without in-house IT, or with one person stretched too thin.",
    engagement: "Monthly agreement. Scope and response times are agreed with each client and written into the agreement.",
    clients: ["Exobridge Industries", "Ezyride", "NomAgro", "Anavam"],
    faqs: [
      ["What does it cost?", "A monthly fee based on the number of users, devices and sites. We quote after an assessment."],
      ["How fast do you respond?", "Response times are agreed with you and written into the service level agreement."],
      ["Where do you work?", "We are based in Kano and work with clients across Nigeria."],
    ],
    cta: "Request a quote",
    metaTitle: "IT-as-a-Service and Managed IT Support",
    metaDescription:
      "Your outsourced IT department under one monthly agreement: staff support, devices, network and documentation. Based in Kano, nationwide.",
    icon: "lifebuoy",
  },
  {
    slug: "software",
    n: "02",
    name: "Software solutions",
    short: "Custom software, company websites and our own Aptive POS.",
    h1: "Software built around how your business works",
    lead: "Our own developers build the software, then stay with you after launch.",
    problem: "Off-the-shelf software rarely fits the way a business runs, and spreadsheets and paper slow everyone down.",
    get: [
      "Custom business software",
      "Company websites",
      "Aptive POS: our own point-of-sale system, used by clients to record sales of their products",
      "Setup, data migration and staff training",
      "Ongoing support after launch",
    ],
    steps: [
      ["Requirements", "We map how you work and what the software must do."],
      ["Design", "We agree screens, features and scope before building."],
      ["Build and test", "We develop in stages and show you progress."],
      ["Launch", "We go live, migrate data and train your staff."],
      ["Support", "We fix issues and add improvements over time."],
    ],
    bestFor: "Businesses whose processes have outgrown spreadsheets, paper or generic tools.",
    engagement: "Fixed project, followed by an optional support or hosting agreement.",
    clients: ["Stychies", "Sleekandchic"],
    cta: "Ask about Aptive POS",
    metaTitle: "Custom Software, Websites and POS",
    metaDescription:
      "Business software, company websites and the Aptive POS system, built by our own developers in Kano, with training and support after launch.",
    icon: "code",
  },
  {
    slug: "data-protection",
    n: "03",
    name: "Data protection",
    short: "NDPA compliance, virtual DPO, privacy audits and DPIAs.",
    h1: "Data protection your organisation can stand behind",
    lead: "We help organisations understand and put in place what the Nigeria Data Protection Act (NDPA) and the NDPC expect, then keep it working.",
    problem:
      "Most organisations hold more personal data than they realise: staff files, customer records, CCTV footage, website forms, payroll. Under the NDPA they must know what they hold, why, who can see it and how it is protected. Few have the time or in-house expertise to work that out and keep it current.",
    get: [
      "Data protection compliance assessment and gap analysis",
      "A compliance roadmap with clear priorities",
      "Data protection policies and a privacy governance framework",
      "Compliance documentation, kept up to date",
      "Virtual DPO support for organisations without a full-time DPO",
      "Privacy audits and Data Protection Impact Assessments (DPIAs)",
    ],
    offers: [
      {
        title: "Compliance consulting",
        body: "Understand and implement the NDPA and applicable NDPC requirements, as a project or an ongoing service.",
        items: [
          "Compliance and readiness assessment",
          "Gap analysis and compliance roadmap",
          "Data protection policies",
          "Privacy governance framework",
          "Compliance documentation",
          "Ongoing compliance monitoring",
          "Support with NDPC-related processes",
        ],
      },
      {
        title: "Virtual DPO",
        body: "Your external privacy function, for organisations that cannot justify a full-time Data Protection Officer.",
        items: [
          "Monthly compliance reviews",
          "Privacy advice and staff guidance",
          "Data subject request handling",
          "Privacy incident coordination",
          "Vendor privacy reviews",
          "Management reports and privacy meetings",
          "Compliance documentation and regulatory correspondence support",
        ],
      },
      {
        title: "Privacy audit",
        body: "How your organisation collects, stores, uses and shares personal data: current state, gaps, risks, recommendations and a remediation plan.",
        items: [
          "HR systems and payroll",
          "Customer databases and CRM",
          "CCTV and access-control systems",
          "Websites and mobile applications",
          "Email systems and cloud platforms",
          "Marketing databases",
          "Paper records",
        ],
      },
      {
        title: "Impact assessment (DPIA)",
        body: "A Data Protection Impact Assessment: privacy risks assessed before you launch a new system, technology, project or processing activity.",
        items: [
          "What data is collected, and why",
          "Who can access it, and where it is stored",
          "How long it is retained",
          "What happens if it is breached",
          "Risks to the individuals concerned",
          "The safeguards required",
        ],
      },
    ],
    packages: {
      title: "Virtual DPO packages",
      note: "Each package is scoped to your organisation's size and the personal data you process. We recommend one after an assessment.",
      names: ["Basic DPO", "Professional DPO", "Enterprise DPO"],
    },
    sectors: {
      title: "DPIAs matter most for",
      items: ["AI systems", "Healthcare technology", "Fintech and financial services", "E-commerce", "HR technology", "CCTV and biometrics", "IoT", "Mobile applications", "Automated decision-making"],
    },
    steps: [
      ["Assess", "We map the personal data you hold and how it moves through your organisation."],
      ["Identify gaps", "We compare what you do today with what the NDPA requires."],
      ["Plan", "We agree a prioritised roadmap with you."],
      ["Implement", "We write the policies and documentation and put the controls in place with your team."],
      ["Monitor", "We review compliance regularly, or act as your virtual DPO."],
    ],
    bestFor: "Organisations that process personal data and need to show NDPA compliance, especially those without a full-time DPO.",
    engagement: "Project (assessment, audit or DPIA), or a monthly agreement for virtual DPO and ongoing compliance monitoring.",
    faqs: [
      ["Are you a licensed DPCO?", "Not yet. Where the law requires a licensed Data Protection Compliance Organisation, such as filing your annual compliance audit returns with the NDPC, we prepare your organisation and work alongside a licensed DPCO."],
      ["Do we need a DPO?", "Many organisations that process personal data do. A virtual DPO gives you that function without a full-time hire."],
      ["What does it cost?", "Projects are quoted after an assessment. Virtual DPO is a monthly fee based on the agreed scope."],
    ],
    cta: "Book a compliance assessment",
    metaTitle: "NDPA Compliance, Virtual DPO and DPIA",
    metaDescription:
      "NDPA data protection compliance, virtual DPO, privacy audits and DPIAs for Nigerian organisations, from a team with a certified data protection professional.",
    icon: "shield",
  },
  {
    slug: "security-systems",
    n: "04",
    name: "Security systems",
    short: "CCTV surveillance and access control, designed for your site.",
    h1: "See and control who comes in",
    lead: "CCTV surveillance and access control, designed for your site and installed properly.",
    problem:
      "Cameras that do not record when you need them, blind spots nobody noticed, and no record of who entered which area. A security system only helps if it is planned around the site and maintained after installation.",
    get: [
      "Site survey and system design",
      "CCTV and surveillance installation",
      "Access control systems",
      "Configuration, testing and staff training",
      "Maintenance after installation",
    ],
    steps: [
      ["Survey", "We walk the site and agree what must be covered."],
      ["Design", "We plan camera positions, storage and access points."],
      ["Install", "We install neatly, label cabling and configure the system."],
      ["Hand over", "We test with you and train the people who will use it."],
      ["Maintain", "We keep it recording and working."],
    ],
    bestFor: "Offices, factories, warehouses and any site that needs to see and control who comes in.",
    engagement: "Installation project, followed by an optional maintenance agreement.",
    clients: ["Stychies"],
    extra: {
      title: "Before you install CCTV, ask:",
      items: ["Who will check the footage?", "How long must recordings be kept?", "What happens when a camera goes offline?"],
    },
    cta: "Book a site survey",
    metaTitle: "CCTV and Access Control Installation",
    metaDescription:
      "CCTV surveillance and access control designed for your site, installed neatly, handed over with training and maintained. Kano and nationwide.",
    icon: "cctv",
  },
  {
    slug: "networks",
    n: "05",
    name: "Network infrastructure",
    short: "Office and site networks, planned, installed and documented.",
    h1: "A network that holds up",
    lead: "Office and site networks planned, installed and documented by a MikroTik-certified team.",
    problem:
      "Slow or unreliable networks usually come from equipment added piece by piece with no plan and no documentation. When it fails, nobody knows how it was set up.",
    get: [
      "Network design",
      "Network installation and configuration",
      "Documentation of your network",
      "Ongoing network management as part of IT-as-a-Service",
    ],
    steps: [
      ["Assess", "We review your site, users and current setup."],
      ["Design", "We plan the network and agree it with you."],
      ["Install", "We install and configure the equipment."],
      ["Document", "We hand over a record of how the network is built."],
      ["Manage", "Optional ongoing management under IT-as-a-Service."],
    ],
    bestFor: "New offices, expanding sites, and businesses with networks that keep failing.",
    engagement: "Installation project. Ongoing management through IT-as-a-Service.",
    cta: "Request a quote",
    metaTitle: "Network Installation and Management",
    metaDescription:
      "Office and site networks designed, installed, configured and documented by a MikroTik-certified team, with ongoing management available.",
    icon: "network",
  },
  {
    slug: "training",
    n: "06",
    name: "Training",
    short: "Cybersecurity awareness, productivity tools and AI literacy.",
    h1: "Training your people can use",
    lead: "Practical training for government ministries, private companies and schools.",
    problem:
      "Most security incidents start with a person clicking the wrong link. Most teams use a fraction of the software they already pay for, and are unsure how to use AI tools safely. Short, practical training closes all three gaps.",
    get: [
      "Cybersecurity Awareness: phishing prevention, data privacy compliance (NDPA, GDPR/CCPA) and password hygiene",
      "Productivity Tools: advanced use of Microsoft 365, Google Workspace, Asana and Jira",
      "AI Literacy: using generative AI tools such as ChatGPT or Copilot safely and effectively within company guidelines",
      "Content adapted to your organisation",
    ],
    steps: [
      ["Agree goals", "Who is being trained and what they need."],
      ["Prepare", "We adapt the content to your organisation."],
      ["Deliver", "We run the training for your team."],
      ["Follow up", "We share materials so the learning sticks."],
    ],
    bestFor: "Government ministries, private companies and schools.",
    engagement: "Per session or per group. Format agreed with you.",
    cta: "Book training for your team",
    metaTitle: "Cybersecurity, Microsoft 365 and AI Training",
    metaDescription:
      "Practical staff training in cybersecurity awareness (NDPA, GDPR/CCPA), Microsoft 365, Google Workspace, Asana, Jira and AI literacy.",
    icon: "graduation",
  },
];

export const clients = [
  { name: "Exobridge Industries Limited", short: "Exobridge Industries", key: "exobridge", service: "IT-as-a-Service", line: "Exobridge has outsourced all of its IT operations to Aptive Labs." },
  { name: "Ezyride", short: "Ezyride", key: "ezyride", service: "IT-as-a-Service", line: "We run Ezyride's day-to-day IT under an ongoing agreement." },
  { name: "NomAgro", short: "NomAgro", key: "nomagro", service: "IT-as-a-Service", line: "NomAgro, an agricultural technology company serving farmers across Africa, runs its IT with Aptive Labs." },
  { name: "Anavam", short: "Anavam", key: "anavam", service: "IT-as-a-Service", line: "We run Anavam's day-to-day IT under an ongoing agreement." },
  { name: "Stychies", short: "Stychies", key: "stychies", service: "Software and security systems", line: "We built in-house software for Stychies and installed their security systems." },
  { name: "Sleekandchic", short: "Sleekandchic", key: "sleekandchic", service: "Software", line: "We developed company software for Sleekandchic." },
];

export const processSteps: [string, string][] = [
  ["Discovery", "We listen to how your business works and what is not working."],
  ["Assessment", "We inspect your site and systems so the proposal is based on facts, not guesses."],
  ["Proposal", "A clear document: what we will do, what it costs, how long it takes, and how we support it afterwards."],
  ["Build", "We install, configure or develop, keeping you informed and telling you early if anything changes."],
  ["Handover", "We test with you, train your team and hand over documentation of everything we built."],
  ["Support", "We stay responsible: maintenance, fixes and improvements, or full IT-as-a-Service."],
];

export const pillars = [
  { title: "Built properly", body: "We design, test and document what we build. Our IT team holds cloud and network certifications." },
  { title: "One accountable team", body: "Software, data protection, networks, security systems and support from one partner." },
  { title: "Built here", body: "Our own products and people, based in Kano and delivering across Nigeria." },
];

export const values = [
  ["Do it properly", "Clean cabling, tested code, documented configurations."],
  ["Own the outcome", "We stay responsible for what we build after handover."],
  ["Be straight with clients", "Clear scope, realistic timelines, plain language."],
  ["Keep getting better", "Certified cloud and network skills, and continued learning in AI and security."],
];

export const leadership = [
  ["Umar Sabiu", "Founder"],
  ["Mukhtar Dalhatu", "Director, Projects"],
  ["Abubakar Sabiu", "Director, ICT"],
];

export const certifications = [
  ["Professional Cloud Architect", "Designing and running cloud infrastructure"],
  ["KCNA", "Kubernetes and Cloud Native Associate"],
  ["MTCNA", "MikroTik Certified Network Associate"],
];

// Name of the team's data protection certification: pending from the owner.
export const privacyCertification = "Certified data protection professional";

// Quote form submissions go to this endpoint (e.g. a Formspree form URL).
// Leave empty until the business email and form service are set up;
// the form then tells visitors to call or email instead.
export const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "";
