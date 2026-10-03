// ── BLOG POSTS ──────────────────────────────────────────────────────────────
// Add new entries here. The first post with featured: true becomes the hero card.
// content: HTML string that becomes the body of the post page.

export const posts = [
  {
    slug: "tiktok-sentiment",
    featured: true,
    tag: "NLP · Sentiment Analysis",
    category: "NLP",
    title: "What 40,000 comments taught me about a trending sound on TikTok",
    desc: "I scraped comment data from a viral TikTok trend and ran it through a sentiment model to see if the discourse matched the vibe. Spoiler: it didn't.",
    excerpt: "I scraped comment data from a viral TikTok trend and ran it through a sentiment model to see if the discourse matched the vibe. Spoiler: it didn't.",
    stats: [
      { num: "41.2k", label: "Comments analyzed" },
      { num: "0.84",  label: "Model F1 score"    },
      { num: "6 min", label: "Read time"          },
    ],
    date: "May 2026",
    content: `
      <p>Every few weeks a sound takes over TikTok in a way that feels impossible to ignore — the comment sections explode, the stitches multiply, and everyone seems to have a take. I got curious: does the sentiment in those comments actually match the energy of the trend itself?</p>
      <p>To find out, I scraped 41,200 comments from the top 80 videos using a specific trending audio. Then I ran them through a fine-tuned BERT-based sentiment classifier I'd been tinkering with.</p>
      <h2>What I expected</h2>
      <p>I assumed the vibe would be uniformly positive — the sound was upbeat and the trend looked wholesome. Turns out the comment discourse was way more mixed than the content suggested.</p>
      <h2>The data</h2>
      <p>After cleaning (removing spam, non-English, and bot-looking accounts), I ended up with ~38k usable comments. Sentiment broke down roughly as: 52% positive, 31% neutral, 17% negative — which surprised me. The negative cluster wasn't hate, it was mostly ironic commentary and in-jokes that the model was flagging as negative.</p>
      <h2>Model performance</h2>
      <p>The classifier hit an F1 of 0.84 on my held-out test set, which I'm happy with for a hobbyist project. The main failure mode was sarcasm — short ironic comments like "yeah totally normal behaviour" were almost always misclassified.</p>
      <h2>Takeaway</h2>
      <p>Viral sounds create their own meta-discourse that's detached from the content. The comments aren't about the video — they're about being part of the trend. That's probably obvious in retrospect, but seeing it in the data made it click.</p>
    `,
  },
  {
    slug: "letterboxd-divisive",
    category: "Web Scraping",
    title: "Scraping Letterboxd to find 2026's most \"divisive\" movies",
    excerpt: "Built a scraper to pull rating distributions and found which films split audiences hardest.",
    date: "Apr 2026",
    content: `
      <p>I built a scraper to pull full rating distributions (not just averages) from Letterboxd for the top 500 most-logged films of 2026 so far. The goal: find which movies split audiences hardest — high variance, not just low scores.</p>
      <h2>The metric</h2>
      <p>I used standard deviation of the star-rating distribution as a proxy for divisiveness. A film with a bimodal distribution (lots of 1s and 5s, few 3s) scores high. An average score alone misses this entirely.</p>
      <h2>Top findings</h2>
      <p>The most divisive films weren't the badly-reviewed ones — they were experimental or genre-defying films where half the audience was on board and half wasn't. Horror remakes and slow-burn arthouse films dominated the top of the variance list.</p>
      <h2>Scraping notes</h2>
      <p>Letterboxd's rating histogram is rendered client-side, so I had to use Playwright rather than plain requests. Rate limiting was strict — I ended up spacing requests at 3–5 second intervals with randomised jitter to avoid getting blocked.</p>
    `,
  },
  {
    slug: "viral-tweet-model",
    category: "Machine Learning",
    title: "Training a model to predict if a tweet will go viral",
    excerpt: "Gradient boosting on text + engagement features. Better than guessing, barely.",
    date: "Mar 2026",
    content: `
      <p>Can you predict virality before it happens? Probably not reliably. But I wanted to see how far a simple model could get with early-window engagement signals and text features.</p>
      <h2>Dataset</h2>
      <p>I collected ~90k tweets from accounts with between 1k and 100k followers (avoiding mega-accounts where virality is almost guaranteed). I defined "viral" as reaching 10× the account's median retweet count within 48 hours.</p>
      <h2>Features</h2>
      <p>I used a mix of text features (TF-IDF on the tweet body, presence of question marks, number of hashtags) and early engagement signals (likes/retweets in the first 30 minutes). The early signals turned out to matter a lot more than the text.</p>
      <h2>Results</h2>
      <p>XGBoost hit ~71% accuracy on the held-out test set, compared to a 50% baseline. Impressive-sounding, genuinely not that useful — the model mainly learned that tweets that are already getting early traction tend to keep getting traction. Not a groundbreaking insight.</p>
    `,
  },
  {
    slug: "pinterest-coastal-grandma",
    category: "Data Viz",
    title: "Mapping the rise and fall of a Pinterest aesthetic trend",
    excerpt: "Pulled pin volume over time to see exactly when \"coastal grandma\" peaked.",
    date: "Mar 2026",
    content: `
      <p>Aesthetic trends on Pinterest have a surprisingly clean lifecycle: they rise fast, plateau, and then collapse almost as quickly as they appeared. I wanted to chart this precisely for "coastal grandma" — one of the defining aesthetics of the early 2020s.</p>
      <h2>Data collection</h2>
      <p>I used Pinterest's public search to pull pin timestamps for boards tagged with coastal grandma and related terms over a rolling 3-year window. Volume was normalised by total platform activity to control for Pinterest's own growth.</p>
      <h2>The curve</h2>
      <p>Peak was Q3 2022. By Q1 2023, volume had dropped 60%. By end of 2023, it had essentially flatlined into a small "enthusiast remainder" — people who genuinely love the aesthetic rather than people chasing the trend.</p>
      <h2>What's next</h2>
      <p>I'm building a small dashboard that tracks 10–15 aesthetics simultaneously so I can catch the next one on the way up. First signs of "quiet luxury" show a similar curve beginning around mid-2025.</p>
    `,
  },
];
