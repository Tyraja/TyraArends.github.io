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
  website: 'https://tyraja.github.io/TyraArends.github.io/',
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

/** How many cruises show before “Show all” */
export const cruiseSettings = {
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
    title: 'Hadal water column profiler',
    subtitle: 'Pelagic macroplankton and micronekton',
    description:
      'Distribution and community structure of pelagic macroplankton and micronekton from vertical profiles collected with a novel water column profiler in Hawaiʻi. Manuscript in preparation.',
    cites: ['J1'],
    tags: ['Water column profiler', 'Micronekton', 'Macroplankton', 'Community structure'],
    dates: '2025 \u2014 Present'
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

/**
 * Research cruises — newest first.
 * Optional `image` = basename under `src/assets/media/cruises/`.
 */
export const cruises = [
  {
    title: 'Kermadec Trench Ventilation Cruise',
    year: '2025',
    days: 45,
    vessel: 'R/V Thomas G. Thompson',
    description:
      'University of Hawaiʻi, University of Rhode Island, and Woods Hole Oceanographic Institution. Hadal water column profiler, eDNA, and shipboard acoustics.',
    tags: ['Hadal', 'eDNA', 'Acoustics'],
    image: 'kermadec_2025.jpg'
  },
  {
    title: 'Hadal Water Column Profiler Testing Cruise',
    year: '2025',
    days: 3,
    description: 'SOEST student cruise.',
    tags: ['Profiler testing'],
    image: 'testing_2025.jpg'
  },
  {
    title: 'Hadal Water Column Profiler Testing Cruise',
    year: '2024',
    days: 4,
    description: 'Research Experience for Undergraduates.',
    tags: ['Profiler testing', 'REU'],
    image: 'testing_2024_b.jpg'
  },
  {
    title: 'Hadal Water Column Profiler Testing Cruise',
    year: '2024',
    days: 3,
    description: 'Research Experience for Undergraduates.',
    tags: ['Profiler testing', 'REU'],
    image: 'testing_2024_a.jpg'
  },
  {
    title: 'Hadal Water Column Profiler Testing Cruise',
    year: '2023',
    days: 4,
    description: 'SOEST student cruise.',
    tags: ['Profiler testing'],
    image: 'testing_2023_b.jpg'
  },
  {
    title: 'Hadal Water Column Profiler Testing Cruise',
    year: '2023',
    days: 3,
    description: 'Profiler testing cruise.',
    tags: ['Profiler testing'],
    image: 'testing_2023_a.jpg'
  },
  {
    title: 'Hawaii Ocean Timeseries',
    year: '2023',
    days: 7,
    description: 'Volunteer participant on a Hawaii Ocean Timeseries research cruise.',
    tags: ['HOT', 'Time series'],
    image: 'hot_2023.jpg'
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
    authors: 'Tyra Arends, Glenn Carter, and Jeffrey Drazen',
    venue: 'In preparation',
    date: '2026',
    tags: ['Midwater ecology', 'Active acoustics']
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
    venue: 'HIMB Scholarship Symposium, Oʻahu ·
