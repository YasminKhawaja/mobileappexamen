const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

const STUDIES_COLLECTION_ID = process.env.EXPO_PUBLIC_STUDIES_COLLECTION_ID;
const NEWS_COLLECTION_ID = process.env.EXPO_PUBLIC_NEWS_COLLECTION_ID;
const CAMPUSES_COLLECTION_ID = process.env.EXPO_PUBLIC_CAMPUSES_COLLECTION_ID;

async function fetchCollection(collectionId) {
  if (!collectionId) {
    console.log("Geen collection ID ingevuld");
    throw new Error("Geen collection ID ingevuld");
  }

  console.log("API call naar collection:", collectionId);

  const response = await fetch(
    `https://api.webflow.com/v2/collections/${collectionId}/items/live?limit=100`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    },
  );

  console.log("API status:", response.status);

  if (!response.ok) {
    const errorText = await response.text();
    console.log("API error text:", errorText);
    throw new Error("Webflow API fout");
  }

  const data = await response.json();
  return data.items || [];
}

export async function getNewsFromWebflow() {
  const items = await fetchCollection(NEWS_COLLECTION_ID);

  return items.map((item, index) => {
    const fields = item.fieldData;

    return {
      id: item.id || index + 1,
      title: fields.name || "Geen titel",

      // Webflow geeft hier een ID terug, dus we vertalen die naar gewone tekst
      category: getNewsCategory(fields.categorie),

      // Webflow datum leesbaar maken
      date: formatDate(fields.datum),

      readTime: "5 min lezen",

      image:
        fields.image?.url ||
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800",

      // Jouw Webflow veld heet korte-tekst
      intro: fields["korte-tekst"] || "",

      // Jouw Webflow veld heet volledige-tekst en bevat HTML
      content:
        cleanHtml(fields["volledige-tekst"]) ||
        fields["korte-tekst"] ||
        "Geen inhoud beschikbaar.",
    };
  });
}

export async function getCampusesFromWebflow() {
  const items = await fetchCollection(CAMPUSES_COLLECTION_ID);

  return items.map((item, index) => {
    const fields = item.fieldData;

    return {
      id: item.id || index + 1,
      name: fields.name?.trim() || "Geen naam",
      focus: formatText(fields.focus),
      address: fields.tekst || "Geen adres beschikbaar",
      image:
        fields["campus-image"]?.url ||
        fields["campus-foto"]?.[0]?.url ||
        fields.afbeelding?.url ||
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800",
      description: fields["uitleg-campus"] || "Geen beschrijving beschikbaar.",
    };
  });
}

export async function getStudiesFromWebflow() {
  const items = await fetchCollection(STUDIES_COLLECTION_ID);

  return items.map((item, index) => {
    const fields = item.fieldData;

    return {
      id: item.id || index + 1,
      title: fields.name || "Geen titel",
      campus: fields["campus-naam"] || "Onbekend",
      focus: formatText(fields.focus),
      type: getStudyType(fields.onderwijsvorm),
      image:
        fields.image?.url ||
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800",
      description:
        fields["korte-omschrijving"] ||
        cleanHtml(fields["lange-omschrijving"]) ||
        "Geen beschrijving beschikbaar.",
    };
  });
}

function getNewsCategory(categoryId) {
  const categories = {
    // Deze IDs komen uit jouw Webflow CMS-data
    f37bdfa572c59ae4aa383313706b7f0d: "Nieuws",
    a9cfc069971f4c247acdcacca71a0c36: "Activiteit",
    c56ca9a57116d6975db841e3ab419c96: "Terugblik",
  };

  return categories[categoryId] || "Nieuws";
}

function getStudyType(typeId) {
  const types = {
    e37b99bd7270a7988dbf967793a8db14: "Doorstroom",
    d0bc6c18aaab3df52edb216d1279575e: "Dubbele finaliteit",
    fd0992d40a9ae0305eda6cff027f884a: "Arbeidsmarkt",
  };

  return types[typeId] || "Doorstroom";
}

function formatDate(dateString) {
  if (!dateString) {
    return "Geen datum";
  }

  const date = new Date(dateString);

  return date.toLocaleDateString("nl-BE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function cleanHtml(html) {
  if (!html) {
    return "";
  }

  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#39;/g, "'")
    .trim();
}

function formatText(text) {
  if (!text) {
    return "";
  }

  return text
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
