/** Brand and site-wide content. Rebrand and edit copy here first; avoid hard-coding brand text in components. */
const publicSiteUrl = (import.meta.env.PUBLIC_SITE_URL || 'https://inferedgelab.com').replace(/\/$/, '');

/**
 * Canonical entity description. SHORT is used verbatim as: the home page meta description,
 * the JSON-LD Organization description, the footer tagline, the llms.txt blockquote, and
 * the home page og:description. Do not duplicate this text elsewhere - reference entity.SHORT.
 */
export const entity = {
  NAME: 'InferEdgeLab',
  URL: publicSiteUrl,
  SHORT: 'InferEdgeLab is a GPU inference cost optimization service for AI models on cloud GPUs (AWS, Google Cloud, Azure), specializing in vision and embedding models, with LLM serving optimization on request.',
  EMAIL: 'hello@inferedgelab.com',
};

/**
 * sameAs links for Organization JSON-LD. Only includes URLs actually supplied; left empty
 * (and the sameAs property omitted entirely) until LINKEDIN_URL / GITHUB_ORG_URL are provided.
 */
export const sameAsUrls: string[] = [].filter(Boolean) as string[];

/** Organization JSON-LD knowsAbout. Fixed list; extend with real LLM tooling once known. */
export const orgKnowsAbout = [
  'AI inference optimization',
  'GPU cost optimization',
  'CUDA',
  'TensorRT',
  'ONNX Runtime',
  'NVIDIA Triton Inference Server',
  'GPU profiling',
  'INT8 quantization',
  'FP16 inference',
  'model pruning',
  'knowledge distillation',
  'dynamic batching',
  'computer vision models',
  'embedding models',
  'LLM inference optimization',
];

/**
 * Web3Forms access key, so the contact form delivers mail even when a visitor has no
 * configured email app (GitHub Pages has no backend, so a plain `mailto:` form is not
 * reliable). Get a free key at https://web3forms.com (no account needed, 250
 * submissions/month) using hello@inferedgelab.com, then set PUBLIC_WEB3FORMS_ACCESS_KEY
 * in .env for local dev and as a GitHub Actions repo secret for the live build.
 * While empty, the contact form falls back to the old mailto: behavior.
 */
export const web3formsAccessKey = import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY || '';

/**
 * Cloudflare Web Analytics token (cookie-free visitor stats, no consent banner needed).
 * Get it free at Cloudflare dashboard → Analytics & Logs → Web Analytics → add a site.
 * Set PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN in .env / as a repo secret. Leave empty to keep
 * analytics off - the privacy notice's claim about analytics tracks this value, so it
 * never states something is active when it isn't.
 */
export const cloudflareAnalyticsToken = import.meta.env.PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN || '';

/**
 * Product details are kept deliberately high-level on the public site.
 * Describe what InferEdge helps customers achieve, never how it works internally.
 */
export const product = {
  name: 'InferEdge',
  href: '/inferedge',
  status: 'Behind every audit',
  oneLiner: 'The measurement engine behind every InferEdgeLab audit.',
};

/** Brand tagline, shown as separate animated words. */
export const motto = ['Measure', 'Optimize', 'Accelerate'];

export const site = {
  name: 'InferEdgeLab',
  shortName: 'InferEdgeLab',
  tagline: 'Measure. Optimize. Accelerate.',
  description: entity.SHORT,
  url: entity.URL, // Canonical origin. Override with PUBLIC_SITE_URL only if the domain changes.
  email: entity.EMAIL, // Monitored company inbox (Zoho).
  /** Zoho Bookings link for the 20-minute intro call. Every "Book a call" button site-wide uses this. */
  bookingUrl: 'https://zbooking.in/GAdTN',
  navigation: [
    { label: 'Services', href: '/services' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'Our engine', href: product.href },
    { label: 'Technology', href: '/technology' },
    { label: 'Security', href: '/security' },
  ],
  hero: {
    eyebrow: 'AI INFERENCE & GPU COST OPTIMIZATION',
    title: 'Run AI faster,',
    titleAccent: 'on less compute.',
    body: 'We help teams running vision and embedding models on cloud GPUs serve the same traffic on fewer GPU-hours - with accuracy checked on your own data, at a fixed price.',
    primaryCta: { label: 'Get a free GPU cost check', href: '/contact?topic=check' },
    secondaryCta: { label: 'See pricing', href: '/#pricing' },
  },
  seo: {
    titleSuffix: 'AI Inference & GPU Cost Optimization',
    defaultTitle: 'AI Inference & GPU Cost Optimization | InferEdgeLab',
    defaultDescription:
      'Fixed-price inference audits and optimization sprints that cut cloud GPU cost for vision and embedding models, with accuracy verified.',
    ogImage: '/social-card.png',
  },
};

/** Where "Book a call" buttons go: the booking link if set, otherwise an email. */
export const bookingHref =
  site.bookingUrl || `mailto:${site.email}?subject=${encodeURIComponent('Book a 20-minute call')}`;

export const capabilities = [
  {
    id: 'cost-audit',
    number: '01',
    icon: '⌕',
    title: 'Inference cost audit',
    text: 'A fixed-scope, evidence-based review of where your inference time and GPU spend go, with a ranked plan and a monthly savings estimate built from your own numbers.',
    tags: ['Baseline', 'Bottleneck review', 'Savings estimate'],
  },
  {
    id: 'model-optimization',
    number: '02',
    icon: 'ϟ',
    title: 'Model optimization',
    text: 'Faster vision and embedding models through the right runtime and precision, without giving up the accuracy your product depends on.',
    tags: ['TensorRT', 'ONNX Runtime', 'FP16 / INT8'],
  },
  {
    id: 'gpu-efficiency',
    number: '03',
    icon: '▦',
    title: 'GPU efficiency & cost',
    text: 'More requests per GPU, right-sized instances, and the right pricing model for steady, bursty, and batch traffic.',
    tags: ['Utilization', 'Right-sizing', 'Spot & savings plans'],
  },
  {
    id: 'serving',
    number: '04',
    icon: '◈',
    title: 'Serving & batching',
    text: 'Dynamic batching, multiple models per GPU, and pre- and post-processing moved off the CPU, so the GPU stops waiting.',
    tags: ['Triton', 'Dynamic batching', 'GPU pre/post-processing'],
  },
  {
    id: 'regression-checks',
    number: '05',
    icon: '✓',
    title: 'Regression checks',
    text: 'Keep the gains when models change: every new model version re-benchmarked against the baseline before it ships.',
    tags: ['Validation', 'Regression gate', 'CI integration'],
  },
  {
    id: 'edge',
    number: '06',
    icon: '⬡',
    title: 'Edge deployments, on request',
    text: 'Running on NVIDIA Jetson? We apply the same method on your device through remote access.',
    tags: ['NVIDIA Jetson', 'TensorRT', 'INT8'],
  },
];

/**
 * Offers and pricing (item 5). Prices in USD.
 * Keep these in line with the business plan; update `price` when founding prices end.
 */
export const offers = [
  {
    key: 'check',
    name: 'Free GPU Cost Check',
    price: '$0',
    unit: '',
    summary: 'A quick look at where your money goes.',
    points: [
      'You run our script on your own instance',
      'Your model never leaves your account',
      'One-page result and a 20-minute call',
    ],
    delivery: 'Within 5 days',
    cta: 'Request a free check',
    featured: false,
  },
  {
    key: 'audit',
    name: 'Inference Cost Audit',
    price: '$750',
    unit: 'fixed',
    summary: 'Full benchmark and a costed plan. Credited in full to the sprint.',
    points: [
      'Benchmark across runtimes, precisions and batch sizes',
      'Ranked list of fixes with a monthly savings range',
      'Fixed quote for the sprint',
    ],
    delivery: 'Within 7 days',
    cta: 'Book an audit',
    featured: true,
  },
  {
    key: 'sprint',
    name: 'Cost-Cut Sprint',
    price: 'From $3,500*',
    unit: '',
    summary: 'We implement the plan and prove the result.',
    points: [
      'Optimized model and serving configuration',
      'Accuracy report on your own validation data',
      'Before / after cost report and rebuild scripts',
      '30 days of support',
    ],
    delivery: '2–3 weeks',
    cta: 'Discuss a sprint',
    featured: false,
  },
];

/** Shown under the pricing cards. */
export const pricingNote =
  'Sprints are 50% upfront and 50% on delivery. We agree one written target before we start; if we miss it, the second 50% is waived. Ongoing re-checks for new model versions are available as a monthly retainer, priced per model and fixed in writing before it starts. All prices are in USD and exclude taxes applicable in your jurisdiction. *The Cost-Cut Sprint price depends on scope and is confirmed in writing before work starts; it covers our services only - GPU cloud usage during the engagement is billed to you directly by your own cloud provider.';

/**
 * PLACEHOLDER (item 6): case studies.
 * Set `status: 'published'`, fill `result`, and add `href` once each benchmark is written up.
 */
export const caseStudies = [
  {
    status: 'in-progress',
    model: 'YOLO11 object detection',
    hardware: 'NVIDIA T4 (AWS g4dn class)',
    measures: 'Throughput, P99 latency, mAP and cost per million images: PyTorch vs ONNX Runtime vs TensorRT FP16 / INT8.',
    result: '',
    href: '',
  },
  {
    status: 'in-progress',
    model: 'Image / text embedding model',
    hardware: 'NVIDIA T4 (AWS g4dn class)',
    measures: 'Embeddings per second, recall and cost per million embeddings across runtimes, precisions and batch sizes.',
    result: '',
    href: '',
  },
];

/**
 * NOT currently used anywhere. Founders.astro was repurposed into an anonymous, role-based
 * #team section (no names, no photos) per the site's current no-names policy. This real-name
 * data is kept here, unreferenced, in case a future version of the site wants it back - it is
 * not rendered and does not violate the no-names rule.
 */
export const founders = [
  {
    name: '',
    role: 'Co-founder · GPU & inference engineering',
    bio: 'Systems engineer with 5+ years in C++, CUDA and AI inference pipelines. NVIDIA DLI certified in CUDA. Leads runtime, TensorRT and GPU profiling work.',
    linkedin: '',
  },
  {
    name: '',
    role: 'Co-founder · Model optimization & accuracy',
    bio: 'M.Tech in AI/ML. Leads model-side optimization - quantization, pruning and distillation - and makes sure every speed-up holds up on your own data.',
    linkedin: '',
  },
];

/** Options for the contact form. `value` is used by ?topic= links. */
export const contactTopics = [
  { value: 'check', label: 'Free GPU cost check' },
  { value: 'audit', label: 'Inference Cost Audit ($750)' },
  { value: 'sprint', label: 'Cost-Cut Sprint' },
  { value: 'edge', label: 'Edge / Jetson deployment' },
  { value: 'llm', label: 'LLM serving optimization' },
  { value: 'other', label: 'Something else' },
];
