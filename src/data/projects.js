// Projects shown on the site, in display order.
// Every line was checked against the project's GitHub repo or against what you confirmed.
// Cover images are 1200 x 627 files in public/covers (made by design-assets/make-covers.py).

const allProjects = [
  {
    slug: 'job-search-resume-pipeline',
    title: 'Job Search & Resume Pipeline',
    oneLiner: 'A LangGraph pipeline that scores job postings against my profile and writes a tailored resume and cover letter for the good fits. Groq and Ollama score first, Claude Haiku is the fallback, and Claude Sonnet writes the final text.',
    role: 'Solo Project',
    period: 'Mar 2026 to ongoing',
    description: 'An end-to-end job search system with three ways in: an automated scraper (LinkedIn, Indeed, Dice, Google Jobs and company career pages), a paste-a-job-description mode, and a Playwright form-filler that stops before submit. Every posting passes a "should-apply" check first: red-flag rules for visa and clearance wording, then a cache, then a fit score from an LLM. Groq and local Ollama handle scoring first. Claude Haiku is the fallback when their limits are reached. Claude Sonnet writes the final text. A Jinja2 and LaTeX pipeline turns it into a print-ready PDF.',
    stack: ['Python', 'LangGraph', 'LangChain', 'Anthropic API', 'Groq', 'Ollama', 'Playwright', 'SerpApi', 'LaTeX', 'Pydantic'],
    outcomes: [
      'Red-flag rules, a cache and a fit score filter out bad matches before any writing starts, and a posting is never scored twice',
      'Groq and local Ollama score first, Claude Haiku is the fallback when their limits are reached, and Claude Sonnet writes only the final text',
      'Checks make sure every metric and technology claim in a generated bullet matches my own data'
    ],
    metrics: ['About 9 cents per tailored application', 'Under 1 cent to score a posting', '3 entry modes, 1 engine'],
    repo: 'https://github.com/ankush1699/job-search-resume-pipeline',
    demo: null,
    cover: 'covers/job-search-resume-pipeline.png',
    coverAlt: 'Diagram: entry modes feed a should-apply gate, then tailoring, a Claude Sonnet writer, validators, and a LaTeX PDF.',
    date: '2026-03-01',
    category: 'AI',
    problem: 'Tailoring a resume for each application takes hours, and simple LLM automation wastes money tailoring resumes for jobs not worth applying to: visa red flags, wrong seniority, wrong stack.',
    approach: 'Built the pipeline around an early exit: red-flag rules (free), then a cache of past verdicts (free), then a fit score from Groq or local Ollama, with Claude Haiku as the fallback when those limits are reached. Postings that pass go through keyword extraction, bullet selection and a Claude Sonnet writer. Python checks compare every metric and technology claim with my own data before an editing pass that only runs when something is flagged. The autofill mode fills application forms and hands control back before submit, with no CAPTCHA bypass and no bot-detection evasion.',
    results: 'A tailored application costs about 9 cents, and scoring a posting costs under 1 cent. Red-flag rules and a cache run before any model call. The same engine serves the scraper, manual and autofill modes, and no posting is processed twice.',
    improvements: ['FastAPI + web dashboard on Fly.io', 'Application outcome tracking to tune the scoring', 'Typst instead of LaTeX for lighter deploys']
  },
  {
    slug: 'zero-knowledge-password-authentication',
    title: 'Zero-Knowledge Password Authentication',
    oneLiner: 'A login that checks a password without ever sending it to the server, using zero-knowledge proofs.',
    role: 'Team of 2',
    period: 'Jan 2025 to May 2025',
    description: 'A login system that proves a user knows their password without the password ever leaving the browser. The browser builds a proof with SnarkJS from a Circom circuit that uses Poseidon hashing, and a Node.js and Express server verifies the proof. The frontend is a React app.',
    stack: ['Circom', 'SnarkJS', 'Poseidon hash', 'Node.js', 'React'],
    outcomes: [
      'The server verifies a proof and never sees the plaintext password',
      'Proofs are built in the browser, so only the proof is sent over the network',
      'Poseidon hashing, a hash designed to be cheap inside zero-knowledge circuits'
    ],
    metrics: [],
    repo: 'https://github.com/ankush1699/Zero-Knowledge-Password-Authentication',
    demo: null,
    cover: 'covers/zero-knowledge-password-authentication.png',
    coverAlt: 'Diagram: the browser builds a proof with SnarkJS and sends only the proof to a Node.js server, which verifies it.',
    date: '2025-05-01',
    category: 'Security/ZK',
    problem: 'Normal logins send the password to the server, which creates breach and phishing risk. The goal was to prove knowledge of the password without sending it.',
    approach: 'Wrote a Circom circuit that checks a Poseidon hash of the password and generates keys for the Groth16 proof system. The React frontend builds the proof in the browser with SnarkJS. The Node.js and Express backend checks the proof against the verification key, and registration stores only the hash.',
    results: 'A working login flow where a user signs in by proving they know the password, and the server never receives it.',
    improvements: ['Faster proof generation', 'Multi-factor options', 'Clearer sign-in experience for non-experts']
  },
  {
    slug: 'efficient-multitask-nlp-task-vector-composition',
    title: 'Efficient Multi-Task NLP with Task Vector Composition',
    oneLiner: 'Fine-tunes BERT separately for sentiment and for named entity recognition, then merges the two task vectors into one model.',
    role: 'Team of 2',
    period: 'Mar 2025 to May 2025',
    description: 'A multi-task NLP project built on BERT with PyTorch and Hugging Face Transformers. I fine-tuned the model separately on SST-2 sentiment and on CoNLL-2003 named entity recognition, extracted a task vector from each, and merged them into a single 110M-parameter model.',
    stack: ['Python', 'PyTorch', 'Hugging Face Transformers', 'BERT', 'Jupyter Notebook'],
    outcomes: [
      'Fine-tuned BERT separately on SST-2 sentiment and CoNLL-2003 named entity recognition',
      'Extracted a task vector from each fine-tuned model and merged them into one model',
      'Evaluated the merged model on both tasks in a notebook'
    ],
    metrics: [],
    repo: 'https://github.com/ankush1699/Efficient-Multi-Task-NLP-with-Task-Vector-Composition',
    demo: null,
    cover: 'covers/efficient-multitask-nlp-task-vector-composition.png',
    coverAlt: 'Diagram: two BERT models fine-tuned on SST-2 and CoNLL-2003 give two task vectors, which merge into one model.',
    date: '2025-05-01',
    category: 'ML',
    problem: 'Training and running a separate model for each NLP task adds cost. The question was whether one model could carry both a sentiment task and a named entity task.',
    approach: 'Fine-tuned BERT on each task, took the difference between the fine-tuned and the original weights as a task vector, and merged the two vectors. Then applied the merged vector to the base model and evaluated it on both tasks.',
    results: 'The repository holds the full pipeline as notebooks: fine-tuning for each task, extracting and merging the task vectors, applying the merged vector, and evaluating the result.',
    improvements: ['Add more tasks (for example question answering)', 'Better balance between the tasks', 'Quantization for a smaller model']
  },
  {
    slug: 'personal-budget-management-pyqt6',
    title: 'Personal Budget Management System',
    oneLiner: 'A desktop app that reads bank statements, sorts the spending into categories, and shows where the money goes.',
    role: 'Team of 4',
    period: 'Sep 2025 to Nov 2025',
    description: 'A desktop app for tracking personal spending. You create an account, upload bank statements, and the app sorts the transactions into categories and shows the spending in charts. It is written in Python with a PyQt6 interface and stores its data in MongoDB.',
    stack: ['Python', 'PyQt6', 'MongoDB'],
    outcomes: [
      'Users create an account and upload their bank statements',
      'Transactions are sorted into spending categories automatically',
      'Charts show where the money goes'
    ],
    metrics: [],
    repo: 'https://github.com/ankush1699/Personal-Budget-Management-System',
    demo: null,
    cover: 'covers/personal-budget-management-pyqt6.png',
    coverAlt: 'Diagram: a bank statement is uploaded, transactions are categorized, and spending charts are shown in a PyQt6 desktop app.',
    date: '2025-11-01',
    category: 'Apps',
    problem: 'Reading a bank statement line by line makes it hard to see where the money goes.',
    approach: 'A team of four built a PyQt6 desktop app on a Python core. The core reads an uploaded bank statement, sorts the transactions into categories, and saves them in MongoDB. The interface handles accounts and shows the spending charts.',
    results: 'A working desktop app: create an account, upload a bank statement, and see spending by category in charts.'
  },
  // TODO(verify): the two projects below are hidden from the site. Their old text named a
  // deep learning framework and accuracy numbers that do not match your other write-ups.
  // Check each against its report, fix the text, then remove `hidden: true`.
  {
    slug: 'handwritten-text-recognition-cnns',
    hidden: true,
    title: 'Handwritten Text Recognition with CNNs',
    oneLiner: 'A CNN-based system that converts images of handwritten text into digital text.',
    role: 'Team of 2',
    period: 'Oct 2024 to Dec 2024',
    description: 'A convolutional neural network system that converts handwritten text images into digital text, with custom preprocessing and GPU training.',
    stack: ['CNN', 'Computer Vision'],
    outcomes: [],
    metrics: [],
    repo: null,
    demo: 'https://youtu.be/jOUDS9pHPt4?si=6AD3dA7FBDjKpk48',
    cover: null,
    date: '2024-12-01',
    category: 'CV'
  },
  {
    slug: 'anime-character-generator-gans',
    hidden: true,
    title: 'Anime Character Generator Using GANs',
    oneLiner: 'A GAN that generates anime-style characters with controllable features.',
    role: 'Team of 3',
    period: 'Oct 2024 to Dec 2024',
    description: 'A generative adversarial network trained on anime character images that generates new anime-style characters with controllable features such as hair color and facial expressions.',
    stack: ['GAN', 'Deep Learning', 'Image Generation'],
    outcomes: [],
    metrics: [],
    repo: null,
    demo: null,
    report: 'AML_REPORT.pdf',
    cover: null,
    date: '2024-12-01',
    category: 'ML'
  }
]

// The site only ever sees the visible projects.
export const projects = allProjects.filter((project) => !project.hidden)

export const getProjectBySlug = (slug) => {
  return projects.find((project) => project.slug === slug)
}
