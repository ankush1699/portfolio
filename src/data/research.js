// Research write-ups. Numbers come from the papers themselves, not from memory.
// paperUrl may be an outside link or a PDF kept in public/ (use `localPdf`).

export const researchPapers = [
  {
    id: 'td-control-cliff-walking',
    title: 'Comparing TD Control Methods on Cliff Walking',
    venue: 'Course project, ECE 5474 Reinforcement Learning, Virginia Tech',
    date: 'Apr 2026',
    summary:
      'A controlled comparison of five reinforcement learning methods (SARSA, Q-learning, Expected SARSA, Double Expected SARSA and a new method I proposed) on four cliff walking environments. Expected SARSA was the best or tied for best on all four. My proposed method did not improve on it, and the paper reports that as a negative result.',
    metrics: ['500 runs per configuration', '5 methods on 4 environments'],
    tags: ['Reinforcement Learning', 'Temporal-difference learning', 'Bootstrap statistics', 'NumPy'],
    paperUrl: 'https://github.com/ankush1699/rl-td-control-comparison/blob/main/Chaudhary_Ankush_P7_Project.pdf',
    codeUrl: 'https://github.com/ankush1699/rl-td-control-comparison',
  },
  {
    id: 'traffic-flows-blacksburg',
    title: 'Predicting Chaotic Traffic Flows in Blacksburg, VA',
    venue: 'Course project, ECE 5694 Nonlinearity and Predictability, Virginia Tech',
    date: 'Fall 2024',
    summary:
      'An LSTM model that predicts traffic speed and congestion from more than 80,000 records of live traffic (HERE Traffic) and weather (OpenWeatherMap) data collected over four weeks. In the paper’s evaluation, the speed error was 0.28 (mean absolute error), against 3.11 for a historical-average baseline.',
    metrics: ['Speed error 0.28 vs 3.11 for the baseline', 'R² for speed 0.99 vs 0.77'],
    tags: ['LSTM', 'Time series', 'Traffic data'],
    localPdf: 'Predicting Traffic Flows in Blacksburg.pdf',
    codeUrl: null,
  },
]
