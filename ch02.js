/* Edit wording here. Keep question IDs, formula inputs, and R keys intact. */
(window.MU_CHAPTERS ||= []).push({
  "id": 2,
  "ready": true,
  "short": "Visualizing data",
  "title": "Let the shape tell its story.",
  "subtitle": "Same observations. Different windows into them.",
  "playTitle": "Shape shifter",
  "playDescription": "Change histogram bins, then peek at a box plot.",
  "reference": "Use bar charts for category counts and histograms for quantitative distributions. A histogram groups adjacent numeric intervals. This app uses equal-width bins with left-inclusive, right-exclusive intervals; the last bin includes its upper edge. Our box plots follow R: the box runs between the hinges, which sit at or very near the first and third quartiles (Q1 and Q3). Whiskers end at the most extreme observed values within 1.5 IQR of the box, and values beyond them are plotted separately. A box-plot flag is a prompt to investigate, not automatic grounds for deletion. Label axes and units; avoid misleading axis ranges.",
  "practice": [
    {
      "concept": "chart choice",
      "prompt": "You want to show how many students prefer each study location. Choose…",
      "choices": [
        "A bar chart.",
        "A histogram of category codes.",
        "A regression line."
      ],
      "answer": 0,
      "explain": "A bar chart compares category counts. Histograms describe quantitative values over numeric intervals.",
      "id": "c2-01"
    },
    {
      "concept": "chart choice",
      "prompt": "You want to see the shape of sleep duration. Choose…",
      "choices": [
        "A histogram.",
        "A pie chart of student IDs.",
        "An unlabeled bar for each person."
      ],
      "answer": 0,
      "explain": "Sleep duration is quantitative. A histogram reveals where observations cluster and how they spread.",
      "id": "c2-02"
    },
    {
      "concept": "histograms",
      "prompt": "What does a bar in an equal-width frequency histogram show?",
      "choices": [
        "The number of observations in an interval.",
        "The mean of all observations.",
        "One individual regardless of height."
      ],
      "answer": 0,
      "explain": "The horizontal interval defines the bin. Height represents its frequency.",
      "id": "c2-03"
    },
    {
      "concept": "histograms",
      "prompt": "You change the bin width without changing the observations. What can change?",
      "choices": [
        "The apparent detail of the shape.",
        "The actual sample mean.",
        "The number of participants."
      ],
      "answer": 0,
      "explain": "Binning changes the display, not the underlying data, sample size, or mean.",
      "id": "c2-04"
    },
    {
      "concept": "shape",
      "prompt": "A distribution has a long tail toward larger values. It is…",
      "choices": [
        "Right-skewed.",
        "Left-skewed.",
        "Necessarily normal."
      ],
      "answer": 0,
      "explain": "Skew direction is named for the tail, not the side where most values cluster.",
      "id": "c2-05"
    },
    {
      "concept": "shape",
      "prompt": "Two clear peaks in a histogram suggest…",
      "choices": [
        "A bimodal pattern worth investigating.",
        "Proof there are exactly two causal groups.",
        "An error that must be deleted."
      ],
      "answer": 0,
      "explain": "Multiple peaks describe shape. They can suggest subgroups or other structure, but the graph alone does not establish a cause.",
      "id": "c2-06"
    },
    {
      "concept": "box plots",
      "prompt": "The line inside this app’s box plot marks the…",
      "choices": [
        "Median.",
        "Mean.",
        "Standard deviation."
      ],
      "answer": 0,
      "explain": "The median is the middle ordered value. The mean is not automatically shown in a box plot.",
      "id": "c2-07"
    },
    {
      "concept": "box plots",
      "prompt": "The box spans…",
      "choices": [
        "From the lower hinge to the upper hinge (about Q1 to Q3): roughly the middle half of the data.",
        "The complete minimum-to-maximum range.",
        "A confidence interval for the population mean."
      ],
      "answer": 0,
      "explain": "The box covers roughly the middle 50% of observations, from about Q1 to Q3. It summarizes the data themselves and is not a confidence interval.",
      "id": "c2-08"
    },
    {
      "concept": "box plots",
      "prompt": "A point beyond a whisker is…",
      "choices": [
        "Flagged for investigation under the stated rule.",
        "Automatically a data-entry error.",
        "Evidence that the person should be excluded."
      ],
      "answer": 0,
      "explain": "Extreme observations can be valid. Investigate context and measurement before making any exclusion decision.",
      "id": "c2-09"
    },
    {
      "concept": "box plots",
      "prompt": "In this app, a whisker usually ends at…",
      "choices": [
        "The furthest observed value within the fence.",
        "Exactly the mean plus one SD.",
        "Exactly the fence even if no value occurs there."
      ],
      "answer": 0,
      "explain": "Whiskers end at observations within the 1.5 IQR fences; they need not reach the fences themselves.",
      "id": "c2-10"
    },
    {
      "concept": "axes",
      "prompt": "A bar chart begins its vertical axis far above zero. What deserves attention?",
      "choices": [
        "Differences in bar lengths may look exaggerated.",
        "The underlying counts are necessarily false.",
        "The categories have become numeric."
      ],
      "answer": 0,
      "explain": "Bar length encodes magnitude. Truncating its baseline can exaggerate visual differences.",
      "id": "c2-11"
    },
    {
      "concept": "scatterplots",
      "prompt": "Which display shows the relationship between two quantitative variables?",
      "choices": [
        "A scatterplot.",
        "A single-variable box plot.",
        "A frequency table of one category."
      ],
      "answer": 0,
      "explain": "Each scatterplot point represents a case with an x value and a y value.",
      "id": "c2-12"
    },
    {
      "concept": "labels",
      "prompt": "What should a useful graph tell the reader?",
      "choices": [
        "What variables, units, and quantities the axes represent.",
        "Only a decorative title.",
        "The conclusion without showing any data."
      ],
      "answer": 0,
      "explain": "Clear labels make the encoding interpretable. Include units and whether height is a count, percentage, or density.",
      "id": "c2-13"
    },
    {
      "concept": "relative frequency",
      "prompt": "Of {total} fictional students, {count} choose the library. What percentage is that?",
      "formula": {
        "kind": "percent",
        "count": 12,
        "total": 20
      },
      "explain": "Relative frequency is count divided by total: {count} / {total}, multiplied by 100 = {answer}%.",
      "unit": "%",
      "id": "c2-14"
    },
    {
      "concept": "comparison",
      "prompt": "To compare two groups’ histograms fairly, a good starting point is…",
      "choices": [
        "Use common axes and bin boundaries.",
        "Choose unrelated scales without labeling them.",
        "Delete every observation outside the middle."
      ],
      "answer": 0,
      "explain": "Shared scales and bin boundaries make comparisons easier. If group sizes differ, proportions can help compare shapes.",
      "id": "c2-15"
    }
  ],
  "pairs": [
    {
      "left": "Bar chart",
      "right": "Histogram",
      "prompt": "Counts for favorite study location.",
      "answer": 0,
      "explain": "Study location is categorical; a bar chart is appropriate.",
      "id": "p2-01"
    },
    {
      "left": "Mean",
      "right": "Median",
      "prompt": "The line inside this app’s box plot.",
      "answer": 1,
      "explain": "The line marks the median. A mean marker would need to be added and labeled separately.",
      "id": "p2-02"
    },
    {
      "left": "Right-skewed",
      "right": "Left-skewed",
      "prompt": "The long tail points toward the smaller values.",
      "answer": 1,
      "explain": "A tail toward low values is left skew.",
      "id": "p2-03"
    },
    {
      "left": "Data distribution",
      "right": "Sampling distribution",
      "prompt": "A histogram of individual students’ sleep measurements.",
      "answer": 0,
      "explain": "Individual observations form a data distribution. A sampling distribution describes a statistic across repeated samples.",
      "id": "p2-04"
    }
  ],
  "rPractice": [
    {
      "concept": "Read R",
      "prompt": "What do the printed values represent?",
      "choices": [
        "Counts in each study-location category.",
        "Mean sleep hours by location.",
        "Percentages that already sum to 100."
      ],
      "answer": 0,
      "explain": "table() counts the categories. These are frequencies, not automatically percentages.",
      "rKey": "c2-table",
      "id": "c2-r1"
    },
    {
      "concept": "Read R",
      "prompt": "The second printed vector identifies what?",
      "choices": [
        "Observations outside the box-plot whiskers.",
        "Observations proven to be recording mistakes.",
        "The median and mean."
      ],
      "answer": 0,
      "explain": "boxplot.stats() returns separate outlier flags under its whisker rule. A flag does not establish that a value is invalid.",
      "rKey": "c2-box",
      "id": "c2-r2"
    }
  ]
});
