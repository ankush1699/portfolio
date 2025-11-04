export const projects = [
  {
    slug: 'zero-knowledge-password-authentication',
    title: 'Zero-Knowledge Password Authentication',
    oneLiner: 'Privacy-preserving login using Circom + SnarkJS + Poseidon; verifies secrets without revealing them.',
    role: 'ML/Security Engineer',
    description: 'Developed a privacy-preserving authentication system that verifies password knowledge without revealing the password itself. Built using zero-knowledge proofs to create a secure verification pipeline with fast proof checks.',
    stack: ['Circom', 'SnarkJS', 'Node', 'React', 'Poseidon'],
    outcomes: [
      'Secure verification pipeline',
      'Fast proof checks',
      'Privacy-preserving authentication'
    ],
    metrics: [],
    repo: 'https://github.com',
    demo: 'https://example.com',
    cover: null,
    date: '2024-05-15',
    category: 'Security/ZK',
    problem: 'Traditional password authentication requires sending passwords over networks, creating security vulnerabilities.',
    approach: 'Implemented zero-knowledge proof circuits using Circom, with Poseidon hash function for efficient proof generation. Built a React frontend and Node.js backend for the authentication flow.',
    results: 'Successfully created a system that verifies password knowledge without transmission, with fast proof verification times.',
    improvements: ['Optimize proof generation time', 'Add multi-factor authentication support', 'Improve UX for non-technical users']
  },
  {
    slug: 'anime-character-generator-gans',
    title: 'Anime Character Generator (GANs)',
    oneLiner: 'DCGAN that generates anime faces; FID 18.5, controllable attributes (hair color/expressions).',
    role: 'Deep Learning Engineer',
    description: 'Built a Deep Convolutional Generative Adversarial Network (DCGAN) to generate realistic anime character faces. Achieved high-quality image generation with controllable attributes and optimized training performance.',
    stack: ['TensorFlow', 'Keras', 'NumPy', 'Python'],
    outcomes: [
      'FID score of 18.5',
      '30% training speed improvement via batch normalization & learning rate tuning',
      'Controllable hair color and expression attributes'
    ],
    metrics: ['FID: 18.5'],
    repo: 'https://github.com',
    demo: null,
    cover: null,
    date: '2024-03-20',
    category: 'ML',
    problem: 'Generating diverse, high-quality anime character faces with controllable features.',
    approach: 'Designed and trained a DCGAN architecture with careful attention to batch normalization and learning rate scheduling. Implemented attribute control through latent space manipulation.',
    results: 'Achieved FID score of 18.5, indicating high-quality generation. Reduced training time by 30% through optimization techniques.',
    improvements: ['Expand attribute control to more features', 'Improve resolution to 512x512', 'Add style transfer capabilities']
  },
  {
    slug: 'handwritten-text-recognition-cnns',
    title: 'Handwritten Text Recognition (CNNs)',
    oneLiner: 'Achieved 94% accuracy on IAM dataset; GPU-optimized training loop for faster convergence.',
    role: 'Computer Vision Engineer',
    description: 'Developed a Convolutional Neural Network system for recognizing handwritten text. Trained on the IAM dataset with GPU optimization for efficient training.',
    stack: ['PyTorch', 'TensorFlow', 'OpenCV', 'Python'],
    outcomes: [
      '94% accuracy on IAM dataset',
      'GPU-optimized training',
      'Fast convergence with optimized training loop'
    ],
    metrics: ['Accuracy: 94%'],
    repo: 'https://github.com',
    demo: null,
    cover: null,
    date: '2024-02-10',
    category: 'CV',
    problem: 'Accurately recognizing handwritten text from various writing styles and qualities.',
    approach: 'Implemented CNNs with attention mechanisms for sequence recognition. Optimized data pipeline and training loop for GPU utilization.',
    results: 'Achieved 94% accuracy on the IAM dataset with significantly reduced training time through GPU optimization.',
    improvements: ['Add support for cursive handwriting', 'Improve handling of degraded images', 'Real-time recognition pipeline']
  },
  {
    slug: 'personal-budget-management-pyqt6',
    title: 'Personal Budget Management (PyQt6)',
    oneLiner: 'Desktop finance tool with charts, summaries, and goal tracking; optimized UI flows.',
    role: 'Full-stack Developer (Python)',
    description: 'Created a comprehensive desktop application for personal budget management. Features interactive charts, spending summaries, goal tracking, and an intuitive user interface built with PyQt6.',
    stack: ['PyQt6', 'Pandas', 'Matplotlib', 'Python'],
    outcomes: [
      'Intuitive UI with optimized workflows',
      'Comprehensive financial tracking',
      'Visual analytics with interactive charts'
    ],
    metrics: [],
    repo: 'https://github.com',
    demo: null,
    cover: null,
    date: '2024-01-15',
    category: 'Apps',
    problem: 'Need for a local, privacy-focused budget management tool with comprehensive features.',
    approach: 'Built a desktop application using PyQt6 for the UI, with Pandas for data manipulation and Matplotlib for visualizations. Focused on creating smooth, intuitive user flows.',
    results: 'Delivered a fully functional desktop app with comprehensive budget tracking and visual analytics capabilities.',
    improvements: ['Add data export/import features', 'Implement cloud sync option', 'Add mobile companion app']
  }
]

export const getProjectBySlug = (slug) => {
  return projects.find(project => project.slug === slug)
}
