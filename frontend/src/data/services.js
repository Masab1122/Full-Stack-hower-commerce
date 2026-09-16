export const SERVICES = [
  {
    id: "amazon-account-management",
    slug: "amazon-account-management",
    title: "Amazon Store & Account Management",
    shortDescription: "Complete operational management for Amazon Seller Central accounts, from inventory planning and PPC optimization to health monitoring.",
    category: "Store Management",
    icon: "ShoppingBag",
    badgeColor: "blue",
    problem: "Amazon sellers often struggle to keep up with daily listing suppressions, rising PPC costs, inventory stockouts, and Seller Central account policy warnings while trying to grow their business.",
    solution: "We provide dedicated operational management to monitor your store 24/7, handle support tickets, maintain healthy inventory velocity, and optimize advertising spend to maximize profit margins.",
    whatWeHandle: [
      "Daily Seller Central dashboard & account health monitoring",
      "Amazon PPC campaign optimization and ACOS reduction",
      "Listing maintenance, keyword indexing, and content updates",
      "FBA shipment creation, inventory replenishment alerts, and stranded inventory fixes",
      "Brand registry protection and customer message handling"
    ],
    process: [
      { step: "1. Account Audit", desc: "Comprehensive review of listings, PPC campaigns, account health, and historical sales data." },
      { step: "2. Strategic Roadmap", desc: "Setting KPI benchmarks, target ACOS, inventory forecasts, and listing improvement priorities." },
      { step: "3. Execution & Monitoring", desc: "Daily monitoring, routine bid updates, negative keyword additions, and inventory tracking." },
      { step: "4. Reporting & Reviews", desc: "Transparent weekly performance reports with sales trends, spend analysis, and actionable next steps." }
    ],
    deliverables: [
      "Dedicated account specialist",
      "Weekly advertising & sales KPI dashboard",
      "24-hour response time for critical account notices"
    ],
    faqs: [
      {
        question: "How do you access our Amazon account?",
        answer: "We use Amazon's secure User Permissions feature. You grant delegated Child Access with specific restricted permissions; you never share primary login passwords."
      }
    ]
  },
  {
    id: "shopify-store-management",
    slug: "shopify-store-management",
    title: "Shopify Store Operations & Management",
    shortDescription: "End-to-end technical, operational, and visual management for high-traffic Shopify stores, ensuring smooth checkout and fast fulfillment.",
    category: "Store Management",
    icon: "Store",
    badgeColor: "green",
    problem: "Managing customer inquiries, order fulfillment, app conflicts, broken layouts, and abandoned checkouts takes hours away from product development and strategic marketing.",
    solution: "Our team handles technical store maintenance, product catalog updates, checkout speed optimization, app integrations, and fulfillment coordination so your storefront runs smoothly around the clock.",
    whatWeHandle: [
      "Product catalog updates, variant setups, and inventory sync",
      "Shopify theme speed optimization and mobile UX enhancements",
      "Courier and third-party logistics (3PL) integration monitoring",
      "Abandoned checkout recovery automation and email funnel maintenance",
      "App conflict resolution and payment gateway health checks"
    ],
    process: [
      { step: "1. Store Assessment", desc: "Analyzing speed benchmarks, checkout friction, and app efficiency." },
      { step: "2. Architecture Cleanup", desc: "Removing unused scripts, optimizing image sizes, and streamlining navigation." },
      { step: "3. Operational Routine", desc: "Daily order queue checks, inventory alerts, and promotional banner updates." },
      { step: "4. Conversion Tracking", desc: "Tracking bounce rates, add-to-cart ratios, and average order value (AOV)." }
    ],
    deliverables: [
      "Fast, bug-free Shopify storefront",
      "Weekly checkout & conversion rate report",
      "Priority technical support for store downtime"
    ],
    faqs: [
      {
        question: "Can you assist with Pakistani Cash on Delivery (COD) courier setups?",
        answer: "Yes, we have deep experience integrating Trax, PostEx, Leopard, and Call Courier APIs and tracking workflows."
      }
    ]
  },
  {
    id: "ppc-advertising-management",
    slug: "ppc-advertising-management",
    title: "PPC Advertising & Media Buying",
    shortDescription: "High-ROI paid advertising management across Meta, TikTok, and Google Ads, optimized for verifiable sales and customer acquisition.",
    category: "Growth & Advertising",
    icon: "Megaphone",
    badgeColor: "rose",
    problem: "E-commerce stores frequently burn ad budgets on unqualified clicks without achieving sustainable Return On Ad Spend (ROAS).",
    solution: "We implement disciplined media buying structures with rigorous A/B creative testing, audience segmentation, pixel verification, and data-driven scaling.",
    whatWeHandle: [
      "Meta (Facebook/Instagram), TikTok, and Google Ads campaign architecture",
      "Audience targeting: Lookalikes, custom customer lists, and broad Advantage+",
      "Ad creative briefing, hook variation testing, and copy optimization",
      "Pixel, Conversions API (CAPI), and GA4 event tracking verification",
      "Budget reallocation from low-performing ads to proven winners"
    ],
    process: [
      { step: "1. Tracking Audit", desc: "Verifying server-side tracking, pixel firing, and attribution accuracy." },
      { step: "2. Testing Phase", desc: "Running controlled budget tests on multiple creative angles, hooks, and audiences." },
      { step: "3. Optimization", desc: "Pruning underperforming ad sets and locking in target Cost Per Acquisition (CPA)." },
      { step: "4. Scaling", desc: "Gradually increasing daily spend on winning creatives while maintaining target ROAS." }
    ],
    deliverables: [
      "Custom live ad reporting dashboard",
      "Bi-weekly creative iteration briefings",
      "Direct communication channel for campaign updates"
    ],
    faqs: [
      {
        question: "What minimum ad budget is recommended?",
        answer: "We recommend a testing budget that allows at least 50 conversion events per week for machine learning algorithms to exit the learning phase."
      }
    ]
  },
  {
    id: "ecommerce-monitoring",
    slug: "ecommerce-monitoring",
    title: "24/7 E-Commerce Store & KPI Monitoring",
    shortDescription: "Continuous uptime, pricing, inventory, buy-box, and order health monitoring to safeguard online revenue.",
    category: "Monitoring",
    icon: "LineChart",
    badgeColor: "purple",
    problem: "Silent checkout failures, unexpected buy-box losses, sudden listing hijackers, and out-of-stock scenarios can erase revenue before owners even notice.",
    solution: "Our monitoring service acts as your store's digital watchtower, catching anomalies immediately and resolving operational bottlenecks before they impact customers.",
    whatWeHandle: [
      "Store uptime and checkout flow heartbeat checks",
      "Amazon Buy-Box loss alerts and unauthorized seller detection",
      "Low inventory and out-of-stock early warning alerts",
      "Customer review and feedback sentiment monitoring",
      "Competitor price and listing variation alerts"
    ],
    process: [
      { step: "1. System Integration", desc: "Connecting notification webhooks and designated alert parameters." },
      { step: "2. Baseline Configuration", desc: "Establishing normal KPI ranges (conversion rate, order volume, response times)." },
      { step: "3. Continuous Vigilance", desc: "Automated and human monitoring of store metrics throughout the day." },
      { step: "4. Incident Response", desc: "Immediate escalation and corrective steps upon detection of any anomaly." }
    ],
    deliverables: [
      "Instant incident escalation via WhatsApp/Email",
      "Monthly health check and vulnerability report",
      "Proactive operational safeguards"
    ],
    faqs: [
      {
        question: "Does this include weekend coverage?",
        answer: "Yes, our monitoring protocols operate continuously across weekends and commercial holidays."
      }
    ]
  }
];
