## 📂 History Sorter – Firefox Extension

History Sorter is a Firefox browser extension that helps you organize, search, and explore your browsing history more efficiently.
It groups visited pages by domain, provides sorting and filtering tools, and displays everything in a modern, collapsible UI.

## ✨ Features

📑 Group by domain → all visited pages neatly organized

🔍 Search filters → by domain name or page title/URL

🔄 Sorting options → by site name or number of visits

⬆️⬇️ Ascending/descending order toggle

📂 Expandable/collapsible domain lists

🎨 Clean and responsive UI with hover effects and shadows

## 🛠️ Technologies Used

HTML5 → Popup structure

CSS3 → Modern, styled UI with transitions and shadows

JavaScript (ES6) → DOM manipulation and rendering logic

Firefox WebExtensions API → browser.history for data access

## 🚀 Getting Started
## ✅ Prerequisites

Firefox Browser (latest version)

Basic familiarity with WebExtensions

📥 Installation (Temporary Add-on in Firefox)

git clone https://github.com/yourusername/history-sorter-firefox.git
cd history-sorter-firefox

Open Firefox and go to:

    about:debugging#/runtime/this-firefox

    Click "Load Temporary Add-on…"

    Select the manifest.json file in this folder

    The extension icon will appear in your Firefox toolbar 🎉

⚠️ Note: This is a temporary add-on → it will be removed when Firefox restarts. You’ll need to reload it each session.
## ▶️ Usage

    Click the History Sorter icon in the toolbar

    Choose sorting preferences:

        🔢 By number of visits

        🏷️ By site name

    Adjust order:

        ⬆️ Ascending

        ⬇️ Descending

    Filter results:

        By domain

        By URL/title

    Click a domain → expand its visited pages

    Click any link → open it in a new tab

## 📂 Project Structure
```
history-sorter-firefox/
 ├── manifest.json      # Firefox extension manifest (V2)
 ├── popup.html         # Popup interface
 ├── popup.js           # Core logic: fetch + render history
 ├── style.css          # Styling for the popup UI
 ├── background.js      # Background script (optional for future features)
 └── README.md          # Documentation
```
## 🔮 Future Improvements

    ⭐ Favorite domains (pin to top of the list)

    📤 Export history to CSV/JSON

    🕵️ Advanced filters (date range, visit frequency)

    🔄 Migration to Manifest V3 (when fully supported in Firefox)

## ✅ Conclusion

History Sorter is a lightweight yet powerful Firefox extension for managing browsing history.

It showcases:

    Clean WebExtension architecture

    Practical use of the Firefox History API

    A focus on usability and modern UI design

This makes it both a daily-use tool and a professional demonstration project of browser extension development.

Clone or download this repository:

