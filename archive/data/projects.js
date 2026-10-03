// ── PROJECTS ─────────────────────────────────────────────────────────────────
// Add new entries here. visual: "tv-1" | "tv-2" | "tv-3" cycles the gradient colours.

export const projects = [
  {
    slug: "trendscraper",
    title: "TrendScraper",
    desc: "A configurable scraper toolkit for pulling comment & engagement data from social platforms, built so I'm not rewriting boilerplate every project.",
    status: "Live",
    visual: "tv-1",
    icon: "🕸️",
    tags: ["Python", "BeautifulSoup", "SQLite"],
    tryLabel: "Try it →",
    tryHref: "#",
    codeHref: "#",
    content: `
      <p>TrendScraper started as a one-off script for a single project and slowly grew into a proper toolkit as I found myself copy-pasting the same patterns over and over. It now handles session management, rate limiting, proxy rotation, and structured output to SQLite — the boring infrastructure that every scraping project needs.</p>
      <h2>What it does</h2>
      <p>You define a target (a URL pattern or search query), configure the fields you want to extract, and TrendScraper handles the rest: pagination, retries, deduplication, and writing to a local database. It ships with extractors for Reddit, TikTok's public search, and Letterboxd out of the box.</p>
      <h2>Tech</h2>
      <p>Built on top of BeautifulSoup for static pages and Playwright for JS-rendered content. SQLite for storage. A small CLI lets you kick off a job and tail the logs in real time.</p>
      <h2>Status</h2>
      <p>Live and used in all my research projects. The codebase is rough in places — it's a personal tool that grew organically — but the core is solid. I'm slowly cleaning it up before opening it properly.</p>
    `,
  },
  {
    slug: "sentiment-dashboard",
    title: "Sentiment Dashboard",
    desc: "A lightweight dashboard for visualizing sentiment scores across a dataset in real time — built on top of my scraping pipeline.",
    status: "In progress",
    visual: "tv-2",
    icon: "📈",
    tags: ["React", "FastAPI", "Recharts"],
    tryLabel: "Preview →",
    tryHref: "#",
    codeHref: "#",
    content: `
      <p>After running the same sentiment analysis pipeline on a few different datasets, I got tired of writing one-off visualisation scripts. The Sentiment Dashboard is a small app that connects to any SQLite database output from TrendScraper and gives you an instant visual overview of the scores.</p>
      <h2>Features</h2>
      <p>Time-series view of sentiment scores, filterable by category or keyword. Distribution histogram per label. A keyword search that highlights comments matching a term and shows their sentiment breakdown. All updates in real time as the scraper writes new rows.</p>
      <h2>Tech</h2>
      <p>React + Recharts on the frontend. A small FastAPI backend serves the data from SQLite and handles the filtering queries. The whole thing runs locally — no server needed, just <code>python app.py</code> and open the browser.</p>
      <h2>Status</h2>
      <p>Core charts are working. Currently building out the keyword search and fixing some performance issues with large datasets (100k+ rows). Preview available on request.</p>
    `,
  },
  {
    slug: "trend-classifier-api",
    title: "TrendClassifier API",
    desc: "A small hosted API that takes in text and returns a trend-relevance + sentiment score, trained on my own labeled datasets.",
    status: "Live",
    visual: "tv-3",
    icon: "🧠",
    tags: ["scikit-learn", "Flask", "Docker"],
    tryLabel: "Docs →",
    tryHref: "#",
    codeHref: "#",
    content: `
      <p>A simple REST API that accepts a piece of text and returns two scores: how "trend-relevant" the text is (i.e. is this the kind of language that appears in trending online conversations?) and a sentiment label. Trained on ~120k labeled examples from my own scraping projects.</p>
      <h2>Endpoints</h2>
      <p><code>POST /classify</code> — accepts a JSON body with a <code>text</code> field, returns <code>trend_score</code> (0–1), <code>sentiment</code> (positive/neutral/negative), and <code>confidence</code>.</p>
      <p><code>POST /batch</code> — same but accepts an array of up to 500 texts. Useful for running a whole dataset through without hammering the single endpoint.</p>
      <h2>Tech</h2>
      <p>A fine-tuned DistilBERT model served via Flask. Containerised with Docker so it's easy to run locally or deploy anywhere. Currently hosted on a small VPS.</p>
      <h2>Status</h2>
      <p>Live. Free to use with a rate limit of 100 requests/day. Hit me up if you need more — I'll sort out a key.</p>
    `,
  },
];
