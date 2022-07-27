let periodic_categories = [
    {
        name: "Reactive Nonmetals",
        full_name: "Reactive Nonmetals",
        color: "rgb(140 237 140)",
        border_color: "#40916c",
    },
    {
        name: "Noble Gases",
        full_name: "Noble Gases",
        color: "hsl(300deg 43% 82%)",
        border_color: "rgb(141 74 151)",
    },
    {
        name: "Alkali",
        full_name: "Alkali Metals",
        color: "hsl(48deg 77% 64%)",
        border_color: "hsl(48deg 49% 30%)",
    },
    {
        name: "Alkaline",
        full_name: "Alkaline Earth Metals",
        color: "hsl(60deg 83% 67%)",
        border_color: "hsl(60deg 36% 32%)",
    },
    {
        name: "Transition",
        full_name: "Transition Metals",
        color: "hsl(12deg 87% 85%)",
        border_color: "hsl(12deg 28% 67%)",
    },
    {
        name: "Post-Transition",
        full_name: "Post-Transition Metals",
        color: "hsl(192deg, 62%, 80%)",
        border_color: "hsl(192deg 68% 24%)",
    },
    {
        name: "Metalloid",
        full_name: "Metalloids",
        color: "hsl(165deg, 58%, 76%)",
        border_color: "hsl(165deg 71% 30%)",
    },
    {
        name: "Unknown",
        full_name: "Unknown",
        color: "#eee",
        border_color: "#6a6a6a",
    },
    {
        name: "Lathanoid",
        full_name: "Lathanoids",
        color: "hsl(42deg, 62%, 76%)",
        border_color: "hsl(42deg 99% 29%)",
    },
    {
        name: "Actinoid",
        full_name: "Actinoids",
        color: "hsl(340deg, 67%, 88%)",
        border_color: "hsl(340deg 74% 52%)",
    }
]

let periodic_elements = [
    {
        atomic_number: 1,
        atomic_weight: 1.008,
        name: "Hydrogen",
        symbol: "H",
        category: "Reactive Nonmetals",
        appearance: "colorless gas",
        description: "<b>Hydrogen</b> is the chemical element with the symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element in the periodic table. Hydrogen is the most abundant chemical substance in the universe, constituting roughly 75% of all baryonic mass. Non-remnant stars are mainly composed of hydrogen in the plasma state. The most common isotope of hydrogen, termed protium (name rarely used, symbol 1H), has one proton and no neutrons.",
    },
    {
        atomic_number: 2,
        atomic_weight: 4.0026,
        name: "Helium",
        symbol: "He",
        category: "Noble Gases",
        appearance: "colorless gas",
        description: "<b>Helium</b> is a chemical element with the symbol <b>He</b> and atomic number 2. It is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas group in the periodic table. Its boiling point is the lowest among all the elements. Helium is the second lightest and second most abundant element in the observable universe (hydrogen is the lightest and most abundant). It is present at about 24% of the total elemental mass, which is more than 12 times the mass of all the heavier elements combined. Its abundance is similar to this in both the Sun and in Jupiter. This is due to the very high nuclear binding energy (per nucleon) of helium-4, with respect to the next three elements after helium. This helium-4 binding energy also accounts for why it is a product of both nuclear fusion and radioactive decay. Most helium in the universe is helium-4, the vast majority of which was formed during the Big Bang. Large amounts of new helium are being created by nuclear fusion of hydrogen in stars.",
    },
    {
        atomic_number: 3,
        atomic_weight: 6.94,
        name: "Lithium",
        symbol: "Li",
        category: "Alkali",
        appearance: "silvery-white",        
    },
    {
        atomic_number: 11,
        atomic_weight: 22.990,
        name: "Sodium",
        symbol: "Na",
        category: "Alkali",
        appearance: "silvery white metallic",
    },
    {
        atomic_number: 19,
        atomic_weight: 39.098,
        name: "Potassium",
        symbol: "K",
        category: "Alkali",
        appearance: "silvery gray",
    },
    {
        atomic_number: 37,
        atomic_weight: 85.468,
        name: "Rubidium",
        symbol: "Rb",
        category: "Alkali",
        appearance: "grey white",
    },
    {
        atomic_number: 55,
        atomic_weight: 132.91,
        name: "Caesium",
        symbol: "Cs",
        category: "Alkali",
        appearance: "pale gold",
    },
    {
        atomic_number: 87,
        atomic_weight: "(223)",
        name: "Francium",
        symbol: "Fr",
        category: "Alkali",
    },
    {
        atomic_number: 6,
        atomic_weight: 12.011,
        name: "Carbon",
        symbol: "C",
        category: "Reactive Nonmetals",
        appearance: "black, metallic-looking",
    },
    {
        atomic_number: 7,
        atomic_weight: 14.007,
        name: "Nitrogen",
        symbol: "N",
        category: "Reactive Nonmetals",
        appearance: "colorless gas",
    },
    {
        atomic_number: 8,
        atomic_weight: 15.999,
        name: "Oxygen",
        symbol: "O",
        category: "Reactive Nonmetals",
        appearance: "colorless gas (solid or liquid: pale blue)",
    },
    {
        atomic_number: 9,
        atomic_weight: 18.998,
        name: "Fluorine",
        symbol: "F",
        category: "Reactive Nonmetals",
        appearance: "gas: very pale yellow, liquid: bright yellow, solid: alpha is opaque, beta is transparent",
    },
    {
        atomic_number: 15,
        atomic_weight: 30.974,
        name: "Phosphorus",
        symbol: "P",
        category: "Reactive Nonmetals",
        appearance: "waxy white, yellow, red, violet, black metallic-looking",
    },
    {
        atomic_number: 16,
        atomic_weight: 32.06,
        name: "Sulfur",
        symbol: "S",
        category: "Reactive Nonmetals",
        appearance: "lemon yellow sintered microcrystals",
    },
    {
        atomic_number: 17,
        atomic_weight: 35.45,
        name: "Chlorine",
        symbol: "Cl",
        category: "Reactive Nonmetals",
        appearance: "pale yellow-green gas",
    },
    {
        atomic_number: 34,
        atomic_weight: 78.971,
        name: "Selenium",
        symbol: "Se",
        category: "Reactive Nonmetals",
        appearance: "grey metallic-looking, red, and vitreous black (not pictured) allotropes",
    },
    {
        atomic_number: 35,
        atomic_weight: 79.904,
        name: "Bromine",
        symbol: "Br",
        category: "Reactive Nonmetals",
        appearance: "reddish-brown",
    },
    {
        atomic_number: 53,
        atomic_weight: 126.90,
        name: "Iodine",
        symbol: "I",
        category: "Reactive Nonmetals",
        appearance: "lustrous metallic gray solid, black/violet liquid, violet gas",
    },
    {
        atomic_number: 10,
        atomic_weight: 20.180,
        name: "Neon",
        symbol: "Ne",
        category: "Noble Gases",
        appearance: "colorless gas exhibiting an orange-red glow when placed in an electric field",
    },
    {
        atomic_number: 18,
        atomic_weight: 39.948,
        name: "Argon",
        symbol: "Ar",
        category: "Noble Gases",
        appearance: "colorless gas exhibiting a lilac/violet glow when placed in an electric field",
    },
    {
        atomic_number: 36,
        atomic_weight: 83.798,
        name: "Krypton",
        symbol: "Kr",
        category: "Noble Gases",
        appearance: "colorless gas, exhibiting a whitish glow in an electric field",
    },
    {
        atomic_number: 54,
        atomic_weight: 131.29,
        name: "Xenon",
        symbol: "Xe",
        category: "Noble Gases",
        appearance: "colorless gas, exhibiting a blue glow when placed in an electric field",
    },
    {
        atomic_number: 86,
        atomic_weight: "(222)",
        name: "Radon",
        symbol: "Rn",
        category: "Noble Gases",
    },
    {
        atomic_number: 4,
        atomic_weight: 9.0122,
        name: "Beryllium",
        symbol: "Be",
        category: "Alkaline",
        appearance: "white-gray metallic",
    },
    {
        atomic_number: 12,
        atomic_weight: 24.305,
        name: "Magnesium",
        symbol: "Mg",
        category: "Alkaline",
        appearance: "shiny grey solid",
    },
    {
        atomic_number: 20,
        atomic_weight: 40.078,
        name: "Calcium",
        symbol: "Ca",
        category: "Alkaline",
        appearance: "dull gray, silver; with a pale yellow tint",
    },
    {
        atomic_number: 38,
        atomic_weight: 87.62,
        name: "Strontium",
        symbol: "Sr",
        category: "Alkaline",
        appearance: "silvery white metallic; with a pale yellow tint",
    },
    {
        atomic_number: 56,
        atomic_weight: 137.33,
        name: "Barium",
        symbol: "Ba",
        category: "Alkaline",
        appearance: "silvery gray; with a pale yellow tint",
    },
    {
        atomic_number: 88,
        atomic_weight: "(226)",
        name: "Radium",
        symbol: "Ra",
        category: "Alkaline",
        appearance: "silvery white metallic",
    },
    {
        atomic_number: 21,
        atomic_weight: 44.956,
        name: "Scandium",
        symbol: "Sc",
        category: "Transition",
    },
    {
        atomic_number: 22,
        atomic_weight: 47.867,
        name: "Titanium",
        symbol: "Ti",
        category: "Transition",
    },
    {
        atomic_number: 23,
        atomic_weight: 50.942,
        name: "Vanadium",
        symbol: "Va",
        category: "Transition",
    },
    {
        atomic_number: 24,
        atomic_weight: 51.996,
        name: "Chromium",
        symbol: "Cr",
        category: "Transition",
    },
    {
        atomic_number: 25,
        atomic_weight: 54.938,
        name: "Manganese",
        symbol: "Mn",
        category: "Transition",
    },
    {
        atomic_number: 26,
        atomic_weight: 55.845,
        name: "Iron",
        symbol: "Fe",
        category: "Transition",
    },
    {
        atomic_number: 27,
        atomic_weight: 58.933,
        name: "Cobalt",
        symbol: "Co",
        category: "Transition",
    },
    {
        atomic_number: 28,
        atomic_weight: 58.693,
        name: "Nickel",
        symbol: "Ni",
        category: "Transition",
    },
    {
        atomic_number: 29,
        atomic_weight: 63.546,
        name: "Copper",
        symbol: "Cu",
        category: "Transition",
    },
    {
        atomic_number: 30,
        atomic_weight: 65.38,
        name: "Zinc",
        symbol: "Zn",
        category: "Transition",
    },
    {
        atomic_number: 39,
        atomic_weight: 88.906,
        name: "Yttrium",
        symbol: "Y",
        category: "Transition",
    },
    {
        atomic_number: 40,
        atomic_weight: 91.224,
        name: "Zirconium",
        symbol: "Zr",
        category: "Transition",
    },
    {
        atomic_number: 41,
        atomic_weight: 92.906,
        name: "Niobium",
        symbol: "Nb",
        category: "Transition",
    },
    {
        atomic_number: 42,
        atomic_weight: 95.95,
        name: "Molybdenum",
        symbol: "Mo",
        category: "Transition",
    },
    {
        atomic_number: 43,
        atomic_weight: "(98)",
        name: "Technetium",
        symbol: "Tc",
        category: "Transition",
    },
    {
        atomic_number: 44,
        atomic_weight: 101.07,
        name: "Ruthenium",
        symbol: "Ru",
        category: "Transition",
    },
    {
        atomic_number: 45,
        atomic_weight: 102.91,
        name: "Rhodium",
        symbol: "Rh",
        category: "Transition",
    },
    {
        atomic_number: 46,
        atomic_weight: 106.42,
        name: "Palladium",
        symbol: "Pd",
        category: "Transition",
    },
    {
        atomic_number: 47,
        atomic_weight: 107.87,
        name: "Silver",
        symbol: "Ag",
        category: "Transition",
    },
    {
        atomic_number: 48,
        atomic_weight: 112.41,
        name: "Cadmium",
        symbol: "Cd",
        category: "Transition",
    },
    {
        atomic_number: 72,
        atomic_weight: 178.49,
        name: "Hafnium",
        symbol: "Hf",
        category: "Transition",
    },
    {
        atomic_number: 73,
        atomic_weight: 180.95,
        name: "Tantalum",
        symbol: "Ta",
        category: "Transition",
    },
    {
        atomic_number: 74,
        atomic_weight: 183.84,
        name: "Tungsten",
        symbol: "W",
        category: "Transition",
    },
    {
        atomic_number: 75,
        atomic_weight: 186.21,
        name: "Rhenium",
        symbol: "Re",
        category: "Transition",
    },
    {
        atomic_number: 76,
        atomic_weight: 190.23,
        name: "Osmium",
        symbol: "Os",
        category: "Transition",
    },
    {
        atomic_number: 77,
        atomic_weight: 192.22,
        name: "Iridium",
        symbol: "Ir",
        category: "Transition",
    },
    {
        atomic_number: 78,
        atomic_weight: 195.08,
        name: "Platinum",
        symbol: "Pt",
        category: "Transition",
    },
    {
        atomic_number: 79,
        atomic_weight: 196.97,
        name: "Gold",
        symbol: "Au",
        category: "Transition",
    },
    {
        atomic_number: 80,
        atomic_weight: 200.59,
        name: "Mercury",
        symbol: "Hg",
        category: "Transition",
    },
    {
        atomic_number: 104,
        atomic_weight: "(267)",
        name: "Rutherfordium",
        symbol: "Rf",
        category: "Transition",
    },
    {
        atomic_number: 105,
        atomic_weight: "(268)",
        name: "Dubnium",
        symbol: "Db",
        category: "Transition",
    },
    {
        atomic_number: 106,
        atomic_weight: "(269)",
        name: "Seaborgium",
        symbol: "Sg",
        category: "Transition",
    },
    {
        atomic_number: 107,
        atomic_weight: "(270)",
        name: "Bohrium",
        symbol: "Bh",
        category: "Transition",
    },
    {
        atomic_number: 108,
        atomic_weight: "(277)",
        name: "Hassium",
        symbol: "Hs",
        category: "Transition",
    },
    {
        atomic_number: 13,
        atomic_weight: 26.982,
        name: "Aluminium",
        symbol: "Al",
        category: "Post-Transition",
    },
    {
        atomic_number: 31,
        atomic_weight: 69.723,
        name: "Gallium",
        symbol: "Ga",
        category: "Post-Transition",
    },
    {
        atomic_number: 49,
        atomic_weight: 114.82,
        name: "Indium",
        symbol: "In",
        category: "Post-Transition",
    },
    {
        atomic_number: 50,
        atomic_weight: 118.71,
        name: "Tin",
        symbol: "Sn",
        category: "Post-Transition",
    },
    {
        atomic_number: 81,
        atomic_weight: 204.38,
        name: "Thallium",
        symbol: "Tl",
        category: "Post-Transition",
    },
    {
        atomic_number: 82,
        atomic_weight: 207.2,
        name: "Lead",
        symbol: "Pb",
        category: "Post-Transition",
    },
    {
        atomic_number: 83,
        atomic_weight: 208.98,
        name: "Bismuth",
        symbol: "Bi",
        category: "Post-Transition",
    },    
    {
        atomic_number: 84,
        atomic_weight: "(209)",
        name: "Polonium",
        symbol: "Po",
        category: "Post-Transition",
    },
    {
        atomic_number: 5,
        atomic_weight: 10.81,
        name: "Boron",
        symbol: "B",
        category: "Metalloid",
    },
    {
        atomic_number: 14,
        atomic_weight: 28.085,
        name: "Silicon",
        symbol: "Si",
        category: "Metalloid",
    },
    {
        atomic_number: 32,
        atomic_weight: 72.630,
        name: "Germanium",
        symbol: "Ge",
        category: "Metalloid",
    },
    {
        atomic_number: 33,
        atomic_weight: 74.922,
        name: "Arsenic",
        symbol: "As",
        category: "Metalloid",
    },
    {
        atomic_number: 51,
        atomic_weight: 121.76,
        name: "Antimony",
        symbol: "Sb",
        category: "Metalloid",
    },
    {
        atomic_number: 52,
        atomic_weight: 127.60,
        name: "Tellurium",
        symbol: "Te",
        category: "Metalloid",
    },
    {
        atomic_number: 85,
        atomic_weight: "(210)",
        name: "Astatine",
        symbol: "At",
        category: "Metalloid",
    },
    {
        atomic_number: 109,
        atomic_weight: "(278)",
        name: "Meitnerium",
        symbol: "Mt",
        category: "Unknown",
    },
    {
        atomic_number: 110,
        atomic_weight: "(281)",
        name: "Darmstadtium",
        symbol: "Ds",
        category: "Unknown",
    },
    {
        atomic_number: 111,
        atomic_weight: "(282)",
        name: "Roentgenium",
        symbol: "Rg",
        category: "Unknown",
    },
    {
        atomic_number: 112,
        atomic_weight: "(285)",
        name: "Copernicium",
        symbol: "Cn",
        category: "Unknown",
    },
    {
        atomic_number: 113,
        atomic_weight: "(286)",
        name: "Nihonium",
        symbol: "Nh",
        category: "Unknown",
    },
    {
        atomic_number: 114,
        atomic_weight: "(289)",
        name: "Flerovium",
        symbol: "Fl",
        category: "Unknown",
    },
    {
        atomic_number: 115,
        atomic_weight: "(290)",
        name: "Moscovium",
        symbol: "Mc",
        category: "Unknown",
    },
    {
        atomic_number: 116,
        atomic_weight: "(293)",
        name: "Livermorium",
        symbol: "Lv",
        category: "Unknown",
    },
    {
        atomic_number: 117,
        atomic_weight: "(294)",
        name: "Tennessine",
        symbol: "Ts",
        category: "Unknown",
    },
    {
        atomic_number: 118,
        atomic_weight: "(294)",
        name: "Oganesson",
        symbol: "Og",
        category: "Unknown",
    },
    {
        atomic_number: 57,
        atomic_weight: 138.91,
        name: "Lanthanum",
        symbol: "La",
        category: "Lathanoid",
    },
    {
        atomic_number: 58,
        atomic_weight: 140.12,
        name: "Cerium",
        symbol: "Ce",
        category: "Lathanoid",
    },
    {
        atomic_number: 59,
        atomic_weight: 140.91,
        name: "Praseodymium",
        symbol: "Pr",
        category: "Lathanoid",
    },
    {
        atomic_number: 60,
        atomic_weight: 144.24,
        name: "Neodymium",
        symbol: "Nd",
        category: "Lathanoid",
    },
    {
        atomic_number: 61,
        atomic_weight: "(145)",
        name: "Promethium",
        symbol: "Pm",
        category: "Lathanoid",
    },
    {
        atomic_number: 62,
        atomic_weight: 150.36,
        name: "Samarium",
        symbol: "Sm",
        category: "Lathanoid",
    },
    {
        atomic_number: 63,
        atomic_weight: 151.96,
        name: "Europium",
        symbol: "Eu",
        category: "Lathanoid",
    },
    {
        atomic_number: 64,
        atomic_weight: 157.25,
        name: "Gadolinium",
        symbol: "Gd",
        category: "Lathanoid",
    },
    {
        atomic_number: 65,
        atomic_weight: 158.93,
        name: "Terbium",
        symbol: "Tb",
        category: "Lathanoid",
    },
    {
        atomic_number: 66,
        atomic_weight: 162.50,
        name: "Dysprosium",
        symbol: "Dy",
        category: "Lathanoid",
    },
    {
        atomic_number: 67,
        atomic_weight: 164.93,
        name: "Holmium",
        symbol: "Ho",
        category: "Lathanoid",
    },
    {
        atomic_number: 68,
        atomic_weight: 167.26,
        name: "Erbium",
        symbol: "Er",
        category: "Lathanoid",
    },
    {
        atomic_number: 69,
        atomic_weight: 168.93,
        name: "Thulium",
        symbol: "Tm",
        category: "Lathanoid",
    },
    {
        atomic_number: 70,
        atomic_weight: 173.05,
        name: "Ytterbium",
        symbol: "Yb",
        category: "Lathanoid",
    },
    {
        atomic_number: 71,
        atomic_weight: 174.97,
        name: "Lutetium",
        symbol: "Lu",
        category: "Lathanoid",
    },
    {
        atomic_number: 89,
        atomic_weight: "(227)",
        name: "Actinium",
        symbol: "Ac",
        category: "Actinoid",
    },
    {
        atomic_number: 90,
        atomic_weight: 232.04,
        name: "Thorium",
        symbol: "Th",
        category: "Actinoid",
    },
    {
        atomic_number: 91,
        atomic_weight: 231.04,
        name: "Protactinium",
        symbol: "Pa",
        category: "Actinoid",
    },
    {
        atomic_number: 92,
        atomic_weight: 238.03,
        name: "Uranium",
        symbol: "U",
        category: "Actinoid",
    },
    {
        atomic_number: 93,
        atomic_weight: "(237)",
        name: "Neptunium",
        symbol: "Np",
        category: "Actinoid",
    },
    {
        atomic_number: 94,
        atomic_weight: "(244)",
        name: "Plutonium",
        symbol: "Pu",
        category: "Actinoid",
    },
    {
        atomic_number: 95,
        atomic_weight: "(243)",
        name: "Americium",
        symbol: "Am",
        category: "Actinoid",
    },
    {
        atomic_number: 96,
        atomic_weight: "(247)",
        name: "Curium",
        symbol: "Cm",
        category: "Actinoid",
    },
    {
        atomic_number: 98,
        atomic_weight: "(251)",
        name: "Californium",
        symbol: "Cf",
        category: "Actinoid",
    },
    {
        atomic_number: 97,
        atomic_weight: "(247)",
        name: "Berkelium",
        symbol: "Bk",
        category: "Actinoid",
    },
    {
        atomic_number: 99,
        atomic_weight: "(252)",
        name: "Einsteinium",
        symbol: "Es",
        category: "Actinoid",
    },
    {
        atomic_number: 100,
        atomic_weight: "(257)",
        name: "Fermium",
        symbol: "Fm",
        category: "Actinoid",
    },
    {
        atomic_number: 101,
        atomic_weight: "(258)",
        name: "Mendelevium",
        symbol: "Md",
        category: "Actinoid",
    },
    {
        atomic_number: 102,
        atomic_weight: "(259)",
        name: "Nobellium",
        symbol: "No",
        category: "Actinoid",
    },
    {
        atomic_number: 103,
        atomic_weight: "(266)",
        name: "Lawrencium",
        symbol: "Lr",
        category: "Actinoid",
    },
]

function getElementByAtomicNumber(atomic_number) {
    return periodic_elements.find(element => {
        return element.atomic_number == atomic_number;
    });
}

function getPeriodicCategory(category) {
    return periodic_categories.find(c => {
        return c.name == category;
    });
}

function elementClick(event) {
    let atomic_number = Number(event.target.getAttribute("element"));
    let element = getElementByAtomicNumber(atomic_number);
    let category = getPeriodicCategory(element.category);
    
    let display_atomic_number = document.querySelector(".propiedades__elemento__top-container__atomic-number");
    display_atomic_number.innerText = element.atomic_number;
    let display_atomic_weight = document.querySelector(".propiedades__elemento__top-container__atomic-weight");
    display_atomic_weight.innerText = element.atomic_weight;
    let display_atomic_symbol = document.querySelector(".propiedades__elemento__symbol");
    display_atomic_symbol.innerText = element.symbol;
    let display_atomic_name = document.querySelector(".propiedades__elemento__name");
    display_atomic_name.innerText = element.name;
    let propiedades_category = document.querySelector("#propiedades__card__series")
    propiedades_category.innerText = category.full_name;
    let propiedades_appearance = document.querySelector("#propiedades__card__link")
    propiedades_appearance.innerText = element.appearance;
    let propiedades_description = document.querySelector("#propiedades__card__description")
    propiedades_description.innerHTML = element.description;

    let display = document.querySelector(".propiedades__elemento");
    display.style.backgroundColor = category.color;
    display.style.border = `1px ${category.border_color} solid`;
}

function populate_table() {
    periodic_elements.forEach((element) => {
        let category = getPeriodicCategory(element.category);
        let field = document.querySelector("#tabla-periodica-" + element.atomic_number);
        field.style.backgroundColor = category.color;
        field.innerHTML = `<div class=\"tabla-periodica__elemento__atomic_number\" element=\"${element.atomic_number}\">${element.atomic_number}</div>`;
        field.innerHTML += `<div class=\"tabla-periodica__elemento__symbol\" element=\"${element.atomic_number}\">${element.symbol}</div>`;
        field.setAttribute("element", element.atomic_number);
        field.addEventListener("click", elementClick)
    })
}

populate_table();