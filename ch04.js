/* Edit wording here. Keep question IDs, formula inputs, and R keys intact. */
(window.MU_CHAPTERS ||= []).push({
  "id": 4,
  "ready": true,
  "short": "z scores & probability",
  "title": "Find your place on the curve.",
  "subtitle": "Standardize a value, then ask what the model predicts.",
  "playTitle": "A dot in perspective",
  "playDescription": "Move a value and change the spread of a normal model.",
  "reference": "A z score is z = (x − μ) / σ when population parameters are given. With sample summaries, state that you use (x − x̄) / s. Computing z does not require normal data. Converting z into normal-model probabilities does assume a normal model. Normal-curve areas represent probabilities; a single exact value has zero probability in a continuous model. The Empirical Rule is an approximation for normal distributions. Observed ranks and model probabilities are different quantities.",
  "practice": [
    {
      "concept": "z scores",
      "prompt": "A normal model has mean {mean} and SD {sd}. A value is {x}. Find z.",
      "formula": {
        "kind": "z",
        "mean": 50,
        "sd": 10,
        "x": 60
      },
      "explain": "z = ({x} − {mean}) / {sd} = {answer}. The value is above the mean.",
      "unit": "",
      "id": "c4-01"
    },
    {
      "concept": "z scores",
      "prompt": "With mean {mean} and SD {sd}, find z for {x}.",
      "formula": {
        "kind": "z",
        "mean": 50,
        "sd": 10,
        "x": 35
      },
      "explain": "Subtract the mean, then divide by SD: z = {answer}. Negative means below the mean.",
      "unit": "",
      "id": "c4-02"
    },
    {
      "concept": "z scores",
      "prompt": "A z score of zero means the value is…",
      "choices": [
        "At the mean.",
        "Missing.",
        "At the minimum."
      ],
      "answer": 0,
      "explain": "The numerator x minus the mean is zero. It says nothing by itself about the minimum or missingness.",
      "id": "c4-03"
    },
    {
      "concept": "z scores",
      "prompt": "A positive z score always means…",
      "choices": [
        "Above the reference mean.",
        "A desirable outcome.",
        "Statistical significance."
      ],
      "answer": 0,
      "explain": "The sign describes relative position. Whether higher values are desirable depends on what is measured.",
      "id": "c4-04"
    },
    {
      "concept": "z scores",
      "prompt": "Why standardize values from different scales?",
      "choices": [
        "To express relative position in SD units.",
        "To guarantee the scales measure the same construct.",
        "To prove the values are normally distributed."
      ],
      "answer": 0,
      "explain": "Standardization puts distance from a reference mean into common SD units. It does not make different constructs equivalent.",
      "id": "c4-05"
    },
    {
      "concept": "normal model",
      "prompt": "Does computing z make a skewed distribution normal?",
      "choices": [
        "No. It shifts and rescales the values.",
        "Yes. Every z distribution is a bell curve.",
        "Only when z is positive."
      ],
      "answer": 0,
      "explain": "A linear transformation preserves the underlying shape. Normal probabilities require a justified model.",
      "id": "c4-06"
    },
    {
      "concept": "probability",
      "prompt": "In a standard normal model, the mean is at the…",
      "choices": [
        "Middle of the distribution.",
        "Upper tail.",
        "Largest possible value."
      ],
      "answer": 0,
      "explain": "The standard normal model is symmetric around its mean. Half the area lies on each side.",
      "id": "c4-07"
    },
    {
      "concept": "normal area",
      "prompt": "Under a standard normal model, what proportion lies below z = {z}?",
      "formula": {
        "kind": "prob",
        "z": 1
      },
      "explain": "The normal cumulative distribution gives approximately {answer}. This is a model probability, not an observed class rank.",
      "unit": "",
      "id": "c4-08"
    },
    {
      "concept": "probability",
      "prompt": "The probability of an event and its complement…",
      "choices": [
        "Sum to one.",
        "Must be equal.",
        "Are independent by definition."
      ],
      "answer": 0,
      "explain": "An event and its complement cover all outcomes and cannot occur together.",
      "id": "c4-09"
    },
    {
      "concept": "probability",
      "prompt": "For mutually exclusive events, P(A or B) is…",
      "choices": [
        "P(A) + P(B).",
        "Always P(A) × P(B).",
        "Always one half."
      ],
      "answer": 0,
      "explain": "Mutually exclusive events cannot overlap. If they can overlap, the intersection must be subtracted.",
      "id": "c4-10"
    },
    {
      "concept": "probability",
      "prompt": "For independent events, P(A and B) is…",
      "choices": [
        "P(A) × P(B).",
        "P(A) + P(B).",
        "Always zero."
      ],
      "answer": 0,
      "explain": "Independence means the occurrence of one does not change the probability of the other.",
      "id": "c4-11"
    },
    {
      "concept": "percentiles",
      "prompt": "An observed percentile and a normal-model percentile…",
      "choices": [
        "Can differ when the actual distribution differs from the model.",
        "Are always identical for any dataset.",
        "Are both measures of a person’s worth."
      ],
      "answer": 0,
      "explain": "Observed ranks come from the data. Normal-model percentiles come from assumptions about shape.",
      "id": "c4-12"
    },
    {
      "concept": "empirical rule",
      "prompt": "The Empirical Rule is intended as an approximation for…",
      "choices": [
        "Normal distributions.",
        "Every distribution regardless of shape.",
        "Only categorical variables."
      ],
      "answer": 0,
      "explain": "Its familiar proportions concern areas within specified SD distances of a normal mean.",
      "id": "c4-13"
    },
    {
      "concept": "continuous probability",
      "prompt": "In a continuous normal model, P(X equals one exact value) is…",
      "choices": [
        "Zero; intervals have positive area.",
        "The height of the curve at that value.",
        "Always one half."
      ],
      "answer": 0,
      "explain": "Probability is area under a density curve, not the height at a point. An exact point has no width.",
      "id": "c4-14"
    },
    {
      "concept": "spread",
      "prompt": "Hold x above the mean fixed, but increase the reference SD. What happens to its positive z?",
      "choices": [
        "It moves closer to zero.",
        "It grows larger.",
        "It becomes negative."
      ],
      "answer": 0,
      "explain": "The same raw distance divided by a larger SD gives a smaller standardized distance.",
      "id": "c4-15"
    }
  ],
  "pairs": [
    {
      "left": "Raw score",
      "right": "z score",
      "prompt": "Distance from a reference mean expressed in SD units.",
      "answer": 1,
      "explain": "A z score expresses relative distance on a standardized scale.",
      "id": "p4-01"
    },
    {
      "left": "Observed percentile",
      "right": "Normal-model percentile",
      "prompt": "A rank determined from the actual recorded observations.",
      "answer": 0,
      "explain": "Observed percentiles use data; normal-model percentiles use an assumed distribution.",
      "id": "p4-02"
    },
    {
      "left": "Probability density",
      "right": "Probability",
      "prompt": "The area under a normal curve over an interval.",
      "answer": 1,
      "explain": "Area is probability. Height is density and can have different units.",
      "id": "p4-03"
    },
    {
      "left": "Mutually exclusive",
      "right": "Independent",
      "prompt": "Knowing one event occurred leaves the probability of the other unchanged.",
      "answer": 1,
      "explain": "Independence concerns unchanged probability. Mutually exclusive events cannot happen together.",
      "id": "p4-04"
    }
  ],
  "rPractice": [
    {
      "concept": "Read R",
      "prompt": "What does the second line give?",
      "choices": [
        "The area above the specified z value.",
        "The probability that the null hypothesis is true.",
        "The number of students above the mean."
      ],
      "answer": 0,
      "explain": "lower.tail = FALSE requests the upper-tail area in the normal model.",
      "rKey": "c4-pnorm",
      "id": "c4-r1"
    },
    {
      "concept": "Read R",
      "prompt": "What does scale() do here by default?",
      "choices": [
        "Subtracts the sample mean and divides by sample SD.",
        "Fits a normal distribution and proves it is correct.",
        "Converts all values into probabilities."
      ],
      "answer": 0,
      "explain": "With default centering and scaling, scale() uses the sample mean and sample SD. Shape is not forced to be normal.",
      "rKey": "c4-scale",
      "id": "c4-r2"
    }
  ]
});
