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
    'Interested in deep-sea fish ecology in the pelagic (Mid water). Current research focuses on micronekton and macroplankton community composition and active acoustics. M.S. student in the Deep Sea Fish Ecology Lab.',
  contactBlurb:
    'Email is the best way to reach me. My CV and research are linked below.',
  about: [
    'I am an M.S. student in <strong>Biological Oceanography</strong> at the University of Hawaiʻi at Mānoa and a <strong>Hauʻoli Mau Loa Fellow</strong> in the Deep Sea Fish Ecology Lab, advised by Dr. Jeff Drazen. I completed a B.S. in <strong>Global Environmental Science</strong> (Honors, cum laude) with a computer programming pathway.',
    'My research uses a novel water column profiler to characterize macroplankton and micronekton community composition and biomass from the mesopelagic to bathypelagic depths. I have spent <strong>69 days at sea</strong> on profiler testing cruises, the Hawaii Ocean Timeseries, and the 45-day Kermadec Trench Ventilation Cruise.',
    'Earlier work at the Hawaiʻi Institute of Marine Biology focused on the demographic structure and species verification of the coral <em>Leptastrea purpurea</em> in Kāneohe Bay, as well as coral husbandry.'
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
  journalsCollapsedCount: 2,
  postersCollapsedCount: 2
}

export const projectSettings = {
  collapsedCount: 2
}

/** How many cruises show before “Show all” */
export const cruiseSettings = {
  collapsedCount: 2
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
      'Distribution and community structure of pelagic macroplankton and micronekton from vertical profiles collected with a novel water column profiler offshore of Oʻahu’s leeward coast. Manuscript in preparation.',
    cites: ['J1'],
    tags: ['Pelagic Ecology', 'Micronekton', 'Macroplankton', 'Community structure'],
    dates: '2025 \u2014 Present'
  },
  {
    title: 'Leptastrea purpurea in Kāneohe Bay',
    subtitle: 'Demographic structure and species verification',
    description:
      'Research on the demographic structure of the coral Leptastrea purpurea in Kāneohe Bay and verification of the species, presented at regional and international symposia.',
    cites: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9'],
    tags: ['Coral ecology', 'Kāneohe Bay', 'Species verification'],
    dates: '2022 \u2014 2025'
  }
]

/**
 * Research excursions (cruises) — newest first.
 * Optional `image` = basename under `src/assets/media/cruises/`.
 */
export const cruises = [
  {
    title: 'Kermadec Trench Ventilation Cruise',
    year: '2025',
    days: 45,
    vessel: 'R/V Thomas G. Thompson',
    description:
      'This cruise set out to understand the ventilation properties of the Kermadec Trench offshore of New Zealand. This included collaborations from the University of Hawaiʻi, University of Rhode Island, and Woods Hole Oceanographic Institution. My role on this cruise was to help prepare the Hadal Water Column Profiler, collect and filter Seawater for eDNA, and collect shipboard acoustics from an EK80 system across 5 independent frequencies. I am hoping to use the data collected during my PhD.',
    tags: ['Hadal', 'eDNA', 'Acoustics'],
    image: 'kermadec_2025.jpg'
  },
  {
    title: 'Hadal Water Column Profiler Testing Cruise',
    year: '2025',
    days: 3,
    vessel: 'R/V Kilo Moana',
    description:
      'This was a HWCP Testing cruise as well as a SOEST Student cruise. Here, I helped prepare and launch the HWCP and operate the CTD rosette. The Deep Sea Fish Ecology Lab used a micronekton net to sample mesopelagic Micronekton - which meant that I got to hold some of the critters that I have been studying through my M.S, like this cool sergestid shrimp! I also got to watch him produce a bioluminescent ooze. So Cool!',
    tags: ['Profiler testing'],
    image: 'testing_2025.jpg'
  },
  {
    title: 'Hadal Water Column Profiler Testing Cruise',
    year: '2024',
    days: 4,
    vessel: 'R/V Kilo Moana',
    description:
      'HWCP Testing cruise & Research Experience for Undergraduates. I joined the HWCP team as a student volunteer and got to meet REU students from across the USA who joined for an at sea experience!',
    tags: ['Profiler testing', 'REU'],
    image: 'testing_2024_b.jpg'
  },
  {
    title: 'Hadal Water Column Profiler Testing Cruise',
    year: '2024',
    days: 3,
    vessel: 'R/V Kilo Moana',
    description:
      'I helped prepare and launch the HWCP and operate the CTD rosette.',
    tags: ['Profiler testing', 'REU'],
    image: 'testing_2024_a.jpg'
  },
  {
    title: 'Hadal Water Column Profiler Testing Cruise',
    year: '2023',
    days: 4,
    vessel: 'R/V Kilo Moana',
    description:
      'I helped prepare and launch the HWCP and operate the CTD rosette, and work with other undergraduate students aboard the SOEST student cruise.',
    tags: ['Profiler testing'],
    image: 'testing_2023_b.jpg'
  },
  {
    title: 'Hadal Water Column Profiler Testing Cruise',
    year: '2023',
    days: 3,
    vessel: 'R/V Kilo Moana',
    description:
      'I helped prepare and launch the HWCP and operate the CTD rosette.',
    tags: ['Profiler testing'],
    image: 'testing_2023_a.jpg'
  },
  {
    title: 'Hawaii Ocean Timeseries',
    year: '2023',
    days: 7,
    vessel: 'R/V Kilo Moana',
    description:
      'This was my very first research cruise experience as a volunteer participant on a Hawaii Ocean Timeseries research cruise. I observed CTD operation, net tow, and even got to fish (and catch!) MahiMahi. What I remember most fondly is spending hours and hours admiring live zooplankton through microscopes.',
    tags: ['HOT', 'Time series'],
    image: 'hot_2023.jpg'
  }
]

/**
 * Hakodate field course — one featured block.
 * `image` = basename in `src/assets/media/cruises/`.
 * Each quoted line in `blurb` becomes one paragraph.
 */
export const fieldCourse = {
  title: 'Hakodate Field Course in Oceanography',
  location: 'Hakodate & Usujiri, Hokkaido, Japan',
  dates: 'Aug 2026',
  host: 'Hokkaido University · Uehiro Laboratory for Oceanography, with UH Mānoa’s Uehiro Center for the Advancement of Oceanography',
  blurb: [
    'In August 2026 I joined the Usujiri field course, “Current issues in marine environments and their monitoring methods,” alongside one other UH student and six Hokkaido University Fisheries Sciences students.',
    'The course combined a shipboard survey with plankton nets, water samplers, and data loggers, rocky intertidal fieldwork, eDNA analysis, wave-data analysis, and a visit to the Kakinoshima Jōmon site, a World Heritage Site.'
  ],
  tags: ['Climate', 'Physical oceanography', 'eDNA', 'Coastal pelagic ecology'],
  image: 'hakodate_2026.jpg'
}

/**
 * Articles, interviews, and media — newest first.
 * The section stays hidden while this list is empty.
 */
export const press = [
  {
    type: 'News article',
    title: 'UH Mānoa students explore Arctic, Japan in ocean conservation exchange',
    outlet: 'University of Hawaiʻi System News',
    date: 'Oct 20, 2026',
    link: 'https://www.hawaii.edu/news/2026/10/20/students-explore-arctic-japan/',
    image: 'arctic_japan.jpg',
    description:
      'Coverage of the UH Mānoa and Hokkaido University exchange, including a week at the Hakodate Field Campus and Usujiri Field Station studying coastal environmental challenges.'
  },
  {
    type: 'Blog post',
    title: 'University of Hawaiʻi students share their Usujiri course experience',
    outlet: 'Uehiro Laboratory for Oceanography, Hokkaido University',
    date: 'Sep 16, 2026',
    link: 'https://ulo.fish.hokudai.ac.jp/news-en/20260916e.html',
    image: 'usujiri_course.jpg',
    description:
      'Personal reflections on the Usujiri field course, coastal ecology, and cultural perspectives.'
  },
  {
    type: 'Course overview',
    title: 'Usujiri fieldwork course begins',
    outlet: 'Uehiro Laboratory for Oceanography, Hokkaido University',
    date: 'Aug 16, 2026',
    link: 'https://ulo.fish.hokudai.ac.jp/news-en/20260816e.html',
    image: 'usujiri_fieldwork.jpg',
    description:
      'Day-by-day overview of the Usujiri field course, from orientation to final presentations.'
  },
  {
    type: 'News article',
    title: 'Coral research inspires environmental science grad to pursue master’s degree',
    outlet: 'University of Hawaiʻi System News',
    date: 'May 29, 2025',
    link: 'https://www.hawaii.edu/news/2025/05/29/coral-research-inspires-environmental-science-grad/',
    image: 'coral_research.jpg',
    description:
      'Feature on my undergraduate coral research at the Hawaiʻi Institute of Marine Biology and my transition to graduate school.'
  },
  {
    type: 'Documentary',
    title: 'Voice of the Sea',
    outlet: 'YouTube',
    date: 'Telly Award winner',
    link: 'https://www.youtube.com/watch?v=e50HsKAsWtI',
    image: 'voice_of_the_sea.jpg',
    description: 'Documentary on hadal science.'
  }
]

/** Multiple degrees (newest / highest first) */
export const educationDegrees = [
  {
    school: 'University of Hawaiʻi at Mānoa',
    location: 'Honolulu, HI',
    degree: 'M.S. Biological Oceanography',
    dates: '2025 — Present',
    status: 'Expected May 2027',
    detailLabel: 'Lab',
    detail: 'Deep Sea Fish Ecology Lab (advisor: Jeff Drazen) · Hauʻoli Mau Loa Fellow'
  },
  {
    school: 'University of Hawaiʻi at Mānoa',
    location: 'Honolulu, HI',
    degree: 'B.S. Global Environmental Science — Honors, Cum Laude',
    dates: '2022 — 2025',
    detailLabel: 'Lab',
    detail: 'ToBo Lab & Coral Nursery, Hawaiʻi Institute of Marine Biology'
  }
]

/**
 * Journal articles — newest first.
 * Optional `image` = basename under `src/assets/media/pubs/` (square thumbs preferred).
 */
export const publicationsJournals = [
  {
    cite: 'J1',
    short: 'MANUSCRIPT IN PREP',
    title:
      'Vertical Profiles of Macroplankton and Micronekton Community Composition and Biomass from a Novel Water Column Profiler in Hawaiʻi',
    authors: 'Tyra Arends, Glenn Carter, and Jeffrey Drazen',
    venue: 'In preparation',
    date: 'coming soon',
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
