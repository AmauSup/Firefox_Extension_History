let groupedHistory = {}; // Variable qui stockera les URLs regroupées par domaine

// ----- Charger l'historique -----
function loadHistory() {
  chrome.history.search( // API Chrome pour récupérer l’historique
    { text: "", maxResults: 500, startTime: 0 }, // paramètres de recherche
    function(results) {
      const uniqueUrls = new Map(); // évite les doublons d’URL

      // Parcourir les résultats
      results.forEach(item => {
        try {
          const urlObj = new URL(item.url); // objet pour extraire domaine
          const domain = urlObj.hostname;

          if (uniqueUrls.has(item.url)) {
            // Si l’URL existe déjà → on incrémente le compteur
            let entry = uniqueUrls.get(item.url);
            entry.visits += item.visitCount || 1;
            uniqueUrls.set(item.url, entry);
          } else {
            // Sinon → on crée une nouvelle entrée
            uniqueUrls.set(item.url, {
              url: item.url,
              title: item.title || item.url,
              domain,
              visits: item.visitCount || 1
            });
          }
        } catch (e) {
          // Si l’URL est invalide
          console.warn("URL invalide :", item.url);
        }
      });

      // Regrouper les URLs par domaine
      groupedHistory = {};
      uniqueUrls.forEach(({ url, title, domain, visits }) => {
        if (!groupedHistory[domain]) groupedHistory[domain] = [];
        groupedHistory[domain].push({ url, title, visits });
      });

      renderHistory(); // afficher après regroupement
    }
  );
}

// ----- Fonction d'affichage -----
function renderHistory() {
  const sortMode = document.getElementById("sortMode").value; // tri par visites ou nom
  const sortOrder = document.getElementById("sortOrder").value; // asc / desc
  const searchDomain = document.getElementById("searchDomain").value.toLowerCase(); // filtre domaine
  const searchURL = document.getElementById("searchURL").value.toLowerCase(); // filtre URL

  // Liste des domaines disponibles
  let sortedDomains = Object.keys(groupedHistory);

  // Tri des domaines selon le mode choisi
  if (sortMode === "visits") {
    sortedDomains.sort((a, b) =>
      sortOrder === "asc"
        ? groupedHistory[a].length - groupedHistory[b].length
        : groupedHistory[b].length - groupedHistory[a].length
    );
  } else {
    sortedDomains.sort((a, b) =>
      sortOrder === "asc" 
      ? a.localeCompare(b, "fr") 
      : b.localeCompare(a, "fr")
    );
  }

  // Sélection de la liste HTML
  const list = document.getElementById("historyList");
  list.innerHTML = ""; // Nettoyer avant d’afficher

  // Affichage domaine par domaine
  for (const domain of sortedDomains) {
    if (searchDomain && !domain.toLowerCase().includes(searchDomain)) continue;

    // Élément principal du domaine
    const domainItem = document.createElement("li");
    domainItem.textContent = `${domain} (${groupedHistory[domain].length} pages)`;
    domainItem.style.cursor = "pointer";
    
    // Sous-liste (URLs du domaine)
    const subList = document.createElement("ul");
    subList.style.display = "none"; // masquée par défaut

    // Filtrer et trier les URLs du domaine
    const filteredURLs = groupedHistory[domain].filter(item =>
      !searchURL || item.url.toLowerCase().includes(searchURL) || item.title.toLowerCase().includes(searchURL)
    );

    filteredURLs.sort((a, b) => {
      if (sortMode === "visits") {
        return sortOrder === "asc" ? a.visits - b.visits : b.visits - a.visits;
      } else {
        return sortOrder === "asc" ? a.title.localeCompare(b.title, "fr") : b.title.localeCompare(a.title, "fr");
      }
    });

    // Ajouter chaque URL dans la sous-liste
    filteredURLs.forEach(item => {
      const urlItem = document.createElement("li");
      const link = document.createElement("a");
      link.href = item.url;
      link.target = "_blank"; // ouvrir dans nouvel onglet
      link.style.fontSize = "12px";
      link.style.paddingLeft = "10px";
      link.style.textDecoration = "none";
      link.style.color = "#0066cc";
      link.textContent = `${item.title} (${item.visits} visites)`;
      urlItem.appendChild(link);
      subList.appendChild(urlItem);
    });

    if (filteredURLs.length === 0) continue; // ignorer si aucune URL

    // Toggle pour afficher/masquer les sous-URLs
    domainItem.addEventListener("click", () => {
      subList.style.display = subList.style.display === "none" ? "block" : "none";
    });

    // Ajouter au DOM
    list.appendChild(domainItem);
    list.appendChild(subList);
  }
}

// ----- Initialisation -----
document.addEventListener("DOMContentLoaded", () => {
  loadHistory(); // charger immédiatement

  // Réattacher les événements UI
  document.getElementById("sortMode").addEventListener("change", renderHistory);
  document.getElementById("sortOrder").addEventListener("change", renderHistory);
  document.getElementById("searchDomain").addEventListener("input", renderHistory);
  document.getElementById("searchURL").addEventListener("input", renderHistory);
});
