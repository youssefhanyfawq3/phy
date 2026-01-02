import { Chapter, QuizQuestion } from './types';

export const CHAPTERS: Chapter[] = [
  {
    id: 'units',
    title: '1. Quantities & Units',
    description: 'Fundamentals of Physical Measurement and SI Units.',
    visualization: 'atom',
    content: [
      {
        heading: 'Standard International Units (S.I.U)',
        body: 'The foundation of physics lies in standard measurements. We use three fundamental quantities:',
        listItems: [
          'Length (الطول): Meter (M)',
          'Mass (الكتلة): Kilogram (Kg)',
          'Time (الزمن): Second (Sec)'
        ]
      },
      {
        heading: 'Derivative Quantities',
        body: 'These are derived from fundamental units:',
        listItems: [
          'Area (A): Length × Width',
          'Volume (Vol): Length × Width × Height',
          'Velocity (V): Distance / Time (m/s)',
          'Acceleration (a): Velocity / Time (m/s²)',
          'Force (F): Mass × Acceleration (N)'
        ]
      }
    ]
  },
  {
    id: 'errors',
    title: '2. Error Analysis',
    description: 'Understanding experimental errors and accuracy.',
    visualization: 'atom',
    content: [
      {
        heading: 'Basic Definitions',
        body: 'In any experiment, we compare Theoretical Value (Standard/Exact) vs Experimental Value (Measured).',
      },
      {
        heading: 'Calculation Laws',
        body: 'There are three main ways to calculate error:',
        formulas: [
          'Absolute Error = |V_exp - V_th|',
          'Relative Error (R.E) = Absolute Error / V_th',
          'Percentage Error = R.E × 100'
        ]
      },
      {
        heading: 'Notes on Accuracy',
        body: 'The smaller the percentage error, the more accurate the experiment is.'
      }
    ]
  },
  {
    id: 'mechanics',
    title: '3. Mechanical Physics',
    description: 'Work, Energy, Power, and Momentum.',
    visualization: 'atom',
    content: [
      {
        heading: 'Work (الشغل)',
        body: 'Force applied to an object times the displacement moved.',
        formulas: ['W = F · d (Joules)']
      },
      {
        heading: 'Energy (الطاقة)',
        body: 'The ability to do work. Two main types:',
        listItems: [
          'Kinetic Energy (K.E): Energy due to motion. K.E = ½ m v²',
          'Potential Energy (P.E): Energy due to position. P.E = m g h'
        ]
      },
      {
        heading: 'Power (القدرة)',
        body: 'The rate at which work is done.',
        formulas: ['Power = Energy / Time (Watt)', 'P = Force × Velocity']
      }
    ]
  },
  {
    id: 'pendulum',
    title: '4. Simple Pendulum',
    description: 'Simple Harmonic Motion and Gravity calculation.',
    visualization: 'pendulum',
    experimentType: 'pendulum_lab',
    content: [
      {
        heading: 'Definitions',
        body: 'Periodic Time (T) is the time for one complete oscillation. Length (L) is distance from pivot to center of mass.',
      },
      {
        heading: 'The Main Law',
        body: 'Used to calculate gravity (g) using slope analysis.',
        formulas: [
          'T = 2π √(L/g)',
          'T² = 4π² (L/g)',
          'g = 4π² / slope'
        ]
      }
    ]
  },
  {
    id: 'elasticity',
    title: '5-7. Elasticity',
    description: 'Stress, Strain, Hooke\'s Law and Material Properties.',
    visualization: 'elasticity',
    experimentType: 'spring_lab',
    content: [
      {
        heading: 'Key Concepts',
        body: 'Elasticity is the ability to return to original shape. Plasticity is permanent deformation.',
        listItems: [
          'Stress (σ) = Force / Area (N/m² or Pascal)',
          'Strain (ε) = ΔL / L (Unitless)'
        ]
      },
      {
        heading: 'Hooke\'s Law',
        body: 'Stress is directly proportional to Strain within the elastic limit.',
        formulas: ['Modulus of Elasticity (E) = Stress / Strain']
      },
      {
        heading: 'Material Types',
        listItems: [
          'Brittle: Small plastic region (breaks easily, e.g., glass)',
          'Ductile: Large plastic region (can be stretched, e.g., copper)'
        ]
      }
    ]
  },
  {
    id: 'waves',
    title: '11. Waves & Sound',
    description: 'Mechanical waves, propagation, and speed.',
    visualization: 'waves',
    content: [
      {
        heading: 'Sound Waves',
        body: 'Mechanical waves that require a medium. They propagate fastest in solids, then liquids, then gases.',
      },
      {
        heading: 'Types by Frequency',
        listItems: [
          'Infrasonic: < 20Hz',
          'Audible: 20Hz - 20kHz',
          'Ultrasonic: > 20kHz'
        ]
      },
      {
        heading: 'Resonance Tube',
        body: 'Relationship between velocity, wavelength, and frequency.',
        formulas: [
          'V = λ · f',
          'V = 4L · f (for closed tube resonance)'
        ]
      }
    ]
  },
  {
    id: 'thermal',
    title: '13-14. Thermal Physics',
    description: 'Temperature scales, Expansion, and Heat Energy.',
    visualization: 'atom',
    content: [
      {
        heading: 'Temperature Conversions',
        formulas: [
          'Kelvin (K) = C + 273',
          'Fahrenheit (F) = (9/5)C + 32'
        ]
      },
      {
        heading: 'Thermal Expansion',
        body: 'Materials expand when heated.',
        formulas: [
          'ΔL = α · L · ΔT',
          'α = Linear expansion coefficient (1/K)'
        ]
      },
      {
        heading: 'Heat Energy (Q)',
        body: 'Energy required to change temperature or state.',
        formulas: [
          'Heating: Q = m · c · ΔT (c = specific heat)',
          'Melting: Q = m · Lf (Lf = latent heat of fusion)'
        ]
      }
    ]
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Which of the following is a derived quantity?",
    options: ["Mass", "Length", "Velocity", "Time"],
    correctAnswer: 2,
    explanation: "Velocity is derived from Length divided by Time."
  },
  {
    id: 2,
    question: "If theoretical gravity is 9.8m/s² and experimental is 10.5m/s², what is the absolute error?",
    options: ["0.07 m/s²", "0.7 m/s²", "1.5 m/s²", "20.3 m/s²"],
    correctAnswer: 1,
    explanation: "|10.5 - 9.8| = 0.7"
  },
  {
    id: 3,
    question: "The unit of Work or Energy is:",
    options: ["Watt", "Newton", "Joule", "Pascal"],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "A simple pendulum is typically used to measure:",
    options: ["Viscosity", "Acceleration due to gravity (g)", "Density", "Elasticity"],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "Hooke's Law states that Stress is directly proportional to:",
    options: ["Force", "Strain", "Area", "Mass"],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "Which material has a large plastic region?",
    options: ["Brittle", "Ductile", "Glass", "Ceramic"],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "Sound waves travel fastest in:",
    options: ["Vacuum", "Gas", "Liquid", "Solid"],
    correctAnswer: 3
  },
  {
    id: 8,
    question: "To convert Celsius to Kelvin, the formula is:",
    options: ["K = C + 273", "K = C - 273", "K = 9/5 C + 32", "K = C x 273"],
    correctAnswer: 0
  },
  {
    id: 9,
    question: "Latent heat of fusion changes substance from solid to liquid without changing:",
    options: ["Volume", "Mass", "Temperature", "Pressure"],
    correctAnswer: 2
  },
  {
    id: 10,
    question: "What is the unit of Stress?",
    options: ["Newton", "Joule", "Pascal (N/m²)", "Watt"],
    correctAnswer: 2
  }
];