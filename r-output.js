/* Captured from actual R at build time. Do not hand-edit numeric output. */
window.MU_R_OUTPUT = {
  "c1-structure": {
    "code": "sleep <- c(6, 7, 8, NA)\nprint(length(sleep))\nprint(sum(is.na(sleep)))",
    "output": "[1] 4\n[1] 1",
    "version": "R version 4.6.0 (2026-04-24)"
  },
  "c1-factor": {
    "code": "pet <- factor(c(\"yes\", \"no\", \"yes\", \"no\"))\nprint(pet)\nprint(is.numeric(pet))",
    "output": "[1] yes no  yes no \nLevels: no yes\n[1] FALSE",
    "version": "R version 4.6.0 (2026-04-24)"
  },
  "c2-table": {
    "code": "place <- c(\"Library\", \"Home\", \"Library\", \"Cafe\", \"Home\", \"Library\")\nprint(table(place))",
    "output": "place\n   Cafe    Home Library \n      1       2       3 ",
    "version": "R version 4.6.0 (2026-04-24)"
  },
  "c2-box": {
    "code": "sleep <- c(4, 5, 6, 6, 7, 7, 8, 9, 15)\nb <- boxplot.stats(sleep)\nprint(b$stats)\nprint(b$out)",
    "output": "[1] 4 6 7 8 9\n[1] 15",
    "version": "R version 4.6.0 (2026-04-24)"
  },
  "c4-pnorm": {
    "code": "print(pnorm(1))\nprint(pnorm(1, lower.tail = FALSE))",
    "output": "[1] 0.8413447\n[1] 0.1586553",
    "version": "R version 4.6.0 (2026-04-24)"
  },
  "c4-scale": {
    "code": "scores <- c(40, 50, 60)\nprint(as.numeric(scale(scores)))",
    "output": "[1] -1  0  1",
    "version": "R version 4.6.0 (2026-04-24)"
  },
  "c3-summary": {
    "code": "sleep <- c(5, 6, 6, 7, 7, 8, 9)\nprint(mean(sleep))\nprint(median(sleep))",
    "output": "[1] 6.857143\n[1] 7",
    "version": "R version 4.6.0 (2026-04-24)"
  },
  "c3-sd": {
    "code": "sleep <- c(5, 6, 6, 7, 7, 8, 9)\nprint(var(sleep))\nprint(sd(sleep))",
    "output": "[1] 1.809524\n[1] 1.345185",
    "version": "R version 4.6.0 (2026-04-24)"
  },
  "c5-sample": {
    "code": "set.seed(230)\npopulation <- c(1, 2, 3, 4, 5, 9)\nmeans <- replicate(8, mean(sample(population, 4, replace = TRUE)))\nprint(means)",
    "output": "[1] 4.00 5.75 4.50 4.25 2.00 6.25 5.00 4.00",
    "version": "R version 4.6.0 (2026-04-24)"
  },
  "c5-se": {
    "code": "scores <- c(4, 6, 8, 10, 12)\nprint(sd(scores))\nprint(sd(scores) / sqrt(length(scores)))",
    "output": "[1] 3.162278\n[1] 1.414214",
    "version": "R version 4.6.0 (2026-04-24)"
  },
  "c6-ci": {
    "code": "scores <- c(7, 8, 9, 10, 10, 11, 12, 13)\nfit <- t.test(scores, mu = 10)\nprint(fit$conf.int)",
    "output": "[1]  8.327958 11.672042\nattr(,\"conf.level\")\n[1] 0.95",
    "version": "R version 4.6.0 (2026-04-24)"
  },
  "c6-d": {
    "code": "scores <- c(7, 8, 9, 10, 10, 11, 12, 13)\nreference <- 9\nprint((mean(scores) - reference) / sd(scores))",
    "output": "[1] 0.5",
    "version": "R version 4.6.0 (2026-04-24)"
  },
  "c7-test": {
    "code": "sleep <- c(6, 6.5, 7, 7, 7.5, 8, 8.5, 9)\nprint(t.test(sleep, mu = 7))",
    "output": "\n\tOne Sample t-test\n\ndata:  sleep\nt = 1.2185, df = 7, p-value = 0.2625\nalternative hypothesis: true mean is not equal to 7\n95 percent confidence interval:\n 6.588517 8.286483\nsample estimates:\nmean of x \n   7.4375 \n",
    "version": "R version 4.6.0 (2026-04-24)"
  },
  "c7-p": {
    "code": "scores <- c(2, 4, 6, 8, 10)\nprint(t.test(scores, mu = 6))",
    "output": "\n\tOne Sample t-test\n\ndata:  scores\nt = 0, df = 4, p-value = 1\nalternative hypothesis: true mean is not equal to 6\n95 percent confidence interval:\n 2.073514 9.926486\nsample estimates:\nmean of x \n        6 \n",
    "version": "R version 4.6.0 (2026-04-24)"
  },
  "c8-welch": {
    "code": "pet <- c(3, 4, 5, 5, 6, 7)\nno_pet <- c(4, 5, 6, 6, 7, 8)\nprint(t.test(pet, no_pet))",
    "output": "\n\tWelch Two Sample t-test\n\ndata:  pet and no_pet\nt = -1.2247, df = 10, p-value = 0.2487\nalternative hypothesis: true difference in means is not equal to 0\n95 percent confidence interval:\n -2.8192678  0.8192678\nsample estimates:\nmean of x mean of y \n        5         6 \n",
    "version": "R version 4.6.0 (2026-04-24)"
  },
  "c8-paired": {
    "code": "before <- c(6, 7, 5, 8, 6, 7, 9, 5)\nafter <- c(5, 5, 5, 7, 4, 6, 7, 5)\nprint(t.test(after, before, paired = TRUE))",
    "output": "\n\tPaired t-test\n\ndata:  after and before\nt = -3.8129, df = 7, p-value = 0.006603\nalternative hypothesis: true mean difference is not equal to 0\n95 percent confidence interval:\n -1.8226787 -0.4273213\nsample estimates:\nmean difference \n         -1.125 \n",
    "version": "R version 4.6.0 (2026-04-24)"
  },
  "c9-oneway": {
    "code": "score <- c(4,5,5,6,6,7, 5,6,6,7,7,8, 6,7,7,8,8,9)\nmethod <- factor(rep(c(\"A\", \"B\", \"C\"), each = 6))\nprint(summary(aov(score ~ method)))",
    "output": "            Df Sum Sq Mean Sq F value Pr(>F)  \nmethod       2   12.0     6.0   5.455 0.0166 *\nResiduals   15   16.5     1.1                 \n---\nSignif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1",
    "version": "R version 4.6.0 (2026-04-24)"
  },
  "c9-factorial": {
    "code": "method <- factor(rep(c(\"A\", \"B\"), each = 10))\ncontext <- factor(rep(rep(c(\"Quiet\", \"Music\"), each = 5), 2))\nbase <- c(4, 5, 6, 5, 5)\nscore <- c(base, base + 2, base + 2, base)\nprint(summary(aov(score ~ method * context)))",
    "output": "               Df Sum Sq Mean Sq F value   Pr(>F)    \nmethod          1      0     0.0       0        1    \ncontext         1      0     0.0       0        1    \nmethod:context  1     20    20.0      40 1.01e-05 ***\nResiduals      16      8     0.5                     \n---\nSignif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1",
    "version": "R version 4.6.0 (2026-04-24)"
  },
  "c10-gof": {
    "code": "observed <- c(Library = 30, Home = 20, Cafe = 10)\nfit <- chisq.test(observed, p = c(1/3, 1/3, 1/3))\nprint(fit)\nprint(fit$expected)",
    "output": "\n\tChi-squared test for given probabilities\n\ndata:  observed\nX-squared = 10, df = 2, p-value = 0.006738\n\nLibrary    Home    Cafe \n     20      20      20 ",
    "version": "R version 4.6.0 (2026-04-24)"
  },
  "c10-table": {
    "code": "counts <- matrix(c(30,20,15,35), nrow = 2, byrow = TRUE,\n  dimnames = list(Pet = c(\"Yes\", \"No\"), Place = c(\"Home\", \"Library\")))\nfit <- chisq.test(counts, correct = FALSE)\nprint(fit)\nprint(fit$expected)",
    "output": "\n\tPearson's Chi-squared test\n\ndata:  counts\nX-squared = 9.0909, df = 1, p-value = 0.002569\n\n     Place\nPet   Home Library\n  Yes 22.5    27.5\n  No  22.5    27.5",
    "version": "R version 4.6.0 (2026-04-24)"
  },
  "c11-correlation": {
    "code": "sleep <- c(5, 6, 6, 7, 7, 8, 8, 9)\nstress <- c(8, 7, 8, 6, 5, 6, 4, 4)\nprint(cor.test(sleep, stress, method = \"pearson\"))",
    "output": "\n\tPearson's product-moment correlation\n\ndata:  sleep and stress\nt = -4.6448, df = 6, p-value = 0.003523\nalternative hypothesis: true correlation is not equal to 0\n95 percent confidence interval:\n -0.9789941 -0.4774882\nsample estimates:\n      cor \n-0.884538 \n",
    "version": "R version 4.6.0 (2026-04-24)"
  },
  "c11-zero": {
    "code": "x <- 1:9\ny <- (x - mean(x))^2\nprint(cor.test(x, y, method = \"pearson\"))",
    "output": "\n\tPearson's product-moment correlation\n\ndata:  x and y\nt = 0, df = 7, p-value = 1\nalternative hypothesis: true correlation is not equal to 0\n95 percent confidence interval:\n -0.6641217  0.6641217\nsample estimates:\ncor \n  0 \n",
    "version": "R version 4.6.0 (2026-04-24)"
  },
  "c12-model": {
    "code": "sleep <- c(5, 6, 6, 7, 7, 8, 8, 9)\nstress <- c(8, 7, 8, 6, 5, 6, 4, 4)\nfit <- lm(stress ~ sleep)\nprint(summary(fit))",
    "output": "\nCall:\nlm(formula = stress ~ sleep)\n\nResiduals:\n     Min       1Q   Median       3Q      Max \n-1.00000 -0.35417 -0.04167  0.35417  1.08333 \n\nCoefficients:\n            Estimate Std. Error t value Pr(>|t|)    \n(Intercept)  13.5833     1.6574   8.195 0.000178 ***\nsleep        -1.0833     0.2332  -4.645 0.003523 ** \n---\nSignif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1\n\nResidual standard error: 0.8079 on 6 degrees of freedom\nMultiple R-squared:  0.7824,\tAdjusted R-squared:  0.7461 \nF-statistic: 21.57 on 1 and 6 DF,  p-value: 0.003523\n",
    "version": "R version 4.6.0 (2026-04-24)"
  },
  "c12-predict": {
    "code": "sleep <- c(5, 6, 6, 7, 7, 8, 8, 9)\nstress <- c(8, 7, 8, 6, 5, 6, 4, 4)\nfit <- lm(stress ~ sleep)\nnew_case <- data.frame(sleep = 7)\nprint(predict(fit, new_case, interval = \"confidence\"))\nprint(predict(fit, new_case, interval = \"prediction\"))",
    "output": "  fit      lwr      upr\n1   6 5.301034 6.698966\n  fit      lwr      upr\n1   6 3.903102 8.096898",
    "version": "R version 4.6.0 (2026-04-24)"
  }
};
