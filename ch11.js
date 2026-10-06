/* Edit wording here. Keep question IDs, formula inputs, and R keys intact. */
(window.MU_CHAPTERS ||= []).push({
  "id": 11,
  "ready": true,
  "short": "Correlation",
  "title": "Two variables. One unfolding pattern.",
  "subtitle": "Look for direction, strength, and the stories a line cannot tell.",
  "playTitle": "Make a relationship",
  "playDescription": "Change a cloud of points, then discover what one unusual point can do.",
  "reference": "Pearson’s r describes the direction and strength of a linear association between two quantitative variables. It is unitless and lies from −1 to +1. Near-zero r does not rule out a nonlinear relationship. Outliers and restricted ranges can alter r. Correlation is symmetric and does not establish causation. The usual Pearson test assumes independent pairs and, for exact small-sample results, roughly normal data on both variables (a bivariate-normal model). In simple ordinary least squares regression with an intercept, R² = r².",
  "practice": [
    {
      "concept": "direction",
      "prompt": "As sleep hours increase, stress scores tend to decrease. The association is…",
      "choices": [
        "Negative.",
        "Positive.",
        "Necessarily causal."
      ],
      "answer": 0,
      "explain": "The variables tend to move in opposite directions. The direction does not identify a cause.",
      "id": "c11-01"
    },
    {
      "concept": "strength",
      "prompt": "How do you compare the strengths of two Pearson correlations?",
      "choices": [
        "Compare their absolute magnitudes, while also inspecting the scatterplots.",
        "The positive value is always stronger.",
        "Compare the variables’ units only."
      ],
      "answer": 0,
      "explain": "The sign describes direction. Magnitude describes linear strength, but a plot can reveal outliers, curves, and subgroups.",
      "id": "c11-02"
    },
    {
      "concept": "range",
      "prompt": "A reported Pearson correlation lies outside −1 to +1. What should you do?",
      "choices": [
        "Check the calculation or report for an error.",
        "Interpret it as a very strong valid correlation.",
        "Round it until it becomes plausible."
      ],
      "answer": 0,
      "explain": "Pearson’s r is bounded. Rounding cannot justify an impossible value.",
      "id": "c11-03"
    },
    {
      "concept": "linearity",
      "prompt": "A scatterplot is strongly U-shaped but r is near zero. What is the careful conclusion?",
      "choices": [
        "There is little linear association, even though a nonlinear relationship is visible.",
        "There is no relationship of any kind.",
        "The data must be independent by definition."
      ],
      "answer": 0,
      "explain": "Pearson’s r summarizes linear association. Opposing trends across a curve can cancel in the linear summary.",
      "id": "c11-04"
    },
    {
      "concept": "outliers",
      "prompt": "An unusual point appears far from the rest of a scatterplot. What next?",
      "choices": [
        "Investigate it and assess sensitivity without automatically deleting it.",
        "Delete it whenever r becomes less convenient.",
        "Ignore it because correlations cannot change."
      ],
      "answer": 0,
      "explain": "One point can strengthen, weaken, or reverse a correlation. Data quality and justified sensitivity analyses matter.",
      "id": "c11-05"
    },
    {
      "concept": "units",
      "prompt": "You convert every sleep value from hours to minutes. Pearson’s r with stress…",
      "choices": [
        "Stays the same, because this is a positive linear rescaling.",
        "Becomes sixty times larger.",
        "Must reverse sign."
      ],
      "answer": 0,
      "explain": "Changing a variable’s units by a positive linear transformation leaves Pearson correlation unchanged.",
      "id": "c11-06"
    },
    {
      "concept": "symmetry",
      "prompt": "You swap the x and y variables. Pearson’s r…",
      "choices": [
        "Stays the same.",
        "Becomes its reciprocal.",
        "Changes to the regression slope."
      ],
      "answer": 0,
      "explain": "Correlation is symmetric. Regression predictions and slopes depend on which variable is the outcome.",
      "id": "c11-07"
    },
    {
      "concept": "causation",
      "prompt": "Coffee use and stress are positively correlated in a survey. Which claim is supported?",
      "choices": [
        "They co-vary in this sample, without establishing why.",
        "Coffee has been proven to cause stress.",
        "Stress cannot possibly affect coffee use."
      ],
      "answer": 0,
      "explain": "Reverse direction, confounding, and other explanations remain possible in observational data.",
      "id": "c11-08"
    },
    {
      "concept": "confounding",
      "prompt": "A third variable influences both recorded variables. This can…",
      "choices": [
        "Help explain an observed association without a direct causal effect between them.",
        "Be ruled out by computing r.",
        "Only happen when the association is nonsignificant."
      ],
      "answer": 0,
      "explain": "Correlation does not control all other variables. A plausible causal interpretation needs appropriate design and analysis.",
      "id": "c11-09"
    },
    {
      "concept": "range restriction",
      "prompt": "A study includes only students with almost identical prior scores. Why inspect that restriction?",
      "choices": [
        "Limited variation can change the observed correlation and its generalizability.",
        "Restriction always makes r exactly zero.",
        "Restricting a range guarantees a stronger relationship."
      ],
      "answer": 0,
      "explain": "A correlation depends on the distribution sampled. The direction and size of the change depend on how selection operates.",
      "id": "c11-10"
    },
    {
      "concept": "significance",
      "prompt": "A small Pearson p-value establishes…",
      "choices": [
        "Evidence against the specified zero-correlation null under the test assumptions.",
        "A large or practically important relationship automatically.",
        "That the sample correlation equals the population correlation exactly."
      ],
      "answer": 0,
      "explain": "Statistical significance concerns evidence and uncertainty. It does not substitute for effect size or practical context.",
      "id": "c11-11"
    },
    {
      "concept": "shared variation",
      "prompt": "In simple regression with an intercept, r = {r}. What is R²?",
      "formula": {
        "kind": "r2",
        "r": -0.6
      },
      "explain": "R² = r² = ({r})² = {answer}. Squaring removes direction; it does not establish causation.",
      "unit": "",
      "id": "c11-12"
    },
    {
      "concept": "assumptions",
      "prompt": "Several rows are repeated measures from each person. Before the usual Pearson significance test, consider…",
      "choices": [
        "The dependence between rows, which the usual independent-pairs test does not handle.",
        "Treating every row as an unrelated participant.",
        "Ignoring participant structure if r is positive."
      ],
      "answer": 0,
      "explain": "Repeated observations can violate independent-pairs inference. The design may require a model for clustered or repeated data.",
      "id": "c11-13"
    },
    {
      "concept": "uncertainty",
      "prompt": "A correlation interval includes zero and substantial associations. What follows?",
      "choices": [
        "The estimate is uncertain; both zero and meaningful associations remain compatible.",
        "No meaningful association is possible.",
        "The sign of every individual observation is unknown."
      ],
      "answer": 0,
      "explain": "An interval communicates the range of parameter values compatible with the method and data under assumptions.",
      "id": "c11-14"
    },
    {
      "concept": "workflow",
      "prompt": "Before summarizing two quantitative variables with r, it helps to…",
      "choices": [
        "Inspect their scatterplot and the way the data were collected.",
        "Skip the plot because r contains every pattern.",
        "Choose the desired sign first."
      ],
      "answer": 0,
      "explain": "Plots reveal features hidden by a single statistic. Design determines which inferences are reasonable.",
      "id": "c11-15"
    }
  ],
  "pairs": [
    {
      "left": "Direction",
      "right": "Strength",
      "prompt": "The sign of Pearson’s r describes this.",
      "answer": 0,
      "explain": "Positive and negative describe direction. Absolute magnitude describes linear strength.",
      "id": "p11-01"
    },
    {
      "left": "Linear association",
      "right": "Any relationship",
      "prompt": "The specific kind of pattern summarized by Pearson’s r.",
      "answer": 0,
      "explain": "A strong curve can coexist with a weak linear correlation.",
      "id": "p11-02"
    },
    {
      "left": "Correlation",
      "right": "Causation",
      "prompt": "Two observational variables vary together; the mechanism remains unknown.",
      "answer": 0,
      "explain": "Co-variation alone cannot establish cause and effect.",
      "id": "p11-03"
    },
    {
      "left": "r",
      "right": "r²",
      "prompt": "The simple-regression proportion of outcome variation accounted for, with an intercept.",
      "answer": 1,
      "explain": "r² removes the sign and equals R² in this particular regression setting.",
      "id": "p11-04"
    }
  ],
  "rPractice": [
    {
      "concept": "Read R",
      "prompt": "Which interpretation respects this fictional observational design?",
      "choices": [
        "Higher sleep tends to accompany lower stress; this does not show that sleep caused the difference.",
        "Sleep is proven to reduce stress.",
        "The negative correlation means the p-value is negative."
      ],
      "answer": 0,
      "explain": "Read the negative sample correlation as direction of linear association. The test and interval do not establish a causal mechanism.",
      "rKey": "c11-correlation",
      "id": "c11-r1"
    },
    {
      "concept": "Read R",
      "prompt": "The variables have an exact U-shaped relationship. Why is r still zero here?",
      "choices": [
        "The opposing slopes cancel in the linear summary.",
        "R proves the variables are unrelated.",
        "Squaring a variable always makes all its values identical."
      ],
      "answer": 0,
      "explain": "This made-up example shows a limit of linear correlation: the points follow an exact curve, yet r is zero. Because the data are a constructed curve rather than a random sample, treat the p-value as an illustration, not as evidence.",
      "rKey": "c11-zero",
      "id": "c11-r2"
    }
  ]
});
