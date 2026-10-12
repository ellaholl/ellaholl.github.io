---
title: Nuuly vs BNTO vs Rent the Runway: A Review Sentiment Comparison
date: 2026-10-03
tags: nlp, sentiment-analysis, python, data-science, marketplace, fashion-rental
role: Researcher and engineer (independent project)
tools: Python, pandas, VADER, matplotlib
cover: linear-gradient(135deg,#17324d,#2f6f8f 55%,#7fd1c7)
label: NLP
height: 380
draft: true
---

*Draft: replace each italic prompt with your own text and results, then delete the line `draft: true` at the top and run `node build.mjs`. The sample dashboard uses synthetic data, so do not publish its numbers.*

## Summary

*Two or three sentences with the headline result. Example: "Across N public reviews, Brand X had the most positive sentiment overall, but all three brands struggled with the same theme, and the BNTO sample was too small for firm conclusions."*

- **Question:** how do customers feel about Nuuly, BNTO and Rent the Runway, and which experiences drive the difference?
- **Data:** *N public reviews per brand, collected between dates from named sources*
- **Method:** sentence-level sentiment, theme tagging, bootstrap intervals and significance tests
- **Code and dashboard:** *link to the GitHub repository and the live dashboard*

## Why these three brands

All three are clothing rental subscriptions. Nuuly and Rent the Runway are established, while BNTO is a newer, smaller entrant that describes itself as AI-powered. They compete for the same customers, which makes them a natural comparison for a two-sided marketplace: customers want choice, quality and fair prices, and the platform has to deliver clean inventory on time.

*Add one paragraph on what you hoped to learn and how it connects to your design and product thinking.*

## Research questions

1. Which brand has the most positive overall sentiment, and is the gap larger than chance?
2. Which themes (fit, condition, delivery, selection, pricing, subscription handling, service, app) drive the differences?
3. Do the brands have different weak points, or the same ones?
4. How much can I trust each comparison, given the sample sizes?

## Data

- **Sources:** *list each site, the date collected and the count per brand*
- **Collection method:** *manual copy, official export or documented API. State that you checked each site's terms.*
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
- **rating:** star rating from 1 to 5
- **reviewer_type:** consumer or owner
- **label:** my own positive, neutral or negative label, used to check the model
- **text:** the review text (required)

The example rows above are synthetic, written to test the code. They are not real reviews.

**Sample size note:** BNTO is newer and has far fewer public reviews than the other two. *State your actual counts here.* I set a minimum of 30 reviews per brand before the analysis reports a conclusion, and I did not add reviews from unrelated sources just to reach that number.

**Bias to note:** unhappy customers write more reviews, and each site attracts different people, so a gap between brands can reflect where reviews were collected as well as the brands themselves.

*Add a small chart or list of review counts by brand and source.*

## Method

### 1. Sentence-level sentiment
Each review is split into sentences, and each sentence gets a score from -1 (negative) to 1 (positive) using VADER. A review's score is the score of its full text. Reviews are labeled positive, negative or neutral with standard thresholds.

### 2. Theme tagging
A keyword dictionary assigns sentences to eight rental-specific themes: fit and sizing, condition and quality, delivery and returns, selection and style, pricing and value, subscription handling, customer service, and app or website. One sentence can belong to several themes.

### 3. Metrics per brand
- Review count
- Average sentiment with a 95% bootstrap interval
- Percent positive, neutral and negative, and net sentiment (positive minus negative)
- Average star rating, and how well sentiment agrees with stars

### 4. Head-to-head tests
For each pair of brands I report the difference in average sentiment with an interval, a permutation-test p-value corrected for multiple comparisons with the Holm method, and the Cliff's delta effect size. Brands below the minimum sample size get no verdict.

```
python compare.py --input data/rental_reviews.csv --out outputs
pytest
```

## Validation

I hand-labeled *N* reviews as positive, neutral or negative and compared them with the model.

- **Agreement with my labels:** *accuracy and macro F1*
- **Agreement with star ratings:** *Spearman value for each brand*
- **Where it fails:** *examples of sarcasm, mixed reviews or missed themes*

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

- Keyword tagging misses indirect wording.
- VADER can misread sarcasm and mixed sentiment.
- Public reviews are not a random sample of customers.
- BNTO's sample is small, so its results are less certain.
- *Add any limits specific to your data.*

## Engineering notes

*Briefly explain how you built it like a product: tests, a reproducible environment, a README, and how you would run it on new reviews each month.*

## Next steps

- *Replace keyword tagging with a zero-shot or fine-tuned classifier.*
- *Add topic discovery for themes I did not anticipate.*
- *Track sentiment over time and alert on sudden changes.*
