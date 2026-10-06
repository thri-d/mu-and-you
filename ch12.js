/* Edit wording here. Keep question IDs, formula inputs, and R keys intact. */
(window.MU_CHAPTERS ||= []).push({
  "id": 12,
  "ready": true,
  "short": "Regression",
  "title": "A line that makes a guess.",
  "subtitle": "Predict thoughtfully, then pay attention to what the line misses.",
  "playTitle": "The prediction studio",
  "playDescription": "Move a prediction point and compare a fitted line with individual observations.",
  "reference": "Simple ordinary least squares regression predicts a quantitative outcome from a predictor: ŷ = b₀ + b₁x. The slope is predicted outcome change for a one-unit predictor increase; the intercept is the prediction at x = 0 and may have no useful interpretation outside the data range. Residual = observed y − predicted ŷ. OLS minimizes the sum of squared residuals. Standard t inference uses independent, approximately normal, constant-variance errors around a linear mean function. A confidence interval for the mean response is narrower than a prediction interval for one new response at the same x. Regression and R² do not establish causation.",
  "practice": [
    {
      "concept": "roles",
      "prompt": "In a model predicting stress from sleep, stress is the…",
      "choices": [
        "Outcome.",
        "Predictor.",
        "Sample size."
      ],
      "answer": 0,
      "explain": "The outcome is what the model predicts. The predictor supplies information used for that prediction.",
      "id": "c12-01"
    },
    {
      "concept": "slope",
      "prompt": "A negative fitted slope means…",
      "choices": [
        "Higher predictor values give lower predicted outcomes within the fitted linear model.",
        "Every person’s outcome decreases whenever the predictor is changed.",
        "The model has a negative p-value."
      ],
      "answer": 0,
      "explain": "The slope describes the fitted association. It does not guarantee individual changes or identify a causal effect.",
      "id": "c12-02"
    },
    {
      "concept": "prediction",
      "prompt": "A fitted model has intercept {a} and slope {b}. What is predicted y at x = {x}?",
      "formula": {
        "kind": "predict",
        "a": 12,
        "b": -0.8,
        "x": 5
      },
      "explain": "ŷ = b₀ + b₁x = {a} + ({b})({x}) = {answer}.",
      "unit": "",
      "id": "c12-03"
    },
    {
      "concept": "intercept",
      "prompt": "The intercept is the fitted outcome when…",
      "choices": [
        "The predictor equals zero.",
        "The outcome equals zero.",
        "The predictor equals its own mean in every model."
      ],
      "answer": 0,
      "explain": "Whether that prediction is meaningful depends on the variable and whether zero lies in a relevant range.",
      "id": "c12-04"
    },
    {
      "concept": "residual",
      "prompt": "A point is above the fitted line. Its residual y − ŷ is…",
      "choices": [
        "Positive.",
        "Negative.",
        "Necessarily zero."
      ],
      "answer": 0,
      "explain": "Above the line, observed y exceeds predicted y, so observed minus predicted is positive.",
      "id": "c12-05"
    },
    {
      "concept": "least squares",
      "prompt": "Ordinary least squares chooses coefficients to minimize…",
      "choices": [
        "The sum of squared residuals.",
        "The sum of all predictor values.",
        "The largest possible correlation p-value."
      ],
      "answer": 0,
      "explain": "Squaring makes both positive and negative discrepancies contribute positively to the objective.",
      "id": "c12-06"
    },
    {
      "concept": "extrapolation",
      "prompt": "Your observed sleep values cover ordinary nightly durations. Predicting for a much longer duration is…",
      "choices": [
        "Extrapolation, whose validity is not established by fit within the observed range.",
        "Guaranteed to be accurate if R² is large.",
        "The same as interpolating between observed values."
      ],
      "answer": 0,
      "explain": "A relationship may change outside the observed range. The fitted line alone cannot validate extrapolation.",
      "id": "c12-07"
    },
    {
      "concept": "slope units",
      "prompt": "A slope is {b} score units per hour. What is the predicted change for {change} additional hours?",
      "formula": {
        "kind": "slopeChange",
        "b": -0.75,
        "change": 2
      },
      "explain": "Multiply the slope by the predictor change: {b} × {change} = {answer} score units.",
      "unit": "",
      "id": "c12-08"
    },
    {
      "concept": "R squared",
      "prompt": "What does R² summarize for a fitted OLS model with an intercept?",
      "choices": [
        "The fraction of sample outcome variation around its mean accounted for by the fitted values.",
        "The fraction of people whose outcomes were caused by the predictor.",
        "The probability that the model is true."
      ],
      "answer": 0,
      "explain": "R² is a fit summary relative to a mean-only baseline. It is not a causal share or a probability that a model is true.",
      "id": "c12-09"
    },
    {
      "concept": "uncertainty",
      "prompt": "At the same predictor value, a prediction interval for a new individual is wider than a mean-response interval because…",
      "choices": [
        "It includes individual variation as well as uncertainty about the fitted mean.",
        "The line’s slope changes for every interval type.",
        "The sample size becomes smaller automatically."
      ],
      "answer": 0,
      "explain": "A new individual can vary around the regression mean. Predicting that individual requires accounting for this additional uncertainty.",
      "id": "c12-10"
    },
    {
      "concept": "assumptions",
      "prompt": "A fan-shaped residual plot suggests…",
      "choices": [
        "The error variance may change across predictor values.",
        "The residuals are guaranteed to have constant variance.",
        "There can be no association."
      ],
      "answer": 0,
      "explain": "Changing residual spread calls the usual constant-variance inference into question, even when a fitted line is possible.",
      "id": "c12-11"
    },
    {
      "concept": "diagnostics",
      "prompt": "A clear curve remains in the residuals after fitting a line. What should you consider?",
      "choices": [
        "The linear mean function may miss a systematic pattern.",
        "The line must be the correct form.",
        "The residuals have become nominal categories."
      ],
      "answer": 0,
      "explain": "Residual plots help assess what the fitted model has not captured.",
      "id": "c12-12"
    },
    {
      "concept": "slope significance",
      "prompt": "The usual two-sided p-value for the slope evaluates…",
      "choices": [
        "A zero population-slope null under the regression assumptions.",
        "Whether every prediction equals its observation.",
        "Whether the predictor was randomly assigned."
      ],
      "answer": 0,
      "explain": "The test assumes the regression model and study design are appropriate. It does not show that the predictor causes the outcome, or that predictions will be perfect.",
      "id": "c12-13"
    },
    {
      "concept": "correlation connection",
      "prompt": "With one predictor and an intercept, the fitted slope and Pearson’s r have…",
      "choices": [
        "The same sign, although their units and magnitudes differ.",
        "Identical numerical values regardless of units.",
        "Opposite signs in every dataset."
      ],
      "answer": 0,
      "explain": "b₁ = r × sᵧ / sₓ. Standard deviations are positive, so slope and correlation share a sign when both are defined.",
      "id": "c12-14"
    },
    {
      "concept": "generalization",
      "prompt": "A model fits this sample well. Before using it for new people, consider…",
      "choices": [
        "Representativeness, model assumptions, and performance on appropriate new data.",
        "Treating fit to the same data as a guarantee of future accuracy.",
        "Removing every inconvenient residual."
      ],
      "answer": 0,
      "explain": "In-sample fit does not guarantee generalization. New populations or conditions may differ.",
      "id": "c12-15"
    }
  ],
  "pairs": [
    {
      "left": "Predictor",
      "right": "Outcome",
      "prompt": "The variable on the right side of stress ~ sleep in R.",
      "answer": 0,
      "explain": "sleep supplies the predictor; stress is the modeled outcome.",
      "id": "p12-01"
    },
    {
      "left": "Slope",
      "right": "Intercept",
      "prompt": "The fitted outcome at a predictor value of zero.",
      "answer": 1,
      "explain": "The intercept is b₀. The slope describes predicted change per predictor unit.",
      "id": "p12-02"
    },
    {
      "left": "Observed value",
      "right": "Residual",
      "prompt": "The vertical difference y − ŷ between a point and the fitted line.",
      "answer": 1,
      "explain": "Residuals describe what the fitted value misses.",
      "id": "p12-03"
    },
    {
      "left": "Confidence interval for mean",
      "right": "Prediction interval for individual",
      "prompt": "Includes the additional variation of a new individual around the regression mean.",
      "answer": 1,
      "explain": "Individual prediction requires more uncertainty than estimating the mean response at the same x.",
      "id": "p12-04"
    }
  ],
  "rPractice": [
    {
      "concept": "Read R",
      "prompt": "The sleep coefficient describes what?",
      "choices": [
        "Predicted stress-score change per additional sleep hour in this fitted model.",
        "The causal effect of assigning an extra hour to every person.",
        "The proportion of people who slept exactly one hour."
      ],
      "answer": 0,
      "explain": "The slope has outcome units per predictor unit. This observational fictional example supports an association, not a causal claim.",
      "rKey": "c12-model",
      "id": "c12-r1"
    },
    {
      "concept": "Read R",
      "prompt": "Why does the second printed interval extend farther?",
      "choices": [
        "It predicts a new individual’s stress score, including individual scatter around the mean.",
        "It uses a different point prediction.",
        "A wider interval proves the model is causal."
      ],
      "answer": 0,
      "explain": "Both use the same fitted mean at this sleep value. The prediction interval adds uncertainty about an individual outcome.",
      "rKey": "c12-predict",
      "id": "c12-r2"
    }
  ]
});
