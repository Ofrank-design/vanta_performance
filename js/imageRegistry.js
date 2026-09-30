/* ==========================================================================
   VANTA PERFORMANCE: Image Registry
   Every photograph on the site is referenced by key, for example
   "hero.primary" or "team.julianVoss". No page or script hardcodes an image
   path. To replace a photo, overwrite the file listed here or change its src.

   Fields
     src       path to the optimized WebP file
     alt       description for screen readers (decorative images render alt="")
     position  CSS object-position, used to keep the subject in frame when a
               landscape image is cropped to a portrait or square container
     width/height  intrinsic size, used to reserve layout space
     mobile    optional key of an alternate image served below 720px
   ========================================================================== */

const imageRegistry = {
  hero: {
    primary: {
      src: "images/hero/primary.webp", width: 1672, height: 941, position: "70% 50%", mobile: "hero.mobile",
      alt: "An athlete stretching in a concrete studio at sunset, with the city and mountains behind him",
    },
    mobile: {
      src: "images/hero/mobile.webp", width: 882, height: 1882, position: "50% 30%",
      alt: "An athlete stretching in a concrete studio at sunset",
    },
    performance: {
      src: "images/hero/performance.webp", width: 1671, height: 941, position: "70% 40%",
      alt: "A woman resting on a training bench at sunset after a session",
    },
  },

  coaches: {
    founder: {
      src: "images/coaches/founder.webp", width: 1364, height: 768, position: "23% 40%",
      alt: "Julian Voss, Founder and Performance Director",
    },
    performanceDirector: {
      src: "images/coaches/performance-director.webp", width: 1364, height: 768, position: "80% 50%",
      alt: "A performance director reviewing a client's data at a consultation table",
    },
  },

  training: {
    strength: {
      src: "images/training/strength.webp", width: 1672, height: 941, position: "57% 50%",
      alt: "An athlete performing a barbell back squat in the private studio",
    },
    mobility: {
      src: "images/training/mobility.webp", width: 1672, height: 941, position: "50% 40%",
      alt: "An athlete in a deep lateral lunge during a mobility session",
    },
    sprinting: {
      src: "images/training/sprinting.webp", width: 1671, height: 941, position: "50% 45%",
      alt: "An athlete driving out of a sprint start at sunrise",
    },
    conditioning: {
      src: "images/training/conditioning.webp", width: 1364, height: 768, position: "37% 50%",
      alt: "An athlete performing a lunge with a medicine ball on the training floor",
    },
  },

  recovery: {
    sauna: {
      src: "images/recovery/sauna.webp", width: 1364, height: 768, position: "62% 50%",
      alt: "The recovery suite sauna and soaking bath at dusk",
    },
    sleep: {
      src: "images/recovery/sleep.webp", width: 1364, height: 768, position: "50% 50%",
      alt: "A recovery and sleep suite overlooking a snowy forest",
    },
  },

  nutrition: {
    executive: {
      src: "images/coaches/performance-director.webp", width: 1364, height: 768, position: "80% 50%",
      alt: "A coach and client reviewing performance and nutrition data together",
    },
  },

  facility: {
    studio: {
      src: "images/facility/studio.webp", width: 1364, height: 768, position: "50% 50%",
      alt: "The training floor, with a rack, dumbbells and a mountain view",
    },
    lounge: {
      src: "images/facility/lounge.webp", width: 1364, height: 768, position: "15% 50%",
      alt: "The recovery lounge with a cryotherapy chamber and a reclined seat",
    },
    consultRoom: {
      src: "images/facility/consult-room.webp", width: 1364, height: 768, position: "10% 50%",
      alt: "Private consultation room and lounge overlooking a snowy forest",
    },
  },

  lifestyle: {
    travel: {
      src: "images/lifestyle/travel.webp", width: 1364, height: 768, position: "60% 50%",
      alt: "An athlete doing box step ups on a rooftop terrace above Rome",
    },
    morning: {
      src: "images/lifestyle/morning.webp", width: 1364, height: 768, position: "60% 50%",
      alt: "An early morning suspension training session on a rooftop terrace",
    },
    outdoor: {
      src: "images/lifestyle/outdoor.webp", width: 1364, height: 768, position: "78% 50%",
      alt: "An athlete performing dips on an outdoor terrace with a view of the Acropolis",
    },
  },

  editorial: {
    performance: {
      src: "images/editorial/performance.webp", width: 1364, height: 768, position: "50% 50%",
      alt: "An athlete in a glass studio between two recovery stations, with two historic cities behind him",
    },
  },

  team: {
    julianVoss: {
      src: "images/team/julian-voss.webp", width: 1364, height: 768, position: "23% 30%",
      alt: "Portrait of Julian Voss",
    },
    naomiReyes: {
      src: "images/team/naomi-reyes.webp", width: 1364, height: 768, position: "70% 30%",
      alt: "Portrait of Dr. Naomi Reyes",
    },
    marcusBell: {
      src: "images/team/marcus-bell.webp", width: 1364, height: 768, position: "34% 30%",
      alt: "Portrait of Marcus Bell",
    },
    elenaCho: {
      src: "images/team/elena-cho.webp", width: 1364, height: 768, position: "68% 30%",
      alt: "Portrait of Elena Cho",
    },
  },

  journal: {
    strength: {
      src: "images/journal/strength.webp", width: 1050, height: 700, position: "50% 40%",
      alt: "A lifter setting up over a loaded barbell in chalk dust",
    },
    speed: {
      src: "images/journal/speed.webp", width: 800, height: 449, position: "50% 50%",
      alt: "A runner on a lit track at dusk",
    },
    endurance: {
      src: "images/journal/endurance.webp", width: 800, height: 534, position: "50% 50%",
      alt: "Trail runners at sunset, seen from ground level",
    },
    recovery: {
      src: "images/journal/recovery.webp", width: 1024, height: 1024, position: "50% 45%",
      alt: "A man resting in a dark timber sauna",
    },
    focus: {
      src: "images/journal/focus.webp", width: 1122, height: 1402, position: "50% 30%",
      alt: "A woman looking upward in warm, low light",
    },
    conditioning: {
      src: "images/journal/conditioning.webp", width: 612, height: 408, position: "50% 35%",
      alt: "An athlete pushing hard on an air bike",
    },
  },

  programs: {
    strength: {
      src: "images/programs/strength.webp", width: 672, height: 384, position: "50% 50%",
      alt: "A lifter in a black and white gym under a shaft of light",
    },
    power: {
      src: "images/programs/power.webp", width: 494, height: 740, position: "50% 40%",
      alt: "A silhouetted athlete mid leap against a warm red background",
    },
    engine: {
      src: "images/programs/engine.webp", width: 1244, height: 700, position: "80% 50%",
      alt: "An athlete on a rowing machine in a dark conditioning room",
    },
    mobility: {
      src: "images/programs/mobility.webp", width: 800, height: 449, position: "50% 50%",
      alt: "A seated silhouette in a beam of light",
    },
  },
};

function getRegistryEntry(path) {
  const [category, key] = String(path).split(".");
  return imageRegistry[category] && imageRegistry[category][key] ? imageRegistry[category][key] : null;
}

// Returns markup for a registry image. Options:
//   decorative  render alt="" for background style imagery
//   eager       load immediately with high priority (first screen images)
function renderRegistryImage(path, opts = {}) {
  const entry = getRegistryEntry(path);
  if (!entry || !entry.src) return "";
  const alt = opts.decorative ? "" : entry.alt;
  const loading = opts.eager ? 'loading="eager" fetchpriority="high"' : 'loading="lazy" decoding="async"';
  const img = `<img src="${entry.src}" alt="${alt}" width="${entry.width}" height="${entry.height}" ${loading} style="object-position:${entry.position || "50% 50%"}">`;
  const mobile = entry.mobile ? getRegistryEntry(entry.mobile) : null;
  if (!mobile) return img;
  return `<picture><source media="(max-width: 720px)" srcset="${mobile.src}">${img}</picture>`;
}

// Fills every element that carries a data-img attribute, for example
// <div class="frame" data-img="hero.primary" data-eager data-decorative></div>
function hydrateImages(root = document) {
  root.querySelectorAll("[data-img]").forEach((el) => {
    if (el.dataset.hydrated) return;
    el.insertAdjacentHTML("afterbegin", renderRegistryImage(el.dataset.img, {
      eager: el.hasAttribute("data-eager"),
      decorative: el.hasAttribute("data-decorative"),
    }));
    el.dataset.hydrated = "true";
  });
}

hydrateImages();
