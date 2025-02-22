import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: {
            "sidebar": {
              "dashboard": "Dashboard",
              "user": "User",
              "product": "Product",
              "blog": "Blog",
              "signin": "Sign in",
              "not-found": "Not found",
              "aapl-chart": "AAPL Chart"
            },
            "welcome": {
              "message": "Hi, Welcome back"
            },
            "stock": {
                "aaplPrice": "AAPL Stock Price"
            }
          },
      },
      fr: {
        translation: {
            "sidebar": {
              "dashboard": "Tableau de bord",
              "user": "Utilisateur",
              "product": "Produit",
              "blog": "Blog",
              "sign-in": "Se connecter",
              "not-found": "Introuvable",
              "aapl-chart": "Graphique AAPL"
            },
            "welcome": {
              "message": "Salut, bon retour"
            },
            "stock": {
                "aaplPrice": "Prix de l'action AAPL"
            }
          },
      },
      de: {
        translation: {
            "sidebar": {
              "dashboard": "Dashboard",
              "user": "Benutzer",
              "product": "Produkt",
              "blog": "Blog",
              "sign-in": "Anmelden",
              "not-found": "Nicht gefunden",
              "aapl-chart": "AAPL-Diagramm"
            },
            "welcome": {
              "message": "Hallo, willkommen zurück"
            },
            "stock": {
                "aaplPrice": "AAPL-Aktienkurs"
            }
        },
      },
    },
    lng: "en", // Idioma por defecto
    fallbackLng: "en", // Si el idioma no está disponible, usa inglés
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;