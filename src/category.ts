export type Category = { url_part: string; type?: string, common_name: string };

export const CraigslistCategories: Category[] = [
  { url_part: "/search/ccc", type: "main", common_name: "all-community" },
  { url_part: "/search/act", common_name: "activities" },
  { url_part: "/search/ats", common_name: "artists" },
  { url_part: "/search/kid", common_name: "childcare" },
  { url_part: "/search/cls", common_name: "classes" },
  { url_part: "/search/eve", common_name: "events" },
  { url_part: "/search/com", common_name: "general" },
  { url_part: "/search/grp", common_name: "groups" },
  { url_part: "/search/vnn", common_name: "local news" },
  { url_part: "/search/laf", common_name: "lost found" },
  { url_part: "/search/mis", common_name: "missed connections" },
  { url_part: "/search/muc", common_name: "musicians" },
  { url_part: "/search/pet", common_name: "pets" },
  { url_part: "/search/pol", common_name: "politics" },
  { url_part: "/search/rnr", common_name: "rants raves" },
  { url_part: "/search/rid", common_name: "rideshare" },
  { url_part: "/search/vol", common_name: "volunteers" },
  { url_part: "/search/bbb", type: "main", common_name: "all-services" },
  { url_part: "/search/aos", common_name: "automotive" },
  { url_part: "/search/bts", common_name: "beauty" },
  { url_part: "/search/cms", common_name: "cell/mobile" },
  { url_part: "/search/cps", common_name: "computer" },
  { url_part: "/search/crs", common_name: "creative" },
  { url_part: "/search/cys", common_name: "cycle" },
  { url_part: "/search/evs", common_name: "event" },
  { url_part: "/search/fgs", common_name: "farm+garden" },
  { url_part: "/search/fns", common_name: "financial" },
  { url_part: "/search/hws", common_name: "health/well" },
  { url_part: "/search/hss", common_name: "household" },
  { url_part: "/search/lbs", common_name: "labor/move" },
  { url_part: "/search/lgs", common_name: "legal" },
  { url_part: "/search/lss", common_name: "lessons" },
  { url_part: "/search/mas", common_name: "marine" },
  { url_part: "/search/pas", common_name: "pet" },
  { url_part: "/search/rts", common_name: "real estate" },
  { url_part: "/search/sks", common_name: "skilled trade" },
  { url_part: "/search/biz", common_name: "sm biz ads" },
  { url_part: "/search/trv", common_name: "travel/vac" },
  { url_part: "/search/wet", common_name: "write/ed/tran" },
  { url_part: "/search/hhh", type: "main", common_name: "all-housing" },
  { url_part: "/search/apa", common_name: "apts / housing" },
  { url_part: "/search/swp", common_name: "housing swap" },
  { url_part: "/search/hsw", common_name: "housing wanted" },
  { url_part: "/search/off", common_name: "office / commercial" },
  { url_part: "/search/prk", common_name: "parking / storage" },
  { url_part: "/search/rea", common_name: "real estate for sale" },
  { url_part: "/search/roo", common_name: "rooms / shared" },
  { url_part: "/search/sha", common_name: "rooms wanted" },
  { url_part: "/search/sub", common_name: "sublets / temporary" },
  { url_part: "/search/vac", common_name: "vacation rentals" },
  { url_part: "/search/sss", type: "main", common_name: "all-for sale" },
  { url_part: "/search/ata", common_name: "antiques" },
  { url_part: "/search/ppa", common_name: "appliances" },
  { url_part: "/search/ara", common_name: "arts+crafts" },
  { url_part: "/search/sna", common_name: "atv/utv/sno" },
  { url_part: "/search/pta", common_name: "auto parts" },
  { url_part: "/search/ava", common_name: "aviation" },
  { url_part: "/search/baa", common_name: "baby+kid" },
  { url_part: "/search/bar", common_name: "barter" },
  { url_part: "/search/haa", common_name: "beauty+hlth" },
  { url_part: "/search/bip", common_name: "bike parts" },
  { url_part: "/search/bia", common_name: "bikes" },
  { url_part: "/search/bpa", common_name: "boat parts" },
  { url_part: "/search/boo", common_name: "boats" },
  { url_part: "/search/bka", common_name: "books" },
  { url_part: "/search/bfa", common_name: "business" },
  { url_part: "/search/cta", common_name: "cars+trucks" },
  { url_part: "/search/ema", common_name: "cds/dvd/vhs" },
  { url_part: "/search/moa", common_name: "cell phones" },
  { url_part: "/search/cla", common_name: "clothes+acc" },
  { url_part: "/search/cba", common_name: "collectibles" },
  { url_part: "/search/syp", common_name: "computer parts" },
  { url_part: "/search/sya", common_name: "computers" },
  { url_part: "/search/ela", common_name: "electronics" },
  { url_part: "/search/gra", common_name: "farm+garden" },
  { url_part: "/search/zip", common_name: "free" },
  { url_part: "/search/fua", common_name: "furniture" },
  { url_part: "/search/gms", common_name: "garage sale" },
  { url_part: "/search/foa", common_name: "general" },
  { url_part: "/search/hva", common_name: "heavy equip" },
  { url_part: "/search/hsa", common_name: "household" },
  { url_part: "/search/jwa", common_name: "jewelry" },
  { url_part: "/search/maa", common_name: "materials" },
  { url_part: "/search/mpa", common_name: "motorcycle parts" },
  { url_part: "/search/mca", common_name: "motorcycles" },
  { url_part: "/search/msa", common_name: "music instr" },
  { url_part: "/search/pha", common_name: "photo+video" },
  { url_part: "/search/rva", common_name: "rvs+camp" },
  { url_part: "/search/sga", common_name: "sporting" },
  { url_part: "/search/tia", common_name: "tickets" },
  { url_part: "/search/tla", common_name: "tools" },
  { url_part: "/search/taa", common_name: "toys+games" },
  { url_part: "/search/tra", common_name: "trailers" },
  { url_part: "/search/vga", common_name: "video gaming" },
  { url_part: "/search/waa", common_name: "wanted" },
  { url_part: "/search/wta", common_name: "wheels+tires" },
  { url_part: "/search/jjj", type: "main", common_name: "all-jobs" },
  { url_part: "/search/acc", common_name: "accounting+finance" },
  { url_part: "/search/ofc", common_name: "admin / office" },
  { url_part: "/search/egr", common_name: "arch / engineering" },
  { url_part: "/search/med", common_name: "art / media / design" },
  { url_part: "/search/sci", common_name: "biotech / science" },
  { url_part: "/search/bus", common_name: "business / mgmt" },
  { url_part: "/search/csr", common_name: "customer service" },
  { url_part: "/search/edu", common_name: "education" },
  { url_part: "/search/etc", common_name: "etc / misc" },
  { url_part: "/search/fbh", common_name: "food / bev / hosp" },
  { url_part: "/search/lab", common_name: "general labor" },
  { url_part: "/search/gov", common_name: "government" },
  { url_part: "/search/hum", common_name: "human resources" },
  { url_part: "/search/lgl", common_name: "legal  /  paralegal" },
  { url_part: "/search/mnu", common_name: "manufacturing" },
  { url_part: "/search/mar", common_name: "marketing / pr / ad" },
  { url_part: "/search/hea", common_name: "medical / health" },
  { url_part: "/search/npo", common_name: "nonprofit sector" },
  { url_part: "/search/rej", common_name: "real estate" },
  { url_part: "/search/ret", common_name: "retail / wholesale" },
  { url_part: "/search/sls", common_name: "sales / biz dev" },
  { url_part: "/search/spa", common_name: "salon / spa / fitness" },
  { url_part: "/search/sec", common_name: "security" },
  { url_part: "/search/trd", common_name: "skilled trade / craft" },
  { url_part: "/search/sof", common_name: "software / qa / dba" },
  { url_part: "/search/sad", common_name: "systems / network" },
  { url_part: "/search/tch", common_name: "technical support" },
  { url_part: "/search/trp", common_name: "transport" },
  { url_part: "/search/tfr", common_name: "tv / film / video" },
  { url_part: "/search/web", common_name: "web / info design" },
  { url_part: "/search/wri", common_name: "writing / editing" },
  { url_part: "/search/ggg", type: "main", common_name: "all-gigs" },
  { url_part: "/search/cpg", common_name: "computer" },
  { url_part: "/search/crg", common_name: "creative" },
  { url_part: "/search/cwg", common_name: "crew" },
  { url_part: "/search/dmg", common_name: "domestic" },
  { url_part: "/search/evg", common_name: "event" },
  { url_part: "/search/lbg", common_name: "labor" },
  { url_part: "/search/tlg", common_name: "talent" },
  { url_part: "/search/wrg", common_name: "writing" },
  { url_part: "/search/rrr", common_name: "resumes" },
];
