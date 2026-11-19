/**
 * Portfolio copy aligned with Tyra Arends — Curriculum Vitae (CV PDF).
 */

export const personal = {
  brand: 'TA',
  name: 'Tyra Arends',
  location: 'Honolulu, HI',
  email: 'Tyraja@hawaii.edu',
  linkedin: '',
  github: 'https://github.com/Tyraja',
  website: 'https://tyraarends.github.io/',
  scholar: '',
  tagline: 'M.S. student, Biological Oceanography, University of Hawaiʻi at Mānoa',
  summary:
    'Interested in deep-sea fish ecology and the open-ocean water column — vertical profiling, micronekton and macroplankton community composition, and shipboard acoustics. M.S. student in the Deep Sea Fish Ecology Lab.',
  contactBlurb:
    'Email is the best way to reach me. My CV and research are linked below.',
  about: [
    'I am an M.S. student in <strong>Biological Oceanography</strong> at the University of Hawaiʻi at Mānoa and a <strong>Hauʻoli Mau Loa Fellow</strong> in the Deep Sea Fish Ecology Lab, advised by Jeff Drazen. I completed a B.S. in <strong>Global Environmental Science</strong> (Honors, cum laude) with a computer programming pathway.',
    'My research uses a novel water column profiler to characterize macroplankton and micronekton community composition and biomass across depth. I have spent <strong>69 days at sea</strong> on profiler testing cruises, the Hawaii Ocean Timeseries, and the 45-day Kermadec Trench Ventilation Cruise (hadal profiler, eDNA, and shipboard acoustics).',
    'Earlier work at the Hawaiʻi Institute of Marine Biology focused on the demographic structure and species verification of the coral <em>Leptastrea purpurea</em> in Kāneohe Bay.'
  ],
  aboutStats: [
    { value: '69', label: 'Days at sea' },
    { value: '7', label: 'Research cruises' },
    { value: 'UH Mānoa', label: 'M.S. Oceanography' }
  ]
}

export const experienceSettings = {
  collapsedCount: 3
}

/** How many items show before “Show all” in Publications / Projects */
export const publicationSettings = {
  journalsCollapsedCount: 4,
  postersCollapsedCount: 3
}

export const projectSettings = {
  collapsedCount: 4
}

export const experience = [
  {
    title: 'Graduate Research Assistant',
    company: 'Deep Sea Fish Ecology Lab, University of Hawaiʻi at Mānoa',
    location: 'Honolulu, HI',
    dates: '2025 \u2014 Present',
    bullets: [
      'Hauʻoli Mau Loa M.S. Fellow in Biological Oceanography; advisor Jeff Drazen.'
    ]
  },
  {
    title: 'Student Project Assistant',
    company: 'Department of Oceanography, University of Hawaiʻi at Mānoa',
    location: 'Honolulu, HI',
    dates: '2024 \u2014 2025',
    bullets: ['Symposium coordinating aid.']
  },
  {
    title: 'Research Assistant',
    company: 'ToBo Lab, Hawaiʻi Institute of Marine Biology',
    location: 'Kāneʻohe, HI',
    dates: '2022 \u2014 2025',
    bullets: [
      {
        text: 'Coral research in Kāneohe Bay on Leptastrea purpurea demographic structure and species verification.',
        cites: ['C1', 'C4']
      }
    ]
  },
  {
    title: 'Intern',
    company: 'ToBo Lab, Hawaiʻi Institute of Marine Biology',
    location: 'Kāneʻohe, HI',
    dates: '2021 \u2014 2022',
    bullets: ['Undergraduate internship at the Hawaiʻi Institute of Marine Biology.']
  },
  {
    title: 'Lifeguard / Swim Instructor',
    company: 'Marine Corps Base Hawaii',
    location: 'Oʻahu, HI',
    dates: '2020 \u2014 2022',
    bullets: ['Lifeguarding and swim instruction.']
  }
]

export const projects = [
  {
    title: 'Water column profiler',
    subtitle: 'Macroplankton and micronekton in Hawaiʻi',
    description:
      'Vertical profiles of macroplankton and micronekton community composition and biomass from a novel water column profiler in Hawaiʻi. Manuscript in preparation.',
    cites: ['J1'],
    tags: ['Water column profiler', 'Micronekton', 'Biomass'],
    dates: '2023 \u2014 Present'
  },
  {
    title: 'Kermadec Trench Ventilation Cruise',
    subtitle: '45 days at sea · 2025',
    description:
      'Collaborative expedition with the University of Hawaiʻi, University of Rhode Island, and Woods Hole Oceanographic Institution. Work included the hadal water column profiler, eDNA, and shipboard acoustics.',
    tags: ['Hadal', 'eDNA', 'Acoustics'],
    dates: '2025'
  },
  {
    title: 'Leptastrea purpurea in Kāneohe Bay',
    subtitle: 'Demographic structure and species verification',
    description:
      'Research on the demographic structure of the coral Leptastrea purpurea in Kāneohe Bay and verification of the species, presented at regional and international symposia.',
    cites: ['C1', 'C4'],
    tags: ['Coral ecology', 'Kāneohe Bay', 'Species verification'],
    dates: '2022 \u2014 2025'
  }
]

/** Multiple degrees (newest / highest first) */
export const educationDegrees = [
  {
    school: 'University of Hawaiʻi at Mānoa',
    location: 'Honolulu, HI',
    degree: 'M.S. Biological Oceanography',
    dates: '2025 \u2014 Present',
    status: 'Expected May 2027',
    detailLabel: 'Lab',
    detail: 'Deep Sea Fish Ecology Lab (advisor: Jeff Drazen) · Hauʻoli Mau Loa Fellow'
  },
  {
    school: 'University of Hawaiʻi at Mānoa',
    location: 'Honolulu, HI',
    degree: 'B.S. Global Environmental Science — Honors, Cum Laude',
    dates: '2022 \u2014 2025',
    detailLabel: 'Pathway',
    detail: 'Computer programming'
  }
]

/**
 * Journal articles — newest first.
 * Optional `image` = basename under `src/assets/media/pubs/` (square thumbs preferred).
 */
export const publicationsJournals = [
  {
    cite: 'J1',
    short: 'Arends et al., in prep',
    title:
      'Vertical Profiles of Macroplankton and Micronekton Community Composition and Biomass from a Novel Water Column Profiler in Hawaiʻi',
    authors: 'T. Arends, et al.',
    venue: 'In preparation',
    date: '2026',
    tags: ['Water column profiler', 'Micronekton', 'Macroplankton']
  }
]

/** Conference posters & talks — optional `image` for square thumb */
export const publicationsPosters = [
  {
    cite: 'C1',
    short: 'Arends, 2025',
    title: 'Leptastrea purpurea Species Verification in Kāneohe Bay',
    venue: 'Global Environmental Science Symposium, Oʻahu · Oral, 2025'
  },
  {
    cite: 'C2',
    short: 'Arends, 2025',
    title: 'Leptastrea purpurea Species Verification in Kāneohe Bay',
    venue: 'HIMB Scholarship Symposium, Oʻahu · Lightning talk, 2025'
  },
  {
    cite: 'C3',
    short: 'Arends, 2025',
    title: 'Leptastrea purpurea Species Verification in Kāneohe Bay',
    venue: 'Dept. of Oceanography BUOYs, Oʻahu · Poster, 2025'
  },
  {
    cite: 'C4',
    short: 'Arends, 2024',
    title: 'Leptastrea purpurea Demographic Structure in Kāneohe Bay',
    venue: 'HIMB Scholarship Symposium, Oʻahu · Oral, 2024'
  },
  {
    cite: 'C5',
    short: 'Arends, 2024',
    title: 'Leptastrea purpurea Demographic Structure',
    venue: 'Reef Futures Global Symposium, Cancún, Mexico · Lightning talk, 2024'
  },
  {
    cite: 'C6',
    short: 'Arends, 2024',
    title: 'Leptastrea purpurea Species Verification in Kāneohe Bay',
    venue: 'Hawaiʻi Conservation Conference, Oʻahu · Lightning talk, 2024'
  },
  {
    cite: 'C7',
    short: 'Arends, 2024',
    title: 'Leptastrea purpurea Demographic Structure in Kāneohe Bay',
    venue: 'Hawaiʻi Conservation Conference, Oʻahu · Poster, 2024'
  },
  {
    cite: 'C8',
    short: 'Arends, 2024',
    title: 'Leptastrea purpurea Demographic Structure in Kāneohe Bay',
    venue: '48th Annual Albert L. Tester Memorial Symposium, Oʻahu · Poster, 2024'
  },
  {
    cite: 'C9',
    short: 'Arends, 2024',
    title: 'Leptastrea purpurea Demographic Structure in Kāneohe Bay',
    venue: 'Dept. of Oceanography BUOYs, Oʻahu · Poster, 2024'
  }
]

/** Lookup for employment / project cite chips */
export const publicationsByCite = Object.fromEntries(
  [...publicationsJournals, ...publicationsPosters].map((p) => [p.cite, p])
)

export function pubAnchorId (cite) {
  return `pub-${cite}`
}

export function normalizeBullet (bullet) {
  if (typeof bullet === 'string') return { text: bullet, cites: [] }
  return { text: bullet.text || '', cites: bullet.cites || [] }
}

/** Optional leadership block — empty bullets hides the card */
export const leadership = {
  title: '',
  org: '',
  dates: '',
  bullets: []
}

export const honorsList = [
  {
    title: 'Hauʻoli Mau Loa M.S. Fellowship',
    context: '2-year tuition waiver, graduate salary, and travel funds',
    year: '2025\u201327'
  },
  {
    title: 'Outstanding Undergraduate Honors Thesis Award',
    context: 'University of Hawaiʻi at Mānoa',
    year: '2025'
  },
  {
    title: 'SOEST Dean\u2019s Scholarship',
    context: 'University of Hawaiʻi at Mānoa',
    year: '2024\u201325'
  },
  {
    title: 'Emerging Student Scholarship (×2)',
    context: 'Hawaiʻi Conservation Conference',
    year: '2024\u201325'
  },
  {
    title: 'Undergraduate Research Opportunities Program Funding (×2)',
    context: 'University of Hawaiʻi at Mānoa',
    year: '2023\u201324'
  },
  {
    title: 'Dean\u2019s Honor Roll',
    context: 'University of Hawaiʻi at Mānoa',
    year: '2022\u201325'
  }
]

export const affiliations = []

export const skills = {
  Programming: ['Python', 'R', 'MATLAB', 'Computer vision'],
  Field: ['PADI Open Water Diver', 'CTD & rosette operations', 'Plankton tows', 'Freediving', 'Coral husbandry'],
  Lab: ['DNA extraction', 'PCR', 'RAD-seq library prep (2bRAD, EzRAD)', 'UVR DNA damage assay'],
  Languages: ['English (native)', 'French (working proficiency)']
}

/* Gallery: `src/assets/media/gallery/` — see `src/data/media.js` */
