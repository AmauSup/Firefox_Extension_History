# 📂 History Sorter – Extension Firefox

History Sorter est une extension pour le navigateur Firefox qui vous aide à organiser, rechercher et explorer votre historique de navigation plus efficacement.  
Elle regroupe les pages visitées par domaine, fournit des outils de tri et de filtrage, et affiche le tout dans une interface moderne et extensible.

---

## ✨ Fonctionnalités

📑 Regroupement par domaine → toutes les pages visitées sont organisées de manière claire

🔍 Filtres de recherche → par nom de domaine ou titre/URL de la page

🔄 Options de tri → par nom du site ou par nombre de visites

⬆️⬇️ Bascule ordre croissant/décroissant

📂 Listes de domaines extensibles/rétractables

🎨 Interface propre et responsive avec effets au survol et ombres

---

## 🛠️ Technologies utilisées

HTML5 → Structure du popup

CSS3 → Interface moderne avec transitions et ombres

JavaScript (ES6) → Manipulation du DOM et logique de rendu

Firefox WebExtensions API → `browser.history` pour accéder aux données

---

# 🚀 Démarrage

## ✅ Prérequis

- Navigateur Firefox (dernière version)  
- Connaissances de base sur les WebExtensions

---

## 📥 Installation (Add-on temporaire dans Firefox)


Ovrir Firefox puis aller dans :
```
    about:debugging#/runtime/this-firefox
```
Cliquez sur “Charger un module complémentaire temporaire…”

Sélectionnez le fichier `manifest.json` dans ce dossier

L’icône de l’extension apparaîtra dans votre barre d’outils Firefox 🎉

⚠️ Note : il s’agit d’un add-on temporaire → il sera supprimé au redémarrage de Firefox. Il faudra le recharger à chaque session.

---

## ▶️ Utilisation

- Cliquez sur l’icône History Sorter dans la barre d’outils
- Choisissez vos préférences de tri :


      🔢 Par nombre de visites
  
      🏷️ Par nom du site


Ajuster l'ordre:

        ⬆️ Croissant

        ⬇️ Décroissant

Filtrer les résultats:

        Par domaine

        Par URL/Titre

- Cliquez sur un domaine → pour afficher les pages visitées
- Cliquez sur n’importe quel lien → pour l’ouvrir dans un nouvel onglet

---

## 📂 Structure du projet

```
history-sorter-firefox/
 ├── manifest.json      # Firefox extension manifest (V2)
 ├── popup.html         # Popup interface
 ├── popup.js           # Core logic: fetch + render history
 ├── style.css          # Styling for the popup UI
 ├── background.js      # Background script (optional for future features)
 └── README.md          # Documentation
```

# ✅ Conclusion

History Sorter est une extension Firefox légère mais puissante pour gérer l’historique de navigation.

Elle met en avant :

```text
- Une architecture WebExtension propre
- Une utilisation pratique de l’API History de Firefox
- Un accent sur l’ergonomie et un design d’interface moderne
```

Cela en fait à la fois un outil utilisable au quotidien et un projet de démonstration professionnelle du développement d’extensions de navigateur.

Cloner ou télécharger ce dépôt : 

```
git clone https://github.com/AmauSup/history-sorter-firefox.git
cd history-sorter-firefox
```

