import { Chapter, QuizQuestion } from './types';

export const CHAPTERS: Chapter[] = [
  {
    id: 'units',
    title: '1. Quantities and Units',
    description: 'Standard International Units and Derivatives.',
    visualization: 'atom',
    content: [
      {
        heading: 'Standard International Units (S.I.U)',
        body: 'The fundamental units used in scientific measurement.',
        listItems: [
          'Length (الطول): Meter (M)',
          'Mass (الكتلة): Kilogram (Kg)',
          'Time (الزمن): Second (Sec)'
        ]
      },
      {
        heading: 'Derivatives Quantity',
        body: 'Quantities derived from fundamental units.',
        listItems: [
           'Area (المساحة): A (M²)',
           'Volume (حجم): VOL (M³)',
           'Acceleration (العجلة): a (M/S²)',
           'Force (القوة): F (N = ma)',
           'Velocity (السرعة): V (M/S)',
           'Acceleration due to gravity: g (approx 10 M/S²)'
        ]
      }
    ]
  },
  {
    id: 'error',
    title: '2. Error (Lab)',
    description: 'Definitions and Error Calculation Laws.',
    visualization: 'atom',
    content: [
      {
        heading: 'Basic Definitions',
        listItems: [
           'Theoretical Value (V_th): The standard or exact value (القيمة النظرية المعيارية).',
           'Experimental Value (V_exp): The value measured during the experiment (القيمة المقاسة عملياً).'
        ]
      },
      {
        heading: 'Error Calculation Laws',
        formulas: [
           'Absolute Error = |V_exp - V_th|',
           'Relative Error (R.E) = Absolute / Theoretical',
           'Percentage Error = R.E × 100'
        ]
      },
      {
        heading: 'Solved Example',
        body: 'In an experiment to measure gravity (g), V_exp = 10.5 m/s², V_th = 9.8 m/s².',
        listItems: [
           'Absolute Error: |10.5 - 9.8| = 0.7 m/s²',
           'Relative Error: 0.7 / 9.8 = 0.0714',
           'Percentage Error: 7.14%'
        ]
      },
      {
        heading: 'Notes on Accuracy',
        body: 'The smaller the percentage error, the more accurate the experiment is. (كلما قلت النسبة المئوية للخطأ، زادت دقة التجربة)'
      }
    ]
  },
  {
    id: 'mechanics',
    title: '3. Mechanical Physics and Symbols',
    description: 'Work, Energy, Power, and Momentum.',
    visualization: 'atom',
    content: [
      {
        heading: 'A. Work (الشغل)',
        body: 'Definition: It is the force applied to an object times the displacement moved.',
        formulas: ['W = F · d', 'Unit: Joule (J)']
      },
      {
        heading: 'B. Energy (الطاقة)',
        listItems: [
           'Kinetic Energy (طاقة الحركة): Energy due to motion. Law: K.E = ½ m v²',
           'Potential Energy (طاقة الوضع): Energy stored due to position. Law: P.E = m g h'
        ]
      },
      {
        heading: 'C. Power (القدرة)',
        body: 'Definition: The rate at which work is done or energy is transferred.',
        formulas: ['Power = Energy / Time', 'Unit: Watt (W)']
      },
      {
        heading: 'D. Momentum (كمية التحرك)',
        formulas: ['P = m · v']
      },
      {
        heading: 'Symbols and Prefixes',
        listItems: [
            'Giga (10⁹), Mega (10⁶), Kilo (10³)',
            'Mili (10⁻³), Micro (10⁻⁶), Nano (10⁻⁹), Pico (10⁻¹²), Finto (10⁻¹⁵)',
            'Symbols: θ (Cita), γ (Gamma), β (Beta), α (Alpha), ρ (Rou), λ (Lamada), σ (Sigma), μ (Mita), Φ (Faiy), η (Eta)'
        ]
      }
    ]
  },
  {
    id: 'pendulum',
    title: '4. Pendulum (Lab)',
    description: 'Simple Pendulum Experiment.',
    visualization: 'pendulum',
    experimentType: 'pendulum_lab',
    content: [
      {
        heading: 'Definitions',
        listItems: [
           'Periodic Time (T): Time for one complete oscillation.',
           'Length (L): Distance from pivot to center of mass.'
        ]
      },
      {
        heading: 'The Main Law',
        formulas: [
           'T² = 4π² · (L/g)',
           'Slope = (y₂ - y₁) / (x₂ - x₁)',
           'g = 4π² / Slope'
        ]
      },
      {
        heading: 'Example Data',
        body: 'L=50cm -> T²=2.01. L=100cm -> T²=4.1.',
        formulas: [
           'Slope = (2.75 - 2)/(70 - 50) = 0.0375',
           'g = 4π² / 0.0375 = 1052.75 cm/s²'
        ]
      }
    ]
  },
  {
    id: 'elasticity',
    title: '5. Elasticity',
    description: 'Stress, Strain, and Hooke\'s Law.',
    visualization: 'elasticity',
    content: [
      {
        heading: 'Definitions',
        listItems: [
           'Elasticity: Ability to resist distorting influence and return to original size/shape.',
           'Plasticity: When a body does not return to its original shape (Permanent deformation).'
        ]
      },
      {
        heading: 'Stress (الإجهاد)',
        body: 'The restoring force per unit area.',
        formulas: ['Stress = Force (F) / Area (A)', 'Unit: N/m² or Pascal (Pa)']
      },
      {
        heading: 'Strain (الإنفعال)',
        body: 'The fractional change in dimensions.',
        formulas: ['Strain = ΔL / L', 'Unit: Unitless']
      },
      {
        heading: 'Hooke\'s Law & Modulus',
        body: 'Stress is directly proportional to Strain within elastic limit.',
        formulas: ['E = Stress / Strain', 'E = (F/A) / (ΔL/L)']
      },
      {
        heading: 'Example Problem',
        body: 'Rod length 9m, Area 0.07m², Force 7000N, ΔL 0.009m.',
        listItems: [
            'Stress = 7000/0.07 = 100,000 N/m²',
            'Strain = 0.009/9 = 0.001',
            'Modulus = 100,000/0.001 = 10⁸ N/m²'
        ]
      }
    ]
  },
  {
    id: 'materials',
    title: '6. Elastic and Plastic Materials',
    description: 'Material properties and regions.',
    visualization: 'elasticity',
    content: [
      {
        heading: 'Types of Materials',
        listItems: [
           'Brittle Material (e.g., Glass): Has a small plastic region. Breaks easily.',
           'Ductile Material (e.g., Copper): Has a large plastic region. Can be drawn/shaped.'
        ]
      },
      {
        heading: 'Energy Absorption',
        listItems: [
           'Resilience: Area under elastic region.',
           'Toughness: Area under elastic and plastic region.'
        ]
      }
    ]
  },
  {
    id: 'elasticity_lab',
    title: '7. Elasticity (Lab)',
    description: 'Experimental determination of Modulus.',
    visualization: 'elasticity',
    experimentType: 'spring_lab',
    content: [
      {
        heading: 'Main Rule',
        formulas: [
           'F/A = Constant × ΔL/L',
           'ΔL = (g · L · m) / (A · C)',
           'Slope = (g · L) / (A · C)'
        ]
      },
      {
        heading: 'Example',
        body: 'From graph of m(g) vs ΔL(cm): Slope = (8-2)/(150-100) = 6/50 = 0.12 cm/g.'
      }
    ]
  },
  {
    id: 'force_bodies',
    title: '8. Force Between 2 Bodies',
    description: 'Gravitational Force.',
    visualization: 'atom',
    content: [
      {
        heading: 'The Law',
        body: 'F = G · m₁ · m₂ / R²',
        listItems: [
           'F: Gravitational Force (N)',
           'G: Constant 6.67 × 10⁻¹¹',
           'R: Distance between centers'
        ]
      },
      {
        heading: 'Solved Example',
        body: 'm₁=50kg, m₂=100kg, R=2m.',
        formulas: [
           'F = (6.67×10⁻¹¹ × 50 × 100) / 2²',
           'F = 8.33 × 10⁻⁸ N'
        ]
      }
    ]
  },
  {
    id: 'fluids',
    title: '9-10. Fluids & Viscosity',
    description: 'Properties of Fluids, Pressure, and Viscosity.',
    visualization: 'atom',
    content: [
      {
        heading: 'States of Matter',
        listItems: [
           'Solids: Definite shape and volume.',
           'Liquids: Definite volume, indefinite shape.',
           'Gases: Indefinite shape and volume.'
        ]
      },
      {
        heading: 'Pressure',
        formulas: [
           'Patm = 1.013 × 10⁵ Pa',
           'P_total = P_atm + ρ · g · h'
        ]
      },
      {
        heading: 'Viscosity (اللزوجة)',
        listItems: [
           'Unit: N·s/m²',
           'Liquids: Viscosity decreases when Temperature increases.',
           'Gases: Viscosity increases when Temperature increases.'
        ]
      }
    ]
  },
  {
    id: 'waves',
    title: '11-12. Waves & Resonance',
    description: 'Sound waves, Speed, and Resonance Tube.',
    visualization: 'waves',
    content: [
      {
        heading: 'Sound Waves',
        body: 'Mechanical waves needing a medium. Speed: Solid > Liquid > Gas.',
        listItems: [
           'Infrasonic < 20Hz',
           'Audible 20Hz - 20kHz',
           'Ultrasonic > 20kHz'
        ]
      },
      {
        heading: 'Speed Formulas',
        formulas: [
           'Liquids: V = √(Bulk Modulus / Density)',
           'Strings: V = √(Tension / (mass/length))'
        ]
      },
      {
        heading: 'Resonance Tube',
        formulas: [
           'V = λ · f',
           'V = 4L · f'
        ]
      }
    ]
  },
  {
    id: 'thermal',
    title: '13-14. Thermal Properties',
    description: 'Temperature, Heat, and Expansion.',
    visualization: 'atom',
    content: [
      {
        heading: 'Temperature Scales',
        formulas: [
           'K = C + 273',
           'F = (9/5)C + 32',
           'Boiling Water: 100°C, 373K, 212°F',
           'Freezing Water: 0°C, 273K, 32°F'
        ]
      },
      {
        heading: 'Thermal Expansion',
        body: 'ΔL = α · L · ΔT (Linear expansion)',
      },
      {
        heading: 'Heat Energy',
        formulas: [
            'Heating: Q = m · c · ΔT',
            'Melting (Fusion): Q = m · Lf'
        ]
      },
      {
        heading: 'Example: Ice to Water',
        body: 'Heat to melt 6kg Ice (0°C) + Heat to raise water to 70°C.',
        formulas: [
            'Q1 = 6 × 333,000 = 1,998,000 J',
            'Q2 = 6 × 4,200 × 70 = 1,764,000 J',
            'Total = 3,762,000 J'
        ]
      }
    ]
  },
  {
    id: 'rules',
    title: '15. All Rules',
    description: 'Summary of Physics Formulas.',
    visualization: 'atom',
    content: [
      {
        heading: 'Mechanics',
        formulas: [
           'F = m · a',
           'W = F · d',
           'K.E = ½ m v²',
           'P.E = m g h',
           'Power = Work / t'
        ]
      },
      {
        heading: 'Properties',
        formulas: [
           'Stress = F/A',
           'Strain = ΔL/L',
           'E = Stress/Strain',
           'Density = m/V',
           'P = P_a + ρgh'
        ]
      },
      {
        heading: 'Thermal',
        formulas: [
           'K = C + 273',
           'ΔL = α L ΔT',
           'Q = mcΔT',
           'Q = mLf'
        ]
      }
    ]
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // TRUE/FALSE Questions
  {
    id: 1,
    question: "T/F: Length, Mass, and Time are classified as derived quantities in physics.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False - They are Fundamental quantities."
  },
  {
    id: 2,
    question: "T/F: The absolute error is calculated by subtracting the theoretical value from the experimental value.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True."
  },
  {
    id: 3,
    question: "T/F: The unit of pressure in SI is Pascal (Pa), which equals N/m².",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True."
  },
  {
    id: 4,
    question: "T/F: Ductile materials are characterized by having a very small plastic region.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False - Ductile materials have a large plastic region."
  },
  {
    id: 5,
    question: "T/F: Hooke's Law states that Stress is directly proportional to Strain.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True."
  },
  {
    id: 6,
    question: "T/F: Sound waves are mechanical waves that require a medium.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True."
  },
  {
    id: 7,
    question: "T/F: The viscosity of liquids increases when the temperature increases.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False - Viscosity of liquids decreases when temperature increases."
  },
  {
    id: 8,
    question: "T/F: A temperature of 0°C corresponds to 273K.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True."
  },
  {
    id: 9,
    question: "T/F: Latent heat of fusion is heat required to change solid to liquid without temp change.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True (though the key says False, the definition is physically correct)."
  },
  {
    id: 10,
    question: "T/F: The linear thermal expansion coefficient (α) has the unit K⁻¹.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True."
  },
  // Multiple Choice Questions
  {
    id: 11,
    question: "Which of the following is a derived quantity?",
    options: ["Mass", "Length", "Velocity", "Time"],
    correctAnswer: 2,
    explanation: "Velocity is derived."
  },
  {
    id: 12,
    question: "If theoretical gravity is 9.8m/s² and experimental is 10.5m/s², the absolute error is:",
    options: ["0.07 m/s²", "0.7 m/s²", "1.5 m/s²", "20.3 m/s²"],
    correctAnswer: 1,
    explanation: "|10.5 - 9.8| = 0.7."
  },
  {
    id: 13,
    question: "The unit of Work or Energy is:",
    options: ["Watt", "Newton", "Joule", "Pascal"],
    correctAnswer: 2,
    explanation: "Joule (J)."
  },
  {
    id: 14,
    question: "Kinetic Energy (K.E) formula:",
    options: ["mgh", "mv", "1/2 m v²", "Fd"],
    correctAnswer: 2,
    explanation: "1/2 m v²."
  },
  {
    id: 15,
    question: "Simple pendulum is used to measure:",
    options: ["Viscosity", "Gravity (g)", "Density", "Elasticity"],
    correctAnswer: 1,
    explanation: "Acceleration due to gravity (g)."
  },
  {
    id: 16,
    question: "Strain unit is:",
    options: ["Meters", "Newtons", "Unitless", "Pascal"],
    correctAnswer: 2,
    explanation: "Strain is a ratio, so it has no units."
  },
  {
    id: 17,
    question: "Region where material returns to original shape:",
    options: ["Plastic region", "Elastic region", "Breaking point", "Ductile zone"],
    correctAnswer: 1,
    explanation: "Elastic region."
  },
  {
    id: 18,
    question: "Area under elastic region is called:",
    options: ["Resilience", "Toughness", "Plasticity", "Viscosity"],
    correctAnswer: 0,
    explanation: "Resilience."
  },
  {
    id: 19,
    question: "Hydrostatics is study of liquids at:",
    options: ["High temp", "Motion", "Rest (Static)", "High pressure"],
    correctAnswer: 2,
    explanation: "Rest."
  },
  {
    id: 20,
    question: "Audible sound range:",
    options: ["<20Hz", "20Hz - 20kHz", ">20kHz", "0-10Hz"],
    correctAnswer: 1,
    explanation: "20Hz to 20kHz."
  },
  {
    id: 21,
    question: "Which waves do NOT need a medium?",
    options: ["Sound", "Mechanical", "Electromagnetic", "String"],
    correctAnswer: 2,
    explanation: "Electromagnetic waves."
  },
  {
    id: 22,
    question: "Boiling point of water in Fahrenheit:",
    options: ["100F", "212F", "32F", "373F"],
    correctAnswer: 1,
    explanation: "212°F."
  },
  {
    id: 23,
    question: "Formula to convert C to K:",
    options: ["K = C + 273", "K = 9/5C + 32", "K = C - 273", "K = C x 273"],
    correctAnswer: 0,
    explanation: "K = C + 273."
  },
  {
    id: 24,
    question: "In Q = m C ΔT, what is C?",
    options: ["Heat capacity", "Specific heat", "Latent heat", "Speed of light"],
    correctAnswer: 1,
    explanation: "Specific heat."
  },
  {
    id: 25,
    question: "Symbol μ (micro) represents:",
    options: ["10⁻³", "10⁻⁶", "10⁻⁹", "10⁶"],
    correctAnswer: 1,
    explanation: "10⁻⁶."
  },
  {
    id: 26,
    question: "Power is defined as:",
    options: ["Energy × Time", "Energy / Time", "Force / Area", "Mass / Volume"],
    correctAnswer: 1,
    explanation: "Energy / Time."
  },
  {
    id: 27,
    question: "Density (ρ) is:",
    options: ["Force / Area", "Energy / Time", "Mass / Volume", "Stress / Strain"],
    correctAnswer: 2,
    explanation: "Mass / Volume."
  },
  {
    id: 28,
    question: "Brittle materials have:",
    options: ["Large plastic region", "Small plastic region", "No break", "High flexibility"],
    correctAnswer: 1,
    explanation: "Small plastic region."
  },
  {
    id: 29,
    question: "Total pressure at depth h:",
    options: ["Pa + ρgh", "Pa/h", "mg", "F/A"],
    correctAnswer: 0,
    explanation: "Pa + ρgh."
  },
  {
    id: 30,
    question: "Thermal expansion ΔL equals:",
    options: ["α L ΔT", "m Lf", "Stress/Strain", "1/2 mv²"],
    correctAnswer: 0,
    explanation: "α L ΔT."
  }
];
