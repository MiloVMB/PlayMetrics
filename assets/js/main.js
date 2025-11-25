/* =========================================================
   DEFAULT CONFIG
========================================================= */
const defaultConfig = {
  background_color: "#111827",
  surface_color: "#1f2937",
  text_color: "#f3f4f6",
  primary_action_color: "#10b981",
  secondary_action_color: "#374151",
  font_family: "system-ui",
  font_size: 16,
  hero_title: "Next-Gen Football Intelligence",
  hero_subtitle: "PlayMetrics transforms raw game data into championship-winning insights through cutting-edge AI technology. We empower coaches and players to unlock their full potential with real-time analytics that reveal what the naked eye can't see.",
  cta_button: "🚀 Start Free Trial",
  features_title: "Game-Changing Features",
  testimonials_title: "Trusted by Champions",
  pricing_title: "Plans That Scale With You",
  about_title: "About PlayMetrics",
  contact_title: "Ready to Transform Your Game?"
};

/* =========================================================
   ON CONFIG CHANGE
========================================================= */
async function onConfigChange(config) {
  const customFont = config.font_family || defaultConfig.font_family;
  const baseFontStack = 'system-ui, -apple-system, sans-serif';
  const baseSize = config.font_size || defaultConfig.font_size;

  const backgroundColor = config.background_color || defaultConfig.background_color;
  const surfaceColor = config.surface_color || defaultConfig.surface_color;
  const textColor = config.text_color || defaultConfig.text_color;
  const primaryColor = config.primary_action_color || defaultConfig.primary_action_color;
  const secondaryColor = config.secondary_action_color || defaultConfig.secondary_action_color;

  document.body.style.backgroundColor = backgroundColor;
  document.body.style.color = textColor;
  document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;

  const sections = document.querySelectorAll("section");
  sections.forEach((section, index) => {
    section.style.backgroundColor = index % 2 === 1 ? surfaceColor : backgroundColor;
  });

  document.querySelector("nav").style.backgroundColor = backgroundColor;
  document.querySelector("footer").style.backgroundColor = backgroundColor;

  const cards = document.querySelectorAll(".bg-gray-900, .bg-gray-800");
  cards.forEach(card => {
    card.style.backgroundColor = surfaceColor;
    card.style.color = textColor;
  });

  const primaryButtons = document.querySelectorAll(".bg-green-500");
  primaryButtons.forEach(btn => {
    btn.style.backgroundColor = primaryColor;
  });

  const secondaryButtons = document.querySelectorAll(".bg-gray-700");
  secondaryButtons.forEach(btn => {
    btn.style.backgroundColor = secondaryColor;
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    link.style.color = textColor;
  });

  document.querySelectorAll(".gradient-text").forEach(el => {
    el.style.background = `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}dd 100%)`;
    el.style.webkitBackgroundClip = "text";
    el.style.webkitTextFillColor = "transparent";
    el.style.backgroundClip = "text";
  });

  document.getElementById("heroTitle").textContent = config.hero_title || defaultConfig.hero_title;
  document.getElementById("heroTitle").style.fontSize = `${baseSize * 3}px`;

  document.getElementById("heroSubtitle").textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
  document.getElementById("heroSubtitle").style.fontSize = `${baseSize * 1.25}px`;

  document.getElementById("ctaButton").textContent = config.cta_button || defaultConfig.cta_button;

  document.getElementById("featuresTitle").textContent = config.features_title || defaultConfig.features_title;
  document.getElementById("testimonialsTitle").textContent = config.testimonials_title || defaultConfig.testimonials_title;
  document.getElementById("pricingTitle").textContent = config.pricing_title || defaultConfig.pricing_title;
  document.getElementById("aboutTitle").textContent = config.about_title || defaultConfig.about_title;
  document.getElementById("contactTitle").textContent = config.contact_title || defaultConfig.contact_title;

  document
    .querySelectorAll("p, li, label, input, textarea, button, a, h3, h4")
    .forEach(el => {
      el.style.fontFamily = `${customFont}, ${baseFontStack}`;
    });
}

/* =========================================================
   CAPABILITIES MAPPING
========================================================= */
function mapToCapabilities(config) {
  return {
    recolorables: [
      {
        get: () => config.background_color || defaultConfig.background_color,
        set: value => {
          config.background_color = value;
          window.elementSdk.setConfig({ background_color: value });
        }
      },
      {
        get: () => config.surface_color || defaultConfig.surface_color,
        set: value => {
          config.surface_color = value;
          window.elementSdk.setConfig({ surface_color: value });
        }
      },
      {
        get: () => config.text_color || defaultConfig.text_color,
        set: value => {
          config.text_color = value;
          window.elementSdk.setConfig({ text_color: value });
        }
      },
      {
        get: () => config.primary_action_color || defaultConfig.primary_action_color,
        set: value => {
          config.primary_action_color = value;
          window.elementSdk.setConfig({ primary_action_color: value });
        }
      },
      {
        get: () => config.secondary_action_color || defaultConfig.secondary_action_color,
        set: value => {
          config.secondary_action_color = value;
          window.elementSdk.setConfig({ secondary_action_color: value });
        }
      }
    ],
    borderables: [],
    fontEditable: {
      get: () => config.font_family || defaultConfig.font_family,
      set: value => {
        config.font_family = value;
        window.elementSdk.setConfig({ font_family: value });
      }
    },
    fontSizeable: {
      get: () => config.font_size || defaultConfig.font_size,
      set: value => {
        config.font_size = value;
        window.elementSdk.setConfig({ font_size: value });
      }
    }
  };
}

/* =========================================================
   EDIT PANEL VALUES
========================================================= */
function mapToEditPanelValues(config) {
  return new Map([
    ["hero_title", config.hero_title || defaultConfig.hero_title],
    ["hero_subtitle", config.hero_subtitle || defaultConfig.hero_subtitle],
    ["cta_button", config.cta_button || defaultConfig.cta_button],
    ["features_title", config.features_title || defaultConfig.features_title],
    ["testimonials_title", config.testimonials_title || defaultConfig.testimonials_title],
    ["pricing_title", config.pricing_title || defaultConfig.pricing_title],
    ["about_title", config.about_title || defaultConfig.about_title],
    ["contact_title", config.contact_title || defaultConfig.contact_title]
  ]);
}

/* =========================================================
   ELEMENT SDK INITIALIZATION
========================================================= */
if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues
  });
}

/* =========================================================
   CONTACT FORM HANDLER
========================================================= */
document.getElementById("contactForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("successMessage").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("contactForm").reset();
    document.getElementById("successMessage").classList.add("hidden");
  }, 3000);
});

/* =========================================================
   LOGIN BUTTON POPUP
========================================================= */
document.getElementById("loginBtn")?.addEventListener("click", function () {
  const loginMessage = document.createElement("div");
  loginMessage.className =
    "fixed top-24 right-6 bg-green-500 bg-opacity-20 border border-green-500 text-green-400 px-6 py-3 rounded-lg font-semibold z-50";
  loginMessage.textContent = "Login feature coming soon!";
  document.body.appendChild(loginMessage);

  setTimeout(() => {
    loginMessage.remove();
  }, 3000);
});

/* =========================================================
   CLOUDFLARE SCRIPT (from original HTML)
========================================================= */
(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'9a40b25352769487',t:'MTc2NDA2ODk5NS4wMDAwMDA='};" +
        "var a=document.createElement('script');" +
        "a.nonce='';" +
        "a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';" +
        "document.getElementsByTagName('head')[0].appendChild(a);";
      b.getElementsByTagName("head")[0].appendChild(d);
    }
  }
  if (document.body) {
    var a = document.createElement("iframe");
    a.height = 1;
    a.width = 1;
    a.style.position = "absolute";
    a.style.top = 0;
    a.style.left = 0;
    a.style.border = "none";
    a.style.visibility = "hidden";
    document.body.appendChild(a);
    if (document.readyState !== "loading") c();
    else if (window.addEventListener) document.addEventListener("DOMContentLoaded", c);
    else {
      var e = document.onreadystatechange || function () {};
      document.onreadystatechange = function (b) {
        e(b);
        if (document.readyState !== "loading") {
          document.onreadystatechange = e;
          c();
        }
      };
    }
  }
})();
