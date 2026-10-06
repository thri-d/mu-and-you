/* Edit wording here. Keep question IDs, formula inputs, and R keys intact. */
(window.MU_CHAPTERS ||= []).push({
  "id": 10,
  "ready": true,
  "short": "Chi-square",
  "title": "When the data are counts.",
  "subtitle": "Compare what you observed with what a categorical model expects.",
  "playTitle": "Expected, observed, curious",
  "playDescription": "Move category counts away from their expected pattern.",
  "reference": "Chi-square uses counts in mutually exclusive categories, with independent observational units. Goodness-of-fit compares one variable’s counts with specified probabilities. Independence compares two categorical variables in a contingency table. Expected count under independence is row total × column total / grand total. χ² = Σ(O − E)² / E. Standard df: categories − 1 for a fully specified goodness-of-fit model, or (rows − 1)(columns − 1) for independence. Very small expected counts can make the usual chi-square approximation unreliable. This app’s 2×2 R example explicitly disables continuity correction to show the uncorrected Pearson statistic; R otherwise defaults to a correction for 2×2 tables. A significant association is not proof of causation.",
  "practice": [
    {
      "concept": "test choice",
      "prompt": "A chi-square goodness-of-fit test compares…",
      "choices": [
        "One categorical variable’s counts with specified expected proportions.",
        "Two sample means.",
        "Two continuous variables’ slopes."
      ],
      "answer": 0,
      "explain": "Goodness-of-fit evaluates a categorical count pattern against a specified model.",
      "id": "c10-01"
    },
    {
      "concept": "test choice",
      "prompt": "A chi-square independence test asks whether…",
      "choices": [
        "Two categorical variables are associated.",
        "Two population means are identical.",
        "A single raw score is above average."
      ],
      "answer": 0,
      "explain": "The null says the joint categorical distribution factors into independent margins.",
      "id": "c10-02"
    },
    {
      "concept": "observed versus expected",
      "prompt": "Observed counts are…",
      "choices": [
        "The counts actually recorded in each category or cell.",
        "The counts predicted by the null model.",
        "Always the same as the row totals."
      ],
      "answer": 0,
      "explain": "Expected counts are calculated under a model; observed counts come from the dataset.",
      "id": "c10-03"
    },
    {
      "concept": "expected counts",
      "prompt": "A cell has row total {row}, column total {col}, and grand total {total}. Find its expected count under independence.",
      "formula": {
        "kind": "expected",
        "row": 40,
        "col": 30,
        "total": 100
      },
      "explain": "E = ({row} × {col}) / {total} = {answer}.",
      "unit": "",
      "id": "c10-04"
    },
    {
      "concept": "chi-square contribution",
      "prompt": "A category has observed count {observed} and expected count {expected}. Find its contribution to χ².",
      "formula": {
        "kind": "chiPart",
        "observed": 30,
        "expected": 20
      },
      "explain": "Contribution = ({observed} − {expected})² / {expected} = {answer}.",
      "unit": "",
      "id": "c10-05"
    },
    {
      "concept": "chi-square statistic",
      "prompt": "Why square the observed-minus-expected deviations?",
      "choices": [
        "So positive and negative deviations do not cancel.",
        "To force a negative statistic.",
        "To convert counts into causal effects."
      ],
      "answer": 0,
      "explain": "Squared differences are never negative, so they add up instead of cancelling. Larger gaps between observed and expected counts generally produce a larger χ².",
      "id": "c10-06"
    },
    {
      "concept": "chi-square distribution",
      "prompt": "The Pearson chi-square statistic cannot be negative because…",
      "choices": [
        "Its terms are squared deviations divided by positive expected counts.",
        "All observed values equal one.",
        "Its p-value must equal its statistic."
      ],
      "answer": 0,
      "explain": "With valid positive expected counts, each contribution is nonnegative.",
      "id": "c10-07"
    },
    {
      "concept": "degrees of freedom",
      "prompt": "For a fully specified goodness-of-fit model with k categories, the usual df is…",
      "choices": [
        "k − 1.",
        "The number of people minus one in every case.",
        "Always two."
      ],
      "answer": 0,
      "explain": "The fixed total imposes one constraint. Estimating model parameters from the same data can further change df.",
      "id": "c10-08"
    },
    {
      "concept": "degrees of freedom",
      "prompt": "For an r-by-c independence table, the usual df is…",
      "choices": [
        "(r − 1)(c − 1).",
        "r + c.",
        "The grand total."
      ],
      "answer": 0,
      "explain": "The row and column constraints leave (r − 1)(c − 1) freely varying cell dimensions.",
      "id": "c10-09"
    },
    {
      "concept": "assumptions",
      "prompt": "The count-size condition concerns primarily…",
      "choices": [
        "Expected counts under the null.",
        "Only observed counts being nonzero.",
        "The font size in the table."
      ],
      "answer": 0,
      "explain": "Sparse expected counts can make the reference chi-square approximation unreliable.",
      "id": "c10-10"
    },
    {
      "concept": "sparse tables",
      "prompt": "A small two-by-two table has sparse expected counts. A possible alternative is…",
      "choices": [
        "An appropriate exact test, such as Fisher’s exact test.",
        "Automatically replacing small counts with larger ones.",
        "Ignoring the issue because totals are printed."
      ],
      "answer": 0,
      "explain": "When expected counts are very small, the usual chi-square approximation can be poor. An exact test, or a suitable simulation-based method, may be preferable.",
      "id": "c10-11"
    },
    {
      "concept": "independence",
      "prompt": "Why not use a standard independence chi-square test on before/after yes/no responses as if they were unrelated?",
      "choices": [
        "The same people create paired categorical observations.",
        "Yes/no responses are never categorical.",
        "There are too few variable names."
      ],
      "answer": 0,
      "explain": "Repeated binary responses require a method that respects pairing, such as McNemar’s test in a suitable setting.",
      "id": "c10-12"
    },
    {
      "concept": "units",
      "prompt": "What should ordinarily enter a chi-square test?",
      "choices": [
        "Actual counts with the correct sample size.",
        "Percentages treated as if they were raw counts.",
        "Only group means."
      ],
      "answer": 0,
      "explain": "Percentages alone can conceal the sample size, which affects the test. Do not substitute them as raw counts.",
      "id": "c10-13"
    },
    {
      "concept": "interpretation",
      "prompt": "A significant chi-square association establishes…",
      "choices": [
        "Evidence of categorical association under the model, not causation.",
        "That one variable causes the other.",
        "That every cell differs equally."
      ],
      "answer": 0,
      "explain": "Inspect the table and context. The omnibus test neither establishes causation nor identifies equal departures in every cell.",
      "id": "c10-14"
    },
    {
      "concept": "direction",
      "prompt": "Why does a single chi-square value not tell you which categories are overrepresented?",
      "choices": [
        "Squaring removes the signs of the cell deviations.",
        "The original counts are impossible to inspect.",
        "Chi-square is a mean difference."
      ],
      "answer": 0,
      "explain": "Compare observed and expected counts, and suitable residuals, to understand the pattern.",
      "id": "c10-15"
    }
  ],
  "pairs": [
    {
      "left": "Goodness-of-fit",
      "right": "Independence",
      "prompt": "One categorical variable is compared with specified proportions.",
      "answer": 0,
      "explain": "Goodness-of-fit uses one variable; independence uses a joint table of two.",
      "id": "p10-01"
    },
    {
      "left": "Observed count",
      "right": "Expected count",
      "prompt": "Row total times column total divided by grand total.",
      "answer": 1,
      "explain": "This is the independence-model expected count.",
      "id": "p10-02"
    },
    {
      "left": "Counts",
      "right": "Percentages alone",
      "prompt": "The usual input retaining the actual sample size.",
      "answer": 0,
      "explain": "Use counts. Percentages require denominators before they can represent count data.",
      "id": "p10-03"
    },
    {
      "left": "Independent observations",
      "right": "Paired observations",
      "prompt": "The same people give before/after yes/no responses.",
      "answer": 1,
      "explain": "The observations are linked within people and need a paired categorical method.",
      "id": "p10-04"
    }
  ],
  "rPractice": [
    {
      "concept": "Read R",
      "prompt": "Where do the expected counts come from?",
      "choices": [
        "The total count multiplied by the specified category probabilities.",
        "The largest observed count copied to every category.",
        "A comparison of group means."
      ],
      "answer": 0,
      "explain": "For goodness-of-fit, expected counts are total × null probability. The specified probabilities are equal in this example.",
      "rKey": "c10-gof",
      "id": "c10-r1"
    },
    {
      "concept": "Read R",
      "prompt": "Why is correct = FALSE stated explicitly?",
      "choices": [
        "It selects the uncorrected Pearson statistic for this two-by-two table.",
        "It tells R to use incorrect data.",
        "It turns the test into a paired t test."
      ],
      "answer": 0,
      "explain": "R normally applies a continuity correction to a 2×2 table. This teaching example explicitly uses the uncorrected Pearson convention.",
      "rKey": "c10-table",
      "id": "c10-r2"
    }
  ]
});
