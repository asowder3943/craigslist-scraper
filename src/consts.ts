/**
 * Constants Associated With External APIs
 */

/** Enum of all Cragslist Subdomains */
export const CRAIGSLIST_SITES: {[key: string]: {subdomain: string, name: string}} = {
  AUBURN: { subdomain: "auburn", name: "auburn" },
  BHAM: { subdomain: "bham", name: "birmingham" },
  DOTHAN: { subdomain: "dothan", name: "dothan" },
  SHOALS: { subdomain: "shoals", name: "florence  muscle shoals" },
  GADSDEN: { subdomain: "gadsden", name: "gadsden-anniston" },
  HUNTSVILLE: { subdomain: "huntsville", name: "huntsville  decatur" },
  MONTGOMERY: { subdomain: "montgomery", name: "montgomery" },
  TUSCALOOSA: { subdomain: "tuscaloosa", name: "tuscaloosa" },
  ANCHORAGE: { subdomain: "anchorage", name: "anchorage  mat-su" },
  FAIRBANKS: { subdomain: "fairbanks", name: "fairbanks" },
  KENAI: { subdomain: "kenai", name: "kenai peninsula" },
  JUNEAU: { subdomain: "juneau", name: "southeast alaska" },
  FLAGSTAFF: { subdomain: "flagstaff", name: "flagstaff  sedona" },
  MOHAVE: { subdomain: "mohave", name: "mohave county" },
  PHOENIX: { subdomain: "phoenix", name: "phoenix" },
  PRESCOTT: { subdomain: "prescott", name: "prescott" },
  SHOWLOW: { subdomain: "showlow", name: "show low" },
  SIERRAVISTA: { subdomain: "sierravista", name: "sierra vista" },
  TUCSON: { subdomain: "tucson", name: "tucson" },
  YUMA: { subdomain: "yuma", name: "yuma" },
  FAYAR: { subdomain: "fayar", name: "fayetteville " },
  FORTSMITH: { subdomain: "fortsmith", name: "fort smith" },
  JONESBORO: { subdomain: "jonesboro", name: "jonesboro" },
  LITTLEROCK: { subdomain: "littlerock", name: "little rock" },
  TEXARKANA: { subdomain: "texarkana", name: "texarkana" },
  BAKERSFIELD: { subdomain: "bakersfield", name: "bakersfield" },
  CHICO: { subdomain: "chico", name: "chico" },
  FRESNO: { subdomain: "fresno", name: "fresno  madera" },
  GOLDCOUNTRY: { subdomain: "goldcountry", name: "gold country" },
  HANFORD: { subdomain: "hanford", name: "hanford-corcoran" },
  HUMBOLDT: { subdomain: "humboldt", name: "humboldt county" },
  IMPERIAL: { subdomain: "imperial", name: "imperial county" },
  INLANDEMPIRE: { subdomain: "inlandempire", name: "inland empire" },
  LOSANGELES: { subdomain: "losangeles", name: "los angeles" },
  MENDOCINO: { subdomain: "mendocino", name: "mendocino county" },
  MERCED: { subdomain: "merced", name: "merced" },
  MODESTO: { subdomain: "modesto", name: "modesto" },
  MONTEREY: { subdomain: "monterey", name: "monterey bay" },
  ORANGECOUNTY: { subdomain: "orangecounty", name: "orange county" },
  PALMSPRINGS: { subdomain: "palmsprings", name: "palm springs" },
  REDDING: { subdomain: "redding", name: "redding" },
  SACRAMENTO: { subdomain: "sacramento", name: "sacramento" },
  SANDIEGO: { subdomain: "sandiego", name: "san diego" },
  SFBAY: { subdomain: "sfbay", name: "san francisco bay area" },
  SLO: { subdomain: "slo", name: "san luis obispo" },
  SANTABARBARA: { subdomain: "santabarbara", name: "santa barbara" },
  SANTAMARIA: { subdomain: "santamaria", name: "santa maria" },
  SISKIYOU: { subdomain: "siskiyou", name: "siskiyou county" },
  STOCKTON: { subdomain: "stockton", name: "stockton" },
  SUSANVILLE: { subdomain: "susanville", name: "susanville" },
  VENTURA: { subdomain: "ventura", name: "ventura county" },
  VISALIA: { subdomain: "visalia", name: "visalia-tulare" },
  YUBASUTTER: { subdomain: "yubasutter", name: "yuba-sutter" },
  BOULDER: { subdomain: "boulder", name: "boulder" },
  COSPRINGS: { subdomain: "cosprings", name: "colorado springs" },
  DENVER: { subdomain: "denver", name: "denver" },
  EASTCO: { subdomain: "eastco", name: "eastern CO" },
  FORTCOLLINS: { subdomain: "fortcollins", name: "fort collins  north CO" },
  ROCKIES: { subdomain: "rockies", name: "high rockies" },
  PUEBLO: { subdomain: "pueblo", name: "pueblo" },
  WESTSLOPE: { subdomain: "westslope", name: "western slope" },
  NEWLONDON: { subdomain: "newlondon", name: "eastern CT" },
  HARTFORD: { subdomain: "hartford", name: "hartford" },
  NEWHAVEN: { subdomain: "newhaven", name: "new haven" },
  NWCT: { subdomain: "nwct", name: "northwest CT" },
  DELAWARE: { subdomain: "delaware", name: "delaware" },
  WASHINGTONDC: { subdomain: "washingtondc", name: "washington" },
  DAYTONA: { subdomain: "daytona", name: "daytona beach" },
  KEYS: { subdomain: "keys", name: "florida keys" },
  FORTMYERS: { subdomain: "fortmyers", name: "ft myers  SW florida" },
  GAINESVILLE: { subdomain: "gainesville", name: "gainesville" },
  CFL: { subdomain: "cfl", name: "heartland florida" },
  JACKSONVILLE: { subdomain: "jacksonville", name: "jacksonville" },
  LAKELAND: { subdomain: "lakeland", name: "lakeland" },
  MIAMI: { subdomain: "miami", name: "miami  dade" },
  LAKECITY: { subdomain: "lakecity", name: "north central FL" },
  OCALA: { subdomain: "ocala", name: "ocala" },
  OKALOOSA: { subdomain: "okaloosa", name: "okaloosa  walton" },
  ORLANDO: { subdomain: "orlando", name: "orlando" },
  PANAMACITY: { subdomain: "panamacity", name: "panama city" },
  PENSACOLA: { subdomain: "pensacola", name: "pensacola" },
  SARASOTA: { subdomain: "sarasota", name: "sarasota-bradenton" },
  SPACECOAST: { subdomain: "spacecoast", name: "space coast" },
  STAUGUSTINE: { subdomain: "staugustine", name: "st augustine" },
  TALLAHASSEE: { subdomain: "tallahassee", name: "tallahassee" },
  TAMPA: { subdomain: "tampa", name: "tampa bay area" },
  TREASURE: { subdomain: "treasure", name: "treasure coast" },
  ALBANYGA: { subdomain: "albanyga", name: "albany " },
  ATHENSGA: { subdomain: "athensga", name: "athens" },
  ATLANTA: { subdomain: "atlanta", name: "atlanta" },
  AUGUSTA: { subdomain: "augusta", name: "augusta" },
  BRUNSWICK: { subdomain: "brunswick", name: "brunswick" },
  COLUMBUSGA: { subdomain: "columbusga", name: "columbus " },
  MACON: { subdomain: "macon", name: "macon  warner robins" },
  NWGA: { subdomain: "nwga", name: "northwest GA" },
  SAVANNAH: { subdomain: "savannah", name: "savannah  hinesville" },
  STATESBORO: { subdomain: "statesboro", name: "statesboro" },
  VALDOSTA: { subdomain: "valdosta", name: "valdosta" },
  HONOLULU: { subdomain: "honolulu", name: "hawaii" },
  BOISE: { subdomain: "boise", name: "boise" },
  EASTIDAHO: { subdomain: "eastidaho", name: "east idaho" },
  LEWISTON: { subdomain: "lewiston", name: "lewiston  clarkston" },
  TWINFALLS: { subdomain: "twinfalls", name: "twin falls" },
  BN: { subdomain: "bn", name: "bloomington-normal" },
  CHAMBANA: { subdomain: "chambana", name: "champaign urbana" },
  CHICAGO: { subdomain: "chicago", name: "chicago" },
  DECATUR: { subdomain: "decatur", name: "decatur" },
  LASALLE: { subdomain: "lasalle", name: "la salle co" },
  MATTOON: { subdomain: "mattoon", name: "mattoon-charleston" },
  PEORIA: { subdomain: "peoria", name: "peoria" },
  ROCKFORD: { subdomain: "rockford", name: "rockford" },
  CARBONDALE: { subdomain: "carbondale", name: "southern illinois" },
  SPRINGFIELDIL: { subdomain: "springfieldil", name: "springfield " },
  QUINCY: { subdomain: "quincy", name: "western IL" },
  BLOOMINGTON: { subdomain: "bloomington", name: "bloomington" },
  EVANSVILLE: { subdomain: "evansville", name: "evansville" },
  FORTWAYNE: { subdomain: "fortwayne", name: "fort wayne" },
  INDIANAPOLIS: { subdomain: "indianapolis", name: "indianapolis" },
  KOKOMO: { subdomain: "kokomo", name: "kokomo" },
  TIPPECANOE: { subdomain: "tippecanoe", name: "lafayette  west lafayette" },
  MUNCIE: { subdomain: "muncie", name: "muncie  anderson" },
  RICHMONDIN: { subdomain: "richmondin", name: "richmond " },
  SOUTHBEND: { subdomain: "southbend", name: "south bend  michiana" },
  TERREHAUTE: { subdomain: "terrehaute", name: "terre haute" },
  AMES: { subdomain: "ames", name: "ames" },
  CEDARRAPIDS: { subdomain: "cedarrapids", name: "cedar rapids" },
  DESMOINES: { subdomain: "desmoines", name: "des moines" },
  DUBUQUE: { subdomain: "dubuque", name: "dubuque" },
  FORTDODGE: { subdomain: "fortdodge", name: "fort dodge" },
  IOWACITY: { subdomain: "iowacity", name: "iowa city" },
  MASONCITY: { subdomain: "masoncity", name: "mason city" },
  QUADCITIES: { subdomain: "quadcities", name: "quad cities" },
  SIOUXCITY: { subdomain: "siouxcity", name: "sioux city" },
  OTTUMWA: { subdomain: "ottumwa", name: "southeast IA" },
  WATERLOO: { subdomain: "waterloo", name: "waterloo  cedar falls" },
  LAWRENCE: { subdomain: "lawrence", name: "lawrence" },
  KSU: { subdomain: "ksu", name: "manhattan" },
  NWKS: { subdomain: "nwks", name: "northwest KS" },
  SALINA: { subdomain: "salina", name: "salina" },
  SEKS: { subdomain: "seks", name: "southeast KS" },
  SWKS: { subdomain: "swks", name: "southwest KS" },
  TOPEKA: { subdomain: "topeka", name: "topeka" },
  WICHITA: { subdomain: "wichita", name: "wichita" },
  BGKY: { subdomain: "bgky", name: "bowling green" },
  EASTKY: { subdomain: "eastky", name: "eastern kentucky" },
  LEXINGTON: { subdomain: "lexington", name: "lexington" },
  LOUISVILLE: { subdomain: "louisville", name: "louisville" },
  OWENSBORO: { subdomain: "owensboro", name: "owensboro" },
  WESTKY: { subdomain: "westky", name: "western KY" },
  BATONROUGE: { subdomain: "batonrouge", name: "baton rouge" },
  CENLA: { subdomain: "cenla", name: "central louisiana" },
  HOUMA: { subdomain: "houma", name: "houma" },
  LAFAYETTE: { subdomain: "lafayette", name: "lafayette" },
  LAKECHARLES: { subdomain: "lakecharles", name: "lake charles" },
  MONROE: { subdomain: "monroe", name: "monroe" },
  NEWORLEANS: { subdomain: "neworleans", name: "new orleans" },
  SHREVEPORT: { subdomain: "shreveport", name: "shreveport" },
  MAINE: { subdomain: "maine", name: "maine" },
  ANNAPOLIS: { subdomain: "annapolis", name: "annapolis" },
  BALTIMORE: { subdomain: "baltimore", name: "baltimore" },
  EASTERNSHORE: { subdomain: "easternshore", name: "eastern shore" },
  FREDERICK: { subdomain: "frederick", name: "frederick" },
  SMD: { subdomain: "smd", name: "southern maryland" },
  WESTMD: { subdomain: "westmd", name: "western maryland" },
  BOSTON: { subdomain: "boston", name: "boston" },
  CAPECOD: { subdomain: "capecod", name: "cape cod  islands" },
  SOUTHCOAST: { subdomain: "southcoast", name: "south coast" },
  WESTERNMASS: { subdomain: "westernmass", name: "western massachusetts" },
  WORCESTER: { subdomain: "worcester", name: "worcester  central MA" },
  ANNARBOR: { subdomain: "annarbor", name: "ann arbor" },
  BATTLECREEK: { subdomain: "battlecreek", name: "battle creek" },
  CENTRALMICH: { subdomain: "centralmich", name: "central michigan" },
  DETROIT: { subdomain: "detroit", name: "detroit metro" },
  FLINT: { subdomain: "flint", name: "flint" },
  GRANDRAPIDS: { subdomain: "grandrapids", name: "grand rapids" },
  HOLLAND: { subdomain: "holland", name: "holland" },
  JXN: { subdomain: "jxn", name: "jackson " },
  KALAMAZOO: { subdomain: "kalamazoo", name: "kalamazoo" },
  LANSING: { subdomain: "lansing", name: "lansing" },
  MONROEMI: { subdomain: "monroemi", name: "monroe " },
  MUSKEGON: { subdomain: "muskegon", name: "muskegon" },
  NMI: { subdomain: "nmi", name: "northern michigan" },
  PORTHURON: { subdomain: "porthuron", name: "port huron" },
  SAGINAW: { subdomain: "saginaw", name: "saginaw-midland-baycity" },
  SWMI: { subdomain: "swmi", name: "southwest michigan" },
  THUMB: { subdomain: "thumb", name: "the thumb" },
  UP: { subdomain: "up", name: "upper peninsula" },
  BEMIDJI: { subdomain: "bemidji", name: "bemidji" },
  BRAINERD: { subdomain: "brainerd", name: "brainerd" },
  DULUTH: { subdomain: "duluth", name: "duluth  superior" },
  MANKATO: { subdomain: "mankato", name: "mankato" },
  MINNEAPOLIS: { subdomain: "minneapolis", name: "minneapolis  st paul" },
  RMN: { subdomain: "rmn", name: "rochester " },
  MARSHALL: { subdomain: "marshall", name: "southwest MN" },
  STCLOUD: { subdomain: "stcloud", name: "st cloud" },
  GULFPORT: { subdomain: "gulfport", name: "gulfport  biloxi" },
  HATTIESBURG: { subdomain: "hattiesburg", name: "hattiesburg" },
  JACKSON: { subdomain: "jackson", name: "jackson" },
  MERIDIAN: { subdomain: "meridian", name: "meridian" },
  NORTHMISS: { subdomain: "northmiss", name: "north mississippi" },
  NATCHEZ: { subdomain: "natchez", name: "southwest MS" },
  COLUMBIAMO: { subdomain: "columbiamo", name: "columbia  jeff city" },
  JOPLIN: { subdomain: "joplin", name: "joplin" },
  KANSASCITY: { subdomain: "kansascity", name: "kansas city" },
  KIRKSVILLE: { subdomain: "kirksville", name: "kirksville" },
  LOZ: { subdomain: "loz", name: "lake of the ozarks" },
  SEMO: { subdomain: "semo", name: "southeast missouri" },
  SPRINGFIELD: { subdomain: "springfield", name: "springfield" },
  STJOSEPH: { subdomain: "stjoseph", name: "st joseph" },
  STLOUIS: { subdomain: "stlouis", name: "st louis" },
  BILLINGS: { subdomain: "billings", name: "billings" },
  BOZEMAN: { subdomain: "bozeman", name: "bozeman" },
  BUTTE: { subdomain: "butte", name: "butte" },
  GREATFALLS: { subdomain: "greatfalls", name: "great falls" },
  HELENA: { subdomain: "helena", name: "helena" },
  KALISPELL: { subdomain: "kalispell", name: "kalispell" },
  MISSOULA: { subdomain: "missoula", name: "missoula" },
  MONTANA: { subdomain: "montana", name: "eastern montana" },
  GRANDISLAND: { subdomain: "grandisland", name: "grand island" },
  LINCOLN: { subdomain: "lincoln", name: "lincoln" },
  NORTHPLATTE: { subdomain: "northplatte", name: "north platte" },
  OMAHA: { subdomain: "omaha", name: "omaha  council bluffs" },
  SCOTTSBLUFF: { subdomain: "scottsbluff", name: "scottsbluff  panhandle" },
  ELKO: { subdomain: "elko", name: "elko" },
  LASVEGAS: { subdomain: "lasvegas", name: "las vegas" },
  RENO: { subdomain: "reno", name: "reno  tahoe" },
  NH: { subdomain: "nh", name: "new hampshire" },
  CNJ: { subdomain: "cnj", name: "central NJ" },
  JERSEYSHORE: { subdomain: "jerseyshore", name: "jersey shore" },
  NEWJERSEY: { subdomain: "newjersey", name: "north jersey" },
  SOUTHJERSEY: { subdomain: "southjersey", name: "south jersey" },
  ALBUQUERQUE: { subdomain: "albuquerque", name: "albuquerque" },
  CLOVIS: { subdomain: "clovis", name: "clovis  portales" },
  FARMINGTON: { subdomain: "farmington", name: "farmington" },
  LASCRUCES: { subdomain: "lascruces", name: "las cruces" },
  ROSWELL: { subdomain: "roswell", name: "roswell  carlsbad" },
  SANTAFE: { subdomain: "santafe", name: "santa fe  taos" },
  ALBANY: { subdomain: "albany", name: "albany" },
  BINGHAMTON: { subdomain: "binghamton", name: "binghamton" },
  BUFFALO: { subdomain: "buffalo", name: "buffalo" },
  CATSKILLS: { subdomain: "catskills", name: "catskills" },
  CHAUTAUQUA: { subdomain: "chautauqua", name: "chautauqua" },
  ELMIRA: { subdomain: "elmira", name: "elmira-corning" },
  FINGERLAKES: { subdomain: "fingerlakes", name: "finger lakes" },
  GLENSFALLS: { subdomain: "glensfalls", name: "glens falls" },
  HUDSONVALLEY: { subdomain: "hudsonvalley", name: "hudson valley" },
  ITHACA: { subdomain: "ithaca", name: "ithaca" },
  LONGISLAND: { subdomain: "longisland", name: "long island" },
  NEWYORK: { subdomain: "newyork", name: "new york city" },
  ONEONTA: { subdomain: "oneonta", name: "oneonta" },
  PLATTSBURGH: { subdomain: "plattsburgh", name: "plattsburgh-adirondacks" },
  POTSDAM: { subdomain: "potsdam", name: "potsdam-canton-massena" },
  ROCHESTER: { subdomain: "rochester", name: "rochester" },
  SYRACUSE: { subdomain: "syracuse", name: "syracuse" },
  TWINTIERS: { subdomain: "twintiers", name: "twin tiers NY/PA" },
  UTICA: { subdomain: "utica", name: "utica-rome-oneida" },
  WATERTOWN: { subdomain: "watertown", name: "watertown" },
  ASHEVILLE: { subdomain: "asheville", name: "asheville" },
  BOONE: { subdomain: "boone", name: "boone" },
  CHARLOTTE: { subdomain: "charlotte", name: "charlotte" },
  EASTNC: { subdomain: "eastnc", name: "eastern NC" },
  FAYETTEVILLE: { subdomain: "fayetteville", name: "fayetteville" },
  GREENSBORO: { subdomain: "greensboro", name: "greensboro" },
  HICKORY: { subdomain: "hickory", name: "hickory  lenoir" },
  ONSLOW: { subdomain: "onslow", name: "jacksonville " },
  OUTERBANKS: { subdomain: "outerbanks", name: "outer banks" },
  RALEIGH: { subdomain: "raleigh", name: "raleigh  durham  CH" },
  WILMINGTON: { subdomain: "wilmington", name: "wilmington" },
  WINSTONSALEM: { subdomain: "winstonsalem", name: "winston-salem" },
  BISMARCK: { subdomain: "bismarck", name: "bismarck" },
  FARGO: { subdomain: "fargo", name: "fargo  moorhead" },
  GRANDFORKS: { subdomain: "grandforks", name: "grand forks" },
  ND: { subdomain: "nd", name: "north dakota" },
  AKRONCANTON: { subdomain: "akroncanton", name: "akron  canton" },
  ASHTABULA: { subdomain: "ashtabula", name: "ashtabula" },
  ATHENSOHIO: { subdomain: "athensohio", name: "athens " },
  CHILLICOTHE: { subdomain: "chillicothe", name: "chillicothe" },
  CINCINNATI: { subdomain: "cincinnati", name: "cincinnati" },
  CLEVELAND: { subdomain: "cleveland", name: "cleveland" },
  COLUMBUS: { subdomain: "columbus", name: "columbus" },
  DAYTON: { subdomain: "dayton", name: "dayton  springfield" },
  LIMAOHIO: { subdomain: "limaohio", name: "lima  findlay" },
  MANSFIELD: { subdomain: "mansfield", name: "mansfield" },
  SANDUSKY: { subdomain: "sandusky", name: "sandusky" },
  TOLEDO: { subdomain: "toledo", name: "toledo" },
  TUSCARAWAS: { subdomain: "tuscarawas", name: "tuscarawas co" },
  YOUNGSTOWN: { subdomain: "youngstown", name: "youngstown" },
  ZANESVILLE: { subdomain: "zanesville", name: "zanesville  cambridge" },
  LAWTON: { subdomain: "lawton", name: "lawton" },
  ENID: { subdomain: "enid", name: "northwest OK" },
  OKLAHOMACITY: { subdomain: "oklahomacity", name: "oklahoma city" },
  STILLWATER: { subdomain: "stillwater", name: "stillwater" },
  TULSA: { subdomain: "tulsa", name: "tulsa" },
  BEND: { subdomain: "bend", name: "bend" },
  CORVALLIS: { subdomain: "corvallis", name: "corvallis/albany" },
  EASTOREGON: { subdomain: "eastoregon", name: "east oregon" },
  EUGENE: { subdomain: "eugene", name: "eugene" },
  KLAMATH: { subdomain: "klamath", name: "klamath falls" },
  MEDFORD: { subdomain: "medford", name: "medford-ashland" },
  OREGONCOAST: { subdomain: "oregoncoast", name: "oregon coast" },
  PORTLAND: { subdomain: "portland", name: "portland" },
  ROSEBURG: { subdomain: "roseburg", name: "roseburg" },
  SALEM: { subdomain: "salem", name: "salem" },
  ALTOONA: { subdomain: "altoona", name: "altoona-johnstown" },
  CHAMBERSBURG: { subdomain: "chambersburg", name: "cumberland valley" },
  ERIE: { subdomain: "erie", name: "erie" },
  HARRISBURG: { subdomain: "harrisburg", name: "harrisburg" },
  LANCASTER: { subdomain: "lancaster", name: "lancaster" },
  ALLENTOWN: { subdomain: "allentown", name: "lehigh valley" },
  MEADVILLE: { subdomain: "meadville", name: "meadville" },
  PHILADELPHIA: { subdomain: "philadelphia", name: "philadelphia" },
  PITTSBURGH: { subdomain: "pittsburgh", name: "pittsburgh" },
  POCONOS: { subdomain: "poconos", name: "poconos" },
  READING: { subdomain: "reading", name: "reading" },
  SCRANTON: { subdomain: "scranton", name: "scranton  wilkes-barre" },
  PENNSTATE: { subdomain: "pennstate", name: "state college" },
  WILLIAMSPORT: { subdomain: "williamsport", name: "williamsport" },
  YORK: { subdomain: "york", name: "york" },
  PROVIDENCE: { subdomain: "providence", name: "rhode island" },
  CHARLESTON: { subdomain: "charleston", name: "charleston" },
  COLUMBIA: { subdomain: "columbia", name: "columbia" },
  FLORENCESC: { subdomain: "florencesc", name: "florence" },
  GREENVILLE: { subdomain: "greenville", name: "greenville  upstate" },
  HILTONHEAD: { subdomain: "hiltonhead", name: "hilton head" },
  MYRTLEBEACH: { subdomain: "myrtlebeach", name: "myrtle beach" },
  NESD: { subdomain: "nesd", name: "northeast SD" },
  CSD: { subdomain: "csd", name: "pierre  central SD" },
  RAPIDCITY: { subdomain: "rapidcity", name: "rapid city  west SD" },
  SIOUXFALLS: { subdomain: "siouxfalls", name: "sioux falls  SE SD" },
  SD: { subdomain: "sd", name: "south dakota" },
  CHATTANOOGA: { subdomain: "chattanooga", name: "chattanooga" },
  CLARKSVILLE: { subdomain: "clarksville", name: "clarksville" },
  COOKEVILLE: { subdomain: "cookeville", name: "cookeville" },
  JACKSONTN: { subdomain: "jacksontn", name: "jackson  " },
  KNOXVILLE: { subdomain: "knoxville", name: "knoxville" },
  MEMPHIS: { subdomain: "memphis", name: "memphis" },
  NASHVILLE: { subdomain: "nashville", name: "nashville" },
  TRICITIES: { subdomain: "tricities", name: "tri-cities" },
  ABILENE: { subdomain: "abilene", name: "abilene" },
  AMARILLO: { subdomain: "amarillo", name: "amarillo" },
  AUSTIN: { subdomain: "austin", name: "austin" },
  BEAUMONT: { subdomain: "beaumont", name: "beaumont  port arthur" },
  BROWNSVILLE: { subdomain: "brownsville", name: "brownsville" },
  COLLEGESTATION: { subdomain: "collegestation", name: "college station" },
  CORPUSCHRISTI: { subdomain: "corpuschristi", name: "corpus christi" },
  DALLAS: { subdomain: "dallas", name: "dallas  fort worth" },
  NACOGDOCHES: { subdomain: "nacogdoches", name: "deep east texas" },
  DELRIO: { subdomain: "delrio", name: "del rio  eagle pass" },
  ELPASO: { subdomain: "elpaso", name: "el paso" },
  GALVESTON: { subdomain: "galveston", name: "galveston" },
  HOUSTON: { subdomain: "houston", name: "houston" },
  KILLEEN: { subdomain: "killeen", name: "killeen  temple  ft hood" },
  LAREDO: { subdomain: "laredo", name: "laredo" },
  LUBBOCK: { subdomain: "lubbock", name: "lubbock" },
  MCALLEN: { subdomain: "mcallen", name: "mcallen  edinburg" },
  ODESSA: { subdomain: "odessa", name: "odessa  midland" },
  SANANGELO: { subdomain: "sanangelo", name: "san angelo" },
  SANANTONIO: { subdomain: "sanantonio", name: "san antonio" },
  SANMARCOS: { subdomain: "sanmarcos", name: "san marcos" },
  BIGBEND: { subdomain: "bigbend", name: "southwest TX" },
  TEXOMA: { subdomain: "texoma", name: "texoma" },
  EASTTEXAS: { subdomain: "easttexas", name: "tyler  east TX" },
  VICTORIATX: { subdomain: "victoriatx", name: "victoria " },
  WACO: { subdomain: "waco", name: "waco" },
  WICHITAFALLS: { subdomain: "wichitafalls", name: "wichita falls" },
  LOGAN: { subdomain: "logan", name: "logan" },
  OGDEN: { subdomain: "ogden", name: "ogden-clearfield" },
  PROVO: { subdomain: "provo", name: "provo  orem" },
  SALTLAKECITY: { subdomain: "saltlakecity", name: "salt lake city" },
  STGEORGE: { subdomain: "stgeorge", name: "st george" },
  VERMONT: { subdomain: "vermont", name: "vermont" },
  CHARLOTTESVILLE: { subdomain: "charlottesville", name: "charlottesville" },
  DANVILLE: { subdomain: "danville", name: "danville" },
  FREDERICKSBURG: { subdomain: "fredericksburg", name: "fredericksburg" },
  NORFOLK: { subdomain: "norfolk", name: "hampton roads" },
  HARRISONBURG: { subdomain: "harrisonburg", name: "harrisonburg" },
  LYNCHBURG: { subdomain: "lynchburg", name: "lynchburg" },
  BLACKSBURG: { subdomain: "blacksburg", name: "new river valley" },
  RICHMOND: { subdomain: "richmond", name: "richmond" },
  ROANOKE: { subdomain: "roanoke", name: "roanoke" },
  SWVA: { subdomain: "swva", name: "southwest VA" },
  WINCHESTER: { subdomain: "winchester", name: "winchester" },
  BELLINGHAM: { subdomain: "bellingham", name: "bellingham" },
  KPR: { subdomain: "kpr", name: "kennewick-pasco-richland" },
  MOSESLAKE: { subdomain: "moseslake", name: "moses lake" },
  OLYMPIC: { subdomain: "olympic", name: "olympic peninsula" },
  PULLMAN: { subdomain: "pullman", name: "pullman  moscow" },
  SEATTLE: { subdomain: "seattle", name: "seattle-tacoma" },
  SKAGIT: { subdomain: "skagit", name: "skagit  island  SJI" },
  SPOKANE: { subdomain: "spokane", name: "spokane  coeur d'alene" },
  WENATCHEE: { subdomain: "wenatchee", name: "wenatchee" },
  YAKIMA: { subdomain: "yakima", name: "yakima" },
  CHARLESTONWV: { subdomain: "charlestonwv", name: "charleston " },
  MARTINSBURG: { subdomain: "martinsburg", name: "eastern panhandle" },
  HUNTINGTON: { subdomain: "huntington", name: "huntington-ashland" },
  MORGANTOWN: { subdomain: "morgantown", name: "morgantown" },
  WHEELING: { subdomain: "wheeling", name: "northern panhandle" },
  PARKERSBURG: { subdomain: "parkersburg", name: "parkersburg-marietta" },
  SWV: { subdomain: "swv", name: "southern WV" },
  WV: { subdomain: "wv", name: "west virginia (old)" },
  APPLETON: { subdomain: "appleton", name: "appleton-oshkosh-FDL" },
  EAUCLAIRE: { subdomain: "eauclaire", name: "eau claire" },
  GREENBAY: { subdomain: "greenbay", name: "green bay" },
  JANESVILLE: { subdomain: "janesville", name: "janesville" },
  RACINE: { subdomain: "racine", name: "kenosha-racine" },
  LACROSSE: { subdomain: "lacrosse", name: "la crosse" },
  MADISON: { subdomain: "madison", name: "madison" },
  MILWAUKEE: { subdomain: "milwaukee", name: "milwaukee" },
  NORTHERNWI: { subdomain: "northernwi", name: "northern WI" },
  SHEBOYGAN: { subdomain: "sheboygan", name: "sheboygan" },
  WAUSAU: { subdomain: "wausau", name: "wausau" },
  WYOMING: { subdomain: "wyoming", name: "wyoming" },
};

/** Enum of all Craigslist Categories */
export const CRAIGSLIST_CATEGORIES: {[key: string]: {tag: string, name: string, parent: string}} = {
  CCC: { tag: "ccc", name: "all-community", parent: "Community" },
  ACT: { tag: "act", name: "activities", parent: "Community" },
  ATS: { tag: "ats", name: "artists", parent: "Community" },
  KID: { tag: "kid", name: "childcare", parent: "Community" },
  CLS: { tag: "cls", name: "classes", parent: "Community" },
  EVE: { tag: "eve", name: "events", parent: "Community" },
  COM: { tag: "com", name: "general", parent: "Community" },
  GRP: { tag: "grp", name: "groups", parent: "Community" },
  VNN: { tag: "vnn", name: "local news", parent: "Community" },
  LAF: { tag: "laf", name: "lost found", parent: "Community" },
  MIS: { tag: "mis", name: "missed connections", parent: "Community" },
  MUC: { tag: "muc", name: "musicians", parent: "Community" },
  PET: { tag: "pet", name: "pets", parent: "Community" },
  POL: { tag: "pol", name: "politics", parent: "Community" },
  RNR: { tag: "rnr", name: "rants raves", parent: "Community" },
  RID: { tag: "rid", name: "rideshare", parent: "Community" },
  VOL: { tag: "vol", name: "volunteers", parent: "Community" },
  BBB: { tag: "bbb", name: "all-services", parent: "Services" },
  AOS: { tag: "aos", name: "automotive", parent: "Services" },
  BTS: { tag: "bts", name: "beauty", parent: "Services" },
  CMS: { tag: "cms", name: "cell/mobile", parent: "Services" },
  CPS: { tag: "cps", name: "computer", parent: "Services" },
  CRS: { tag: "crs", name: "creative", parent: "Services" },
  CYS: { tag: "cys", name: "cycle", parent: "Services" },
  EVS: { tag: "evs", name: "event", parent: "Services" },
  FGS: { tag: "fgs", name: "farm+garden", parent: "Services" },
  FNS: { tag: "fns", name: "financial", parent: "Services" },
  HWS: { tag: "hws", name: "health/well", parent: "Services" },
  HSS: { tag: "hss", name: "household", parent: "Services" },
  LBS: { tag: "lbs", name: "labor/move", parent: "Services" },
  LGS: { tag: "lgs", name: "legal", parent: "Services" },
  LSS: { tag: "lss", name: "lessons", parent: "Services" },
  MAS: { tag: "mas", name: "marine", parent: "Services" },
  PAS: { tag: "pas", name: "pet", parent: "Services" },
  RTS: { tag: "rts", name: "real estate", parent: "Services" },
  SKS: { tag: "sks", name: "skilled trade", parent: "Services" },
  BIZ: { tag: "biz", name: "sm biz ads", parent: "Services" },
  TRV: { tag: "trv", name: "travel/vac", parent: "Services" },
  WET: { tag: "wet", name: "write/ed/tran", parent: "Services" },
  HHH: { tag: "hhh", name: "all-housing", parent: "Housing" },
  APA: { tag: "apa", name: "apts / housing", parent: "Housing" },
  SWP: { tag: "swp", name: "housing swap", parent: "Housing" },
  HSW: { tag: "hsw", name: "housing wanted", parent: "Housing" },
  OFF: { tag: "off", name: "office / commercial", parent: "Housing" },
  PRK: { tag: "prk", name: "parking / storage", parent: "Housing" },
  REA: { tag: "rea", name: "real estate for sale", parent: "Housing" },
  ROO: { tag: "roo", name: "rooms / shared", parent: "Housing" },
  SHA: { tag: "sha", name: "rooms wanted", parent: "Housing" },
  SUB: { tag: "sub", name: "sublets / temporary", parent: "Housing" },
  VAC: { tag: "vac", name: "vacation rentals", parent: "Housing" },
  SSS: { tag: "sss", name: "all-for sale", parent: "For Sale" },
  ATA: { tag: "ata", name: "antiques", parent: "For Sale" },
  PPA: { tag: "ppa", name: "appliances", parent: "For Sale" },
  ARA: { tag: "ara", name: "arts+crafts", parent: "For Sale" },
  SNA: { tag: "sna", name: "atv/utv/sno", parent: "For Sale" },
  PTA: { tag: "pta", name: "auto parts", parent: "For Sale" },
  AVA: { tag: "ava", name: "aviation", parent: "For Sale" },
  BAA: { tag: "baa", name: "baby+kid", parent: "For Sale" },
  BAR: { tag: "bar", name: "barter", parent: "For Sale" },
  HAA: { tag: "haa", name: "beauty+hlth", parent: "For Sale" },
  BIP: { tag: "bip", name: "bike parts", parent: "For Sale" },
  BIA: { tag: "bia", name: "bikes", parent: "For Sale" },
  BPA: { tag: "bpa", name: "boat parts", parent: "For Sale" },
  BOO: { tag: "boo", name: "boats", parent: "For Sale" },
  BKA: { tag: "bka", name: "books", parent: "For Sale" },
  BFA: { tag: "bfa", name: "business", parent: "For Sale" },
  CTA: { tag: "cta", name: "cars+trucks", parent: "For Sale" },
  EMA: { tag: "ema", name: "cds/dvd/vhs", parent: "For Sale" },
  MOA: { tag: "moa", name: "cell phones", parent: "For Sale" },
  CLA: { tag: "cla", name: "clothes+acc", parent: "For Sale" },
  CBA: { tag: "cba", name: "collectibles", parent: "For Sale" },
  SYP: { tag: "syp", name: "computer parts", parent: "For Sale" },
  SYA: { tag: "sya", name: "computers", parent: "For Sale" },
  ELA: { tag: "ela", name: "electronics", parent: "For Sale" },
  GRA: { tag: "gra", name: "farm+garden", parent: "For Sale" },
  ZIP: { tag: "zip", name: "free", parent: "For Sale" },
  FUA: { tag: "fua", name: "furniture", parent: "For Sale" },
  GMS: { tag: "gms", name: "garage sale", parent: "For Sale" },
  FOA: { tag: "foa", name: "general", parent: "For Sale" },
  HVA: { tag: "hva", name: "heavy equip", parent: "For Sale" },
  HSA: { tag: "hsa", name: "household", parent: "For Sale" },
  JWA: { tag: "jwa", name: "jewelry", parent: "For Sale" },
  MAA: { tag: "maa", name: "materials", parent: "For Sale" },
  MPA: { tag: "mpa", name: "motorcycle parts", parent: "For Sale" },
  MCA: { tag: "mca", name: "motorcycles", parent: "For Sale" },
  MSA: { tag: "msa", name: "music instr", parent: "For Sale" },
  PHA: { tag: "pha", name: "photo+video", parent: "For Sale" },
  RVA: { tag: "rva", name: "rvs+camp", parent: "For Sale" },
  SGA: { tag: "sga", name: "sporting", parent: "For Sale" },
  TIA: { tag: "tia", name: "tickets", parent: "For Sale" },
  TLA: { tag: "tla", name: "tools", parent: "For Sale" },
  TAA: { tag: "taa", name: "toys+games", parent: "For Sale" },
  TRA: { tag: "tra", name: "trailers", parent: "For Sale" },
  VGA: { tag: "vga", name: "video gaming", parent: "For Sale" },
  WAA: { tag: "waa", name: "wanted", parent: "For Sale" },
  WTA: { tag: "wta", name: "wheels+tires", parent: "For Sale" },
  JJJ: { tag: "jjj", name: "all-jobs", parent: "Jobs" },
  ACC: { tag: "acc", name: "accounting+finance", parent: "Jobs" },
  OFC: { tag: "ofc", name: "admin / office", parent: "Jobs" },
  EGR: { tag: "egr", name: "arch / engineering", parent: "Jobs" },
  MED: { tag: "med", name: "art / media / design", parent: "Jobs" },
  SCI: { tag: "sci", name: "biotech / science", parent: "Jobs" },
  BUS: { tag: "bus", name: "business / mgmt", parent: "Jobs" },
  CSR: { tag: "csr", name: "customer service", parent: "Jobs" },
  EDU: { tag: "edu", name: "education", parent: "Jobs" },
  ETC: { tag: "etc", name: "etc / misc", parent: "Jobs" },
  FBH: { tag: "fbh", name: "food / bev / hosp", parent: "Jobs" },
  LAB: { tag: "lab", name: "general labor", parent: "Jobs" },
  GOV: { tag: "gov", name: "government", parent: "Jobs" },
  HUM: { tag: "hum", name: "human resources", parent: "Jobs" },
  LGL: { tag: "lgl", name: "legal  /  paralegal", parent: "Jobs" },
  MNU: { tag: "mnu", name: "manufacturing", parent: "Jobs" },
  MAR: { tag: "mar", name: "marketing / pr / ad", parent: "Jobs" },
  HEA: { tag: "hea", name: "medical / health", parent: "Jobs" },
  NPO: { tag: "npo", name: "nonprofit sector", parent: "Jobs" },
  REJ: { tag: "rej", name: "real estate", parent: "Jobs" },
  RET: { tag: "ret", name: "retail / wholesale", parent: "Jobs" },
  SLS: { tag: "sls", name: "sales / biz dev", parent: "Jobs" },
  SPA: { tag: "spa", name: "salon / spa / fitness", parent: "Jobs" },
  SEC: { tag: "sec", name: "security", parent: "Jobs" },
  TRD: { tag: "trd", name: "skilled trade / craft", parent: "Jobs" },
  SOF: { tag: "sof", name: "software / qa / dba", parent: "Jobs" },
  SAD: { tag: "sad", name: "systems / network", parent: "Jobs" },
  TCH: { tag: "tch", name: "technical support", parent: "Jobs" },
  TRP: { tag: "trp", name: "transport", parent: "Jobs" },
  TFR: { tag: "tfr", name: "tv / film / video", parent: "Jobs" },
  WEB: { tag: "web", name: "web / info design", parent: "Jobs" },
  WRI: { tag: "wri", name: "writing / editing", parent: "Jobs" },
  GGG: { tag: "ggg", name: "all-gigs", parent: "Gigs" },
  CPG: { tag: "cpg", name: "computer", parent: "Gigs" },
  CRG: { tag: "crg", name: "creative", parent: "Gigs" },
  CWG: { tag: "cwg", name: "crew", parent: "Gigs" },
  DMG: { tag: "dmg", name: "domestic", parent: "Gigs" },
  EVG: { tag: "evg", name: "event", parent: "Gigs" },
  LBG: { tag: "lbg", name: "labor", parent: "Gigs" },
  TLG: { tag: "tlg", name: "talent", parent: "Gigs" },
  WRG: { tag: "wrg", name: "writing", parent: "Gigs" },
  RRR: { tag: "rrr", name: "resumes", parent: "Resumes" },
};
