# Mu & You: Chapter 3 prototype

A complete, playable preview of Chapter 3. It is for your review before the full course launch.

Included: animated Mu, Sleep remix, four Pairs, fifteen Practice questions, confidence before feedback, a daily six-question set, a date-based mini challenge, night mode, a fictional 200-student sleep distribution, an optional personal dot, browser progress, and text/file backups.

The other eleven chapters are not included yet. Daily questions currently come from Chapter 3 only. No R output is shown in this chapter.

## Put it on your phone with GitHub Pages

Do this on your computer. No command line is needed.

1. Download and unzip the package. Open the `mu-and-you` folder.
2. On GitHub, create a new **public** repository named `mu-and-you-preview`. A public repository keeps this on GitHub's free hosting option. You can choose a different name.
3. Open that repository. Choose **Add file > Upload files**, or use the upload link shown for an empty repository.
4. Drag everything **inside** the `mu-and-you` folder into the upload area. Include the `content` folder. Do not upload the ZIP itself, and do not upload the outer `mu-and-you` folder as an extra level.
5. Choose **Commit changes**. You should now see `index.html`, `styles.css`, `app.js`, `icon.svg`, `manifest.webmanifest`, `README.md`, `assets`, and `content` at the top of the repository. The content folder should contain `ch03.js`.
6. Open **Settings > Pages**. Under **Build and deployment**, select **Deploy from a branch**. Choose **main**, then **/ (root)**, and **Save**.
7. Wait for GitHub to publish. This can take up to about ten minutes. Return to **Settings > Pages** and choose **Visit site**.
8. Open that published link on your phone. It will normally look like `https://YOUR-USERNAME.github.io/mu-and-you-preview/`.

The repository page on github.com is not the app. Use the published github.io link.

GitHub's instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
Publishing source help: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Try these first

1. Tap Mu on Home. Toggle the moon button to see night mode.
2. Open Chapter 3, then Play. Make a prediction, move the sleep slider, explain what changed, and compare two samples with the same mean.
3. Try Pairs, then Practice. After choosing an answer, choose your confidence before seeing feedback.
4. Open the daily set from Home. It is six questions drawn from Chapter 3, prioritizing confident misses and due reviews.
5. Open My dot. Try an example, or add a sleep value. Your dot does not change the class data.
6. Open Your space. Create a backup, copy or download it, and try restoring it in another browser. Restore replaces rather than merges progress.

## Add to Home Screen

On iPhone, use Safari's Share menu and look for **Add to Home Screen**. On Android, look in your browser menu for **Add to Home screen** or **Install**. Menu wording varies by browser.

This prototype is a website shortcut, not an offline download. There is no service worker or background refresh. Open it with an internet connection. The Quicksand font is bundled in assets with its license. There are no external asset services, and a system font is available if the font file cannot load.

## Correct a question

Open `content/ch03.js` in GitHub, click the pencil button, change the wording, and commit. Keep the quotes, commas, question IDs, calculation names, and surrounding structure intact. Do not change text inside braces such as `{mean}`: those are computed values.

Questions have stable IDs so wording corrections preserve student progress. Changing actual datasets or answers requires rechecking the calculations. All calculations use full precision; the interface rounds to at most two decimal places.

## Conventions

- Sample variance and SD use n - 1.
- Mean is x-bar, sample variance is s-squared, and sample SD is s.
- Population variance uses N when describing every member of a defined population.
- In later chapters, the default will be two-tailed tests with alpha .05, APA 7 reporting, and Welch independent-samples t tests. No inferential tests are included in this prototype.
- All people and sleep observations are simulated for learning. The fictional class is not a reference population for real student health or wellbeing.

## How progress behaves

Answers and optional personal values stay in browser storage. No names, accounts, analytics, or answer uploads are used. A host still receives ordinary requests for web files.

Correct answers across separate days move through review intervals of one, three, seven, and fourteen days. A missed answer becomes ready today. A confident miss gets priority and stays flagged until a successful return on a later day. Repeating a question successfully on the same day does not advance its retention level. "Holding across days" requires at least three successful days since a miss and no currently due review. These are practice indicators, not validated mastery scores.

The weekly row marks days with a completed learning interaction. There is no streak that resets when a day is missed.

Progress belongs to a browser and device. Private browsing, clearing website data, browser storage policies, or changing devices can remove or separate it. Create a backup before switching. Backup text is encoded, not encrypted, and excludes your optional sleep value unless you select its checkbox.

If storage is blocked, the app still works for the current page session and shows a notice. Export a backup before closing it.

## Troubleshooting

- **404 after publishing:** Check that `index.html` is at the repository root and Pages uses main / (root).
- **Plain text or a file list:** Open the published Pages link, not the repository.
- **Blank app:** Confirm `app.js` and `content/ch03.js` were uploaded with their exact names.
- **Older version still appears:** Allow publication to finish, then reload the page. No service worker is installed.
- **Progress did not follow me:** Restore your backup in the new browser. Home Screen and browser storage may be separate.

You can double-click `index.html` on a laptop for a quick local look, but use the published link for phone testing and dependable browser storage behavior.
