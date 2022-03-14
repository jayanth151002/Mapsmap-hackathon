const edges = [
    {
        source: "water_bottle",
        to: "water"
    },
    {
        source: "fireplace",
        to: "ice"
    },
    {
        source: "wood",
        to: "fireplace"
    },
    {
        source: "fireplace",
        to: "fire"
    },
    {
        source: "fire",
        to: "fireplace"
    },
    {
        source: "fireplace",
        to: "home"
    },
    {
        source: "firewood",
        to: "fireplace"
    },
    {
        source: "fireplace",
        to: "light"
    },
    {
        source: "local",
        to: "space"
    },
    {
        source: "sun",
        to: "local"
    },
    {
        source: "local",
        to: "mathematics"
    },
    {
        source: "local",
        to: "home"
    },
    {
        source: "local",
        to: "government"
    },
    {
        source: "local",
        to: "medicine"
    },
    {
        source: "weather",
        to: "local"
    },
    {
        source: "local",
        to: "computing"
    },
    {
        source: "beer",
        to: "mars"
    },
    {
        source: "space",
        to: "mars"
    },
    {
        source: "mars",
        to: "astronomy"
    },
    {
        source: "mars",
        to: "solar-system"
    },
    {
        source: "mars",
        to: "volcanoes"
    },
    {
        source: "mars",
        to: "food"
    },
    {
        source: "office",
        to: "religion"
    },
    {
        source: "record",
        to: "office"
    },
    {
        source: "office",
        to: "software"
    },
    {
        source: "office",
        to: "building"
    },
    {
        source: "building",
        to: "office"
    },
    {
        source: "office",
        to: "people"
    },
    {
        source: "office",
        to: "comedy"
    },
    {
        source: "office",
        to: "paper"
    },
    {
        source: "paper",
        to: "office"
    },
    {
        source: "power",
        to: "office"
    },
    {
        source: "office",
        to: "military"
    },
    {
        source: "office",
        to: "water"
    },
    {
        source: "office",
        to: "law"
    },
    {
        source: "office",
        to: "space"
    },
    {
        source: "coffee",
        to: "office"
    },
    {
        source: "politics",
        to: "office"
    },
    {
        source: "office",
        to: "storage"
    },
    {
        source: "engineering",
        to: "office"
    },
    {
        source: "office",
        to: "environment"
    },
    {
        source: "office",
        to: "computers"
    },
    {
        source: "computers",
        to: "office"
    },
    {
        source: "office",
        to: "property"
    },
    {
        source: "office",
        to: "government"
    },
    {
        source: "office",
        to: "kitchen"
    },
    {
        source: "ventilation",
        to: "office"
    },
    {
        source: "carpet",
        to: "office"
    },
    {
        source: "office",
        to: "uk"
    },
    {
        source: "office",
        to: "computing"
    },
    {
        source: "money",
        to: "office"
    },
    {
        source: "alternate-history",
        to: "science-fiction"
    },
    {
        source: "alternate-history",
        to: "steampunk"
    },
    {
        source: "alternate-history",
        to: "history"
    },
    {
        source: "decay",
        to: "physics"
    },
    {
        source: "decay",
        to: "radioactivity"
    },
    {
        source: "decay",
        to: "fission"
    },
    {
        source: "decay",
        to: "chemistry"
    },
    {
        source: "weather",
        to: "decay"
    },
    {
        source: "decay",
        to: "radiation"
    },
    {
        source: "decay",
        to: "waste"
    },
    {
        source: "waste",
        to: "decay"
    },
    {
        source: "gps",
        to: "cartography"
    },
    {
        source: "hydrodynamics",
        to: "physics"
    },
    {
        source: "optics",
        to: "physics"
    },
    {
        source: "magic",
        to: "physics"
    },
    {
        source: "electromagnetism",
        to: "physics"
    },
    {
        source: "power",
        to: "physics"
    },
    {
        source: "singularity",
        to: "physics"
    },
    {
        source: "ice",
        to: "physics"
    },
    {
        source: "physics",
        to: "space"
    },
    {
        source: "cryogenics",
        to: "physics"
    },
    {
        source: "astronomy",
        to: "physics"
    },
    {
        source: "fission",
        to: "physics"
    },
    {
        source: "physics",
        to: "time"
    },
    {
        source: "gravity",
        to: "physics"
    },
    {
        source: "quantum",
        to: "physics"
    },
    {
        source: "velocity",
        to: "physics"
    },
    {
        source: "fusion",
        to: "physics"
    },
    {
        source: "thermodynamics",
        to: "physics"
    },
    {
        source: "physics",
        to: "mathematics"
    },
    {
        source: "strong-force",
        to: "physics"
    },
    {
        source: "plasma",
        to: "physics"
    },
    {
        source: "chemistry",
        to: "physics"
    },
    {
        source: "zero-point-energy",
        to: "physics"
    },
    {
        source: "relativity",
        to: "physics"
    },
    {
        source: "geophysics",
        to: "physics"
    },
    {
        source: "magnetism",
        to: "physics"
    },
    {
        source: "nuclear",
        to: "physics"
    },
    {
        source: "vacuum",
        to: "physics"
    },
    {
        source: "electricity",
        to: "physics"
    },
    {
        source: "hard-science",
        to: "physics"
    },
    {
        source: "strange-matter",
        to: "physics"
    },
    {
        source: "antimatter",
        to: "physics"
    },
    {
        source: "photovoltaics",
        to: "physics"
    },
    {
        source: "astrophysics",
        to: "physics"
    },
    {
        source: "interface",
        to: "physics"
    },
    {
        source: "orbit",
        to: "physics"
    },
    {
        source: "light",
        to: "physics"
    },
    {
        source: "scaling",
        to: "physics"
    },
    {
        source: "microgravity",
        to: "physics"
    },
    {
        source: "delta-v",
        to: "physics"
    },
    {
        source: "magnetic-field",
        to: "physics"
    },
    {
        source: "momentum",
        to: "physics"
    },
    {
        source: "axial-tilt",
        to: "physics"
    },
    {
        source: "electronics",
        to: "physics"
    },
    {
        source: "energy",
        to: "physics"
    },
    {
        source: "furniture",
        to: "building"
    },
    {
        source: "furniture",
        to: "firearms"
    },
    {
        source: "furniture",
        to: "wood"
    },
    {
        source: "wood",
        to: "furniture"
    },
    {
        source: "furniture",
        to: "apartment"
    },
    {
        source: "home",
        to: "furniture"
    },
    {
        source: "toilet",
        to: "furniture"
    },
    {
        source: "furniture",
        to: "printing"
    },
    {
        source: "furniture",
        to: "housing"
    },
    {
        source: "modern",
        to: "furniture"
    },
    {
        source: "adaptability",
        to: "biology"
    },
    {
        source: "organic",
        to: "agriculture"
    },
    {
        source: "agriculture",
        to: "farming"
    },
    {
        source: "farming",
        to: "agriculture"
    },
    {
        source: "crop",
        to: "agriculture"
    },
    {
        source: "underwater",
        to: "agriculture"
    },
    {
        source: "husbandry",
        to: "agriculture"
    },
    {
        source: "aquaponics",
        to: "agriculture"
    },
    {
        source: "agriculture",
        to: "climate-change"
    },
    {
        source: "culture",
        to: "agriculture"
    },
    {
        source: "permaculture",
        to: "agriculture"
    },
    {
        source: "agriculture",
        to: "livestock"
    },
    {
        source: "diamond",
        to: "size"
    },
    {
        source: "size",
        to: "how"
    },
    {
        source: "size",
        to: "military"
    },
    {
        source: "size",
        to: "space"
    },
    {
        source: "population",
        to: "size"
    },
    {
        source: "gravity",
        to: "size"
    },
    {
        source: "planets",
        to: "size"
    },
    {
        source: "size",
        to: "blood"
    },
    {
        source: "brown-dwarf",
        to: "size"
    },
    {
        source: "size",
        to: "property"
    },
    {
        source: "size",
        to: "taxes"
    },
    {
        source: "size",
        to: "mining"
    },
    {
        source: "size",
        to: "dimensions"
    },
    {
        source: "size",
        to: "uk"
    },
    {
        source: "distance",
        to: "size"
    },
    {
        source: "size",
        to: "food"
    },
    {
        source: "size",
        to: "clothing"
    },
    {
        source: "military",
        to: "soldiers"
    },
    {
        source: "ragnarok",
        to: "apocalypse"
    },
    {
        source: "cost",
        to: "heraldry"
    },
    {
        source: "heraldry",
        to: "history"
    },
    {
        source: "perpetual-motion",
        to: "law"
    },
    {
        source: "perpetual-motion",
        to: "thermodynamics"
    },
    {
        source: "perpetual-motion",
        to: "energy"
    },
    {
        source: "thermal",
        to: "insulation"
    },
    {
        source: "insulation",
        to: "isolation"
    },
    {
        source: "insulation",
        to: "engineering"
    },
    {
        source: "escape",
        to: "insulation"
    },
    {
        source: "carpet",
        to: "insulation"
    },
    {
        source: "insulation",
        to: "arctic"
    },
    {
        source: "insulation",
        to: "protection"
    },
    {
        source: "vision",
        to: "religion"
    },
    {
        source: "earth",
        to: "religion"
    },
    {
        source: "immortality",
        to: "religion"
    },
    {
        source: "esoterism",
        to: "religion"
    },
    {
        source: "religion",
        to: "belief"
    },
    {
        source: "religion",
        to: "brain"
    },
    {
        source: "religion",
        to: "culture"
    },
    {
        source: "religion",
        to: "gods"
    },
    {
        source: "religion",
        to: "supernatural"
    },
    {
        source: "hygiene",
        to: "preservation"
    },
    {
        source: "preservation",
        to: "protection"
    },
    {
        source: "nuclear-winter",
        to: "atmosphere"
    },
    {
        source: "nuclear-winter",
        to: "photosynthesis"
    },
    {
        source: "nuclear-winter",
        to: "nuclear-war"
    },
    {
        source: "conlang",
        to: "language"
    },
    {
        source: "hydrology",
        to: "soil"
    },
    {
        source: "biochar",
        to: "soil"
    },
    {
        source: "soil",
        to: "earth"
    },
    {
        source: "earth",
        to: "soil"
    },
    {
        source: "soil",
        to: "organic"
    },
    {
        source: "soil",
        to: "farming"
    },
    {
        source: "aeroponics",
        to: "soil"
    },
    {
        source: "hydroponics",
        to: "soil"
    },
    {
        source: "soil",
        to: "plants"
    },
    {
        source: "floating-island",
        to: "soil"
    },
    {
        source: "soil",
        to: "gardening"
    },
    {
        source: "soil",
        to: "medicine"
    },
    {
        source: "carbon-sequestration",
        to: "soil"
    },
    {
        source: "fuels",
        to: "fuel"
    },
    {
        source: "civilization",
        to: "people"
    },
    {
        source: "civilization",
        to: "society"
    },
    {
        source: "civilization",
        to: "politics"
    },
    {
        source: "civilization",
        to: "home"
    },
    {
        source: "government",
        to: "civilization"
    },
    {
        source: "police",
        to: "civilization"
    },
    {
        source: "civilization",
        to: "western"
    },
    {
        source: "progress",
        to: "civilization"
    },
    {
        source: "history",
        to: "civilization"
    },
    {
        source: "civilization",
        to: "culture"
    },
    {
        source: "kardashev-scale",
        to: "civilization"
    },
    {
        source: "civilization",
        to: "education"
    },
    {
        source: "reentry",
        to: "re-entry"
    },
    {
        source: "algae",
        to: "ocean"
    },
    {
        source: "algae",
        to: "sea"
    },
    {
        source: "algae",
        to: "waterfall"
    },
    {
        source: "algae",
        to: "water"
    },
    {
        source: "algae",
        to: "underwater"
    },
    {
        source: "algae",
        to: "fish"
    },
    {
        source: "algae",
        to: "plants"
    },
    {
        source: "algae",
        to: "bacteria"
    },
    {
        source: "algae",
        to: "ponds"
    },
    {
        source: "algae",
        to: "fungi"
    },
    {
        source: "game-theory",
        to: "mathematics"
    },
    {
        source: "game-theory",
        to: "economics"
    },
    {
        source: "fire",
        to: "stove"
    },
    {
        source: "woodstove",
        to: "stove"
    },
    {
        source: "stove",
        to: "cooking"
    },
    {
        source: "stove",
        to: "apartment"
    },
    {
        source: "stove",
        to: "appliance"
    },
    {
        source: "firewood",
        to: "stove"
    },
    {
        source: "stove",
        to: "uk"
    },
    {
        source: "stove",
        to: "food"
    },
    {
        source: "debris",
        to: "geology"
    },
    {
        source: "debris",
        to: "orbit"
    },
    {
        source: "waste",
        to: "debris"
    },
    {
        source: "portal",
        to: "architecture"
    },
    {
        source: "portal",
        to: "blood"
    },
    {
        source: "portal",
        to: "apartment"
    },
    {
        source: "portal",
        to: "internet"
    },
    {
        source: "portal",
        to: "anatomy"
    },
    {
        source: "stealth",
        to: "military"
    },
    {
        source: "stealth",
        to: "concealment"
    },
    {
        source: "escape",
        to: "stealth"
    },
    {
        source: "stealth",
        to: "computing"
    },
    {
        source: "language",
        to: "humans"
    },
    {
        source: "people",
        to: "humans"
    },
    {
        source: "humans",
        to: "bones"
    },
    {
        source: "humans",
        to: "universe"
    },
    {
        source: "humans",
        to: "dream"
    },
    {
        source: "earth",
        to: "humans"
    },
    {
        source: "baby",
        to: "humans"
    },
    {
        source: "blood",
        to: "humans"
    },
    {
        source: "humans",
        to: "hair"
    },
    {
        source: "air",
        to: "humans"
    },
    {
        source: "humans",
        to: "sleep"
    },
    {
        source: "children",
        to: "humans"
    },
    {
        source: "writing",
        to: "language"
    },
    {
        source: "grammar",
        to: "language"
    },
    {
        source: "mathematics",
        to: "language"
    },
    {
        source: "language",
        to: "terminology"
    },
    {
        source: "language",
        to: "communication"
    },
    {
        source: "logic",
        to: "language"
    },
    {
        source: "proto-human",
        to: "language"
    },
    {
        source: "language",
        to: "culture"
    },
    {
        source: "language",
        to: "computing"
    },
    {
        source: "music",
        to: "language"
    },
    {
        source: "ocean",
        to: "globe"
    },
    {
        source: "ocean",
        to: "sea"
    },
    {
        source: "ocean",
        to: "future"
    },
    {
        source: "pollution",
        to: "ocean"
    },
    {
        source: "ocean",
        to: "water"
    },
    {
        source: "water",
        to: "ocean"
    },
    {
        source: "ocean",
        to: "earth"
    },
    {
        source: "island",
        to: "ocean"
    },
    {
        source: "ocean",
        to: "underwater"
    },
    {
        source: "ocean",
        to: "fish"
    },
    {
        source: "fish",
        to: "ocean"
    },
    {
        source: "landing",
        to: "ocean"
    },
    {
        source: "ships",
        to: "ocean"
    },
    {
        source: "ocean",
        to: "travel"
    },
    {
        source: "ocean",
        to: "coasts"
    },
    {
        source: "plankton",
        to: "ocean"
    },
    {
        source: "boat",
        to: "ocean"
    },
    {
        source: "mermaid",
        to: "ocean"
    },
    {
        source: "light",
        to: "ocean"
    },
    {
        source: "seawater",
        to: "ocean"
    },
    {
        source: "ocean",
        to: "fishing"
    },
    {
        source: "ocean",
        to: "giant"
    },
    {
        source: "navy",
        to: "ocean"
    },
    {
        source: "anthropology",
        to: "archaeology"
    },
    {
        source: "anthropology",
        to: "humanity"
    },
    {
        source: "anthropology",
        to: "paleontology"
    },
    {
        source: "culture",
        to: "anthropology"
    },
    {
        source: "piracy",
        to: "sea"
    },
    {
        source: "piracy",
        to: "radio"
    },
    {
        source: "piracy",
        to: "nautical"
    },
    {
        source: "piracy",
        to: "law"
    },
    {
        source: "piracy",
        to: "aircraft"
    },
    {
        source: "space",
        to: "moons"
    },
    {
        source: "planets",
        to: "moons"
    },
    {
        source: "jupiter",
        to: "moons"
    },
    {
        source: "chickens",
        to: "animals"
    },
    {
        source: "defense",
        to: "tactics"
    },
    {
        source: "defense",
        to: "military"
    },
    {
        source: "defense",
        to: "law"
    },
    {
        source: "self-defense",
        to: "defense"
    },
    {
        source: "defense",
        to: "sports"
    },
    {
        source: "defense",
        to: "government"
    },
    {
        source: "defense",
        to: "strategy"
    },
    {
        source: "mining",
        to: "defense"
    },
    {
        source: "defense",
        to: "protection"
    },
    {
        source: "cleaning",
        to: "water"
    },
    {
        source: "water",
        to: "cleaning"
    },
    {
        source: "cleaning",
        to: "hygiene"
    },
    {
        source: "cleaning",
        to: "health"
    },
    {
        source: "cleaning",
        to: "vacuum"
    },
    {
        source: "vacuum",
        to: "cleaning"
    },
    {
        source: "cleaning",
        to: "energy"
    },
    {
        source: "record",
        to: "writing"
    },
    {
        source: "writing",
        to: "knowledge"
    },
    {
        source: "written-material",
        to: "writing"
    },
    {
        source: "writing",
        to: "paper"
    },
    {
        source: "law",
        to: "writing"
    },
    {
        source: "grammar",
        to: "writing"
    },
    {
        source: "writing",
        to: "communication"
    },
    {
        source: "writing",
        to: "printing"
    },
    {
        source: "printing",
        to: "writing"
    },
    {
        source: "writing",
        to: "information"
    },
    {
        source: "writing",
        to: "education"
    },
    {
        source: "vision",
        to: "record"
    },
    {
        source: "record",
        to: "people"
    },
    {
        source: "record",
        to: "plastic"
    },
    {
        source: "record",
        to: "law"
    },
    {
        source: "record",
        to: "technology"
    },
    {
        source: "record",
        to: "time"
    },
    {
        source: "record",
        to: "audio"
    },
    {
        source: "record",
        to: "storage"
    },
    {
        source: "record",
        to: "baby"
    },
    {
        source: "record",
        to: "information"
    },
    {
        source: "record",
        to: "photography"
    },
    {
        source: "record",
        to: "memory"
    },
    {
        source: "record",
        to: "computing"
    },
    {
        source: "record",
        to: "giant"
    },
    {
        source: "dogs",
        to: "bones"
    },
    {
        source: "dogs",
        to: "nautical"
    },
    {
        source: "cat",
        to: "dogs"
    },
    {
        source: "dogs",
        to: "mammals"
    },
    {
        source: "dogs",
        to: "pets"
    },
    {
        source: "dogs",
        to: "sleep"
    },
    {
        source: "dogs",
        to: "evil"
    },
    {
        source: "architecture",
        to: "building"
    },
    {
        source: "building",
        to: "architecture"
    },
    {
        source: "crop",
        to: "architecture"
    },
    {
        source: "apartment",
        to: "architecture"
    },
    {
        source: "design",
        to: "architecture"
    },
    {
        source: "tectonics",
        to: "architecture"
    },
    {
        source: "arcology",
        to: "architecture"
    },
    {
        source: "glazing",
        to: "architecture"
    },
    {
        source: "housing",
        to: "architecture"
    },
    {
        source: "escape",
        to: "architecture"
    },
    {
        source: "modern",
        to: "architecture"
    },
    {
        source: "renaissance",
        to: "architecture"
    },
    {
        source: "architecture",
        to: "computing"
    },
    {
        source: "comedy",
        to: "medieval-europe"
    },
    {
        source: "android",
        to: "software"
    },
    {
        source: "voyager",
        to: "software"
    },
    {
        source: "singularity",
        to: "software"
    },
    {
        source: "fire",
        to: "software"
    },
    {
        source: "environment",
        to: "software"
    },
    {
        source: "evolution",
        to: "software"
    },
    {
        source: "lightning",
        to: "software"
    },
    {
        source: "interface",
        to: "software"
    },
    {
        source: "brain",
        to: "software"
    },
    {
        source: "software",
        to: "computing"
    },
    {
        source: "metal",
        to: "building"
    },
    {
        source: "metal",
        to: "cars"
    },
    {
        source: "cars",
        to: "metal"
    },
    {
        source: "water",
        to: "metal"
    },
    {
        source: "metal",
        to: "organic"
    },
    {
        source: "metal",
        to: "astronomy"
    },
    {
        source: "metalworking",
        to: "metal"
    },
    {
        source: "metal",
        to: "strength"
    },
    {
        source: "metal",
        to: "tools"
    },
    {
        source: "tools",
        to: "metal"
    },
    {
        source: "metal",
        to: "magnetism"
    },
    {
        source: "metal",
        to: "nuclear"
    },
    {
        source: "metal",
        to: "durability"
    },
    {
        source: "metal",
        to: "ships"
    },
    {
        source: "metal",
        to: "electricity"
    },
    {
        source: "metal",
        to: "travel"
    },
    {
        source: "metal",
        to: "element"
    },
    {
        source: "metal",
        to: "construction"
    },
    {
        source: "robots",
        to: "metal"
    },
    {
        source: "metals",
        to: "metal"
    },
    {
        source: "metal",
        to: "mining"
    },
    {
        source: "metal",
        to: "uk"
    },
    {
        source: "metal",
        to: "music"
    },
    {
        source: "metal",
        to: "glass"
    },
    {
        source: "craft",
        to: "knowledge"
    },
    {
        source: "knowledge",
        to: "power"
    },
    {
        source: "precognition",
        to: "knowledge"
    },
    {
        source: "grammar",
        to: "knowledge"
    },
    {
        source: "knowledge",
        to: "consciousness"
    },
    {
        source: "knowledge",
        to: "intelligence"
    },
    {
        source: "knowledge",
        to: "information"
    },
    {
        source: "information",
        to: "knowledge"
    },
    {
        source: "light",
        to: "knowledge"
    },
    {
        source: "memory",
        to: "knowledge"
    },
    {
        source: "knowledge",
        to: "brain"
    },
    {
        source: "culture",
        to: "knowledge"
    },
    {
        source: "knowledge",
        to: "uk"
    },
    {
        source: "knowledge",
        to: "education"
    },
    {
        source: "hydrology",
        to: "atmosphere"
    },
    {
        source: "aerodynamics",
        to: "atmosphere"
    },
    {
        source: "oxygen",
        to: "atmosphere"
    },
    {
        source: "atmosphere",
        to: "earth"
    },
    {
        source: "earth",
        to: "atmosphere"
    },
    {
        source: "atmosphere",
        to: "space"
    },
    {
        source: "atmosphere",
        to: "gas"
    },
    {
        source: "astronomy",
        to: "atmosphere"
    },
    {
        source: "terraforming",
        to: "atmosphere"
    },
    {
        source: "atmosphere",
        to: "environment"
    },
    {
        source: "meteor",
        to: "atmosphere"
    },
    {
        source: "re-entry",
        to: "atmosphere"
    },
    {
        source: "atmosphere",
        to: "air"
    },
    {
        source: "air",
        to: "atmosphere"
    },
    {
        source: "atmosphere",
        to: "weather"
    },
    {
        source: "weather",
        to: "atmosphere"
    },
    {
        source: "carbon-sequestration",
        to: "atmosphere"
    },
    {
        source: "air-pollution",
        to: "atmosphere"
    },
    {
        source: "brain",
        to: "neuroscience"
    },
    {
        source: "globe",
        to: "military"
    },
    {
        source: "globe",
        to: "geography"
    },
    {
        source: "globe",
        to: "earth"
    },
    {
        source: "earth",
        to: "globe"
    },
    {
        source: "vegetable-oil",
        to: "oil"
    },
    {
        source: "oil",
        to: "vegetable-oil"
    },
    {
        source: "gas",
        to: "liquid-fuel"
    },
    {
        source: "liquid-fuel",
        to: "fuel"
    },
    {
        source: "oil",
        to: "liquid-fuel"
    },
    {
        source: "infrastructure",
        to: "society"
    },
    {
        source: "spiders",
        to: "arachnids"
    },
    {
        source: "water",
        to: "rivers"
    },
    {
        source: "fish",
        to: "rivers"
    },
    {
        source: "boat",
        to: "rivers"
    },
    {
        source: "fishing",
        to: "rivers"
    },
    {
        source: "hydrology",
        to: "water"
    },
    {
        source: "hydrology",
        to: "geophysics"
    },
    {
        source: "cost",
        to: "how"
    },
    {
        source: "cost",
        to: "property"
    },
    {
        source: "cost",
        to: "items"
    },
    {
        source: "cost",
        to: "nature"
    },
    {
        source: "cost",
        to: "food"
    },
    {
        source: "cost",
        to: "money"
    },
    {
        source: "people",
        to: "building"
    },
    {
        source: "building",
        to: "cities"
    },
    {
        source: "stone",
        to: "building"
    },
    {
        source: "wood",
        to: "building"
    },
    {
        source: "building",
        to: "building-materials"
    },
    {
        source: "storage",
        to: "building"
    },
    {
        source: "prison",
        to: "building"
    },
    {
        source: "landing",
        to: "building"
    },
    {
        source: "apartment",
        to: "building"
    },
    {
        source: "shipbuilding",
        to: "building"
    },
    {
        source: "cement",
        to: "building"
    },
    {
        source: "balcony",
        to: "building"
    },
    {
        source: "home",
        to: "building"
    },
    {
        source: "fabric",
        to: "building"
    },
    {
        source: "electricity",
        to: "building"
    },
    {
        source: "greenhouse",
        to: "building"
    },
    {
        source: "building",
        to: "construction"
    },
    {
        source: "construction",
        to: "building"
    },
    {
        source: "building",
        to: "housing"
    },
    {
        source: "property",
        to: "building"
    },
    {
        source: "carpet",
        to: "building"
    },
    {
        source: "mutation",
        to: "genetics"
    },
    {
        source: "extinction",
        to: "death"
    },
    {
        source: "death",
        to: "illness"
    },
    {
        source: "terrorism",
        to: "death"
    },
    {
        source: "death",
        to: "nuclear-weapons"
    },
    {
        source: "nuclear-war",
        to: "death"
    },
    {
        source: "necromancy",
        to: "death"
    },
    {
        source: "sleep",
        to: "death"
    },
    {
        source: "optics",
        to: "vision"
    },
    {
        source: "optics",
        to: "property"
    },
    {
        source: "optics",
        to: "light"
    },
    {
        source: "wind",
        to: "sea"
    },
    {
        source: "sea",
        to: "water"
    },
    {
        source: "water",
        to: "sea"
    },
    {
        source: "sea",
        to: "earth"
    },
    {
        source: "island",
        to: "sea"
    },
    {
        source: "sea",
        to: "transport"
    },
    {
        source: "sea",
        to: "fish"
    },
    {
        source: "sea",
        to: "ships"
    },
    {
        source: "erosion",
        to: "sea"
    },
    {
        source: "boat",
        to: "sea"
    },
    {
        source: "mermaid",
        to: "sea"
    },
    {
        source: "sea",
        to: "sports"
    },
    {
        source: "sea",
        to: "seawater"
    },
    {
        source: "seawater",
        to: "sea"
    },
    {
        source: "navy",
        to: "sea"
    },
    {
        source: "sea",
        to: "natural"
    },
    {
        source: "aerodynamics",
        to: "gas"
    },
    {
        source: "flight",
        to: "aerodynamics"
    },
    {
        source: "biodiesel",
        to: "organic"
    },
    {
        source: "biodiesel",
        to: "fuel"
    },
    {
        source: "ammunition",
        to: "firearms"
    },
    {
        source: "vision",
        to: "dream"
    },
    {
        source: "dream",
        to: "vision"
    },
    {
        source: "vision",
        to: "supernatural"
    },
    {
        source: "oxygen",
        to: "water"
    },
    {
        source: "water",
        to: "oxygen"
    },
    {
        source: "oxygen",
        to: "earth"
    },
    {
        source: "oxygen",
        to: "space-shuttle"
    },
    {
        source: "oxygen",
        to: "gas"
    },
    {
        source: "fire",
        to: "oxygen"
    },
    {
        source: "blood",
        to: "oxygen"
    },
    {
        source: "oxygen",
        to: "plants"
    },
    {
        source: "oxygen",
        to: "element"
    },
    {
        source: "oxygen",
        to: "fuel"
    },
    {
        source: "reduce",
        to: "oxygen"
    },
    {
        source: "oxygen",
        to: "trees"
    },
    {
        source: "oxygen",
        to: "air"
    },
    {
        source: "air",
        to: "oxygen"
    },
    {
        source: "oxygen",
        to: "medicine"
    },
    {
        source: "oxygen",
        to: "life"
    },
    {
        source: "ventilation",
        to: "oxygen"
    },
    {
        source: "wind",
        to: "japan"
    },
    {
        source: "bones",
        to: "japan"
    },
    {
        source: "tactics",
        to: "japan"
    },
    {
        source: "japan",
        to: "island"
    },
    {
        source: "japan",
        to: "russia"
    },
    {
        source: "tropics",
        to: "climate"
    },
    {
        source: "tropics",
        to: "geography"
    },
    {
        source: "tropics",
        to: "earth"
    },
    {
        source: "snake",
        to: "tropics"
    },
    {
        source: "anthropic-principle",
        to: "universe"
    },
    {
        source: "anthropic-principle",
        to: "life"
    },
    {
        source: "welfare",
        to: "people"
    },
    {
        source: "welfare",
        to: "health"
    },
    {
        source: "welfare",
        to: "safety"
    },
    {
        source: "welfare",
        to: "government"
    },
    {
        source: "welfare",
        to: "money"
    },
    {
        source: "aquarium",
        to: "people"
    },
    {
        source: "governance",
        to: "people"
    },
    {
        source: "people",
        to: "cities"
    },
    {
        source: "diplomacy",
        to: "people"
    },
    {
        source: "people",
        to: "earth"
    },
    {
        source: "people",
        to: "space-shuttle"
    },
    {
        source: "space-shuttle",
        to: "people"
    },
    {
        source: "people",
        to: "population"
    },
    {
        source: "population",
        to: "people"
    },
    {
        source: "transport",
        to: "people"
    },
    {
        source: "fight",
        to: "people"
    },
    {
        source: "society",
        to: "people"
    },
    {
        source: "people",
        to: "vehicles"
    },
    {
        source: "people",
        to: "humanity"
    },
    {
        source: "people",
        to: "baby"
    },
    {
        source: "baby",
        to: "people"
    },
    {
        source: "astronauts",
        to: "people"
    },
    {
        source: "blood",
        to: "people"
    },
    {
        source: "people",
        to: "apartment"
    },
    {
        source: "home",
        to: "people"
    },
    {
        source: "people",
        to: "ships"
    },
    {
        source: "people",
        to: "consciousness"
    },
    {
        source: "intelligence",
        to: "people"
    },
    {
        source: "mermaid",
        to: "people"
    },
    {
        source: "people",
        to: "family"
    },
    {
        source: "family",
        to: "people"
    },
    {
        source: "people",
        to: "information"
    },
    {
        source: "people",
        to: "names"
    },
    {
        source: "mythology",
        to: "people"
    },
    {
        source: "government",
        to: "people"
    },
    {
        source: "trade",
        to: "people"
    },
    {
        source: "life",
        to: "people"
    },
    {
        source: "people",
        to: "evil"
    },
    {
        source: "memory",
        to: "people"
    },
    {
        source: "police",
        to: "people"
    },
    {
        source: "history",
        to: "people"
    },
    {
        source: "people",
        to: "sex"
    },
    {
        source: "sex",
        to: "people"
    },
    {
        source: "culture",
        to: "people"
    },
    {
        source: "navy",
        to: "people"
    },
    {
        source: "angels",
        to: "people"
    },
    {
        source: "landscaping",
        to: "gardening"
    },
    {
        source: "green-roof",
        to: "landscaping"
    },
    {
        source: "waterfall",
        to: "water"
    },
    {
        source: "water",
        to: "waterfall"
    },
    {
        source: "waterfall",
        to: "computing"
    },
    {
        source: "comedy",
        to: "light"
    },
    {
        source: "greenhouse",
        to: "climate"
    },
    {
        source: "climate",
        to: "climate-change"
    },
    {
        source: "climate-change",
        to: "climate"
    },
    {
        source: "control",
        to: "climate"
    },
    {
        source: "wind",
        to: "power"
    },
    {
        source: "thermal",
        to: "wind"
    },
    {
        source: "wind",
        to: "earth"
    },
    {
        source: "wind",
        to: "gas"
    },
    {
        source: "gas",
        to: "wind"
    },
    {
        source: "snake",
        to: "wind"
    },
    {
        source: "fire",
        to: "wind"
    },
    {
        source: "wind",
        to: "wind-power"
    },
    {
        source: "wind",
        to: "velocity"
    },
    {
        source: "wind",
        to: "propulsion"
    },
    {
        source: "wind",
        to: "mountains"
    },
    {
        source: "wind",
        to: "currents"
    },
    {
        source: "wind",
        to: "travel"
    },
    {
        source: "wind",
        to: "element"
    },
    {
        source: "meteor",
        to: "wind"
    },
    {
        source: "wind",
        to: "trees"
    },
    {
        source: "air",
        to: "wind"
    },
    {
        source: "boat",
        to: "wind"
    },
    {
        source: "trade",
        to: "wind"
    },
    {
        source: "wind",
        to: "light"
    },
    {
        source: "wind",
        to: "weather"
    },
    {
        source: "weather",
        to: "wind"
    },
    {
        source: "wind",
        to: "nature"
    },
    {
        source: "wind",
        to: "natural"
    },
    {
        source: "wind",
        to: "music"
    },
    {
        source: "wind",
        to: "energy"
    },
    {
        source: "craft",
        to: "magic"
    },
    {
        source: "craft",
        to: "nautical"
    },
    {
        source: "craft",
        to: "power"
    },
    {
        source: "craft",
        to: "water"
    },
    {
        source: "metalworking",
        to: "craft"
    },
    {
        source: "craft",
        to: "strength"
    },
    {
        source: "spacecraft",
        to: "craft"
    },
    {
        source: "craft",
        to: "fish"
    },
    {
        source: "design",
        to: "craft"
    },
    {
        source: "craft",
        to: "air"
    },
    {
        source: "boat",
        to: "craft"
    },
    {
        source: "craft",
        to: "trade"
    },
    {
        source: "trade",
        to: "craft"
    },
    {
        source: "craft",
        to: "fishing"
    },
    {
        source: "craft",
        to: "video-games"
    },
    {
        source: "craft",
        to: "items"
    },
    {
        source: "aircraft",
        to: "craft"
    },
    {
        source: "craft",
        to: "vehicle"
    },
    {
        source: "craft",
        to: "navigation"
    },
    {
        source: "craft",
        to: "medieval"
    },
    {
        source: "magic",
        to: "air"
    },
    {
        source: "medicine",
        to: "magic"
    },
    {
        source: "magic",
        to: "computing"
    },
    {
        source: "magic",
        to: "illusion"
    },
    {
        source: "illusion",
        to: "magic"
    },
    {
        source: "magic",
        to: "supernatural"
    },
    {
        source: "radioactivity",
        to: "radio"
    },
    {
        source: "radio",
        to: "cars"
    },
    {
        source: "radio",
        to: "space-shuttle"
    },
    {
        source: "radio",
        to: "technology"
    },
    {
        source: "radio",
        to: "communication"
    },
    {
        source: "radio",
        to: "air"
    },
    {
        source: "control",
        to: "radio"
    },
    {
        source: "radio",
        to: "radiation"
    },
    {
        source: "radio",
        to: "internet"
    },
    {
        source: "music",
        to: "radio"
    },
    {
        source: "radio",
        to: "anatomy"
    },
    {
        source: "plants",
        to: "photosynthesis"
    },
    {
        source: "photosynthesis",
        to: "biology"
    },
    {
        source: "aquarium",
        to: "water"
    },
    {
        source: "snake",
        to: "aquarium"
    },
    {
        source: "aquarium",
        to: "fish"
    },
    {
        source: "fish",
        to: "aquarium"
    },
    {
        source: "aquarium",
        to: "glass"
    },
    {
        source: "future",
        to: "science-fiction"
    },
    {
        source: "singularity",
        to: "future"
    },
    {
        source: "future",
        to: "time-travel"
    },
    {
        source: "precognition",
        to: "future"
    },
    {
        source: "futurology",
        to: "future"
    },
    {
        source: "future",
        to: "time"
    },
    {
        source: "future",
        to: "grammar"
    },
    {
        source: "future",
        to: "travel"
    },
    {
        source: "future",
        to: "computers"
    },
    {
        source: "future",
        to: "robots"
    },
    {
        source: "future",
        to: "sports"
    },
    {
        source: "progress",
        to: "future"
    },
    {
        source: "future",
        to: "computing"
    },
    {
        source: "pollution",
        to: "crime"
    },
    {
        source: "coal",
        to: "pollution"
    },
    {
        source: "pollution",
        to: "environment"
    },
    {
        source: "pollution",
        to: "air"
    },
    {
        source: "waste",
        to: "pollution"
    },
    {
        source: "air-pollution",
        to: "pollution"
    },
    {
        source: "animals",
        to: "bones"
    },
    {
        source: "fish",
        to: "animals"
    },
    {
        source: "blood",
        to: "animals"
    },
    {
        source: "animals",
        to: "travel"
    },
    {
        source: "zoology",
        to: "animals"
    },
    {
        source: "animals",
        to: "mammals"
    },
    {
        source: "pets",
        to: "animals"
    },
    {
        source: "meat",
        to: "animals"
    },
    {
        source: "biology",
        to: "animals"
    },
    {
        source: "herd",
        to: "animals"
    },
    {
        source: "nature",
        to: "animals"
    },
    {
        source: "animals",
        to: "food"
    },
    {
        source: "insects",
        to: "animals"
    },
    {
        source: "drone",
        to: "control"
    },
    {
        source: "drone",
        to: "aircraft"
    },
    {
        source: "drone",
        to: "vehicle"
    },
    {
        source: "paper",
        to: "wood"
    },
    {
        source: "cardboard",
        to: "paper"
    },
    {
        source: "paper",
        to: "fabric"
    },
    {
        source: "currency",
        to: "paper"
    },
    {
        source: "paper",
        to: "communication"
    },
    {
        source: "paper",
        to: "trees"
    },
    {
        source: "paper",
        to: "printing"
    },
    {
        source: "waste",
        to: "paper"
    },
    {
        source: "paper",
        to: "education"
    },
    {
        source: "money",
        to: "paper"
    },
    {
        source: "low-fantasy",
        to: "psychology"
    },
    {
        source: "gender",
        to: "psychology"
    },
    {
        source: "genetic-memory",
        to: "psychology"
    },
    {
        source: "psychology",
        to: "mind"
    },
    {
        source: "fermentation",
        to: "biochemistry"
    },
    {
        source: "biochemistry",
        to: "metabolism"
    },
    {
        source: "biochemistry",
        to: "chemistry"
    },
    {
        source: "probe",
        to: "biochemistry"
    },
    {
        source: "interface",
        to: "biochemistry"
    },
    {
        source: "carbon-sequestration",
        to: "biochemistry"
    },
    {
        source: "bones",
        to: "fish"
    },
    {
        source: "fish",
        to: "bones"
    },
    {
        source: "pigs",
        to: "bones"
    },
    {
        source: "diamond",
        to: "stone"
    },
    {
        source: "stone",
        to: "diamond"
    },
    {
        source: "water",
        to: "diamond"
    },
    {
        source: "ice",
        to: "diamond"
    },
    {
        source: "diamond",
        to: "printing"
    },
    {
        source: "bronze-age",
        to: "archaeology"
    },
    {
        source: "bronze-age",
        to: "mythology"
    },
    {
        source: "stars",
        to: "universe"
    },
    {
        source: "stars",
        to: "space"
    },
    {
        source: "space",
        to: "stars"
    },
    {
        source: "astronomy",
        to: "stars"
    },
    {
        source: "sun",
        to: "stars"
    },
    {
        source: "telescope",
        to: "stars"
    },
    {
        source: "stars",
        to: "names"
    },
    {
        source: "stars",
        to: "orbit"
    },
    {
        source: "radioactivity",
        to: "radiation"
    },
    {
        source: "cyborg",
        to: "science-fiction"
    },
    {
        source: "time-travel",
        to: "science-fiction"
    },
    {
        source: "organic",
        to: "science-fiction"
    },
    {
        source: "teleportation",
        to: "science-fiction"
    },
    {
        source: "space",
        to: "science-fiction"
    },
    {
        source: "science-fiction",
        to: "technology"
    },
    {
        source: "sophont",
        to: "science-fiction"
    },
    {
        source: "steampunk",
        to: "science-fiction"
    },
    {
        source: "astronauts",
        to: "science-fiction"
    },
    {
        source: "insectoid",
        to: "science-fiction"
    },
    {
        source: "psionics",
        to: "science-fiction"
    },
    {
        source: "artificial-intelligence",
        to: "science-fiction"
    },
    {
        source: "escape",
        to: "science-fiction"
    },
    {
        source: "cyberpunk",
        to: "science-fiction"
    },
    {
        source: "glass",
        to: "science-fiction"
    },
    {
        source: "cat",
        to: "nautical"
    },
    {
        source: "snake",
        to: "nautical"
    },
    {
        source: "underwater",
        to: "nautical"
    },
    {
        source: "husbandry",
        to: "nautical"
    },
    {
        source: "fish",
        to: "nautical"
    },
    {
        source: "attitude",
        to: "nautical"
    },
    {
        source: "home",
        to: "nautical"
    },
    {
        source: "housing",
        to: "nautical"
    },
    {
        source: "boat",
        to: "nautical"
    },
    {
        source: "roads",
        to: "nautical"
    },
    {
        source: "light",
        to: "nautical"
    },
    {
        source: "launch",
        to: "nautical"
    },
    {
        source: "weather",
        to: "nautical"
    },
    {
        source: "nautical",
        to: "navigation"
    },
    {
        source: "lifestyle",
        to: "attitude"
    },
    {
        source: "lifestyle",
        to: "life"
    },
    {
        source: "lifestyle",
        to: "strategy"
    },
    {
        source: "culture",
        to: "lifestyle"
    },
    {
        source: "warfare",
        to: "military"
    },
    {
        source: "terrorism",
        to: "warfare"
    },
    {
        source: "cold-war",
        to: "warfare"
    },
    {
        source: "warfare",
        to: "conflict"
    },
    {
        source: "blood",
        to: "warfare"
    },
    {
        source: "strategy",
        to: "warfare"
    },
    {
        source: "tactics",
        to: "military"
    },
    {
        source: "tactics",
        to: "strategy"
    },
    {
        source: "strategy",
        to: "tactics"
    },
    {
        source: "space",
        to: "rockets"
    },
    {
        source: "time",
        to: "mines"
    },
    {
        source: "coal",
        to: "mines"
    },
    {
        source: "plastic",
        to: "cars"
    },
    {
        source: "gas",
        to: "cars"
    },
    {
        source: "transport",
        to: "cars"
    },
    {
        source: "transportation",
        to: "cars"
    },
    {
        source: "fuel",
        to: "cars"
    },
    {
        source: "oil",
        to: "cars"
    },
    {
        source: "cars",
        to: "wheels"
    },
    {
        source: "insurance",
        to: "cars"
    },
    {
        source: "glass",
        to: "cars"
    },
    {
        source: "vehicle",
        to: "cars"
    },
    {
        source: "energy",
        to: "cars"
    },
    {
        source: "greenhouse",
        to: "plastic"
    },
    {
        source: "plastic",
        to: "medicine"
    },
    {
        source: "plastic",
        to: "kitchen"
    },
    {
        source: "plastic",
        to: "oil"
    },
    {
        source: "oil",
        to: "plastic"
    },
    {
        source: "plastic",
        to: "biology"
    },
    {
        source: "android",
        to: "cyborg"
    },
    {
        source: "android",
        to: "computing"
    },
    {
        source: "humanoid",
        to: "android"
    },
    {
        source: "android",
        to: "anatomy"
    },
    {
        source: "saturn-v",
        to: "centaur"
    },
    {
        source: "saturn-v",
        to: "astronomy"
    },
    {
        source: "saturn-v",
        to: "apollo-program"
    },
    {
        source: "beer",
        to: "fermentation"
    },
    {
        source: "beer",
        to: "water"
    },
    {
        source: "water",
        to: "beer"
    },
    {
        source: "beer",
        to: "vegetarianism"
    },
    {
        source: "beer",
        to: "home"
    },
    {
        source: "beer",
        to: "boat"
    },
    {
        source: "ergonomics",
        to: "economics"
    },
    {
        source: "ergonomics",
        to: "human-factors"
    },
    {
        source: "geography",
        to: "how"
    },
    {
        source: "population",
        to: "how"
    },
    {
        source: "time",
        to: "how"
    },
    {
        source: "strength",
        to: "how"
    },
    {
        source: "design",
        to: "how"
    },
    {
        source: "altitude",
        to: "how"
    },
    {
        source: "appearance",
        to: "how"
    },
    {
        source: "memory",
        to: "how"
    },
    {
        source: "distance",
        to: "how"
    },
    {
        source: "mind-control",
        to: "mind"
    },
    {
        source: "extinction",
        to: "astronomy"
    },
    {
        source: "destruction",
        to: "extinction"
    },
    {
        source: "electromagnetism",
        to: "magnetism"
    },
    {
        source: "electromagnetism",
        to: "electricity"
    },
    {
        source: "magnetic-field",
        to: "electromagnetism"
    },
    {
        source: "governance",
        to: "power"
    },
    {
        source: "power",
        to: "gas"
    },
    {
        source: "wind-power",
        to: "power"
    },
    {
        source: "power",
        to: "strength"
    },
    {
        source: "power",
        to: "mathematics"
    },
    {
        source: "royalty",
        to: "power"
    },
    {
        source: "immortality",
        to: "power"
    },
    {
        source: "coal",
        to: "power"
    },
    {
        source: "power",
        to: "nuclear"
    },
    {
        source: "power",
        to: "electricity"
    },
    {
        source: "electricity",
        to: "power"
    },
    {
        source: "power",
        to: "statistics"
    },
    {
        source: "element",
        to: "power"
    },
    {
        source: "power",
        to: "lightning"
    },
    {
        source: "power",
        to: "government"
    },
    {
        source: "scaling",
        to: "power"
    },
    {
        source: "oil",
        to: "power"
    },
    {
        source: "power",
        to: "control"
    },
    {
        source: "control",
        to: "power"
    },
    {
        source: "mind",
        to: "power"
    },
    {
        source: "power",
        to: "energy"
    },
    {
        source: "money",
        to: "power"
    },
    {
        source: "nasa",
        to: "space-exploration"
    },
    {
        source: "space-exploration",
        to: "space"
    },
    {
        source: "space-exploration",
        to: "interplanetary"
    },
    {
        source: "space-exploration",
        to: "interstellar"
    },
    {
        source: "medicine",
        to: "illness"
    },
    {
        source: "temperature",
        to: "illness"
    },
    {
        source: "illness",
        to: "brain"
    },
    {
        source: "treatment",
        to: "illness"
    },
    {
        source: "angels",
        to: "wings"
    },
    {
        source: "crime",
        to: "cities"
    },
    {
        source: "crime",
        to: "law"
    },
    {
        source: "prison",
        to: "crime"
    },
    {
        source: "crime",
        to: "security"
    },
    {
        source: "justice",
        to: "crime"
    },
    {
        source: "law-enforcement",
        to: "crime"
    },
    {
        source: "crime",
        to: "computing"
    },
    {
        source: "baby",
        to: "self-sufficient"
    },
    {
        source: "self-sufficient",
        to: "self-sufficiency"
    },
    {
        source: "cybernetics",
        to: "cyborg"
    },
    {
        source: "trajectory",
        to: "cybernetics"
    },
    {
        source: "cybernetics",
        to: "communication"
    },
    {
        source: "cybernetics",
        to: "cyberpunk"
    },
    {
        source: "cybernetics",
        to: "control"
    },
    {
        source: "cybernetics",
        to: "biology"
    },
    {
        source: "cybernetics",
        to: "internet"
    },
    {
        source: "singularity",
        to: "technology"
    },
    {
        source: "singularity",
        to: "mathematics"
    },
    {
        source: "singularity",
        to: "artificial-intelligence"
    },
    {
        source: "earth",
        to: "universe"
    },
    {
        source: "space-shuttle",
        to: "universe"
    },
    {
        source: "space",
        to: "universe"
    },
    {
        source: "universe",
        to: "population"
    },
    {
        source: "astronomy",
        to: "universe"
    },
    {
        source: "universe",
        to: "time"
    },
    {
        source: "planets",
        to: "universe"
    },
    {
        source: "sun",
        to: "universe"
    },
    {
        source: "meteor",
        to: "universe"
    },
    {
        source: "universe",
        to: "evolution"
    },
    {
        source: "intelligence",
        to: "universe"
    },
    {
        source: "light",
        to: "universe"
    },
    {
        source: "life",
        to: "universe"
    },
    {
        source: "aliens",
        to: "universe"
    },
    {
        source: "nebula",
        to: "universe"
    },
    {
        source: "asteroids",
        to: "universe"
    },
    {
        source: "nature",
        to: "universe"
    },
    {
        source: "faster-than-light",
        to: "universe"
    },
    {
        source: "supernova",
        to: "universe"
    },
    {
        source: "black-holes",
        to: "universe"
    },
    {
        source: "apocalypse",
        to: "earth"
    },
    {
        source: "nuclear",
        to: "apocalypse"
    },
    {
        source: "thermal",
        to: "stone"
    },
    {
        source: "geothermal",
        to: "thermal"
    },
    {
        source: "thermal",
        to: "fabric"
    },
    {
        source: "erosion",
        to: "thermal"
    },
    {
        source: "thermal",
        to: "air"
    },
    {
        source: "thermal",
        to: "temperature"
    },
    {
        source: "centaur",
        to: "astronomy"
    },
    {
        source: "centaur",
        to: "probe"
    },
    {
        source: "centaur",
        to: "chess"
    },
    {
        source: "centaur",
        to: "jupiter"
    },
    {
        source: "dream",
        to: "time"
    },
    {
        source: "dream",
        to: "imaging"
    },
    {
        source: "dream",
        to: "information"
    },
    {
        source: "dream",
        to: "clouds"
    },
    {
        source: "escape",
        to: "dream"
    },
    {
        source: "dream",
        to: "sleep"
    },
    {
        source: "sleep",
        to: "dream"
    },
    {
        source: "dream",
        to: "life"
    },
    {
        source: "dream",
        to: "memory"
    },
    {
        source: "dream",
        to: "brain"
    },
    {
        source: "dream",
        to: "mind"
    },
    {
        source: "dream",
        to: "illusion"
    },
    {
        source: "fermentation",
        to: "evolution"
    },
    {
        source: "gravity-assist",
        to: "gravity"
    },
    {
        source: "gravity-assist",
        to: "spacecraft"
    },
    {
        source: "gravity-assist",
        to: "trajectory"
    },
    {
        source: "gravity-assist",
        to: "astrophysics"
    },
    {
        source: "governance",
        to: "government"
    },
    {
        source: "cyborg",
        to: "organic"
    },
    {
        source: "cyborg",
        to: "cyberpunk"
    },
    {
        source: "ethics",
        to: "philosophy"
    },
    {
        source: "astronaut",
        to: "space-shuttle"
    },
    {
        source: "space",
        to: "astronaut"
    },
    {
        source: "astronaut",
        to: "spacecraft"
    },
    {
        source: "astronauts",
        to: "astronaut"
    },
    {
        source: "astronaut",
        to: "orbit"
    },
    {
        source: "astronaut",
        to: "space-station"
    },
    {
        source: "docking",
        to: "spacecraft"
    },
    {
        source: "population",
        to: "cities"
    },
    {
        source: "transport",
        to: "cities"
    },
    {
        source: "apartment",
        to: "cities"
    },
    {
        source: "distance",
        to: "cities"
    },
    {
        source: "urban",
        to: "cities"
    },
    {
        source: "isolation",
        to: "diplomacy"
    },
    {
        source: "politics",
        to: "diplomacy"
    },
    {
        source: "stone",
        to: "water"
    },
    {
        source: "stone",
        to: "earth"
    },
    {
        source: "stone",
        to: "mountains"
    },
    {
        source: "stone",
        to: "usa"
    },
    {
        source: "stone",
        to: "cement"
    },
    {
        source: "coal",
        to: "stone"
    },
    {
        source: "stone",
        to: "construction"
    },
    {
        source: "stone",
        to: "printing"
    },
    {
        source: "light",
        to: "stone"
    },
    {
        source: "stone",
        to: "medicine"
    },
    {
        source: "stone",
        to: "nature"
    },
    {
        source: "stone",
        to: "natural"
    },
    {
        source: "stone",
        to: "swords"
    },
    {
        source: "stone",
        to: "glass"
    },
    {
        source: "organic",
        to: "military"
    },
    {
        source: "cat",
        to: "military"
    },
    {
        source: "invasion",
        to: "military"
    },
    {
        source: "siege",
        to: "military"
    },
    {
        source: "transport",
        to: "military"
    },
    {
        source: "fight",
        to: "military"
    },
    {
        source: "united-states",
        to: "military"
    },
    {
        source: "cavalry",
        to: "military"
    },
    {
        source: "usa",
        to: "military"
    },
    {
        source: "battleship",
        to: "military"
    },
    {
        source: "greenhouse",
        to: "military"
    },
    {
        source: "melee",
        to: "military"
    },
    {
        source: "logistics",
        to: "military"
    },
    {
        source: "evolution",
        to: "military"
    },
    {
        source: "reduce",
        to: "military"
    },
    {
        source: "concealment",
        to: "military"
    },
    {
        source: "intelligence",
        to: "military"
    },
    {
        source: "trade",
        to: "military"
    },
    {
        source: "strategy",
        to: "military"
    },
    {
        source: "chess",
        to: "military"
    },
    {
        source: "mining",
        to: "military"
    },
    {
        source: "combat",
        to: "military"
    },
    {
        source: "military",
        to: "navy"
    },
    {
        source: "navy",
        to: "military"
    },
    {
        source: "water",
        to: "philosophy"
    },
    {
        source: "ice",
        to: "water"
    },
    {
        source: "water",
        to: "space-shuttle"
    },
    {
        source: "island",
        to: "water"
    },
    {
        source: "water",
        to: "coffee"
    },
    {
        source: "greywater",
        to: "water"
    },
    {
        source: "underwater",
        to: "water"
    },
    {
        source: "fish",
        to: "water"
    },
    {
        source: "water",
        to: "cooking"
    },
    {
        source: "blood",
        to: "water"
    },
    {
        source: "cement",
        to: "water"
    },
    {
        source: "plants",
        to: "water"
    },
    {
        source: "water",
        to: "element"
    },
    {
        source: "ecological-footprint",
        to: "water"
    },
    {
        source: "water",
        to: "toilet"
    },
    {
        source: "toilet",
        to: "water"
    },
    {
        source: "plankton",
        to: "water"
    },
    {
        source: "boat",
        to: "water"
    },
    {
        source: "mermaid",
        to: "water"
    },
    {
        source: "bacteria",
        to: "water"
    },
    {
        source: "water",
        to: "medicine"
    },
    {
        source: "water",
        to: "life"
    },
    {
        source: "life",
        to: "water"
    },
    {
        source: "seawater",
        to: "water"
    },
    {
        source: "launch",
        to: "water"
    },
    {
        source: "pesticides",
        to: "water"
    },
    {
        source: "fishing",
        to: "water"
    },
    {
        source: "water",
        to: "arctic"
    },
    {
        source: "water",
        to: "underground"
    },
    {
        source: "navy",
        to: "water"
    },
    {
        source: "hydroelectricity",
        to: "water"
    },
    {
        source: "water",
        to: "glass"
    },
    {
        source: "hacking",
        to: "sports"
    },
    {
        source: "hacking",
        to: "uk"
    },
    {
        source: "hacking",
        to: "computing"
    },
    {
        source: "spaceships",
        to: "space"
    },
    {
        source: "galactic",
        to: "astronomy"
    },
    {
        source: "galactic",
        to: "medicine"
    },
    {
        source: "geography",
        to: "earth"
    },
    {
        source: "population",
        to: "geography"
    },
    {
        source: "snake",
        to: "geography"
    },
    {
        source: "geography",
        to: "astronomy"
    },
    {
        source: "geopolitics",
        to: "geography"
    },
    {
        source: "topography",
        to: "geography"
    },
    {
        source: "arctic",
        to: "geography"
    },
    {
        source: "history",
        to: "geography"
    },
    {
        source: "geography",
        to: "maps"
    },
    {
        source: "geography",
        to: "uk"
    },
    {
        source: "cartography",
        to: "geography"
    },
    {
        source: "nomenclature",
        to: "terminology"
    },
    {
        source: "terminology",
        to: "nomenclature"
    },
    {
        source: "taxonomy",
        to: "nomenclature"
    },
    {
        source: "time-travel",
        to: "time"
    },
    {
        source: "time",
        to: "time-travel"
    },
    {
        source: "time-travel",
        to: "travel"
    },
    {
        source: "time-travel",
        to: "fictional"
    },
    {
        source: "earth",
        to: "philosophy"
    },
    {
        source: "space-shuttle",
        to: "earth"
    },
    {
        source: "geothermal",
        to: "earth"
    },
    {
        source: "snake",
        to: "earth"
    },
    {
        source: "earth",
        to: "fire"
    },
    {
        source: "earth",
        to: "gravity"
    },
    {
        source: "gravity",
        to: "earth"
    },
    {
        source: "earth",
        to: "planets"
    },
    {
        source: "earth",
        to: "sun"
    },
    {
        source: "earth",
        to: "humanity"
    },
    {
        source: "geology",
        to: "earth"
    },
    {
        source: "geophysics",
        to: "earth"
    },
    {
        source: "earth",
        to: "solar-system"
    },
    {
        source: "earth",
        to: "home"
    },
    {
        source: "terraforming",
        to: "earth"
    },
    {
        source: "earth",
        to: "element"
    },
    {
        source: "earthquake",
        to: "earth"
    },
    {
        source: "global-warming",
        to: "earth"
    },
    {
        source: "earth",
        to: "solar"
    },
    {
        source: "deep-space",
        to: "earth"
    },
    {
        source: "sunlight",
        to: "earth"
    },
    {
        source: "re-entry",
        to: "earth"
    },
    {
        source: "earth",
        to: "trees"
    },
    {
        source: "peace",
        to: "earth"
    },
    {
        source: "space-debris",
        to: "earth"
    },
    {
        source: "earth",
        to: "orbit"
    },
    {
        source: "earth",
        to: "life"
    },
    {
        source: "life",
        to: "earth"
    },
    {
        source: "climate-change",
        to: "earth"
    },
    {
        source: "oil",
        to: "earth"
    },
    {
        source: "carbon-based",
        to: "earth"
    },
    {
        source: "arctic",
        to: "earth"
    },
    {
        source: "earth",
        to: "uk"
    },
    {
        source: "nature",
        to: "earth"
    },
    {
        source: "counter-earth",
        to: "earth"
    },
    {
        source: "assimilation",
        to: "attitude"
    },
    {
        source: "assimilation",
        to: "culture"
    },
    {
        source: "space-shuttle",
        to: "nasa"
    },
    {
        source: "nasa",
        to: "space"
    },
    {
        source: "astronomy",
        to: "nasa"
    },
    {
        source: "nasa",
        to: "government"
    },
    {
        source: "nasa",
        to: "uk"
    },
    {
        source: "fire",
        to: "philosophy"
    },
    {
        source: "reincarnation",
        to: "philosophy"
    },
    {
        source: "paradox",
        to: "philosophy"
    },
    {
        source: "communism",
        to: "philosophy"
    },
    {
        source: "philosophy",
        to: "belief"
    },
    {
        source: "logic",
        to: "philosophy"
    },
    {
        source: "philosophy",
        to: "printing"
    },
    {
        source: "appearance",
        to: "philosophy"
    },
    {
        source: "philosophy",
        to: "life"
    },
    {
        source: "mind",
        to: "philosophy"
    },
    {
        source: "aesthetics",
        to: "philosophy"
    },
    {
        source: "rpg",
        to: "games"
    },
    {
        source: "games",
        to: "sports"
    },
    {
        source: "control",
        to: "games"
    },
    {
        source: "mind",
        to: "games"
    },
    {
        source: "society",
        to: "survival"
    },
    {
        source: "survival",
        to: "sports"
    },
    {
        source: "survival",
        to: "life"
    },
    {
        source: "wood",
        to: "organic"
    },
    {
        source: "metabolism",
        to: "organic"
    },
    {
        source: "plasma",
        to: "organic"
    },
    {
        source: "organic",
        to: "chemistry"
    },
    {
        source: "blood",
        to: "organic"
    },
    {
        source: "organic",
        to: "environment"
    },
    {
        source: "plants",
        to: "organic"
    },
    {
        source: "biogas",
        to: "organic"
    },
    {
        source: "organic",
        to: "medicine"
    },
    {
        source: "organic",
        to: "fertilizer"
    },
    {
        source: "carbon-based",
        to: "organic"
    },
    {
        source: "organic",
        to: "biology"
    },
    {
        source: "nature",
        to: "organic"
    },
    {
        source: "organic",
        to: "food"
    },
    {
        source: "organic",
        to: "natural"
    },
    {
        source: "organic",
        to: "internet"
    },
    {
        source: "precognition",
        to: "supernatural"
    },
    {
        source: "telepathy",
        to: "precognition"
    },
    {
        source: "pharmacology",
        to: "medicine"
    },
    {
        source: "ice",
        to: "astronomy"
    },
    {
        source: "ice",
        to: "medical"
    },
    {
        source: "ice",
        to: "sports"
    },
    {
        source: "ice",
        to: "government"
    },
    {
        source: "ice",
        to: "cooling"
    },
    {
        source: "ice",
        to: "arctic"
    },
    {
        source: "ice",
        to: "computing"
    },
    {
        source: "ice",
        to: "glass"
    },
    {
        source: "glass",
        to: "ice"
    },
    {
        source: "plankton",
        to: "microscopic"
    },
    {
        source: "bacteria",
        to: "microscopic"
    },
    {
        source: "law",
        to: "society"
    },
    {
        source: "law",
        to: "gravity"
    },
    {
        source: "law",
        to: "mathematics"
    },
    {
        source: "relativity",
        to: "law"
    },
    {
        source: "law",
        to: "element"
    },
    {
        source: "law",
        to: "behaviour"
    },
    {
        source: "law",
        to: "logic"
    },
    {
        source: "justice",
        to: "law"
    },
    {
        source: "property",
        to: "law"
    },
    {
        source: "law",
        to: "government"
    },
    {
        source: "law-enforcement",
        to: "law"
    },
    {
        source: "law",
        to: "police"
    },
    {
        source: "police",
        to: "law"
    },
    {
        source: "waste",
        to: "law"
    },
    {
        source: "law",
        to: "education"
    },
    {
        source: "teleportation",
        to: "transportation"
    },
    {
        source: "teleportation",
        to: "fictional"
    },
    {
        source: "cat",
        to: "fight"
    },
    {
        source: "cat",
        to: "sun"
    },
    {
        source: "baby",
        to: "cat"
    },
    {
        source: "curiosity",
        to: "cat"
    },
    {
        source: "cat",
        to: "apartment"
    },
    {
        source: "cat",
        to: "home"
    },
    {
        source: "cat",
        to: "hair"
    },
    {
        source: "cat",
        to: "pets"
    },
    {
        source: "cat",
        to: "medicine"
    },
    {
        source: "cat",
        to: "sleep"
    },
    {
        source: "cat",
        to: "kitchen"
    },
    {
        source: "cat",
        to: "control"
    },
    {
        source: "cat",
        to: "meat"
    },
    {
        source: "cat",
        to: "computing"
    },
    {
        source: "cat",
        to: "nature"
    },
    {
        source: "cat",
        to: "food"
    },
    {
        source: "tidally-locked",
        to: "astronomy"
    },
    {
        source: "space-shuttle",
        to: "space"
    },
    {
        source: "zero-gravity",
        to: "space-shuttle"
    },
    {
        source: "space-shuttle",
        to: "spacecraft"
    },
    {
        source: "spacecraft",
        to: "space-shuttle"
    },
    {
        source: "artificial-satellite",
        to: "space-shuttle"
    },
    {
        source: "astronauts",
        to: "space-shuttle"
    },
    {
        source: "space-shuttle",
        to: "solar-system"
    },
    {
        source: "computers",
        to: "space-shuttle"
    },
    {
        source: "toilet",
        to: "space-shuttle"
    },
    {
        source: "robots",
        to: "space-shuttle"
    },
    {
        source: "air",
        to: "space-shuttle"
    },
    {
        source: "space-shuttle",
        to: "orbit"
    },
    {
        source: "hydrogen-fuel",
        to: "space-shuttle"
    },
    {
        source: "food",
        to: "space-shuttle"
    },
    {
        source: "electronics",
        to: "space-shuttle"
    },
    {
        source: "space-shuttle",
        to: "vehicle"
    },
    {
        source: "trends",
        to: "biology"
    },
    {
        source: "gas",
        to: "space"
    },
    {
        source: "space",
        to: "astronomy"
    },
    {
        source: "space",
        to: "gravity"
    },
    {
        source: "space",
        to: "zero-gravity"
    },
    {
        source: "space",
        to: "planets"
    },
    {
        source: "planets",
        to: "space"
    },
    {
        source: "space",
        to: "interplanetary"
    },
    {
        source: "spacecraft",
        to: "space"
    },
    {
        source: "sun",
        to: "space"
    },
    {
        source: "space",
        to: "storage"
    },
    {
        source: "space",
        to: "mathematics"
    },
    {
        source: "space",
        to: "astronauts"
    },
    {
        source: "trajectory",
        to: "space"
    },
    {
        source: "apartment",
        to: "space"
    },
    {
        source: "space",
        to: "vacuum"
    },
    {
        source: "vacuum",
        to: "space"
    },
    {
        source: "space",
        to: "solar-system"
    },
    {
        source: "home",
        to: "space"
    },
    {
        source: "eva",
        to: "space"
    },
    {
        source: "meteor",
        to: "space"
    },
    {
        source: "gases",
        to: "space"
    },
    {
        source: "space",
        to: "solar"
    },
    {
        source: "asteroid",
        to: "space"
    },
    {
        source: "air",
        to: "space"
    },
    {
        source: "space",
        to: "satellites"
    },
    {
        source: "satellites",
        to: "space"
    },
    {
        source: "space",
        to: "exploration"
    },
    {
        source: "spaceplane",
        to: "space"
    },
    {
        source: "astrophysics",
        to: "space"
    },
    {
        source: "hibernation",
        to: "space"
    },
    {
        source: "space",
        to: "aliens"
    },
    {
        source: "aliens",
        to: "space"
    },
    {
        source: "nebula",
        to: "space"
    },
    {
        source: "asteroids",
        to: "space"
    },
    {
        source: "space",
        to: "dimensions"
    },
    {
        source: "space-station",
        to: "space"
    },
    {
        source: "launch-vehicle",
        to: "space"
    },
    {
        source: "space",
        to: "jupiter"
    },
    {
        source: "radiation",
        to: "space"
    },
    {
        source: "magnetic-field",
        to: "space"
    },
    {
        source: "space",
        to: "distance"
    },
    {
        source: "distance",
        to: "space"
    },
    {
        source: "iss",
        to: "space"
    },
    {
        source: "space",
        to: "music"
    },
    {
        source: "black-holes",
        to: "space"
    },
    {
        source: "population",
        to: "consumption"
    },
    {
        source: "population",
        to: "species"
    },
    {
        source: "society",
        to: "population"
    },
    {
        source: "population",
        to: "statistics"
    },
    {
        source: "statistics",
        to: "population"
    },
    {
        source: "epidemiology",
        to: "population"
    },
    {
        source: "evolution",
        to: "population"
    },
    {
        source: "population",
        to: "demographics"
    },
    {
        source: "population",
        to: "biology"
    },
    {
        source: "degrowth",
        to: "population"
    },
    {
        source: "population",
        to: "computing"
    },
    {
        source: "population",
        to: "colonization"
    },
    {
        source: "island",
        to: "isolation"
    },
    {
        source: "island",
        to: "grammar"
    },
    {
        source: "island",
        to: "fish"
    },
    {
        source: "island",
        to: "trees"
    },
    {
        source: "island",
        to: "government"
    },
    {
        source: "fire",
        to: "gas"
    },
    {
        source: "gas",
        to: "emissions"
    },
    {
        source: "sun",
        to: "gas"
    },
    {
        source: "plasma",
        to: "gas"
    },
    {
        source: "gas",
        to: "cooking"
    },
    {
        source: "gas",
        to: "chemistry"
    },
    {
        source: "gas",
        to: "blood"
    },
    {
        source: "gas",
        to: "element"
    },
    {
        source: "gas",
        to: "fuel"
    },
    {
        source: "gases",
        to: "gas"
    },
    {
        source: "evolution",
        to: "gas"
    },
    {
        source: "gas",
        to: "natural-gas"
    },
    {
        source: "natural-gas",
        to: "gas"
    },
    {
        source: "gas",
        to: "heating"
    },
    {
        source: "air",
        to: "gas"
    },
    {
        source: "gas",
        to: "boat"
    },
    {
        source: "biogas",
        to: "gas"
    },
    {
        source: "gas",
        to: "light"
    },
    {
        source: "gas",
        to: "medicine"
    },
    {
        source: "nebula",
        to: "gas"
    },
    {
        source: "gas",
        to: "natural"
    },
    {
        source: "gas",
        to: "vehicle"
    },
    {
        source: "gas",
        to: "energy"
    },
    {
        source: "space-stations",
        to: "space-station"
    },
    {
        source: "terrorism",
        to: "weapons"
    },
    {
        source: "terrorism",
        to: "fear"
    },
    {
        source: "geothermal",
        to: "energy"
    },
    {
        source: "secret-society",
        to: "society"
    },
    {
        source: "assassination",
        to: "cold-war"
    },
    {
        source: "cryogenics",
        to: "technology"
    },
    {
        source: "cryogenics",
        to: "temperature"
    },
    {
        source: "xenobiology",
        to: "astrobiology"
    },
    {
        source: "xenobiology",
        to: "biology"
    },
    {
        source: "futurology",
        to: "technology"
    },
    {
        source: "technology",
        to: "engineering"
    },
    {
        source: "engineering",
        to: "technology"
    },
    {
        source: "printing",
        to: "technology"
    },
    {
        source: "photovoltaics",
        to: "technology"
    },
    {
        source: "modern",
        to: "technology"
    },
    {
        source: "photography",
        to: "technology"
    },
    {
        source: "nanotechnology",
        to: "technology"
    },
    {
        source: "nature",
        to: "technology"
    },
    {
        source: "virtual-reality",
        to: "technology"
    },
    {
        source: "navigation",
        to: "technology"
    },
    {
        source: "snake",
        to: "sun"
    },
    {
        source: "snake",
        to: "united-states"
    },
    {
        source: "venom",
        to: "snake"
    },
    {
        source: "snake",
        to: "video-games"
    },
    {
        source: "snake",
        to: "nature"
    },
    {
        source: "invasion",
        to: "government"
    },
    {
        source: "invasion",
        to: "medicine"
    },
    {
        source: "supervillain",
        to: "supernatural"
    },
    {
        source: "avian",
        to: "zoology"
    },
    {
        source: "crop",
        to: "farming"
    },
    {
        source: "husbandry",
        to: "farming"
    },
    {
        source: "hydroponics",
        to: "farming"
    },
    {
        source: "gardening",
        to: "farming"
    },
    {
        source: "bokashi",
        to: "farming"
    },
    {
        source: "personal-hygiene",
        to: "hygiene"
    },
    {
        source: "astronomy",
        to: "planets"
    },
    {
        source: "sun",
        to: "astronomy"
    },
    {
        source: "telescope",
        to: "astronomy"
    },
    {
        source: "fish",
        to: "astronomy"
    },
    {
        source: "trajectory",
        to: "astronomy"
    },
    {
        source: "altitude",
        to: "astronomy"
    },
    {
        source: "asteroid",
        to: "astronomy"
    },
    {
        source: "astrophysics",
        to: "astronomy"
    },
    {
        source: "nebula",
        to: "astronomy"
    },
    {
        source: "planetary-science",
        to: "astronomy"
    },
    {
        source: "arctic",
        to: "astronomy"
    },
    {
        source: "jupiter",
        to: "astronomy"
    },
    {
        source: "astronomy",
        to: "radiation"
    },
    {
        source: "giant",
        to: "astronomy"
    },
    {
        source: "axial-tilt",
        to: "astronomy"
    },
    {
        source: "flora",
        to: "astronomy"
    },
    {
        source: "economy",
        to: "consumption"
    },
    {
        source: "economics",
        to: "economy"
    },
    {
        source: "economy",
        to: "government"
    },
    {
        source: "economy",
        to: "flight"
    },
    {
        source: "degrowth",
        to: "economy"
    },
    {
        source: "economy",
        to: "money"
    },
    {
        source: "consumption",
        to: "economics"
    },
    {
        source: "economics",
        to: "consumption"
    },
    {
        source: "logistics",
        to: "consumption"
    },
    {
        source: "consumption",
        to: "waste"
    },
    {
        source: "perseverance",
        to: "failure"
    },
    {
        source: "failure",
        to: "illusion"
    },
    {
        source: "wood",
        to: "crop"
    },
    {
        source: "woodstove",
        to: "wood"
    },
    {
        source: "cardboard",
        to: "wood"
    },
    {
        source: "coal",
        to: "wood"
    },
    {
        source: "ships",
        to: "wood"
    },
    {
        source: "firewood",
        to: "wood"
    },
    {
        source: "wood",
        to: "plants"
    },
    {
        source: "wood",
        to: "element"
    },
    {
        source: "wood",
        to: "construction"
    },
    {
        source: "wood",
        to: "fuel"
    },
    {
        source: "wood",
        to: "trees"
    },
    {
        source: "wood",
        to: "boat"
    },
    {
        source: "boat",
        to: "wood"
    },
    {
        source: "woodwork",
        to: "wood"
    },
    {
        source: "wood",
        to: "carpet"
    },
    {
        source: "wood",
        to: "chess"
    },
    {
        source: "wood",
        to: "nature"
    },
    {
        source: "wood",
        to: "natural"
    },
    {
        source: "wood",
        to: "music"
    },
    {
        source: "nuclear-war",
        to: "fission"
    },
    {
        source: "fission",
        to: "biology"
    },
    {
        source: "futurology",
        to: "society"
    },
    {
        source: "female",
        to: "grammar"
    },
    {
        source: "female",
        to: "gender"
    },
    {
        source: "gender",
        to: "female"
    },
    {
        source: "mermaid",
        to: "female"
    },
    {
        source: "female",
        to: "sex"
    },
    {
        source: "female",
        to: "biology"
    },
    {
        source: "cold-war",
        to: "politics"
    },
    {
        source: "cold-war",
        to: "united-states"
    },
    {
        source: "cold-war",
        to: "conflict"
    },
    {
        source: "hygiene",
        to: "health"
    },
    {
        source: "hygiene",
        to: "medicine"
    },
    {
        source: "hygiene",
        to: "computing"
    },
    {
        source: "aeroponics",
        to: "hydroponics"
    },
    {
        source: "hydroponics",
        to: "aeroponics"
    },
    {
        source: "time",
        to: "grammar"
    },
    {
        source: "time",
        to: "sports"
    },
    {
        source: "time",
        to: "property"
    },
    {
        source: "fauna",
        to: "time"
    },
    {
        source: "light",
        to: "time"
    },
    {
        source: "sleep",
        to: "time"
    },
    {
        source: "life",
        to: "time"
    },
    {
        source: "modern",
        to: "time"
    },
    {
        source: "weather",
        to: "time"
    },
    {
        source: "water-footprint",
        to: "time"
    },
    {
        source: "time",
        to: "waste"
    },
    {
        source: "time",
        to: "uk"
    },
    {
        source: "time",
        to: "music"
    },
    {
        source: "carbon-footprint",
        to: "time"
    },
    {
        source: "flora",
        to: "time"
    },
    {
        source: "energy",
        to: "time"
    },
    {
        source: "time",
        to: "money"
    },
    {
        source: "crop",
        to: "fodder"
    },
    {
        source: "crop",
        to: "plants"
    },
    {
        source: "crop",
        to: "fuel"
    },
    {
        source: "crop",
        to: "reduce"
    },
    {
        source: "crop",
        to: "mining"
    },
    {
        source: "crop",
        to: "rocky"
    },
    {
        source: "crop",
        to: "food"
    },
    {
        source: "crop",
        to: "livestock"
    },
    {
        source: "crop",
        to: "anatomy"
    },
    {
        source: "transport",
        to: "vehicles"
    },
    {
        source: "transport",
        to: "transportation"
    },
    {
        source: "transportation",
        to: "transport"
    },
    {
        source: "blood",
        to: "transport"
    },
    {
        source: "transport",
        to: "travel"
    },
    {
        source: "space-travel",
        to: "transport"
    },
    {
        source: "boat",
        to: "transport"
    },
    {
        source: "aircraft",
        to: "transport"
    },
    {
        source: "transport",
        to: "trains"
    },
    {
        source: "transport",
        to: "vehicle"
    },
    {
        source: "music",
        to: "audio"
    },
    {
        source: "species",
        to: "telescope"
    },
    {
        source: "fish",
        to: "species"
    },
    {
        source: "species",
        to: "kingdom"
    },
    {
        source: "taxonomy",
        to: "species"
    },
    {
        source: "species",
        to: "family"
    },
    {
        source: "species",
        to: "appearance"
    },
    {
        source: "species",
        to: "medicine"
    },
    {
        source: "sex",
        to: "species"
    },
    {
        source: "species",
        to: "biology"
    },
    {
        source: "genetics",
        to: "species"
    },
    {
        source: "symbiosis",
        to: "species"
    },
    {
        source: "isolation",
        to: "chemistry"
    },
    {
        source: "privacy",
        to: "isolation"
    },
    {
        source: "isolation",
        to: "element"
    },
    {
        source: "isolation",
        to: "medicine"
    },
    {
        source: "fight",
        to: "conflict"
    },
    {
        source: "conflict",
        to: "fight"
    },
    {
        source: "fight",
        to: "blood"
    },
    {
        source: "melee",
        to: "fight"
    },
    {
        source: "fight",
        to: "martial-arts"
    },
    {
        source: "fight",
        to: "sports"
    },
    {
        source: "fight",
        to: "combat"
    },
    {
        source: "combat",
        to: "fight"
    },
    {
        source: "fire",
        to: "sun"
    },
    {
        source: "fire",
        to: "plasma"
    },
    {
        source: "fire",
        to: "cooking"
    },
    {
        source: "fire",
        to: "economics"
    },
    {
        source: "fire",
        to: "destruction"
    },
    {
        source: "coal",
        to: "fire"
    },
    {
        source: "firewood",
        to: "fire"
    },
    {
        source: "fire",
        to: "element"
    },
    {
        source: "fire",
        to: "fuel"
    },
    {
        source: "fire",
        to: "heating"
    },
    {
        source: "fire",
        to: "air"
    },
    {
        source: "fire",
        to: "sports"
    },
    {
        source: "escape",
        to: "fire"
    },
    {
        source: "fire",
        to: "light"
    },
    {
        source: "fire",
        to: "temperature"
    },
    {
        source: "fire",
        to: "radiation"
    },
    {
        source: "fire",
        to: "food"
    },
    {
        source: "fire",
        to: "natural"
    },
    {
        source: "fire",
        to: "energy"
    },
    {
        source: "steampunk",
        to: "society"
    },
    {
        source: "family",
        to: "society"
    },
    {
        source: "police",
        to: "society"
    },
    {
        source: "progress",
        to: "society"
    },
    {
        source: "culture",
        to: "society"
    },
    {
        source: "urban",
        to: "society"
    },
    {
        source: "zero-gravity",
        to: "gravity"
    },
    {
        source: "gravity",
        to: "planets"
    },
    {
        source: "sun",
        to: "gravity"
    },
    {
        source: "microgravity",
        to: "gravity"
    },
    {
        source: "gravity",
        to: "nature"
    },
    {
        source: "gravity",
        to: "music"
    },
    {
        source: "gravity",
        to: "weak-force"
    },
    {
        source: "quantum",
        to: "environment"
    },
    {
        source: "quantum",
        to: "computing"
    },
    {
        source: "fish",
        to: "underwater"
    },
    {
        source: "underwater",
        to: "fishing"
    },
    {
        source: "underwater",
        to: "underground"
    },
    {
        source: "zero-gravity",
        to: "microgravity"
    },
    {
        source: "microgravity",
        to: "zero-gravity"
    },
    {
        source: "wind-power",
        to: "energy"
    },
    {
        source: "velocity",
        to: "economics"
    },
    {
        source: "velocity",
        to: "currency"
    },
    {
        source: "delta-v",
        to: "velocity"
    },
    {
        source: "momentum",
        to: "velocity"
    },
    {
        source: "conspiracy",
        to: "politics"
    },
    {
        source: "geopolitics",
        to: "politics"
    },
    {
        source: "boat",
        to: "politics"
    },
    {
        source: "politics",
        to: "government"
    },
    {
        source: "government",
        to: "politics"
    },
    {
        source: "strategy",
        to: "politics"
    },
    {
        source: "politics",
        to: "police"
    },
    {
        source: "sun",
        to: "planets"
    },
    {
        source: "solar-system",
        to: "planets"
    },
    {
        source: "planets",
        to: "orbit"
    },
    {
        source: "strength",
        to: "property"
    },
    {
        source: "energy",
        to: "strength"
    },
    {
        source: "low-fantasy",
        to: "life"
    },
    {
        source: "sun",
        to: "fusion"
    },
    {
        source: "fusion",
        to: "cooking"
    },
    {
        source: "brown-dwarf",
        to: "fusion"
    },
    {
        source: "fusion",
        to: "element"
    },
    {
        source: "nuclear-war",
        to: "fusion"
    },
    {
        source: "fusion",
        to: "culture"
    },
    {
        source: "fusion",
        to: "genetics"
    },
    {
        source: "fusion",
        to: "music"
    },
    {
        source: "fusion",
        to: "energy"
    },
    {
        source: "oil",
        to: "vehicles"
    },
    {
        source: "vehicles",
        to: "wheels"
    },
    {
        source: "vehicles",
        to: "vehicle"
    },
    {
        source: "probe",
        to: "spacecraft"
    },
    {
        source: "re-entry",
        to: "spacecraft"
    },
    {
        source: "spaceplane",
        to: "spacecraft"
    },
    {
        source: "lander",
        to: "spacecraft"
    },
    {
        source: "spacecraft",
        to: "vehicle"
    },
    {
        source: "sun",
        to: "orbits"
    },
    {
        source: "sun",
        to: "nuclear"
    },
    {
        source: "sun",
        to: "solar-system"
    },
    {
        source: "sun",
        to: "plants"
    },
    {
        source: "sun",
        to: "gases"
    },
    {
        source: "gases",
        to: "sun"
    },
    {
        source: "sun",
        to: "solar"
    },
    {
        source: "solar",
        to: "sun"
    },
    {
        source: "sun",
        to: "sunlight"
    },
    {
        source: "sunlight",
        to: "sun"
    },
    {
        source: "sun",
        to: "heating"
    },
    {
        source: "sun",
        to: "orbit"
    },
    {
        source: "sun",
        to: "light"
    },
    {
        source: "sun",
        to: "life"
    },
    {
        source: "outer-solar-system",
        to: "sun"
    },
    {
        source: "weather",
        to: "sun"
    },
    {
        source: "sun",
        to: "culture"
    },
    {
        source: "supernova",
        to: "sun"
    },
    {
        source: "counter-earth",
        to: "sun"
    },
    {
        source: "sun",
        to: "energy"
    },
    {
        source: "storage",
        to: "memory"
    },
    {
        source: "storage",
        to: "computing"
    },
    {
        source: "gender",
        to: "grammar"
    },
    {
        source: "construction",
        to: "grammar"
    },
    {
        source: "government",
        to: "grammar"
    },
    {
        source: "grammar",
        to: "uk"
    },
    {
        source: "hive",
        to: "home"
    },
    {
        source: "hive",
        to: "computing"
    },
    {
        source: "prison",
        to: "usa"
    },
    {
        source: "prison",
        to: "government"
    },
    {
        source: "life",
        to: "prison"
    },
    {
        source: "humanity",
        to: "nature"
    },
    {
        source: "eugenics",
        to: "biology"
    },
    {
        source: "thermodynamics",
        to: "temperature"
    },
    {
        source: "temperature",
        to: "thermodynamics"
    },
    {
        source: "thermodynamics",
        to: "energy"
    },
    {
        source: "thrust",
        to: "propulsion"
    },
    {
        source: "energy",
        to: "propulsion"
    },
    {
        source: "engineering",
        to: "mathematics"
    },
    {
        source: "inequality",
        to: "mathematics"
    },
    {
        source: "hard-science",
        to: "mathematics"
    },
    {
        source: "logic",
        to: "mathematics"
    },
    {
        source: "erosion",
        to: "mathematics"
    },
    {
        source: "evolution",
        to: "mathematics"
    },
    {
        source: "reduce",
        to: "mathematics"
    },
    {
        source: "orbit",
        to: "mathematics"
    },
    {
        source: "scaling",
        to: "mathematics"
    },
    {
        source: "husbandry",
        to: "livestock"
    },
    {
        source: "united-states",
        to: "usa"
    },
    {
        source: "santa-claus",
        to: "united-states"
    },
    {
        source: "light",
        to: "united-states"
    },
    {
        source: "wild-west",
        to: "united-states"
    },
    {
        source: "united-states",
        to: "protection"
    },
    {
        source: "nuclear-power",
        to: "united-states"
    },
    {
        source: "blood",
        to: "transportation"
    },
    {
        source: "logistics",
        to: "transportation"
    },
    {
        source: "boat",
        to: "transportation"
    },
    {
        source: "oil",
        to: "transportation"
    },
    {
        source: "vehicle",
        to: "transportation"
    },
    {
        source: "navigation",
        to: "transportation"
    },
    {
        source: "reincarnation",
        to: "belief"
    },
    {
        source: "sophont",
        to: "artificial-intelligence"
    },
    {
        source: "telescope",
        to: "glass"
    },
    {
        source: "geophysics",
        to: "geology"
    },
    {
        source: "tectonics",
        to: "geology"
    },
    {
        source: "hard-science",
        to: "geology"
    },
    {
        source: "erosion",
        to: "geology"
    },
    {
        source: "thrust",
        to: "geology"
    },
    {
        source: "weather",
        to: "geology"
    },
    {
        source: "waste",
        to: "geology"
    },
    {
        source: "steampunk",
        to: "cyberpunk"
    },
    {
        source: "attitude",
        to: "engineering"
    },
    {
        source: "design",
        to: "engineering"
    },
    {
        source: "engineering",
        to: "control"
    },
    {
        source: "flight",
        to: "engineering"
    },
    {
        source: "nanotechnology",
        to: "engineering"
    },
    {
        source: "life",
        to: "metabolism"
    },
    {
        source: "conflict",
        to: "combat"
    },
    {
        source: "plasma",
        to: "blood"
    },
    {
        source: "plasma",
        to: "medicine"
    },
    {
        source: "baby",
        to: "family"
    },
    {
        source: "baby",
        to: "sex"
    },
    {
        source: "baby",
        to: "children"
    },
    {
        source: "curiosity",
        to: "artificial-satellite"
    },
    {
        source: "curiosity",
        to: "construction"
    },
    {
        source: "melee",
        to: "cavalry"
    },
    {
        source: "cavalry",
        to: "middle-ages"
    },
    {
        source: "cardboard",
        to: "packaging"
    },
    {
        source: "mountains",
        to: "volcanoes"
    },
    {
        source: "fish",
        to: "zoology"
    },
    {
        source: "fish",
        to: "boat"
    },
    {
        source: "mermaid",
        to: "fish"
    },
    {
        source: "fish",
        to: "pets"
    },
    {
        source: "scaling",
        to: "fish"
    },
    {
        source: "fish",
        to: "life"
    },
    {
        source: "fishing",
        to: "fish"
    },
    {
        source: "fish",
        to: "ponds"
    },
    {
        source: "merfolk",
        to: "fish"
    },
    {
        source: "fish",
        to: "arctic"
    },
    {
        source: "fish",
        to: "meat"
    },
    {
        source: "fish",
        to: "genetics"
    },
    {
        source: "fish",
        to: "food"
    },
    {
        source: "culture",
        to: "attitude"
    },
    {
        source: "attitude",
        to: "mind"
    },
    {
        source: "attitude",
        to: "vehicle"
    },
    {
        source: "safety",
        to: "health"
    },
    {
        source: "health",
        to: "medical"
    },
    {
        source: "health",
        to: "medicine"
    },
    {
        source: "health",
        to: "life"
    },
    {
        source: "health",
        to: "video-games"
    },
    {
        source: "health",
        to: "insurance"
    },
    {
        source: "repair",
        to: "travel"
    },
    {
        source: "security",
        to: "home"
    },
    {
        source: "security",
        to: "safety"
    },
    {
        source: "safety",
        to: "security"
    },
    {
        source: "biosecurity",
        to: "security"
    },
    {
        source: "peace",
        to: "security"
    },
    {
        source: "security",
        to: "property"
    },
    {
        source: "security",
        to: "police"
    },
    {
        source: "security",
        to: "protection"
    },
    {
        source: "protection",
        to: "security"
    },
    {
        source: "insurance",
        to: "security"
    },
    {
        source: "security",
        to: "illusion"
    },
    {
        source: "memory",
        to: "data-storage"
    },
    {
        source: "low-earth-orbit",
        to: "orbit"
    },
    {
        source: "radiation",
        to: "particles"
    },
    {
        source: "reduce",
        to: "cooking"
    },
    {
        source: "cooking",
        to: "heating"
    },
    {
        source: "kitchen",
        to: "cooking"
    },
    {
        source: "oil",
        to: "cooking"
    },
    {
        source: "cooking",
        to: "food"
    },
    {
        source: "trade",
        to: "economics"
    },
    {
        source: "protection",
        to: "economics"
    },
    {
        source: "pigs",
        to: "economics"
    },
    {
        source: "economics",
        to: "money"
    },
    {
        source: "nuclear",
        to: "destruction"
    },
    {
        source: "waste",
        to: "destruction"
    },
    {
        source: "astronauts",
        to: "orbit"
    },
    {
        source: "flight",
        to: "landing"
    },
    {
        source: "chemistry",
        to: "explosions"
    },
    {
        source: "hard-science",
        to: "chemistry"
    },
    {
        source: "evolution",
        to: "chemistry"
    },
    {
        source: "reduce",
        to: "chemistry"
    },
    {
        source: "air",
        to: "chemistry"
    },
    {
        source: "boat",
        to: "chemistry"
    },
    {
        source: "interface",
        to: "chemistry"
    },
    {
        source: "light",
        to: "chemistry"
    },
    {
        source: "history",
        to: "chemistry"
    },
    {
        source: "chemistry",
        to: "biology"
    },
    {
        source: "oil",
        to: "engines"
    },
    {
        source: "blood",
        to: "vampires"
    },
    {
        source: "family",
        to: "blood"
    },
    {
        source: "blood",
        to: "medicine"
    },
    {
        source: "blood",
        to: "life"
    },
    {
        source: "oil",
        to: "blood"
    },
    {
        source: "blood",
        to: "mind"
    },
    {
        source: "blood",
        to: "food"
    },
    {
        source: "hydroponics",
        to: "aquaponics"
    },
    {
        source: "aquaponics",
        to: "hydroponics"
    },
    {
        source: "money",
        to: "usa"
    },
    {
        source: "flight",
        to: "trajectory"
    },
    {
        source: "aquaponics",
        to: "food"
    },
    {
        source: "concealment",
        to: "privacy"
    },
    {
        source: "werewolf",
        to: "mythology"
    },
    {
        source: "orbits",
        to: "orbit"
    },
    {
        source: "toilet",
        to: "apartment"
    },
    {
        source: "apartment",
        to: "housing"
    },
    {
        source: "apartment",
        to: "kitchen"
    },
    {
        source: "kitchen",
        to: "apartment"
    },
    {
        source: "apartment",
        to: "renting"
    },
    {
        source: "apartment",
        to: "computing"
    },
    {
        source: "psionics",
        to: "telekinesis"
    },
    {
        source: "shipbuilding",
        to: "construction"
    },
    {
        source: "cement",
        to: "construction"
    },
    {
        source: "cement",
        to: "light"
    },
    {
        source: "cement",
        to: "anatomy"
    },
    {
        source: "cloning",
        to: "biology"
    },
    {
        source: "immortality",
        to: "vampires"
    },
    {
        source: "immortality",
        to: "mythology"
    },
    {
        source: "immortality",
        to: "life"
    },
    {
        source: "immortality",
        to: "biology"
    },
    {
        source: "immortality",
        to: "angels"
    },
    {
        source: "immortality",
        to: "gods"
    },
    {
        source: "zero-point-energy",
        to: "temperature"
    },
    {
        source: "rpg",
        to: "weapons"
    },
    {
        source: "rpg",
        to: "computing"
    },
    {
        source: "energy",
        to: "rpg"
    },
    {
        source: "magnetism",
        to: "geophysics"
    },
    {
        source: "coal",
        to: "plants"
    },
    {
        source: "coal",
        to: "fuel"
    },
    {
        source: "coal",
        to: "heating"
    },
    {
        source: "coal",
        to: "railroads"
    },
    {
        source: "oil",
        to: "coal"
    },
    {
        source: "coal",
        to: "mining"
    },
    {
        source: "coal",
        to: "underground"
    },
    {
        source: "coal",
        to: "natural"
    },
    {
        source: "coal",
        to: "trains"
    },
    {
        source: "coal",
        to: "caves"
    },
    {
        source: "coal",
        to: "energy"
    },
    {
        source: "guns",
        to: "tools"
    },
    {
        source: "fodder",
        to: "design"
    },
    {
        source: "design",
        to: "home"
    },
    {
        source: "design",
        to: "fabric"
    },
    {
        source: "control",
        to: "design"
    },
    {
        source: "design",
        to: "planning"
    },
    {
        source: "planning",
        to: "design"
    },
    {
        source: "design",
        to: "clothing"
    },
    {
        source: "magnetism",
        to: "property"
    },
    {
        source: "magnetic-field",
        to: "magnetism"
    },
    {
        source: "nuclear",
        to: "biology"
    },
    {
        source: "nuclear",
        to: "nuclear-power"
    },
    {
        source: "waste",
        to: "nuclear"
    },
    {
        source: "energy",
        to: "nuclear"
    },
    {
        source: "torture",
        to: "evil"
    },
    {
        source: "vacuum",
        to: "appliance"
    },
    {
        source: "appliance",
        to: "home"
    },
    {
        source: "appliance",
        to: "electricity"
    },
    {
        source: "appliance",
        to: "kitchen"
    },
    {
        source: "food",
        to: "fodder"
    },
    {
        source: "solar-power",
        to: "solar"
    },
    {
        source: "energy",
        to: "solar-power"
    },
    {
        source: "vacuum",
        to: "orbit"
    },
    {
        source: "vacuum",
        to: "carpet"
    },
    {
        source: "delta-v",
        to: "vacuum"
    },
    {
        source: "faster-than-light",
        to: "vacuum"
    },
    {
        source: "solar-system",
        to: "brown-dwarf"
    },
    {
        source: "solar-system",
        to: "solar"
    },
    {
        source: "solar",
        to: "solar-system"
    },
    {
        source: "deep-space",
        to: "solar-system"
    },
    {
        source: "solar-system",
        to: "asteroid"
    },
    {
        source: "satellites",
        to: "solar-system"
    },
    {
        source: "venus",
        to: "solar-system"
    },
    {
        source: "outer-solar-system",
        to: "solar-system"
    },
    {
        source: "planetary-science",
        to: "solar-system"
    },
    {
        source: "jupiter",
        to: "solar-system"
    },
    {
        source: "safety",
        to: "home"
    },
    {
        source: "home",
        to: "environment"
    },
    {
        source: "home",
        to: "computers"
    },
    {
        source: "home",
        to: "housing"
    },
    {
        source: "home",
        to: "family"
    },
    {
        source: "home",
        to: "property"
    },
    {
        source: "home",
        to: "sleep"
    },
    {
        source: "kitchen",
        to: "home"
    },
    {
        source: "carpet",
        to: "home"
    },
    {
        source: "home",
        to: "uk"
    },
    {
        source: "home",
        to: "computing"
    },
    {
        source: "food",
        to: "home"
    },
    {
        source: "home",
        to: "internet"
    },
    {
        source: "boat",
        to: "ships"
    },
    {
        source: "navy",
        to: "ships"
    },
    {
        source: "carpet",
        to: "fabric"
    },
    {
        source: "fabric",
        to: "computing"
    },
    {
        source: "fabric",
        to: "clothing"
    },
    {
        source: "clothing",
        to: "fabric"
    },
    {
        source: "imaging",
        to: "medicine"
    },
    {
        source: "firewood",
        to: "fuel"
    },
    {
        source: "gender",
        to: "sex"
    },
    {
        source: "sex",
        to: "gender"
    },
    {
        source: "taxonomy",
        to: "terminology"
    },
    {
        source: "off-grid",
        to: "electricity"
    },
    {
        source: "lightning",
        to: "electricity"
    },
    {
        source: "photovoltaics",
        to: "electricity"
    },
    {
        source: "hydroelectricity",
        to: "electricity"
    },
    {
        source: "electricity",
        to: "energy"
    },
    {
        source: "mushrooms",
        to: "fungi"
    },
    {
        source: "astrobiology",
        to: "abiogenesis"
    },
    {
        source: "astrobiology",
        to: "biology"
    },
    {
        source: "biology",
        to: "astrobiology"
    },
    {
        source: "guns",
        to: "wheels"
    },
    {
        source: "boat",
        to: "travel"
    },
    {
        source: "light",
        to: "travel"
    },
    {
        source: "progress",
        to: "travel"
    },
    {
        source: "distance",
        to: "travel"
    },
    {
        source: "faster-than-light",
        to: "travel"
    },
    {
        source: "vehicle",
        to: "travel"
    },
    {
        source: "travel",
        to: "energy"
    },
    {
        source: "navigation",
        to: "travel"
    },
    {
        source: "terraforming",
        to: "ecology"
    },
    {
        source: "terraforming",
        to: "topography"
    },
    {
        source: "terraforming",
        to: "life"
    },
    {
        source: "terraforming",
        to: "temperature"
    },
    {
        source: "paradox",
        to: "logic"
    },
    {
        source: "paradox",
        to: "property"
    },
    {
        source: "safety",
        to: "medicine"
    },
    {
        source: "safety",
        to: "protection"
    },
    {
        source: "plants",
        to: "greenhouse"
    },
    {
        source: "greenhouse",
        to: "sunlight"
    },
    {
        source: "greenhouse",
        to: "uk"
    },
    {
        source: "greenhouse",
        to: "glass"
    },
    {
        source: "melee",
        to: "video-games"
    },
    {
        source: "melee",
        to: "combat"
    },
    {
        source: "control",
        to: "statistics"
    },
    {
        source: "zoology",
        to: "evolution"
    },
    {
        source: "asteroid",
        to: "zoology"
    },
    {
        source: "hair",
        to: "zoology"
    },
    {
        source: "zoology",
        to: "fauna"
    },
    {
        source: "memory",
        to: "zoology"
    },
    {
        source: "sex",
        to: "zoology"
    },
    {
        source: "zoology",
        to: "biology"
    },
    {
        source: "element",
        to: "environment"
    },
    {
        source: "ecology",
        to: "environment"
    },
    {
        source: "temperature",
        to: "environment"
    },
    {
        source: "weather",
        to: "environment"
    },
    {
        source: "culture",
        to: "environment"
    },
    {
        source: "environment",
        to: "computing"
    },
    {
        source: "nature",
        to: "environment"
    },
    {
        source: "augmented-reality",
        to: "environment"
    },
    {
        source: "virtual-reality",
        to: "environment"
    },
    {
        source: "urban",
        to: "environment"
    },
    {
        source: "navy",
        to: "coasts"
    },
    {
        source: "epidemiology",
        to: "medicine"
    },
    {
        source: "epidemiology",
        to: "control"
    },
    {
        source: "money",
        to: "currency"
    },
    {
        source: "brown-dwarf",
        to: "jupiter"
    },
    {
        source: "off-grid",
        to: "communication"
    },
    {
        source: "communication",
        to: "information"
    },
    {
        source: "communication",
        to: "anatomy"
    },
    {
        source: "nature",
        to: "plants"
    },
    {
        source: "probe",
        to: "exploration"
    },
    {
        source: "probe",
        to: "information"
    },
    {
        source: "lander",
        to: "probe"
    },
    {
        source: "probe",
        to: "aircraft"
    },
    {
        source: "feudalism",
        to: "communism"
    },
    {
        source: "communism",
        to: "government"
    },
    {
        source: "altitude",
        to: "distance"
    },
    {
        source: "sleep",
        to: "consciousness"
    },
    {
        source: "mind",
        to: "consciousness"
    },
    {
        source: "meteor",
        to: "martial-arts"
    },
    {
        source: "refrigerant",
        to: "medicine"
    },
    {
        source: "air",
        to: "element"
    },
    {
        source: "element",
        to: "computing"
    },
    {
        source: "glass",
        to: "element"
    },
    {
        source: "construction",
        to: "trade"
    },
    {
        source: "transplant",
        to: "medicine"
    },
    {
        source: "natural-gas",
        to: "fuel"
    },
    {
        source: "biomass",
        to: "fuel"
    },
    {
        source: "biogas",
        to: "fuel"
    },
    {
        source: "oil",
        to: "fuel"
    },
    {
        source: "meat",
        to: "fuel"
    },
    {
        source: "fuel",
        to: "food"
    },
    {
        source: "food",
        to: "fuel"
    },
    {
        source: "fuel",
        to: "natural"
    },
    {
        source: "fuel",
        to: "energy"
    },
    {
        source: "sleep",
        to: "behaviour"
    },
    {
        source: "evil",
        to: "behaviour"
    },
    {
        source: "culture",
        to: "behaviour"
    },
    {
        source: "kingdom",
        to: "taxonomy"
    },
    {
        source: "taxonomy",
        to: "kingdom"
    },
    {
        source: "kingdom",
        to: "government"
    },
    {
        source: "kingdom",
        to: "uk"
    },
    {
        source: "fungi",
        to: "kingdom"
    },
    {
        source: "culture",
        to: "belief"
    },
    {
        source: "oil",
        to: "dinosaurs"
    },
    {
        source: "arcology",
        to: "ecology"
    },
    {
        source: "ecology",
        to: "biology"
    },
    {
        source: "nature",
        to: "ecology"
    },
    {
        source: "symbiosis",
        to: "ecology"
    },
    {
        source: "hard-science",
        to: "biology"
    },
    {
        source: "memory",
        to: "computers"
    },
    {
        source: "ancient-history",
        to: "middle-ages"
    },
    {
        source: "middle-ages",
        to: "renaissance"
    },
    {
        source: "middle-ages",
        to: "history"
    },
    {
        source: "medieval",
        to: "middle-ages"
    },
    {
        source: "reduce",
        to: "logic"
    },
    {
        source: "logistics",
        to: "control"
    },
    {
        source: "meteor",
        to: "lightning"
    },
    {
        source: "meteor",
        to: "asteroid"
    },
    {
        source: "meteor",
        to: "orbit"
    },
    {
        source: "meteor",
        to: "light"
    },
    {
        source: "santa-claus",
        to: "fictional"
    },
    {
        source: "global-warming",
        to: "heating"
    },
    {
        source: "global-warming",
        to: "temperature"
    },
    {
        source: "global-warming",
        to: "climate-change"
    },
    {
        source: "global-warming",
        to: "weather"
    },
    {
        source: "carbon-sequestration",
        to: "global-warming"
    },
    {
        source: "electricity-generation",
        to: "global-warming"
    },
    {
        source: "energy",
        to: "global-warming"
    },
    {
        source: "culture",
        to: "identity"
    },
    {
        source: "identity",
        to: "computing"
    },
    {
        source: "microgravity",
        to: "interstellar"
    },
    {
        source: "gases",
        to: "air"
    },
    {
        source: "air-pollution",
        to: "gases"
    },
    {
        source: "energy",
        to: "solar"
    },
    {
        source: "floating-island",
        to: "food"
    },
    {
        source: "cs",
        to: "police"
    },
    {
        source: "cs",
        to: "uk"
    },
    {
        source: "cs",
        to: "anatomy"
    },
    {
        source: "biosecurity",
        to: "protection"
    },
    {
        source: "toilet",
        to: "waste"
    },
    {
        source: "toilet",
        to: "uk"
    },
    {
        source: "erosion",
        to: "medicine"
    },
    {
        source: "evolution",
        to: "sports"
    },
    {
        source: "evolution",
        to: "life"
    },
    {
        source: "progress",
        to: "evolution"
    },
    {
        source: "evolution",
        to: "biology"
    },
    {
        source: "lightning",
        to: "clouds"
    },
    {
        source: "lightning",
        to: "light"
    },
    {
        source: "weather",
        to: "lightning"
    },
    {
        source: "energy",
        to: "lightning"
    },
    {
        source: "mermaid",
        to: "fictional"
    },
    {
        source: "photovoltaics",
        to: "sunlight"
    },
    {
        source: "sunlight",
        to: "light"
    },
    {
        source: "weather",
        to: "sunlight"
    },
    {
        source: "sunlight",
        to: "radiation"
    },
    {
        source: "sunlight",
        to: "energy"
    },
    {
        source: "reduce",
        to: "medicine"
    },
    {
        source: "sleep",
        to: "reduce"
    },
    {
        source: "control",
        to: "reduce"
    },
    {
        source: "reduce",
        to: "recycling"
    },
    {
        source: "seating",
        to: "housing"
    },
    {
        source: "anatomically-correct",
        to: "anatomy"
    },
    {
        source: "oil",
        to: "heating"
    },
    {
        source: "asteroids",
        to: "asteroid"
    },
    {
        source: "re-entry",
        to: "music"
    },
    {
        source: "hair",
        to: "mammals"
    },
    {
        source: "mammals",
        to: "hair"
    },
    {
        source: "carpet",
        to: "hair"
    },
    {
        source: "hair",
        to: "food"
    },
    {
        source: "clothing",
        to: "hair"
    },
    {
        source: "hair",
        to: "natural"
    },
    {
        source: "self-defense",
        to: "protection"
    },
    {
        source: "trade",
        to: "gardening"
    },
    {
        source: "concealment",
        to: "protection"
    },
    {
        source: "artificial-intelligence",
        to: "intelligence"
    },
    {
        source: "artificial-intelligence",
        to: "computing"
    },
    {
        source: "forestry",
        to: "trees"
    },
    {
        source: "trees",
        to: "evil"
    },
    {
        source: "nature",
        to: "trees"
    },
    {
        source: "glazing",
        to: "glass"
    },
    {
        source: "horror",
        to: "fear"
    },
    {
        source: "air-conditioning",
        to: "air"
    },
    {
        source: "air",
        to: "clouds"
    },
    {
        source: "clouds",
        to: "air"
    },
    {
        source: "air",
        to: "appearance"
    },
    {
        source: "air",
        to: "light"
    },
    {
        source: "weather",
        to: "air"
    },
    {
        source: "ventilation",
        to: "air"
    },
    {
        source: "flight",
        to: "air"
    },
    {
        source: "aircraft",
        to: "air"
    },
    {
        source: "insects",
        to: "air"
    },
    {
        source: "air",
        to: "music"
    },
    {
        source: "property",
        to: "housing"
    },
    {
        source: "appearance",
        to: "medical"
    },
    {
        source: "medical",
        to: "medicine"
    },
    {
        source: "history",
        to: "medical"
    },
    {
        source: "treatment",
        to: "medical"
    },
    {
        source: "medical",
        to: "uk"
    },
    {
        source: "launch",
        to: "boat"
    },
    {
        source: "boat",
        to: "fishing"
    },
    {
        source: "food",
        to: "boat"
    },
    {
        source: "boat",
        to: "navy"
    },
    {
        source: "boat",
        to: "vehicle"
    },
    {
        source: "boat",
        to: "navigation"
    },
    {
        source: "satellites",
        to: "orbit"
    },
    {
        source: "intelligence",
        to: "information"
    },
    {
        source: "intelligence",
        to: "brain"
    },
    {
        source: "brain",
        to: "intelligence"
    },
    {
        source: "intelligence",
        to: "mind"
    },
    {
        source: "mind",
        to: "intelligence"
    },
    {
        source: "mermaid",
        to: "merfolk"
    },
    {
        source: "merfolk",
        to: "mermaid"
    },
    {
        source: "family",
        to: "taxonomy"
    },
    {
        source: "taxonomy",
        to: "biology"
    },
    {
        source: "genetic-memory",
        to: "biology"
    },
    {
        source: "genetic-memory",
        to: "computing"
    },
    {
        source: "mind",
        to: "peace"
    },
    {
        source: "biomass",
        to: "energy"
    },
    {
        source: "hominid",
        to: "family"
    },
    {
        source: "family",
        to: "biology"
    },
    {
        source: "family",
        to: "genetics"
    },
    {
        source: "family",
        to: "music"
    },
    {
        source: "family",
        to: "children"
    },
    {
        source: "pigs",
        to: "mammals"
    },
    {
        source: "information",
        to: "training"
    },
    {
        source: "memory",
        to: "information"
    },
    {
        source: "ammunition",
        to: "information"
    },
    {
        source: "information",
        to: "computing"
    },
    {
        source: "information",
        to: "education"
    },
    {
        source: "information",
        to: "internet"
    },
    {
        source: "music",
        to: "information"
    },
    {
        source: "children",
        to: "names"
    },
    {
        source: "mythology",
        to: "history"
    },
    {
        source: "giant",
        to: "mythology"
    },
    {
        source: "bokashi",
        to: "waste"
    },
    {
        source: "bokashi",
        to: "food"
    },
    {
        source: "air-conditioning",
        to: "temperature"
    },
    {
        source: "air-conditioning",
        to: "cooling"
    },
    {
        source: "air-conditioning",
        to: "uk"
    },
    {
        source: "spaceplane",
        to: "aircraft"
    },
    {
        source: "space-debris",
        to: "orbit"
    },
    {
        source: "weather",
        to: "clouds"
    },
    {
        source: "escape",
        to: "manufacturing"
    },
    {
        source: "flight",
        to: "sports"
    },
    {
        source: "training",
        to: "computing"
    },
    {
        source: "training",
        to: "education"
    },
    {
        source: "education",
        to: "training"
    },
    {
        source: "property",
        to: "taxes"
    },
    {
        source: "slavery",
        to: "property"
    },
    {
        source: "property",
        to: "items"
    },
    {
        source: "property",
        to: "culture"
    },
    {
        source: "waste",
        to: "property"
    },
    {
        source: "property",
        to: "computing"
    },
    {
        source: "property",
        to: "money"
    },
    {
        source: "astrophysics",
        to: "radiation"
    },
    {
        source: "interface",
        to: "computing"
    },
    {
        source: "lander",
        to: "mining"
    },
    {
        source: "flight",
        to: "escape"
    },
    {
        source: "escape",
        to: "computing"
    },
    {
        source: "bacteria",
        to: "medicine"
    },
    {
        source: "bacteria",
        to: "kitchen"
    },
    {
        source: "bacteria",
        to: "culture"
    },
    {
        source: "law-enforcement",
        to: "government"
    },
    {
        source: "government",
        to: "evil"
    },
    {
        source: "government",
        to: "control"
    },
    {
        source: "police",
        to: "government"
    },
    {
        source: "navy",
        to: "government"
    },
    {
        source: "dictatorship",
        to: "government"
    },
    {
        source: "forestry",
        to: "biology"
    },
    {
        source: "fauna",
        to: "nature"
    },
    {
        source: "microgravity",
        to: "orbit"
    },
    {
        source: "orbit",
        to: "launch"
    },
    {
        source: "space-station",
        to: "orbit"
    },
    {
        source: "orbit",
        to: "anatomy"
    },
    {
        source: "humanoid",
        to: "appearance"
    },
    {
        source: "illusion",
        to: "appearance"
    },
    {
        source: "trade",
        to: "mining"
    },
    {
        source: "trade",
        to: "items"
    },
    {
        source: "trade",
        to: "uk"
    },
    {
        source: "trade",
        to: "money"
    },
    {
        source: "oil",
        to: "light"
    },
    {
        source: "light",
        to: "radiation"
    },
    {
        source: "light",
        to: "energy"
    },
    {
        source: "law-enforcement",
        to: "police"
    },
    {
        source: "cooling",
        to: "medicine"
    },
    {
        source: "nebula",
        to: "medicine"
    },
    {
        source: "ventilation",
        to: "medicine"
    },
    {
        source: "history",
        to: "medicine"
    },
    {
        source: "medicine",
        to: "treatment"
    },
    {
        source: "medicine",
        to: "music"
    },
    {
        source: "sleep",
        to: "hibernation"
    },
    {
        source: "sleep",
        to: "life"
    },
    {
        source: "sleep",
        to: "evil"
    },
    {
        source: "brain",
        to: "sleep"
    },
    {
        source: "sleep",
        to: "computing"
    },
    {
        source: "hibernation",
        to: "memory"
    },
    {
        source: "hibernation",
        to: "biology"
    },
    {
        source: "hibernation",
        to: "computing"
    },
    {
        source: "ancient-history",
        to: "history"
    },
    {
        source: "paleontology",
        to: "life"
    },
    {
        source: "life",
        to: "reproduction"
    },
    {
        source: "longevity",
        to: "life"
    },
    {
        source: "carbon-based",
        to: "life"
    },
    {
        source: "biology",
        to: "life"
    },
    {
        source: "life",
        to: "insurance"
    },
    {
        source: "life",
        to: "nature"
    },
    {
        source: "nature",
        to: "life"
    },
    {
        source: "life",
        to: "energy"
    },
    {
        source: "energy",
        to: "life"
    },
    {
        source: "urban",
        to: "life"
    },
    {
        source: "renaissance",
        to: "modern"
    },
    {
        source: "modern",
        to: "history"
    },
    {
        source: "internet",
        to: "modern"
    },
    {
        source: "cyberpunk",
        to: "music"
    },
    {
        source: "cyberpunk",
        to: "virtual-reality"
    },
    {
        source: "temperature",
        to: "weather"
    },
    {
        source: "weather",
        to: "temperature"
    },
    {
        source: "cooling",
        to: "temperature"
    },
    {
        source: "heat-pump",
        to: "temperature"
    },
    {
        source: "venus",
        to: "sex"
    },
    {
        source: "venus",
        to: "natural"
    },
    {
        source: "outer-solar-system",
        to: "jupiter"
    },
    {
        source: "launch",
        to: "computing"
    },
    {
        source: "strategy",
        to: "planning"
    },
    {
        source: "oil",
        to: "kitchen"
    },
    {
        source: "kitchen",
        to: "meat"
    },
    {
        source: "food",
        to: "kitchen"
    },
    {
        source: "kitchen",
        to: "music"
    },
    {
        source: "glass",
        to: "kitchen"
    },
    {
        source: "reproduction",
        to: "biology"
    },
    {
        source: "renaissance",
        to: "history"
    },
    {
        source: "renaissance",
        to: "medieval"
    },
    {
        source: "taxes",
        to: "money"
    },
    {
        source: "money",
        to: "taxes"
    },
    {
        source: "weather",
        to: "seasons"
    },
    {
        source: "weather",
        to: "natural"
    },
    {
        source: "weather",
        to: "navigation"
    },
    {
        source: "evil",
        to: "computing"
    },
    {
        source: "money",
        to: "evil"
    },
    {
        source: "cooling",
        to: "food"
    },
    {
        source: "memory",
        to: "brain"
    },
    {
        source: "mind",
        to: "memory"
    },
    {
        source: "memory",
        to: "computing"
    },
    {
        source: "oil",
        to: "mining"
    },
    {
        source: "oil",
        to: "food"
    },
    {
        source: "oil",
        to: "natural"
    },
    {
        source: "oil",
        to: "energy"
    },
    {
        source: "fertilizer",
        to: "natural"
    },
    {
        source: "control",
        to: "mind"
    },
    {
        source: "urban",
        to: "planning"
    },
    {
        source: "emergency",
        to: "police"
    },
    {
        source: "carpet",
        to: "uk"
    },
    {
        source: "money",
        to: "carpet"
    },
    {
        source: "brain",
        to: "mind"
    },
    {
        source: "mind",
        to: "brain"
    },
    {
        source: "food",
        to: "grocery"
    },
    {
        source: "wheels",
        to: "vehicle"
    },
    {
        source: "carbon-based",
        to: "biology"
    },
    {
        source: "mining",
        to: "computing"
    },
    {
        source: "wild-west",
        to: "western"
    },
    {
        source: "western",
        to: "music"
    },
    {
        source: "distance",
        to: "progress"
    },
    {
        source: "meat",
        to: "food"
    },
    {
        source: "food",
        to: "meat"
    },
    {
        source: "meat",
        to: "clothing"
    },
    {
        source: "history",
        to: "tracking"
    },
    {
        source: "history",
        to: "computing"
    },
    {
        source: "protection",
        to: "insurance"
    },
    {
        source: "insurance",
        to: "protection"
    },
    {
        source: "protection",
        to: "computing"
    },
    {
        source: "rocky",
        to: "sex"
    },
    {
        source: "flight",
        to: "aircraft"
    },
    {
        source: "sex",
        to: "children"
    },
    {
        source: "culture",
        to: "biology"
    },
    {
        source: "genetics",
        to: "biology"
    },
    {
        source: "biology",
        to: "nature"
    },
    {
        source: "symbiosis",
        to: "biology"
    },
    {
        source: "natural",
        to: "biology"
    },
    {
        source: "energy",
        to: "video-games"
    },
    {
        source: "energy",
        to: "batteries"
    },
    {
        source: "distance",
        to: "maps"
    },
    {
        source: "launch-vehicle",
        to: "vehicle"
    },
    {
        source: "fear",
        to: "monsters"
    },
    {
        source: "social-media",
        to: "internet"
    },
    {
        source: "culture",
        to: "cartography"
    },
    {
        source: "culture",
        to: "natural"
    },
    {
        source: "culture",
        to: "music"
    },
    {
        source: "mind",
        to: "waste"
    },
    {
        source: "pigs",
        to: "genetics"
    },
    {
        source: "clothing",
        to: "radiation"
    },
    {
        source: "radiation",
        to: "energy"
    },
    {
        source: "underground",
        to: "uk"
    },
    {
        source: "upcycling",
        to: "waste"
    },
    {
        source: "waste",
        to: "recycling"
    },
    {
        source: "natural",
        to: "uk"
    },
    {
        source: "glass",
        to: "uk"
    },
    {
        source: "giant",
        to: "computing"
    },
    {
        source: "augmented-reality",
        to: "computing"
    },
    {
        source: "internet",
        to: "computing"
    },
    {
        source: "nature",
        to: "natural"
    },
    {
        source: "supernatural",
        to: "nature"
    },
    {
        source: "nature",
        to: "flora"
    },
    {
        source: "energy",
        to: "nature"
    },
    {
        source: "permaculture",
        to: "natural"
    },
    {
        source: "energy",
        to: "distance"
    },
    {
        source: "navy",
        to: "aircraft"
    },
    {
        source: "navigation",
        to: "aircraft"
    },
    {
        source: "food",
        to: "energy"
    },
    {
        source: "energy",
        to: "food"
    },
    {
        source: "fungi",
        to: "music"
    },
    {
        source: "augmented-reality",
        to: "virtual-reality"
    },
    {
        source: "virtual-reality",
        to: "augmented-reality"
    },
    {
        source: "supernova",
        to: "invisibility"
    },
    {
        source: "iss",
        to: "education"
    },
    {
        source: "russia",
        to: "medieval"
    },
    {
        source: "natural",
        to: "music"
    },
    {
        source: "paranormal",
        to: "supernatural"
    },
    {
        source: "paranormal",
        to: "telepathy"
    },
    {
        source: "electronics",
        to: "energy"
    },
    {
        source: "hydroelectricity",
        to: "energy"
    },
    {
        source: "urban",
        to: "city-living"
    },
    {
        source: "glass",
        to: "vehicle"
    }
]
export default edges;