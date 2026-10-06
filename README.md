# Mu & You: Complete course for PSY 230 Students - University of Arizona

**Live site: https://thri-d.github.io/mu-and-you/**

Mu & You is a free, friendly practice space for PSY 230 (Statistics) at the University of Arizona. It walks through all twelve chapters of the course with short hands-on activities, quick practice questions, and real R output, so students can build intuition for statistics a few minutes at a time.

It is optional, independent practice. It does not replace lectures, readings, or graded work, and nothing a student does here is seen by anyone else.

- Works in any modern browser on a phone, tablet, or laptop
- No sign-up, no account, no password
- Progress is saved on your own device
- Every dataset in the app is fictional and clearly labeled

---

## What's inside

| # | Chapter | The idea in one line | Play activity |
|---|---------|----------------------|---------------|
| 1 | Statistics everywhere | People first. Data next. | Meet the variables |
| 2 | Visualizing data | Let the shape tell its story. | Shape shifter |
| 3 | Center & spread | Finding the middle. Feeling the spread. | Sleep remix |
| 4 | z scores & probability | Find your place on the curve. | A dot in perspective |
| 5 | Sampling & testing | Small samples. Big questions. | The sampling room |
| 6 | Effect sizes & intervals | How much? How precisely? | The uncertainty window |
| 7 | One-sample t tests | A sample meets a reference. | The reference point |
| 8 | Two-sample t tests | Two groups. One careful comparison. | Together or apart? |
| 9 | ANOVA | A bigger table of possibilities. | Between, within, together |
| 10 | Chi-square | When the data are counts. | Expected, observed, curious |
| 11 | Correlation | Two variables. One unfolding pattern. | Make a relationship |
| 12 | Regression | A line that makes a guess. | The prediction studio |

Every chapter has four ways to learn:

- **Play**: a short interactive activity. Move sliders, draw samples, and watch the statistics change in front of you.
- **Pairs**: match a term to its meaning, or a situation to the right idea.
- **Practice**: fifteen questions with explanations, including concepts, calculations, and formulas.
- **R reading**: real R output to read and interpret, the same kind you will see in class.

There is also **Which test do I use?**, a step-by-step decision path. Answer a few questions about your study design and it points you to a sensible starting test, with a short reason why.

In total: 12 Play activities, 48 Pairs, 180 Practice questions, and 24 R readings.

---

## How to use it

1. **Open the link** and pick any chapter. Chapters can be done in any order, so start with whatever your class is covering this week.
2. **Try the Play activity first.** It takes a couple of minutes and gives you a feel for the idea before the questions.
3. **Answer, then rate your confidence.** After each Practice question you say how sure you were. This is not graded. It helps the app tell the difference between a lucky guess and something you really know.
4. **Come back for the daily set.** The home page builds a short six-question set from the chapters you have started. It brings back questions you missed, especially ones you felt sure about, and spaces out the ones you got right so they come back at the right time (after 1, 3, 7, and 14 days).
5. **Check "Holding across days".** A question counts as holding once you have answered it correctly on at least three different days since you last missed it. This is a study guide, not a grade.

### Other features

- **My dot**: place your own sleep hours (real, typical, or made up) among a fictional class and see where you land. You can skip it or use an example dot instead. The value stays on your device.
- **Night mode**: a darker theme for late-night studying.
- **Your space**: save a backup of your progress, restore it on another browser or device, or reset everything.
- **Add to your home screen**: on iPhone, open the link in Safari, tap Share, then Add to Home Screen. On Android, open the browser menu and choose Add to Home screen or Install. This creates a shortcut, not an offline copy, so you still need an internet connection.

---

## Your privacy

- There is no login, and no data is sent anywhere. The app loads no analytics, trackers, ads, or outside services.
- Your progress is stored only in your own browser on your own device.
- Nobody (including instructors and TAs) can see your answers, scores, or confidence ratings.
- Because progress lives in the browser, clearing your browsing data or switching browsers or devices will start you fresh. Use **Your space > Create backup** first if you want to keep it.
- All study data in the app are simulated. No real student data, health advice, or real research findings are used.

---

## Conventions used in the app

Statistics textbooks sometimes make different choices. Mu & You uses these throughout:

- Sample variance and standard deviation divide by **n − 1**.
- Tests are **two-tailed with α = .05** unless a question says otherwise.
- Confidence intervals are **95%** unless stated.
- The independent-samples t test uses **Welch's version** by default.
- Box plots follow R: the box runs from about Q1 to Q3, and whiskers reach the most extreme values within 1.5 IQR of the box.
- Numbers are rounded only at the final step.
- APA-style examples write **p < .001** rather than p = .000.

---

## Questions and feedback

Spotted a typo, a confusing explanation, or something that does not work on your device? Let your TA know. Please mention the chapter number and what you were doing when it happened.

---

## For maintainers

This section is for anyone updating the site. Students can stop reading here.

### How it is built

Mu & You is a plain static website: HTML, CSS, and JavaScript files, with no build step, backend, or database. GitHub Pages serves the files directly from the top level of this repository. This README is not loaded by the app, so editing it has no effect on how the site looks or how fast it loads.

| File | What it does |
|------|--------------|
| `index.html` | The page itself. Loads everything else. |
| `styles.css` | All colors, layout, and the night theme. |
| `app.js` | Navigation, practice sessions, the daily set, review timing, backups. |
| `activities.js` | The twelve interactive Play activities. |
| `math.js` | Calculations used by formula questions. |
| `capstone.js` | The "Which test do I use?" decision path. |
| `ch01.js` to `ch12.js` | One file per chapter: summary, Practice questions, Pairs, and R reading questions. |
| `r-output.js` | Saved R output shown in the R readings. |
| `quicksand.woff2`, `Quicksand-LICENSE.txt` | The bundled Quicksand font and its open license. |
| `icon.svg`, `manifest.webmanifest` | The home-screen icon and app name. |

### Editing content

- Question wording and explanations live in the chapter files (`ch01.js` to `ch12.js`) and can be edited as plain text.
- Keep every question `id` exactly as it is. Student progress is tied to these IDs, so changing one resets that question for everyone.
- In multiple-choice questions, the **first** choice listed is the correct one. The app shuffles choices on screen.
- Do not hand-edit numbers in `r-output.js`. Those transcripts were produced by actually running R (version 4.6.0), and the R code shown with each one includes all the fictional data needed to reproduce it. R does not run in students' browsers; only the saved text is shipped.

### Publishing changes

1. Keep every file at the top level of the repository. Do not put files in folders, because the page looks for them by name at the top level.
2. Commit the changes to the `main` branch.
3. GitHub Pages republishes automatically, usually within a minute or two.
4. If the page looks unchanged on your phone, close the tab and reopen it, since browsers sometimes hold on to the old version for a short while.

Keep the same repository and link. Student progress is tied to the site address, so moving to a new address would make everyone start over.

### Quick check after changes

Open one chapter and try Play, Pairs, Practice, and an R reading. Start a daily set, switch night mode on and off, and make a backup in Your space. If possible, check on a real phone as well as a laptop.

---

Created by Thrinath Dharavath for PSY 230, Fall 2026.
