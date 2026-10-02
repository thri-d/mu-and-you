/* Edit wording here. Keep question IDs, formula inputs, and R keys intact. */
(window.MU_CHAPTERS ||= []).push({
  "id": 7,
  "ready": true,
  "short": "One-sample t tests",
  "title": "A sample meets a reference.",
  "subtitle": "Build a t statistic from a difference and its uncertainty.",
  "playTitle": "The reference point",
  "playDescription": "Move the comparison value and watch the evidence change.",
  "reference": "For a one-sample t test, t = (x̄ − μ₀) / (s / √n), with df = n − 1. The null concerns a population mean. Observations should be independent; the usual small-sample exact t model assumes a normal population. Strong skew or extreme outliers can matter. A larger |t| means the mean difference is larger relative to its estimated SE. Default: two-tailed, α = .05. Report t(df), p, the estimate, and an interval. The reference in this app is fictional, not a health recommendation.",
  "practice": [
    {
      "concept": "test choice",
      "prompt": "When is a one-sample t test appropriate?",
      "choices": [
        "Comparing one quantitative sample mean with a specified population reference.",
        "Comparing two category counts without a mean.",
        "Comparing two independent sample means with each other."
      ],
      "answer": 0,
      "explain": "The one-sample test evaluates a mean against a fixed reference under its assumptions.",
      "id": "c7-01"
    },
    {
      "concept": "hypotheses",
      "prompt": "The null hypothesis concerns…",
      "choices": [
        "The population mean equaling the reference.",
        "The sample mean being unknown after calculation.",
        "Every individual equaling the reference."
      ],
      "answer": 0,
      "explain": "A mean hypothesis does not say that every person has the same value.",
      "id": "c7-02"
    },
    {
      "concept": "t statistic",
      "prompt": "Mean = {mean}, reference = {mu}, SD = {sd}, n = {n}. Find t.",
      "formula": {
        "kind": "t",
        "mean": 8,
        "mu": 7,
        "sd": 2,
        "n": 16
      },
      "explain": "SE = {sd} / √{n} = {se}. Then t = ({mean} − {mu}) / {se} = {answer}.",
      "unit": "",
      "id": "c7-03"
    },
    {
      "concept": "degrees of freedom",
      "prompt": "A one-sample t test uses n = {n}. What are its degrees of freedom?",
      "formula": {
        "kind": "df",
        "n": 12
      },
      "explain": "df = n − 1 = {answer}.",
      "unit": "",
      "id": "c7-04"
    },
    {
      "concept": "t statistic",
      "prompt": "What is in the denominator of the one-sample t statistic?",
      "choices": [
        "The estimated standard error of the mean.",
        "The raw sample mean.",
        "The sample size alone."
      ],
      "answer": 0,
      "explain": "The numerator is a mean difference; the denominator expresses its estimated sampling variability.",
      "id": "c7-05"
    },
    {
      "concept": "sign",
      "prompt": "A negative t statistic means…",
      "choices": [
        "The sample mean is below the stated reference.",
        "The two-tailed p-value is negative.",
        "The test must be nonsignificant."
      ],
      "answer": 0,
      "explain": "The sign follows the numerator x̄ minus μ₀. Two-tailed evidence depends on magnitude, not sign alone.",
      "id": "c7-06"
    },
    {
      "concept": "t distribution",
      "prompt": "Compared with a standard normal curve, a t distribution with few degrees of freedom has…",
      "choices": [
        "Heavier tails.",
        "No tails.",
        "Only positive values."
      ],
      "answer": 0,
      "explain": "Estimating population SD introduces extra uncertainty reflected in heavier tails.",
      "id": "c7-07"
    },
    {
      "concept": "degrees of freedom",
      "prompt": "As t degrees of freedom increase, the t distribution…",
      "choices": [
        "Approaches the standard normal distribution.",
        "Becomes increasingly one-sided.",
        "Turns into a categorical distribution."
      ],
      "answer": 0,
      "explain": "With more information about variability, the extra uncertainty in estimating SD diminishes.",
      "id": "c7-08"
    },
    {
      "concept": "assumptions",
      "prompt": "Which feature is especially important for the standard one-sample t model?",
      "choices": [
        "Independent observations.",
        "All observations must be identical.",
        "The outcome must be a category name."
      ],
      "answer": 0,
      "explain": "Dependence changes the sampling variability. Small-sample normality and unusual outliers also deserve attention.",
      "id": "c7-09"
    },
    {
      "concept": "robustness",
      "prompt": "A tiny sample has strong skew and an extreme outlier. What should you do?",
      "choices": [
        "Examine assumptions and consider an appropriate alternative or sensitivity analysis.",
        "Assume t tests never need assumptions.",
        "Delete the outlier solely to obtain significance."
      ],
      "answer": 0,
      "explain": "Small-sample t inference can be sensitive to strong nonnormality and outliers. Analysis choices need justification.",
      "id": "c7-10"
    },
    {
      "concept": "decision",
      "prompt": "A nonsignificant one-sample result tells you…",
      "choices": [
        "Evidence did not meet the chosen rejection rule.",
        "The population mean is exactly the reference.",
        "The sample and population means are identical."
      ],
      "answer": 0,
      "explain": "Failure to reject does not prove equality. Look at the interval and the range of effects still compatible with the model.",
      "id": "c7-11"
    },
    {
      "concept": "critical t",
      "prompt": "Why does the usual two-tailed critical t decrease as df rises?",
      "choices": [
        "Less uncertainty from estimating SD means lighter tails.",
        "The sample mean must get smaller.",
        "Alpha automatically increases."
      ],
      "answer": 0,
      "explain": "At a fixed alpha, the t cutoff approaches the corresponding normal cutoff as degrees of freedom grow.",
      "id": "c7-12"
    },
    {
      "concept": "reporting",
      "prompt": "Which is appropriate when software returns a p-value smaller than .001?",
      "choices": [
        "Report p < .001.",
        "Report p = .000.",
        "Report a negative p-value."
      ],
      "answer": 0,
      "explain": "A rounded zero is not an exact zero probability. APA-style reporting uses an inequality for very small p-values.",
      "id": "c7-13"
    },
    {
      "concept": "interpretation",
      "prompt": "A significant one-sample result does not by itself establish…",
      "choices": [
        "A large or practically important difference.",
        "A result under a specified decision rule.",
        "A comparison with the stated reference."
      ],
      "answer": 0,
      "explain": "Significance concerns evidence relative to uncertainty, not automatic practical importance.",
      "id": "c7-14"
    },
    {
      "concept": "R arguments",
      "prompt": "In t.test(x, mu = reference), mu specifies…",
      "choices": [
        "The hypothesized population mean.",
        "The observed sample mean to overwrite.",
        "The standard deviation."
      ],
      "answer": 0,
      "explain": "mu is the null mean for a one-sample test. R defaults to a two-sided alternative and a 95% interval.",
      "id": "c7-15"
    }
  ],
  "pairs": [
    {
      "left": "Sample SD",
      "right": "Standard error",
      "prompt": "The denominator used to standardize the mean difference into t.",
      "answer": 1,
      "explain": "t divides by s / √n, not by s alone.",
      "id": "p7-01"
    },
    {
      "left": "t statistic",
      "right": "Critical t",
      "prompt": "The cutoff from a reference distribution and chosen alpha.",
      "answer": 1,
      "explain": "The observed t comes from data; critical t defines a rejection boundary.",
      "id": "p7-02"
    },
    {
      "left": "Population mean",
      "right": "Every individual value",
      "prompt": "What a one-sample mean hypothesis is about.",
      "answer": 0,
      "explain": "A statement about an average does not require all individuals to match it.",
      "id": "p7-03"
    },
    {
      "left": "One-tailed",
      "right": "Two-tailed",
      "prompt": "Evidence in either direction is relevant to the stated alternative.",
      "answer": 1,
      "explain": "A two-tailed alternative includes departures above and below the null value.",
      "id": "p7-04"
    }
  ],
  "rPractice": [
    {
      "concept": "Read R",
      "prompt": "What is the null value in this output?",
      "choices": [
        "The fictional reference passed as mu.",
        "The observed sample mean.",
        "The p-value."
      ],
      "answer": 0,
      "explain": "The code specifies the null mean. This comparison value is fictional and is not a health recommendation.",
      "rKey": "c7-test",
      "id": "c7-r1"
    },
    {
      "concept": "Read R",
      "prompt": "The sample mean equals the reference here. What does the result support?",
      "choices": [
        "The data provide no t-test evidence against that mean reference.",
        "The null has been proven true.",
        "Every population member must equal the reference."
      ],
      "answer": 0,
      "explain": "An observed t of zero gives no directional departure. It does not prove the null or imply identical individuals.",
      "rKey": "c7-p",
      "id": "c7-r2"
    }
  ]
});
