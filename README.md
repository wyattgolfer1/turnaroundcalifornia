# Turnaround California website

Your news site. It's free to host, and you write posts in a simple online editor (Pages CMS). There's no code to touch.

**How it works:** your site's files live on GitHub. Cloudflare Pages turns them into your public website. When you publish a post in Pages CMS, it saves to GitHub, and Cloudflare updates your site automatically in about a minute.

---

## One-time setup (about 30–45 minutes)

### 1. Get your domain
Pick a name like **turnaroundcalifornia.com** and buy it. The easiest place is **Cloudflare** itself (dash.cloudflare.com → Domain Registration → Register Domains), because your site will be hosted there and connecting the two takes one click. Namecheap or Porkbun also work.

### 2. Put the site on GitHub
1. Create a free account at **github.com**.
2. Click **+** (top right) → **New repository**. Name it `turnaround-california`, leave it **Public** or **Private** (either works), and click **Create repository**.
3. On the new repo page, click **uploading an existing file**.
4. Unzip `turnaround-california-site.zip` and drag **everything inside the folder** onto the page (not the folder itself).
   - ⚠️ Mac users: the important `.pages.yml` file is hidden by default. In Finder, press **Cmd + Shift + .** (period) to show hidden files before you drag. Windows: in File Explorer, View → Show → Hidden items.
5. Click **Commit changes**.

### 3. Host it on Cloudflare Pages (free)
1. Create a free account at **dash.cloudflare.com** if you don't have one.
2. Go to **Workers & Pages** → **Create** → choose the **Pages** option → **Connect to Git**. If Cloudflare shows you Workers first, look for the link to deploy with Pages instead.
3. Connect your GitHub account and pick the `turnaround-california` repository.
4. Use these build settings:
   - **Framework preset:** None
   - **Build command:** `npm run build`
   - **Build output directory:** `_site`
5. Click **Save and Deploy**. In a minute or two, your site is live at an address like `turnaround-california.pages.dev`.

### 4. Connect your domain
In your Cloudflare Pages project → **Custom domains** → **Set up a custom domain** → type your domain → follow the prompts. If you bought the domain at Cloudflare, it's automatic. If you bought it elsewhere, Cloudflare tells you exactly which setting to change at your registrar.

### 5. Turn on the post editor
1. Go to **app.pagescms.org** and sign in with GitHub.
2. When asked, allow Pages CMS access to your `turnaround-california` repository.
3. Open the repository. You'll see **Posts**, **About page**, **Your byline & bio** and **Site settings** in the menu.
4. Open **Site settings** and set **Your web address** to your real domain (e.g. `https://turnaroundcalifornia.com`), then save.
5. Open **Your byline & bio** and fill in your name, bio and (optionally) your photo.
6. Open **About page** and replace the placeholder text.

---

## Writing a post

1. Go to **app.pagescms.org** → your repository → **Posts** → **Add an entry**.
2. Fill in the **Headline**, **Publish date**, **Summary**, an optional **Label** (like "Elections") and an optional **Featured photo**.
3. Write the story in the **Story** box. Use the toolbar for headings, bold, links, lists and quotes.
4. Optional: add a few **Quick take** bullet points for a key-points box at the top.
5. Click **Save**. Your site updates in about a minute.

To save something without publishing it yet, tick **Draft**. Untick it when it's ready.

Delete the "Welcome to Turnaround California" starter post once you've published your first real one, or edit it into your own introduction.

---

## Adding the newsletter later

1. Sign up for a free newsletter service (Buttondown, Mailchimp or Kit).
2. Find its **embed form** or **HTML form** code and copy the address in `action="..."`.
3. In Pages CMS → **Site settings**, paste that address into **Newsletter form address**. The signup box on your site switches on automatically.

Tip: your site has an RSS feed at `yourdomain.com/feed.xml`. Many newsletter tools can use it to email new posts to subscribers automatically.

---

## For anyone technical
- Built with Eleventy 3. `npm install`, then `npm start` to preview locally or `npm run build` to build into `_site/`.
- Posts: `src/posts/*.md`. Uploads: `src/images/uploads/`. Settings: `src/_data/site.json`, `src/_data/author.json`.
- Styles: `src/css/style.css`. Templates: `src/_includes/`.
