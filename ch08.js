/* Edit wording here. Keep question IDs, formula inputs, and R keys intact. */
(window.MU_CHAPTERS ||= []).push({
  "id": 8,
  "ready": true,
  "short": "Two-sample t tests",
  "title": "Two groups. One careful comparison.",
  "subtitle": "Ask whether the observations belong together before choosing a test.",
  "playTitle": "Together or apart?",
  "playDescription": "Compare independent groups with changes within the same people.",
  "reference": "Independent samples come from unrelated units in two groups. Paired observations are linked, such as before/after measurements on the same people. A paired t test is a one-sample t test on differences; state the subtraction order. Welch’s independent-samples test, R’s default, allows unequal population variances and can have noninteger df. It still requires suitable independence and distributional conditions. Group membership in an observational study does not establish causation. A single-group before/after study alone cannot isolate an intervention effect.",
  "practice": [
    {
      "concept": "design",
      "prompt": "Different students are sampled from two unrelated groups. Which t design fits?",
      "choices": [
        "Independent samples.",
        "Paired samples automatically.",
        "One-sample comparison with no reference."
      ],
      "answer": 0,
      "explain": "The observations are not matched or repeated on the same units.",
      "id": "c8-01"
    },
    {
      "concept": "design",
      "prompt": "The same students provide stress scores before and after an exercise. Which t design fits?",
      "choices": [
        "Paired samples.",
        "Independent samples because there are two columns.",
        "Chi-square goodness-of-fit."
      ],
      "answer": 0,
      "explain": "The two measurements are linked within each person. That dependence should be retained.",
      "id": "c8-02"
    },
    {
      "concept": "paired tests",
      "prompt": "A paired t test analyzes…",
      "choices": [
        "Within-pair differences.",
        "Two group means while ignoring the pairing.",
        "Only the first measurement."
      ],
      "answer": 0,
      "explain": "Compute one difference per pair, then compare the mean difference with its null reference.",
      "id": "c8-03"
    },
    {
      "concept": "difference direction",
      "prompt": "If differences are defined as after minus before, a negative mean difference means…",
      "choices": [
        "Scores decreased on average.",
        "Scores increased on average.",
        "Every participant improved."
      ],
      "answer": 0,
      "explain": "The sign follows subtraction order. An average decrease does not imply that every person decreased or that lower is always better.",
      "id": "c8-04"
    },
    {
      "concept": "Welch",
      "prompt": "Why might Welch’s test report a noninteger df?",
      "choices": [
        "Its degrees of freedom approximate uncertainty from two separately estimated variances.",
        "R has counted part of a person.",
        "The result is invalid by definition."
      ],
      "answer": 0,
      "explain": "The Welch-Satterthwaite degrees of freedom are a model-based approximation, not a headcount.",
      "id": "c8-05"
    },
    {
      "concept": "Welch",
      "prompt": "R’s default independent two-sample t.test() uses…",
      "choices": [
        "Welch’s unequal-variance method.",
        "The pooled equal-variance method in every case.",
        "A paired test whenever vectors have equal length."
      ],
      "answer": 0,
      "explain": "Welch is the default. Set paired = TRUE only for justified pairing; equal vector lengths do not establish a paired design.",
      "id": "c8-06"
    },
    {
      "concept": "independence",
      "prompt": "Welch’s allowance for unequal variances does not remove the need to consider…",
      "choices": [
        "Independence and the outcome’s distribution.",
        "Whether the two sample sizes match exactly.",
        "Whether the p-value is positive or negative."
      ],
      "answer": 0,
      "explain": "Welch addresses unequal variances, not every design or distribution problem.",
      "id": "c8-07"
    },
    {
      "concept": "paired df",
      "prompt": "For a paired t test, sample size means…",
      "choices": [
        "The number of complete pairs.",
        "The sum of all before and after entries counted separately.",
        "The number of groups."
      ],
      "answer": 0,
      "explain": "One difference per complete pair enters the test. Its df is the number of pairs minus one.",
      "id": "c8-08"
    },
    {
      "concept": "paired df",
      "prompt": "There are {n} complete pairs. What is the paired t-test df?",
      "formula": {
        "kind": "df",
        "n": 18
      },
      "explain": "There is one difference per pair, so df = {n} − 1 = {answer}.",
      "unit": "",
      "id": "c8-09"
    },
    {
      "concept": "matching",
      "prompt": "You sort the before and after columns separately before a paired test. What happens?",
      "choices": [
        "The original person-level pairings can be destroyed.",
        "The test becomes more accurate automatically.",
        "Nothing; pair identities never matter."
      ],
      "answer": 0,
      "explain": "Keep records linked by the actual pairing. Separate sorting can create artificial differences.",
      "id": "c8-10"
    },
    {
      "concept": "missing pairs",
      "prompt": "A participant lacks an after score. For a complete-pair analysis…",
      "choices": [
        "That incomplete pair cannot supply a difference.",
        "Pair their before score with someone else’s after score.",
        "Replace the missing score with a convenient value without disclosure."
      ],
      "answer": 0,
      "explain": "A difference requires both measurements from the same pair. Missing-data handling needs transparent justification.",
      "id": "c8-11"
    },
    {
      "concept": "causation",
      "prompt": "Pet owners have lower average stress in an observational comparison. What follows?",
      "choices": [
        "The groups differ in this sample; ownership is not established as the cause.",
        "Pets have been proven to reduce stress.",
        "Confounding is impossible if p is small."
      ],
      "answer": 0,
      "explain": "Self-selected groups can differ on other characteristics. A t test alone cannot remove those alternative explanations.",
      "id": "c8-12"
    },
    {
      "concept": "causation",
      "prompt": "Stress decreases after an exercise in one group with no control group. What remains possible?",
      "choices": [
        "Time, expectations, regression to the mean, or other changes contributed.",
        "The exercise must be the sole cause.",
        "The paired test is itself random assignment."
      ],
      "answer": 0,
      "explain": "Pairing handles dependence, but it does not create a control condition or eliminate all alternative explanations.",
      "id": "c8-13"
    },
    {
      "concept": "paired assumptions",
      "prompt": "For the usual small-sample paired t model, normality concerns…",
      "choices": [
        "The population distribution of within-pair differences.",
        "Both columns separately being exactly identical.",
        "The names of the participants."
      ],
      "answer": 0,
      "explain": "The paired test is a one-sample analysis of differences, so that distribution is central.",
      "id": "c8-14"
    },
    {
      "concept": "interpretation",
      "prompt": "A confidence interval for a group mean difference includes zero. For its matching two-sided t test…",
      "choices": [
        "It does not reject at the corresponding alpha.",
        "The two groups are proven equivalent.",
        "Every observation must be equal."
      ],
      "answer": 0,
      "explain": "A zero-containing interval can indicate uncertainty, not equivalence. Equivalence requires a different, prespecified question.",
      "id": "c8-15"
    }
  ],
  "pairs": [
    {
      "left": "Independent",
      "right": "Paired",
      "prompt": "Two measurements from each of the same people.",
      "answer": 1,
      "explain": "Repeated measurements on the same units form pairs.",
      "id": "p8-01"
    },
    {
      "left": "Welch t test",
      "right": "Pooled t test",
      "prompt": "Estimates the two group variances separately.",
      "answer": 0,
      "explain": "Welch does not require equal population variances. A pooled test adds that assumption.",
      "id": "p8-02"
    },
    {
      "left": "Mean difference",
      "right": "Difference in two group means",
      "prompt": "For a paired design, first calculate a difference within every pair.",
      "answer": 0,
      "explain": "The paired analysis uses the variability of those within-pair differences.",
      "id": "p8-03"
    },
    {
      "left": "Association",
      "right": "Causation",
      "prompt": "The defensible starting interpretation for self-selected pet groups.",
      "answer": 0,
      "explain": "An observational group difference does not establish a causal effect.",
      "id": "p8-04"
    }
  ],
  "rPractice": [
    {
      "concept": "Read R",
      "prompt": "Which group’s mean is subtracted from which?",
      "choices": [
        "Pet minus no-pet, following the x and y inputs.",
        "No-pet minus pet.",
        "The output does not use a mean difference."
      ],
      "answer": 0,
      "explain": "For t.test(x, y), the tested difference is mean(x) minus mean(y). These fictional pet groups are observational.",
      "rKey": "c8-welch",
      "id": "c8-r1"
    },
    {
      "concept": "Read R",
      "prompt": "What do negative differences mean in this transcript?",
      "choices": [
        "After scores are lower, on average.",
        "Before scores are lower, on average.",
        "The p-value is negative."
      ],
      "answer": 0,
      "explain": "The code uses after minus before. The paired t test evaluates the mean of those differences, not proof of an intervention’s cause.",
      "rKey": "c8-paired",
      "id": "c8-r2"
    }
  ]
});
