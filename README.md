# 🧑‍💻 Bhanu Prakash — Developer Portfolio

A stunning, responsive developer portfolio website built with pure **HTML, CSS, and JavaScript** — no frameworks, no build tools, just open and run.

---

## 🌐 Live Preview

Simply open `bhanu-portfolio.html` in any browser. That's it.

---

## 📁 Project Structure

```
bhanu-portfolio/
└── bhanu-portfolio.html    # Single self-contained file (HTML + CSS + JS)
```

Everything — styles, scripts, fonts, icons — is in one file. Font Awesome icons and Google Fonts are loaded via CDN.

---

## ✨ Features

- **Hero Section** — Full-screen landing with typing animation cycling through 5 roles
- **About Section** — Summary, info table, and strength tags pulled from resume
- **Skills Section** — Animated progress bars triggered on scroll, grouped by category
- **Projects Section** — 3 project cards (Work Seeker, Rock-Paper-Scissors, EduGuide Chatbot)
- **Experience Section** — Internship at Sampath Software Solutions
- **Education Section** — SSC → Diploma → B.Tech timeline with scores
- **Achievements & Certifications** — Listed from resume
- **Profiles Section** — GitHub, LinkedIn, CodeChef, Email cards
- **Resume Section** — Download button linked to your PDF
- **Contact Section** — Form with validation and toast notification
- **Footer** — Name, social icons, copyright

---

## 🎨 Design

| Property | Value |
|----------|-------|
| Theme | Dark minimal |
| Background | `#0c0c0c` |
| Accent | `#c8ff00` (acid yellow-green) |
| Display Font | Syne (Google Fonts) |
| Mono Font | DM Mono (Google Fonts) |
| Icons | Font Awesome 6 (CDN) |

---

## 🚀 How to Run

### Option 1 — Just double-click
Double-click `bhanu-portfolio.html` → opens in your default browser.

### Option 2 — VS Code Live Server
1. Install the **Live Server** extension in VS Code
2. Right-click `bhanu-portfolio.html` → **Open with Live Server**

### Option 3 — Python local server
```bash
python -m http.server 8000
# Then open http://localhost:8000/bhanu-portfolio.html
```

---

## ✏️ How to Customize

Open `bhanu-portfolio.html` in any text editor (VS Code recommended) and edit the following:

### 🔤 Personal Info
Search for the section marked with the name and update:
```html
<!-- Hero name -->
Polimera<br><em>Bhanuprakash</em><br>M. Naidu

<!-- Email -->
href="mailto:bhanupolimera.9@gmail.com"

<!-- Phone -->
+91 9703155423

<!-- Location -->
Visakhapatnam, India
```

### 🔗 Profile Links
Find and replace the `href="#"` placeholders with your actual URLs:
```html
<!-- GitHub -->
href="https://github.com/bhanupolimera"

<!-- LinkedIn -->
href="https://linkedin.com/in/pbmnaidu"

<!-- CodeChef -->
href="https://www.codechef.com/users/bhanupolimera"
```

### 📄 Resume Download
Place your resume PDF in the same folder as the HTML file, then update:
```html
<a href="BHANU-RESUME.pdf" download class="resume-btn">
```

### 🎨 Accent Color
To change the accent color, find the CSS variable at the top:
```css
:root {
  --accent: #c8ff00;  /* Change this to any color you like */
}
```

### 💼 Add a New Project
Copy and paste this block inside the `<div class="projects-list">`:
```html
<div class="project-item reveal">
  <div class="project-num">04</div>
  <div>
    <div class="project-title">Your Project Title</div>
    <p class="project-desc">Your project description here.</p>
    <div class="project-techs">
      <span class="tech-badge">HTML</span>
      <span class="tech-badge">CSS</span>
    </div>
  </div>
  <div class="project-links">
    <a href="YOUR_LIVE_URL" class="p-link" target="_blank">
      <i class="fas fa-external-link-alt"></i> Live
    </a>
    <a href="YOUR_GITHUB_URL" class="p-link" target="_blank">
      <i class="fab fa-github"></i> Code
    </a>
  </div>
</div>
```

---

## 📱 Responsive Breakpoints

| Screen | Layout |
|--------|--------|
| Desktop (> 860px) | Full multi-column layout |
| Tablet (≤ 860px) | Single column, hamburger nav |
| Mobile (≤ 500px) | Compact single column |

---

## 🌍 Deployment

Since it's a single HTML file, you can deploy it anywhere for free:

### Netlify (Recommended)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop `bhanu-portfolio.html` into the Netlify dashboard
3. Done — live in seconds ✅

### GitHub Pages
1. Create a new GitHub repository
2. Upload `bhanu-portfolio.html` and rename it to `index.html`
3. Go to **Settings → Pages → Source → main branch**
4. Your site is live at `https://yourusername.github.io/repo-name` ✅

### Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repo or drag-drop the file
3. Deploy ✅

---

## 📦 Dependencies (all via CDN — no install needed)

| Library | Version | Purpose |
|---------|---------|---------|
| Google Fonts — Syne | latest | Display headings |
| Google Fonts — DM Mono | latest | Mono labels & code |
| Font Awesome | 6.4.0 | Icons throughout |

---

## 👤 About This Portfolio

Built for **Polimera Bhanuprakash Maliappala Naidu**

- 📍 Visakhapatnam, India
- 🎓 B.Tech CSE (AI) — Vignan Institute of Information Technology
- 🎓 Diploma in CSE (89%) — Andhra Polytechnic
- 💼 Web Development Intern — Sampath Software Solutions
- 🔗 GitHub: [bhanupolimera](https://github.com/bhanupolimera)
- 🔗 LinkedIn: [pbmnaidu](https://linkedin.com/in/pbmnaidu)
- 📧 bhanupolimera.9@gmail.com

---

## 📄 License

Free to use and modify for personal portfolio purposes.

---

*Built with HTML, CSS & JavaScript · No frameworks · No build tools · Just open and run.*
