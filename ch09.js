/* Edit wording here. Keep question IDs, formula inputs, and R keys intact. */
(window.MU_CHAPTERS ||= []).push({
  "id": 9,
  "ready": true,
  "short": "ANOVA",
  "title": "A bigger table of possibilities.",
  "subtitle": "Compare variability, then look for effects that depend on context.",
  "playTitle": "Between, within, together",
  "playDescription": "Change group separation and explore a two-factor interaction.",
  "reference": "One-way ANOVA tests equality of population means across levels of one factor. F compares between-group mean square with within-group mean square. A significant omnibus test says at least one mean differs, not which ones. Follow-up comparisons should match the question and address multiplicity. Classical ANOVA assumes independent observations, normally distributed errors within cells, and equal error variances. Two-way ANOVA includes two factors, their main effects, and an interaction. An interaction means the effect of one factor depends on the other. This app uses balanced designs, so the displayed sums of squares agree across the usual types. η² here is SSbetween / SStotal for one-way ANOVA.",
  "practice": [
    {
      "concept": "test choice",
      "prompt": "Why use an omnibus ANOVA instead of many unadjusted pairwise t tests?",
      "choices": [
        "It tests the joint equal-means null without inflating error through many unadjusted tests.",
        "It guarantees every group differs.",
        "It removes the need for assumptions."
      ],
      "answer": 0,
      "explain": "Repeated unadjusted comparisons increase the chance of at least one false positive. ANOVA addresses an omnibus question.",
      "id": "c9-01"
    },
    {
      "concept": "null hypothesis",
      "prompt": "The one-way ANOVA null states…",
      "choices": [
        "All population group means are equal.",
        "All individual observations are equal.",
        "All sample standard deviations are zero."
      ],
      "answer": 0,
      "explain": "The null concerns population means, not identical individuals.",
      "id": "c9-02"
    },
    {
      "concept": "F statistic",
      "prompt": "F compares…",
      "choices": [
        "Between-group mean square with within-group mean square.",
        "The largest raw value with the smallest.",
        "A p-value with the sample size."
      ],
      "answer": 0,
      "explain": "F is a ratio of variability estimates. Under the null, both estimate the common error variance.",
      "id": "c9-03"
    },
    {
      "concept": "F statistic",
      "prompt": "Between-group mean square is {msBetween}; within-group mean square is {msWithin}. Find F.",
      "formula": {
        "kind": "f",
        "msBetween": 12,
        "msWithin": 3
      },
      "explain": "F = {msBetween} / {msWithin} = {answer}.",
      "unit": "",
      "id": "c9-04"
    },
    {
      "concept": "within variability",
      "prompt": "Holding group means and sample sizes fixed, greater within-group spread generally…",
      "choices": [
        "Makes group separation less clear relative to noise.",
        "Guarantees a larger F.",
        "Proves a main effect."
      ],
      "answer": 0,
      "explain": "Increasing within-group variance increases the denominator of F when the between-group component is fixed.",
      "id": "c9-05"
    },
    {
      "concept": "omnibus result",
      "prompt": "A significant one-way ANOVA tells you…",
      "choices": [
        "At least one population mean differs under the model.",
        "Every pair differs.",
        "Which group caused the difference."
      ],
      "answer": 0,
      "explain": "The omnibus result does not identify all specific pairwise differences.",
      "id": "c9-06"
    },
    {
      "concept": "post-hoc tests",
      "prompt": "Why use a suitable adjustment in multiple follow-up comparisons?",
      "choices": [
        "To control a stated error rate across the comparison family.",
        "To force every comparison to be significant.",
        "To change the observed data."
      ],
      "answer": 0,
      "explain": "Multiplicity adjustments address the extra opportunities for false positives. The adjustment should match the inferential goal.",
      "id": "c9-07"
    },
    {
      "concept": "factors",
      "prompt": "A two-by-two factorial design has…",
      "choices": [
        "Two factors, each with two levels.",
        "Four factors with one level each.",
        "Two outcomes and no predictors."
      ],
      "answer": 0,
      "explain": "Factors are predictors or conditions; levels are their categories. Crossing them creates four cells.",
      "id": "c9-08"
    },
    {
      "concept": "main effects",
      "prompt": "A main effect in a balanced two-factor design compares…",
      "choices": [
        "Levels of one factor averaged across levels of the other.",
        "Only the largest and smallest individual scores.",
        "The correlation between two outcome variables."
      ],
      "answer": 0,
      "explain": "Marginal means average over the other factor. They can conceal important interactions.",
      "id": "c9-09"
    },
    {
      "concept": "interaction",
      "prompt": "An interaction means…",
      "choices": [
        "The effect of one factor depends on the level of another.",
        "Both factors necessarily have significant main effects.",
        "Every line on a graph must cross."
      ],
      "answer": 0,
      "explain": "Nonparallel population patterns indicate an interaction in the model. Crossing is not required.",
      "id": "c9-10"
    },
    {
      "concept": "interactions",
      "prompt": "Can a crossover interaction occur with no average main effects?",
      "choices": [
        "Yes. Effects in opposite directions can cancel in marginal means.",
        "No. Every interaction requires two main effects.",
        "Only if the outcome is categorical."
      ],
      "answer": 0,
      "explain": "Averaging can hide context-dependent effects. Inspect cell means and the interaction.",
      "id": "c9-11"
    },
    {
      "concept": "graphs",
      "prompt": "Nonparallel lines in sample means…",
      "choices": [
        "Suggest an interaction pattern that still needs uncertainty assessment.",
        "Prove a population interaction without inference.",
        "Are impossible with sampling noise."
      ],
      "answer": 0,
      "explain": "Sample lines can be nonparallel through sampling variability. A graph alone does not settle the inferential question.",
      "id": "c9-12"
    },
    {
      "concept": "assumptions",
      "prompt": "Classical independent-groups ANOVA generally requires…",
      "choices": [
        "Independent observations and suitable error-distribution and variance assumptions.",
        "Equal observed means.",
        "Only positive outcome values."
      ],
      "answer": 0,
      "explain": "Check independence, within-cell residual shape, and homogeneity of error variance; balanced designs do not eliminate every concern.",
      "id": "c9-13"
    },
    {
      "concept": "effect size",
      "prompt": "One-way eta-squared summarizes…",
      "choices": [
        "The fraction of total sample variation attributed to between-group differences.",
        "The probability that every null is false.",
        "The number of follow-up tests."
      ],
      "answer": 0,
      "explain": "η² = SSbetween / SStotal in this one-way setting. It is descriptive and not automatically a causal fraction.",
      "id": "c9-14"
    },
    {
      "concept": "reporting",
      "prompt": "When an interaction is important, a useful interpretation emphasizes…",
      "choices": [
        "How the effect changes across the other factor’s levels.",
        "Only a single average main effect.",
        "A claim that all conditions behave identically."
      ],
      "answer": 0,
      "explain": "Describe the conditional pattern and suitable follow-ups rather than relying only on marginal averages.",
      "id": "c9-15"
    }
  ],
  "pairs": [
    {
      "left": "Within-group variation",
      "right": "Between-group variation",
      "prompt": "Variation of individuals around their own group mean.",
      "answer": 0,
      "explain": "Within-group variation supplies the error component in classical one-way ANOVA.",
      "id": "p9-01"
    },
    {
      "left": "Omnibus test",
      "right": "Pairwise comparison",
      "prompt": "Asks whether all population means can be treated as equal.",
      "answer": 0,
      "explain": "The omnibus test evaluates the whole equal-means null. Pairwise comparisons ask more specific questions.",
      "id": "p9-02"
    },
    {
      "left": "Main effect",
      "right": "Interaction",
      "prompt": "One study method helps in one context but not another.",
      "answer": 1,
      "explain": "The effect depends on context, which is an interaction.",
      "id": "p9-03"
    },
    {
      "left": "Factor",
      "right": "Level",
      "prompt": "Quiet is one category of the study-environment variable.",
      "answer": 1,
      "explain": "Environment is a factor; quiet is a level of it.",
      "id": "p9-04"
    }
  ],
  "rPractice": [
    {
      "concept": "Read R",
      "prompt": "If the method row meets the rejection rule, what follows?",
      "choices": [
        "At least one population method mean differs under the ANOVA model.",
        "Every pair of methods differs.",
        "The residual row is another experimental condition."
      ],
      "answer": 0,
      "explain": "The method row tests the omnibus effect. Specific differences need justified follow-ups such as adjusted pairwise comparisons.",
      "rKey": "c9-oneway",
      "id": "c9-r1"
    },
    {
      "concept": "Read R",
      "prompt": "Which row tests whether the method effect depends on context?",
      "choices": [
        "method:context.",
        "Residuals.",
        "Only the intercept, which is hidden."
      ],
      "answer": 0,
      "explain": "The colon term is the interaction. Here the balanced fictional data create a crossover pattern with no average main effects.",
      "rKey": "c9-factorial",
      "id": "c9-r2"
    }
  ]
});
