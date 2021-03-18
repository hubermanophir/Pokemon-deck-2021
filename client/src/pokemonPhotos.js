const photoArr = [
  {
    name: "bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    name: "ivysaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    name: "venusaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  },
  {
    name: "charmander",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    name: "charmeleon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
  },
  {
    name: "charizard",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  },
  {
    name: "squirtle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },
  {
    name: "wartortle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
  },
  {
    name: "blastoise",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
  },
  {
    name: "caterpie",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
  },
  {
    name: "metapod",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
  },
  {
    name: "butterfree",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
  },
  {
    name: "weedle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
  },
  {
    name: "kakuna",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
  },
  {
    name: "beedrill",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
  },
  {
    name: "pidgey",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
  },
  {
    name: "pidgeotto",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
  },
  {
    name: "pidgeot",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
  },
  {
    name: "rattata",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
  },
  {
    name: "raticate",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
  },
  {
    name: "spearow",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
  },
  {
    name: "fearow",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
  },
  {
    name: "ekans",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
  },
  {
    name: "arbok",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
  },
  {
    name: "pikachu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  },
  {
    name: "raichu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
  },
  {
    name: "sandshrew",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
  },
  {
    name: "sandslash",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
  },
  {
    name: "nidoran-f",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
  },
  {
    name: "nidorina",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
  },
  {
    name: "nidoqueen",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
  },
  {
    name: "nidoran-m",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
  },
  {
    name: "nidorino",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
  },
  {
    name: "nidoking",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
  },
  {
    name: "clefairy",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
  },
  {
    name: "clefable",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
  },
  {
    name: "vulpix",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
  },
  {
    name: "ninetales",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
  },
  {
    name: "jigglypuff",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
  },
  {
    name: "wigglytuff",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
  },
  {
    name: "zubat",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
  },
  {
    name: "golbat",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
  },
  {
    name: "oddish",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
  },
  {
    name: "gloom",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
  },
  {
    name: "vileplume",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
  },
  {
    name: "paras",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
  },
  {
    name: "parasect",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
  },
  {
    name: "venonat",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
  },
  {
    name: "venomoth",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
  },
  {
    name: "diglett",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
  },
  {
    name: "dugtrio",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
  },
  {
    name: "meowth",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
  },
  {
    name: "persian",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
  },
  {
    name: "psyduck",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
  },
  {
    name: "golduck",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
  },
  {
    name: "mankey",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
  },
  {
    name: "primeape",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
  },
  {
    name: "growlithe",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
  },
  {
    name: "arcanine",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
  },
  {
    name: "poliwag",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
  },
  {
    name: "poliwhirl",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
  },
  {
    name: "poliwrath",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
  },
  {
    name: "abra",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
  },
  {
    name: "kadabra",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
  },
  {
    name: "alakazam",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
  },
  {
    name: "machop",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
  },
  {
    name: "machoke",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
  },
  {
    name: "machamp",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
  },
  {
    name: "bellsprout",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
  },
  {
    name: "weepinbell",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
  },
  {
    name: "victreebel",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
  },
  {
    name: "tentacool",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
  },
  {
    name: "tentacruel",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
  },
  {
    name: "geodude",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
  },
  {
    name: "graveler",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
  },
  {
    name: "golem",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
  },
  {
    name: "ponyta",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
  },
  {
    name: "rapidash",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
  },
  {
    name: "slowpoke",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
  },
  {
    name: "slowbro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
  },
  {
    name: "magnemite",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
  },
  {
    name: "magneton",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
  },
  {
    name: "farfetchd",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
  },
  {
    name: "doduo",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
  },
  {
    name: "dodrio",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
  },
  {
    name: "seel",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
  },
  {
    name: "dewgong",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
  },
  {
    name: "grimer",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
  },
  {
    name: "muk",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
  },
  {
    name: "shellder",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
  },
  {
    name: "cloyster",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
  },
  {
    name: "gastly",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
  },
  {
    name: "haunter",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
  },
  {
    name: "gengar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
  },
  {
    name: "onix",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
  },
  {
    name: "drowzee",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
  },
  {
    name: "hypno",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
  },
  {
    name: "krabby",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
  },
  {
    name: "kingler",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
  },
  {
    name: "voltorb",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
  },
  {
    name: "electrode",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
  },
  {
    name: "exeggcute",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
  },
  {
    name: "exeggutor",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
  },
  {
    name: "cubone",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
  },
  {
    name: "marowak",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
  },
  {
    name: "hitmonlee",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
  },
  {
    name: "hitmonchan",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
  },
  {
    name: "lickitung",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
  },
  {
    name: "koffing",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
  },
  {
    name: "weezing",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
  },
  {
    name: "rhyhorn",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
  },
  {
    name: "rhydon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
  },
  {
    name: "chansey",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
  },
  {
    name: "tangela",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
  },
  {
    name: "kangaskhan",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
  },
  {
    name: "horsea",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
  },
  {
    name: "seadra",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
  },
  {
    name: "goldeen",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
  },
  {
    name: "seaking",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
  },
  {
    name: "staryu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
  },
  {
    name: "starmie",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
  },
  {
    name: "mr-mime",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
  },
  {
    name: "scyther",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
  },
  {
    name: "jynx",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
  },
  {
    name: "electabuzz",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
  },
  {
    name: "magmar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
  },
  {
    name: "pinsir",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
  },
  {
    name: "tauros",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
  },
  {
    name: "magikarp",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
  },
  {
    name: "gyarados",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
  },
  {
    name: "lapras",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
  },
  {
    name: "ditto",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
  },
  {
    name: "eevee",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
  },
  {
    name: "vaporeon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
  },
  {
    name: "jolteon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
  },
  {
    name: "flareon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
  },
  {
    name: "porygon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
  },
  {
    name: "omanyte",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
  },
  {
    name: "omastar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
  },
  {
    name: "kabuto",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
  },
  {
    name: "kabutops",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
  },
  {
    name: "aerodactyl",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
  },
  {
    name: "snorlax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
  },
  {
    name: "articuno",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
  },
  {
    name: "zapdos",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
  },
  {
    name: "moltres",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
  },
  {
    name: "dratini",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
  },
  {
    name: "dragonair",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
  },
  {
    name: "dragonite",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
  },
  {
    name: "mewtwo",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
  },
  {
    name: "mew",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
  },
  {
    name: "chikorita",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png",
  },
  {
    name: "bayleef",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png",
  },
  {
    name: "meganium",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png",
  },
  {
    name: "cyndaquil",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png",
  },
  {
    name: "quilava",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png",
  },
  {
    name: "typhlosion",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png",
  },
  {
    name: "totodile",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png",
  },
  {
    name: "croconaw",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png",
  },
  {
    name: "feraligatr",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png",
  },
  {
    name: "sentret",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/161.png",
  },
  {
    name: "furret",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png",
  },
  {
    name: "hoothoot",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png",
  },
  {
    name: "noctowl",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png",
  },
  {
    name: "ledyba",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/165.png",
  },
  {
    name: "ledian",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png",
  },
  {
    name: "spinarak",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png",
  },
  {
    name: "ariados",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png",
  },
  {
    name: "crobat",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png",
  },
  {
    name: "chinchou",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png",
  },
  {
    name: "lanturn",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png",
  },
  {
    name: "pichu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png",
  },
  {
    name: "cleffa",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png",
  },
  {
    name: "igglybuff",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png",
  },
  {
    name: "togepi",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png",
  },
  {
    name: "togetic",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png",
  },
  {
    name: "natu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/177.png",
  },
  {
    name: "xatu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/178.png",
  },
  {
    name: "mareep",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/179.png",
  },
  {
    name: "flaaffy",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/180.png",
  },
  {
    name: "ampharos",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png",
  },
  {
    name: "bellossom",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png",
  },
  {
    name: "marill",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png",
  },
  {
    name: "azumarill",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png",
  },
  {
    name: "sudowoodo",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png",
  },
  {
    name: "politoed",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png",
  },
  {
    name: "hoppip",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png",
  },
  {
    name: "skiploom",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/188.png",
  },
  {
    name: "jumpluff",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png",
  },
  {
    name: "aipom",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png",
  },
  {
    name: "sunkern",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/191.png",
  },
  {
    name: "sunflora",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png",
  },
  {
    name: "yanma",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png",
  },
  {
    name: "wooper",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png",
  },
  {
    name: "quagsire",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png",
  },
  {
    name: "espeon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png",
  },
  {
    name: "umbreon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png",
  },
  {
    name: "murkrow",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png",
  },
  {
    name: "slowking",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png",
  },
  {
    name: "misdreavus",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png",
  },
  {
    name: "unown",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png",
  },
  {
    name: "wobbuffet",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png",
  },
  {
    name: "girafarig",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png",
  },
  {
    name: "pineco",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png",
  },
  {
    name: "forretress",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png",
  },
  {
    name: "dunsparce",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png",
  },
  {
    name: "gligar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png",
  },
  {
    name: "steelix",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png",
  },
  {
    name: "snubbull",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png",
  },
  {
    name: "granbull",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png",
  },
  {
    name: "qwilfish",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png",
  },
  {
    name: "scizor",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png",
  },
  {
    name: "shuckle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png",
  },
  {
    name: "heracross",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png",
  },
  {
    name: "sneasel",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png",
  },
  {
    name: "teddiursa",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png",
  },
  {
    name: "ursaring",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png",
  },
  {
    name: "slugma",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png",
  },
  {
    name: "magcargo",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png",
  },
  {
    name: "swinub",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png",
  },
  {
    name: "piloswine",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png",
  },
  {
    name: "corsola",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png",
  },
  {
    name: "remoraid",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png",
  },
  {
    name: "octillery",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png",
  },
  {
    name: "delibird",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png",
  },
  {
    name: "mantine",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png",
  },
  {
    name: "skarmory",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png",
  },
  {
    name: "houndour",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png",
  },
  {
    name: "houndoom",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png",
  },
  {
    name: "kingdra",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png",
  },
  {
    name: "phanpy",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png",
  },
  {
    name: "donphan",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png",
  },
  {
    name: "porygon2",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png",
  },
  {
    name: "stantler",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/234.png",
  },
  {
    name: "smeargle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png",
  },
  {
    name: "tyrogue",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png",
  },
  {
    name: "hitmontop",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/237.png",
  },
  {
    name: "smoochum",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/238.png",
  },
  {
    name: "elekid",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png",
  },
  {
    name: "magby",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png",
  },
  {
    name: "miltank",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png",
  },
  {
    name: "blissey",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png",
  },
  {
    name: "raikou",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png",
  },
  {
    name: "entei",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png",
  },
  {
    name: "suicune",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png",
  },
  {
    name: "larvitar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png",
  },
  {
    name: "pupitar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png",
  },
  {
    name: "tyranitar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png",
  },
  {
    name: "lugia",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png",
  },
  {
    name: "ho-oh",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png",
  },
  {
    name: "celebi",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png",
  },
  {
    name: "treecko",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png",
  },
  {
    name: "grovyle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png",
  },
  {
    name: "sceptile",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png",
  },
  {
    name: "torchic",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png",
  },
  {
    name: "combusken",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/256.png",
  },
  {
    name: "blaziken",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png",
  },
  {
    name: "mudkip",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png",
  },
  {
    name: "marshtomp",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png",
  },
  {
    name: "swampert",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",
  },
  {
    name: "poochyena",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/261.png",
  },
  {
    name: "mightyena",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png",
  },
  {
    name: "zigzagoon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/263.png",
  },
  {
    name: "linoone",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/264.png",
  },
  {
    name: "wurmple",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/265.png",
  },
  {
    name: "silcoon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/266.png",
  },
  {
    name: "beautifly",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/267.png",
  },
  {
    name: "cascoon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/268.png",
  },
  {
    name: "dustox",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/269.png",
  },
  {
    name: "lotad",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/270.png",
  },
  {
    name: "lombre",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/271.png",
  },
  {
    name: "ludicolo",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png",
  },
  {
    name: "seedot",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/273.png",
  },
  {
    name: "nuzleaf",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/274.png",
  },
  {
    name: "shiftry",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/275.png",
  },
  {
    name: "taillow",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/276.png",
  },
  {
    name: "swellow",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/277.png",
  },
  {
    name: "wingull",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/278.png",
  },
  {
    name: "pelipper",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png",
  },
  {
    name: "ralts",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/280.png",
  },
  {
    name: "kirlia",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/281.png",
  },
  {
    name: "gardevoir",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png",
  },
  {
    name: "surskit",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/283.png",
  },
  {
    name: "masquerain",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/284.png",
  },
  {
    name: "shroomish",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png",
  },
  {
    name: "breloom",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png",
  },
  {
    name: "slakoth",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png",
  },
  {
    name: "vigoroth",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/288.png",
  },
  {
    name: "slaking",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png",
  },
  {
    name: "nincada",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/290.png",
  },
  {
    name: "ninjask",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/291.png",
  },
  {
    name: "shedinja",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/292.png",
  },
  {
    name: "whismur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/293.png",
  },
  {
    name: "loudred",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/294.png",
  },
  {
    name: "exploud",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/295.png",
  },
  {
    name: "makuhita",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png",
  },
  {
    name: "hariyama",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/297.png",
  },
  {
    name: "azurill",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/298.png",
  },
  {
    name: "nosepass",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/299.png",
  },
  {
    name: "skitty",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/300.png",
  },
  {
    name: "delcatty",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png",
  },
  {
    name: "sableye",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png",
  },
  {
    name: "mawile",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/303.png",
  },
  {
    name: "aron",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/304.png",
  },
  {
    name: "lairon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/305.png",
  },
  {
    name: "aggron",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png",
  },
  {
    name: "meditite",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/307.png",
  },
  {
    name: "medicham",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png",
  },
  {
    name: "electrike",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/309.png",
  },
  {
    name: "manectric",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png",
  },
  {
    name: "plusle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/311.png",
  },
  {
    name: "minun",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/312.png",
  },
  {
    name: "volbeat",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/313.png",
  },
  {
    name: "illumise",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/314.png",
  },
  {
    name: "roselia",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/315.png",
  },
  {
    name: "gulpin",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/316.png",
  },
  {
    name: "swalot",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/317.png",
  },
  {
    name: "carvanha",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/318.png",
  },
  {
    name: "sharpedo",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png",
  },
  {
    name: "wailmer",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png",
  },
  {
    name: "wailord",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png",
  },
  {
    name: "numel",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/322.png",
  },
  {
    name: "camerupt",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png",
  },
  {
    name: "torkoal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png",
  },
  {
    name: "spoink",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/325.png",
  },
  {
    name: "grumpig",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/326.png",
  },
  {
    name: "spinda",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/327.png",
  },
  {
    name: "trapinch",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/328.png",
  },
  {
    name: "vibrava",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/329.png",
  },
  {
    name: "flygon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png",
  },
  {
    name: "cacnea",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/331.png",
  },
  {
    name: "cacturne",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/332.png",
  },
  {
    name: "swablu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png",
  },
  {
    name: "altaria",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png",
  },
  {
    name: "zangoose",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/335.png",
  },
  {
    name: "seviper",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/336.png",
  },
  {
    name: "lunatone",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/337.png",
  },
  {
    name: "solrock",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/338.png",
  },
  {
    name: "barboach",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/339.png",
  },
  {
    name: "whiscash",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/340.png",
  },
  {
    name: "corphish",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/341.png",
  },
  {
    name: "crawdaunt",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png",
  },
  {
    name: "baltoy",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/343.png",
  },
  {
    name: "claydol",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/344.png",
  },
  {
    name: "lileep",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/345.png",
  },
  {
    name: "cradily",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/346.png",
  },
  {
    name: "anorith",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png",
  },
  {
    name: "armaldo",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png",
  },
  {
    name: "feebas",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/349.png",
  },
  {
    name: "milotic",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png",
  },
  {
    name: "castform",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/351.png",
  },
  {
    name: "kecleon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/352.png",
  },
  {
    name: "shuppet",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/353.png",
  },
  {
    name: "banette",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png",
  },
  {
    name: "duskull",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/355.png",
  },
  {
    name: "dusclops",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/356.png",
  },
  {
    name: "tropius",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/357.png",
  },
  {
    name: "chimecho",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/358.png",
  },
  {
    name: "absol",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png",
  },
  {
    name: "wynaut",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/360.png",
  },
  {
    name: "snorunt",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/361.png",
  },
  {
    name: "glalie",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/362.png",
  },
  {
    name: "spheal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/363.png",
  },
  {
    name: "sealeo",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/364.png",
  },
  {
    name: "walrein",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/365.png",
  },
  {
    name: "clamperl",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/366.png",
  },
  {
    name: "huntail",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/367.png",
  },
  {
    name: "gorebyss",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/368.png",
  },
  {
    name: "relicanth",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/369.png",
  },
  {
    name: "luvdisc",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/370.png",
  },
  {
    name: "bagon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/371.png",
  },
  {
    name: "shelgon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/372.png",
  },
  {
    name: "salamence",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",
  },
  {
    name: "beldum",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/374.png",
  },
  {
    name: "metang",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/375.png",
  },
  {
    name: "metagross",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png",
  },
  {
    name: "regirock",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/377.png",
  },
  {
    name: "regice",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/378.png",
  },
  {
    name: "registeel",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/379.png",
  },
  {
    name: "latias",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png",
  },
  {
    name: "latios",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png",
  },
  {
    name: "kyogre",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png",
  },
  {
    name: "groudon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png",
  },
  {
    name: "rayquaza",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png",
  },
  {
    name: "jirachi",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/385.png",
  },
  {
    name: "deoxys-normal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/386.png",
  },
  {
    name: "turtwig",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png",
  },
  {
    name: "grotle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png",
  },
  {
    name: "torterra",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png",
  },
  {
    name: "chimchar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png",
  },
  {
    name: "monferno",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/391.png",
  },
  {
    name: "infernape",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png",
  },
  {
    name: "piplup",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png",
  },
  {
    name: "prinplup",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/394.png",
  },
  {
    name: "empoleon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png",
  },
  {
    name: "starly",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/396.png",
  },
  {
    name: "staravia",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/397.png",
  },
  {
    name: "staraptor",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png",
  },
  {
    name: "bidoof",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/399.png",
  },
  {
    name: "bibarel",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/400.png",
  },
  {
    name: "kricketot",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/401.png",
  },
  {
    name: "kricketune",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/402.png",
  },
  {
    name: "shinx",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png",
  },
  {
    name: "luxio",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/404.png",
  },
  {
    name: "luxray",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png",
  },
  {
    name: "budew",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/406.png",
  },
  {
    name: "roserade",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png",
  },
  {
    name: "cranidos",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/408.png",
  },
  {
    name: "rampardos",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/409.png",
  },
  {
    name: "shieldon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/410.png",
  },
  {
    name: "bastiodon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/411.png",
  },
  {
    name: "burmy",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412.png",
  },
  {
    name: "wormadam-plant",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png",
  },
  {
    name: "mothim",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/414.png",
  },
  {
    name: "combee",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/415.png",
  },
  {
    name: "vespiquen",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/416.png",
  },
  {
    name: "pachirisu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/417.png",
  },
  {
    name: "buizel",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/418.png",
  },
  {
    name: "floatzel",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/419.png",
  },
  {
    name: "cherubi",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/420.png",
  },
  {
    name: "cherrim",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/421.png",
  },
  {
    name: "shellos",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/422.png",
  },
  {
    name: "gastrodon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/423.png",
  },
  {
    name: "ambipom",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/424.png",
  },
  {
    name: "drifloon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/425.png",
  },
  {
    name: "drifblim",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/426.png",
  },
  {
    name: "buneary",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/427.png",
  },
  {
    name: "lopunny",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/428.png",
  },
  {
    name: "mismagius",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/429.png",
  },
  {
    name: "honchkrow",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/430.png",
  },
  {
    name: "glameow",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/431.png",
  },
  {
    name: "purugly",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/432.png",
  },
  {
    name: "chingling",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/433.png",
  },
  {
    name: "stunky",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/434.png",
  },
  {
    name: "skuntank",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/435.png",
  },
  {
    name: "bronzor",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/436.png",
  },
  {
    name: "bronzong",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/437.png",
  },
  {
    name: "bonsly",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/438.png",
  },
  {
    name: "mime-jr",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/439.png",
  },
  {
    name: "happiny",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/440.png",
  },
  {
    name: "chatot",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/441.png",
  },
  {
    name: "spiritomb",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/442.png",
  },
  {
    name: "gible",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/443.png",
  },
  {
    name: "gabite",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/444.png",
  },
  {
    name: "garchomp",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png",
  },
  {
    name: "munchlax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/446.png",
  },
  {
    name: "riolu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png",
  },
  {
    name: "lucario",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png",
  },
  {
    name: "hippopotas",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/449.png",
  },
  {
    name: "hippowdon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/450.png",
  },
  {
    name: "skorupi",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/451.png",
  },
  {
    name: "drapion",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/452.png",
  },
  {
    name: "croagunk",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/453.png",
  },
  {
    name: "toxicroak",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/454.png",
  },
  {
    name: "carnivine",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/455.png",
  },
  {
    name: "finneon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/456.png",
  },
  {
    name: "lumineon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/457.png",
  },
  {
    name: "mantyke",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/458.png",
  },
  {
    name: "snover",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/459.png",
  },
  {
    name: "abomasnow",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png",
  },
  {
    name: "weavile",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/461.png",
  },
  {
    name: "magnezone",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png",
  },
  {
    name: "lickilicky",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/463.png",
  },
  {
    name: "rhyperior",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png",
  },
  {
    name: "tangrowth",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/465.png",
  },
  {
    name: "electivire",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png",
  },
  {
    name: "magmortar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png",
  },
  {
    name: "togekiss",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png",
  },
  {
    name: "yanmega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/469.png",
  },
  {
    name: "leafeon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png",
  },
  {
    name: "glaceon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png",
  },
  {
    name: "gliscor",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png",
  },
  {
    name: "mamoswine",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png",
  },
  {
    name: "porygon-z",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png",
  },
  {
    name: "gallade",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png",
  },
  {
    name: "probopass",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/476.png",
  },
  {
    name: "dusknoir",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/477.png",
  },
  {
    name: "froslass",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/478.png",
  },
  {
    name: "rotom",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png",
  },
  {
    name: "uxie",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/480.png",
  },
  {
    name: "mesprit",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/481.png",
  },
  {
    name: "azelf",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/482.png",
  },
  {
    name: "dialga",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png",
  },
  {
    name: "palkia",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png",
  },
  {
    name: "heatran",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png",
  },
  {
    name: "regigigas",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/486.png",
  },
  {
    name: "giratina-altered",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png",
  },
  {
    name: "cresselia",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/488.png",
  },
  {
    name: "phione",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/489.png",
  },
  {
    name: "manaphy",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/490.png",
  },
  {
    name: "darkrai",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png",
  },
  {
    name: "shaymin-land",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/492.png",
  },
  {
    name: "arceus",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png",
  },
  {
    name: "victini",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/494.png",
  },
  {
    name: "snivy",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png",
  },
  {
    name: "servine",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/496.png",
  },
  {
    name: "serperior",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png",
  },
  {
    name: "tepig",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png",
  },
  {
    name: "pignite",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/499.png",
  },
  {
    name: "emboar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png",
  },
  {
    name: "oshawott",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png",
  },
  {
    name: "dewott",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/502.png",
  },
  {
    name: "samurott",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png",
  },
  {
    name: "patrat",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/504.png",
  },
  {
    name: "watchog",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/505.png",
  },
  {
    name: "lillipup",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/506.png",
  },
  {
    name: "herdier",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/507.png",
  },
  {
    name: "stoutland",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/508.png",
  },
  {
    name: "purrloin",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/509.png",
  },
  {
    name: "liepard",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/510.png",
  },
  {
    name: "pansage",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/511.png",
  },
  {
    name: "simisage",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/512.png",
  },
  {
    name: "pansear",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/513.png",
  },
  {
    name: "simisear",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/514.png",
  },
  {
    name: "panpour",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/515.png",
  },
  {
    name: "simipour",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/516.png",
  },
  {
    name: "munna",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/517.png",
  },
  {
    name: "musharna",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/518.png",
  },
  {
    name: "pidove",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/519.png",
  },
  {
    name: "tranquill",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/520.png",
  },
  {
    name: "unfezant",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/521.png",
  },
  {
    name: "blitzle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/522.png",
  },
  {
    name: "zebstrika",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/523.png",
  },
  {
    name: "roggenrola",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/524.png",
  },
  {
    name: "boldore",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/525.png",
  },
  {
    name: "gigalith",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/526.png",
  },
  {
    name: "woobat",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/527.png",
  },
  {
    name: "swoobat",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/528.png",
  },
  {
    name: "drilbur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/529.png",
  },
  {
    name: "excadrill",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png",
  },
  {
    name: "audino",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/531.png",
  },
  {
    name: "timburr",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/532.png",
  },
  {
    name: "gurdurr",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/533.png",
  },
  {
    name: "conkeldurr",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/534.png",
  },
  {
    name: "tympole",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/535.png",
  },
  {
    name: "palpitoad",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/536.png",
  },
  {
    name: "seismitoad",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/537.png",
  },
  {
    name: "throh",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/538.png",
  },
  {
    name: "sawk",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/539.png",
  },
  {
    name: "sewaddle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/540.png",
  },
  {
    name: "swadloon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/541.png",
  },
  {
    name: "leavanny",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/542.png",
  },
  {
    name: "venipede",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/543.png",
  },
  {
    name: "whirlipede",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/544.png",
  },
  {
    name: "scolipede",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/545.png",
  },
  {
    name: "cottonee",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/546.png",
  },
  {
    name: "whimsicott",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/547.png",
  },
  {
    name: "petilil",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/548.png",
  },
  {
    name: "lilligant",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/549.png",
  },
  {
    name: "basculin-red-striped",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/550.png",
  },
  {
    name: "sandile",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/551.png",
  },
  {
    name: "krokorok",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/552.png",
  },
  {
    name: "krookodile",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/553.png",
  },
  {
    name: "darumaka",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/554.png",
  },
  {
    name: "darmanitan-standard",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/555.png",
  },
  {
    name: "maractus",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/556.png",
  },
  {
    name: "dwebble",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/557.png",
  },
  {
    name: "crustle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/558.png",
  },
  {
    name: "scraggy",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/559.png",
  },
  {
    name: "scrafty",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/560.png",
  },
  {
    name: "sigilyph",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/561.png",
  },
  {
    name: "yamask",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/562.png",
  },
  {
    name: "cofagrigus",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/563.png",
  },
  {
    name: "tirtouga",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/564.png",
  },
  {
    name: "carracosta",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/565.png",
  },
  {
    name: "archen",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/566.png",
  },
  {
    name: "archeops",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/567.png",
  },
  {
    name: "trubbish",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/568.png",
  },
  {
    name: "garbodor",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/569.png",
  },
  {
    name: "zorua",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/570.png",
  },
  {
    name: "zoroark",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/571.png",
  },
  {
    name: "minccino",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/572.png",
  },
  {
    name: "cinccino",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/573.png",
  },
  {
    name: "gothita",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/574.png",
  },
  {
    name: "gothorita",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/575.png",
  },
  {
    name: "gothitelle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/576.png",
  },
  {
    name: "solosis",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/577.png",
  },
  {
    name: "duosion",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/578.png",
  },
  {
    name: "reuniclus",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/579.png",
  },
  {
    name: "ducklett",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/580.png",
  },
  {
    name: "swanna",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/581.png",
  },
  {
    name: "vanillite",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/582.png",
  },
  {
    name: "vanillish",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/583.png",
  },
  {
    name: "vanilluxe",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/584.png",
  },
  {
    name: "deerling",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/585.png",
  },
  {
    name: "sawsbuck",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/586.png",
  },
  {
    name: "emolga",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/587.png",
  },
  {
    name: "karrablast",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/588.png",
  },
  {
    name: "escavalier",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/589.png",
  },
  {
    name: "foongus",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/590.png",
  },
  {
    name: "amoonguss",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png",
  },
  {
    name: "frillish",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/592.png",
  },
  {
    name: "jellicent",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/593.png",
  },
  {
    name: "alomomola",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/594.png",
  },
  {
    name: "joltik",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png",
  },
  {
    name: "galvantula",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/596.png",
  },
  {
    name: "ferroseed",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/597.png",
  },
  {
    name: "ferrothorn",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/598.png",
  },
  {
    name: "klink",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/599.png",
  },
  {
    name: "klang",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/600.png",
  },
  {
    name: "klinklang",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/601.png",
  },
  {
    name: "tynamo",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/602.png",
  },
  {
    name: "eelektrik",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/603.png",
  },
  {
    name: "eelektross",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/604.png",
  },
  {
    name: "elgyem",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/605.png",
  },
  {
    name: "beheeyem",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/606.png",
  },
  {
    name: "litwick",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/607.png",
  },
  {
    name: "lampent",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/608.png",
  },
  {
    name: "chandelure",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png",
  },
  {
    name: "axew",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/610.png",
  },
  {
    name: "fraxure",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/611.png",
  },
  {
    name: "haxorus",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/612.png",
  },
  {
    name: "cubchoo",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/613.png",
  },
  {
    name: "beartic",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/614.png",
  },
  {
    name: "cryogonal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/615.png",
  },
  {
    name: "shelmet",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/616.png",
  },
  {
    name: "accelgor",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/617.png",
  },
  {
    name: "stunfisk",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/618.png",
  },
  {
    name: "mienfoo",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/619.png",
  },
  {
    name: "mienshao",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/620.png",
  },
  {
    name: "druddigon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/621.png",
  },
  {
    name: "golett",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/622.png",
  },
  {
    name: "golurk",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/623.png",
  },
  {
    name: "pawniard",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/624.png",
  },
  {
    name: "bisharp",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/625.png",
  },
  {
    name: "bouffalant",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/626.png",
  },
  {
    name: "rufflet",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/627.png",
  },
  {
    name: "braviary",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/628.png",
  },
  {
    name: "vullaby",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/629.png",
  },
  {
    name: "mandibuzz",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/630.png",
  },
  {
    name: "heatmor",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/631.png",
  },
  {
    name: "durant",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/632.png",
  },
  {
    name: "deino",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/633.png",
  },
  {
    name: "zweilous",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/634.png",
  },
  {
    name: "hydreigon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/635.png",
  },
  {
    name: "larvesta",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/636.png",
  },
  {
    name: "volcarona",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png",
  },
  {
    name: "cobalion",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/638.png",
  },
  {
    name: "terrakion",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/639.png",
  },
  {
    name: "virizion",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/640.png",
  },
  {
    name: "tornadus-incarnate",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/641.png",
  },
  {
    name: "thundurus-incarnate",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/642.png",
  },
  {
    name: "reshiram",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png",
  },
  {
    name: "zekrom",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png",
  },
  {
    name: "landorus-incarnate",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/645.png",
  },
  {
    name: "kyurem",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/646.png",
  },
  {
    name: "keldeo-ordinary",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/647.png",
  },
  {
    name: "meloetta-aria",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/648.png",
  },
  {
    name: "genesect",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/649.png",
  },
  {
    name: "chespin",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png",
  },
  {
    name: "quilladin",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/651.png",
  },
  {
    name: "chesnaught",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/652.png",
  },
  {
    name: "fennekin",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png",
  },
  {
    name: "braixen",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/654.png",
  },
  {
    name: "delphox",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/655.png",
  },
  {
    name: "froakie",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png",
  },
  {
    name: "frogadier",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/657.png",
  },
  {
    name: "greninja",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png",
  },
  {
    name: "bunnelby",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/659.png",
  },
  {
    name: "diggersby",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/660.png",
  },
  {
    name: "fletchling",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/661.png",
  },
  {
    name: "fletchinder",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/662.png",
  },
  {
    name: "talonflame",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/663.png",
  },
  {
    name: "scatterbug",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/664.png",
  },
  {
    name: "spewpa",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/665.png",
  },
  {
    name: "vivillon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/666.png",
  },
  {
    name: "litleo",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/667.png",
  },
  {
    name: "pyroar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/668.png",
  },
  {
    name: "flabebe",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/669.png",
  },
  {
    name: "floette",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/670.png",
  },
  {
    name: "florges",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/671.png",
  },
  {
    name: "skiddo",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/672.png",
  },
  {
    name: "gogoat",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/673.png",
  },
  {
    name: "pancham",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/674.png",
  },
  {
    name: "pangoro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/675.png",
  },
  {
    name: "furfrou",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/676.png",
  },
  {
    name: "espurr",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/677.png",
  },
  {
    name: "meowstic-male",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/678.png",
  },
  {
    name: "honedge",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/679.png",
  },
  {
    name: "doublade",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/680.png",
  },
  {
    name: "aegislash-shield",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/681.png",
  },
  {
    name: "spritzee",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/682.png",
  },
  {
    name: "aromatisse",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/683.png",
  },
  {
    name: "swirlix",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/684.png",
  },
  {
    name: "slurpuff",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/685.png",
  },
  {
    name: "inkay",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/686.png",
  },
  {
    name: "malamar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/687.png",
  },
  {
    name: "binacle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/688.png",
  },
  {
    name: "barbaracle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/689.png",
  },
  {
    name: "skrelp",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/690.png",
  },
  {
    name: "dragalge",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/691.png",
  },
  {
    name: "clauncher",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/692.png",
  },
  {
    name: "clawitzer",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/693.png",
  },
  {
    name: "helioptile",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/694.png",
  },
  {
    name: "heliolisk",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/695.png",
  },
  {
    name: "tyrunt",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/696.png",
  },
  {
    name: "tyrantrum",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/697.png",
  },
  {
    name: "amaura",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/698.png",
  },
  {
    name: "aurorus",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/699.png",
  },
  {
    name: "sylveon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png",
  },
  {
    name: "hawlucha",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/701.png",
  },
  {
    name: "dedenne",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/702.png",
  },
  {
    name: "carbink",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/703.png",
  },
  {
    name: "goomy",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/704.png",
  },
  {
    name: "sliggoo",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/705.png",
  },
  {
    name: "goodra",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/706.png",
  },
  {
    name: "klefki",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/707.png",
  },
  {
    name: "phantump",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/708.png",
  },
  {
    name: "trevenant",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/709.png",
  },
  {
    name: "pumpkaboo-average",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/710.png",
  },
  {
    name: "gourgeist-average",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/711.png",
  },
  {
    name: "bergmite",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/712.png",
  },
  {
    name: "avalugg",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/713.png",
  },
  {
    name: "noibat",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/714.png",
  },
  {
    name: "noivern",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/715.png",
  },
  {
    name: "xerneas",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/716.png",
  },
  {
    name: "yveltal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/717.png",
  },
  {
    name: "zygarde",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/718.png",
  },
  {
    name: "diancie",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/719.png",
  },
  {
    name: "hoopa",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/720.png",
  },
  {
    name: "volcanion",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/721.png",
  },
  {
    name: "rowlet",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png",
  },
  {
    name: "dartrix",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/723.png",
  },
  {
    name: "decidueye",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/724.png",
  },
  {
    name: "litten",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png",
  },
  {
    name: "torracat",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/726.png",
  },
  {
    name: "incineroar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png",
  },
  {
    name: "popplio",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png",
  },
  {
    name: "brionne",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/729.png",
  },
  {
    name: "primarina",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/730.png",
  },
  {
    name: "pikipek",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/731.png",
  },
  {
    name: "trumbeak",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/732.png",
  },
  {
    name: "toucannon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/733.png",
  },
  {
    name: "yungoos",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/734.png",
  },
  {
    name: "gumshoos",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/735.png",
  },
  {
    name: "grubbin",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/736.png",
  },
  {
    name: "charjabug",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/737.png",
  },
  {
    name: "vikavolt",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/738.png",
  },
  {
    name: "crabrawler",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/739.png",
  },
  {
    name: "crabominable",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/740.png",
  },
  {
    name: "oricorio-baile",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/741.png",
  },
  {
    name: "cutiefly",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/742.png",
  },
  {
    name: "ribombee",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/743.png",
  },
  {
    name: "rockruff",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/744.png",
  },
  {
    name: "lycanroc-midday",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/745.png",
  },
  {
    name: "wishiwashi-solo",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/746.png",
  },
  {
    name: "mareanie",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/747.png",
  },
  {
    name: "toxapex",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/748.png",
  },
  {
    name: "mudbray",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/749.png",
  },
  {
    name: "mudsdale",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/750.png",
  },
  {
    name: "dewpider",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/751.png",
  },
  {
    name: "araquanid",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/752.png",
  },
  {
    name: "fomantis",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/753.png",
  },
  {
    name: "lurantis",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/754.png",
  },
  {
    name: "morelull",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/755.png",
  },
  {
    name: "shiinotic",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/756.png",
  },
  {
    name: "salandit",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/757.png",
  },
  {
    name: "salazzle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/758.png",
  },
  {
    name: "stufful",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/759.png",
  },
  {
    name: "bewear",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/760.png",
  },
  {
    name: "bounsweet",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/761.png",
  },
  {
    name: "steenee",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/762.png",
  },
  {
    name: "tsareena",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/763.png",
  },
  {
    name: "comfey",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/764.png",
  },
  {
    name: "oranguru",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/765.png",
  },
  {
    name: "passimian",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/766.png",
  },
  {
    name: "wimpod",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/767.png",
  },
  {
    name: "golisopod",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/768.png",
  },
  {
    name: "sandygast",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/769.png",
  },
  {
    name: "palossand",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/770.png",
  },
  {
    name: "pyukumuku",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/771.png",
  },
  {
    name: "type-null",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/772.png",
  },
  {
    name: "silvally",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/773.png",
  },
  {
    name: "minior-red-meteor",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/774.png",
  },
  {
    name: "komala",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/775.png",
  },
  {
    name: "turtonator",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/776.png",
  },
  {
    name: "togedemaru",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/777.png",
  },
  {
    name: "mimikyu-disguised",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png",
  },
  {
    name: "bruxish",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/779.png",
  },
  {
    name: "drampa",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/780.png",
  },
  {
    name: "dhelmise",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/781.png",
  },
  {
    name: "jangmo-o",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/782.png",
  },
  {
    name: "hakamo-o",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/783.png",
  },
  {
    name: "kommo-o",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/784.png",
  },
  {
    name: "tapu-koko",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/785.png",
  },
  {
    name: "tapu-lele",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/786.png",
  },
  {
    name: "tapu-bulu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/787.png",
  },
  {
    name: "tapu-fini",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/788.png",
  },
  {
    name: "cosmog",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/789.png",
  },
  {
    name: "cosmoem",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/790.png",
  },
  {
    name: "solgaleo",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/791.png",
  },
  {
    name: "lunala",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/792.png",
  },
  {
    name: "nihilego",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/793.png",
  },
  {
    name: "buzzwole",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/794.png",
  },
  {
    name: "pheromosa",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/795.png",
  },
  {
    name: "xurkitree",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/796.png",
  },
  {
    name: "celesteela",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/797.png",
  },
  {
    name: "kartana",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/798.png",
  },
  {
    name: "guzzlord",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/799.png",
  },
  {
    name: "necrozma",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/800.png",
  },
  {
    name: "magearna",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/801.png",
  },
  {
    name: "marshadow",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/802.png",
  },
  {
    name: "poipole",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/803.png",
  },
  {
    name: "naganadel",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/804.png",
  },
  {
    name: "stakataka",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/805.png",
  },
  {
    name: "blacephalon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/806.png",
  },
  {
    name: "zeraora",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/807.png",
  },
  {
    name: "meltan",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/808.png",
  },
  {
    name: "melmetal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/809.png",
  },
  {
    name: "grookey",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/810.png",
  },
  {
    name: "thwackey",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/811.png",
  },
  {
    name: "rillaboom",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/812.png",
  },
  {
    name: "scorbunny",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/813.png",
  },
  {
    name: "raboot",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/814.png",
  },
  {
    name: "cinderace",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/815.png",
  },
  {
    name: "sobble",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/816.png",
  },
  {
    name: "drizzile",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/817.png",
  },
  {
    name: "inteleon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/818.png",
  },
  {
    name: "skwovet",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/819.png",
  },
  {
    name: "greedent",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/820.png",
  },
  {
    name: "rookidee",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/821.png",
  },
  {
    name: "corvisquire",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/822.png",
  },
  {
    name: "corviknight",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/823.png",
  },
  {
    name: "blipbug",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/824.png",
  },
  {
    name: "dottler",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/825.png",
  },
  {
    name: "orbeetle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/826.png",
  },
  {
    name: "nickit",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/827.png",
  },
  {
    name: "thievul",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/828.png",
  },
  {
    name: "gossifleur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/829.png",
  },
  {
    name: "eldegoss",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/830.png",
  },
  {
    name: "wooloo",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/831.png",
  },
  {
    name: "dubwool",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/832.png",
  },
  {
    name: "chewtle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/833.png",
  },
  {
    name: "drednaw",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/834.png",
  },
  {
    name: "yamper",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/835.png",
  },
  {
    name: "boltund",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/836.png",
  },
  {
    name: "rolycoly",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/837.png",
  },
  {
    name: "carkol",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/838.png",
  },
  {
    name: "coalossal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/839.png",
  },
  {
    name: "applin",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/840.png",
  },
  {
    name: "flapple",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/841.png",
  },
  {
    name: "appletun",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/842.png",
  },
  {
    name: "silicobra",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/843.png",
  },
  {
    name: "sandaconda",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/844.png",
  },
  {
    name: "cramorant",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/845.png",
  },
  {
    name: "arrokuda",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/846.png",
  },
  {
    name: "barraskewda",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/847.png",
  },
  {
    name: "toxel",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/848.png",
  },
  {
    name: "toxtricity-amped",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/849.png",
  },
  {
    name: "sizzlipede",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/850.png",
  },
  {
    name: "centiskorch",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/851.png",
  },
  {
    name: "clobbopus",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/852.png",
  },
  {
    name: "grapploct",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/853.png",
  },
  {
    name: "sinistea",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/854.png",
  },
  {
    name: "polteageist",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/855.png",
  },
  {
    name: "hatenna",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/856.png",
  },
  {
    name: "hattrem",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/857.png",
  },
  {
    name: "hatterene",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/858.png",
  },
  {
    name: "impidimp",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/859.png",
  },
  {
    name: "morgrem",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/860.png",
  },
  {
    name: "grimmsnarl",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/861.png",
  },
  {
    name: "obstagoon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/862.png",
  },
  {
    name: "perrserker",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/863.png",
  },
  {
    name: "cursola",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/864.png",
  },
  {
    name: "sirfetchd",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/865.png",
  },
  {
    name: "mr-rime",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/866.png",
  },
  {
    name: "runerigus",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/867.png",
  },
  {
    name: "milcery",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/868.png",
  },
  {
    name: "alcremie",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/869.png",
  },
  {
    name: "falinks",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/870.png",
  },
  {
    name: "pincurchin",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/871.png",
  },
  {
    name: "snom",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/872.png",
  },
  {
    name: "frosmoth",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/873.png",
  },
  {
    name: "stonjourner",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/874.png",
  },
  {
    name: "eiscue-ice",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/875.png",
  },
  {
    name: "indeedee-male",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/876.png",
  },
  {
    name: "morpeko",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/877.png",
  },
  {
    name: "cufant",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/878.png",
  },
  {
    name: "copperajah",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/879.png",
  },
  {
    name: "dracozolt",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/880.png",
  },
  {
    name: "arctozolt",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/881.png",
  },
  {
    name: "dracovish",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/882.png",
  },
  {
    name: "arctovish",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/883.png",
  },
  {
    name: "duraludon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/884.png",
  },
  {
    name: "dreepy",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/885.png",
  },
  {
    name: "drakloak",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/886.png",
  },
  {
    name: "dragapult",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png",
  },
  {
    name: "zacian-hero",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/888.png",
  },
  {
    name: "zamazenta-hero",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/889.png",
  },
  {
    name: "eternatus",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/890.png",
  },
  {
    name: "kubfu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/891.png",
  },
  {
    name: "urshifu-single-strike",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/892.png",
  },
  {
    name: "zarude",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/893.png",
  },
  {
    name: "regieleki",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/894.png",
  },
  {
    name: "regidrago",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/895.png",
  },
  {
    name: "glastrier",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/896.png",
  },
  {
    name: "spectrier",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/897.png",
  },
  {
    name: "calyrex",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/898.png",
  },
  {
    name: "deoxys-attack",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10001.png",
  },
  {
    name: "deoxys-defense",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10002.png",
  },
  {
    name: "deoxys-speed",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10003.png",
  },
  {
    name: "wormadam-sandy",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10004.png",
  },
  {
    name: "wormadam-trash",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10005.png",
  },
  {
    name: "shaymin-sky",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10006.png",
  },
  {
    name: "giratina-origin",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10007.png",
  },
  {
    name: "rotom-heat",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10008.png",
  },
  {
    name: "rotom-wash",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10009.png",
  },
  {
    name: "rotom-frost",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10010.png",
  },
  {
    name: "rotom-fan",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10011.png",
  },
  {
    name: "rotom-mow",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10012.png",
  },
  {
    name: "castform-sunny",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10013.png",
  },
  {
    name: "castform-rainy",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10014.png",
  },
  {
    name: "castform-snowy",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10015.png",
  },
  {
    name: "basculin-blue-striped",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10016.png",
  },
  {
    name: "darmanitan-zen",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10017.png",
  },
  {
    name: "meloetta-pirouette",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10018.png",
  },
  {
    name: "tornadus-therian",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10019.png",
  },
  {
    name: "thundurus-therian",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10020.png",
  },
  {
    name: "landorus-therian",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10021.png",
  },
  {
    name: "kyurem-black",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10022.png",
  },
  {
    name: "kyurem-white",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10023.png",
  },
  {
    name: "keldeo-resolute",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10024.png",
  },
  {
    name: "meowstic-female",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10025.png",
  },
  {
    name: "aegislash-blade",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10026.png",
  },
  {
    name: "pumpkaboo-small",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10027.png",
  },
  {
    name: "pumpkaboo-large",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10028.png",
  },
  {
    name: "pumpkaboo-super",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10029.png",
  },
  {
    name: "gourgeist-small",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10030.png",
  },
  {
    name: "gourgeist-large",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10031.png",
  },
  {
    name: "gourgeist-super",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10032.png",
  },
  {
    name: "venusaur-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10033.png",
  },
  {
    name: "charizard-mega-x",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10034.png",
  },
  {
    name: "charizard-mega-y",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10035.png",
  },
  {
    name: "blastoise-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10036.png",
  },
  {
    name: "alakazam-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10037.png",
  },
  {
    name: "gengar-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10038.png",
  },
  {
    name: "kangaskhan-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10039.png",
  },
  {
    name: "pinsir-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10040.png",
  },
  {
    name: "gyarados-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10041.png",
  },
  {
    name: "aerodactyl-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10042.png",
  },
  {
    name: "mewtwo-mega-x",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10043.png",
  },
  {
    name: "mewtwo-mega-y",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10044.png",
  },
  {
    name: "ampharos-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10045.png",
  },
  {
    name: "scizor-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10046.png",
  },
  {
    name: "heracross-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10047.png",
  },
  {
    name: "houndoom-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10048.png",
  },
  {
    name: "tyranitar-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10049.png",
  },
  {
    name: "blaziken-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10050.png",
  },
  {
    name: "gardevoir-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10051.png",
  },
  {
    name: "mawile-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10052.png",
  },
  {
    name: "aggron-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10053.png",
  },
  {
    name: "medicham-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10054.png",
  },
  {
    name: "manectric-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10055.png",
  },
  {
    name: "banette-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10056.png",
  },
  {
    name: "absol-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10057.png",
  },
  {
    name: "garchomp-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10058.png",
  },
  {
    name: "lucario-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10059.png",
  },
  {
    name: "abomasnow-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10060.png",
  },
  {
    name: "floette-eternal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10061.png",
  },
  {
    name: "latias-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10062.png",
  },
  {
    name: "latios-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10063.png",
  },
  {
    name: "swampert-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10064.png",
  },
  {
    name: "sceptile-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10065.png",
  },
  {
    name: "sableye-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10066.png",
  },
  {
    name: "altaria-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10067.png",
  },
  {
    name: "gallade-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10068.png",
  },
  {
    name: "audino-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10069.png",
  },
  {
    name: "sharpedo-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10070.png",
  },
  {
    name: "slowbro-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10071.png",
  },
  {
    name: "steelix-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10072.png",
  },
  {
    name: "pidgeot-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10073.png",
  },
  {
    name: "glalie-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10074.png",
  },
  {
    name: "diancie-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10075.png",
  },
  {
    name: "metagross-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10076.png",
  },
  {
    name: "kyogre-primal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10077.png",
  },
  {
    name: "groudon-primal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10078.png",
  },
  {
    name: "rayquaza-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10079.png",
  },
  {
    name: "pikachu-rock-star",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10080.png",
  },
  {
    name: "pikachu-belle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10081.png",
  },
  {
    name: "pikachu-pop-star",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10082.png",
  },
  {
    name: "pikachu-phd",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10083.png",
  },
  {
    name: "pikachu-libre",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10084.png",
  },
  {
    name: "pikachu-cosplay",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10085.png",
  },
  {
    name: "hoopa-unbound",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10086.png",
  },
  {
    name: "camerupt-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10087.png",
  },
  {
    name: "lopunny-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10088.png",
  },
  {
    name: "salamence-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10089.png",
  },
  {
    name: "beedrill-mega",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10090.png",
  },
  {
    name: "rattata-alola",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10091.png",
  },
  {
    name: "raticate-alola",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10092.png",
  },
  {
    name: "raticate-totem-alola",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10093.png",
  },
  {
    name: "pikachu-original-cap",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10094.png",
  },
  {
    name: "pikachu-hoenn-cap",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10095.png",
  },
  {
    name: "pikachu-sinnoh-cap",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10096.png",
  },
  {
    name: "pikachu-unova-cap",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10097.png",
  },
  {
    name: "pikachu-kalos-cap",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10098.png",
  },
  {
    name: "pikachu-alola-cap",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10099.png",
  },
  {
    name: "raichu-alola",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10100.png",
  },
  {
    name: "sandshrew-alola",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10101.png",
  },
  {
    name: "sandslash-alola",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10102.png",
  },
  {
    name: "vulpix-alola",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10103.png",
  },
  {
    name: "ninetales-alola",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10104.png",
  },
  {
    name: "diglett-alola",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10105.png",
  },
  {
    name: "dugtrio-alola",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10106.png",
  },
  {
    name: "meowth-alola",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10107.png",
  },
  {
    name: "persian-alola",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10108.png",
  },
  {
    name: "geodude-alola",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10109.png",
  },
  {
    name: "graveler-alola",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10110.png",
  },
  {
    name: "golem-alola",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10111.png",
  },
  {
    name: "grimer-alola",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10112.png",
  },
  {
    name: "muk-alola",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10113.png",
  },
  {
    name: "exeggutor-alola",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10114.png",
  },
  {
    name: "marowak-alola",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10115.png",
  },
  {
    name: "greninja-battle-bond",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10116.png",
  },
  {
    name: "greninja-ash",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10117.png",
  },
  {
    name: "zygarde-10",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10118.png",
  },
  {
    name: "zygarde-50",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10119.png",
  },
  {
    name: "zygarde-complete",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10120.png",
  },
  {
    name: "gumshoos-totem",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10121.png",
  },
  {
    name: "vikavolt-totem",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10122.png",
  },
  {
    name: "oricorio-pom-pom",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10123.png",
  },
  {
    name: "oricorio-pau",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10124.png",
  },
  {
    name: "oricorio-sensu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10125.png",
  },
  {
    name: "lycanroc-midnight",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10126.png",
  },
  {
    name: "wishiwashi-school",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10127.png",
  },
  { name: "lurantis-totem", image: null },
  { name: "salazzle-totem", image: null },
  {
    name: "minior-orange-meteor",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10130.png",
  },
  {
    name: "minior-yellow-meteor",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10131.png",
  },
  {
    name: "minior-green-meteor",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10132.png",
  },
  {
    name: "minior-blue-meteor",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10133.png",
  },
  {
    name: "minior-indigo-meteor",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10134.png",
  },
  {
    name: "minior-violet-meteor",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10135.png",
  },
  {
    name: "minior-red",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10136.png",
  },
  {
    name: "minior-orange",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10137.png",
  },
  {
    name: "minior-yellow",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10138.png",
  },
  {
    name: "minior-green",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10139.png",
  },
  {
    name: "minior-blue",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10140.png",
  },
  {
    name: "minior-indigo",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10141.png",
  },
  {
    name: "minior-violet",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10142.png",
  },
  {
    name: "mimikyu-busted",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10143.png",
  },
  {
    name: "mimikyu-totem-disguised",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10144.png",
  },
  {
    name: "mimikyu-totem-busted",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10145.png",
  },
  { name: "kommo-o-totem", image: null },
  {
    name: "magearna-original",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10147.png",
  },
  {
    name: "pikachu-partner-cap",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10148.png",
  },
  {
    name: "marowak-totem",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10149.png",
  },
  {
    name: "ribombee-totem",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10150.png",
  },
  {
    name: "rockruff-own-tempo",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10151.png",
  },
  {
    name: "lycanroc-dusk",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10152.png",
  },
  { name: "araquanid-totem", image: null },
  { name: "togedemaru-totem", image: null },
  {
    name: "necrozma-dusk",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10155.png",
  },
  {
    name: "necrozma-dawn",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10156.png",
  },
  {
    name: "necrozma-ultra",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10157.png",
  },
  {
    name: "meowth-galar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10158.png",
  },
  {
    name: "ponyta-galar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10159.png",
  },
  {
    name: "rapidash-galar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10160.png",
  },
  {
    name: "slowpoke-galar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10161.png",
  },
  {
    name: "slowbro-galar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10162.png",
  },
  {
    name: "farfetchd-galar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10163.png",
  },
  {
    name: "weezing-galar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10164.png",
  },
  {
    name: "mr-mime-galar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10165.png",
  },
  {
    name: "articuno-galar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10166.png",
  },
  {
    name: "zapdos-galar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10167.png",
  },
  {
    name: "moltres-galar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10168.png",
  },
  {
    name: "slowking-galar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10169.png",
  },
  {
    name: "corsola-galar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10170.png",
  },
  {
    name: "zigzagoon-galar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10171.png",
  },
  {
    name: "linoone-galar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10172.png",
  },
  {
    name: "darumaka-galar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10173.png",
  },
  {
    name: "darmanitan-standard-galar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10174.png",
  },
  {
    name: "darmanitan-zen-galar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10175.png",
  },
  {
    name: "yamask-galar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10176.png",
  },
  {
    name: "stunfisk-galar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10177.png",
  },
  {
    name: "toxtricity-low-key",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10178.png",
  },
  {
    name: "eiscue-noice",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10179.png",
  },
  {
    name: "indeedee-female",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10180.png",
  },
  {
    name: "zacian-crowned",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10181.png",
  },
  {
    name: "zamazenta-crowned",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10182.png",
  },
  {
    name: "urshifu-rapid-strike",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10183.png",
  },
  {
    name: "calyrex-ice-rider",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10184.png",
  },
  {
    name: "calyrex-shadow-rider",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10185.png",
  },
  {
    name: "venusaur-gmax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10186.png",
  },
  {
    name: "charizard-gmax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10187.png",
  },
  {
    name: "blastoise-gmax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10188.png",
  },
  {
    name: "butterfree-gmax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10189.png",
  },
  {
    name: "pikachu-gmax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10190.png",
  },
  {
    name: "meowth-gmax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10191.png",
  },
  {
    name: "machamp-gmax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10192.png",
  },
  {
    name: "gengar-gmax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10193.png",
  },
  {
    name: "kingler-gmax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10194.png",
  },
  {
    name: "lapras-gmax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10195.png",
  },
  {
    name: "eevee-gmax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10196.png",
  },
  {
    name: "snorlax-gmax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10197.png",
  },
  {
    name: "garbodor-gmax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10198.png",
  },
  {
    name: "melmetal-gmax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10199.png",
  },
  {
    name: "rillaboom-gmax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10200.png",
  },
  {
    name: "cinderace-gmax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10201.png",
  },
  {
    name: "inteleon-gmax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10202.png",
  },
  {
    name: "corviknight-gmax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10203.png",
  },
  {
    name: "orbeetle-gmax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10204.png",
  },
  {
    name: "drednaw-gmax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10205.png",
  },
  {
    name: "coalossal-gmax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10206.png",
  },
  {
    name: "flapple-gmax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10207.png",
  },
  {
    name: "appletun-gmax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10208.png",
  },
  {
    name: "sandaconda-gmax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10209.png",
  },
  {
    name: "toxtricity-amped-gmax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10210.png",
  },
  {
    name: "centiskorch-gmax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10211.png",
  },
  {
    name: "hatterene-gmax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10212.png",
  },
  {
    name: "grimmsnarl-gmax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10213.png",
  },
  {
    name: "alcremie-gmax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10214.png",
  },
  {
    name: "copperajah-gmax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10215.png",
  },
  {
    name: "duraludon-gmax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10216.png",
  },
  {
    name: "eternatus-eternamax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10217.png",
  },
  {
    name: "urshifu-single-strike-gmax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10218.png",
  },
  {
    name: "urshifu-rapid-strike-gmax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10219.png",
  },
  {
    name: "toxtricity-low-key-gmax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10220.png",
  },
];

export default photoArr;
