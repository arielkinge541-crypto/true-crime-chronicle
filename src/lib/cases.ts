export type Source = { label: string; url: string; publisher?: string };
export type CaseStatus = "Solved" | "Unsolved" | "Cold Case" | "Recently Solved";

export type TrueCase = {
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  years: string;
  status: CaseStatus;
  fileNumber: string;
  category: string;
  summary: string;
  body: string[];
  timeline: { date: string; event: string }[];
  evidence: string[];
  outcome: string;
  sources: Source[];
};

export const cases: TrueCase[] = [
  {
    slug: "zodiac-killer",
    title: "The Zodiac Killer",
    subtitle: "The cipher-writing phantom of Northern California",
    location: "San Francisco Bay Area, USA",
    years: "1968 – 1969 (active)",
    status: "Unsolved",
    fileNumber: "SFPD-69-Z340",
    category: "Serial Homicide",
    summary:
      "An unidentified killer murdered at least five people, taunted police with cryptograms, and vanished into history.",
    body: [
      "Beginning in the late 1960s, an unknown assailant murdered young couples and a cab driver across the San Francisco Bay Area. He claimed responsibility for 37 killings, though investigators have confirmed five.",
      "What made the Zodiac infamous was not only the violence but the theatre that followed it. He mailed letters to the San Francisco Chronicle, the Vallejo Times-Herald, and the Examiner, signing them with a crosshair symbol and including ciphers — some of which remained unsolved for over fifty years.",
      "In December 2020, a private team of code-breakers cracked the 340-character cipher, but the killer's identity stayed hidden. The case remains officially open with the FBI.",
    ],
    timeline: [
      { date: "Dec 20, 1968", event: "David Faraday and Betty Lou Jensen shot on Lake Herman Road, Benicia." },
      { date: "Jul 4, 1969", event: "Attack on Michael Mageau and Darlene Ferrin in Vallejo." },
      { date: "Aug 1, 1969", event: "First letters and the 408-cipher mailed to Bay Area newspapers." },
      { date: "Oct 11, 1969", event: "Cabdriver Paul Stine murdered in Presidio Heights, San Francisco." },
      { date: "Dec 5, 2020", event: "The 340-cipher is decoded by an international team of amateurs." },
    ],
    evidence: [
      "Four authenticated cryptograms (Z408, Z340, Z13, Z32)",
      "Bloodied glove and partial fingerprints from the Stine cab",
      "Handwritten letters with the crosshair signature",
    ],
    outcome:
      "No suspect has ever been charged. The FBI considers the case open; SFPD marked it inactive in 2004 and reopened it in 2007.",
    sources: [
      { label: "FBI — Zodiac Killer file", url: "https://vault.fbi.gov/Zodiac%20Killer", publisher: "FBI Vault" },
      { label: "Wikipedia — Zodiac Killer", url: "https://en.wikipedia.org/wiki/Zodiac_Killer", publisher: "Wikipedia" },
      { label: "SF Chronicle: The 340 cipher cracked", url: "https://www.sfchronicle.com/crime/article/Zodiac-Killer-cipher-cracked-15783573.php", publisher: "San Francisco Chronicle" },
    ],
  },
  {
    slug: "golden-state-killer",
    title: "The Golden State Killer",
    subtitle: "Caught by a family tree, four decades later",
    location: "California, USA",
    years: "1974 – 1986 (active)",
    status: "Solved",
    fileNumber: "FBI-GSK-2018",
    category: "Serial Homicide / Sexual Assault",
    summary:
      "Joseph James DeAngelo terrorised California for over a decade and was identified in 2018 through investigative genetic genealogy — a turning point for forensic science.",
    body: [
      "Across twelve years, a single offender committed at least 13 murders, more than 50 sexual assaults, and over 120 burglaries. Investigators in different counties were chasing what they believed were three separate offenders: the Visalia Ransacker, the East Area Rapist, and the Original Night Stalker.",
      "DNA later linked all three. In 2018, investigators uploaded a crime-scene profile to the public genealogy site GEDmatch and built a family tree from distant cousins — leading them to former police officer Joseph DeAngelo.",
      "He pleaded guilty in 2020 to 13 counts of murder and was sentenced to multiple life terms without parole.",
    ],
    timeline: [
      { date: "1974", event: "First confirmed burglaries begin in Visalia." },
      { date: "1976 – 1979", event: "Sacramento-area sexual assaults attributed to the East Area Rapist." },
      { date: "1979 – 1986", event: "Murders in Southern California attributed to the Original Night Stalker." },
      { date: "Apr 24, 2018", event: "Joseph DeAngelo arrested at his home in Citrus Heights." },
      { date: "Aug 21, 2020", event: "Sentenced to life without the possibility of parole." },
    ],
    evidence: [
      "DNA profile shared across all three crime series",
      "Genealogy match via GEDmatch (publicly uploaded profiles)",
      "Discarded items from DeAngelo's home for confirmation testing",
    ],
    outcome:
      "Joseph James DeAngelo, then 72, pleaded guilty and is serving consecutive life sentences. The case launched investigative genetic genealogy as a mainstream tool.",
    sources: [
      { label: "Wikipedia — Golden State Killer", url: "https://en.wikipedia.org/wiki/Golden_State_Killer", publisher: "Wikipedia" },
      { label: "DOJ press release on guilty plea", url: "https://oag.ca.gov/news/press-releases/attorney-general-becerra-statement-joseph-deangelos-guilty-plea", publisher: "California DOJ" },
      { label: "The Atlantic — How a genealogy site led to the GSK", url: "https://www.theatlantic.com/science/archive/2018/04/golden-state-killer-east-area-rapist-dna-genealogy/559070/", publisher: "The Atlantic" },
    ],
  },
  {
    slug: "delphi-murders",
    title: "The Delphi Murders",
    subtitle: "A voice on a phone, a face on a bridge",
    location: "Delphi, Indiana, USA",
    years: "2017 – 2024",
    status: "Recently Solved",
    fileNumber: "ISP-17-D2",
    category: "Double Homicide",
    summary:
      "Best friends Abigail Williams and Liberty German were murdered while hiking. A grainy video and the words 'Down the hill' became one of the most viral pieces of evidence in modern crime.",
    body: [
      "On 13 February 2017, 13-year-old Abby Williams and 14-year-old Libby German were dropped off at the Monon High Bridge Trail. They never came home.",
      "Before she died, Libby recorded a man on her phone instructing the girls to walk 'down the hill.' That 43-second clip — released piece by piece over years — became the case's defining artifact.",
      "In October 2022, Indiana resident Richard Allen was arrested and charged. After a long pre-trial period and a high-profile trial in autumn 2024, he was found guilty of both murders.",
    ],
    timeline: [
      { date: "Feb 13, 2017", event: "Libby and Abby disappear from the Monon High Bridge Trail." },
      { date: "Feb 14, 2017", event: "Their bodies are discovered nearby." },
      { date: "2017 – 2022", event: "Multiple sketches and the 'bridge guy' video released." },
      { date: "Oct 28, 2022", event: "Richard Allen arrested and charged." },
      { date: "Nov 11, 2024", event: "Allen convicted of both murders." },
    ],
    evidence: [
      "43-second video and audio recovered from Libby's phone",
      "An unspent .40 calibre round at the scene matched to Allen's firearm",
      "Witness sightings of a man on the bridge that afternoon",
    ],
    outcome:
      "Richard Allen was sentenced in December 2024 to 130 years in prison. He has filed an appeal.",
    sources: [
      { label: "Wikipedia — Murders of Abigail Williams and Liberty German", url: "https://en.wikipedia.org/wiki/Murders_of_Abigail_Williams_and_Liberty_German", publisher: "Wikipedia" },
      { label: "AP News — Allen sentenced to 130 years", url: "https://apnews.com/article/delphi-murders-richard-allen-sentencing-89ec6f2e6e3a89b95b81d1e0e9f4b4a8", publisher: "Associated Press" },
      { label: "Indiana State Police case page", url: "https://www.in.gov/isp/3450.htm", publisher: "Indiana State Police" },
    ],
  },
  {
    slug: "db-cooper",
    title: "D. B. Cooper",
    subtitle: "The man who jumped out of a 727 with $200,000",
    location: "Pacific Northwest, USA",
    years: "November 24, 1971",
    status: "Cold Case",
    fileNumber: "FBI-NORJAK-71",
    category: "Skyjacking",
    summary:
      "A polite, well-dressed man hijacked a Northwest Orient flight, collected a ransom, and parachuted into the night somewhere over Washington State. The FBI closed active investigation in 2016.",
    body: [
      "On the eve of Thanksgiving 1971, a man calling himself Dan Cooper boarded Flight 305 from Portland to Seattle. He handed a flight attendant a note claiming he had a bomb.",
      "After the plane landed in Seattle, he exchanged the passengers for $200,000 in cash and four parachutes. The plane took off again. Somewhere between Seattle and Reno, he opened the rear stairs and jumped.",
      "He has never been identified. In 1980, a boy found $5,800 of the marked ransom money on the Columbia River — the only physical trace ever recovered.",
    ],
    timeline: [
      { date: "Nov 24, 1971, 2:50pm", event: "'Dan Cooper' boards NWO Flight 305 in Portland." },
      { date: "5:39pm", event: "Plane lands in Seattle. Passengers released for ransom and parachutes." },
      { date: "8:13pm", event: "Cabin pressure changes — Cooper has jumped." },
      { date: "Feb 10, 1980", event: "Brian Ingram finds $5,800 of the ransom on the Columbia River." },
      { date: "Jul 12, 2016", event: "FBI suspends active investigation." },
    ],
    evidence: [
      "Ransom serial numbers (a partial bundle recovered in 1980)",
      "A clip-on tie left on the aircraft, later DNA-tested",
      "Two of the four parachutes",
    ],
    outcome:
      "The case remains officially unsolved and is the only unsolved act of air piracy in American aviation history.",
    sources: [
      { label: "FBI — D.B. Cooper Hijacking", url: "https://www.fbi.gov/history/famous-cases/db-cooper-hijacking", publisher: "FBI" },
      { label: "Wikipedia — D. B. Cooper", url: "https://en.wikipedia.org/wiki/D._B._Cooper", publisher: "Wikipedia" },
      { label: "Smithsonian Magazine — Unmasking D.B. Cooper", url: "https://www.smithsonianmag.com/history/unmasking-db-cooper-180977333/", publisher: "Smithsonian" },
    ],
  },
  {
    slug: "madeleine-mccann",
    title: "The Disappearance of Madeleine McCann",
    subtitle: "A holiday apartment, a missing toddler, two decades of searching",
    location: "Praia da Luz, Portugal",
    years: "May 3, 2007",
    status: "Unsolved",
    fileNumber: "PJ-2007-MC",
    category: "Missing Person",
    summary:
      "Three-year-old Madeleine vanished from a holiday apartment in the Algarve. The case has spanned three police forces, four countries and continues to generate leads in 2025.",
    body: [
      "On the night of 3 May 2007, the McCann family were dining at a tapas restaurant inside their resort while their three children slept in the apartment 50 metres away. When Kate McCann checked on them at around 10pm, Madeleine was gone.",
      "The Portuguese investigation (Polícia Judiciária) was shelved in 2008. Britain's Metropolitan Police opened Operation Grange in 2011, and German prosecutors named convicted sex offender Christian Brückner as their prime suspect in 2020.",
      "Brückner was acquitted of unrelated sexual offences in October 2024 but remains the focus of the German investigation. No charges have been filed in connection with Madeleine.",
    ],
    timeline: [
      { date: "May 3, 2007", event: "Madeleine disappears from apartment 5A, Ocean Club, Praia da Luz." },
      { date: "Sep 2007", event: "Kate and Gerry McCann named as 'arguidos' (formal suspects), later cleared." },
      { date: "May 12, 2011", event: "Operation Grange launched by the Metropolitan Police." },
      { date: "Jun 3, 2020", event: "German prosecutors name Christian Brückner as prime suspect." },
      { date: "Oct 8, 2024", event: "Brückner acquitted of unrelated sexual offences in Braunschweig." },
    ],
    evidence: [
      "Witness sketch of a man carrying a child away from the resort",
      "Phone records placing a German suspect near Praia da Luz",
      "Items recovered from a former residence in Hanover (2024)",
    ],
    outcome:
      "Madeleine has never been found. The case remains one of the most heavily resourced missing-person investigations in European history.",
    sources: [
      { label: "Metropolitan Police — Operation Grange", url: "https://www.met.police.uk/sd/stats-and-data/met/operation-grange/", publisher: "Met Police" },
      { label: "Wikipedia — Disappearance of Madeleine McCann", url: "https://en.wikipedia.org/wiki/Disappearance_of_Madeleine_McCann", publisher: "Wikipedia" },
      { label: "BBC — Brückner cleared in unrelated trial", url: "https://www.bbc.com/news/articles/c1jjy7vxg37o", publisher: "BBC News" },
    ],
  },
  {
    slug: "jonbenet-ramsey",
    title: "The Murder of JonBenét Ramsey",
    subtitle: "A ransom note, a basement, and a case still open",
    location: "Boulder, Colorado, USA",
    years: "December 26, 1996",
    status: "Cold Case",
    fileNumber: "BPD-96-JBR",
    category: "Child Homicide",
    summary:
      "Six-year-old beauty pageant contestant JonBenét Ramsey was found dead in her family's basement on Boxing Day 1996. Nearly 30 years on, advanced DNA testing is still being applied.",
    body: [
      "Patsy Ramsey called 911 on the morning of 26 December 1996 to report her daughter missing and a long handwritten ransom note demanding $118,000 — an oddly specific sum that matched her husband's recent bonus.",
      "Hours later, John Ramsey found JonBenét's body in the basement. The investigation that followed was hampered by an unsecured crime scene and intense media scrutiny of the family.",
      "In 2008, then-DA Mary Lacy publicly cleared the immediate Ramsey family based on touch DNA from JonBenét's clothing. Boulder Police took the investigation back in 2009 and continue to apply new genetic testing methods.",
    ],
    timeline: [
      { date: "Dec 26, 1996, 5:52am", event: "Patsy Ramsey calls 911 to report a kidnapping." },
      { date: "Dec 26, 1996, ~1pm", event: "John Ramsey discovers JonBenét's body in the basement." },
      { date: "1998 – 1999", event: "Grand jury votes to indict the parents; DA declines to sign." },
      { date: "Jul 2008", event: "Ramsey family formally exonerated by DNA evidence." },
      { date: "2024 – 2025", event: "Boulder Police confirm new advanced DNA testing in progress." },
    ],
    evidence: [
      "Three-page handwritten ransom note",
      "Touch DNA recovered from JonBenét's underwear and long johns",
      "Garrote and broken paintbrush handle",
    ],
    outcome:
      "No one has ever been charged. The investigation is officially active with Boulder Police.",
    sources: [
      { label: "Boulder Police — JonBenét Ramsey case page", url: "https://bouldercolorado.gov/government/departments/police/jonbenet-ramsey-case", publisher: "Boulder PD" },
      { label: "Wikipedia — Murder of JonBenét Ramsey", url: "https://en.wikipedia.org/wiki/Murder_of_JonBen%C3%A9t_Ramsey", publisher: "Wikipedia" },
      { label: "CNN — Boulder PD on new DNA testing", url: "https://www.cnn.com/2024/12/19/us/jonbenet-ramsey-case-dna-testing/index.html", publisher: "CNN" },
    ],
  },
];

export const getCase = (slug: string) => cases.find((c) => c.slug === slug);
