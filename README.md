📂 History Sorter (Firefox Extension)

A Firefox browser extension that organizes and visualizes your browsing history.

It groups history entries by domain, allows sorting and searching, and displays visited pages in a clean, collapsible list.

📌 Overview

Platform: Firefox (WebExtension API)

Manifest: Version 2 (loaded as a temporary add-on)

UI: Popup built with HTML, CSS, and JavaScript

Features: Sorting, filtering, and expandable lists

This project demonstrates:

Using the Firefox History API

Building a popup interface with DOM manipulation

Implementing sorting (visits/name) and search filtering

Styling nested lists with modern CSS (shadows, hover effects, transitions)

🚀 Features

✅ Group visited URLs by domain

✅ Sort domains by name or number of visits

✅ Order results ascending/descending

✅ Search by domain or by URL/title

✅ Expand/collapse domain lists dynamically

✅ Clean, responsive interface

⚡ Getting Started
✅ Prerequisites

Firefox Browser

Basic knowledge of WebExtensions

No installation needed beyond loading as a temporary add-on

📥 Installation (Firefox Temporary Add-on)

Clone or download this repository

Open Firefox and go to:

```
about:debugging#/runtime/this-firefox
```

Click Load Temporary Add-on…

Select the manifest.json file from the project folder

The extension will appear in the Firefox toolbar

⚠️ Note: Since it’s loaded as a temporary add-on, it will be removed when Firefox restarts. You’ll need to reload it each session.

▶️ Usage

Click the History Sorter icon in the Firefox toolbar

Use the dropdowns to:

Sort by number of visits or domain name

Order results ascending or descending

Use the search fields to filter by domain or URL/title

Click on a domain to expand/collapse its list of visited pages

Click any link to open it in a new tab

📂 Project Structure

```
history-sorter-firefox/
 ├── manifest.json      # Firefox extension manifest (V2)
 ├── popup.html         # Popup UI
 ├── popup.js           # JavaScript logic: fetch + render history
 ├── style.css          # CSS styling for popup
 ├── background.js      # Background script (optional use)
 └── README.md          # Documentation

```
🛠️ Technologies Used

HTML5 → Popup structure

CSS3 → UI design (shadows, transitions, rounded corners)

JavaScript (ES6) → Interactivity and rendering logic

Firefox WebExtensions API (browser.history)

✅ Conclusion

This Firefox extension provides a lightweight, efficient, and user-friendly tool for managing browsing history.

It demonstrates how to:

Build with the WebExtensions API

Organize history by domain

Add sorting and search features

Deliver a professional UI in a popup

Ideal as both a learning project and a practical everyday tool.
