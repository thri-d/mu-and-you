/* Edit wording here. Keep question IDs, formula inputs, and R keys intact. */
(window.MU_CHAPTERS ||= []).push({
  "id": 1,
  "ready": true,
  "short": "Statistics everywhere",
  "title": "People first. Data next.",
  "subtitle": "Turn everyday questions into variables you can work with.",
  "playTitle": "Meet the variables",
  "playDescription": "Change how a question is recorded. What information survives?",
  "reference": "A case is one observational unit; a variable is a characteristic recorded for cases. Nominal categories have no inherent order; ordinal categories are ordered without assuming equal spacing. Interval scales have equal units but no meaningful absolute zero; ratio scales add a meaningful zero. Numbers used as labels remain categories. Random sampling supports population generalization; random assignment supports causal comparisons. Neither is a magic guarantee. In R, <- assigns, == compares, and missing values are NA. Verify AI explanations and code; never invent observations or disclose private data.",
  "practice": [
    {
      "concept": "cases",
      "prompt": "Each row of a sleep survey represents one student. What is a case?",
      "choices": [
        "One student.",
        "The sleep variable.",
        "The column average."
      ],
      "answer": 0,
      "explain": "A case is the unit on which observations are recorded. Here, one student contributes a row.",
      "id": "c1-01"
    },
    {
      "concept": "variables",
      "prompt": "Hours slept varies from student to student. It is a…",
      "choices": [
        "Variable.",
        "Sample size.",
        "Population parameter."
      ],
      "answer": 0,
      "explain": "A variable can take different values for different cases.",
      "id": "c1-02"
    },
    {
      "concept": "measurement",
      "prompt": "Pet ownership is coded no = 0 and yes = 1. What scale is this?",
      "choices": [
        "Nominal.",
        "Ratio, because there is a zero.",
        "Interval, because the codes differ by one."
      ],
      "answer": 0,
      "explain": "The numbers are category labels. Arithmetic distances between the codes do not create a measured quantity.",
      "id": "c1-03"
    },
    {
      "concept": "measurement",
      "prompt": "Students choose low, medium, or high stress. What can you safely assume?",
      "choices": [
        "The categories are ordered.",
        "The steps are exactly equally spaced.",
        "High is three times low."
      ],
      "answer": 0,
      "explain": "Ordered categories are ordinal. Equal distances between categories are an additional assumption.",
      "id": "c1-04"
    },
    {
      "concept": "measurement",
      "prompt": "Which variable has a meaningful zero and meaningful ratios?",
      "choices": [
        "Minutes spent on a task.",
        "Temperature in Celsius.",
        "Student ID number."
      ],
      "answer": 0,
      "explain": "Zero task minutes means no elapsed task time. Twice the duration is meaningful; Celsius zero is not an absence of temperature.",
      "id": "c1-05"
    },
    {
      "concept": "measurement",
      "prompt": "Which example is usually treated as an interval scale?",
      "choices": [
        "Temperature in Celsius.",
        "Preferred study location.",
        "Number of siblings."
      ],
      "answer": 0,
      "explain": "Celsius uses equal-sized units, but its zero is arbitrary, so ratio statements are not meaningful.",
      "id": "c1-06"
    },
    {
      "concept": "sampling",
      "prompt": "You want to describe all psychology majors but survey one class. The class is your…",
      "choices": [
        "Sample.",
        "Entire target population.",
        "Random assignment."
      ],
      "answer": 0,
      "explain": "The target population is all psychology majors. One class is a sample and may differ systematically from that population.",
      "id": "c1-07"
    },
    {
      "concept": "sampling",
      "prompt": "Only friends respond to your survey. What is a concern?",
      "choices": [
        "Selection bias may limit generalization.",
        "A large spreadsheet makes the sample random.",
        "Every sample is equally representative."
      ],
      "answer": 0,
      "explain": "Who participates matters. Convenience and self-selection can produce systematic differences from the target population.",
      "id": "c1-08"
    },
    {
      "concept": "design",
      "prompt": "Students choose whether they own pets; you measure stress. This is…",
      "choices": [
        "Observational.",
        "A randomized experiment.",
        "Proof pets change stress."
      ],
      "answer": 0,
      "explain": "You did not assign pet ownership. Group differences can reflect other variables, so they do not establish causation.",
      "id": "c1-09"
    },
    {
      "concept": "design",
      "prompt": "Participants are randomly assigned to two study methods. What does this help with?",
      "choices": [
        "Balancing potential confounders across conditions, on average.",
        "Making the sample represent every student.",
        "Guaranteeing the groups are identical."
      ],
      "answer": 0,
      "explain": "Random assignment supports causal comparison under a sound design. It is different from randomly sampling a population.",
      "id": "c1-10"
    },
    {
      "concept": "R basics",
      "prompt": "In R, what does sleep <- c(6, 7, 8) do?",
      "choices": [
        "Stores a vector in an object named sleep.",
        "Tests whether sleep equals the vector.",
        "Deletes all previous objects."
      ],
      "answer": 0,
      "explain": "The assignment operator <- stores the value on its right under the name on its left. The function c() combines values.",
      "id": "c1-11"
    },
    {
      "concept": "R basics",
      "prompt": "Which operator checks equality in R?",
      "choices": [
        "==",
        "<-",
        "!="
      ],
      "answer": 0,
      "explain": "== tests equality. <- assigns a value. != tests inequality.",
      "id": "c1-12"
    },
    {
      "concept": "missing data",
      "prompt": "A response is missing. Which is the most honest initial record?",
      "choices": [
        "NA, with the reason documented if known.",
        "Zero, because it is easy to calculate.",
        "A plausible number invented by AI."
      ],
      "answer": 0,
      "explain": "Missing is not the same as zero. Missing-data decisions should be transparent and appropriate to the analysis.",
      "id": "c1-13"
    },
    {
      "concept": "responsible AI",
      "prompt": "An AI tool gives plausible code and a confident interpretation. What next?",
      "choices": [
        "Check the code, output, assumptions, and interpretation.",
        "Treat confidence as evidence of accuracy.",
        "Submit fabricated output if the code will not run."
      ],
      "answer": 0,
      "explain": "AI can assist, but you remain responsible for verifying what code actually does and what the results support.",
      "id": "c1-14"
    },
    {
      "concept": "privacy",
      "prompt": "Which dataset is safest to use for a public practice app?",
      "choices": [
        "Clearly labeled fictional observations.",
        "Student names and actual stress responses.",
        "Real responses with names hidden in another column."
      ],
      "answer": 0,
      "explain": "Fictional data avoid exposing real student information. Removing a visible name alone does not guarantee de-identification.",
      "id": "c1-15"
    }
  ],
  "pairs": [
    {
      "left": "Case",
      "right": "Variable",
      "prompt": "One student whose responses occupy one row.",
      "answer": 0,
      "explain": "The student is the case; sleep hours and pet ownership are variables.",
      "id": "p1-01"
    },
    {
      "left": "Nominal",
      "right": "Ordinal",
      "prompt": "Ordered response categories, without assuming equal gaps.",
      "answer": 1,
      "explain": "Ordinal categories have order. Nominal categories need not.",
      "id": "p1-02"
    },
    {
      "left": "Random sampling",
      "right": "Random assignment",
      "prompt": "Selecting who enters the sample from the target population.",
      "answer": 0,
      "explain": "Sampling concerns who is studied. Assignment concerns which condition participants receive.",
      "id": "p1-03"
    },
    {
      "left": "Observation",
      "right": "Experiment",
      "prompt": "The researcher assigns the study condition.",
      "answer": 1,
      "explain": "Manipulating a condition is a feature of an experiment. Random assignment strengthens causal interpretation.",
      "id": "p1-04"
    }
  ],
  "rPractice": [
    {
      "concept": "Read R",
      "prompt": "What does the second printed result count?",
      "choices": [
        "Missing sleep entries.",
        "Students who slept zero hours.",
        "Columns in a data frame."
      ],
      "answer": 0,
      "explain": "is.na() marks missing entries; sum() counts the TRUE values. NA is not zero.",
      "rKey": "c1-structure",
      "id": "c1-r1"
    },
    {
      "concept": "Read R",
      "prompt": "How should pet be interpreted here?",
      "choices": [
        "As a categorical factor.",
        "As a measured numeric quantity.",
        "As a set of real student identities."
      ],
      "answer": 0,
      "explain": "factor() stores categories. Internal coding does not turn the categories into quantitative measurements.",
      "rKey": "c1-factor",
      "id": "c1-r2"
    }
  ]
});
