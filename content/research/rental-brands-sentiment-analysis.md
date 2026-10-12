---
title: Nuuly vs BNTO vs Rent the Runway: A Review Sentiment Comparison
date: 2026-10-03
tags: nlp, sentiment-analysis, python, data-science, marketplace, fashion-rental
role: Researcher and engineer (independent project)
tools: Python, pandas, VADER, matplotlib, HTML/SVG dashboard
cover: linear-gradient(135deg,#17324d,#2f6f8f 55%,#7fd1c7)
label: NLP
height: 380
draft: false
---

## Summary

*Two or three sentences with the headline result. Example: "Across N public reviews, Brand X had the most positive sentiment overall, but all three brands struggled with the same theme, and the BNTO sample was too small for firm conclusions."*

- **Question:** how do customers feel about Nuuly, BNTO and Rent the Runway, and which experiences drive the difference?
- **Data:** *N public reviews per brand, collected between dates from named sources*
- **Method:** sentence-level sentiment, theme tagging, bootstrap intervals and significance tests
- **Code and dashboard:** [GitHub repository](https://github.com/ellaholl/rental-brand-comparison) · [Open the live dashboard](https://ellaholl.github.io/rental-brand-comparison/)

## Interactive dashboard

Explore the results below: brand cards, a theme heatmap, head-to-head tests, trends over time, model validation and a sentence explorer. Toggle light and dark mode with the button in the header. [Open it full screen](https://ellaholl.github.io/rental-brand-comparison/) for the best view, especially on a phone.

<div style="margin:24px 0">
  <iframe
    src="https://ellaholl.github.io/rental-brand-comparison/"
    title="Rental review sentiment dashboard"
    loading="lazy"
    style="width:100%;height:1500px;border:1px solid rgba(128,128,128,.25);border-radius:14px"></iframe>
</div>

<noscript>
  <a href="https://ellaholl.github.io/rental-brand-comparison/" target="_blank" rel="noopener">Open the dashboard</a> (the embedded view needs JavaScript).
</noscript>

*If the embed does not render on your site, replace it with a clickable screenshot:*
`[![Dashboard screenshot](images/rental-dashboard.png)](https://ellaholl.github.io/rental-brand-comparison/)`

## Why these three brands

All three are clothing rental subscriptions. Nuuly and Rent the Runway are established, while BNTO is a newer, smaller entrant that describes itself as AI-powered. They compete for the same customers, which makes them a natural comparison for a two-sided marketplace: customers want choice, quality and fair prices, and the platform has to deliver clean inventory on time.

*Add one paragraph on what you hoped to learn and how it connects to your design and product thinking.*

## Research questions

1. Which brand has the most positive overall sentiment, and is the gap larger than chance?
2. Which themes (fit, condition, delivery, selection, pricing, subscription handling, service, app) drive the differences?
3. Do the brands have different weak points, or the same ones?
4. How much can I trust each comparison, given the sample sizes?

## Data

- **Sources:** Apple App Store customer reviews, Reddit posts, and *any manual exports you added*. *List the date collected and the count per brand and source. The dashboard's review-count panel shows these.*
- **Collection method:** a script (`collect_reviews.py`, in the [GitHub repository](https://github.com/ellaholl/rental-brand-comparison)) that uses Apple's public customer-reviews feed and Reddit's official API, plus an importer for manual or official exports. I avoided scraping sites whose terms restrict automated collection. *State that you checked each site's terms.*
- **Fields kept:** the columns in the data format below. No names or personal details.
- **Cleaning:** removed blanks and duplicates within each brand, *plus anything else you did*.

### Data format

Each review is one row in a CSV file, using the same columns as the original sample data with a `brand` column added at the front:

```
brand,source,date,rating,reviewer_type,label,text
Brand A,synthetic-example,2026-01-05,5,consumer,positive,"The selection is huge and I found the perfect dress. Shipping arrived two days early."
Brand B,synthetic-example,2026-02-08,3,consumer,neutral,"Prices are fair but the selection feels limited. Few options in my size."
Brand C,synthetic-example,2026-03-11,1,consumer,negative,"Dress arrived dirty and smelled like perfume. Terrible quality."
```

- **brand:** Nuuly, BNTO or Rent the Runway (required)
- **source:** the site the review came from
- **date:** `YYYY-MM-DD`
- **rating:** star rating from 1 to 5 (blank for sources without stars, such as Reddit)
- **reviewer_type:** consumer or owner
- **label:** my own positive, neutral or negative label, used to check the model
- **text:** the review text (required)

The example rows above are synthetic, written to test the code. They are not real reviews.

**Sample size note:** BNTO is newer and has far fewer public reviews than the other two. *State your actual counts here.* I set a minimum of 30 reviews per brand before the analysis reports a conclusion, and I did not add reviews from unrelated sources just to reach that number. In the dashboard, brands below the minimum are marked "too few" and get no verdict.

**Bias to note:** unhappy customers write more reviews, and each site attracts different people, so a gap between brands can reflect where reviews were collected as well as the brands themselves. App Store reviews come from app users, and Reddit posts are discussion rather than formal reviews.

## Method

### 1. Sentence-level sentiment
Each review is split into sentences, and each sentence gets a score from -1 (negative) to 1 (positive) using VADER. A review's score is the score of its full text. Reviews are labeled positive, negative or neutral with standard thresholds.

### 2. Theme tagging
A keyword dictionary assigns sentences to eight rental-specific themes: fit and sizing, condition and quality, delivery and returns, selection and style, pricing and value, subscription handling, customer service, and app or website. One sentence can belong to several themes. Theme results with fewer than five mentions are flagged as unreliable.

### 3. Metrics per brand
- Review count
- Average sentiment with a 95% bootstrap interval
- Percent positive, neutral and negative, and net sentiment (positive minus negative)
- Average star rating, and how well sentiment agrees with stars

### 4. Head-to-head tests
For each pair of brands I report the difference in average sentiment with an interval, a permutation-test p-value corrected for multiple comparisons with the Holm method, and the Cliff's delta effect size. Brands below the minimum sample size get no verdict.

### 5. Dashboard
The analysis writes a single self-contained HTML file with no external scripts or fonts, so it loads offline and can be hosted anywhere as a static page.

```
python collect_reviews.py appstore --out data/appstore.csv
python collect_reviews.py reddit --out data/reddit.csv
python collect_reviews.py merge data/appstore.csv data/reddit.csv --out data/rental_reviews.csv
python compare.py --input data/rental_reviews.csv --out outputs
pytest
```

## Validation

I hand-labeled *N* reviews as positive, neutral or negative and compared them with the model. The dashboard's validation panel shows the confusion matrix.

- **Agreement with my labels:** *accuracy and macro F1*
- **Agreement with star ratings:** *Spearman value for each brand*
- **Where it fails:** *examples of sarcasm, mixed reviews or missed themes. The dashboard's sentence explorer is a good place to find these.*

## Findings

*Add a screenshot of the dashboard (images/rental-dashboard.png) and describe the three most important results in plain language.*

1. **Overall sentiment:** *which brand leads, by how much, and whether the interval and test support it*
2. **Theme gaps:** *where one brand clearly beats or trails the others*
3. **Shared problems:** *themes that are weak for every brand*

*Add a short paraphrased example for each finding. Do not copy long review text.*

## What this means for the product

- *What a fashion rental platform should fix first*
- *Where a newer brand like BNTO could differentiate*
- *Which metric you would track each month*

## Limitations

- Keyword tagging misses indirect wording, and a keyword can match an unrelated sentence.
- VADER can misread sarcasm and mixed sentiment.
- Public reviews are not a random sample of customers.
- BNTO's sample is small, so its results are less certain.
- *Add any limits specific to your data.*

## Engineering notes

The project is built as a small pipeline rather than a notebook: a collection script that writes a fixed CSV format, an analysis module that holds all the statistics, and a comparison script that packages the results into the dashboard. Keeping the statistics in one module means the command-line output, the CSVs and the dashboard always agree. The full source is in the [GitHub repository](https://github.com/ellaholl/rental-brand-comparison), and the dashboard is published from it with GitHub Pages at [https://ellaholl.github.io/rental-brand-comparison/](https://ellaholl.github.io/rental-brand-comparison/).

*Add the rest: tests, a pinned requirements file, a README, and how you would run it on new reviews each month.*

## Next steps

- *Replace keyword tagging with a zero-shot or fine-tuned classifier.*
- *Add topic discovery for themes I did not anticipate.*
- *Track sentiment over time and alert on sudden changes.*