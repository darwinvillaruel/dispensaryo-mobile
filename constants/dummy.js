import assets from './assets';

const antibiotics = [
  {
    id: 1,
    name: 'Amoxicillin',
    description:
      'Amoxicillin is a penicillin-type antibiotic used to treat bacterial infections. It works by stopping the growth of bacteria.',
    classification: 'Broad-spectrum penicillin antibiotic',
    dosage: '250-500mg orally 3 times a day for 7-10 days',
    adverseEffect: 'Nausea, vomiting, diarrhea, rash, and allergic reactions',
    contraindication:
      'Hypersensitivity to penicillin or any component of the formulation',
    image: assets.pill01,
    storePrice: [
      {
        id: 'SRP01',
        brand: 'AMOXIL',
        price: 18.75,
        date: 'April 2023',
      },
    ],
  },
  {
    id: 2,
    name: 'Ciprofloxacin',
    description:
      'Ciprofloxacin is a fluoroquinolone antibiotic used to treat various bacterial infections. It works by killing the bacteria that cause infections.',
    classification: 'Fluoroquinolone antibiotic',
    dosage: '250-750mg orally every 12 hours for 7-14 days',
    adverseEffect:
      'Nausea, diarrhea, dizziness, headache, and tendonitis or tendon rupture',
    contraindication:
      'Pregnancy, breastfeeding, and hypersensitivity to ciprofloxacin or any component of the formulation',
    image: assets.pill02,
    storePrice: [
      {
        id: 'SRP02',
        brand: 'AZIMAX',
        price: '118.50',
        date: 'April 2023',
      },
    ],
  },
  {
    id: 3,
    name: 'Doxycycline',
    description:
      'Doxycycline is a tetracycline antibiotic used to treat a variety of bacterial infections. It works by stopping the growth of bacteria.',
    classification: 'Tetracycline antibiotic',
    dosage: '100mg orally twice a day for 7-14 days',
    adverseEffect: 'Nausea, vomiting, diarrhea, and skin reactions',
    contraindication:
      'Pregnancy, breastfeeding, and children under the age of 8 years',
    image: assets.pill03,
    storePrice: [
      {
        id: 'SRP03',
        brand: 'DOXICON',
        price: '81.70',
        date: 'April 2023',
      },
    ],
  },
  {
    id: 4,
    name: 'Azithromycin',
    description:
      'Azithromycin is a macrolide antibiotic used to treat bacterial infections such as respiratory infections, skin infections, and sexually transmitted infections. It works by stopping the growth of bacteria.',
    classification: 'Macrolide antibiotic',
    dosage: '500mg orally once daily for 3 days',
    adverseEffect: 'Nausea, vomiting, diarrhea, and abdominal pain',
    contraindication:
      'Hypersensitivity to azithromycin or any component of the formulation',
    image: assets.pill04,
    storePrice: [
      {
        id: 'SRP04',
        brand: 'CIPROTED',
        price: '25.00',
        date: 'April 2023',
      },
    ],
  },
  {
    id: 5,
    name: 'Clindamycin',
    description:
      'Clindamycin is a lincosamide antibiotic used to treat bacterial infections. It works by stopping the growth of bacteria.',
    classification: 'Lincosamide antibiotic',
    dosage: '150-300mg orally every 6 hours for 7-10 days',
    adverseEffect: 'Nausea, vomiting, diarrhea, and skin reactions',
    contraindication: 'Hypersensitivity to clindamycin or lincomycin',
    image: assets.pill05,
    storePrice: [
      {
        id: 'SRP05',
        brand: 'DALACIN C',
        price: 85.25,
        date: 'April 2023',
      },
    ],
  },
  {
    id: 6,
    name: 'Metronidazole',
    description:
      'Metronidazole is an antibiotic that works by damaging bacterial DNA.',
    classification: 'Nitroimidazole antibiotic',
    dosage:
      'Oral: 500mg-750mg 3 times daily; Intravenous: 500mg-1g every 6 hours',
    adverseEffect:
      'Nausea, vomiting, diarrhea, metallic taste, disulfiram-like reaction, peripheral neuropathy',
    contraindication:
      'First trimester of pregnancy, alcohol consumption, neurological disorders',
    image: assets.pill06,
    storePrice: [
      {
        id: 'SRP06',
        brand: 'TRICONEX',
        price: '19.50',
        date: 'April 2023',
      },
    ],
  },
  {
    id: 7,
    name: 'Ceftriaxone',
    description:
      'Ceftriaxone is a third-generation cephalosporin antibiotic that works by inhibiting bacterial cell wall synthesis.',
    classification: 'Cephalosporin antibiotic',
    dosage: 'Intravenous or intramuscular: 1g-2g once or twice daily',
    adverseEffect:
      'Nausea, vomiting, diarrhea, allergic reactions, gallbladder sludge',
    contraindication:
      'Hypersensitivity to cephalosporins, neonates with high levels of bilirubin',
    image: assets.pill07,
    storePrice: [
      {
        id: 'SRP07',
        brand: 'FORGRAM',
        price: '1110.00',
        date: 'April 2023',
      },
    ],
  },
];

export { antibiotics };
