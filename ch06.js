/* Edit wording here. Keep question IDs, formula inputs, and R keys intact. */
(window.MU_CHAPTERS ||= []).push({
  "id": 6,
  "ready": true,
  "short": "Effect sizes & intervals",
  "title": "How much? How precisely?",
  "subtitle": "Let an estimate tell you more than a yes or no.",
  "playTitle": "The uncertainty window",
  "playDescription": "Compare effect magnitude with the width of an interval.",
  "reference": "Statistical significance is not practical importance. A standardized effect expresses a difference relative to a stated SD. Here, one-sample Cohen’s d = (x̄ − μ₀) / s. A t confidence interval for a mean is x̄ ± t* × s / √n under the model assumptions. Frequentist 95% confidence describes long-run coverage of the procedure, not a 95% posterior probability for a fixed parameter. Higher confidence widens an interval; more independent observations usually narrow it. Practical importance depends on context. Default intervals here use 95% confidence.",
  "practice": [
    {
      "concept": "effect size",
      "prompt": "A tiny effect can be statistically significant when…",
      "choices": [
        "The estimate is sufficiently precise, often with a large sample.",
        "Its practical benefit must be large.",
        "The null is true by definition."
      ],
      "answer": 0,
      "explain": "Significance depends on magnitude relative to uncertainty. A small effect estimated precisely can yield a small p-value.",
      "id": "c6-01"
    },
    {
      "concept": "importance",
      "prompt": "How should practical importance be judged?",
      "choices": [
        "Using context, consequences, costs, and the effect’s size and uncertainty.",
        "Using only whether p is below alpha.",
        "Using only the direction of the effect."
      ],
      "answer": 0,
      "explain": "Practical significance is a substantive judgment, not an automatic consequence of a threshold.",
      "id": "c6-02"
    },
    {
      "concept": "Cohen’s d",
      "prompt": "A sample mean is {mean}, the reference is {mu}, and sample SD is {sd}. Find one-sample d.",
      "formula": {
        "kind": "d",
        "mean": 54,
        "mu": 50,
        "sd": 8
      },
      "explain": "d = ({mean} − {mu}) / {sd} = {answer}. The difference is expressed in sample SD units.",
      "unit": "",
      "id": "c6-03"
    },
    {
      "concept": "standardization",
      "prompt": "A negative one-sample Cohen’s d indicates…",
      "choices": [
        "The sample mean is below the stated reference.",
        "An invalid effect size.",
        "A harmful effect in every context."
      ],
      "answer": 0,
      "explain": "The sign depends on subtraction order and the reference. Desirability depends on the measured outcome.",
      "id": "c6-04"
    },
    {
      "concept": "effect size",
      "prompt": "Why state which standardized effect-size formula you used?",
      "choices": [
        "Different designs and SD denominators produce different measures.",
        "All versions are numerically identical.",
        "The choice of denominator is only decoration."
      ],
      "answer": 0,
      "explain": "One-sample, pooled-group, and paired-difference standardizations are not interchangeable.",
      "id": "c6-05"
    },
    {
      "concept": "confidence intervals",
      "prompt": "A frequentist confidence interval primarily communicates…",
      "choices": [
        "An estimate’s uncertainty under a stated procedure and assumptions.",
        "The middle observations in the sample.",
        "The probability of every individual outcome."
      ],
      "answer": 0,
      "explain": "A parameter interval is different from a data range, box plot, or prediction interval.",
      "id": "c6-06"
    },
    {
      "concept": "coverage",
      "prompt": "What does 95% confidence mean in repeated sampling?",
      "choices": [
        "About 95% of intervals from the procedure cover the fixed true parameter, under assumptions.",
        "This fixed parameter has a 95% chance of moving into this interval.",
        "95% of observations must be inside the interval."
      ],
      "answer": 0,
      "explain": "The interval varies between samples; the parameter is fixed in the frequentist model.",
      "id": "c6-07"
    },
    {
      "concept": "interval width",
      "prompt": "Holding the data and method fixed, increasing the confidence level…",
      "choices": [
        "Widens the interval.",
        "Narrows the interval.",
        "Changes the sample mean."
      ],
      "answer": 0,
      "explain": "Higher coverage requires a larger critical multiplier.",
      "id": "c6-08"
    },
    {
      "concept": "precision",
      "prompt": "With similar variability, more independent observations generally…",
      "choices": [
        "Narrow the interval for a mean.",
        "Widen it because more people are different.",
        "Guarantee zero uncertainty."
      ],
      "answer": 0,
      "explain": "The SE decreases with the square root of sample size. Finite samples still leave uncertainty.",
      "id": "c6-09"
    },
    {
      "concept": "precision",
      "prompt": "Greater variability, holding sample size fixed, generally…",
      "choices": [
        "Widens the interval for a mean.",
        "Narrows the interval.",
        "Changes confidence into probability of the null."
      ],
      "answer": 0,
      "explain": "Greater SD leads to a larger SE and hence a larger margin of error.",
      "id": "c6-10"
    },
    {
      "concept": "confidence limits",
      "prompt": "Mean = {mean}, sample SD = {sd}, n = {n}. Find the upper endpoint of the usual 95% t interval.",
      "formula": {
        "kind": "ci",
        "mean": 10,
        "sd": 2,
        "n": 9,
        "bound": "high"
      },
      "explain": "SE = {se}; the t-based margin is {margin}. Upper endpoint = {mean} + {margin} = {answer}.",
      "unit": "points",
      "id": "c6-11"
    },
    {
      "concept": "intervals and tests",
      "prompt": "A two-sided 95% t interval excludes the null value. For the corresponding two-sided test at alpha .05…",
      "choices": [
        "The null is rejected, using the same model and method.",
        "The null must be accepted.",
        "The result says nothing about that corresponding test."
      ],
      "answer": 0,
      "explain": "The equivalence applies when the interval and test use the same model, standard error, and hypotheses.",
      "id": "c6-12"
    },
    {
      "concept": "nonsignificance",
      "prompt": "An interval includes zero and also fairly large effects. What is the careful conclusion?",
      "choices": [
        "The estimate is too uncertain to rule out several plausible effects.",
        "There is definitely no effect.",
        "All values in the interval are equally likely."
      ],
      "answer": 0,
      "explain": "A wide interval can be consistent with no effect and with meaningful effects. Nonsignificance alone does not settle the question.",
      "id": "c6-13"
    },
    {
      "concept": "sample size",
      "prompt": "If you quadruple n while SD stays similar, SE is approximately…",
      "choices": [
        "Halved.",
        "Quartered.",
        "Unchanged."
      ],
      "answer": 0,
      "explain": "SE is proportional to 1 / √n. Multiplying n by four divides SE by two.",
      "id": "c6-14"
    },
    {
      "concept": "reporting",
      "prompt": "A useful quantitative result usually includes…",
      "choices": [
        "An estimate, effect size when appropriate, uncertainty, and context.",
        "Only a significance star.",
        "Only the largest number in the output."
      ],
      "answer": 0,
      "explain": "Readers need magnitude and precision alongside the design and interpretation.",
      "id": "c6-15"
    }
  ],
  "pairs": [
    {
      "left": "Statistical significance",
      "right": "Practical importance",
      "prompt": "Whether a difference matters in the real decision context.",
      "answer": 1,
      "explain": "Practical importance depends on consequences and magnitude, not only p.",
      "id": "p6-01"
    },
    {
      "left": "Confidence interval",
      "right": "Data range",
      "prompt": "Uncertainty in an estimated population mean.",
      "answer": 0,
      "explain": "A confidence interval concerns a parameter. A range concerns observed extremes.",
      "id": "p6-02"
    },
    {
      "left": "Effect magnitude",
      "right": "Precision",
      "prompt": "How narrowly the parameter is estimated.",
      "answer": 1,
      "explain": "Precision concerns uncertainty; effect magnitude concerns how large the difference is.",
      "id": "p6-03"
    },
    {
      "left": "Higher confidence",
      "right": "Larger sample",
      "prompt": "Holding SD similar, this usually narrows a mean interval.",
      "answer": 1,
      "explain": "More independent observations reduce SE. Higher confidence instead widens the interval.",
      "id": "p6-04"
    }
  ],
  "rPractice": [
    {
      "concept": "Read R",
      "prompt": "What does this interval estimate?",
      "choices": [
        "The population mean under the one-sample t model.",
        "The scores of 95% of individual students.",
        "The probability that the null is true."
      ],
      "answer": 0,
      "explain": "t.test() returns an interval for the mean here, not a range containing a fixed percentage of observations.",
      "rKey": "c6-ci",
      "id": "c6-r1"
    },
    {
      "concept": "Read R",
      "prompt": "What is the computed effect size?",
      "choices": [
        "A one-sample standardized mean difference.",
        "A correlation coefficient.",
        "A p-value."
      ],
      "answer": 0,
      "explain": "The code divides the difference from the reference by the sample SD, giving one-sample Cohen’s d.",
      "rKey": "c6-d",
      "id": "c6-r2"
    }
  ]
});
