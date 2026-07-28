export const projects = [
  {
    slug: 'autonomous-job-search-agent',
    title: 'Autonomous Job Search & Application Agent',
    oneLiner: 'Multi-provider LangGraph agent with a cost-gated pipeline: scores job fit for free, pays for LLM tokens only when a role is worth applying to.',
    role: 'Solo Project',
    period: 'May 2026 — ongoing',
    description: 'An end-to-end job search system with three entry modes over one core engine: an automated scraper (SerpApi, jobspy, RSS), a manual paste-a-JD mode, and a Playwright form-filler that stops before submit. Every JD passes a "should-apply" gate first — deterministic visa/clearance red-flag regexes, then a content-hash cache, then an LLM fit rubric on a free tier (Groq/Ollama) — so a bad-fit posting never costs a paid token. Only final prose runs on Claude Sonnet; a Jinja2-LaTeX pipeline renders print-ready PDFs.',
    stack: ['Python', 'LangGraph', 'LangChain', 'Anthropic API', 'Groq', 'Ollama', 'Playwright', 'SerpApi', 'LaTeX', 'Pydantic'],
    outcomes: [
      'Should-apply gate (skills match, visa red flags, seniority) kills bad fits at zero cost; verdicts cached permanently by JD content hash',
      'Tiered model routing: free-tier models for scoring/selection/QA, Claude Sonnet only for recruiter-facing prose — ~60% cost reduction',
      'Deterministic truthfulness validators (metric provenance, tech-stack consistency, title accuracy) gate every generated bullet'
    ],
    metrics: ['~$0.05 per application', '3 entry modes, 1 engine', '0 tokens on bad-fit JDs'],
    repo: 'https://github.com/ankush1699/',
    demo: null,
    cover: null,
    date: '2026-05-01',
    category: 'AI',
    problem: 'Tailoring a resume per application takes hours, and naive LLM automation burns money tailoring resumes for jobs not worth applying to — visa red flags, wrong seniority, wrong stack.',
    approach: 'Restructured the pipeline around an early-exit gate: regex red flags (free) → content-addressed JD cache (free) → LLM fit rubric on Groq free tier / local Ollama. Surviving JDs flow through keyword extraction, bullet selection, and a Claude Sonnet writer, with Python validators checking every metric and technology claim against master data before an editor pass that only runs when something is flagged. A Playwright autofill mode fills application forms and hands control back before submit — no CAPTCHA bypass, no bot-detection evasion.',
    results: 'Cost per tailored application dropped from ~$0.13 to ~$0.05; background job scoring is fully free-tier. The same engine serves scraper, manual, and autofill modes, and no posting is ever processed twice.',
    improvements: ['FastAPI + web dashboard on Fly.io', 'Application outcome tracking to tune the scoring rubric', 'Typst instead of LaTeX for lighter deploys']
  },
  {
    slug: 'personal-budget-management-pyqt6',
    title: 'Personal Budget Management System',
    oneLiner: 'Full-stack desktop application for personal finance tracking with Flask REST backend, MongoDB, and PyQt6 interface.',
    role: 'Team of 4',
    period: 'Sep 2025 to Nov 2025',
    description: 'A full-stack desktop application for personal finance tracking and budget management. The system features a Flask REST backend with MongoDB for data persistence and a PyQt6 desktop interface. Users can create accounts with secure authentication, perform CRUD operations on income and expense entries, and view interactive spending dashboards with data visualizations.',
    stack: ['Python', 'Flask', 'PyQt6', 'MongoDB', 'REST APIs', 'MVC Architecture'],
    outcomes: [
      'Secure authentication and CRUD for income and expense entries',
      'Interactive spending dashboards with data visualizations',
      'MVC architecture with lazy-loaded database queries for responsive UI'
    ],
    metrics: [],
    repo: 'https://github.com/ankush1699/Personal-Budget-Management-System',
    demo: null,
    cover: null,
    date: '2025-11-01',
    category: 'Apps',
    problem: 'Users need a local, full-featured tool to track income and expenses, manage budgets, and visualize spending without relying on cloud-only services.',
    approach: 'Built as a team of 4 with a Flask REST backend and MongoDB for persistence. The PyQt6 desktop client follows MVC architecture. I contributed to backend API design, database schema, and frontend dashboard components. Lazy-loaded queries keep the interface responsive during large data operations.',
    results: 'Delivered a working desktop app with secure auth, full CRUD on financial entries, and interactive dashboards. The architecture supports future features like export and reporting.',
    improvements: ['Add data export and reporting', 'Optional cloud sync', 'Mobile companion for quick entry']
  },
  {
    slug: 'efficient-multitask-nlp-task-vector-composition',
    title: 'Efficient Multi-Task NLP with Task Vector Composition',
    oneLiner: 'Single BERT model for sentiment and NER using Task Vector Composition; 87% on SST-2, 74% F1 on CoNLL-2003.',
    role: 'Team of 2',
    period: 'Mar 2025 to May 2025',
    description: 'A multi-task NLP system built on BERT (110M parameters) that handles both sentiment classification and named entity recognition in one model using Task Vector Composition. Dynamic scaling and flexible task prioritization keep a fixed model size while supporting diverse NLP tasks.',
    stack: ['Python', 'TensorFlow', 'BERT', 'NLP', 'SST-2', 'CoNLL-2003'],
    outcomes: [
      '87% accuracy on SST-2 sentiment analysis',
      '74% F1 score on CoNLL-2003 named entity recognition',
      'Single model for multiple tasks, reducing compute vs. separate models'
    ],
    metrics: ['SST-2: 87%', 'NER F1: 74%'],
    repo: 'https://github.com/ankush1699/Efficient-Multi-Task-NLP-with-Task-Vector-Composition',
    demo: null,
    cover: null,
    date: '2025-05-01',
    category: 'ML',
    problem: 'Training and deploying separate models per NLP task increases compute and maintenance. We wanted one model that could handle both sentiment and NER efficiently.',
    approach: 'Used Task Vector Composition on BERT: dynamic scaling and task prioritization so a single 110M-parameter model supports sentiment (SST-2) and NER (CoNLL-2003) without separate training pipelines.',
    results: 'Achieved 87% accuracy on SST-2 and 74% F1 on CoNLL-2003 with one model. The approach reduces training and deployment overhead compared to task-specific models.',
    improvements: ['Add more tasks (e.g. QA)', 'Better task balancing', 'Quantization for smaller footprint']
  },
  {
    slug: 'zero-knowledge-password-authentication',
    title: 'Zero-Knowledge Password Authentication',
    oneLiner: 'Authentication that verifies passwords without exposing them to the server, using ZK proofs (Circom, Groth16, Poseidon).',
    role: 'Team of 2',
    period: 'Mar 2025 to May 2025',
    description: 'A secure authentication system that verifies user passwords without ever exposing them to the server, using zero-knowledge proofs. The Node.js backend handles proof generation and verification with Circom circuits (Groth16, Poseidon). The React frontend runs client-side proof generation so the password never leaves the browser.',
    stack: ['Circom', 'SnarkJS', 'Groth16', 'Poseidon Hash', 'Node.js', 'React.js', 'Cryptography'],
    outcomes: [
      'Server never receives or stores plaintext passwords',
      'Resistant to phishing and replay by design',
      'Client-side proof generation; only proofs sent to server'
    ],
    metrics: [],
    repo: 'https://github.com/ankush1699/Zero-Knowledge-Password-Authentication',
    demo: null,
    cover: null,
    date: '2025-05-01',
    category: 'Security/ZK',
    problem: 'Traditional login sends passwords to the server, creating phishing and breach risks. We wanted to prove knowledge of the password without transmitting it.',
    approach: 'Designed Circom circuits with Groth16 and Poseidon hashing. Node.js backend verifies proofs; React frontend generates proofs in the browser so the credential never leaves the client. The server only sees cryptographic proofs.',
    results: 'Built a working flow where users authenticate by proving knowledge of the password. The design avoids plaintext on the server and mitigates phishing and replay attacks.',
    improvements: ['Faster proof generation', 'Multi-factor options', 'Clearer UX for non-experts']
  },
  {
    slug: 'handwritten-text-recognition-cnns',
    title: 'Handwritten Text Recognition with CNNs',
    oneLiner: 'CNN-based system for converting handwritten text images to digital text; 94% accuracy on IAM dataset with GPU training.',
    role: 'Team of 2',
    period: 'Oct 2024 to Dec 2024',
    description: 'A convolutional neural network system that converts handwritten text images into digital text. Trained on the IAM handwriting dataset with custom preprocessing and GPU (CUDA) acceleration. Explored multiple CNN architectures and preprocessing strategies to improve recognition across diverse handwriting styles.',
    stack: ['TensorFlow', 'CNN', 'Computer Vision', 'IAM Dataset', 'CUDA'],
    outcomes: [
      '94% accuracy on IAM handwriting dataset',
      'Custom preprocessing for better input quality',
      'GPU-accelerated training for efficient iteration'
    ],
    metrics: ['Accuracy: 94%'],
    repo: null,
    demo: 'https://youtu.be/jOUDS9pHPt4?si=6AD3dA7FBDjKpk48',
    cover: null,
    date: '2024-12-01',
    category: 'CV',
    problem: 'Handwritten text varies widely in style and quality. We needed a robust system to recognize it accurately and efficiently.',
    approach: 'Trained CNNs on the IAM dataset with custom preprocessing to normalize and improve input quality. Used GPU with CUDA to handle the dataset size. Tested different CNN designs and preprocessing choices to optimize accuracy.',
    results: 'Reached 94% accuracy on the IAM dataset. The pipeline handles varied handwriting and runs in a reasonable time thanks to GPU acceleration.',
    improvements: ['Support for cursive and degraded images', 'Real-time recognition', 'Multi-language expansion']
  },
  {
    slug: 'predicting-chaotic-traffic-flows-smart-cities',
    title: 'Predicting Chaotic Traffic Flows in Smart Cities',
    oneLiner: 'LSTM-based traffic flow prediction using chaos theory and real-time data; 87% accuracy, sub-2s inference.',
    role: 'Solo Project',
    period: 'Oct 2024 to Dec 2024',
    description: 'A traffic flow prediction system using LSTM neural networks with real-time traffic and weather data. The model uses ideas from chaos theory to capture nonlinear traffic behavior. Achieved 87% prediction accuracy with sub-2-second inference for congestion forecasting.',
    stack: ['Python', 'LSTM', 'Chaos Theory', 'Time Series Forecasting'],
    outcomes: [
      '87% prediction accuracy for traffic flow',
      'Sub-2-second inference for real-time use',
      'Combination of chaos theory and deep learning for nonlinear patterns'
    ],
    metrics: ['Accuracy: 87%', 'Inference: <2s'],
    repo: null,
    demo: null,
    report: 'Predicting Traffic Flows in Blacksburg.pdf',
    cover: null,
    date: '2024-12-01',
    category: 'ML',
    problem: 'Urban traffic is highly nonlinear and chaotic. We wanted a model that could forecast congestion in near real time for planning and management.',
    approach: 'Built LSTM models fed with real-time traffic and weather data. Integrated chaos-theory concepts to model nonlinear dynamics. Tuned for both accuracy and low latency so the system could support real-time forecasting.',
    results: 'Reached 87% accuracy with inference under 2 seconds. The approach shows how chaos-inspired modeling and deep learning can improve traffic prediction for smart city applications.',
    improvements: ['More data sources and regions', 'Uncertainty estimates', 'Integration with traffic control APIs']
  },
  {
    slug: 'anime-character-generator-gans',
    title: 'Anime Character Generator Using GANs',
    oneLiner: 'GAN trained on 65K+ anime images; FID 18.5, controllable hair color and expressions.',
    role: 'Team of 3',
    period: 'Oct 2024 to Dec 2024',
    description: 'A generative adversarial network trained on 65,000+ anime character images to generate new anime-style characters. The model achieved an FID (Fréchet Inception Distance) of 18.5. Batch normalization and learning rate tuning stabilized training and improved convergence. The generator supports controllable features such as hair color and facial expressions.',
    stack: ['TensorFlow', 'GAN', 'Deep Learning', 'Image Generation', 'Batch Normalization'],
    outcomes: [
      'FID score of 18.5 for image quality',
      'Stable training via batch normalization and learning rate tuning',
      'Controllable generation of hair color and expressions'
    ],
    metrics: ['FID: 18.5'],
    repo: null,
    demo: null,
    report: 'AML_REPORT.pdf',
    cover: null,
    date: '2024-12-01',
    category: 'ML',
    problem: 'Generating diverse, high-quality anime characters with control over specific attributes (e.g. hair, expression) is useful for games and content creation.',
    approach: 'Trained a GAN on a large anime image dataset. Used batch normalization and learning rate scheduling to stabilize training. Implemented controllable generation by steering the latent space for hair color and expression.',
    results: 'Achieved FID 18.5, indicating strong generation quality. Controllable attributes work in practice, with potential use in games and creative tools.',
    improvements: ['Higher resolution (e.g. 512×512)', 'More controllable attributes', 'Style transfer and mixing']
  }
]

export const getProjectBySlug = (slug) => {
  return projects.find(project => project.slug === slug)
}
