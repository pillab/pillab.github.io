( () => {
    var e = {
        419: () => {
            document.addEventListener("DOMContentLoaded", ( () => {
                const e = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);
                e.length > 0 && e.forEach((e => {
                    e.addEventListener("click", ( () => {
                        const t = e.dataset.target
                          , i = document.getElementById(t);
                        e.classList.toggle("is-active"),
                        i.classList.toggle("is-active")
                    }
                    ))
                }
                )),
                document.getElementsByTagName("body")[0].style.visibility = "visible"
            }
            )),
            console.log("SVL loaded.")
        }
    }
      , t = {};
    function i(a) {
        var n = t[a];
        if (void 0 !== n)
            return n.exports;
        var o = t[a] = {
            exports: {}
        };
        return e[a](o, o.exports, i),
        o.exports
    }
    ( () => {
        "use strict";
        i(419);
        const e = {
            ational: "ate",
            tional: "tion",
            enci: "ence",
            anci: "ance",
            izer: "ize",
            bli: "ble",
            alli: "al",
            entli: "ent",
            eli: "e",
            ousli: "ous",
            ization: "ize",
            ation: "ate",
            ator: "ate",
            alism: "al",
            iveness: "ive",
            fulness: "ful",
            ousness: "ous",
            aliti: "al",
            iviti: "ive",
            biliti: "ble",
            logi: "log"
        }
          , t = {
            icate: "ic",
            ative: "",
            alize: "al",
            iciti: "ic",
            ical: "ic",
            ful: "",
            ness: ""
        }
          , a = "[aeiouy]"
          , n = "[^aeiou][^aeiouy]*"
          , o = a + "[aeiou]*"
          , r = "^(" + n + ")?" + o + n
          , s = "^(" + n + ")?" + o + n + "(" + o + ")?$"
          , h = "^(" + n + ")?" + o + n + o + n
          , u = "^(" + n + ")?" + a;
        function l(i) {
            let o, l, f, c, p, d;
            if (i.length < 3)
                return i;
            const g = i.substring(0, 1);
            if ("y" == g && (i = g.toUpperCase() + i.substring(1)),
            f = /^(.+?)(ss|i)es$/,
            c = /^(.+?)([^s])s$/,
            f.test(i) ? i = i.replace(f, "$1$2") : c.test(i) && (i = i.replace(c, "$1$2")),
            f = /^(.+?)eed$/,
            c = /^(.+?)(ed|ing)$/,
            f.test(i)) {
                const e = f.exec(i);
                f = new RegExp(r),
                f.test(e[1]) && (f = /.$/,
                i = i.replace(f, ""))
            } else
                c.test(i) && (o = c.exec(i)[1],
                c = new RegExp(u),
                c.test(o) && (i = o,
                c = /(at|bl|iz)$/,
                p = new RegExp("([^aeiouylsz])\\1$"),
                d = new RegExp("^" + n + a + "[^aeiouwxy]$"),
                c.test(i) ? i += "e" : p.test(i) ? (f = /.$/,
                i = i.replace(f, "")) : d.test(i) && (i += "e")));
            if (f = /^(.+?)y$/,
            f.test(i)) {
                const e = f.exec(i);
                o = e?.[1],
                f = new RegExp(u),
                o && f.test(o) && (i = o + "i")
            }
            if (f = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
            f.test(i)) {
                const t = f.exec(i);
                o = t?.[1],
                l = t?.[2],
                f = new RegExp(r),
                o && f.test(o) && (i = o + e[l])
            }
            if (f = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
            f.test(i)) {
                const e = f.exec(i);
                o = e?.[1],
                l = e?.[2],
                f = new RegExp(r),
                o && f.test(o) && (i = o + t[l])
            }
            if (f = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,
            c = /^(.+?)(s|t)(ion)$/,
            f.test(i)) {
                const e = f.exec(i);
                o = e?.[1],
                f = new RegExp(h),
                o && f.test(o) && (i = o)
            } else if (c.test(i)) {
                const e = c.exec(i);
                o = e?.[1] ?? "" + e?.[2] ?? "",
                c = new RegExp(h),
                c.test(o) && (i = o)
            }
            if (f = /^(.+?)e$/,
            f.test(i)) {
                const e = f.exec(i);
                o = e?.[1],
                f = new RegExp(h),
                c = new RegExp(s),
                p = new RegExp("^" + n + a + "[^aeiouwxy]$"),
                o && (f.test(o) || c.test(o) && !p.test(o)) && (i = o)
            }
            return f = /ll$/,
            c = new RegExp(h),
            f.test(i) && c.test(i) && (f = /.$/,
            i = i.replace(f, "")),
            "y" == g && (i = g.toLowerCase() + i.substring(1)),
            i
        }
        const f = 192
          , c = 383
          , p = [65, 65, 65, 65, 65, 65, 65, 67, 69, 69, 69, 69, 73, 73, 73, 73, 69, 78, 79, 79, 79, 79, 79, null, 79, 85, 85, 85, 85, 89, 80, 115, 97, 97, 97, 97, 97, 97, 97, 99, 101, 101, 101, 101, 105, 105, 105, 105, 101, 110, 111, 111, 111, 111, 111, null, 111, 117, 117, 117, 117, 121, 112, 121, 65, 97, 65, 97, 65, 97, 67, 99, 67, 99, 67, 99, 67, 99, 68, 100, 68, 100, 69, 101, 69, 101, 69, 101, 69, 101, 69, 101, 71, 103, 71, 103, 71, 103, 71, 103, 72, 104, 72, 104, 73, 105, 73, 105, 73, 105, 73, 105, 73, 105, 73, 105, 74, 106, 75, 107, 107, 76, 108, 76, 108, 76, 108, 76, 108, 76, 108, 78, 110, 78, 110, 78, 110, 110, 78, 110, 79, 111, 79, 111, 79, 111, 79, 111, 82, 114, 82, 114, 82, 114, 83, 115, 83, 115, 83, 115, 83, 115, 84, 116, 84, 116, 84, 116, 85, 117, 85, 117, 85, 117, 85, 117, 85, 117, 85, 117, 87, 119, 89, 121, 89, 90, 122, 90, 122, 90, 122, 115]
          , d = ["arabic", "armenian", "bulgarian", "danish", "dutch", "english", "finnish", "french", "german", "greek", "hungarian", "indian", "indonesian", "irish", "italian", "lithuanian", "nepali", "norwegian", "portuguese", "romanian", "russian", "serbian", "slovenian", "spanish", "swedish", "turkish", "ukrainian"];
        function g(e) {
            return JSON.stringify(e, null, 2)
        }
        function m(e, t) {
            return `Invalid property name. Expected a wildcard string ("*") or array containing one of the following properties: ${t.join(", ")}, but got: ${e}.`
        }
        const b = {
            english: ["i", "me", "my", "myself", "we", "us", "our", "ours", "ourselves", "you", "your", "yours", "yourself", "yourselves", "he", "him", "his", "himself", "she", "her", "hers", "herself", "it", "its", "itself", "they", "them", "their", "theirs", "themselves", "what", "which", "who", "whom", "this", "that", "these", "those", "am", "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "having", "do", "does", "did", "doing", "will", "would", "shall", "should", "can", "could", "may", "might", "must", "ought", "i'm", "you're", "he's", "she's", "it's", "we're", "they're", "i've", "you've", "we've", "they've", "i'd", "you'd", "he'd", "she'd", "we'd", "they'd", "i'll", "you'll", "he'll", "she'll", "we'll", "they'll", "isn't", "aren't", "wasn't", "weren't", "hasn't", "haven't", "hadn't", "doesn't", "don't", "didn't", "won't", "wouldn't", "shan't", "shouldn't", "can't", "cannot", "couldn't", "mustn't", "let's", "that's", "who's", "what's", "here's", "there's", "when's", "where's", "why's", "how's", "an", "the", "and", "but", "if", "or", "because", "as", "until", "while", "of", "at", "by", "for", "with", "about", "against", "between", "into", "through", "during", "before", "after", "above", "below", "to", "from", "up", "down", "in", "out", "on", "off", "over", "under", "again", "further", "then", "once", "here", "there", "when", "where", "why", "how", "all", "any", "both", "each", "few", "more", "most", "other", "some", "such", "no", "nor", "not", "only", "own", "same", "so", "than", "too", "very"],
            italian: ["ad", "al", "allo", "ai", "agli", "all", "agl", "alla", "alle", "con", "col", "coi", "da", "dal", "dallo", "dai", "dagli", "dall", "dagl", "dalla", "dalle", "di", "del", "dello", "dei", "degli", "dell", "degl", "della", "delle", "in", "nel", "nello", "nei", "negli", "nell", "negl", "nella", "nelle", "su", "sul", "sullo", "sui", "sugli", "sull", "sugl", "sulla", "sulle", "per", "tra", "contro", "io", "tu", "lui", "lei", "noi", "voi", "loro", "mio", "mia", "miei", "mie", "tuo", "tua", "tuoi", "tue", "suo", "sua", "suoi", "sue", "nostro", "nostra", "nostri", "nostre", "vostro", "vostra", "vostri", "vostre", "mi", "ti", "ci", "vi", "lo", "la", "li", "le", "gli", "ne", "il", "un", "uno", "una", "ma", "ed", "se", "perché", "anche", "come", "dov", "dove", "che", "chi", "cui", "non", "più", "quale", "quanto", "quanti", "quanta", "quante", "quello", "quelli", "quella", "quelle", "questo", "questi", "questa", "queste", "si", "tutto", "tutti", "a", "c", "e", "i", "l", "o", "ho", "hai", "ha", "abbiamo", "avete", "hanno", "abbia", "abbiate", "abbiano", "avrò", "avrai", "avrà", "avremo", "avrete", "avranno", "avrei", "avresti", "avrebbe", "avremmo", "avreste", "avrebbero", "avevo", "avevi", "aveva", "avevamo", "avevate", "avevano", "ebbi", "avesti", "ebbe", "avemmo", "aveste", "ebbero", "avessi", "avesse", "avessimo", "avessero", "avendo", "avuto", "avuta", "avuti", "avute", "sono", "sei", "è", "siamo", "siete", "sia", "siate", "siano", "sarò", "sarai", "sarà", "saremo", "sarete", "saranno", "sarei", "saresti", "sarebbe", "saremmo", "sareste", "sarebbero", "ero", "eri", "era", "eravamo", "eravate", "erano", "fui", "fosti", "fu", "fummo", "foste", "furono", "fossi", "fosse", "fossimo", "fossero", "essendo", "faccio", "fai", "facciamo", "fanno", "faccia", "facciate", "facciano", "farò", "farai", "farà", "faremo", "farete", "faranno", "farei", "faresti", "farebbe", "faremmo", "fareste", "farebbero", "facevo", "facevi", "faceva", "facevamo", "facevate", "facevano", "feci", "facesti", "fece", "facemmo", "faceste", "fecero", "facessi", "facesse", "facessimo", "facessero", "facendo", "sto", "stai", "sta", "stiamo", "stanno", "stia", "stiate", "stiano", "starò", "starai", "starà", "staremo", "starete", "staranno", "starei", "staresti", "starebbe", "staremmo", "stareste", "starebbero", "stavo", "stavi", "stava", "stavamo", "stavate", "stavano", "stetti", "stesti", "stette", "stemmo", "steste", "stettero", "stessi", "stesse", "stessimo", "stessero", "stando"],
            french: ["au", "aux", "avec", "ce", "ces", "dans", "de", "des", "du", "elle", "en", "et", "eux", "il", "je", "la", "le", "leur", "lui", "ma", "mais", "me", "même", "mes", "moi", "mon", "ne", "nos", "notre", "nous", "on", "ou", "par", "pas", "pour", "qu", "que", "qui", "sa", "se", "ses", "son", "sur", "ta", "te", "tes", "toi", "ton", "tu", "un", "une", "vos", "votre", "vous", "c", "d", "j", "l", "à", "m", "n", "s", "t", "y", "", "été", "étée", "étées", "étés", "étant", "suis", "es", "est", "sommes", "êtes", "sont", "serai", "seras", "sera", "serons", "serez", "seront", "serais", "serait", "serions", "seriez", "seraient", "étais", "était", "étions", "étiez", "étaient", "fus", "fut", "fûmes", "fûtes", "furent", "sois", "soit", "soyons", "soyez", "soient", "fusse", "fusses", "fût", "fussions", "fussiez", "fussent", "ayant", "eu", "eue", "eues", "eus", "ai", "as", "avons", "avez", "ont", "aurai", "auras", "aura", "aurons", "aurez", "auront", "aurais", "aurait", "aurions", "auriez", "auraient", "avais", "avait", "avions", "aviez", "avaient", "eut", "eûmes", "eûtes", "eurent", "aie", "aies", "ait", "ayons", "ayez", "aient", "eusse", "eusses", "eût", "eussions", "eussiez", "eussent", "ceci", "cela", "celà", "cet", "cette", "ici", "ils", "les", "leurs", "quel", "quels", "quelle", "quelles", "sans", "soi"],
            spanish: ["de", "la", "que", "el", "en", "y", "a", "los", "del", "se", "las", "por", "un", "para", "con", "no", "una", "su", "al", "lo", "como", "más", "pero", "sus", "le", "ya", "o", "este", "sí", "porque", "esta", "entre", "cuando", "muy", "sin", "sobre", "también", "me", "hasta", "hay", "donde", "quien", "desde", "todo", "nos", "durante", "todos", "uno", "les", "ni", "contra", "otros", "ese", "eso", "ante", "ellos", "e", "esto", "mí", "antes", "algunos", "qué", "unos", "yo", "otro", "otras", "otra", "él", "tanto", "esa", "estos", "mucho", "quienes", "nada", "muchos", "cual", "poco", "ella", "estar", "estas", "algunas", "algo", "nosotros", "mi", "mis", "tú", "te", "ti", "tu", "tus", "ellas", "nosotras", "vosotros", "vosotras", "os", "mío", "mía", "míos", "mías", "tuyo", "tuya", "tuyos", "tuyas", "suyo", "suya", "suyos", "suyas", "nuestro", "nuestra", "nuestros", "nuestras", "vuestro", "vuestra", "vuestros", "vuestras", "esos", "esas", "estoy", "estás", "está", "estamos", "estáis", "están", "esté", "estés", "estemos", "estéis", "estén", "estaré", "estarás", "estará", "estaremos", "estaréis", "estarán", "estaría", "estarías", "estaríamos", "estaríais", "estarían", "estaba", "estabas", "estábamos", "estabais", "estaban", "estuve", "estuviste", "estuvo", "estuvimos", "estuvisteis", "estuvieron", "estuviera", "estuvieras", "estuviéramos", "estuvierais", "estuvieran", "estuviese", "estuvieses", "estuviésemos", "estuvieseis", "estuviesen", "estando", "estado", "estada", "estados", "estadas", "estad", "he", "has", "ha", "hemos", "habéis", "han", "haya", "hayas", "hayamos", "hayáis", "hayan", "habré", "habrás", "habrá", "habremos", "habréis", "habrán", "habría", "habrías", "habríamos", "habríais", "habrían", "había", "habías", "habíamos", "habíais", "habían", "hube", "hubiste", "hubo", "hubimos", "hubisteis", "hubieron", "hubiera", "hubieras", "hubiéramos", "hubierais", "hubieran", "hubiese", "hubieses", "hubiésemos", "hubieseis", "hubiesen", "habiendo", "habido", "habida", "habidos", "habidas", "soy", "eres", "es", "somos", "sois", "son", "sea", "seas", "seamos", "seáis", "sean", "seré", "serás", "será", "seremos", "seréis", "serán", "sería", "serías", "seríamos", "seríais", "serían", "era", "eras", "éramos", "erais", "eran", "fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron", "fuera", "fueras", "fuéramos", "fuerais", "fueran", "fuese", "fueses", "fuésemos", "fueseis", "fuesen", "siendo", "sido", "tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen", "tenga", "tengas", "tengamos", "tengáis", "tengan", "tendré", "tendrás", "tendrá", "tendremos", "tendréis", "tendrán", "tendría", "tendrías", "tendríamos", "tendríais", "tendrían", "tenía", "tenías", "teníamos", "teníais", "tenían", "tuve", "tuviste", "tuvo", "tuvimos", "tuvisteis", "tuvieron", "tuviera", "tuvieras", "tuviéramos", "tuvierais", "tuvieran", "tuviese", "tuvieses", "tuviésemos", "tuvieseis", "tuviesen", "teniendo", "tenido", "tenida", "tenidos", "tenidas", "tened"],
            portuguese: ["de", "a", "o", "que", "e", "do", "da", "em", "um", "para", "com", "não", "uma", "os", "no", "se", "na", "por", "mais", "as", "dos", "como", "mas", "ao", "ele", "das", "à", "seu", "sua", "ou", "quando", "muito", "nos", "já", "eu", "também", "só", "pelo", "pela", "até", "isso", "ela", "entre", "depois", "sem", "mesmo", "aos", "seus", "quem", "nas", "me", "esse", "eles", "você", "essa", "num", "nem", "suas", "meu", "às", "minha", "numa", "pelos", "elas", "qual", "nós", "lhe", "deles", "essas", "esses", "pelas", "este", "dele", "tu", "te", "vocês", "vos", "lhes", "meus", "minhas", "teu", "tua", "teus", "tuas", "nosso", "nossa", "nossos", "nossas", "dela", "delas", "esta", "estes", "estas", "aquele", "aquela", "aqueles", "aquelas", "isto", "aquilo", "estou", "está", "estamos", "estão", "estive", "esteve", "estivemos", "estiveram", "estava", "estávamos", "estavam", "estivera", "estivéramos", "esteja", "estejamos", "estejam", "estivesse", "estivéssemos", "estivessem", "estiver", "estivermos", "estiverem", "hei", "há", "havemos", "hão", "houve", "houvemos", "houveram", "houvera", "houvéramos", "haja", "hajamos", "hajam", "houvesse", "houvéssemos", "houvessem", "houver", "houvermos", "houverem", "houverei", "houverá", "houveremos", "houverão", "houveria", "houveríamos", "houveriam", "sou", "somos", "são", "era", "éramos", "eram", "fui", "foi", "fomos", "foram", "fora", "fôramos", "seja", "sejamos", "sejam", "fosse", "fôssemos", "fossem", "for", "formos", "forem", "serei", "será", "seremos", "serão", "seria", "seríamos", "seriam", "tenho", "tem", "temos", "tém", "tinha", "tínhamos", "tinham", "tive", "teve", "tivemos", "tiveram", "tivera", "tivéramos", "tenha", "tenhamos", "tenham", "tivesse", "tivéssemos", "tivessem", "tiver", "tivermos", "tiverem", "terei", "terá", "teremos", "terão", "teria", "teríamos", "teriam"],
            dutch: ["de", "en", "van", "ik", "te", "dat", "die", "in", "een", "hij", "het", "niet", "zijn", "is", "was", "op", "aan", "met", "als", "voor", "had", "er", "maar", "om", "hem", "dan", "zou", "of", "wat", "mijn", "men", "dit", "zo", "door", "over", "ze", "zich", "bij", "ook", "tot", "je", "mij", "uit", "der", "daar", "haar", "naar", "heb", "hoe", "heeft", "hebben", "deze", "u", "want", "nog", "zal", "me", "zij", "nu", "ge", "geen", "omdat", "iets", "worden", "toch", "al", "waren", "veel", "meer", "doen", "toen", "moet", "ben", "zonder", "kan", "hun", "dus", "alles", "onder", "ja", "eens", "hier", "wie", "werd", "altijd", "doch", "wordt", "wezen", "kunnen", "ons", "zelf", "tegen", "na", "reeds", "wil", "kon", "niets", "uw", "iemand", "geweest", "andere"],
            swedish: ["och", "det", "att", "i", "en", "jag", "hon", "som", "han", "på", "den", "med", "var", "sig", "för", "så", "till", "är", "men", "ett", "om", "hade", "de", "av", "icke", "mig", "du", "henne", "då", "sin", "nu", "har", "inte", "hans", "honom", "skulle", "hennes", "där", "min", "man", "ej", "vid", "kunde", "något", "från", "ut", "när", "efter", "upp", "vi", "dem", "vara", "vad", "över", "än", "dig", "kan", "sina", "här", "ha", "mot", "alla", "under", "någon", "eller", "allt", "mycket", "sedan", "ju", "denna", "själv", "detta", "åt", "utan", "varit", "hur", "ingen", "mitt", "ni", "bli", "blev", "oss", "din", "dessa", "några", "deras", "blir", "mina", "samma", "vilken", "er", "sådan", "vår", "blivit", "dess", "inom", "mellan", "sådant", "varför", "varje", "vilka", "ditt", "vem", "vilket", "sitta", "sådana", "vart", "dina", "vars", "vårt", "våra", "ert", "era", "vilkas"],
            russian: ["и", "в", "во", "не", "что", "он", "на", "я", "с", "со", "как", "а", "то", "все", "она", "так", "его", "но", "да", "ты", "к", "у", "же", "вы", "за", "бы", "по", "только", "ее", "мне", "было", "вот", "от", "меня", "еще", "нет", "о", "из", "ему", "теперь", "когда", "даже", "ну", "вдруг", "ли", "если", "уже", "или", "ни", "быть", "был", "него", "до", "вас", "нибудь", "опять", "уж", "вам", "сказал", "ведь", "там", "потом", "себя", "ничего", "ей", "может", "они", "тут", "где", "есть", "надо", "ней", "для", "мы", "тебя", "их", "чем", "была", "сам", "чтоб", "без", "будто", "человек", "чего", "раз", "тоже", "себе", "под", "жизнь", "будет", "ж", "тогда", "кто", "этот", "говорил", "того", "потому", "этого", "какой", "совсем", "ним", "здесь", "этом", "один", "почти", "мой", "тем", "чтобы", "нее", "кажется", "сейчас", "были", "куда", "зачем", "сказать", "всех", "никогда", "сегодня", "можно", "при", "наконец", "два", "об", "другой", "хоть", "после", "над", "больше", "тот", "через", "эти", "нас", "про", "всего", "них", "какая", "много", "разве", "сказала", "три", "эту", "моя", "впрочем", "хорошо", "свою", "этой", "перед", "иногда", "лучше", "чуть", "том", "нельзя", "такой", "им", "более", "всегда", "конечно", "всю", "между"],
            norwegian: ["og", "i", "jeg", "det", "at", "en", "et", "den", "til", "er", "som", "på", "de", "med", "han", "av", "ikke", "ikkje", "der", "så", "var", "meg", "seg", "men", "ett", "har", "om", "vi", "min", "mitt", "ha", "hadde", "hun", "nå", "over", "da", "ved", "fra", "du", "ut", "sin", "dem", "oss", "opp", "man", "kan", "hans", "hvor", "eller", "hva", "skal", "selv", "sjøl", "her", "alle", "vil", "bli", "ble", "blei", "blitt", "kunne", "inn", "når", "være", "kom", "noen", "noe", "ville", "dere", "som", "deres", "kun", "ja", "etter", "ned", "skulle", "denne", "for", "deg", "si", "sine", "sitt", "mot", "å", "meget", "hvorfor", "dette", "disse", "uten", "hvordan", "ingen", "din", "ditt", "blir", "samme", "hvilken", "hvilke", "sånn", "inni", "mellom", "vår", "hver", "hvem", "vors", "hvis", "både", "bare", "enn", "fordi", "før", "mange", "også", "slik", "vært", "være", "båe", "begge", "siden", "dykk", "dykkar", "dei", "deira", "deires", "deim", "di", "då", "eg", "ein", "eit", "eitt", "elles", "honom", "hjå", "ho", "hoe", "henne", "hennar", "hennes", "hoss", "hossen", "ikkje", "ingi", "inkje", "korleis", "korso", "kva", "kvar", "kvarhelst", "kven", "kvi", "kvifor", "me", "medan", "mi", "mine", "mykje", "no", "nokon", "noka", "nokor", "noko", "nokre", "si", "sia", "sidan", "so", "somt", "somme", "um", "upp", "vere", "vore", "verte", "vort", "varte", "vart"],
            german: ["aber", "alle", "allem", "allen", "aller", "alles", "als", "also", "am", "an", "ander", "andere", "anderem", "anderen", "anderer", "anderes", "anderm", "andern", "anderr", "anders", "auch", "auf", "aus", "bei", "bin", "bis", "bist", "da", "damit", "dann", "der", "den", "des", "dem", "die", "das", "daß", "derselbe", "derselben", "denselben", "desselben", "demselben", "dieselbe", "dieselben", "dasselbe", "dazu", "dein", "deine", "deinem", "deinen", "deiner", "deines", "denn", "derer", "dessen", "dich", "dir", "du", "dies", "diese", "diesem", "diesen", "dieser", "dieses", "doch", "dort", "durch", "ein", "eine", "einem", "einen", "einer", "eines", "einig", "einige", "einigem", "einigen", "einiger", "einiges", "einmal", "er", "ihn", "ihm", "es", "etwas", "euer", "eure", "eurem", "euren", "eurer", "eures", "für", "gegen", "gewesen", "hab", "habe", "haben", "hat", "hatte", "hatten", "hier", "hin", "hinter", "ich", "mich", "mir", "ihr", "ihre", "ihrem", "ihren", "ihrer", "ihres", "euch", "im", "in", "indem", "ins", "ist", "jede", "jedem", "jeden", "jeder", "jedes", "jene", "jenem", "jenen", "jener", "jenes", "jetzt", "kann", "kein", "keine", "keinem", "keinen", "keiner", "keines", "können", "könnte", "machen", "man", "manche", "manchem", "manchen", "mancher", "manches", "mein", "meine", "meinem", "meinen", "meiner", "meines", "mit", "muss", "musste", "nach", "nicht", "nichts", "noch", "nun", "nur", "ob", "oder", "ohne", "sehr", "sein", "seine", "seinem", "seinen", "seiner", "seines", "selbst", "sich", "sie", "ihnen", "sind", "so", "solche", "solchem", "solchen", "solcher", "solches", "soll", "sollte", "sondern", "sonst", "über", "um", "und", "uns", "unse", "unsem", "unsen", "unser", "unses", "unter", "viel", "vom", "von", "vor", "während", "war", "waren", "warst", "was", "weg", "weil", "weiter", "welche", "welchem", "welchen", "welcher", "welches", "wenn", "werde", "werden", "wie", "wieder", "will", "wir", "wird", "wirst", "wo", "wollen", "wollte", "würde", "würden", "zu", "zum", "zur", "zwar", "zwischen"],
            danish: ["og", "i", "jeg", "det", "at", "en", "den", "til", "er", "som", "på", "de", "med", "han", "af", "for", "ikke", "der", "var", "mig", "sig", "men", "et", "har", "om", "vi", "min", "havde", "ham", "hun", "nu", "over", "da", "fra", "du", "ud", "sin", "dem", "os", "op", "man", "hans", "hvor", "eller", "hvad", "skal", "selv", "her", "alle", "vil", "blev", "kunne", "ind", "når", "være", "dog", "noget", "ville", "jo", "deres", "efter", "ned", "skulle", "denne", "end", "dette", "mit", "også", "under", "have", "dig", "anden", "hende", "mine", "alt", "meget", "sit", "sine", "vor", "mod", "disse", "hvis", "din", "nogle", "hos", "blive", "mange", "ad", "bliver", "hendes", "været", "thi", "jer", "sådan"],
            finnish: ["olla", "olen", "olet", "on", "olemme", "olette", "ovat", "ole", "oli", "olisi", "olisit", "olisin", "olisimme", "olisitte", "olisivat", "olit", "olin", "olimme", "olitte", "olivat", "ollut", "olleet", "en", "et", "ei", "emme", "ette", "eivät", "minä", "minun", "minut", "minua", "minussa", "minusta", "minuun", "minulla", "minulta", "minulle", "sinä", "sinun", "sinut", "sinua", "sinussa", "sinusta", "sinuun", "sinulla", "sinulta", "sinulle", "hän", "hänen", "hänet", "häntä", "hänessä", "hänestä", "häneen", "hänellä", "häneltä", "hänelle", "me", "meidän", "meidät", "meitä", "meissä", "meistä", "meihin", "meillä", "meiltä", "meille", "te", "teidän", "teidät", "teitä", "teissä", "teistä", "teihin", "teillä", "teiltä", "teille", "he", "heidän", "heidät", "heitä", "heissä", "heistä", "heihin", "heillä", "heiltä", "heille", "tämä", "tämän", "tätä", "tässä", "tästä", "tähän", "tällä", "tältä", "tälle", "tänä", "täksi", "tuo", "tuon", "tuota", "tuossa", "tuosta", "tuohon", "tuolla", "tuolta", "tuolle", "tuona", "tuoksi", "se", "sen", "sitä", "siinä", "siitä", "siihen", "sillä", "siltä", "sille", "sinä", "siksi", "nämä", "näiden", "näitä", "näissä", "näistä", "näihin", "näillä", "näiltä", "näille", "näinä", "näiksi", "nuo", "noiden", "noita", "noissa", "noista", "noihin", "noilla", "noilta", "noille", "noina", "noiksi", "ne", "niiden", "niitä", "niissä", "niistä", "niihin", "niillä", "niiltä", "niille", "niinä", "niiksi", "kuka", "kenen", "kenet", "ketä", "kenessä", "kenestä", "keneen", "kenellä", "keneltä", "kenelle", "kenenä", "keneksi", "ketkä", "keiden", "ketkä", "keitä", "keissä", "keistä", "keihin", "keillä", "keiltä", "keille", "keinä", "keiksi", "mikä", "minkä", "minkä", "mitä", "missä", "mistä", "mihin", "millä", "miltä", "mille", "minä", "miksi", "mitkä", "joka", "jonka", "jota", "jossa", "josta", "johon", "jolla", "jolta", "jolle", "jona", "joksi", "jotka", "joiden", "joita", "joissa", "joista", "joihin", "joilla", "joilta", "joille", "joina", "joiksi", "että", "ja", "jos", "koska", "kuin", "mutta", "niin", "sekä", "sillä", "tai", "vaan", "vai", "vaikka", "kanssa", "mukaan", "noin", "poikki", "yli", "kun", "niin", "nyt", "itse"]
        }
          , x = Object.keys(b)
          , v = {
            dutch: /[^A-Za-zàèéìòóù0-9_'-]+/gim,
            english: /[^A-Za-zàèéìòóù0-9_'-]+/gim,
            french: /[^a-z0-9äâàéèëêïîöôùüûœç-]+/gim,
            italian: /[^A-Za-zàèéìòóù0-9_'-]+/gim,
            norwegian: /[^a-z0-9_æøåÆØÅäÄöÖüÜ]+/gim,
            portuguese: /[^a-z0-9à-úÀ-Ú]/gim,
            russian: /[^a-z0-9а-яА-ЯёЁ]+/gim,
            spanish: /[^a-z0-9A-Zá-úÁ-ÚñÑüÜ]+/gim,
            swedish: /[^a-z0-9_åÅäÄöÖüÜ-]+/gim,
            german: /[^a-z0-9A-ZäöüÄÖÜß]+/gim,
            finnish: /[^a-z0-9äöÄÖ]+/gim,
            danish: /[^a-z0-9æøåÆØÅ]+/gim,
            hungarian: /[^a-z0-9áéíóöőúüűÁÉÍÓÖŐÚÜŰ]+/gim,
            romanian: /[^a-z0-9ăâîșțĂÂÎȘȚ]+/gim,
            serbian: /[^a-z0-9čćžšđČĆŽŠĐ]+/gim,
            turkish: /[^a-z0-9çÇğĞıİöÖşŞüÜ]+/gim,
            lithuanian: /[^a-z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ]+/gim,
            arabic: /[^a-z0-9أ-ي]+/gim,
            nepali: /[^a-z0-9अ-ह]+/gim,
            irish: /[^a-z0-9áéíóúÁÉÍÓÚ]+/gim,
            indian: /[^a-z0-9अ-ह]+/gim,
            armenian: /[^a-z0-9ա-ֆ]+/gim,
            greek: /[^a-z0-9α-ωά-ώ]+/gim,
            indonesian: /[^a-z0-9]+/gim,
            ukrainian: /[^a-z0-9а-яА-ЯіїєІЇЄ]+/gim,
            slovenian: /[^a-z0-9čžšČŽŠ]+/gim,
            bulgarian: /[^a-z0-9а-яА-Я]+/gim
        }
          , C = new Map;
        function F(e) {
            if (!d.includes(e))
                throw new Error(`Language "${e}" is not supported.\nSupported languages are:\n - ${d.join("\n - ")}`)
        }
        function S(e, t="english", i=!1, a=P(t)) {
            if ("string" != typeof e)
                return [e];
            const n = v[t]
              , o = function(e) {
                for (; "" === e[e.length - 1]; )
                    e.pop();
                for (; "" === e[0]; )
                    e.shift();
                return e
            }(e.toLowerCase().split(n).map((e => function(e, t, i) {
                const a = `${t}:${e}`;
                if (C.has(a))
                    return C.get(a);
                if ((null == i ? void 0 : i.enableStopWords) && i.customStopWords.includes(e)) {
                    const e = "";
                    return C.set(a, e),
                    e
                }
                return (null == i ? void 0 : i.enableStemming) && "function" == typeof (null == i ? void 0 : i.stemmingFn) && (e = null == i ? void 0 : i.stemmingFn(e)),
                e = function(e) {
                    const t = [];
                    for (let a = 0; a < e.length; a++)
                        t[a] = (i = e.charCodeAt(a)) < f || i > c ? i : p[i - f] || i;
                    var i;
                    return String.fromCharCode(...t)
                }(e),
                C.set(a, e),
                e
            }(e, t, a))).filter(Boolean));
            return i ? o : Array.from(new Set(o))
        }
        function P(e, t={}) {
            let i, a = [], n = [], o = S;
            if (null == t ? void 0 : t.tokenizerFn) {
                if ("function" != typeof t.tokenizerFn)
                    throw Error("tokenizer.tokenizerFn must be a function.");
                o = t.tokenizerFn
            } else {
                if (null == t ? void 0 : t.stemmingFn) {
                    if ("function" != typeof t.stemmingFn)
                        throw Error("tokenizer.stemmingFn property must be a function.");
                    i = t.stemmingFn
                } else
                    i = l;
                if (x.includes(e) && (a = b[e] ?? []),
                null == t ? void 0 : t.customStopWords)
                    switch (typeof t.customStopWords) {
                    case "function":
                        n = t.customStopWords(a);
                        break;
                    case "object":
                        if (!Array.isArray(t.customStopWords))
                            throw Error("Custom stop words must be a function or an array of strings.");
                        if (n = t.customStopWords,
                        n.some((e => "string" != typeof e)))
                            throw Error("Custom stop words array must only contain strings.");
                        break;
                    default:
                        throw Error("Custom stop words must be a function or an array of strings.")
                    }
            }
            return {
                enableStopWords: (null == t ? void 0 : t.enableStopWords) ?? !0,
                enableStemming: (null == t ? void 0 : t.enableStemming) ?? !0,
                stemmingFn: i,
                customStopWords: n ?? a,
                tokenizerFn: o,
                assertSupportedLanguage: t.assertSupportedLanguage ?? F
            }
        }
        const D = Date.now().toString().slice(5);
        let T = 0;
        const y = BigInt(1e3)
          , A = BigInt(1e6)
          , L = BigInt(1e9);
        function w() {
            return "undefined" != typeof process && void 0 !== process.hrtime ? process.hrtime.bigint() : "undefined" != typeof performance ? BigInt(Math.floor(1e6 * performance.now())) : BigInt(0)
        }
        function R() {
            return `${D}-${T++}`
        }
        function j(e, t) {
            return void 0 === Object.hasOwn ? Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0 : Object.hasOwn(e, t) ? e[t] : void 0
        }
        function _(e, t) {
            return t[1] - e[1]
        }
        function M(e, t) {
            return t.split(".").reduce(( (e, t) => e && "object" == typeof e ? e[t] : void 0), e)
        }
        function V(e=!1, t="", i="") {
            const a = {
                id: R(),
                key: i,
                subWord: t,
                parent: null,
                children: {},
                docs: [],
                end: e,
                word: ""
            };
            return Object.defineProperty(a, "toJSON", {
                value: W
            }),
            a
        }
        function k(e, t) {
            e.parent = t.id,
            e.word = t.word + e.subWord
        }
        function I(e, t) {
            e.docs.push(t)
        }
        function W() {
            const {word: e, subWord: t, children: i, docs: a, end: n} = this;
            return {
                word: e,
                subWord: t,
                children: i,
                docs: a,
                end: n
            }
        }
        const E = {
            UNBALANCED_RIGHT: 1,
            SLIGHTLY_UNBALANCED_RIGHT: 2,
            BALANCED: 3,
            SLIGHTLY_UNBALANCED_LEFT: 4,
            UNBALANCED_LEFT: 5
        };
        function J(e) {
            return e ? e.height : -1
        }
        function B(e) {
            const t = e.right;
            return e.right = t.left,
            t.left = e,
            e.height = Math.max(J(e.left), J(e.right)) + 1,
            t.height = Math.max(J(t.left), J(t.right)) + 1,
            t
        }
        function G(e) {
            const t = e.left;
            return e.left = t.right,
            t.right = e,
            e.height = Math.max(J(e.left), J(e.right)) + 1,
            t.height = Math.max(J(t.left), J(t.right)) + 1,
            t
        }
        function H(e, t) {
            return function(e, t) {
                return {
                    key: e,
                    value: t,
                    left: null,
                    right: null,
                    height: 0
                }
            }(e, t)
        }
        function N(e, t, i) {
            if (!e)
                return H(t, i);
            if (t < e.key)
                e.left = N(e.left, t, i);
            else {
                if (!(t > e.key))
                    return e.value = e.value.concat(i),
                    e;
                e.right = N(e.right, t, i)
            }
            const a = function(e) {
                switch (J(e.left) - J(e.right)) {
                case -2:
                    return E.UNBALANCED_RIGHT;
                case -1:
                    return E.SLIGHTLY_UNBALANCED_RIGHT;
                case 1:
                    return E.SLIGHTLY_UNBALANCED_LEFT;
                case 2:
                    return E.UNBALANCED_LEFT;
                default:
                    return E.BALANCED
                }
            }(e);
            return a === E.UNBALANCED_LEFT && (t < e.left.key || (e.left = B(e.left)),
            e = G(e)),
            a === E.UNBALANCED_RIGHT && (t > e.right.key || (e.right = G(e.right)),
            e = B(e)),
            e
        }
        function O(e, t) {
            return e ? e.key === t ? e.value : t < e.key ? e.left ? O(e.left, t) : null : e.right ? O(e.right, t) : null : null
        }
        function z(e, t, i) {
            if (!e)
                return [];
            const a = [];
            return function e(n) {
                n && (n.key > t && e(n.left),
                n.key >= t && n.key <= i && a.push(...n.value),
                n.key < i && e(n.right))
            }(e),
            a
        }
        function K(e, t, i=!1) {
            if (!e)
                return [];
            const a = [];
            return function e(n) {
                n && (i && n.key >= t && a.push(...n.value),
                !i && n.key > t && a.push(...n.value),
                e(n.left),
                e(n.right))
            }(e),
            a
        }
        function Y(e, t, i=!1) {
            if (!e)
                return [];
            const a = [];
            return function e(n) {
                n && (i && n.key <= t && a.push(...n.value),
                !i && n.key < t && a.push(...n.value),
                e(n.left),
                e(n.right))
            }(e),
            a
        }
        const Z = ["afterInsert"];
        async function X(e, ...t) {
            const i = Array.isArray(e) ? e : [e];
            for (let e = 0; e < i.length; e++)
                await i[e].apply(this, t)
        }
        function U(e) {
            if (0 === e.length)
                return [];
            for (let t = 1; t < e.length; t++)
                if (e[t].length < e[0].length) {
                    const i = e[0];
                    e[0] = e[t],
                    e[t] = i
                }
            const t = new Map;
            for (const i of e[0])
                t.set(i[0], [1, i[1]]);
            const i = e.length;
            for (let a = 1; a < i; a++) {
                let i = 0;
                for (const n of e[a]) {
                    const e = n[0] ?? ""
                      , [o,r] = t.get(e) ?? [0, 0];
                    o === a && (t.set(e, [o + 1, r + n[1]]),
                    i++)
                }
                if (0 === i)
                    return []
            }
            const a = [];
            for (const [e,[n,o]] of t)
                n === i && a.push([e, o]);
            return a
        }
        function q(e, t) {
            if (0 === t)
                throw new Error("Boost value must be a number greater than, or less than 0.");
            const i = {}
              , a = e.length;
            for (let n = 0; n < a; n++) {
                const a = e[n]
                  , o = a.length;
                for (let e = 0; e < o; e++) {
                    const [n,o] = a[e]
                      , r = o * t;
                    n in i ? i[n] *= 1.5 + r : i[n] = r
                }
            }
            return Object.entries(i).sort(( (e, t) => t[1] - e[1]))
        }
        function $(e, t, i, a, n, o) {
            const {k: r, b: s, d: h} = o;
            return Math.log(1 + (i - t + .5) / (t + .5)) * (h + e * (r + 1)) / (e + r * (1 - s + s * a / n))
        }
        async function Q(e) {
            var t, i, a, n, o;
            const r = (null == e || null === (t = e.defaultLanguage) || void 0 === t ? void 0 : t.toLowerCase()) ?? "english"
              , s = P(r, (null === (i = e.components) || void 0 === i ? void 0 : i.tokenizer) ?? {});
            s.assertSupportedLanguage(r),
            function(e) {
                if (e) {
                    if ("object" != typeof e)
                        throw new Error("Invalid hooks object.");
                    const t = Object.keys(e).filter((e => !Z.includes(e)));
                    if (t.length)
                        throw new Error(function(e) {
                            return `The following hooks aren't supported. Hooks: ${e}`
                        }(t))
                }
            }(e.hooks);
            const h = {
                defaultLanguage: r,
                schema: e.schema,
                docs: {},
                docsCount: 0,
                index: {},
                hooks: e.hooks || {},
                edge: e.edge ?? !1,
                frequencies: {},
                tokenOccurrencies: {},
                avgFieldLength: {},
                fieldLengths: {},
                components: {
                    elapsed: (null === (a = e.components) || void 0 === a ? void 0 : a.elapsed) ?? {},
                    tokenizer: s,
                    algorithms: {
                        intersectTokenScores: (null === (n = e.components) || void 0 === n || null === (o = n.algorithms) || void 0 === o ? void 0 : o.intersectTokenScores) ?? U
                    }
                }
            };
            return ee(h, e.schema),
            h
        }
        function ee(e, t, i="") {
            for (const a of Object.keys(t)) {
                const n = typeof a
                  , o = "object" == typeof t[a];
                if ("string" !== n)
                    throw new Error(`Invalid schema type. Expected string or object, but got ${n}.`);
                const r = `${i}${a}`;
                if (o)
                    ee(e, t[a], `${r}.`);
                else {
                    if ("string" === t[a]) {
                        e.index[r] = V(),
                        e.avgFieldLength[r] = 0;
                        continue
                    }
                    if ("number" === t[a]) {
                        e.index[r] = H(0, []);
                        continue
                    }
                    if ("boolean" === t[a]) {
                        e.index[r] = {
                            true: [],
                            false: []
                        };
                        continue
                    }
                }
            }
        }
        var te;
        const ie = Symbol("lyra.insertions")
          , ae = (null === (te = globalThis.process) || void 0 === te ? void 0 : te.emitWarning) ?? function(e, t) {
            console.warn(`[WARNING] [${t.code}] ${e}`)
        }
        ;
        function ne(e, t, i) {
            for (let a = 0; a < t.length; a++) {
                const n = t[a]
                  , o = t.substring(a)
                  , r = e.children[n];
                if (!(n in e.children)) {
                    const t = V(!0, o, n);
                    return I(t, i),
                    e.children[n] = t,
                    void k(t, e)
                }
                {
                    const s = r.subWord
                      , h = s.length
                      , u = se(s, o)
                      , l = u.length
                      , f = s[l];
                    if (s === o)
                        return I(r, i),
                        void (r.end = !0);
                    if (l < h && l === o.length) {
                        const t = V(!0, o, n);
                        t.children[f] = r;
                        const i = t.children[f];
                        return i.subWord = s.substring(l),
                        i.key = f,
                        e.children[n] = t,
                        k(t, e),
                        void k(i, t)
                    }
                    if (l < h && l < o.length) {
                        const h = V(!1, u, n);
                        h.children[f] = r,
                        e.children[n] = h;
                        const c = h.children[f];
                        c.subWord = s.substring(l),
                        c.key = f;
                        const p = o[l]
                          , d = V(!0, t.substring(a + l), p);
                        return I(d, i),
                        h.children[p] = d,
                        k(h, e),
                        k(d, h),
                        void k(c, h)
                    }
                    a += h - 1,
                    e = r
                }
            }
        }
        function oe(e, {term: t, exact: i, tolerance: a}) {
            for (let i = 0; i < t.length; i++) {
                const n = t[i];
                if (!(n in e.children))
                    return {};
                {
                    const o = e.children[n]
                      , r = o.subWord
                      , s = t.substring(i)
                      , h = se(r, s).length;
                    if (h !== r.length && h !== s.length) {
                        if (a)
                            break;
                        return {}
                    }
                    i += o.subWord.length - 1,
                    e = o
                }
            }
            const n = {};
            return re(e, n, t, i, a),
            n
        }
        function re(e, t, i, a, n) {
            if (e.end) {
                const {word: o, docs: r} = e;
                if (a && o !== i)
                    return {};
                if (j(t, o) || (n ? Math.abs(i.length - o.length) <= n && function(e, t, i) {
                    const a = function(e, t, i) {
                        if (e === t)
                            return 0;
                        const a = e;
                        e.length > t.length && (e = t,
                        t = a);
                        let n = e.length
                          , o = t.length;
                        for (; n > 0 && e.charCodeAt(~-n) === t.charCodeAt(~-o); )
                            n--,
                            o--;
                        if (!n)
                            return o > i ? -1 : o;
                        let r = 0;
                        for (; r < n && e.charCodeAt(r) === t.charCodeAt(r); )
                            r++;
                        if (n -= r,
                        o -= r,
                        0 === n)
                            return o > i ? -1 : o;
                        const s = o - n;
                        if (i > o)
                            i = o;
                        else if (s > i)
                            return -1;
                        let h = 0;
                        const u = []
                          , l = [];
                        for (; h < i; )
                            l[h] = t.charCodeAt(r + h),
                            u[h] = ++h;
                        for (; h < o; )
                            l[h] = t.charCodeAt(r + h),
                            u[h++] = i + 1;
                        const f = i - s
                          , c = i < o;
                        let p = 0
                          , d = i
                          , g = 0
                          , m = 0
                          , b = 0
                          , x = 0
                          , v = 0;
                        for (h = 0; h < n; h++) {
                            for (m = h,
                            g = h + 1,
                            x = e.charCodeAt(r + h),
                            p += h > f ? 1 : 0,
                            d += d < o ? 1 : 0,
                            v = p; v < d; v++)
                                b = g,
                                g = m,
                                m = u[v],
                                x !== l[v] && (m < g && (g = m),
                                b < g && (g = b),
                                g++),
                                u[v] = g;
                            if (c && u[h + s] > i)
                                return -1
                        }
                        return g <= i ? g : -1
                    }(e, t, i);
                    return {
                        distance: a,
                        isBounded: a >= 0
                    }
                }(i, o, n).isBounded && (t[o] = []) : t[o] = []),
                j(t, o) && r.length) {
                    const e = new Set(t[o])
                      , i = r.length;
                    for (let t = 0; t < i; t++)
                        e.add(r[t]);
                    t[o] = Array.from(e)
                }
            }
            for (const o of Object.keys(e.children))
                re(e.children[o], t, i, a, n);
            return t
        }
        function se(e, t) {
            let i = "";
            const a = Math.min(e.length, t.length);
            for (let n = 0; n < a; n++) {
                if (e[n] !== t[n])
                    return i;
                i += e[n]
            }
            return i
        }
        function he(e, t) {
            if (!ue(e, t))
                throw new Error((i = e,
                `Invalid document structure. \nLyra has been initialized with the following schema: \n\n${g(t)}\n\nbut found the following doc:\n\n${g(i)}`));
            var i
        }
        function ue(e, t) {
            for (const i in e)
                if (i in t)
                    if ("object" == typeof e[i])
                        ue(e[i], t);
                    else if (typeof e[i] !== t[i])
                        return !1;
            return !0
        }
        async function le(e, t, i) {
            var a, n, o, r;
            i = {
                language: e.defaultLanguage,
                ...i
            };
            const s = await async function(e, t) {
                let i;
                if (null == t ? void 0 : t.id)
                    i = await t.id(e);
                else if (e.id && "string" == typeof e.id)
                    i = e.id;
                else {
                    if (e.id && "string" != typeof e.id)
                        throw new TypeError(`"id" must be of type "string". Got "${typeof e.id}" instead.`);
                    i = R()
                }
                return i
            }(t, i);
            return null === (a = e.components) || void 0 === a || null === (n = a.tokenizer) || void 0 === n || null === (o = n.assertSupportedLanguage) || void 0 === o || o.call(n, i.language),
            he(t, e.schema),
            e.docs[s] = t,
            e.docsCount++,
            ce(e, t, s, i, void 0, null === (r = e.components) || void 0 === r ? void 0 : r.tokenizer),
            function(e) {
                const t = e;
                "number" != typeof t[ie] && (queueMicrotask(( () => {
                    t[ie] = void 0
                }
                )),
                t[ie] = 0),
                t[ie] > 1e3 ? (ae("Lyra's insert operation is synchronous. Please avoid inserting a large number of document in a single operation in order not to block the main thread.", {
                    code: "LYRA0001"
                }),
                t[ie] = -1) : t[ie] >= 0 && t[ie]++
            }(e),
            e.hooks.afterInsert && await X.call(e, e.hooks.afterInsert, s),
            {
                id: s
            }
        }
        async function fe(e, t, i) {
            const a = (null == i ? void 0 : i.batchSize) ?? 1e3;
            return new Promise(( (n, o) => {
                let r = 0;
                setTimeout((async function s() {
                    const h = t.slice(r * a, (r + 1) * a);
                    if (r++,
                    !h.length)
                        return n();
                    for (const t of h)
                        try {
                            await le(e, t, i)
                        } catch (e) {
                            o(e)
                        }
                    setTimeout(s, 0)
                }
                ), 0)
            }
            ))
        }
        function ce(e, t, i, a, n="", o, r=e.schema) {
            a = {
                language: e.defaultLanguage,
                ...a
            };
            const {index: s, frequencies: h, tokenOccurrencies: u} = e;
            for (const l of Object.keys(t)) {
                const f = "object" == typeof t[l]
                  , c = "object" == typeof r[l]
                  , p = `${n}${l}`;
                if (f && l in r && c && ce(e, t[l], i, a, p + ".", o, r[l]),
                "number" == typeof t[l] && l in r && !c && N(e.index[p], t[l], [i]),
                "boolean" == typeof t[l] && l in r && !c) {
                    const a = t[l].toString();
                    e.index[p][a].push(i)
                }
                if ("string" == typeof t[l] && l in r && !c) {
                    const n = s[p]
                      , r = o.tokenizerFn(t[l], a.language, !1, o);
                    p in h || (h[p] = {}),
                    p in u || (u[p] = {}),
                    i in h[p] || (h[p][i] = {}),
                    p in e.fieldLengths || (e.fieldLengths[p] = {}),
                    e.fieldLengths[p][i] = r.length,
                    e.avgFieldLength[p] = ((e.avgFieldLength[p] ?? 0) * (e.docsCount - 1) + r.length) / e.docsCount;
                    for (const e of r) {
                        let t = 0;
                        for (const i of r)
                            i === e && t++;
                        const a = t / r.length;
                        h[p][i][e] = a,
                        e in u[p] || (u[p][e] = 0),
                        u[p][e] = (u[p][e] ?? 0) + 1,
                        ne(n, e, i)
                    }
                }
            }
        }
        const pe = new Map;
        function de(e, t) {
            if (pe.has(t))
                return pe.get(t);
            const i = M(e, t);
            return pe.set(t, i),
            i
        }
        function ge(e="desc", t, i) {
            return "asc" === e.toLowerCase() ? t[1] - i[1] : i[1] - t[1]
        }
        async function me(e, t, i) {
            var a, n;
            i || (i = e.defaultLanguage),
            (null === (a = e.components) || void 0 === a ? void 0 : a.tokenizer) || (e.components = {
                ...e.components ?? {},
                tokenizer: P(i)
            }),
            t.relevance = function(e=xe) {
                return Object.assign({}, xe, e)
            }(t.relevance);
            const o = t.facets && Object.keys(t.facets).length > 0
              , {limit: r=10, offset: s=0, exact: h=!1, term: u, properties: l} = t
              , f = e.components.tokenizer.tokenizerFn(u, i, !1, e.components.tokenizer)
              , c = function(e, t) {
                const i = Object.keys(e.index);
                if (!t)
                    return i;
                if ("string" == typeof t) {
                    if ("*" !== t)
                        throw new Error(m(t, i));
                    return i
                }
                for (const e of t)
                    if (!i.includes(e))
                        throw new Error(m(e, i));
                return t
            }(e, l)
              , p = Array.from({
                length: r
            })
              , d = e.docsCount
              , g = w()
              , b = Object.keys(t.where ?? {}).length > 0;
            let x = [];
            b && (x = function(e, t) {
                const i = Object.keys(e)
                  , a = i.reduce(( (e, t) => ({
                    [t]: [],
                    ...e
                })), {});
                for (const o of i) {
                    const i = e[o]
                      , r = Object.keys(i);
                    if (r.length > 1)
                        throw new Error(`You can only use one operation per filter. Found ${(n = r).length}: ${n.join(", ")}`);
                    if ("boolean" == typeof i) {
                        const e = t.index[o][i.toString()];
                        a[o].push(...e)
                    }
                    const s = r[0]
                      , h = i[s]
                      , u = t.index[o];
                    switch (s) {
                    case "gt":
                        {
                            const e = K(u, h, !1);
                            a[o].push(...e);
                            break
                        }
                    case "gte":
                        {
                            const e = K(u, h, !0);
                            a[o].push(...e);
                            break
                        }
                    case "lt":
                        {
                            const e = Y(u, h, !1);
                            a[o].push(...e);
                            break
                        }
                    case "lte":
                        {
                            const e = Y(u, h, !0);
                            a[o].push(...e);
                            break
                        }
                    case "eq":
                        {
                            const e = O(u, h) ?? [];
                            a[o].push(...e);
                            break
                        }
                    case "between":
                        {
                            const e = z(u, h[0], h[1]);
                            a[o].push(...e)
                        }
                    }
                }
                var n;
                return function(e) {
                    if (0 === e.length)
                        return [];
                    for (let t = 1; t < e.length; t++)
                        if (e[t].length < e[0].length) {
                            const i = e[0];
                            e[0] = e[t],
                            e[t] = i
                        }
                    const t = new Map;
                    for (const i of e[0])
                        t.set(i, 1);
                    for (let i = 1; i < e.length; i++) {
                        let a = 0;
                        for (const n of e[i]) {
                            const e = t.get(n);
                            e === i && (t.set(n, e + 1),
                            a++)
                        }
                        if (0 === a)
                            return []
                    }
                    return e[0].filter((i => {
                        const a = t.get(i);
                        return void 0 !== a && t.set(i, 0),
                        a === e.length
                    }
                    ))
                }(Object.values(a))
            }(t.where, e));
            const v = {}
              , C = {}
              , F = {};
            for (const e of c) {
                const t = {};
                for (const e of f)
                    t[e] = [];
                C[e] = t,
                F[e] = []
            }
            const S = c.length;
            for (let i = 0; i < S; i++) {
                var D;
                const a = c[i]
                  , n = e.avgFieldLength[a]
                  , o = e.fieldLengths[a];
                if (!(a in e.tokenOccurrencies))
                    continue;
                const r = e.tokenOccurrencies[a]
                  , s = e.frequencies[a]
                  , u = f.length;
                for (let i = 0; i < u; i++) {
                    const u = f[i]
                      , l = be(e, {
                        ...t,
                        index: a,
                        term: u,
                        exact: h
                    })
                      , c = "number" == typeof r[u] ? r[u] ?? 0 : 0
                      , p = []
                      , g = l.length;
                    for (let e = 0; e < g; e++) {
                        var T;
                        const i = l[e]
                          , a = $((null == s || null === (T = s[i]) || void 0 === T ? void 0 : T[u]) ?? 0, c, d, o[i], n, t.relevance);
                        p.push([i, a])
                    }
                    C[a][u].push(...p)
                }
                const l = C[a]
                  , p = Object.values(l);
                F[a] = q(p, (null == t || null === (D = t.boost) || void 0 === D ? void 0 : D[a]) ?? 1);
                const g = F[a]
                  , m = g.length;
                for (let e = 0; e < m; e++) {
                    const [t,i] = g[e]
                      , a = v[t];
                    v[t] = a ? a + i + .5 : i
                }
            }
            let R = Object.entries(v).sort(_);
            b && (R = function(e, t) {
                const i = new Map
                  , a = [];
                for (const t of e)
                    i.set(t, !0);
                for (const [e,n] of t)
                    i.has(e) && (a.push([e, n]),
                    i.delete(e));
                return a
            }(x, R));
            const j = new Set
              , V = o ? function(e, t, i, a) {
                const n = {}
                  , o = i.map(( ([e]) => e)).map((e => t[e]))
                  , r = Object.keys(a);
                for (const t of r) {
                    let i = {};
                    if ("number" === de(e, t)) {
                        const {ranges: e} = a[t]
                          , n = [];
                        for (const t of e)
                            n.push([`${t.from}-${t.to}`, 0]);
                        i = Object.fromEntries(n)
                    }
                    n[t] = {
                        count: 0,
                        values: i
                    }
                }
                const s = o.length;
                for (let e = 0; e < s; e++) {
                    const t = o[e];
                    for (const e of r) {
                        const i = e.includes(".") ? M(t, e) : t[e];
                        if ("string" == typeof i)
                            void 0 === n[e].values[i] ? n[e].values[i] = 1 : n[e].values[i]++;
                        else if ("boolean" == typeof i)
                            void 0 === n[e].values[i.toString()] ? n[e].values[i.toString()] = 1 : n[e].values[i.toString()]++;
                        else if ("number" == typeof i)
                            for (const t of a[e].ranges)
                                i >= t.from && i <= t.to && (void 0 === n[e].values[`${t.from}-${t.to}`] ? n[e].values[`${t.from}-${t.to}`] = 1 : n[e].values[`${t.from}-${t.to}`]++)
                    }
                }
                for (const t of r) {
                    const i = de(e, t);
                    n[t].count = Object.keys(n[t].values).length,
                    "string" === i && (n[t].values = Object.fromEntries(Object.entries(n[t].values).sort(( (e, i) => ge(a[t].sort, e, i))).slice(a[t].offset ?? 0, a[t].limit ?? 10)))
                }
                return n
            }(e.schema, e.docs, R, t.facets) : {};
            for (let t = s; t < r + s; t++) {
                const i = R[t];
                if (void 0 === i)
                    break;
                const [a,n] = i;
                if (!j.has(a)) {
                    const i = e.docs[a];
                    p[t] = {
                        id: a,
                        score: n,
                        document: i
                    },
                    j.add(a)
                }
            }
            let k = w() - g;
            var I;
            "human" === (null === (n = e.components.elapsed) || void 0 === n ? void 0 : n.format) && ("number" == typeof (I = k) && (I = BigInt(I)),
            k = I < y ? `${I}ns` : I < A ? I / y + "μs" : I < L ? I / A + "ms" : I / L + "s");
            const W = {
                elapsed: k,
                hits: p.filter(Boolean),
                count: R.length
            };
            return o && (W.facets = V),
            W
        }
        function be(e, t) {
            const i = oe(e.index[t.index], {
                term: t.term,
                exact: t.exact,
                tolerance: t.tolerance
            })
              , a = new Set;
            for (const e in i)
                for (const t of i[e])
                    a.add(t);
            return Array.from(a)
        }
        const xe = {
            k: 1.2,
            b: .75,
            d: .5
        };
        async function ve(e) {
            "positions"in this || Object.assign(this, {
                positions: {}
            }),
            Fe(this, this.docs[e], e)
        }
        const Ce = /[\p{L}0-9_'-]+/gimu;
        function Fe(e, t, i, a="", n=e.schema) {
            e.positions[i] = Object.create(null);
            for (const o of Object.keys(t)) {
                const r = "object" == typeof t[o]
                  , s = "object" == typeof n[o]
                  , h = `${a}${o}`;
                if (r && o in n && s && Fe(e, t[o], i, h + ".", n[o]),
                "string" != typeof t[o] || !(o in n) || s)
                    continue;
                e.positions[i][h] = Object.create(null);
                const u = t[o];
                let l;
                for (; null !== (l = Ce.exec(u)); ) {
                    const t = l[0].toLowerCase()
                      , a = `${e.defaultLanguage}:${t}`;
                    let n;
                    C.has(a) ? n = C.get(a) : ([n] = S(t),
                    C.set(a, n)),
                    Array.isArray(e.positions[i][h][n]) || (e.positions[i][h][n] = []);
                    const o = l.index
                      , r = l[0].length;
                    e.positions[i][h][n].push({
                        start: o,
                        length: r
                    })
                }
            }
        }
        const Se = "Juan Carlos Niebles"
          , Pe = "L. Fei-Fei"
          , De = "Silvio Savarese"
          , Te = "Jiajun Wu"
          , ye = [{
            name: "Publications 2024",
            publications: [{
                title: "TRANSIC: Sim-to-Real Policy Transfer by Learning from Online Correction",
                authorsText: "Yunfan Jiang, Chen Wang, Ruohan Zhang, Jiajun Wu, Li Fei-Fei ",
                info: "CoRL 2024",
                refs: [{
                    href: "https://transic-robot.github.io/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/abs/2405.10315",
                    text: "PDF"
                }, {
                    href: "https://github.com/transic-robot/transic",
                    text: "Code"
                }, {
                    href: "https://transic-robot.github.io/",
                    text: "Video"
                }],
                authors: [Pe, Te]
            }, {
                title: "D3Fields: Dynamic 3D Descriptor Fields for Zero-Shot Generalizable Rearrangement",
                authorsText: "Yixuan Wang*, Mingtong Zhang*, Zhuoran Li*, Tarik Kelestemur, Katherine Rose Driggs-Campbell, Jiajun Wu, Li Fei-Fei, Yunzhu Li",
                info: "CoRL 2024 (Oral)",
                refs: [{
                    href: "https://robopil.github.io/d3fields/",
                    text: "Website"
                }, {
                    href: "https://robopil.github.io/d3fields/d3fields.pdf",
                    text: "PDF"
                }, {
                    href: "https://github.com/WangYixuan12/d3fields",
                    text: "Code"
                }],
                authors: [Pe, Te]
            }, {
                title: "View-Invariant Policy Learning via Zero-Shot Novel View Synthesis",
                authorsText: "Stephen Tian, Blake Wulfe, Kyle Sargent, Katherine Liu, Sergey Zakharov, Vitor Guizilini, Jiajun Wu",
                info: "CoRL 2024",
                refs: [{
                    href: "https://s-tian.github.io/projects/vista/",
                    text: "Website"
                }, {
                    href: "https://s-tian.github.io/assets/vista/pdf/paper.pdf",
                    text: "PDF"
                }, {
                    href: "https://github.com/s-tian/VISTA",
                    text: "Code"
                }],
                authors: [Te]
            }, {
                title: "ReKep: Spatio-Temporal Reasoning of Relational Keypoint Constraints for Robotic Manipulation",
                authorsText: "Wenlong Huang, Chen Wang*, Yunzhu Li*, Ruohan Zhang, Li Fei-Fei",
                info: "CoRL 2024",
                refs: [{
                    href: "https://rekep-robot.github.io/",
                    text: "Website"
                }, {
                    href: "https://rekep-robot.github.io/rekep.pdf",
                    text: "PDF"
                }, {
                    href: "https://github.com/huangwl18/ReKep",
                    text: "Code"
                }, {
                    href: "https://youtu.be/2S8YhBdLdww",
                    text: "Video"
                }],
                authors: [Pe]
            }, {
                title: "FactorSim: Generative Simulation via Factorized Representation",
                authorsText: "Fan-Yun Sun, S. I. Harini, Angela Yi, Yihan Zhou, Alex Zook, Jonathan Tremblay, Logan Cross, Jiajun Wu, Nick Haber",
                info: "NeurIPS 2024",
                refs: [{
                    href: "https://cs.stanford.edu/~sunfanyun/factorsim/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/pdf/2409.17652",
                    text: "PDF"
                }, {
                    href: "https://github.com/sunfanyunn/FactorSim",
                    text: "Code"
                }],
                authors: [Te]
            }, {
                title: "Few-Shot Classification of Interactive Activities of Daily Living (InteractADL)",
                authorsText: "Zane Durante, Robathan Harries, Edward Vendrow, Zelun Luo, Yuta Kyuragi, Kazuki Kozuka, Li Fei-Fei, Ehsan Adeli",
                info: "BMVC 2024",
                refs: [{
                    href: "https://arxiv.org/abs/2406.01662",
                    text: "PDF"
                }, {
                    href: "https://github.com/zanedurante/vlm_benchmark",
                    text: "Code"
                }],
                authors: [Pe]
            }, {
                title: "OccFusion: Rendering Occluded Humans with Generative Diffusion Priors",
                authorsText: "Adam Sun*, Tiange Xiang*, Scott Delp, Li Fei-Fei, Ehsan Adeli",
                info: "NeurIPS 2024",
                refs: [{
                    href: "https://cs.stanford.edu/~xtiange/projects/occfusion/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/pdf/2407.00316",
                    text: "PDF"
                }, {
                    href: "https://github.com/tiangexiang/OccFusion",
                    text: "Code"
                }],
                authors: [Pe]
            }, {
                title: "IKEA Manuals at Work: 4D Grounding of Assembly Instructions on Internet Videos",
                authorsText: "Yunong Liu, Weiyu Liu, Shubh Khanna, Cristobal Eyzaguirre, Manling Li, Juan Carlos Niebles, Vineeth Ravi, Saumitra Mishra, Jiajun Wu",
                info: "NeurIPS 2024 Datasets and Benchmarks Track",
                refs: [{
                    href: "https://yunongliu1.github.io/ikea-video-manual/",
                    text: "Website"
                }, {
                    href: "https://github.com/yunongLiu1/IKEA-Manuals-at-Work",
                    text: "Code"
                }],
                authors: [Te, Se]
            }, {
                title: "HourVideo: 1-Hour Video-Language Understanding",
                authorsText: "Keshigeyan Chandrasegaran, Agrim Gupta, Lea M. Hadzic, Taran Kota, Jimming He, Cristobal Eyzaguirre, Zane Durante, Manling Li, Jiajun Wu, Li Fei-Fei",
                info: "NeurIPS 2024 Datasets and Benchmarks Track",
                refs: [{
                    href: "https://hourvideo.stanford.edu",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/abs/2411.04998",
                    text: "PDF"
                }],
                authors: [Pe, Te]
            }, {
                title: "Embodied Agent Interface: Benchmarking LLMs for Embodied Decision Making",
                authorsText: "Manling Li*, Shiyu Zhao*, Qineng Wang*, Kangrui Wang*, Yu Zhou*, Sanjana Srivastava, Cem Gokmen, Tony Lee, Li Erran Li, Ruohan Zhang, Weiyu Liu, Percy Liang, Li Fei-Fei, Jiayuan Mao, Jiajun Wu",
                info: "NeurIPS 2024 Datasets and Benchmarks Track (Oral Presentation)",
                refs: [{
                    href: "https://embodied-agent-interface.github.io/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/abs/2410.07166",
                    text: "PDF"
                }, {
                    href: "https://github.com/embodied-agent-interface/embodied-agent-interface",
                    text: "Code"
                }, {
                    href: "https://embodied-agent-interface.github.io/",
                    text: "Video"
                }],
                authors: [Pe, Te]
            }, {
                title: "Reconstruction and Simulation of Elastic Objects with Spring-Mass 3D Gaussians",
                authorsText: "Licheng Zhong, Hong-Xing Yu, Jiajun Wu, Yunzhu Li",
                info: "ECCV 2024",
                refs: [{
                    href: "https://zlicheng.com/spring_gaus/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/pdf/2403.09434",
                    text: "PDF"
                }, {
                    href: "https://github.com/Colmar-zlicheng/Spring-Gaus",
                    text: "Code"
                }],
                authors: [Te]
            }, {
                title: "PhysDreamer: Physics-Based Interaction with 3D Objects via Video Generation",
                authorsText: "Tianyuan Zhang, Hong-Xing Yu, Rundi Wu, Brandon Y. Feng, Changxi Zheng, Noah Snavely, Jiajun Wu, William T. Freeman",
                info: "ECCV 2024 (Oral)",
                refs: [{
                    href: "https://physdreamer.github.io/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/abs/2404.13026",
                    text: "PDF"
                }, {
                    href: "https://github.com/a1600012888/PhysDreamer",
                    text: "Code"
                }],
                authors: [Te]
            }, {
                title: "3D Congealing: 3D-Aware Image Alignment in the Wild",
                authorsText: "Yunzhi Zhang, Zizhang Li, Amit Raj, Andreas Engelhardt, Yuanzhen Li, Tingbo Hou, Jiajun Wu, Varun Jampani",
                info: "ECCV 2024",
                refs: [{
                    href: "https://ai.stanford.edu/~yzzhang/projects/3d-congealing/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/abs/2404.02125",
                    text: "PDF"
                }],
                authors: [Te]
            }, {
                title: "Ponymation: Learning Articulated 3D Animal Motions from Unlabeled Online Videos",
                authorsText: "Keqiang Sun*, Dor Litvak*, Yunzhi Zhang, Hongsheng Li, Jiajun Wu†, Shangzhe Wu†",
                info: "ECCV 2024",
                refs: [{
                    href: "https://keqiangsun.github.io/projects/ponymation/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/pdf/2312.13604",
                    text: "PDF"
                }, {
                    href: "https://github.com/3DAnimals/3DAnimals",
                    text: "Code"
                }, {
                    href: "https://youtu.be/poc7c-9hCvQ",
                    text: "Video"
                }],
                authors: [Te]
            }, {
                title: "Chain of Code: Reasoning with a Language Model-Augmented Code Emulator",
                authorsText: "Chengshu Li, Jacky Liang, Andy Zeng, Xinyun Chen, Karol Hausman, Dorsa Sadigh, Sergey Levine, Li Fei-Fei, Fei Xia, Brian Ichter",
                info: "ICML 2024 (Oral)",
                refs: [{
                    href: "https://chain-of-code.github.io/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/pdf/2312.04474",
                    text: "PDF"
                }, {
                    href: "https://colab.research.google.com/github/google-research/google-research/blob/master/code_as_policies/coc_demo.ipynb",
                    text: "Code"
                }],
                authors: [Pe]
            }, {
                title: "RoboPack: Learning Tactile-Informed Dynamics Models for Dense Packing",
                authorsText: "Bo Ai, Stephen Tian, Haochen Shi, Yixuan Wang, Cheston Tan, Yunzhu Li, Jiajun Wu",
                info: "RSS 2024",
                refs: [{
                    href: "https://robo-pack.github.io/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/abs/2407.01418",
                    text: "PDF"
                }],
                authors: [Te]
            }, {
                title: "HOLODECK: Language Guided Generation of 3D Embodied AI Environments",
                authorsText: "Yue Yang*, Fan-Yun Sun*, Luca Weihs*, Eli VanderBilt, Alvaro Herrasti, Winson Han, Jiajun Wu, Nick Haber, Ranjay Krishna, Lingjie Liu, Chris Callison-Burch, Mark Yatskar, Aniruddha Kembhavi, Christopher Clark",
                info: "CVPR 2024",
                refs: [{
                    href: "https://yueyang1996.github.io/holodeck/",
                    text: "Website"
                }, {
                    href: "https://yueyang1996.github.io/papers/holodeck.pdf",
                    text: "PDF"
                }, {
                    href: "https://github.com/allenai/Holodeck",
                    text: "Code"
                }],
                authors: [Te]
            }, {
                title: " Naturally Supervised 3D Visual Grounding with Language-Regularized Concept Learners",
                authorsText: "Chun Feng*, Joy Hsu*, Weiyu Liu, and Jiajun Wu",
                info: "CVPR 2024",
                refs: [{
                    href: "https://chunfeng3364.github.io/projects/larc_website/project_page.html",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/abs/2404.19696",
                    text: "PDF"
                }, {
                    href: "https://github.com/chunfeng3364/LARC",
                    text: "Code"
                }],
                authors: [Te]
            }, {
                title: "WonderJourney: Going from Anywhere to Everywhere",
                authorsText: "Hong-Xing Yu, Haoyi Duan, Junhwa Hur, Kyle Sargent, Michael Rubinstein, William T. Freeman, Forrester Cole, Deqing Sun, Noah Snavely, Jiajun Wu, Charles Herrmann",
                info: "CVPR 2024",
                refs: [{
                    href: "https://kovenyu.com/WonderJourney/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/pdf/2312.03884.pdf",
                    text: "PDF"
                }, {
                    href: "https://github.com/KovenYu/WonderJourney",
                    text: "Code"
                }, {
                    href: "https://youtu.be/2X8TU3KwZ-c",
                    text: "Video"
                }],
                authors: [Te]
            }, {
                title: "BEHAVIOR Vision Suite: Customizable Dataset Generation via Simulation",
                authorsText: "Yunhao Ge*, Yihe Tang*, Jiashu Xu*, Cem Gokmen*, Chengshu Li, Wensi Ai, Benjamin Jose Martinez, Arman Aydin, Mona Anvari, Ayush K Chakravarthy, Hong-Xing Yu, Josiah Wong, Sanjana Srivastava, Sharon Lee, Shengxin Zha, Laurent Itti, Yunzhu Li, Roberto Martín-Martín, Miao Liu, Pengchuan Zhang, Ruohan Zhang, Li Fei-Fei, Jiajun Wu",
                info: "CVPR 2024 (Highlight)",
                refs: [{
                    href: "https://behavior-vision-suite.github.io/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/abs/2405.09546",
                    text: "PDF"
                }, {
                    href: "https://github.com/behavior-vision-suite/behavior-vision-suite.github.io",
                    text: "Code"
                }, {
                    href: "N/A",
                    text: "Video"
                }],
                authors: [Pe, Te]
            }, {
                title: "Learning the 3D Fauna of the Web",
                authorsText: "Zizhang Li*, Dor Litvak*, Ruining Li, Yunzhi Zhang, Tomas Jakab, Christian Rupprecht, Shangzhe Wu†, Andrea Vedaldi†, Jiajun Wu†",
                info: "CVPR 2024",
                refs: [{
                    href: "https://kyleleey.github.io/3DFauna/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/pdf/2401.02400",
                    text: "PDF"
                }, {
                    href: "https://github.com/3DAnimals/3DAnimals",
                    text: "Code"
                }, {
                    href: "https://youtu.be/w2f6yJARN1I",
                    text: "Video"
                }],
                authors: [Te]
            }, {
                title: "Hearing Anything Anywhere",
                authorsText: "Mason Long Wang*, Ryosuke Sawata, Samuel Clarke, Ruohan Gao, Shangzhe Wu, Jiajun Wu",
                info: "CVPR 2024",
                refs: [{
                    href: "https://masonlwang.com/hearinganythinganywhere/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/pdf/2406.07532",
                    text: "PDF"
                }, {
                    href: "https://github.com/maswang32/hearinganythinganywhere/",
                    text: "Code"
                }, {
                    href: "https://www.youtube.com/watch?v=Cv9oOFVXem4&ab_channel=MasonWang",
                    text: "Video"
                }],
                authors: [Te]
            }, {
                title: "Online Distribution Shift Detection via Recency Prediction",
                authorsText: "Rachel Luo, Rohan Sinha, Yixiao Sun, Ali Hindy, Shengjia Zhao, Silvio Savarese, Edward Schmerling, Marco Pavone",
                info: "ICRA 2024",
                refs: [{
                    href: "https://arxiv.org/pdf/2211.09916",
                    text: "PDF"
                }, {
                    href: "https://www.youtube.com/watch?v=mq6z08Zts2k&pp=ygUMc3RhbmZvcmQgYXNs",
                    text: "Video"
                }],
                authors: [De]
            }, {
                title: "Language-Informed Visual Concept Learning",
                authorsText: "Sharon Lee*, Yunzhi Zhang*, Shangzhe Wu, Jiajun Wu",
                info: "ICLR 2024",
                refs: [{
                    href: "https://cs.stanford.edu/~yzzhang/projects/concept-axes/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/abs/2312.03587",
                    text: "PDF"
                }],
                authors: [Te]
            }, {
                title: "Neural Polynomial Gabor Fields for Macro Motion Analysis",
                authorsText: 'Chen Geng*, Hong-Xing "Koven" Yu*, Sida Peng, Xiaowei Zhou, Jiajun Wu',
                info: "ICLR 2024",
                refs: [{
                    href: "https://chen-geng.com/phasepgf",
                    text: "Website"
                }, {
                    href: "https://chen-geng.com/files/phasepgf.pdf",
                    text: "PDF"
                }, {
                    href: "https://github.com/gcgeng/phase-pgf",
                    text: "Code"
                }],
                authors: [Te]
            }, {
                title: "Partial-View Object View Synthesis via Filtering Inversion",
                authorsText: "Fan-Yun Sun, Jonathan Tremblay, Valts Blukis, Kevin Lin, Danfei Xu, Boris Ivanovic, Peter Karkus, Stan Birchfield, Dieter Fox, Ruohan Zhang, Yunzhu Li, Jiajun Wu, Marco Pavone, Nick Haber",
                info: "3DV 2024 (Spotlight)",
                refs: [{
                    href: "https://cs.stanford.edu/~sunfanyun/finv/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/pdf/2304.00673.pdf",
                    text: "PDF"
                }, {
                    href: "https://github.com/sunfanyunn/FINV",
                    text: "Code"
                }],
                authors: [Te]
            }, {
                title: "Unsupervised 3D Scene Representation Learning via Movable Object Inference",
                authorsText: "Honglin Chen*, Wanhee Lee*, Hong-Xing Yu, Rahul Venkatesh, Joshua B. Tenenbaum, Daniel M. Bear, Jiajun Wu, Daniel L. K. Yamins",
                info: "TMLR 2024",
                refs: [{
                    href: "https://openreview.net/pdf?id=1QjCzP0KIw",
                    text: "PDF"
                }],
                authors: [Te]
            }, {
                title: "Data-driven Discovery of Movement-Linked Heterogeneity in Neurodegenerative Diseases",
                authorsText: "Mark Endo, Favour Nerrise, Qingyu Zhao, Edith V. Sullivan, Li Fei-Fei, Victor W. Henderson, Kilian M. Pohl, Kathleen L. Poston, Ehsan Adeli",
                info: "Nature Machine Intelligence 2024",
                refs: [{
                    href: "https://www.nature.com/articles/s42256-024-00882-y",
                    text: "PDF"
                }, {
                    href: "https://github.com/markendo/PD-Subtyping-Motion-Brain",
                    text: "Code"
                }],
                authors: [Pe]
            }, {
                title: "Evaluating Large Language Models in Echocardiography Reporting: Opportunities and Challenges ",
                authorsText: "Chieh-Ju Chao, MD, Imon Banerjee, PhD, Reza Arsanjani, MD, Chadi Ayoub, MD, PhD, Andrew Tseng, MD, Jean-Benoit Delbrouck, PhD, Garvan C. Kane, MD, PhD, Francisco Lopez-Jimenez, MD, MS, Zachi Attia, PhD, Jae K Oh, MD, Bradley Erickson, MD, PhD, Li Fei-Fei, PhD, Ehsan Adeli, PhD and Curtis Langlotz, MD, PhD",
                info: "European Heart Journal: Digital Health 2024",
                refs: [{
                    href: "https://www.medrxiv.org/content/10.1101/2024.01.18.24301503v3",
                    text: "PDF"
                }],
                authors: [Pe]
            }]
        }, {
            name: "Publications 2023",
            publications: [{
                title: "Sequential Dexterity: Chaining Dexterous Policies for Long-Horizon Manipulation",
                authorsText: "Yuanpei Chen*, Chen Wang*, Li Fei-Fei and C. Karen Liu",
                info: "CoRL 2023",
                refs: [{
                    href: "https://sequential-dexterity.github.io/",
                    text: "Website"
                }, {
                    href: "https://sequential-dexterity.github.io/assets/images/2023_CoRL_SeqDex.pdf",
                    text: "PDF"
                }],
                authors: [Pe]
            }, {
                title: "VoxPoser: Composable 3D Value Maps for Robotic Manipulation with Language Models",
                authorsText: "Wenlong Huang, Chen Wang, Ruohan Zhang, Yunzhu Li, Jiajun Wu, Li Fei-Fei",
                info: "CoRL 2023",
                refs: [{
                    href: "https://voxposer.github.io/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/abs/2307.05973",
                    text: "PDF"
                }, {
                    href: "https://www.youtube.com/watch?v=Yvn4eR05A3M",
                    text: "Video"
                }],
                authors: [Pe, Te]
            }, {
                title: "Learning to Design and Use Tools for Robotic Manipulation",
                authorsText: "Ziang Liu*, Stephen Tian*, Michelle Guo, C. Karen Liu, Jiajun Wu",
                info: "CoRL 2023",
                refs: [{
                    href: "https://robotic-tool-design.github.io/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/abs/2311.00754",
                    text: "PDF"
                }],
                authors: [Te]
            }, {
                title: "MimicPlay: Long-horizon Imitation Learning by Watching Human Play",
                authorsText: "Chen Wang, Linxi Fan, Jiankai Sun, Ruohan Zhang, Li Fei-Fei, Danfei Xu, Yuke Zhu*, and Anima Anandkumar*",
                info: "CoRL 2023",
                refs: [{
                    href: "https://mimic-play.github.io/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/abs/2302.12422",
                    text: "PDF"
                }],
                authors: [Pe]
            }, {
                title: "RoboCook: Long-Horizon Elasto-Plastic Object Manipulation with Diverse Tools",
                authorsText: "Haochen Shi*, Huazhe Xu*, Samuel Clarke, Yunzhu Li, Jiajun Wu",
                info: "CoRL 2023 (Oral)",
                refs: [{
                    href: "https://hshi74.github.io/robocook/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/pdf/2306.14447.pdf",
                    text: "PDF"
                }, {
                    href: "https://github.com/hshi74/robocook",
                    text: "Code"
                }],
                authors: [Te]
            }, {
                title: "Composable Part-Based Manipulation",
                authorsText: "Weiyu Liu, Jiayuan Mao, Joy Hsu, Tucker Hermans, Animesh Garg, Jiajun Wu",
                info: "CoRL 2023",
                refs: [{
                    href: "cpmcorl2023.github.io",
                    text: "Website"
                }, {
                    href: "https://openreview.net/pdf?id=o-K3HVUeEw",
                    text: "PDF"
                }, {
                    href: "https://cpmcorl2023.github.io/media/overview.mp4",
                    text: "Video"
                }],
                authors: [Te]
            }, {
                title: "NOIR: Neural Signal Operated Intelligent Robots for Everyday Activities",
                authorsText: "Ruohan Zhang*, Sharon Lee*, Minjune Hwang*, Ayano Hiranaka*, Chen Wang, Wensi Ai, Jin Jie Ryan Tan, Shreya Gupta, Yilun Hao, Gabrael Levine, Ruohan Gao, Anthony Norcia, Li Fei-Fei, Jiajun Wu",
                info: "CoRL 2023",
                refs: [{
                    href: "https://noir-corl.github.io/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/abs/2311.01454",
                    text: "PDF"
                }],
                authors: [Pe, Te]
            }, {
                title: "Stanford-ORB: A Real-World 3D Object Inverse Rendering Benchmark",
                authorsText: "Zhengfei Kuang*, Yunzhi Zhang*, Hong-Xing Yu, Samir Agarwala, Shangzhe Wu, Jiajun Wu",
                info: "NeurIPS 2023 Datasets and Benchmarks Track",
                refs: [{
                    href: "https://stanfordorb.github.io/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/abs/2310.16044",
                    text: "PDF"
                }, {
                    href: "https://github.com/StanfordORB/Stanford-ORB",
                    text: "Code"
                }],
                authors: [Te]
            }, {
                title: "Siamese Masked Autoencoders",
                authorsText: "Agrim Gupta, Jiajun Wu, Jia Deng, Li Fei-Fei",
                info: "NeurIPS 2023 (Oral)",
                refs: [{
                    href: "https://siam-mae-video.github.io/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/abs/2305.14344",
                    text: "PDF"
                }],
                authors: [Pe, Te]
            }, {
                title: "Inferring Hybrid Fluid Fields from Videos",
                authorsText: "Hong-Xing Yu*, Yang Zheng*, Yuan Gao, Yitong Deng, Bo Zhu, Jiajun Wu",
                info: "NeurIPS 2023",
                refs: [{
                    href: "https://kovenyu.com/HyFluid/",
                    text: "Website"
                }, {
                    href: "https://openreview.net/pdf?id=kRdaTkaBwC",
                    text: "PDF"
                }, {
                    href: "https://neurips.cc/virtual/2023/poster/70643",
                    text: "Video"
                }],
                authors: [Te]
            }, {
                title: "What’s Left? Concept Grounding with Logic-Enhanced Foundation Models",
                authorsText: "Joy Hsu* Jiayuan Mao*, Joshua B. Tenenbaum, Jiajun Wu",
                info: "NeurIPS 2023",
                refs: [{
                    href: "https://web.stanford.edu/~joycj/projects/left_neurips_2023.html",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/abs/2310.16035",
                    text: "PDF"
                }, {
                    href: "https://github.com/joyhsu0504/LEFT",
                    text: "Code"
                }],
                authors: [Te]
            }, {
                title: "Model-Based Control with Sparse Neural Dynamics",
                authorsText: "Ziang Liu, Genggeng Zhou*, Jeff He*, Tobia Marcucci, Jiajun Wu, Li Fei-Fei, Yunzhu Li",
                info: "NeurIPS 2023",
                refs: [{
                    href: "https://robopil.github.io/Sparse-Dynamics/",
                    text: "Website"
                }, {
                    href: "https://yunzhuli.github.io/projects/sparse-dynamics/sparse-dynamics.pdf",
                    text: "PDF"
                }, {
                    href: "https://www.youtube.com/watch?v=tSfmD2iuFTA",
                    text: "Video"
                }],
                authors: [Pe, Te]
            }, {
                title: "Are These the Same Apple? Comparing Images Based on Object Intrinsics",
                authorsText: 'Klemen Kotar*, Stephen Tian*, Hong-Xing "Koven" Yu, Daniel L.K. Yamins, Jiajun Wu',
                info: "NeurIPS 2023 Datasets and Benchmarks Track",
                refs: [{
                    href: "https://s-tian.github.io/projects/cute/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/abs/2311.00750",
                    text: "PDF"
                }, {
                    href: "https://github.com/s-tian/CUTE",
                    text: "Code"
                }],
                authors: [Te]
            }, {
                title: "Disentanglement via Latent Quantization",
                authorsText: "Kyle Hsu, Will Dorrell, James C. R. Whittington, Jiajun Wu, Chelsea Finn",
                info: "NeurIPS 2023",
                refs: [{
                    href: "https://arxiv.org/abs/2305.18378",
                    text: "PDF"
                }, {
                    href: "https://github.com/kylehkhsu/latent_quantization",
                    text: "Code"
                }],
                authors: [Te]
            }, {
                title: "3D Copy-Paste: Physically Plausible Object Insertion for Monocular 3D Detection",
                authorsText: "Yunhao Ge, Hong-Xing Yu, Cheng Zhao, Yuliang Guo, Xinyu Huang, Liu Ren, Laurent Itti, Jiajun Wu",
                info: "NeurIPS 2023 (Poster)",
                refs: [{
                    href: "https://gyhandy.github.io/3D-Copy-Paste/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/pdf/2312.05277.pdf",
                    text: "PDF"
                }, {
                    href: "https://github.com/gyhandy/3D-Copy-Paste",
                    text: "Code"
                }],
                authors: [Te]
            }, {
                title: "SoundCam: A Dataset for Finding Humans Using Room Acoustics",
                authorsText: "Mason Wang*, Samuel Clarke*, Jui-Hsien Wang, Ruohan Gao, Jiajun Wu",
                info: "NeurIPS 2023 Datasets and Benchmarks",
                refs: [{
                    href: "https://masonlwang.com/soundcam/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/pdf/2311.03517",
                    text: "PDF"
                }, {
                    href: "https://github.com/maswang32/soundcam",
                    text: "Code"
                }, {
                    href: "https://www.youtube.com/watch?v=HAhJLgj8maI&ab_channel=MasonWang",
                    text: "Video"
                }],
                authors: [Te]
            }, {
                authors: [Te],
                authorsText: 'Simon Le Cleac\'h, Hong-Xing "Koven" Yu, Michelle Guo, Taylor A Howell, Ruohan Gao, Jiajun Wu, Zachary Manchester, Mac Schwager',
                title: "Differentiable Physics Simulation of Dynamics-Augmented Neural Objects",
                info: "IROS 2023",
                refs: [{
                    href: "https://arxiv.org/pdf/2210.09420.pdf",
                    text: "PDF"
                }, {
                    href: "https://www.youtube.com/watch?v=Md0PM-wv_Xg",
                    text: "Video"
                }]
            }, {
                title: "Rendering Humans from Object-Occluded Monocular Videos",
                authorsText: "Tiange Xiang, Adam Sun, Jiajun Wu, Ehsan Adeli, Li Fei-Fei",
                info: "ICCV 2023",
                refs: [{
                    href: "https://cs.stanford.edu/~xtiange/projects/occnerf/",
                    text: "Website"
                }],
                authors: [Pe, Te]
            }, {
                title: "Tree-Structured Shading Decomposition",
                authorsText: "Chen Geng*, Hong-Xing Yu*, Sharon Zhang, Maneesh Agrawala, Jiajun Wu",
                info: "ICCV 2023",
                refs: [{
                    href: "https://chen-geng.com/inv-shade-trees",
                    text: "Website"
                }, {
                    href: "https://chen-geng.com/files/inv-shade-trees.pdf",
                    text: "PDF"
                }, {
                    href: "https://github.com/gcgeng/inv-shade-trees",
                    text: "Code"
                }, {
                    href: "https://www.youtube.com/watch?v=L7zD9zM_zcg",
                    text: "Video"
                }],
                authors: [Te]
            }, {
                title: "VQ3D: Learning a 3D-Aware Generative Model on ImageNet",
                authorsText: "Kyle Sargent, Jing Yu Koh, Han Zhang, Huiwen Chang, Charles Herrmann, Pratul Srinivasan, Jiajun Wu, Deqing Sun",
                info: "ICCV 2023",
                refs: [{
                    href: "https://kylesargent.github.io/vq3d",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/abs/2302.06833",
                    text: "PDF"
                }],
                authors: [Te]
            }, {
                title: "Primitive Skill-based Robot Learning from Human Evaluative Feedback",
                authorsText: "Ayano Hiranaka∗, Minjune Hwang∗, Sharon Lee, Chen Wang, Li Fei-Fei, Jiajun Wu, Ruohan Zhang",
                info: "IROS 2023",
                refs: [{
                    href: "https://seediros23.github.io/",
                    text: "Website"
                }, {
                    href: "https://seediros23.github.io/assets/2023_IROS_SEED.pdf",
                    text: "PDF"
                }],
                authors: [Pe, Te]
            }, {
                authors: [Te],
                authorsText: "Mark Endo*, Joy Hsu*, Jiaman Li, and Jiajun Wu",
                title: "Motion Question Answering via Modular Motion Programs",
                info: "ICML 2023",
                refs: [{
                    href: "https://web.stanford.edu/~markendo/projects/human_motion_qa",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/abs/2305.08953",
                    text: "PDF"
                }, {
                    href: "https://github.com/markendo/HumanMotionQA",
                    text: "Code"
                }]
            }, {
                title: "Dynamic-Resolution Model Learning for Object Pile Manipulation",
                authorsText: "Yixuan Wang*, Yunzhu Li*, Katherine Driggs-Campbell, Li Fei-Fei, Jiajun Wu",
                info: "RSS 2023",
                refs: [{
                    href: "https://robopil.github.io/dyn-res-pile-manip/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/pdf/2306.16700",
                    text: "PDF"
                }, {
                    href: "https://github.com/WangYixuan12/dyn-res-pile-manip",
                    text: "Code"
                }],
                authors: [Pe, Te]
            }, {
                title: "VIMA: General Robot Manipulation with Multimodal Prompts",
                authorsText: "Yunfan Jiang, Agrim Gupta, Zichen Zhang, Guanzhi Wang, Yongqiang Dou, Yanjun Chen, Li Fei-Fei, Anima Anandkumar, Yuke Zhu, Linxi Fan",
                info: "ICML 2023",
                refs: [{
                    href: "https://vimalabs.github.io/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/abs/2210.03094",
                    text: "PDF"
                }, {
                    href: "https://github.com/vimalabs/VIMA",
                    text: "Code"
                }],
                authors: [Pe]
            }, {
                title: "Quantifying the Effect of Visual Impairments on Daily Activities in Virtual, Interactive Environments",
                authorsText: "Wensi Ai, Sharon Lee, Li Fei-Fei, Jiajun Wu, Ruohan Zhang",
                info: "CogSci 2023",
                refs: [{
                    href: "https://sites.google.com/view/vi-vr",
                    text: "Website"
                }, {
                    href: "https://escholarship.org/uc/item/2sj3r0n2",
                    text: "PDF"
                }],
                authors: [Pe, Te]
            }, {
                authors: [Te, Pe],
                authorsText: "Ruohan Gao*, Yiming Dou*, Hao Li*, Tanmay Agarwal, Jeannette Bohg, Yunzhu Li, Li Fei-Fei, Jiajun Wu",
                title: "The ObjectFolder Benchmark: Multisensory Learning with Neural and Real Objects",
                info: "CVPR 2023",
                refs: [{
                    href: "https://objectfolder.stanford.edu/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/pdf/2306.00956.pdf",
                    text: "PDF"
                }, {
                    href: "https://github.com/objectfolder",
                    text: "Code"
                }, {
                    href: "https://www.youtube.com/watch?v=VhXDempUYgE/",
                    text: "Video"
                }]
            }, {
                authors: [Te],
                authorsText: "Yunzhi Zhang, Shangzhe Wu, Noah Snavely, Jiajun Wu",
                title: "Seeing a Rose in Five Thousand Ways",
                info: "CVPR 2023",
                refs: [{
                    href: "https://ai.stanford.edu/~yzzhang/projects/rose/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/abs/2212.04965",
                    text: "PDF"
                }, {
                    href: "https://github.com/zzyunzhi/object-intrinsics",
                    text: "Code"
                }]
            }, {
                authors: [Te],
                authorsText: "Joy Hsu, Jiayuan Mao, and Jiajun Wu",
                title: "NS3D: Neuro-Symbolic Grounding of 3D Objects and Relations",
                info: "CVPR 2023",
                refs: [{
                    href: "https://web.stanford.edu/~joycj/projects/ns3d_cvpr_2023.html",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/abs/2303.13483",
                    text: "PDF"
                }, {
                    href: "https://github.com/joyhsu0504/NS3D",
                    text: "Code"
                }]
            }, {
                authors: [Te],
                authorsText: 'Hong-Xing "Koven" Yu, Samir Agarwala, Charles Herrmann, Richard Szeliski, Noah Snavely, Jiajun Wu, Deqing Sun',
                title: "Accidental Light Probes",
                info: "CVPR 2023",
                refs: [{
                    href: "https://kovenyu.com/alp/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: 'Stephen Tian*, Yancheng Cai*, Hong-Xing "Koven" Yu, Sergey Zakharov, Katherine Liu, Adrien Gaidon, Yunzhu Li, Jiajun Wu',
                title: "Multi-Object Manipulation via Object-Centric Neural Scattering Functions",
                info: "CVPR 2023",
                refs: [{
                    href: "https://s-tian.github.io/projects/actionosf/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/abs/2306.08748",
                    text: "PDF"
                }]
            }, {
                authors: [],
                authorsText: "Bokui Shen, Xinchen Yan, Charles R. Qi, Mahyar Najibi, Boyang Deng, Leonidas Guibas, Yin Zhou, Dragomir Anguelov",
                title: "GINA-3D: Learning to Generate Implicit Neural Assets in the Wild",
                info: "CVPR 2023",
                refs: [{
                    href: "https://arxiv.org/abs/2304.02163",
                    text: "PDF"
                }, {
                    href: "https://github.com/waymo-research/waymo-open-dataset",
                    text: "Website"
                }, {
                    href: "https://www.youtube.com/watch?v=TbkjhHt_VJg",
                    text: "Video"
                }]
            }, {
                title: "Ego-Body Pose Estimation via Ego-Head Pose Estimation",
                authorsText: "Jiaman Li, C. Karen Liu†, Jiajun Wu†",
                info: "CVPR 2023",
                refs: [{
                    href: "https://lijiaman.github.io/projects/egoego/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/pdf/2212.04636.pdf",
                    text: "PDF"
                }, {
                    href: "https://github.com/lijiaman/egoego_release",
                    text: "Code"
                }, {
                    href: "https://www.youtube.com/watch?v=Dg66DY2sGus",
                    text: "Video"
                }],
                authors: [Te]
            }, {
                title: "RealImpact: A Dataset of Impact Sound Fields for Real Objects",
                authorsText: "Samuel Clarke, Ruohan Gao, Mason Wang, Mark Rau, Julia Xu, Jui-Hsien Wang, Doug L. James, and Jiajun Wu",
                info: "CVPR 2023",
                refs: [{
                    href: "https://samuelpclarke.com/realimpact/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/pdf/2306.09944.pdf",
                    text: "PDF"
                }, {
                    href: "https://github.com/samuel-clarke/RealImpact",
                    text: "Code"
                }, {
                    href: "https://youtu.be/OeZMeze-oIs",
                    text: "Video"
                }],
                authors: [Te]
            }, {
                authors: [Te, De, Pe],
                authorsText: "Ruohan Gao*, Hao Li*, Gokul Dharan, Zhuzhu Wang, Chengshu Li, Fei Xia, Silvio Savarese, Li Fei-Fei, Jiajun Wu",
                title: "Sonicverse: A Multisensory Simulation Platform for Embodied Household Agents that See and Hear",
                info: "ICRA 2023",
                refs: [{
                    href: "https://ai.stanford.edu/~rhgao/sonicverse/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/abs/2306.00923",
                    text: "PDF"
                }, {
                    href: "https://github.com/StanfordVL/sonicverse",
                    text: "Code"
                }, {
                    href: "https://www.youtube.com/watch?v=veqC1K6pxbg",
                    text: "Video"
                }]
            }, {
                authors: [Pe],
                authorsText: "Bohan Wu, Roberto Martín-Martín, Li Fei-Fei",
                image: "bohan_icra_2023.jpg",
                title: "M-EMBER: Tackling Long-Horizon Mobile Manipulation via Factorized Domain Transfer",
                info: "ICRA 2023",
                refs: []
            }, {
                authors: [Te],
                authorsText: "Stephen Tian, Chelsea Finn, Jiajun Wu",
                title: "A Control-Centric Benchmark for Video Prediction",
                info: "ICLR 2023",
                refs: [{
                    href: "https://s-tian.github.io/projects/vp2/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/abs/2304.13723",
                    text: "PDF"
                }, {
                    href: "https://github.com/s-tian/vp2",
                    text: "Code"
                }]
            }, {
                authors: [Te],
                authorsText: 'Yitong Deng, Hong-Xing "Koven" Yu, Jiajun Wu, Bo Zhu',
                title: "Learning Vortex Dynamics for Fluid Inference and Prediction",
                info: "ICLR 2023",
                refs: [{
                    href: "https://yitongdeng.github.io/vortex_learning_webpage/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Renhao Wang, Jiayuan Mao, Joy Hsu, Hang Zhao, Jiajun Wu, and Yang Gao",
                image: "renhao_iclr_2023.png",
                title: "Programmatically Grounded, Compositionally Generalizable Robotic Manipulation",
                info: "ICLR 2023 (Spotlight)",
                refs: [{
                    href: "https://openreview.net/pdf?id=rZ-wylY5VI",
                    text: "PDF"
                }]
            }, {
                title: "MaskViT: Masked Visual Pre-Training for Video Prediction",
                authorsText: "Agrim Gupta, Stephen Tian, Yunzhi Zhang, Jiajun Wu, Roberto Martín-Martín, Li Fei-Fei",
                info: "ICLR 2023",
                refs: [{
                    href: "https://maskedvit.github.io/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/abs/2206.11894",
                    text: "PDF"
                }],
                authors: [Pe, Te]
            }, {
                authors: [Te],
                authorsText: 'Hong-Xing "Koven" Yu*, Michelle Guo*, Alireza Fathi, Yen-Yu Chang, Eric Ryan Chan, Ruohan Gao, Thomas Funkhouser, Jiajun Wu',
                title: "Learning Object-centric Neural Scattering Functions for Free-viewpoint Relighting and Scene Composition",
                info: "TMLR 2023",
                refs: [{
                    href: "https://kovenyu.com/osf/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: 'Cameron Smith, Hong-Xing "Koven" Yu, Sergey Zakharov, Frédo Durand, Joshua B. Tenenbaum, Jiajun Wu, Vincent Sitzmann',
                title: "Unsupervised Discovery and Composition of Object Light Fields",
                info: "TMLR 2023",
                refs: [{
                    href: "https://cameronosmith.github.io/colf/",
                    text: "Website"
                }]
            }, {
                title: "Differentially Private Video Activity Recognition",
                authorsText: "Zelun Luo, Yuliang Zou, Yijin Yang, Zane Durante, De-An Huang, Zhiding Yu, Chaowei Xiao, Li Fei-Fei, Animashree Anandkumar",
                info: "WACV 2023",
                refs: [{
                    href: "https://arxiv.org/pdf/2306.15742.pdf",
                    text: "PDF"
                }],
                authors: [Pe]
            }]
        }, {
            name: "Publications 2022",
            publications: [{
                authors: [Te],
                authorsText: "Joy Hsu, Jiayuan Mao, and Jiajun Wu",
                image: "joy_tmlr_2022.png",
                title: "DisCo: Improving Compositional Generalization in Visual Reasoning through Distribution Coverage",
                info: "TMLR 2022",
                refs: [{
                    href: "https://openreview.net/pdf?id=EgHnKOLaKW",
                    text: "PDF"
                }, {
                    href: "http://web.stanford.edu/~joycj/projects/disco_tmlr_2022.html",
                    text: "Website"
                }]
            }, {
                authors: [Pe, Te],
                authorsText: "Ruohan Zhang*, Dhruva Bansal*, Yilun Hao*, Ayano Hiranaka, Jialu Gao, Chen Wang, Roberto Martín-Martín, Li Fei-Fei, Jiajun Wu",
                image: "ruohan_corl_2022.png",
                title: "A Dual Representation Framework for Robot Learning with Human Guidance",
                info: "CoRL 2022",
                refs: [{
                    href: "https://openreview.net/pdf?id=H6rr_CGzV9y",
                    text: "PDF"
                }, {
                    href: "https://sites.google.com/view/dr-hrl",
                    text: "Website"
                }]
            }, {
                authors: [Pe, Te, De],
                authorsText: "Chengshu Li*, Ruohan Zhang*, Josiah Wong*, Cem Gokmen*, Sanjana Srivastava*, Roberto Martín-Martín*, Chen Wang*, Gabrael Levine*, Michael Lingelbach, Jiankai Sun, Mona Anvari, Minjune Hwang, Manasi Sharma, Arman Aydin, Dhruva Bansal, Samuel Hunter, Kyu-Young Kim, Alan Lou, Caleb R Matthews, Ivan Villa-Renteria, Jerry Huayang Tang, Claire Tang, Fei Xia, Silvio Savarese, Hyowon Gweon, Karen Liu, Jiajun Wu, Li Fei-Fei",
                image: "b1k_corl_2022.png",
                title: "BEHAVIOR-1K: A Benchmark for Embodied AI with 1,000 Everyday Activities and Realistic Simulation",
                info: "CoRL 2022 (Oral)",
                refs: [{
                    href: "https://openreview.net/forum?id=_8DoIe8G3t",
                    text: "PDF"
                }, {
                    href: "https://behavior.stanford.edu/",
                    text: "Website"
                }, {
                    href: "https://github.com/StanfordVL/OmniGibson/",
                    text: "Code"
                }]
            }, {
                authors: [Pe, Te],
                authorsText: "Hao Li*, Yizhi Zhang*, Junzhe Zhu, Shaoxiong Wang, Michelle A Lee, Huazhe Xu, Edward Adelson, Li Fei-Fei, Ruohan Gao†, Jiajun Wu†",
                image: "haolicorl2022.png",
                title: "See, Hear, Feel: Smart Sensory Fusion for Robotic Manipulation",
                info: "CoRL 2022",
                refs: [{
                    href: "https://openreview.net/pdf?id=sygvGP-YLfx",
                    text: "PDF"
                }, {
                    href: "https://ai.stanford.edu/~rhgao/see_hear_feel/",
                    text: "Website"
                }, {
                    href: "https://www.youtube.com/watch?v=sRdx3sa6ryk",
                    text: "Video"
                }]
            }, {
                authors: [Pe],
                authorsText: "Chen Wang, Danfei Xu, Li Fei-Fei",
                image: "chenral2022.png",
                title: "Generalizable Task Planning through Representation Pretraining",
                info: "Robotics and Automation Letters (RA-L) 2022",
                refs: [{
                    href: "https://arxiv.org/abs/2205.07993",
                    text: "PDF"
                }, {
                    href: "https://sites.google.com/view/gentp",
                    text: "Website"
                }, {
                    href: "https://github.com/j96w/GenTP",
                    text: "Code"
                }]
            }, {
                authors: [Te],
                authorsText: "Yunzhi Zhang, Jiajun Wu",
                image: "yunzhi_eccv_2022.png",
                title: "Video Extrapolation in Space and Time",
                info: "ECCV 2022",
                refs: [{
                    href: "https://arxiv.org/pdf/2205.02084.pdf",
                    text: "PDF"
                }, {
                    href: "https://cs.stanford.edu/~yzzhang/projects/vest/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Ruocheng Wang, Yunzhi Zhang, Jiayuan Mao, Chin-Yi Cheng, Jiajun Wu",
                image: "ruocheneccv2022.jpeg",
                title: "Translating a Visual LEGO Manual to a Machine-Executable Plan",
                info: "ECCV 2022",
                refs: [{
                    href: "https://arxiv.org/pdf/2207.12572.pdf",
                    text: "PDF"
                }, {
                    href: "https://cs.stanford.edu/~rcwang/projects/lego_manual/",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "Rachel Luo, Shengjia Zhao, Jonathan Kuck, Boris Ivanovic, Silvio Savarese, Edward Schmerling, Marco Pavone",
                title: "Sample-Efficient Safety Assurances using Conformal Prediction",
                info: "WAFR 2022",
                refs: [{
                    href: "https://arxiv.org/abs/2109.14082",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "Rachel Luo, Aadyot Bhatnagar, Yu Bai, Shengjia Zhao, Huan Wang, Caiming Xiong, Silvio Savarese, Stefano Ermon, Edward Schmerling, Marco Pavone",
                title: "Local Calibration: Metrics and Recalibration",
                info: "UAI 2022",
                refs: [{
                    href: "https://arxiv.org/abs/2102.10809",
                    text: "PDF"
                }]
            }, {
                authors: [Te],
                authorsText: "Fan-Yun Sun, Isaac Kauvar, Ruohan Zhang, Jiachen Li, Mykel Kochenderfer, Jiajun Wu, Nick Haber",
                title: "Interaction Modeling with Multiplex Attention",
                info: "NeurIPS 2022",
                refs: [{
                    href: "https://arxiv.org/pdf/2208.10660.pdf",
                    text: "PDF"
                }, {
                    href: "https://cs.stanford.edu/~sunfanyun/imma",
                    text: "Website"
                }, {
                    href: "https://github.com/sunfanyunn/IMMA",
                    text: "Code"
                }]
            }, {
                authors: [Te],
                authorsText: "Joy Hsu, Jiajun Wu, and Noah Goodman",
                image: "joy_neurips_dataset_2022.png",
                title: "Geoclidean: Few-Shot Generalization in Euclidean Geometry",
                info: "NeurIPS 2022 Datasets and Benchmarks Track",
                refs: [{
                    href: "https://arxiv.org/abs/2211.16663",
                    text: "PDF"
                }, {
                    href: "http://web.stanford.edu/~joycj/projects/geoclidean_neurips_2022.html",
                    text: "Website"
                }, {
                    href: "https://github.com/joyhsu0504/geoclidean_framework",
                    text: "Code"
                }]
            }, {
                authors: [Pe, Se, Te],
                authorsText: "Zelun Luo, Zane Durante*, Linden Li*, Wanze Xie, Ruochen Liu, Emily Jin, Zhuoyi Huang, Lun Yu Li, Jiajun Wu, Juan Carlos Niebles, Ehsan Adeli, Li Fei-Fei",
                image: "luo2022moma.gif",
                title: "MOMA-LRG: Language-Refined Graphs for Multi-Object Multi-Actor Activity Parsing",
                info: "NeurIPS 2022 Datasets and Benchmarks Track",
                refs: [{
                    href: "https://alan.vision/publications/luo2022moma.pdf",
                    text: "PDF"
                }, {
                    href: "https://moma.stanford.edu/",
                    text: "Website"
                }, {
                    href: "https://github.com/StanfordVL/moma/",
                    text: "Toolkit"
                }, {
                    href: "https://momaapi.readthedocs.io/",
                    text: "Documentation"
                }]
            }, {
                authors: [Pe],
                authorsText: "Mark Endo, Kathleen Poston, Edith Sullivan, Li Fei-Fei, Kilian Pohl, Ehsan Adeli",
                image: "endo_miccai2022.png",
                title: "GaitForeMer: Self-Supervised Pre-Training of Transformers via Human Motion Forecasting for Few-Shot Gait Impairment Severity Estimation",
                info: "Medical Image Computing and Computer Assisted Intervention (MICCAI 2022)",
                refs: []
            }, {
                authors: [De],
                authorsText: "Bokui Shen, Zhenyu Jiang, Christopher Choy, Leonidas J. Guibas, Silvio Savarese, Anima Anandkumar, Yuke Zhu",
                image: "shen_rss2022.png",
                title: "ACID: Action-Conditional Implicit Visual Dynamics for Deformable Object Manipulation",
                info: "RSS 2022 (Best Student Paper Award Nominee)",
                refs: [{
                    href: "https://b0ku1.github.io/acid/",
                    text: "Website"
                }, {
                    href: "https://roboticsconference.org/program/papers/001/",
                    text: "PDF"
                }, {
                    href: "https://github.com/NVlabs/ACID",
                    text: "Code"
                }, {
                    href: "https://b0ku1.github.io/acid/assets/videos/acid_vid.mp4",
                    text: "Video"
                }]
            }, {
                authors: [Pe, Se],
                authorsText: "Shyamal Buch, Cristóbal Eyzaguirre, Adrien Gaidon, Jiajun Wu, Li Fei-Fei, Juan Carlos Niebles",
                image: "shyamal_cvpr22.png",
                title: "Revisiting the 'Video' in Video-Language Understanding",
                info: "CVPR 2022 (Oral)",
                refs: [{
                    href: "https://stanfordvl.github.io/atp-revisit-video-lang/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/abs/2206.01720",
                    text: "PDF"
                }, {
                    href: "https://github.com/StanfordVL/atp-video-language",
                    text: "Code"
                }, {
                    href: "https://www.youtube.com/watch?v=-qVZKaP7iR0",
                    text: "Video"
                }]
            }, {
                authors: [Te],
                authorsText: 'Hong-Xing "Koven" Yu, Jiajun Wu, Li Yi',
                title: "Rotationally Equivariant 3D Object Detection",
                info: "CVPR 2022",
                refs: [{
                    href: "https://kovenyu.com/eon/",
                    text: "Website"
                }]
            }, {
                authors: [Pe, Te],
                authorsText: "Ruohan Gao*, Zilin Si*, Yen-Yu Chang*, Samuel Clarke, Jeannette Bohg, Li Fei-Fei, Wenzhen Yuan, Jiajun Wu",
                image: "objectfolder2_cvpr.png",
                title: "ObjectFolder 2.0: A Multisensory Object Dataset for Sim2Real Transfer",
                info: "CVPR 2022",
                refs: [{
                    href: "https://arxiv.org/pdf/2204.02389.pdf",
                    text: "PDF"
                }, {
                    href: "https://ai.stanford.edu/~rhgao/objectfolder2.0/",
                    text: "Website"
                }, {
                    href: "https://github.com/rhgao/ObjectFolder",
                    text: "Code"
                }, {
                    href: "https://www.youtube.com/watch?v=e5aToT3LkRA",
                    text: "Video"
                }]
            }, {
                authors: [],
                authorsText: "Mona Gandhi*, Mustafa Omer Gul*, Eva Prakash, Madeleine Grunde-McLaughlin, Ranjay Krishna, Maneesh Agrawala",
                image: "mona_cvpr22.png",
                title: "Measuring Compositional Consistency for Video Question Answering",
                info: "CVPR 2022",
                refs: []
            }, {
                authors: [Te],
                authorsText: "Kyle Hsu*, Moo Jin Kim*, Rafael Rafailov, Jiajun Wu, Chelsea Finn",
                image: "kyleiclr22.png",
                title: "Vision-Based Manipulators Need to Also See from Their Hands",
                info: "ICLR 2022 (Oral)",
                refs: [{
                    href: "https://arxiv.org/abs/2203.12677",
                    text: "PDF"
                }, {
                    href: "https://sites.google.com/view/seeing-from-hands",
                    text: "Website"
                }]
            }, {
                authors: [Pe],
                authorsText: "Agrim Gupta, Linxi Fan, Surya Ganguli, Li Fei-Fei",
                image: "agrimiclr22.png",
                title: "MetaMorph: Learning Universal Controllers with Transformers",
                info: "ICLR 2022",
                refs: [{
                    href: "https://arxiv.org/abs/2203.11931",
                    text: "PDF"
                }, {
                    href: "https://metamorph-iclr.github.io/site/",
                    text: "Website"
                }, {
                    href: "https://github.com/agrimgupta92/metamorph",
                    text: "Code"
                }, {
                    href: "https://youtu.be/mGXtjLxyAkQ",
                    text: "Video"
                }]
            }, {
                authors: [Te],
                authorsText: "Hong-Xing 'Koven' Yu, Leonidas J. Guibas, Jiajun Wu",
                image: "koveniclr22.gif",
                title: "Unsupervised Discovery of Object Radiance Fields",
                info: "ICLR 2022",
                refs: [{
                    href: "https://arxiv.org/abs/2107.07905",
                    text: "PDF"
                }, {
                    href: "https://kovenyu.com/uorf/",
                    text: "Website"
                }, {
                    href: "https://github.com/KovenYu/uORF",
                    text: "Code"
                }, {
                    href: "https://youtu.be/6J9OpvT4dCA",
                    text: "Video"
                }]
            }, {
                title: 'Revisiting the "Video" in Video-Language Understanding',
                authorsText: "Shyamal Buch, Cristóbal Eyzaguirre, Adrien Gaidon, Jiajun Wu, Li Fei-Fei, Juan Carlos Niebles",
                info: "CVPR 2022 (Oral)",
                refs: [{
                    href: "https://stanfordvl.github.io/atp-revisit-video-lang/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/abs/2206.01720",
                    text: "PDF"
                }, {
                    href: "https://github.com/StanfordVL/atp-video-language",
                    text: "Code"
                }, {
                    href: "https://www.youtube.com/watch?v=-qVZKaP7iR0",
                    text: "Video"
                }],
                authors: [Pe, Te, Se]
            }, {
                title: "PrivHAR: Recognizing Human Actions From Privacy-preserving Lens",
                authorsText: "Carlos Hinojosa, Miguel Marquez, Henry Arguello, Ehsan Adeli, Li Fei-Fei, and Juan Carlos Niebles",
                info: "ECCV 2022",
                refs: [{
                    href: "https://carloshinojosa.me/project/privhar/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/pdf/2206.03891.pdf",
                    text: "PDF"
                }, {
                    href: "https://www.youtube.com/watch?v=OBorCJve6cI&ab_channel=AIforCreativeVideoEditingandUnderstanding",
                    text: "Video"
                }],
                authors: [Pe, Se]
            }]
        }, {
            name: "Publications 2021",
            publications: [{
                authors: [Pe, Se],
                authorsText: "Zelun Luo*, Wanze Xie*, Siddharth Kapoor, Yiyun Liang, Michael Cooper, Juan Carlos Niebles, Ehsan Adeli, Li Fei-Fei",
                image: "luo2021moma.png",
                title: "MOMA: Multi-Object Multi-Actor Activity Parsing",
                info: "NeurIPS 2021",
                refs: [{
                    href: "https://proceedings.neurips.cc/paper/2021/file/95688ba636a4720a85b3634acfec8cdd-Paper.pdf",
                    text: "PDF"
                }, {
                    href: "https://moma.stanford.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Pe, De],
                authorsText: "Agrim Gupta, Silvio Savarese, Surya Ganguli, Li Fei-Fei",
                image: "agrim_fig1.jpg",
                title: "Embodied intelligence via learning and evolution",
                info: "Nature Communications 2021",
                refs: [{
                    href: "https://www.nature.com/articles/s41467-021-25874-z",
                    text: "PDF"
                }, {
                    href: "https://youtu.be/zltE0wR2Y5c",
                    text: "Video"
                }, {
                    href: "https://github.com/agrimgupta92/derl",
                    text: "Code"
                }]
            }, {
                authors: [De, Te],
                authorsText: "Ruohan Gao, Yen-Yu Chang*, Shivani Mall*, Li Fei-Fei, Jiajun Wu",
                image: "ruohan_corl_2021.png",
                title: "ObjectFolder: A Dataset of Objects with Implicit Visual, Auditory, and Tactile Representations",
                info: "CoRL 2021",
                refs: [{
                    href: "https://arxiv.org/pdf/2109.07991.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe, De],
                authorsText: "Josiah Wong, Albert Tung, Andrey Kurenkov, Ajay Mandlekar, Li Fei-Fei, Silvio Savarese, Roberto Martín-Martín",
                image: "josiah_corl_2021.png",
                title: "Error-Aware Imitation Learning from Teleoperation Data for Mobile Manipulation",
                info: "CoRL 2021",
                refs: [{
                    href: "https://sites.google.com/view/il-for-mm/home",
                    text: "Website"
                }, {
                    href: "https://youtu.be/Nlwj6FGypq8",
                    text: "Video"
                }]
            }, {
                authors: [De],
                authorsText: "Suraj Nair, Eric Mitchell, Kevin Chen, Brian Ichter, Silvio Savarese, Chelsea Finn",
                image: "suraj_corl_2021.jpeg",
                title: "Learning Language-Conditioned Robot Behavior from Offline Data and Crowd-Sourced Annotation",
                info: "CoRL 2021",
                refs: [{
                    href: "https://arxiv.org/pdf/2109.01115.pdf",
                    text: "PDF"
                }, {
                    href: "https://sites.google.com/view/robotlorl",
                    text: "Website"
                }, {
                    href: "https://github.com/suraj-nair-1/lorl",
                    text: "Code"
                }]
            }, {
                authors: [Pe],
                authorsText: "Bohan Wu, Suraj Nair, Li Fei-Fei*, Chelsea Finn*",
                image: "bohan_corl_2021.png",
                title: "Example-Driven Model-Based Reinforcement Learning for Solving Long-Horizon Visuomotor Tasks",
                info: "CoRL 2021",
                refs: [{
                    href: "https://arxiv.org/pdf/2109.10312.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe, De],
                authorsText: "Chen Wang, Claudia Pérez-D'Arpino, Danfei Xu, Li Fei-Fei, C. Karen Liu, Silvio Savarese",
                image: "chen_corl_2021.png",
                title: "Co-GAIL: Learning Diverse Strategies for Human-Robot Collaboration",
                info: "CoRL 2021",
                refs: [{
                    href: "https://arxiv.org/pdf/2108.06038.pdf",
                    text: "PDF"
                }, {
                    href: "https://sites.google.com/view/co-gail-web/home",
                    text: "Website"
                }, {
                    href: "https://drive.google.com/file/d/1m-N2LF8RMYXFGpCDgpEm0aBBBFu0lG-o/view",
                    text: "Video"
                }]
            }, {
                authors: [Pe, De],
                authorsText: "Ajay Mandlekar, Danfei Xu, Josiah Wong, Soroush Nasiriany, Chen Wang, Rohun Kulkarni, Li Fei-Fei, Silvio Savarese, Yuke Zhu, Roberto Martín-Martín",
                image: "ajay_corl_2021.png",
                title: "What Matters in Learning from Offline Human Demonstrations for Robot Manipulation",
                info: "CoRL 2021 (Oral)",
                refs: [{
                    href: "https://arxiv.org/pdf/2108.03298.pdf",
                    text: "PDF"
                }, {
                    href: "https://arise-initiative.github.io/robomimic-web/",
                    text: "Website"
                }, {
                    href: "https://github.com/ARISE-Initiative/robomimic",
                    text: "Code"
                }, {
                    href: "https://www.youtube.com/watch?v=qg_IVo4rB8k&ab_channel=AnonymousAnonymous",
                    text: "Video"
                }]
            }, {
                authors: [Pe, De, Te],
                authorsText: "Sanjana Srivastava*, Chengshu Li*, Michael Lingelbach*, Roberto Martín-Martín, Fei Xia, Kent Vainio, Zheng Lian, Cem Gokmen, Shyamal Buch, C. Karen Liu, Silvio Savarese, Hyowon Gweon, Jiajun Wu, Li Fei-Fei",
                image: "sanjana_corl_2021.png",
                title: "BEHAVIOR: Benchmark for Everyday Household Activities in Virtual, Interactive, and Ecological Environments",
                info: "CoRL 2021",
                refs: [{
                    href: "https://arxiv.org/pdf/2108.03332.pdf",
                    text: "PDF"
                }, {
                    href: "https://behavior.stanford.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Pe, De, Te],
                authorsText: "Chengshu Li*, Fei Xia*, Roberto Martín-Martín*, Michael Lingelbach, Sanjana Srivastava, Bokui Shen, Kent Elliott Vainio, Cem Gokmen, Gokul Dharan, Tanish Jain, Andrey Kurenkov, C. Karen Liu, Hyowon Gweon, Jiajun Wu, Li Fei-Fei, Silvio Savarese",
                image: "chengshu_corl_2021.png",
                title: "iGibson 2.0: Object-Centric Simulation for Robot Learning of Everyday Household Tasks",
                info: "CoRL 2021",
                refs: [{
                    href: "https://arxiv.org/pdf/2108.03272.pdf",
                    text: "PDF"
                }, {
                    href: "http://svl.stanford.edu/igibson/",
                    text: "Website"
                }, {
                    href: "https://github.com/StanfordVL/iGibson",
                    text: "Code"
                }]
            }, {
                authors: [Se],
                authorsText: "Carlos Hinojosa, Juan Carlos Niebles, Henry Arguello",
                image: "carlos_iccv_2021.png",
                title: "Learning Privacy-preserving Optics for Human Pose Estimation",
                info: "ICCV 2021 (Oral)",
                refs: [{
                    href: "https://carloshinojosa.me/files/ICCV2021/05401.pdf",
                    text: "PDF"
                }, {
                    href: "https://carloshinojosa.me/project/privacy-hpe/",
                    text: "Website"
                }, {
                    href: "https://github.com/carlosh93/privacy-optics-hpe",
                    text: "Code"
                }, {
                    href: "https://youtu.be/Lg7I1QR3W9Y",
                    text: "Video"
                }]
            }, {
                authors: [Te],
                authorsText: 'Yilun Du, Yinan Zhang, Hong-Xing "Koven" Yu, Joshua B. Tenenbaum, Jiajun Wu',
                title: "Neural Radiance Flow for 4D View Synthesis and Video Processing",
                info: "ICCV 2021",
                refs: [{
                    href: "https://yilundu.github.io/nerflow/",
                    text: "Website"
                }]
            }, {
                authors: [Se, De],
                authorsText: "Vida Adeli, Mahsa Ehsanpour, Ian Reid, Juan Carlos Niebles, Silvio Savarese, Ehsan Adeli, Hamid Rezatofighi",
                image: "vida_iccv_2021.png",
                title: "TRiPOD: Human Trajectory and Pose Dynamics Forecasting in the Wild",
                info: "ICCV 2021",
                refs: [{
                    href: "https://arxiv.org/pdf/2104.04029.pdf",
                    text: "PDF"
                }, {
                    href: "https://somof.stanford.edu",
                    text: "Website"
                }]
            }, {
                authors: [Se, Pe],
                authorsText: "Mandy Lu, Qingyu Zhao, Kathleen L. Poston, Edith V. Sullivan, Adolph Pfefferbaum, Marian Shahid, Maya Katz, Leila M. Kouhsari, Kevin Schulman, Arnold Milstein, Juan Carlos Niebles, Victor W. Henderson, Li Fei-Fei, Kilian M. Pohl, Ehsan Adeli",
                image: "mandy_medical.png",
                title: "Quantifying Parkinson’s Disease Motor Severity Under Uncertainty Using MDS-UPDRS Videos",
                info: "Medical Image Analysis 2021",
                refs: [{
                    href: "https://stanford.edu/~eadeli/publications/Elsevier_MedIA2021_MDSUPDRS_Paper.pdf",
                    text: "PDF"
                }, {
                    href: "https://github.com/mlu355/PD-Motor-Severity-Estimation",
                    text: "Code"
                }]
            }, {
                authors: [Pe, De],
                authorsText: "Bokui Shen* , Fei Xia* , Chengshu Li* , Roberto Martín-Martín* , Linxi Fan, Guanzhi Wang, Claudia Pérez-D'Arpino, Shyamal Buch, Sanjana Srivastava, Lyne Tchapmi, Micael Tchapmi, Kent Vainio, Josiah Wong, Li Fei-Fei, Silvio Savarese",
                image: "bokui_iros_2021.png",
                title: "iGibson 1.0: A Simulation Environment for Interactive Tasks in Large Realistic Scenes",
                info: "IROS 2021",
                refs: [{
                    href: "https://arxiv.org/pdf/2012.02924.pdf",
                    text: "PDF"
                }, {
                    href: "http://svl.stanford.edu/igibson/",
                    text: "Website"
                }, {
                    href: "https://github.com/StanfordVL/iGibson",
                    text: "Code"
                }]
            }, {
                authors: [Pe, De],
                authorsText: "Chen Wang*, Rui Wang*, Ajay Mandlekar, Li Fei-Fei, Silvio Savarese, Danfei Xu",
                image: "chen_iros_2021.png",
                title: "Generalization Through Hand-Eye Coordination: An Action Space for Learning Spatially-Invariant Visuomotor Control",
                info: "IROS 2021",
                refs: [{
                    href: "https://arxiv.org/pdf/2103.00375.pdf",
                    text: "PDF"
                }, {
                    href: "https://sites.google.com/stanford.edu/han",
                    text: "Website"
                }, {
                    href: "https://youtu.be/AFJkgpLbJok",
                    text: "Video"
                }]
            }, {
                authors: [Pe, De],
                authorsText: "Kuan Fang, Yuke Zhu, Silvio Savarese, Li Fei-Fei",
                image: "fang_rss2021.png",
                title: "Discovering Generalizable Skills via Automated Generation of Diverse Tasks",
                info: "RSS 2021",
                refs: [{
                    href: "https://arxiv.org/pdf/2106.13935.pdf",
                    text: "PDF"
                }, {
                    href: "https://sites.google.com/view/rss-slide/",
                    text: "Website"
                }]
            }, {
                authors: [Pe],
                authorsText: "Shyamal Buch, Li Fei-Fei, Noah D. Goodman",
                image: "neural-event-semantics-svl-thumbnail.png",
                title: "Neural Event Semantics for Grounded Language Understanding",
                info: "TACL 2021 (Oral, ACL 2021)",
                refs: [{
                    href: "https://neural-event-semantics.github.io/assets/nes_tacl2021_buch_preprint.pdf",
                    text: "PDF"
                }, {
                    href: "https://neural-event-semantics.github.io/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Sumith Kulal*, Jiayuan Mao*, Alex Aiken, Jiajun Wu",
                image: "sumith_cvpr2021.jpg",
                title: "Hierarchical Motion Understanding via Motion Programs",
                info: "CVPR 2021",
                refs: [{
                    href: "https://www.youtube.com/watch?v=EKP2BIRlaXQ",
                    text: "Video"
                }, {
                    href: "https://arxiv.org/abs/2104.11216",
                    text: "PDF"
                }, {
                    href: "https://sumith1896.github.io/motion2prog/",
                    text: "Website"
                }]
            }, {
                authors: [Pe],
                authorsText: "Linxi Fan, Guanzhi Wang, De-An Huang, Zhiding Yu, Li Fei-Fei, Yuke Zhu, Anima Anandkumar",
                image: "icml-cover-figure.png",
                title: "SECANT: Self-Expert Cloning for Zero-Shot Generalization of Visual Policies",
                info: "ICML 2021",
                refs: [{
                    href: "https://linxifan.github.io/secant-site/",
                    text: "Website"
                }, {
                    href: "https://linxifan.github.io/secant-site/assets/paper.pdf",
                    text: "PDF"
                }, {
                    href: "https://github.com/LinxiFan/SECANT",
                    text: "Code"
                }]
            }, {
                authors: [De],
                authorsText: "Pasquale Coscia, Francesco Castaldo, Franceso A.N. Palmieri, Alexandre Alahi, Silvio Savarese, Lamberto Ballan",
                image: "ivc_lrg.jpg",
                title: "Long-term Path Prediction in Urban Scenarios Using Circular Distributions",
                info: "Image and Vision Computing, Editor's Choice Award 2021",
                refs: [{
                    href: "https://www.sciencedirect.com/science/article/pii/S0262885617301853",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Siddharth Karamcheti, Ranjay Krishna, Li Fei-Fei, Christopher Manning",
                image: "ranjay_acl21.jpg",
                title: "Mind Your Outliers! Investigating the Negative Impact of Outliers on ​Active Learning through the Lens of Visual Question Answering",
                info: "ACL 2021 (Outstanding Paper Award)",
                refs: [{
                    href: "https://cs.stanford.edu/people/ranjaykrishna/activevqa/",
                    text: "Website"
                }]
            }, {
                authors: [Pe],
                authorsText: "Nicole Martinez-Martin, Zelun Luo, Amit Kaushal, Ehsan Adeli, Albert Haque, Sara Kelly, Sarah Wieten, Mildred Cho, David Magnus, Li Fei-Fei, Kevin Schulman, Arnold Milstein",
                image: "ldh2021.png",
                title: "Ethical Issues in Using Ambient Intelligence in Health-Care Settings",
                info: "The Lancet Digital Health 2021",
                refs: [{
                    href: "https://www.sciencedirect.com/science/article/pii/S2589750020302752?via%3DihubNicoleMartinez-MartinPhDaZelunLuoMSdAmitKaushalMDeEhsanAdeliPhDbdAlbertHaqueMSdSara%20SKellyBAcSarahWietenMDaProfMildred%20KChoPhDaProfDavidMagnusPhDaProfLiFei-FeiPhDfProfKevinSchulmanMDcProfArnoldMilsteinMDc",
                    text: "PDF"
                }]
            }, {
                authors: [],
                authorsText: "Madeleine Grunde-McLaughlin, Ranjay Krishna, Maneesh Agrawala",
                image: "madeleine_cvpr21.png",
                title: "AGQA: A Benchmark for Compositional Spatio-Temporal Reasoning",
                info: "CVPR 2021",
                refs: [{
                    href: "https://arxiv.org/abs/2103.16002",
                    text: "PDF"
                }, {
                    href: "https://cs.stanford.edu/people/ranjaykrishna/agqa/",
                    text: "Website"
                }]
            }, {
                authors: [Se, Pe],
                authorsText: "Mandy Lu, Qingyu Zhao, Jiequan Zhang, Kilian Pohl, Li Fei-Fei, Juan Carlos Niebles, Ehsan Adeli",
                image: "cvpr2021_mdn.png",
                title: "Metadata Normalization",
                info: "CVPR 2021",
                refs: []
            }, {
                authors: [Se],
                authorsText: "Nishant Rai, Haofeng Chen, Jingwei Ji, Rishi Desai, Kazuki Kozuka, Shun Ishizaka, Ehsan Adeli, Juan Carlos Niebles",
                image: "cvpr2021_homage.png",
                title: "Home Action Genome: Contrastive Compositional Action Understanding",
                info: "CVPR 2021",
                refs: []
            }, {
                authors: [Pe],
                authorsText: "Zelun Luo, Daniel J. Wu, Ehsan Adeli, Li Fei-Fei",
                image: "cvpr2021_dp.png",
                title: "Scalable Differential Privacy with Sparse Network Fine-tuning",
                info: "CVPR 2021",
                refs: [{
                    href: "https://openaccess.thecvf.com/content/CVPR2021/papers/Luo_Scalable_Differential_Privacy_With_Sparse_Network_Finetuning_CVPR_2021_paper.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Bohan Wu, Suraj Nair, Roberto Martín-Martín, Li Fei-Fei*, Chelsea Finn*",
                image: "bohan_cvpr21.png",
                title: "Greedy Hierarchical Variational Autoencoders for Large-Scale Video Prediction",
                info: "CVPR 2021",
                refs: [{
                    href: "https://arxiv.org/abs/2103.04174",
                    text: "PDF"
                }, {
                    href: "https://sites.google.com/view/ghvae",
                    text: "Website"
                }, {
                    href: "https://youtu.be/C8_-z8SEGOU",
                    text: "Video"
                }]
            }, {
                authors: [De],
                authorsText: "Kevin Chen, Junshen K. Chen, Jo Chuang, Marynel Vázquez, Silvio Savarese",
                image: "kevin_cvpr21.png",
                title: "Topological Planning with Transformers for Vision-and-Language Navigation",
                info: "CVPR 2021",
                refs: [{
                    href: "https://arxiv.org/abs/2012.05292",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Kaiyu Yang, Jacqueline Yau, Li Fei-Fei, Jia Deng, Olga Russakovsky",
                image: "imagenet_kaiyu.png",
                title: "A Study of Face Obfuscation in ImageNet",
                info: "arXiv",
                refs: [{
                    href: "https://arxiv.org/pdf/2103.06191.pdf",
                    text: "PDF"
                }, {
                    href: "http://image-net.org/face-obfuscation",
                    text: "Website"
                }]
            }, {
                authors: [De, Pe],
                authorsText: "Kuan Fang, Yuke Zhu, Silvio Savarese, Li Fei-Fei",
                image: "fang_iclr2021.gif",
                title: "Adaptive Procedural Task Generation for Hard-Exploration Problems",
                info: "ICLR 2021",
                refs: [{
                    href: "https://arxiv.org/pdf/2007.00350.pdf",
                    text: "PDF"
                }, {
                    href: "https://kuanfang.github.io/apt-gen/",
                    text: "Website"
                }]
            }, {
                authors: [Pe, De],
                authorsText: "Albert Tung*, Josiah Wong*, Ajay Mandlekar, Roberto Martín-Martín, Yuke Zhu, Li Fei-Fei, Silvio Savarese",
                image: "tung_wong_pull_figure_icra2021.png",
                title: "Learning Multi-Arm Manipulation Through Collaborative Teleoperation",
                info: "ICRA 2021 (Best Paper for Multi-Robot Systems Finalist)",
                refs: [{
                    href: "https://arxiv.org/abs/2012.06738",
                    text: "PDF"
                }, {
                    href: "https://roboturk.stanford.edu/multiarm",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "Claudia Pérez-D'Arpino, Can Liu, Patrick Goebel, Roberto Martín-Martín and Silvio Savarese",
                image: "claudia_icra21.jpeg",
                title: "Robot Navigation in Constrained Pedestrian Environments using Reinforcement Learning",
                info: "ICRA 2021",
                refs: [{
                    href: "https://arxiv.org/pdf/2010.08600.pdf",
                    text: "PDF"
                }, {
                    href: "https://ai.stanford.edu/~cdarpino/socialnavconstrained/index.html",
                    text: "Website"
                }]
            }, {
                authors: [Pe, De],
                authorsText: "Danfei Xu, Ajay Mandlekar, Roberto Martín-Martín, Yuke Zhu, Silvio Savarese, Li Fei-Fei",
                image: "xu_daf2020.png",
                title: "Deep Affordance Foresight: Planning Through What Can Be Done in the Future",
                info: "ICRA 2021",
                refs: [{
                    href: "https://arxiv.org/abs/2011.08424",
                    text: "PDF"
                }, {
                    href: "https://sites.google.com/stanford.edu/daf",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "Fei Xia*, Chengshu Li*, Roberto Martín-Martín, Or Litany, Alexander Toshev, Silvio Savarese (* Equal Contribution)",
                image: "relmogen_icra21.png",
                title: "ReLMoGen: Leveraging Motion Generation in Reinforcement Learning for Mobile Manipulation",
                info: "ICRA 2021",
                refs: [{
                    href: "https://arxiv.org/pdf/2008.07792.pdf",
                    text: "PDF"
                }, {
                    href: "http://svl.stanford.edu/projects/relmogen/",
                    text: "Website"
                }]
            }, {
                authors: [Pe, Se],
                authorsText: "Ehsan Adeli, Qingyu Zhao, Adolf Pfefferbaum, Edith V. Sullivan, Li Fei-Fei, Juan Carlos Niebles, Kilian M. Pohl",
                image: "ehsan_wacv2021.png",
                title: "Representation Learning with Statistical Independence to Mitigate Bias",
                info: "IEEE Winter Conference on Applications of Computer Vision (WACV) 2021",
                refs: [{
                    href: "https://arxiv.org/abs/1910.03676",
                    text: "PDF"
                }, {
                    href: "https://github.com/QingyuZhao/BR-Net/",
                    text: "Code"
                }]
            }]
        }, {
            name: "Publications 2020",
            publications: [{
                authors: [De],
                authorsText: "Trevor Standley, Amir Zamir, Dawn Chen, Leonidas Guibas, Jitendra Malik, Silvio Savarese",
                image: "taskgrouping_icml20.png",
                title: "Which Tasks Should Be Learned Together in Multi-task Learning?",
                info: "ICML 2020",
                refs: [{
                    href: "http://taskgrouping.stanford.edu/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/pdf/1905.07553.pdf",
                    text: "PDF"
                }, {
                    href: "https://github.com/tstandley/taskgrouping",
                    text: "Code"
                }, {
                    href: "https://www.youtube.com/watch?v=qCRdrczbqUo",
                    text: "Video"
                }]
            }, {
                authors: [De],
                authorsText: "Abhijeet Shenoi, Mihir Patel, JunYoung Gwak, Patrick Goebel, Amir Sadeghian, Hamid Rezatofighi, Roberto Martín-Martín, Silvio Savarese",
                image: "JRMOTPaperPhoto.png",
                title: "JRMOT: A Real-Time 3D Multi-Object Tracker and a New Large-Scale Dataset",
                info: "IROS 2020",
                refs: [{
                    href: "https://sites.google.com/view/jrmot",
                    text: "Website"
                }, {
                    href: "https://ras.papercept.net/proceedings/IROS20/1436.pdf",
                    text: "PDF"
                }, {
                    href: "https://github.com/StanfordVL/JRMOT_ROS",
                    text: "Code"
                }, {
                    href: "https://www.youtube.com/watch?v=ySfhecY3DY0",
                    text: "Video"
                }]
            }, {
                authors: [],
                authorsText: "Danfei Xu, Misha Denil",
                image: "xu_purl2019.png",
                title: "Positive-Unlabeled Reward Learning",
                info: "CoRL 2020",
                refs: [{
                    href: "https://arxiv.org/abs/1911.00459",
                    text: "PDF"
                }]
            }, {
                authors: [Pe, Te],
                authorsText: "Daniel M. Bear, Chaofei Fan, Damian Mrowca, Yunzhu Li, Seth Alter, Aran Nayebi, Jeremy Schwartz, Li Fei-Fei, Jiajun Wu, Joshua B. Tenenbaum, Daniel L.K. Yamins",
                image: "danbear_neurips2020.jpg",
                title: "Learning Physical Graph Representations from Visual Scenes",
                info: "NeurIPS 2020",
                refs: [{
                    href: "https://arxiv.org/pdf/2006.12373.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Albert Haque, Arnold Milstein, Li Fei-Fei",
                image: "haque2020illuminating.png",
                title: "Illuminating the dark spaces of healthcare with ambient intelligence",
                info: "Nature 2020",
                refs: [{
                    href: "https://www.nature.com/articles/s41586-020-2669-y",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Amit Singh*, Albert Haque*, Alexandre Alahi, Serena Yeung, Michelle Guo, Jill R Glassman, William Beninati, Terry Platchek, Li Fei-Fei, Arnold Milstein",
                image: "singh2020automatic.jpg",
                title: "Automatic Detection of Hand Hygiene Using Computer Vision Technology",
                info: "Journal of the American Medical Informatics Association 2020",
                refs: [{
                    href: "https://academic.oup.com/jamia/article/doi/10.1093/jamia/ocaa115/5876566",
                    text: "PDF"
                }, {
                    href: "https://aicare.stanford.edu/projects/hand_hygiene/",
                    text: "Website"
                }]
            }, {
                authors: [Se, Pe],
                authorsText: "Pranav Khadpe, Ranjay Krishna, Li Fei-Fei, Jeffrey Hancock, Michael Bernstein",
                image: "ranjay_metaphors_square.png",
                title: "Conceptual Metaphors Impact Perceptions of Human-AI Collaboration",
                info: "CSCW 2020, Best Paper Honorable Mention Award",
                refs: [{
                    href: "https://arxiv.org/pdf/2008.02311.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Te],
                authorsText: "Yunzhu Li, Toru Lin*, Kexin Yi*, Daniel Bear, Daniel L. K. Yamins, Jiajun Wu, Joshua B. Tenenbaum, Antonio Torralba",
                image: "spotlight_vgpl.gif",
                title: "Visual Grounding of Learned Physical Models",
                info: "ICML 2020",
                refs: [{
                    href: "https://jiajunwu.com/papers/vgpl_icml.pdf",
                    text: "PDF"
                }, {
                    href: "http://visual-physics-grounding.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "JunYoung Gwak, Christopher Choy, Silvio Savarese",
                image: "junyoung_generative_detection",
                title: "Generative Sparse Detection Networks for 3D Single-shot Object Detection",
                info: "ECCV 2020 (Spotlight)",
                refs: [{
                    href: "hhttps://arxiv.org/pdf/2006.12356.pdf",
                    text: "PDF"
                }, {
                    href: "https://jgwak.com/publications/gsdn/",
                    text: "Website"
                }, {
                    href: "https://www.youtube.com/watch?v=g8UqlJZVnFo",
                    text: "Video"
                }]
            }, {
                authors: [Se, Pe],
                authorsText: "Linxi Fan*, Shyamal Buch*, Guanzhi Wang, Ryan Cao, Yuke Zhu, Juan Carlos Niebles, Li Fei-Fei",
                image: "rubiks_thumbnail.png",
                title: "RubiksNet: Learnable 3D-Shift for Efficient Video Action Recognition",
                info: "ECCV 2020",
                refs: [{
                    href: "https://stanfordvl.github.io/rubiksnet-site/assets/eccv20.pdf",
                    text: "PDF"
                }, {
                    href: "https://rubiksnet.stanford.edu",
                    text: "Website"
                }]
            }, {
                authors: [Se, Pe],
                authorsText: "Chien-Yi Chang, De-An Huang, Danfei Xu, Ehsan Adeli, Li Fei-Fei, Juan Carlos Niebles",
                image: "chienyi_eccv_2020.png",
                title: "Procedure Planning in Instructional Videos",
                info: "ECCV 2020",
                refs: [{
                    href: "https://arxiv.org/pdf/1907.01172.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Se],
                authorsText: "Vida Adeli, Ehsan Adeli, Ian Reid, Juan Carlos Niebles, Hamid Rezatofighi",
                image: "vida_iros2020.png",
                title: "Socially and Contextually Aware Human Motion and Pose Forecasting",
                info: "IEEE-RAL + IROS 2020",
                refs: [{
                    href: "https://arxiv.org/pdf/2007.06843.pdf",
                    text: "PDF"
                }, {
                    href: "https://www.youtube.com/watch?v=sTBNdBco1Yo",
                    text: "Video"
                }]
            }, {
                authors: [Se],
                authorsText: "Hsu-kuang Chiu, Ehsan Adeli, Juan Carlos Niebles",
                image: "seg2020.png",
                title: "Segmenting the Future",
                info: "IEEE-RAL + IROS 2020",
                refs: [{
                    href: "https://arxiv.org/pdf/1904.10666.pdf",
                    text: "PDF"
                }, {
                    href: "https://github.com/eddyhkchiu/segmenting_the_future/",
                    text: "Code"
                }]
            }, {
                authors: [De],
                authorsText: "Kevin Chen, Marynel Vázquez, Silvio Savarese",
                image: "kchen_iros_2020.png",
                title: "Localizing Against Drawn Maps via Spline-Based Registration",
                info: "IROS 2020",
                refs: [{
                    href: "https://drive.google.com/file/d/1wclGaIjnlqx26cpqIXgSjZXYCB4wqHdv/view?usp=sharing",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "Andrey Kurenkov*, Joseph Taglic*, Rohun Kulkarni, Marcus Dominguez-Kuhne, Animesh Garg, Roberto Martín-Martín, Silvio Savarese",
                image: "andrey_iros2020_pull_fig.png",
                title: "Visuomotor Mechanical Search: Learning to Retrieve Target Objects in Clutter",
                info: "IROS 2020",
                refs: [{
                    href: "https://arxiv.org/abs/2008.06073",
                    text: "PDF"
                }, {
                    href: "https://ai.stanford.edu/mech-search/",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "Michelle A. Lee*, Brent Yi*, Roberto Martín-Martín, Silvio Savarese, Jeannette Bohg",
                image: "michelle_iros2020_fuse.jpg",
                title: "Multimodal Sensor Fusion with Differentiable Filters",
                info: "IROS 2020",
                refs: [{
                    href: "https://sites.google.com/view/multimodalfilter ",
                    text: "Website"
                }, {
                    href: "https://github.com/brentyi/diffbayes",
                    text: "Code"
                }]
            }, {
                authors: [Pe],
                authorsText: "Mark Sheskin, Kimberly Scott, Candice M. Mills, Elika Bergelson, Elizabeth Bonawitz, Elizabeth S. Spelke, Li Fei-Fei, Frank C. Keil, Hyowon Gweon, Joshua B. Tenenbaum, Julian Jara-Ettinger, Karen E. Adolph, Marjorie Rhodes, Michael C. Frank, Samuel A. Mehr, and Laura Schulz",
                image: "cradle.png",
                title: "Online Developmental Science to Foster Innovation, Access, and Impact",
                info: "Trends in Cognitive Sciences",
                refs: [{
                    href: "https://www.sciencedirect.com/science/article/pii/S1364661320301455",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Adam S. Miner*, Albert Haque*, Jason A. Fries, Scott L. Fleming, Denise E. Wilfley, G. Terence Wilson, Arnold Milstein, Dan Jurafsky, Bruce A. Arnow, W. Stewart Agras, Li Fei-Fei, Nigam H. Shah",
                image: "miner2020assessing.jpg",
                title: "Assessing the Accuracy of Automatic Speech Recognition for Psychotherapy",
                info: "Nature Partner Journals (NPJ) Digital Medicine 2020",
                refs: [{
                    href: "https://www.nature.com/articles/s41746-020-0285-8",
                    text: "PDF"
                }, {
                    href: "https://github.com/som-shahlab/psych-audio",
                    text: "Code"
                }]
            }, {
                authors: [Pe, Se],
                authorsText: "Mandy Lu, Kathleen Poston, Adolf Pfefferbaum, Edith V. Sullivan, Li Fei-Fei, Kilian M. Pohl, Juan Carlos Niebles, and Ehsan Adeli",
                image: "mandy_miccai2020.png",
                title: "Vision-based Estimation of MDS-UPDRS Gait Scores for Assessing Parkinson’s Disease Motor Severity",
                info: "23rd International Conference on Medical Image Computing and Computer Assisted Intervention (MICCAI)",
                refs: [{
                    href: "https://arxiv.org/pdf/2007.08920.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe, De],
                authorsText: "Ajay Mandlekar*, Danfei Xu*, Roberto Martín-Martín, Silvio Savarese, Li Fei-Fei",
                image: "ajay_danfei_rss_2020.png",
                title: "Learning to Generalize Across Long-Horizon Tasks from Human Demonstrations",
                info: "Robotics: Science and Systems (RSS) 2020",
                refs: [{
                    href: "https://sites.google.com/view/gti2020/",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/abs/2003.06085",
                    text: "PDF"
                }, {
                    href: "https://www.youtube.com/watch?v=v5DqtK7sUOI&feature=emb_title",
                    text: "Video"
                }]
            }, {
                authors: [Te],
                authorsText: "Yikai Li*, Jiayuan Mao*, Xiuming Zhang, William T. Freeman, Joshua B. Tenenbaum, Jiajun Wu",
                image: "spotlight_p3i.jpg",
                title: "Perspective Plane Program Induction from a Single Image",
                info: "CVPR 2020",
                refs: [{
                    href: "https://jiajunwu.com/papers/p3i_cvpr.pdf",
                    text: "PDF"
                }, {
                    href: "http://p3i.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Yunbo Wang, Jiajun Wu, Mingsheng Long, Joshua B. Tenenbaum",
                image: "spotlight_bpnet.jpg",
                title: "Probabilistic Video Prediction from Noisy Data with a Posterior Confidence",
                info: "CVPR 2020",
                refs: [{
                    href: "https://jiajunwu.com/papers/bpnet_cvpr.pdf",
                    text: "PDF"
                }, {
                    href: "http://people.csail.mit.edu/yunbo/bpnet/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Andrew Luo, Zhoutong Zhang, Jiajun Wu, Joshua B. Tenenbaum",
                image: "spotlight_3dsln.jpg",
                title: "End-to-End Optimization of Scene Layout",
                info: "CVPR 2020 (Oral Presentation)",
                refs: [{
                    href: "https://jiajunwu.com/papers/3dsln_cvpr.pdf",
                    text: "PDF"
                }, {
                    href: "http://3dsln.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Pe, Se],
                authorsText: "Jingwei Ji, Ranjay Krishna, Li Fei-Fei, Juan Carlos Niebles",
                image: "ji_cvpr2020.png",
                title: "Action Genome: Actions as Composition of Spatio-temporal Scene Graphs",
                info: "CVPR 2020",
                refs: [{
                    href: "https://arxiv.org/pdf/1912.06992.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Se],
                authorsText: "Boxiao Pan, Haoye Cai, De-An Huang, Kuan-Hui Lee, Adrien Gaidon, Ehsan Adeli, Juan Carlos Niebles",
                image: "pan_cvpr2020.jpg",
                title: "Spatio-Temporal Graph for Video Captioning with Knowledge Distillation",
                info: "CVPR 2020",
                refs: [{
                    href: "https://arxiv.org/abs/2003.13942",
                    text: "PDF"
                }, {
                    href: "https://youtu.be/QxHttaZF_Xc",
                    text: "Video"
                }]
            }, {
                authors: [Se],
                authorsText: "Kaidi Cao, Jingwei Ji*, Zhangjie Cao*, Chien-Yi Chang, Juan Carlos Niebles",
                image: "cao_cvpr2020.png",
                title: "Few-Shot Video Classification via Temporal Alignment",
                info: "CVPR 2020",
                refs: [{
                    href: "https://arxiv.org/pdf/1906.11415.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Te],
                authorsText: "Yunzhu Li*, Hao He*, Jiajun Wu, Dina Katabi, Antonio Torralba",
                image: "spotlight_compkpm.gif",
                title: "Learning Compositional Koopman Operators for Model-Based Control",
                info: "ICLR 2020 (Spotlight)",
                refs: [{
                    href: "https://jiajunwu.com/papers/compkpm_iclr.pdf",
                    text: "PDF"
                }, {
                    href: "http://koopman.csail.mit.edu",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Kexin Yi*, Chuang Gan*, Yunzhu Li, Pushmeet Kohli, Jiajun Wu, Antonio Torralba, Joshua B. Tenenbaum",
                image: "spotlight_clevrer.gif",
                title: "CLEVRER: Collision Events for Video Representation and Reasoning",
                info: "ICLR 2020 (Spotlight)",
                refs: [{
                    href: "https://jiajunwu.com/papers/clevrer_iclr.pdf",
                    text: "PDF"
                }, {
                    href: "http://clevrer.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Zhoutong Zhang, Yunyun Wang, Chuang Gan, Jiajun Wu, Joshua B. Tenenbaum, Antonio Torralba, William T. Freeman",
                image: "spotlight_dap.jpg",
                title: "Deep Audio Priors Emerge from Harmonic Convolutional Networks",
                info: "ICLR 2020",
                refs: [{
                    href: "https://jiajunwu.com/papers/dap_ijcai.pdf",
                    text: "PDF"
                }, {
                    href: "http://dap.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "Fei Xia, Bokui Shen, Chengshu Li, Priya Kasimbeg, Micael Tchapmi, Alexander Toshev, Roberto Martín-Martín, Silvio Savarese",
                image: "fei_icra2020.jpg",
                title: "Interactive Gibson: A Benchmark for Interactive Navigation in Cluttered Environments",
                info: "IEEE-RAL + ICRA 2020",
                refs: [{
                    href: "https://arxiv.org/abs/1910.14442",
                    text: "PDF"
                }, {
                    href: "http://svl.stanford.edu/gibson2/",
                    text: "Website"
                }, {
                    href: "https://www.youtube.com/watch?v=qZDBb3z4Zq8&feature=emb_logo",
                    text: "Video"
                }]
            }, {
                authors: [Se],
                authorsText: "Bingbin Liu, Ehsan Adeli, Zhangjie Cao, Kuan-Hui Lee, Abhijeet Shenoi, Adrien Gaidon, Juan Carlos Niebles",
                image: "bingbin_icra2020.jpg",
                title: "Spatiotemporal Relationship Reasoning for Pedestrian Intent Prediction",
                info: "IEEE-RAL + ICRA 2020",
                refs: [{
                    href: "https://arxiv.org/abs/2002.08945",
                    text: "PDF"
                }]
            }, {
                authors: [Pe, Se],
                authorsText: "De-An Huang, Yu-Wei Chao*, Chris Paxton*, Xinke Deng, Li Fei-Fei, Juan Carlos Niebles, Animesh Garg, Dieter Fox",
                image: "dean_icra2020.png",
                title: "Motion Reasoning for Goal-Based Imitation Learning",
                info: "ICRA 2020",
                refs: [{
                    href: "https://arxiv.org/pdf/1911.05864.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De, Pe],
                authorsText: "Zengyi Qin, Kuan Fang, Yuke Zhu, Li Fei-Fei, Silvio Savarese",
                image: "zengyi_icra2020.png",
                title: "KETO: Learning Keypoint Representations for Tool Manipulation",
                info: "ICRA 2020",
                refs: [{
                    href: "https://arxiv.org/pdf/1910.11977.pdf",
                    text: "PDF"
                }, {
                    href: "https://sites.google.com/view/ke-to",
                    text: "Website"
                }]
            }, {
                authors: [De, Pe],
                authorsText: "Chen Wang, Roberto Martín-Martín, Danfei Xu, Jun Lv, Cewu Lu, Li Fei-Fei, Silvio Savarese, Yuke Zhu",
                image: "chen_icra2020.png",
                title: "6-PACK: Category-level 6D Pose Tracker with Anchor-Based Keypoints",
                info: "ICRA 2020",
                refs: [{
                    href: "https://arxiv.org/pdf/1910.10750.pdf",
                    text: "PDF"
                }, {
                    href: "https://sites.google.com/view/6packtracking",
                    text: "Website"
                }, {
                    href: "https://github.com/j96w/6-PACK",
                    text: "Code"
                }, {
                    href: "https://www.youtube.com/watch?v=INBjNZsnfy4&feature=emb_logo",
                    text: "Video"
                }]
            }, {
                authors: [Pe],
                authorsText: "Ajay Mandlekar, Fabio Ramos, Byron Boots, Li Fei-Fei, Animesh Garg, Dieter Fox",
                image: "ajay_icra2020.png",
                title: "IRIS: Implicit Reinforcement without Interaction at Scale for Learning Control from Offline Robot Manipulation Data",
                info: "ICRA 2020",
                refs: [{
                    href: "https://arxiv.org/abs/1911.05321",
                    text: "PDF"
                }, {
                    href: "https://sites.google.com/stanford.edu/iris/",
                    text: "Website"
                }, {
                    href: "https://www.youtube.com/watch?v=H9KZgrI2I7I&feature=emb_title",
                    text: "Video"
                }]
            }, {
                authors: [Te],
                authorsText: "Alina Kloss, Maria Bauza, Jiajun Wu, Joshua B. Tenenbaum, Alberto Rodriguez, Jeannette Bohg",
                image: "spotlight_contact.jpg",
                title: "Accurate Vision-based Manipulation through Contact Reasoning",
                info: "ICRA 2020",
                refs: [{
                    href: "https://jiajunwu.com/papers/contact_icra.pdf",
                    text: "PDF"
                }, {
                    href: "https://www.youtube.com/watch?v=YLnXLHWTA60",
                    text: "Video"
                }]
            }, {
                authors: [Te],
                authorsText: "Chuang Gan*, Yiwei Zhang*, Jiajun Wu, Boqing Gong, Joshua B. Tenenbaum",
                image: "spotlight_avn.jpg",
                title: "Look, Listen, and Act: Towards Audio-Visual Embodied Navigation",
                info: "ICRA 2020",
                refs: [{
                    href: "https://jiajunwu.com/papers/avn_icra.pdf",
                    text: "PDF"
                }, {
                    href: "http://avn.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Yunbo Wang*, Bo Liu*, Jiajun Wu, Yuke Zhu, Simon S. Du, Li Fei-Fei, Joshua B. Tenenbaum",
                image: "spotlight_dualsmc.gif",
                title: "DualSMC: Tunneling Differentiable Filtering and Planning under Continuous POMDPs",
                info: "IJCAI 2020",
                refs: [{
                    href: "https://jiajunwu.com/papers/dualsmc_icra.pdf",
                    text: "PDF"
                }, {
                    href: "http://people.csail.mit.edu/yunbo/dualsmc/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Siddhartha Chaudhuri, Daniel Ritchie, Jiajun Wu, Kai Xu, Hao Zhang",
                image: "spotlight_structgen.jpg",
                title: "Learning Generative Models of 3D Structures",
                info: "Eurographics State-of-the-Art Report (STAR) 2020",
                refs: [{
                    href: "https://jiajunwu.com/papers/structgen_egstar.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Te],
                authorsText: "Kevin Smith, Lingjie Mei, Shunyu Yao, Jiajun Wu, Elizabeth S. Spelke, Joshua B. Tenenbaum, Tomer D. Ullman",
                image: "spotlight_surprise.jpg",
                title: "The Fine Structure of Surprise in Intuitive Physics: When, Why, and How Much?",
                info: "CogSci 2020",
                refs: [{
                    href: "https://jiajunwu.com/papers/surprise_cogsci.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Se],
                authorsText: "Boxiao Pan*, Zhangjie Cao*, Ehsan Adeli, Juan Carlos Niebles",
                image: "boxiao_aaai2020.png",
                title: "Adversarial Cross-Domain Action Recognition with Co-Attention",
                info: "AAAI 2020 (Oral Presentation)",
                refs: [{
                    href: "https://arxiv.org/pdf/1912.10405.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Se],
                authorsText: "Karttikeya Mangalam, Ehsan Adeli, Kuan-Hui Lee, Adrien Gaidon, Juan Carlos Niebles",
                image: "ehsan_wacv2020.png",
                title: "Disentangling Human Dynamics for Pedestrian Locomotion Forecasting with Noisy Supervision",
                info: "IEEE Winter Conference on Applications of Computer Vision (WACV) 2020",
                refs: [{
                    href: "https://arxiv.org/pdf/1911.01138.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "David Golub, Roberto Martín-Martín, Ahmed El-Kishky, Silvio Savarese",
                image: "golub_wacv2020.jpg",
                title: "Leveraging Pretrained Image Classifiers for Language-Based Segmentation",
                info: "IEEE Winter Conference on Applications of Computer Vision (WACV) 2020",
                refs: [{
                    href: "https://arxiv.org/pdf/1911.00830.pdf",
                    text: "PDF"
                }, {
                    href: "https://sites.google.com/stanford.edu/cls-seg",
                    text: "Website"
                }]
            }]
        }, {
            name: "Publications 2019",
            publications: [{
                authors: [De, Pe],
                authorsText: "Kuan Fang, Yuke Zhu, Animesh Garg, Silvio Savarese, Li Fei-Fei",
                image: "fang2019corl.gif",
                title: "Dynamics Learning with Cascaded Variational Inference for Multi-Step Manipulation",
                info: "CoRL 2019 (Oral Presentation)",
                refs: [{
                    href: "https://arxiv.org/pdf/1910.13395.pdf",
                    text: "PDF"
                }, {
                    href: "http://pair.stanford.edu/cavin/",
                    text: "Website"
                }, {
                    href: "http://ai.stanford.edu/blog/cavin/",
                    text: "Blog"
                }, {
                    href: "https://github.com/StanfordVL/cavin ",
                    text: "Code"
                }]
            }, {
                authors: [De],
                authorsText: "Alexander Sax, Jeffrey O. Zhang, Bradley Emi, Amir Zamir, Silvio Savarese, Leonidas Guibas, Jitendra Malik",
                image: "sasha2019corl.png",
                title: "Learning to Navigate Using Mid-Level Visual Priors",
                info: "CoRL 2019",
                refs: [{
                    href: "http://perceptual.actor/assets/CoRL19_Mid_Level_Main.pdf",
                    text: "PDF"
                }, {
                    href: "http://perceptual.actor/",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "Chengshu Li, Fei Xia, Roberto Martín-Martín, Silvio Savarese",
                image: "HRL4IN.png",
                title: "HRL4IN: Hierarchical Reinforcement Learning for Interactive Navigation with Mobile Manipulators",
                info: "CoRL 2019",
                refs: [{
                    href: "https://arxiv.org/pdf/1910.11432.pdf",
                    text: "PDF"
                }, {
                    href: "https://sites.google.com/view/hrl4in/home",
                    text: "Website"
                }, {
                    href: "https://drive.google.com/file/d/13WK7G0pYyOc1jtEygpeWb6hpmTRlT5C9/view",
                    text: "Video"
                }, {
                    href: "https://github.com/ChengshuLi/HRL4IN",
                    text: "Code"
                }]
            }, {
                authors: [De],
                authorsText: "Andrey Kurenkov, Ajay Mandlekar, Roberto Martin-Martin, Silvio Savarese, Animesh Garg",
                image: "Corl2019_andreyajay.png",
                title: "AC-Teach: A Bayesian Actor-Critic Method for Policy Learning with an Ensemble of Suboptimal Teachers",
                info: "CoRL 2019",
                refs: [{
                    href: "https://sites.google.com/view/acteach/",
                    text: "Website"
                }]
            }, {
                authors: [Pe],
                authorsText: "Junwon Park, Ranjay Krishna, Pranav Khadpe, Li Fei-Fei,  Michael Bernstein",
                image: "ranjay_neurips2019_2.jpg",
                title: "AI-based Request Augmentation to Increase Crowdsourcing Participation",
                info: "HCOMP 2019",
                refs: [{
                    href: "https://www.aaai.org/ojs/index.php/HCOMP/article/download/5282/5134/",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "Jingfan Wang, Lyne P. Tchapmi, Arvind P. Ravikumar, Mike McGuire, Clay S. Bell, Daniel Zimmerle, Silvio Savarese, Adam R. Brandt",
                image: "pub_app_energy.png",
                title: "Machine vision for natural gas methane emissions detection using aninfrared camera",
                info: "Applied Energy, Volume 257",
                refs: [{
                    href: "https://authors.elsevier.com/a/1Z~Sz_6zgtIdab",
                    text: "PDF"
                }]
            }, {
                authors: [Te],
                authorsText: "Chi Han*, Jiayuan Mao*, Chuang Gan, Joshua B. Tenenbaum, Jiajun Wu",
                image: "spotlight_vcml.jpg",
                title: "Visual Concept-Metaconcept Learning",
                info: "NeurIPS 2019",
                refs: [{
                    href: "https://jiajunwu.com/papers/vcml_nips.pdf",
                    text: "PDF"
                }, {
                    href: "http://vcml.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Kevin Smith*, Lingjie Mei*, Shunyu Yao*, Jiajun Wu, Elizabeth S. Spelke, Joshua B. Tenenbaum, Tomer D. Ullman",
                image: "spotlight_adept.jpg",
                title: "Modeling Expectation Violation in Intuitive Physics with Coarse Probabilistic Object Representations",
                info: "NeurIPS 2019",
                refs: [{
                    href: "https://jiajunwu.com/papers/adept_nips.pdf",
                    text: "PDF"
                }, {
                    href: "http://physadept.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Pe],
                authorsText: "Sharon Zhou*, Mitchell Gordon*, Ranjay Krishna,  Austin Narcomey, Li Fei-Fei, Michael Bernstein",
                image: "hype_ranjay.jpg",
                title: "HYPE: Human eYe Perceptual Evaluation of Generative Models",
                info: "NeurIPS 2019 (Oral Presentation)",
                refs: [{
                    href: "https://arxiv.org/pdf/1904.01121.pdf",
                    text: "PDF"
                }, {
                    href: "https://hype.stanford.edu",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "Vineet Kosaraju, Amir Sadeghian, Roberto Martín-Martín, Ian Reid, S. Hamid Rezatofighi, Silvio Savarese",
                image: "social_bigat.png",
                title: "Social-BiGAT: Multimodal Trajectory Forecasting using Bicycle-GAN and Graph Attention Networks",
                info: "NeurIPS 2019",
                refs: [{
                    href: "https://arxiv.org/abs/1907.03395.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De, Pe],
                authorsText: "Danfei Xu, Roberto Martín-Martín, De-An Huang, Yuke Zhu, Silvio Savarese, Li Fei-Fei",
                image: "danfei_rpn.png",
                title: "Regression Planning Networks",
                info: "NeurIPS 2019",
                refs: [{
                    href: "https://arxiv.org/abs/1909.13072",
                    text: "PDF"
                }, {
                    href: "https://github.com/danfeiX/RPN",
                    text: "Code"
                }]
            }, {
                authors: [De, Pe],
                authorsText: "Kuan Fang, Yuke Zhu, Animesh Garg, Andrey Kurenkov, Viraj Mehta, Li Fei-Fei, Silvio Savarese",
                image: "fang2019ijrr",
                title: "Learning Task-Oriented Grasping for Tool Manipulation from Simulated Self-Supervision",
                info: "The International Journal of Robotics Research (IJRR) 2019",
                refs: [{
                    href: "https://doi.org/10.1177/0278364919872545",
                    text: "PDF"
                }, {
                    href: "https://sites.google.com/view/task-oriented-grasp/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Jiayuan Mao*, Xiuming Zhang*, Yikai Li, William T. Freeman, Joshua B. Tenenbaum, Jiajun Wu",
                image: "spotlight_pgim.jpg",
                title: "Program-Guided Image Manipulators",
                info: "ICCV 2019",
                refs: [{
                    href: "https://jiajunwu.com/papers/pgim_iccv.pdf",
                    text: "PDF"
                }, {
                    href: "http://pgim.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Rishi Veerapaneni*, John D. Co-Reyes*, Michael Chang*, Michael Janner, Chelsea Finn, Jiajun Wu, Joshua B. Tenenbaum, Sergey Levine",
                image: "spotlight_op3.jpg",
                title: "Entity Abstraction in Visual Model-Based Reinforcement Learning",
                info: "CoRL 2019",
                refs: [{
                    href: "https://jiajunwu.com/papers/op3_corl.pdf",
                    text: "PDF"
                }, {
                    href: "https://sites.google.com/view/op3website/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Yunyun Wang, Chuang Gan, Max H. Siegel, Zhoutong Zhang, Jiajun Wu, Joshua B. Tenenbaum",
                image: "spotlight_combsound.jpg",
                title: "A Computational Model for Combinatorial Generalization in Physical Perception from Sound",
                info: "CCN 2019",
                refs: [{
                    href: "https://jiajunwu.com/papers/combsound_ccn.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Te],
                authorsText: "Zhenjia Xu, Jiajun Wu, Andy Zeng, Joshua B. Tenenbaum, Shuran Song",
                image: "spotlight_densephysnet.gif",
                title: "DensePhysNet: Learning Dense Physical Object Representations via Multi-step Dynamic Interactions",
                info: "RSS 2019",
                refs: [{
                    href: "https://jiajunwu.com/papers/densephysnet_rss.pdf",
                    text: "PDF"
                }, {
                    href: "http://www.zhenjiaxu.com/DensePhysNet/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Sidi Lu*, Jiayuan Mao*, Joshua B. Tenenbaum, Jiajun Wu",
                image: "spotlight_ngsi.jpg",
                title: "Neurally-Guided Structure Inference",
                info: "ICML 2019",
                refs: [{
                    href: "https://jiajunwu.com/papers/ngsi_icml.pdf",
                    text: "PDF"
                }, {
                    href: "http://ngsi.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Jiayuan Mao, Chuang Gan, Pushmeet Kohli, Joshua B. Tenenbaum, Jiajun Wu",
                image: "spotlight_nscl.jpg",
                title: "The Neuro-Symbolic Concept Learner: Interpreting Scenes, Words, and Sentences from Natural Supervision",
                info: "ICLR 2019 (Oral Presentation)",
                refs: [{
                    href: "https://jiajunwu.com/papers/nscl_iclr.pdf",
                    text: "PDF"
                }, {
                    href: "http://nscl.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Michael Janner, Sergey Levine, William T. Freeman, Joshua B. Tenenbaum, Chelsea Finn, Jiajun Wu",
                image: "spotlight_o2p2.jpg",
                title: "Reasoning About Physical Interactions with Object-Oriented Prediction and Planning",
                info: "ICLR 2019",
                refs: [{
                    href: "https://jiajunwu.com/papers/o2p2_iclr.pdf",
                    text: "PDF"
                }, {
                    href: "https://people.eecs.berkeley.edu/~janner/o2p2/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Yunzhu Li, Jiajun Wu, Russ Tedrake, Joshua B. Tenenbaum, Antonio Torralba",
                image: "spotlight_dpi.jpg",
                title: "Learning Particle Dynamics for Manipulating Rigid Bodies, Deformable Objects, and Fluids",
                info: "ICLR 2019",
                refs: [{
                    href: "https://jiajunwu.com/papers/dpi_iclr.pdf",
                    text: "PDF"
                }, {
                    href: "http://dpi.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Yonglong Tian, Andrew Luo, Xingyuan Sun, Kevin Ellis, William T. Freeman, Joshua B. Tenenbaum, Jiajun Wu",
                image: "spotlight_shape2prog.jpg",
                title: "Learning to Infer and Execute 3D Shape Programs",
                info: "ICLR 2019",
                refs: [{
                    href: "https://jiajunwu.com/papers/shape2prog_iclr.pdf",
                    text: "PDF"
                }, {
                    href: "http://shape2prog.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Zhenjia Xu*, Zhijian Liu*, Chen Sun, Kevin Murphy, William T. Freeman, Joshua B. Tenenbaum, Jiajun Wu",
                image: "spotlight_psd.jpg",
                title: "Unsupervised Discovery of Parts, Structure, and Dynamics",
                info: "ICLR 2019",
                refs: [{
                    href: "https://jiajunwu.com/papers/psd_iclr.pdf",
                    text: "PDF"
                }, {
                    href: "http://psd.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Chen Sun, Per Karlsson, Jiajun Wu, Joshua B. Tenenbaum, Kevin Murphy",
                image: "spotlight_soccer.jpg",
                title: "Stochastic Prediction of Multi-Agent Interactions from Partial Observations",
                info: "ICLR 2019",
                refs: [{
                    href: "https://jiajunwu.com/papers/soccer_iclr.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Te],
                authorsText: "Yunchao Liu, Zheng Wu, Daniel Ritchie, William T. Freeman, Joshua B. Tenenbaum, Jiajun Wu",
                image: "spotlight_scene2prog.jpg",
                title: "Learning to Describe Scenes with Programs",
                info: "ICLR 2019",
                refs: [{
                    href: "https://jiajunwu.com/papers/scene2prog_iclr.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Te],
                authorsText: "Nima Fazeli, Miquel Oller, Jiajun Wu, Zheng Wu, Joshua B. Tenenbaum, Alberto Rodriguez",
                image: "spotlight_jenga.jpg",
                title: "See, Feel, Act: Hierarchical Learning for Complex Manipulation Skills with Multi-sensory Fusion",
                info: "Science Robotics 2019",
                refs: [{
                    href: "https://jiajunwu.com/papers/jenga_scirobot.pdf",
                    text: "PDF"
                }, {
                    href: "https://www.youtube.com/watch?v=o1j_amoldMs",
                    text: "Video"
                }]
            }, {
                authors: [Te],
                authorsText: "Ilker Yildirim, Jiajun Wu, Nancy Kanwisher, Joshua B. Tenenbaum",
                image: "spotlight_cortex.jpg",
                title: "An Integrative Computational Architecture for Object-Driven Cortex",
                info: "Current Opinion in Neurobiology 2019",
                refs: [{
                    href: "https://jiajunwu.com/papers/cortex_coneur.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Te],
                authorsText: "Yuanming Hu, Jiancheng Liu*, Andrew Spielberg*, Joshua B. Tenenbaum, William T. Freeman, Jiajun Wu, Daniela Rus, Wojciech Matusik",
                image: "spotlight_chainqueen.jpg",
                title: "ChainQueen: A Real-Time Differentiable Physical Simulator for Soft Robotics",
                info: "ICRA 2019",
                refs: [{
                    href: "https://jiajunwu.com/papers/chainqueen_icra.pdf",
                    text: "PDF"
                }, {
                    href: "https://www.youtube.com/watch?v=4IWD4iGIsB4",
                    text: "Video"
                }]
            }, {
                authors: [Te],
                authorsText: "Yunzhu Li, Jiajun Wu, Jun-Yan Zhu, Antonio Torralba, Joshua B. Tenenbaum, Russ Tedrake",
                image: "spotlight_propnet.jpg",
                title: "Propagation Networks for Model-Based Control Under Partial Observation",
                info: "ICRA 2019",
                refs: [{
                    href: "https://jiajunwu.com/papers/propnet_icra.pdf",
                    text: "PDF"
                }, {
                    href: "http://propnet.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Anurag Ajay, Maria Bauza, Jiajun Wu, Nima Fazeli, Joshua B. Tenenbaum, Alberto Rodriguez, Leslie P. Kaelbling",
                image: "spotlight_sain.jpg",
                title: "Combining Physical Simulators and Object-Based Networks for Control",
                info: "ICRA 2019",
                refs: [{
                    href: "https://jiajunwu.com/papers/sain_icra.pdf",
                    text: "PDF"
                }, {
                    href: "http://sain.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Tianfan Xue, Baian Chen, Jiajun Wu, Donglai Wei, William T. Freeman",
                image: "spotlight_toflow.jpg",
                title: "Video Enhancement with Task-Oriented Flow",
                info: "IJCV 2019",
                refs: [{
                    href: "https://jiajunwu.com/papers/toflow_ijcv.pdf",
                    text: "PDF"
                }, {
                    href: "http://toflow.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Tianfan Xue*, Jiajun Wu*, Katherine L. Bouman, William T. Freeman",
                image: "spotlight_vd.gif",
                title: "Visual Dynamics: Stochastic Future Generation via Layered Cross Convolutional Networks",
                info: "TPAMI 2019",
                refs: [{
                    href: "https://jiajunwu.com/papers/vd_tpami.pdf",
                    text: "PDF"
                }, {
                    href: "http://visualdynamics.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "Iro Armeni, Zhi-Yang He, JunYoung Gwak, Amir R. Zamir, Martin Fischer, Jitendra Malik, Silvio Savarese",
                image: "spacegraph.png",
                title: "3D Scene Graph: A Structure for Unified Semantics, 3D Space, and Camera",
                info: "ICCV 2019",
                refs: [{
                    href: "https://arxiv.org/pdf/1910.02527.pdf",
                    text: "PDF"
                }, {
                    href: "https://3dscenegraph.stanford.edu/",
                    text: "Website"
                }, {
                    href: "https://3dscenegraph.stanford.edu/images/SpaceGraph.m4v",
                    text: "Video"
                }]
            }, {
                authors: [Se],
                authorsText: "Borui Wang, Ehsan Adeli, Hsu-kuang Chiu, De-An Huang, Juan Carlos Niebles",
                image: "borui_iccv2019.jpg",
                title: "Imitation Learning for Human Pose Prediction",
                info: "ICCV 2019",
                refs: [{
                    href: "https://arxiv.org/abs/1909.03449",
                    text: "PDF"
                }]
            }, {
                authors: [Se],
                authorsText: "Jingwei Ji, Kaidi Cao, Juan Carlos Niebles",
                image: "jingwei_iccv19",
                title: "Learning Temporal Action Proposals with Fewer Labels",
                info: "ICCV 2019",
                refs: [{
                    href: "https://arxiv.org/abs/1910.01286",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Vincent S. Chen, Paroma Varma, Ranjay Krishna, Michael Bernstein, Christopher Re, Li Fei-Fei",
                image: "vincent_iccv2019.jpg",
                title: "Scene Graph Prediction with Limited Labels",
                info: "ICCV 2019",
                refs: [{
                    href: "https://arxiv.org/pdf/1904.11622.pdf",
                    text: "PDF"
                }, {
                    href: "https://cs.stanford.edu/people/ranjaykrishna/limitedlabels/index.html",
                    text: "Website"
                }]
            }, {
                authors: [De, Pe],
                authorsText: "Bokui Shen, Danfei Xu, Yuke Zhu, Leo Guibas, Li Fei-Fei, Silvio Savarese",
                image: "will_iccv2019.png",
                title: "Situational Fusion of Visual Representation for Visual Navigation",
                info: "ICCV 2019",
                refs: [{
                    href: "https://arxiv.org/pdf/1908.09073.pdf",
                    text: "PDF"
                }, {
                    href: "https://sites.google.com/stanford.edu/situationalfusion",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "Noriaki Hirose, Fei Xia, Roberto Martin-Martin, Amir Sadeghian, Silvio Savarese",
                image: "hirose_iros2019.png",
                title: "Deep Visual MPC-Policy Learning for Navigation",
                info: "IROS 2019 (IEEE RA-Letters)",
                refs: [{
                    href: "https://ieeexplore.ieee.org/document/8750823",
                    text: "PDF"
                }, {
                    href: "https://arxiv.org/abs/1903.02749",
                    text: "arXiv"
                }, {
                    href: "http://svl.stanford.edu/projects/dvmpc/",
                    text: "Website"
                }]
            }, {
                authors: [De, Pe],
                authorsText: "Ajay Mandlekar, Jonathan Booher, Max Spero, Albert Tung, Anchit Gupta, Yuke Zhu, Animesh Garg, Silvio Savarese, Li Fei-Fei",
                image: "mandlekar_iros19.jpg",
                title: "Scaling Robot Supervision to Hundreds of Hours with RoboTurk: Robotic Manipulation Dataset through Human Reasoning and Dexterity",
                info: "IROS 2019 (Best Cognitive Robotics Paper Finalist)",
                refs: [{
                    href: "https://roboturk.stanford.edu/realrobotdataset.html",
                    text: "Website"
                }, {
                    href: "https://arxiv.org/abs/1911.04052",
                    text: "PDF"
                }, {
                    href: "http://ai.stanford.edu/blog/roboturk/",
                    text: "Blog"
                }, {
                    href: "https://github.com/StanfordVL/roboturk_real_dataset",
                    text: "Code"
                }]
            }, {
                authors: [De, Pe, Se],
                authorsText: "De-An Huang, Danfei Xu, Yuke Zhu, Animesh Garg, Silvio Savarese, Li Fei-Fei, and Juan Carlos Niebles",
                image: "huang_iros19.jpg",
                title: "Continuous Relaxation of Symbolic Planner for One-Shot Imitation Learning",
                info: "IROS 2019",
                refs: [{
                    href: "https://arxiv.org/pdf/1908.06769.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De, Pe],
                authorsText: "Roberto Martín-Martín, Michelle A. Lee, Rachel Gardner, Silvio Savarese, Jeannette Bohg, Animesh Garg",
                image: "martin_iros19.jpg",
                title: "Variable Impedance in End-Effector Space: An Action Space for Reinforcement Learning of Contact-Rich Tasks",
                info: "IROS 2019",
                refs: [{
                    href: "https://arxiv.org/pdf/1906.08880.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De, Pe],
                authorsText: "Michelle A. Lee*, Yuke Zhu*, Krishnan Srinivasan, Parth Shah, Silvio Savarese, Li Fei-Fei, Animesh Garg, Jeannette Bohg",
                image: "lee-arxiv18-multimodal.png",
                title: "Making Sense of Vision and Touch: Self-Supervised Learning of Multimodal Representations for Contact-Rich Tasks",
                info: "ICRA 2019 (Best Paper Award)",
                refs: [{
                    href: "https://arxiv.org/abs/1810.10191",
                    text: "PDF"
                }, {
                    href: "https://sites.google.com/view/visionandtouch",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "Noriaki Hirose, Amir Sadeghian, Fei Xia, Roberto Martin-Martin, Silvio Savarese",
                image: "hirose_icra2019.png",
                title: "VUNet: Dynamic Scene View Synthesis for Traversability Estimation using an RGB Camera",
                info: "ICRA 2019 (IEEE RA-Letters)",
                refs: [{
                    href: "https://ieeexplore.ieee.org/document/8624332",
                    text: "PDF"
                }, {
                    href: "https://arxiv.org/pdf/1806.08864.pdf",
                    text: "arXiv"
                }, {
                    href: "http://svl.stanford.edu/projects/vunet/",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "Michael Danielczuk*, Andrey Kurenkov*, Ashwin Balakrishna, Matthew Matl, Roberto Martin-Martin, Animesh Garg, Silvio Savarese, Ken Goldberg",
                image: "andrey_splash.png",
                title: "Mechanical Search: Multi-Step Retrieval of a Target Object Occluded by Clutter",
                info: "ICRA 2019",
                refs: [{
                    href: "https://arxiv.org/abs/1903.01588",
                    text: "PDF"
                }, {
                    href: "https://ai.stanford.edu/mech-search/",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "Kevin Chen, Juan Pablo de Vicente, Gabriel Sepúlveda, Fei Xia, Alvaro Soto, Marynel Vázquez, Silvio Savarese",
                image: "chen_arxiv2019.png",
                title: "A Behavioral Approach to Visual Navigation with Graph Localization Networks",
                info: "RSS 2019",
                refs: [{
                    href: "https://arxiv.org/abs/1903.00445",
                    text: "PDF"
                }, {
                    href: "https://graphnav.stanford.edu",
                    text: "Website"
                }, {
                    href: "https://youtu.be/nN3B1F90CFM",
                    text: "Video"
                }]
            }, {
                authors: [Pe],
                authorsText: "Serena Yeung*, Francesca Rinaldo*, Jeffrey Jopling, Bingbin Liu, Rishab Mehra, N. Lance Downing, Michelle Guo, Gabriel M. Bianconi, Alexandre Alahi, Julia Lee, Brandi Campbell, Kayla Deru, William Beninati, Li Fei-Fei, Arnold Milstein",
                image: "yeung_npj2019.png",
                title: "A Computer Vision System for Deep Learning-based Detection of Patient Mobilization Activities in the ICU",
                info: "Nature Partner Journals (NPJ) Digital Medicine 2019",
                refs: [{
                    href: "https://www.nature.com/articles/s41746-019-0087-z",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Ranjay Krishna, Michael Bernstein, Li Fei-Fei",
                image: "krishna_cvpr2019",
                title: "Information Maximizing Visual Question Generation",
                info: "CVPR 2019",
                refs: [{
                    href: "https://arxiv.org/pdf/1903.11207.pdf",
                    text: "PDF"
                }, {
                    href: "https://cs.stanford.edu/people/ranjaykrishna/iq/index.html",
                    text: "Website"
                }, {
                    href: "https://github.com/ranjaykrishna/iq",
                    text: "Code"
                }]
            }, {
                authors: [De, Pe],
                authorsText: "Kuan Fang, Alexander Toshev, Li Fei-Fei, Silvio Savarese",
                image: "fang_cvpr2019",
                title: "Scene Memory Transformer for Embodied Agents in Long-Horizon Tasks",
                info: "CVPR 2019",
                refs: [{
                    href: "https://arxiv.org/abs/1903.03878",
                    text: "PDF"
                }, {
                    href: "https://sites.google.com/view/scene-memory-transformer",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "Christopher Choy, JunYoung Gwak, Silvio Savarese",
                image: "choy_minkowski.png",
                title: "4D Spatio-Temporal ConvNets: Minkowski Convolutional Neural Networks",
                info: "CVPR 2019",
                refs: [{
                    href: "http://arxiv.org/abs/1904.08755",
                    text: "PDF"
                }, {
                    href: "https://github.com/StanfordVL/MinkowskiEngine",
                    text: "Code"
                }]
            }, {
                authors: [De],
                authorsText: "Hamid Rezatofighi, Nathan Tsoi, JunYoung Gwak, Amir Sadeghian, Ian Reid, and Silvio Savarese",
                image: "hamid_iou_cvpr2019.png",
                title: "Generalized Intersection over Union",
                info: "CVPR 2019",
                refs: [{
                    href: "https://arxiv.org/pdf/1902.09630.pdf",
                    text: "PDF"
                }, {
                    href: "https://giou.stanford.edu/",
                    text: "Website"
                }, {
                    href: "https://github.com/generalized-iou",
                    text: "Code"
                }]
            }, {
                authors: [De],
                authorsText: "Lyne P. Tchampi, Vineet Kosaraju, Hamid Rezatofighi, Ian Reid, Silvio Savarese",
                image: "lyne_cvpr2019_1.png",
                title: "TopNet: Structural Point Cloud Decoder",
                info: "CVPR 2019",
                refs: [{
                    href: "http://openaccess.thecvf.com/content_CVPR_2019/html/Tchapmi_TopNet_Structural_Point_Cloud_Decoder_CVPR_2019_paper.html",
                    text: "PDF"
                }, {
                    href: "https://github.com/lynetcha/completion3d",
                    text: "Code"
                }, {
                    href: "http://completion3d.stanford.edu/",
                    text: "Benchmark"
                }]
            }, {
                authors: [De],
                authorsText: "Amir Sadeghian, Vineet Kosaraju, Ali Sadeghian, Noriaki Hirose, Hamid Rezatofighi, Silvio Savarese",
                image: "amir_sophie_2019.png",
                title: "SoPhie: An Attentive GAN for Predicting Paths Compliant to Social and Physical Constraints",
                info: "CVPR 2019",
                refs: [{
                    href: "https://arxiv.org/pdf/1806.01482.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De, Pe, Se],
                authorsText: "De-An Huang*, Suraj Nair*, Danfei Xu*, Yuke Zhu, Animesh Garg, Li Fei-Fei, Silvio Savarese, Juan Carlos Niebles",
                image: "huang-arxiv18-ntg",
                title: "Neural Task Graphs: Generalizing to Unseen Tasks from a Single Video Demonstration",
                info: "CVPR 2019 (Oral Presentation)",
                refs: [{
                    href: "https://arxiv.org/abs/1807.03480",
                    text: "PDF"
                }]
            }, {
                authors: [De, Pe],
                authorsText: "Chen Wang, Danfei Xu, Yuke Zhu, Roberto Martín-Martín, Cewu Lu, Li Fei-Fei, Silvio Savarese",
                image: "wang-arxiv19-6dofpose.png",
                title: "DenseFusion: 6D Object Pose Estimation by Iterative Dense Fusion",
                info: "CVPR 2019",
                refs: [{
                    href: "https://arxiv.org/pdf/1901.04780.pdf",
                    text: "PDF"
                }, {
                    href: "https://sites.google.com/view/densefusion",
                    text: "Website"
                }, {
                    href: "https://github.com/j96w/DenseFusion",
                    text: "Code"
                }]
            }, {
                authors: [Pe, Se],
                authorsText: "Chien-Yi Chang, De-An Huang, Yanan Sui, Li Fei-Fei, Juan Carlos Niebles",
                image: "cvpr19_d3tw",
                title: "D3TW: Discriminative Differentiable Dynamic Time Warping for Weakly Supervised Action Alignment and Segmentation",
                info: "CVPR 2019",
                refs: [{
                    href: "https://arxiv.org/abs/1901.02598",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Chenxi Liu, Liang-Chieh Chen, Florian Schroff, Hartwig Adam, Wei Hua, Alan Yuille, Li Fei-Fei",
                image: "chenxi_cvpr2019.png",
                title: "Auto-DeepLab: Hierarchical Neural Architecture Search for Semantic Image Segmentation",
                info: "CVPR 2019 (Oral Presentation)",
                refs: [{
                    href: "https://arxiv.org/pdf/1901.02985.pdf",
                    text: "PDF"
                }, {
                    href: "https://github.com/tensorflow/models/tree/master/research/deeplab/",
                    text: "Code"
                }]
            }, {
                authors: [Pe],
                authorsText: "Nam Vo, Lu Jiang, Chen Sun, Kevin Murphy, Li-Jia Li, Li Fei-Fei, James Hays",
                image: "vo_cvpr2019.png",
                title: "Composing Text and Image for Image Retrieval - an Empirical Odyssey",
                info: "CVPR 2019",
                refs: [{
                    href: "http://openaccess.thecvf.com/content_CVPR_2019/papers/Vo_Composing_Text_and_Image_for_Image_Retrieval_-_an_Empirical_CVPR_2019_paper.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Albert Haque, Michelle Guo, Prateek Verma, Li Fei-Fei",
                image: "haque_icassp2019.jpeg",
                title: "Audio-Linguistic Embeddings for Spoken Sentences",
                info: "ICASSP 2019",
                refs: [{
                    href: "https://arxiv.org/pdf/1902.07817.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Se],
                authorsText: "Hsu-Kuang Chiu, Ehsan Adeli, Borui Wang, De-An Huang, Juan Carlos Niebles",
                image: "chiu2019wacv",
                title: "Action-Agnostic Human Pose Forecasting",
                info: "WACV 2019",
                refs: [{
                    href: "https://arxiv.org/abs/1810.09676",
                    text: "PDF"
                }, {
                    href: "https://github.com/eddyhkchiu/pose_forecast_wacv",
                    text: "Code"
                }]
            }, {
                title: "Fully Convolutional Geometric Features",
                authorsText: "Christopher Choy, Jaesik Park, Vladlen Koltun",
                info: "ICCV 2019",
                refs: [{
                    href: "https://github.com/chrischoy/FCGF",
                    text: "Website"
                }, {
                    href: "https://node1.chrischoy.org/data/publications/fcgf/fcgf.pdf",
                    text: "PDF"
                }, {
                    href: "https://github.com/chrischoy/FCGF",
                    text: "Code"
                }],
                authors: []
            }]
        }, {
            name: "Publications 2018",
            publications: [{
                authors: [De, Pe],
                authorsText: "Ajay Mandlekar, Yuke Zhu, Animesh Garg, Jonathan Booher, Max Spero, Albert Tung, Julian Gao, John Emmons, Anchit Gupta, Emre Orbay, Silvio Savarese, Li Fei-Fei",
                image: "mandlekar2018corl.png",
                title: "RoboTurk: A Crowdsourcing Platform for Robotic Skill Learning through Imitation",
                info: "CORL 2018",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/mandlekar2018corl.pdf",
                    text: "PDF"
                }, {
                    href: "http://roboturk.stanford.edu",
                    text: "Website"
                }]
            }, {
                authors: [De, Pe],
                authorsText: "Linxi Fan*, Yuke Zhu*, Jiren Zhu, Zihua Liu, Orien Zeng, Anchit Gupta, Joan Creus-Costa, Silvio Savarese, Li Fei-Fei",
                image: "fan2018corl.png",
                title: "SURREAL: Open-Source Reinforcement Learning Framework and Robot Manipulation Benchmark",
                info: "CORL 2018",
                refs: [{
                    href: "/assets/publications/pdfs/fan2018corl.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Damian Mrowca*, Chengxu Zhuang*, Elias Wang*, Nick Haber, Li Fei-Fei, Joshua B Tenenbaum, Daniel L. K. Yamins",
                image: "mrowca2018nips",
                title: "Flexible Neural Representation for Physics Prediction",
                info: "NIPS 2018",
                refs: [{
                    href: "https://arxiv.org/abs/1806.08047",
                    text: "PDF"
                }, {
                    href: "https://neuroailab.github.io/physics/",
                    text: "Website"
                }, {
                    href: "https://github.com/neuroailab/physics_prediction",
                    text: "Code"
                }]
            }, {
                authors: [Pe],
                authorsText: "Nick Haber*, Damian Mrowca*, Li Fei-Fei, Daniel L K. Yamins",
                image: "haber2018nips",
                title: "Learning to Play with Intrinsically-Motivated Self-Aware Agents",
                info: "NIPS 2018",
                refs: [{
                    href: "https://arxiv.org/abs/1802.07442",
                    text: "PDF"
                }, {
                    href: "https://neuroailab.github.io/curiosity/",
                    text: "Website"
                }]
            }, {
                authors: [Se, Pe],
                authorsText: "Jun-Ting Hsieh, Bingbin Liu, De-An Huang, Li Fei-Fei, Juan Carlos Niebles",
                image: "hsieh2018nips",
                title: "Learning to Decompose and Disentangle Representations for Video Prediction",
                info: "NIPS 2018",
                refs: [{
                    href: "https://arxiv.org/pdf/1806.04166.pdf",
                    text: "PDF"
                }, {
                    href: "https://github.com/jthsieh/DDPAE-video-prediction",
                    text: "Code"
                }]
            }, {
                authors: [De],
                authorsText: "Riccardo Volpi*, Hongseok Namkoong*, Ozan Sener, John Duchi, Vittorio Murino, Silvio Savarese",
                image: "volpi2018nips",
                title: "Generalizing to Unseen Domains via Adversarial Data Augmentation",
                info: "NIPS 2018",
                refs: [{
                    href: "https://arxiv.org/pdf/1805.12018.pdf",
                    text: "PDF"
                }, {
                    href: "https://github.com/ricvolpi/generalize-unseen-domains",
                    text: "Code"
                }]
            }, {
                authors: [Te],
                authorsText: "Xiuming Zhang*, Zhoutong Zhang*, Chengkai Zhang, Joshua B. Tenenbaum, William T. Freeman, Jiajun Wu",
                image: "spotlight_genre.jpg",
                title: "Learning to Reconstruct Shapes from Unseen Classes",
                info: "NeurIPS 2018 (Oral Presentation)",
                refs: [{
                    href: "https://jiajunwu.com/papers/genre_nips.pdf",
                    text: "PDF"
                }, {
                    href: "http://genre.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Kexin Yi*, Jiajun Wu*, Chuang Gan, Antonio Torralba, Pushmeet Kohli, Joshua B. Tenenbaum",
                image: "spotlight_nsvqa.jpg",
                title: "Neural-Symbolic VQA: Disentangling Reasoning from Vision and Language Understanding",
                info: "NeurIPS 2018 (Spotlight)",
                refs: [{
                    href: "https://jiajunwu.com/papers/nsvqa_nips.pdf",
                    text: "PDF"
                }, {
                    href: "http://nsvqa.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Yilun Du, Zhijian Liu, Hector Basevi, Ales Leonardis, William T. Freeman, Joshua B. Tenenbaum, Jiajun Wu",
                image: "spotlight_scenephys.jpg",
                title: "Learning to Exploit Stability for 3D Scene Parsing",
                info: "NeurIPS 2018",
                refs: [{
                    href: "https://jiajunwu.com/papers/scenephys_nips.pdf",
                    text: "PDF"
                }, {
                    href: "http://scenephys.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Jun-Yan Zhu, Zhoutong Zhang, Chengkai Zhang, Jiajun Wu, Antonio Torralba, Joshua B. Tenenbaum, William T. Freeman",
                image: "spotlight_von.jpg",
                title: "Visual Object Networks: Image Generation with Disentangled 3D Representations",
                info: "NeurIPS 2018",
                refs: [{
                    href: "https://jiajunwu.com/papers/von_nips.pdf",
                    text: "PDF"
                }, {
                    href: "http://von.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Shunyu Yao, Tzu-Ming Harry Hsu, Jun-Yan Zhu, Jiajun Wu, Antonio Torralba, William T. Freeman, Joshua B. Tenenbaum",
                image: "spotlight_3dsdn.jpg",
                title: "3D-Aware Scene Manipulation via Inverse Graphics",
                info: "NeurIPS 2018",
                refs: [{
                    href: "https://jiajunwu.com/papers/3dsdn_nips.pdf",
                    text: "PDF"
                }, {
                    href: "http://3dsdn.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Anurag Ajay, Jiajun Wu, Nima Fazeli, Maria Bauza, Leslie P. Kaelbling, Joshua B. Tenenbaum, Alberto Rodriguez",
                image: "spotlight_physplus.jpg",
                title: "Augmenting Physical Simulators with Stochastic Neural Networks: Case Study of Planar Pushing and Bouncing",
                info: "IROS 2018 (Best Paper on Cognitive Robotics)",
                refs: [{
                    href: "https://jiajunwu.com/papers/physplus_iros.pdf",
                    text: "PDF"
                }, {
                    href: "http://physplus.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Shaoxiong Wang*, Jiajun Wu*, Xingyuan Sun, Wenzhen Yuan, William T. Freeman, Joshua B. Tenenbaum, Edward H. Adelson",
                image: "spotlight_touch.jpg",
                title: "3D Shape Perception from Monocular Vision, Touch, and Shape Priors",
                info: "IROS 2018",
                refs: [{
                    href: "https://jiajunwu.com/papers/touch_iros.pdf",
                    text: "PDF"
                }, {
                    href: "http://touch.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Jiajun Wu*, Tianfan Xue*, Joseph J. Lim, Yuandong Tian, Joshua B. Tenenbaum, Antonio Torralba, William T. Freeman",
                image: "spotlight_3dinn.jpg",
                title: "3D Interpreter Networks for Viewer-Centered Wireframe Modeling",
                info: "IJCV 2018",
                refs: [{
                    href: "https://jiajunwu.com/papers/3dinn_ijcv.pdf",
                    text: "PDF"
                }, {
                    href: "http://3dinterpreter.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Andrew Owens, Jiajun Wu, Josh H. McDermott, William T. Freeman, Antonio Torralba",
                image: "spotlight_ambient.jpg",
                title: "Learning Sight from Sound: Ambient Sound Provides Supervision for Visual Learning",
                info: "IJCV 2018",
                refs: [{
                    href: "https://jiajunwu.com/papers/ambient_ijcv.pdf",
                    text: "PDF"
                }, {
                    href: "http://andrewowens.com/ambient/index.html",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Zhijian Liu, William T. Freeman, Joshua B. Tenenbaum, Jiajun Wu",
                image: "spotlight_ppd.jpg",
                title: "Physical Primitive Decomposition",
                info: "ECCV 2018",
                refs: [{
                    href: "https://jiajunwu.com/papers/ppd_eccv.pdf",
                    text: "PDF"
                }, {
                    href: "http://ppd.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Jiajun Wu*, Chengkai Zhang*, Xiuming Zhang, Zhoutong Zhang, William T. Freeman, Joshua B. Tenenbaum",
                image: "spotlight_shapehd.jpg",
                title: "Learning Shape Priors for Single-View 3D Completion and Reconstruction",
                info: "ECCV 2018",
                refs: [{
                    href: "https://jiajunwu.com/papers/shapehd_eccv.pdf",
                    text: "PDF"
                }, {
                    href: "http://shapehd.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Tianfan Xue*, Jiajun Wu*, Zhoutong Zhang, Chengkai Zhang, Joshua B. Tenenbaum, William T. Freeman",
                image: "spotlight_tree.jpg",
                title: "Seeing Tree Structure from Vibration",
                info: "ECCV 2018",
                refs: [{
                    href: "https://jiajunwu.com/papers/tree_eccv.pdf",
                    text: "PDF"
                }, {
                    href: "http://tree.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Ilker Yildirim*, Kevin Smith*, Mario Belledonne*, Jiajun Wu, Joshua B. Tenenbaum",
                image: "spotlight_humanphys.jpg",
                title: "Neurocomputational Modeling of Human Physical Scene Understanding",
                info: "CCN 2018 (Oral Presentation)",
                refs: [{
                    href: "https://jiajunwu.com/papers/humanphys_ccn.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Te],
                authorsText: "Xiuming Zhang, Tali Dekel, Tianfan Xue, Andrew Owens, Qiurui He, Jiajun Wu, Stefanie Mueller, William T. Freeman",
                image: "spotlight_mosculp.gif",
                title: "MoSculp: Interactive Visualization of Shape and Time",
                info: "UIST 2018",
                refs: [{
                    href: "https://jiajunwu.com/papers/mosculp_uist.pdf",
                    text: "PDF"
                }, {
                    href: "http://mosculp.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "David Zheng, Vinson Luo, Jiajun Wu, Joshua B. Tenenbaum",
                image: "spotlight_ppn.jpg",
                title: "Unsupervised Learning of Latent Physical Properties Using Perception-Prediction Networks",
                info: "UAI 2018 (Oral Presentation)",
                refs: [{
                    href: "https://jiajunwu.com/papers/ppn_uai.pdf",
                    text: "PDF"
                }, {
                    href: "http://ppn.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Xingyuan Sun*, Jiajun Wu*, Xiuming Zhang, Zhoutong Zhang, Chengkai Zhang, Tianfan Xue, Joshua B. Tenenbaum, William T. Freeman",
                image: "spotlight_pix3d.jpg",
                title: "Pix3D: Dataset and Methods for Single-Image 3D Shape Modeling",
                info: "CVPR 2018",
                refs: [{
                    href: "https://jiajunwu.com/papers/pix3d_cvpr.pdf",
                    text: "PDF"
                }, {
                    href: "http://pix3d.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Xiang Long, Chuang Gan, Gerard de Melo, Jiajun Wu, Xiao Liu, Shilei Wen",
                image: "spotlight_attn.jpg",
                title: "Attention Clusters: Purely Attention Based Local Feature Integration for Video Classification",
                info: "CVPR 2018",
                refs: [{
                    href: "https://jiajunwu.com/papers/attn_cvpr.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De, Se],
                authorsText: "Xiaoxue Zang, Ashwini Pokle, Marynel Vázquez, Kevin Chen, Juan Carlos Niebles, Alvaro Soto and Silvio Savarese",
                image: "zang2018emnlp.jpg",
                title: "Translating Navigation Instructions in Natural Language to a High-Level Plan for Behavioral Robot Navigation",
                info: "EMNLP 2018",
                refs: [{
                    href: "https://arxiv.org/abs/1810.00663",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "Noriaki Hirose , Amir Sadeghian , Marynel Vázquez, Patrick Goebel, Silvio Savarese",
                image: "hirose2018iros.jpg",
                title: "GONet: A Semi-Supervised Deep Learning Approach For Traversability Estimation",
                info: "IROS 2018 (Finalist of Best Paper Award on Safety, Security and Rescue Robotics)",
                refs: [{
                    href: "https://arxiv.org/pdf/1803.03254.pdf",
                    text: "PDF"
                }, {
                    href: "http://cvgl.stanford.edu/gonet/",
                    text: "Website"
                }, {
                    href: "https://www.youtube.com/watch?v=SmVsGQ2-dlM",
                    text: "Video"
                }]
            }, {
                authors: [De],
                authorsText: "Kevin Chen, Christopher Choy, Manolis Savva, Angel X. Chang, Thomas Funkhouser, Silvio Savarese",
                image: "chen_accv2019.png",
                title: "Text2Shape: Generating Shapes from Natural Language by Learning Joint Embeddings",
                info: "ACCV 2018 (Oral Presentation)",
                refs: [{
                    href: "https://arxiv.org/abs/1803.08495",
                    text: "PDF"
                }, {
                    href: "https://github.com/kchen92/text2shape/",
                    text: "Code"
                }, {
                    href: "http://text2shape.stanford.edu",
                    text: "Website"
                }, {
                    href: "https://www.youtube.com/watch?v=zraPvRdl13Q&feature=youtu.be",
                    text: "Video"
                }]
            }, {
                authors: [Se],
                authorsText: "Jingwei Ji, Shyamal Buch, Alvaro Soto, Juan Carlos Niebles",
                image: "ji2018eccv.png",
                title: "End-to-End Joint Semantic Segmentation of Actors and Actions in Video",
                info: "ECCV 2018 (Oral Presentation)",
                refs: [{
                    href: "/assets/publications/pdfs/ji2018eccv.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Jiren Zhu*, Russell Kaplan*, Justin Johnson, Li Fei-Fei ",
                image: "hid2018eccv.png",
                title: "HiDDeN: Hiding Data With Deep Networks",
                info: "ECCV 2018",
                refs: [{
                    href: "https://arxiv.org/abs/1807.09937",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Michelle Guo, Edward Chou, De-An Huang, Shuran Song, Serena Yeung, and Li Fei-Fei",
                image: "guo2018graph.png",
                title: "Neural Graph Matching Networks for Fewshot 3D Action Recognition",
                info: "ECCV 2018",
                refs: [{
                    href: "/assets/publications/pdfs/guo2018graph.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Michelle Guo, Albert Haque, De-An Huang, Serena Yeung, and Li Fei-Fei",
                image: "guo2018focus.png",
                title: "Focus on the Hard Things: Dynamic Task Prioritization for Multitask Learning",
                info: "ECCV 2018",
                refs: [{
                    href: "/assets/publications/pdfs/guo2018focus.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe, Se],
                authorsText: "Bingbin Liu, Serena Yeung, Edward Chou, De-An Huang, Li Fei-Fei, Juan Carlos Niebles",
                image: "liu2018eccv.jpg",
                title: "Temporal Modular Networks for Retrieving Complex Compositional Activities in Videos",
                info: "ECCV 2018",
                refs: [{
                    href: "/assets/publications/pdfs/liu2018eccv.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe, Se],
                authorsText: "Zelun Luo, Jun-Ting Hsieh, Lu Jiang, Juan Carlos Niebles, Li Fei-Fei",
                image: "luo2018eccv.png",
                title: "Graph Distillation for Action Detection with Privileged Information",
                info: "ECCV 2018",
                refs: [{
                    href: "https://arxiv.org/abs/1712.00108",
                    text: "PDF"
                }, {
                    href: "http://alan.vision/eccv18_graph/",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "Amir Sadeghian, Ferdinand Legros*, Maxime Voisin*, Ricky Vesel, Alexandre Alahi, Silvio Savarese ( * Equal contribution)",
                image: "sadeghian2018eccv.png",
                title: "CAR-Net: Clairvoyant Attentive Recurrent Network",
                info: "ECCV 2018",
                refs: [{
                    href: "/assets/publications/pdfs/sadeghian2018eccv.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Bingbin Liu*, Michelle Guo*, Edward Chou, Rishab Mehra, Serena Yeung, N. Lance Downing, Francesca Salipur, Jeffrey Jopling, Brandi Campbell, Kayla Deru, William Beninati, Arnold Milstein, Li Fei-Fei",
                image: "icu2018mlhc.png",
                title: "3D Point Cloud-Based Visual Prediction of ICU Mobility Care Activities",
                info: "Machine Learning for Healthcare (MLHC), 2018",
                refs: [{
                    href: "/assets/publications/pdfs/icu2018mlhc.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Zelun Luo*, Jun-Ting Hsieh*, Niranjan Balachandar, Serena Yeung, Guido Pusiol, Jay Luxenberg, Grace Li, Li-Jia Li, N. Lance Downing, Arnold Milstein, Li Fei-Fei",
                image: "luo2018computer.gif",
                title: "Computer Vision-based Descriptive Analytics of Seniors' Daily Activities for Long-term Health Monitoring",
                info: "Machine Learning for Healthcare (MLHC), 2018",
                refs: []
            }, {
                authors: [Pe],
                authorsText: "Serena Yeung, N. Lance Downing, Li Fei-Fei, Arnold Milstein",
                image: "serenaNEJM2018.png",
                title: "Bedside Computer Vision -- Moving Artificial Intelligence from Driver Assistance to Patient Safety",
                info: "New England Journal of Medicine, 2018",
                refs: [{
                    href: "http://www.nejm.org/doi/full/10.1056/NEJMp1716891?rss=searchAndBrowse",
                    text: "PDF"
                }]
            }, {
                authors: [De, Pe],
                authorsText: "Kuan Fang, Yuke Zhu, Animesh Garg, Andrey Kurenkov, Viraj Mehta, Li Fei-Fei, Silvio Savarese",
                image: "kuanrss2018",
                title: "Learning Task-Oriented Grasping for Tool Manipulation from Simulated Self-Supervision",
                info: "RSS 2018, The International Journal of Robotics Research (IJRR) 2019",
                refs: [{
                    href: "https://sites.google.com/view/task-oriented-grasp/",
                    text: "PDF"
                }, {
                    href: "https://sites.google.com/view/task-oriented-grasp/",
                    text: "Website"
                }]
            }, {
                authors: [Pe],
                authorsText: "Nick Haber*, Damian Mrowca*, Li Fei-Fei, Daniel L. K. Yamins",
                image: "mrowca2018cogsci.png",
                title: "Emergence of Structured Behaviors from Curiosity-Based Intrinsic Motivation",
                info: "CogSci 2018",
                refs: [{
                    href: "https://arxiv.org/abs/1802.07461",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "Amir R. Zamir, Alexander Sax*, Bokui Shen* Leonidas Guibas, Jitendra Malik, Silvio Savarese",
                image: "taskonomy_thumbnail_loop.gif",
                title: "Taskonomy: Disentangling Task Transfer Learning",
                info: "CVPR 2018 (Oral Presentation, Winner of the Best Paper Award)",
                refs: [{
                    href: "https://taskonomy.vision/",
                    text: "Website"
                }, {
                    href: "https://github.com/StanfordVL/taskonomy/tree/master/taskbank",
                    text: "Code"
                }, {
                    href: "http://taskonomy.stanford.edu/taskonomy_CVPR2018.pdf",
                    text: "PDF"
                }, {
                    href: "https://taskonomy.vision/tasks",
                    text: "Online Demo"
                }]
            }, {
                authors: [De],
                authorsText: "Fei Xia*, Amir R. Zamir*, Zhi-Yang He*, Alexander Sax, Jitendra Malik, Silvio Savarese",
                image: "gibson-env.gif",
                title: "Gibson Env: Real-World Perception for Embodied Agents",
                info: "CVPR 2018 (Spotlight, Winner of NVIDIA Pioneering Research Award)",
                refs: [{
                    href: "http://gibsonenv.stanford.edu",
                    text: "Website"
                }, {
                    href: "http://gibson.vision/Gibson_CVPR2018.pdf",
                    text: "PDF"
                }, {
                    href: "https://github.com/StanfordVL/GibsonEnv",
                    text: "Code"
                }]
            }, {
                authors: [De],
                authorsText: "John Lambert, Ozan Sener, Silvio Savarese",
                image: "john_ozan2018.png",
                title: "Deep Learning under Privileged Information Using Heteroscedastic Dropout",
                info: "CVPR 2018 (Spotlight)",
                refs: [{
                    href: "https://arxiv.org/abs/1805.11614",
                    text: "PDF"
                }]
            }, {
                authors: [De, Pe],
                authorsText: "Agrim Gupta, Justin Johnson, Li Fei-Fei, Silvio Savarese, Alexandre Alahi",
                image: "agrim_cvpr2018.png",
                title: "Social GAN: Socially Acceptable Trajectories with Generative Adversarial Networks",
                info: "CVPR 2018",
                refs: [{
                    href: "https://arxiv.org/pdf/1803.10892",
                    text: "PDF"
                }, {
                    href: "https://github.com/agrimgupta92/sgan",
                    text: "Code"
                }]
            }, {
                authors: [Pe],
                authorsText: "Justin Johnson, Agrim Gupta, Li Fei-Fei",
                image: "justincvpr2018.png",
                title: "Image Generation from Scene Graphs",
                info: "CVPR 2018",
                refs: [{
                    href: "https://arxiv.org/abs/1804.01622",
                    text: "PDF"
                }, {
                    href: "https://github.com/google/sg2im",
                    text: "Code"
                }]
            }, {
                authors: [Pe],
                authorsText: "Ranjay Krishna, Ines Chami, Michael Bernstein, Li Fei-Fei",
                image: "referring_relationships_cvpr2018.png",
                title: "Referring Relationships",
                info: "CVPR 2018",
                refs: [{
                    href: "https://cs.stanford.edu/people/ranjaykrishna/referringrelationships/index.html",
                    text: "PDF"
                }, {
                    href: "https://cs.stanford.edu/people/ranjaykrishna/referringrelationships/index.html",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "Riccardo Volpi, Pietro Morerio, Silvio Savarese, Vittorio Murino",
                image: "riccardo.png",
                title: "Adversarial Feature Augmentation for Unsupervised Domain Adaptation",
                info: "CVPR 2018",
                refs: [{
                    href: "https://arxiv.org/abs/1711.08561",
                    text: "PDF"
                }, {
                    href: "https://github.com/ricvolpi/adversarial-feature-augmentation",
                    text: "Code"
                }]
            }, {
                authors: [De],
                authorsText: "Kuan Fang*, Te-Lin Wu*, Daniel Yang, Silvio Savarese, Joseph J. Lim",
                image: "demo2vec-cvpr2018.png",
                title: "Demo2Vec: Learning Object Affordances from Videos in the Wild",
                info: "CVPR 2018",
                refs: [{
                    href: "/assets/publications/pdfs/demo2vec-cvpr2018.pdf",
                    text: "PDF"
                }, {
                    href: "https://sites.google.com/view/demo2vec/",
                    text: "Website"
                }, {
                    href: "https://github.com/kuanfang/opra",
                    text: "Data"
                }]
            }, {
                authors: [Pe, Se],
                authorsText: "De-An Huang*, Shyamal Buch*, Lucio Dery, Animesh Garg, Li Fei-Fei, and Juan Carlos Niebles",
                image: "cvpr18_ramil.png",
                title: 'Finding "It": Weakly-Supervised Reference-Aware Visual Grounding in Instructional Video',
                info: "CVPR 2018 (Oral Presentation)",
                refs: [{
                    href: "http://ai.stanford.edu/~dahuang/papers/cvpr18-ramil.pdf",
                    text: "PDF"
                }, {
                    href: "https://finding-it.github.io/",
                    text: "Website"
                }]
            }, {
                authors: [Pe, Se],
                authorsText: "De-An Huang, Vignesh Ramanathan, Dhruv Mahajan, Lorenzo Torresani, Manohar Paluri, Li Fei-Fei, and Juan Carlos Niebles",
                image: "cvpr18_fb.gif",
                title: "What Makes a Video a Video: Analyzing Temporal Information in Video Understanding Models and Datasets",
                info: "CVPR 2018 (spotlight)",
                refs: [{
                    href: "http://ai.stanford.edu/~dahuang/papers/cvpr18-fb.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De, Se],
                authorsText: "Xiaoxue Zang, Marynel Vázquez, Juan Carlos Niebles, Alvaro Soto, Silvio Savarese",
                image: "behavioral-indoor-navigation-thumb.png",
                title: "Behavioral Indoor Navigation With Natural Language Directions",
                info: "HRI 2018 (Late Breaking Reports)",
                refs: [{
                    href: "/assets/publications/pdfs/behavior-indoor-navigation.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe, De],
                authorsText: "Danfei Xu*, Suraj Nair*, Yuke Zhu, Julian Gao, Animesh Garg, Li Fei-Fei, Silvio Savarese",
                image: "danfeinair_icra2018.png",
                title: "Neural Task Programming: Learning to Generalize Across Hierarchical Tasks ",
                info: "ICRA 2018",
                refs: [{
                    href: "https://arxiv.org/abs/1710.01813",
                    text: "PDF"
                }, {
                    href: "https://stanfordvl.github.io/ntp/",
                    text: "Website"
                }, {
                    href: "https://github.com/StanfordVL/ntp",
                    text: "Code"
                }]
            }, {
                authors: [De],
                authorsText: "Kuan Fang, Yunfei Bai, Stefan Hinterstoisser, Silvio Savarese, Mrinal Kalakrishnan",
                image: "fang2018icra.png",
                title: "Multi-Task Domain Adaptation for Deep Learning of Instance Grasping from Simulation",
                info: "ICRA 2018",
                refs: [{
                    href: "/assets/publications/pdfs/fang2018icra.pdf",
                    text: "PDF"
                }, {
                    href: "https://sites.google.com/view/multi-task-domain-adaptation/",
                    text: "Website"
                }]
            }, {
                authors: [Se],
                authorsText: "Gabriel Sepulveda, Juan Carlos Niebles, and Alvaro Soto",
                image: "sepulveda-wacv18.png",
                title: "A Deep Learning Based Behavioral Approach to Indoor Autonomous Navigation",
                info: "ICRA 2018",
                refs: [{
                    href: "https://arxiv.org/pdf/1803.04119v1.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Liyue Shen, Serena Yeung, Judy Hoffman, Greg Mori, Li Fei-Fei",
                image: "shen2018wacv.png",
                title: "Scaling Human-Object Interaction Recognition through Zero-Shot Learning",
                info: "WACV 2018",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/shen2018wacv.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "Andrey Kurenkov*, Jingwei Ji*, Animesh Garg, Viraj Mehta, JunYoung Gwak, Christopher Choy, Silvio Savarese",
                image: "deformnet-18.png",
                title: "DeformNet: Free-Form Deformation Network for 3D Shape Reconstruction from a Single Image",
                info: "WACV 2018",
                refs: [{
                    href: "/assets/publications/pdfs/deformnet.pdf",
                    text: "PDF"
                }, {
                    href: "https://www.youtube.com/watch?v=cKzXVL6W--8",
                    text: "Video"
                }, {
                    href: "https://deformnet-site.github.io/DeformNet-website/",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "Kuan Fang, Yu Xiang, Xiaocheng Li, Silvio Savarese",
                image: "fang2018wacv.png",
                title: "Recurrent Autoregressive Networks for Online Multi-Object Tracking",
                info: "WACV 2018",
                refs: [{
                    href: "/assets/publications/pdfs/fang2018wacv.pdf",
                    text: "PDF"
                }]
            }]
        }, {
            name: "Publications 2017",
            publications: [{
                authors: [De],
                authorsText: "Trevor Standley, Ozan Sener, Dawn Chen, Silvio Savarese",
                image: "image2mass.png",
                title: "image2mass: Estimating the Mass of an Object from Its Image",
                info: "CORL 2017 (Long Talk)",
                refs: [{
                    href: "/assets/publications/pdfs/standley17a.pdf",
                    text: "PDF"
                }, {
                    href: "http://trevorstandley.com/image2mass.html",
                    text: "Website"
                }, {
                    href: "https://github.com/tstandley/image2mass",
                    text: "Code"
                }, {
                    href: "https://youtu.be/xfyK03MEZ9Q?t=1h27m25s",
                    text: "TALK"
                }, {
                    href: "http://trevorstandley.com/bibtex/standley_corl_2017.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [Pe],
                authorsText: "Rajan Vaish, Snehalkumar Gaikwad, Geza Kovacs, Andreas Veit, Ranjay Krishna, Imanol Arrieta Ibarra, Camelia Simoiu, Michael Wilber, Serge Belongie, Sharad C. Goel, James Davis, Michael Bernstein.",
                image: "CrowdResearchOpenandScalableUniversityLaboratories.png",
                title: "Crowd Research: Open and Scalable University Laboratories",
                info: "UIST 2017 (Best Paper Honorable Mention)",
                refs: [{
                    href: "http://hci.stanford.edu/publications/2017/crowdresearch/crowd-research-uist2017.pdf",
                    text: "PDF"
                }, {
                    href: "http://crowdresearchinitiative.stanford.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Pe],
                authorsText: "Zelun Luo, Yuliang Zou, Judy Hoffman, Li Fei-Fei",
                image: "luo2017nips.png",
                title: "Label Efficient Learning of Transferable Representations across Domains and Tasks",
                info: "NIPS 2017",
                refs: [{
                    href: "/assets/publications/pdfs/luo2017nips.pdf",
                    text: "PDF"
                }, {
                    href: "http://alan.vision/nips17_website/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Jiajun Wu, Erika Lu, Pushmeet Kohli, William T. Freeman, Joshua B. Tenenbaum",
                image: "spotlight_vda.gif",
                title: "Learning to See Physics via Visual De-animation",
                info: "NeurIPS 2017 (Spotlight)",
                refs: [{
                    href: "https://jiajunwu.com/papers/vda_nips.pdf",
                    text: "PDF"
                }, {
                    href: "http://vda.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Jiajun Wu*, Yifan Wang*, Tianfan Xue, Xingyuan Sun, William T. Freeman, Joshua B. Tenenbaum",
                image: "spotlight_marrnet.jpg",
                title: "MarrNet: 3D Shape Reconstruction via 2.5D Sketches",
                info: "NeurIPS 2017 (Spotlight)",
                refs: [{
                    href: "https://jiajunwu.com/papers/marrnet_nips.pdf",
                    text: "PDF"
                }, {
                    href: "http://marrnet.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Michael Janner, Jiajun Wu, Tejas D. Kulkarni, Ilker Yildirim, Joshua B. Tenenbaum",
                image: "spotlight_rin.jpg",
                title: "Self-Supervised Intrinsic Image Decomposition",
                info: "NeurIPS 2017 (Best Paper at the New England Computer Vision Workshop)",
                refs: [{
                    href: "https://jiajunwu.com/papers/rin_nips.pdf",
                    text: "PDF"
                }, {
                    href: "http://rin.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Zhoutong Zhang, Qiujia Li, Zhengjia Huang, Jiajun Wu, Joshua B. Tenenbaum, William T. Freeman",
                image: "spotlight_fastsound.jpg",
                title: "Shape and Material from Sound",
                info: "NeurIPS 2017",
                refs: [{
                    href: "https://jiajunwu.com/papers/fastsound_nips.pdf",
                    text: "PDF"
                }, {
                    href: "http://sound.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Zhoutong Zhang*, Jiajun Wu*, Qiujia Li, Zhengjia Huang, James Traer, Josh H. McDermott, Joshua B. Tenenbaum, William T. Freeman",
                image: "spotlight_gensound.jpg",
                title: "Generative Modeling of Audible Shapes for Object Perception",
                info: "ICCV 2017",
                refs: [{
                    href: "https://jiajunwu.com/papers/gensound_iccv.pdf",
                    text: "PDF"
                }, {
                    href: "http://sound.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Chen Liu, Jiajun Wu, Pushmeet Kohli, Yasutaka Furukawa",
                image: "spotlight_im2cad.jpg",
                title: "Raster-to-Vector: Revisiting Floorplan Transformation",
                info: "ICCV 2017",
                refs: [{
                    href: "https://jiajunwu.com/papers/im2cad_iccv.pdf",
                    text: "PDF"
                }, {
                    href: "http://art-programmer.github.io/floorplan-transformation.html",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Jiajun Wu, Joshua B. Tenenbaum, Pushmeet Kohli",
                image: "spotlight_nsd.jpg",
                title: "Neural Scene De-rendering",
                info: "CVPR 2017",
                refs: [{
                    href: "https://jiajunwu.com/papers/nsd_cvpr.pdf",
                    text: "PDF"
                }, {
                    href: "http://nsd.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Amir A. Soltani, Haibin Huang, Jiajun Wu, Tejas D. Kulkarni, Joshua B. Tenenbaum",
                image: "spotlight_3dvae.jpg",
                title: "Synthesizing 3D Shapes via Modeling Multi-View Depth Maps and Silhouettes with Deep Generative Networks",
                info: "CVPR 2017",
                refs: [{
                    href: "https://jiajunwu.com/papers/3dvae_cvpr.pdf",
                    text: "PDF"
                }, {
                    href: "https://github.com/Amir-Arsalan/Synthesize3DviaDepthOrSil",
                    text: "Website"
                }]
            }, {
                authors: [Se],
                authorsText: "Kuo-Hao Zeng, Bokui Shen, De-An Huang, Min Sun, Juan Carlos Niebles.",
                image: "imitation.png",
                title: "Visual Forecasting by Imitating Dynamics in Natural Sequences.",
                info: "IEEE International Conference on Computer Vision (ICCV), Venice, Italy, October 2017.",
                refs: [{
                    href: "http://ai.stanford.edu/%7Edahuang/papers/iccv17-vfid.pdf",
                    text: "PDF"
                }, {
                    href: "https://www.youtube.com/watch?v=8WVKeiZikjg",
                    text: "Talk"
                }]
            }, {
                authors: [Pe, De],
                authorsText: "James Harrison*, Animesh Garg*, Boris Ivanovic, Yuke Zhu, Silvio Savarese, Li Fei-Fei, Marco Pavone",
                image: "adapt-isrr17.png",
                title: "AdaPT: Zero-Shot Adaptive Policy Transfer for Stochastic Dynamical Systems",
                info: "ISRR 2017.",
                refs: [{
                    href: "https://arxiv.org/abs/1707.04674",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "JunYoung Gwak*, Christopher B. Choy*, Animesh Garg, Manmohan Chandraker, Silvio Savarese.",
                image: "wsgan-iccv17-v2.png",
                title: "Weakly supervised 3D Reconstruction with Adversarial Constraint",
                info: "3DV 2017.",
                refs: [{
                    href: "https://arxiv.org/abs/1705.10904",
                    text: "PDF"
                }]
            }, {
                authors: [Se, Pe],
                authorsText: "Shyamal Buch, Victor Escorcia, Bernard Ghanem, Li Fei-Fei, Juan Carlos Niebles.",
                image: "sstad.png",
                title: "End-to-End, Single-Stream Temporal Action Detection in Untrimmed Videos.",
                info: "British Machine Vision Conference (BMVC), London, UK, September 2017 (Oral Presentation).",
                refs: [{
                    href: "/assets/publications/pdfs/buch2017bmvc.pdf",
                    text: "PDF"
                }, {
                    href: "https://github.com/shyamal-b/ss-tad",
                    text: "Code"
                }, {
                    href: "https://www.youtube.com/watch?v=uwlwJ_Br9tU",
                    text: "Talk"
                }]
            }, {
                authors: [Se],
                authorsText: "Shyamal Buch, Victor Escorcia, Chuanqi Shen, Bernard Ghanem, Juan Carlos Niebles.",
                image: "SST.jpg",
                title: "SST: Single-Stream Temporal Action Proposals.",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), Honolulu, Hawaii, USA, June 2017.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/buch2017cvpr.pdf",
                    text: "PDF"
                }, {
                    href: "https://drive.google.com/file/d/0B_-dKvCH2VL7WG01Wjh4TEdZSjQ/view?usp=sharing",
                    text: "POSTER"
                }, {
                    href: "https://github.com/shyamal-b/sst",
                    text: "Code"
                }]
            }, {
                authors: [Se],
                authorsText: "Kuo-Hao Zeng, Shih-Han Chou, Fu-Hsiang Chan, Juan Carlos Niebles, Min Sun.",
                image: "agent_risk.jpg",
                title: "Agent-centric Risk Assessment: Accident Anticipation and Risky Region Localization.",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), Honolulu, Hawaii, USA, June 2017.",
                refs: [{
                    href: "/assets/publications/pdfs/ZengCVPR17anticipation.pdf",
                    text: "PDF"
                }, {
                    href: "http://aliensunmin.github.io/project/video-Forecasting/",
                    text: "Website"
                }, {
                    href: "https://www.youtube.com/watch?v=CGLZhd-c0hw",
                    text: "Video"
                }, {
                    href: "http://ai.stanford.edu/~dahuang/posters/cvpr17_hao.pdf",
                    text: "Poster"
                }, {
                    href: "https://arxiv.org/abs/1705.06560",
                    text: "arXiv"
                }, {
                    href: "https://goo.gl/forms/WtMgvkX7AErt454V2",
                    text: "Data"
                }]
            }, {
                authors: [Se],
                authorsText: "Ivan Lillo, Juan Carlos Niebles and Alvaro Soto.",
                image: "sparse.jpg",
                title: "Sparse composition of body poses and atomic actions for human activity recognition in RGB-D videos.",
                info: "Image and Vision Computing, March 2017.",
                refs: [{
                    href: "http://ialillo.sitios.ing.uc.cl/ActionsCVPR2014/",
                    text: "Data"
                }, {
                    href: "http://dx.doi.org/10.1016/j.imavis.2016.11.004",
                    text: "DOI"
                }]
            }, {
                authors: [Se],
                authorsText: "Kuo-Hao Zeng, Tseng-Hung Chen, Ching-Yao Chuang, Yuan-Hong Liao, Juan Carlos Niebles and Min Sun.",
                image: "AAAI17VideoQA.jpg",
                title: "Leveraging Video Descriptions to Learn Video Question Answering.",
                info: "AAAI Conference on Artificial Intelligence (AAAI), San Francisco, USA, February 2017.",
                refs: [{
                    href: "http://aliensunmin.github.io/project/video-language/index.html#VideoQA",
                    text: "Website"
                }, {
                    href: "http://ug-video.com/",
                    text: "Data"
                }, {
                    href: "https://aaai.org/ocs/index.php/AAAI/AAAI17/paper/view/14906",
                    text: "DOI"
                }, {
                    href: "https://arxiv.org/abs/1611.04021",
                    text: "arXiv"
                }]
            }, {
                authors: [Pe],
                authorsText: "Timnit Gebru, Judy Hoffman, Li Fei-Fei.",
                image: "gebru2017iccv.jpg",
                title: "Fine-grained Recognition in the Wild: A Multi-Task Domain Adaptation Approach",
                info: "ICCV 2017.",
                refs: [{
                    href: "/assets/publications/pdfs/gebru2017iccv.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Yuke Zhu*, Daniel Gordon*, Eric Kolve, Dieter Fox, Li Fei-Fei, Abhinav Gupta, Roozbeh Mottaghi, Ali Farhadi.",
                image: "zhu2017iccv.png",
                title: "Visual Semantic Planning using Deep Successor Representations",
                info: "ICCV 2017.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/zhu2017iccv.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe, Se],
                authorsText: "Ranjay Krishna, Kenji Hata, Frederic Ren, Li Fei-Fei, Juan Carlos Niebles.",
                image: "krishna2017iccv.png",
                title: "Dense-Captioning Events in Videos",
                info: "ICCV 2017.",
                refs: [{
                    href: "https://arxiv.org/abs/1705.00754",
                    text: "PDF"
                }, {
                    href: "http://cs.stanford.edu/people/ranjaykrishna/densevid/",
                    text: "Website"
                }, {
                    href: "http://cs.stanford.edu/people/ranjaykrishna/densevid/video.mp4",
                    text: "Video"
                }, {
                    href: "https://github.com/ranjaykrishna/densevid_eval",
                    text: "Code"
                }, {
                    href: "http://cs.stanford.edu/people/ranjaykrishna/densevid/captions.zip",
                    text: "Data"
                }]
            }, {
                authors: [Pe],
                authorsText: "Justin Johnson, Bharath Hariharan, Laurens van der Maaten, Judy Hoffman, Li Fei-Fei, C. Lawrence Zitnick, Ross Girshick.",
                image: "johnson2017iccv.png",
                title: "Inferring and Executing Programs for Visual Reasoning",
                info: "ICCV 2017 (Oral Presentation).",
                refs: [{
                    href: "https://arxiv.org/abs/1705.03633",
                    text: "PDF"
                }, {
                    href: "http://cs.stanford.edu/people/jcjohns/iep",
                    text: "Website"
                }]
            }, {
                authors: [Pe],
                authorsText: "Agrim Gupta, Justin Johnson, Alexandre Alahi, Li Fei-Fei.",
                image: "gupta2017iccv.png",
                title: "Characterizing and Improving Stability in Neural Style Transfer.",
                info: "ICCV 2017.",
                refs: [{
                    href: "https://arxiv.org/abs/1705.02092",
                    text: "PDF"
                }]
            }, {
                authors: [Se],
                authorsText: "Kazuki Kozuka, Juan Carlos Niebles.",
                image: "fig_Kazuki_Kozuka.jpg",
                title: "Risky Region Localization with Point Supervision.",
                info: "IEEE International Conference on Computer Vision (ICCV) CVRSUAD Workshop, Venice, Italy, October 2017. (poster)",
                refs: [{
                    href: "/assets/publications/pdfs/kozuka_iccv2017_CVRSUAD.pdf",
                    text: "PDF"
                }, {
                    href: "/assets/publications/pdfs/iccv2017_kazuki_kozuka_poster.pdf",
                    text: "Poster"
                }]
            }, {
                authors: [Pe, De],
                authorsText: "Ajay Mandlekar*, Yuke Zhu*, Animesh Garg*, Li Fei-Fei, Silvio Savarese.",
                image: "mandlekar2017iros.png",
                title: "Adversarially Robust Policy Learning through Active Construction of Physically-Plausible Perturbations.",
                info: "IROS 2017.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/mandlekar2017iros.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe, De],
                authorsText: "A. Alahi, J. Wilson, L. Fei-Fei, S. Savarese.",
                image: "alahi2017icra.png",
                title: "Unsupervised Camera Localization in Crowded Spaces",
                info: "in IEEE International Conference on Robotics and Automation (ICRA), 2017.",
                refs: [{
                    href: "/assets/publications/pdfs/alahi_icra17.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "Lyne P. Tchapmi, Christopher B. Choy, Iro Armeni, JunYoung Gwak, Silvio Savarese.",
                image: "segcloud.png",
                title: "SEGCloud: Semantic Segmentation of 3D Point Clouds",
                info: "International Conference of 3D Vision (3DV) 2017 (Spotlight)",
                refs: [{
                    href: "/assets/publications/pdfs/segcloud_2017.pdf",
                    text: " PDF"
                }]
            }, {
                authors: [De],
                authorsText: "T. Bagautdinov, A. Alahi, F. Fleuret, P. Fua, S. Savarese,",
                image: "bagautdinov_1611.09078.png",
                title: "Social Scene Understanding: End-to-End Multi-Person Action Localization and Collective Activity Recognition",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2017 oral presentation.",
                refs: [{
                    href: "https://arxiv.org/abs/1611.09078",
                    text: " PDF"
                }]
            }, {
                authors: [De],
                authorsText: "D. Ji, J. Kwon, M. McFarland, S. Savarese,",
                image: "ji_1703.02168.png",
                title: "Deep View Morphing",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2017.",
                refs: [{
                    href: "https://arxiv.org/abs/1703.02168",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "A. R. Zamir*, T. Wu* , L. Sun, W. B. Shen, B. E. Shi, J. Malik, S. Savarese,",
                image: "zamir_1612.09508.png",
                title: "Feedback Networks",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2017.",
                refs: [{
                    href: "https://arxiv.org/pdf/1612.09508",
                    text: "PDF"
                }, {
                    href: "http://feedbacknet.stanford.edu/",
                    text: "Website"
                }, {
                    href: "assets/bibtex/zamir2016feedback.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "A. Sadeghian, A. Alahi, S. Savarese,",
                image: "sadeghian_1701.01909.png",
                title: "Tracking The Untrackable: Learning To Track Multiple Cues with Long-Term Dependencies",
                info: "ICCV 2017.",
                refs: [{
                    href: "https://arxiv.org/abs/1701.01909",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "I. Armeni*, A. Sax*, A. R. Zamir, S. Savarese,",
                image: "armeni_1702.01105.png",
                title: "Joint 2D-3D-Semantic Data for Indoor Scene Understanding",
                info: "in arXiv, 2017.",
                refs: [{
                    href: "https://arxiv.org/pdf/1702.01105.pdf",
                    text: "PDF"
                }, {
                    href: "http://3dsemantics.stanford.edu/",
                    text: "Website"
                }, {
                    href: "http://buildingparser.stanford.edu/images/2D-3D-S.txt",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "C. Wu, J. Zhang, O. Sener, B. Selman, S. Savarese, and A. Saxena,",
                image: "wu_1603.03541.png",
                title: "Watch-n-Patch: Unsupervised Learning of Actions and Relations",
                info: "IEEE Transactions on Pattern Analysis and Machine Intelligence(PAMI) 2017.",
                refs: [{
                    href: "https://arxiv.org/abs/1603.03541",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "Y. Xiang, W. Choi, Y. Lin and S. Savarese,",
                image: "xiang_xiang_wacv17.png",
                title: "Subcategory-aware Convolutional Neural Networks for Object Proposals and Detection",
                info: "In IEEE Winter Conference on Applications of Computer Vision (WACV), 2017.",
                refs: [{
                    href: "http://arxiv.org/abs/1604.04693",
                    text: "arXiv"
                }, {
                    href: "/assets/publications/pdfs/xiang_wacv17.pdf",
                    text: "PDF"
                }, {
                    href: "/assets/publications/pdfs/xiang_wacv17_tr.pdf",
                    text: " Technical Report"
                }, {
                    href: "assets/bibtex/xiang2017subcategory.bib",
                    text: "BibTeX"
                }, {
                    href: "http://www.cvlibs.net/datasets/kitti/eval_object_detail.php?result=5e17cbbabbf775d8cc376793168be49bd6f01608",
                    text: "KITTI Results"
                }]
            }, {
                authors: [Pe],
                authorsText: "Albert Haque, Michelle Guo, Alexandre Alahi, Serena Yeung, Zelun Luo, Alisha Rege, Amit Singh, Jeffrey Jopling, Lance Downing, William Beninati, Terry Platchek, Arnold Milstein, Li Fei-Fei.",
                image: "haque2017mlhc.png",
                title: "Towards Vision-Based Smart Hospitals: A System for Tracking and Monitoring Hand Hygiene Compliance.",
                info: "MLHC 2017.",
                refs: [{
                    href: "https://arxiv.org/pdf/1708.00163.pdf",
                    text: "PDF"
                }, {
                    href: "https://aicare.stanford.edu/projects/hand_hygiene/",
                    text: "Website"
                }]
            }, {
                authors: [Pe, Se],
                authorsText: "De-An Huang, Joseph J. Lim, Li Fei-Fei, and Juan Carlos Niebles.",
                image: "huang2017cvpr.png",
                title: "Unsupervised Visual-Linguistic Reference Resolution in Instructional Videos.",
                info: "CVPR 2017.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/huang2017cvpr.pdf",
                    text: "PDF"
                }, {
                    href: "http://ai.stanford.edu/~dahuang/projects/vlrr/",
                    text: "Website"
                }]
            }, {
                authors: [Pe],
                authorsText: "Danfei Xu, Yuke Zhu, Christopher B. Choy, Li Fei-Fei.",
                image: "xu2017cvpr.png",
                title: "Scene Graph Generation by Iterative Message Passing.",
                info: "CVPR 2017.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/xu2017cvpr.pdf",
                    text: "PDF"
                }, {
                    href: "http://cs.stanford.edu/~danfei/scene-graph/",
                    text: "Website"
                }]
            }, {
                authors: [Pe],
                authorsText: "Yuke Zhu, Joseph J. Lim, Li Fei-Fei.",
                image: "zhu2017cvpr.png",
                title: "Knowledge Acquisition for Visual Question Answering via Iterative Querying.",
                info: "CVPR 2017.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/zhu2017cvpr.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Serena Yeung, Vignesh Ramanathan, Olga Russakovsky, Liyue Shen, Greg Mori, Li Fei-Fei.",
                image: "yeung2017cvpr.png",
                title: "Learning to learn from noisy web videos.",
                info: "CVPR 2017.",
                refs: [{
                    href: "/assets/publications/pdfs/Yeung_Learning_to_Learn_CVPR_2017_paper.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Se, Pe],
                authorsText: "Shyamal Buch, Victor Escorcia, Chuanqi Shen, Bernard Ghanem, Juan Carlos Niebles.",
                image: "buch2017cvpr.png",
                title: "SST: Single-Stream Temporal Action Proposals.",
                info: "CVPR 2017.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/buch2017cvpr.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Justin Johnson, Bharath Hariharan, Laurens van der Maaten, Li Fei-Fei, C. Lawrence Zitnick, Ross Girshick.",
                image: "johnson2017cvpr.png",
                title: "CLEVR: A Diagnostic Dataset for Compositional Language and Elementary Visual Reasoning.",
                info: "CVPR 2017.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/johnson2017cvpr.pdf",
                    text: "PDF"
                }, {
                    href: "http://cs.stanford.edu/people/jcjohns/clevr/",
                    text: "Website"
                }]
            }, {
                authors: [Pe],
                authorsText: "Jonathan Krause, Justin Johnson, Ranjay Krishna, Li Fei-Fei.",
                image: "krause2017cvpr.png",
                title: "A Hierarchical Approach for Generating Descriptive Image Paragraphs.",
                info: "CVPR 2017 (spotlight).",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/krause2017cvpr.pdf",
                    text: "PDF"
                }, {
                    href: "http://cs.stanford.edu/people/ranjaykrishna/im2p/index.html",
                    text: "Website"
                }]
            }, {
                authors: [Pe],
                authorsText: "Zelun Luo, Boya Peng, De-An Huang, Alexandre Alahi, Li Fei-Fei.",
                image: "luo2017cvpr.png",
                title: "Unsupervised Learning of Long-Term Motion Dynamics for Videos.",
                info: "CVPR 2017.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/luo2017cvpr.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Katsuyuki Nakamura, Serena Yeung, Alexandre Alahi, Li Fei-Fei.",
                image: "nakamura2017cvpr.png",
                title: "Jointly Learning Energy Expenditures and Activities using Egocentric Multimodal Signals.",
                info: "CVPR 2017.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/nakamura2017cvpr.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Alexandre Alahi, Vignesh Ramanathan, Li Fei-Fei.",
                image: "alahi2017gcbcv2.png",
                title: "Tracking Millions of Humans in Crowded Space.",
                info: "Group and Crowd Behavior for Computer Vision.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/alahi2017gcbcv2.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe, De],
                authorsText: "Alexandre Alahi, Vignesh Ramanathan, Kratarth Goel, Alexandre Robicquet, Amir Abbas Sadeghian, Li Fei-Fei, Silvio Savarese.",
                image: "alahi2017gcbcv.png",
                title: "Learning to Predict Human Behaviour in Crowded Scenes.",
                info: "Group and Crowd Behavior for Computer Vision.",
                refs: [{
                    href: "/assets/publications/pdfs/alahi2017gcbcv.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Timnit Gebru, Jonathan Krause, Yilun Wang, Duyun Chen, Jia Deng, Li Fei-Fei.",
                image: "gebru2017aaai.jpg",
                title: "Fine-Grained Car Detection for Visual Census Estimation.",
                info: "AAAI 2017.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/gebru2017aaai.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Timnit Gebru, Jonathan Krause, Jia Deng, Li Fei-Fei.",
                image: "gebru2017chi.jpg",
                title: "Scalable Annotation of Fine-Grained Objects Without Experts.",
                info: "CHI 2017.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/gebru2017chi.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Yuke Zhu, Roozbeh Mottaghi, Eric Kolve, Joseph J. Lim, Abhinav Gupta, Li Fei-Fei, Ali Farhadi.",
                image: "icra2017.png",
                title: "Target-driven Visual Navigation in Indoor Scenes using Deep Reinforcement Learning.",
                info: "ICRA 2017.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/zhu2017icra.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Ranjay Krishna, Yuke Zhu, Oliver Groth, Justin Johnson, Kenji Hata, Joshua Kravitz, Stephanie Chen, Yannis Kalantidis, Li Jia-Li, David Ayman Shamma, Michael Bernstrein, Li Fei-Fei.",
                image: "visualgenome.png",
                title: "Visual Genome: Connecting Language and Vision Using Crowdsourced Dense Image Annotations.",
                info: "IJCV 2017.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/visualgenome.pdf",
                    text: "PDF"
                }, {
                    href: "http://visualgenome.org/",
                    text: "Website"
                }, {
                    href: "http://visualgenome.org/api/v0/api_home.html",
                    text: "Data"
                }, {
                    href: "https://github.com/ranjaykrishna/visual_genome_python_driver",
                    text: "API"
                }, {
                    href: "https://twitter.com/visualgenome",
                    text: "Twitter"
                }]
            }, {
                authors: [Pe],
                authorsText: "Kenji Hata, Ranjay Krishna, Li Fei-Fei, Michael Bernstein.",
                image: "hata2017cscw.png",
                title: "A Glimpse Far into the Future: Understanding Long-term Crowd Worker Accuracy.",
                info: "CSCW 2017.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/hata2017cscw.pdf",
                    text: "PDF"
                }, {
                    href: "http://cs.stanford.edu/people/ranjaykrishna/glimpse/",
                    text: "Website"
                }]
            }]
        }, {
            name: "Publications 2016",
            publications: [{
                authors: [Te],
                authorsText: "Tianfan Xue*, Jiajun Wu*, Katherine L. Bouman, William T. Freeman",
                image: "spotlight_vd.gif",
                title: "Visual Dynamics: Probabilistic Future Frame Synthesis via Cross Convolutional Networks",
                info: "NeurIPS 2016 (Oral Presentation)",
                refs: [{
                    href: "https://jiajunwu.com/papers/vd_nips.pdf",
                    text: "PDF"
                }, {
                    href: "http://visualdynamics.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Jiajun Wu*, Chengkai Zhang*, Tianfan Xue, William T. Freeman, Joshua B. Tenenbaum",
                image: "spotlight_3dgan.jpg",
                title: "Learning a Probabilistic Latent Space of Object Shapes via 3D Generative-Adversarial Modeling",
                info: "NeurIPS 2016",
                refs: [{
                    href: "https://jiajunwu.com/papers/3dgan_nips.pdf",
                    text: "PDF"
                }, {
                    href: "http://3dgan.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Jiajun Wu*, Tianfan Xue*, Joseph J. Lim, Yuandong Tian, Joshua B. Tenenbaum, Antonio Torralba, William T. Freeman",
                image: "spotlight_3dinn.jpg",
                title: "Single Image 3D Interpreter Network",
                info: "ECCV 2016 (Oral Presentation)",
                refs: [{
                    href: "https://jiajunwu.com/papers/3dinn_eccv.pdf",
                    text: "PDF"
                }, {
                    href: "http://3dinterpreter.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Andrew Owens, Jiajun Wu, Josh H. McDermott, William T. Freeman, Antonio Torralba",
                image: "spotlight_ambient.jpg",
                title: "Ambient Sound Provides Supervision for Visual Learning",
                info: "ECCV 2016 (Oral Presentation)",
                refs: [{
                    href: "https://jiajunwu.com/papers/ambient_eccv.pdf",
                    text: "PDF"
                }, {
                    href: "http://andrewowens.com/ambient/index.html",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Jiajun Wu, Joseph J. Lim, Hongyi Zhang, Joshua B. Tenenbaum, William T. Freeman",
                image: "spotlight_phys.jpg",
                title: "Physics 101: Learning Physical Object Properties from Unlabeled Videos",
                info: "BMVC 2016",
                refs: [{
                    href: "https://jiajunwu.com/papers/physics_bmvc.pdf",
                    text: "PDF"
                }, {
                    href: "http://phys101.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Renqiao Zhang*, Jiajun Wu*, Chengkai Zhang, William T. Freeman, Joshua B. Tenenbaum",
                image: "spotlight_blocks.jpg",
                title: "A Comparative Evaluation of Approximate Probabilistic Simulation and Deep Neural Networks as Accounts of Human Physical Scene Understanding",
                info: "CogSci 2016 (Oral Presentation)",
                refs: [{
                    href: "https://jiajunwu.com/papers/blocks_cogsci.pdf",
                    text: "PDF"
                }, {
                    href: "http://blocks.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Se],
                authorsText: "Victor Escorcia, Fabian Caba Heilbron, Juan Carlos Niebles, Bernard Ghanem.",
                image: "eccv16.jpg",
                title: "DAPs: Deep Action Proposals for Action Understanding.",
                info: "European Conference on Computer Vision (ECCV), Amsterdam, Netherlands, October 2016.",
                refs: [{
                    href: "https://link.springer.com/chapter/10.1007/978-3-319-46487-9_47",
                    text: "PDF"
                }, {
                    href: "https://ivul.kaust.edu.sa/Pages/pub-Daps.aspx",
                    text: "Website"
                }, {
                    href: "https://drive.google.com/open?id=0B0ZXjo_p8lHBRGlnZ0Q1dFk2SUk",
                    text: "Video"
                }, {
                    href: "https://link.springer.com/chapter/10.1007/978-3-319-46487-9_47",
                    text: "DOI"
                }, {
                    href: "https://github.com/escorciav/daps",
                    text: "Code"
                }]
            }, {
                authors: [Se],
                authorsText: "Kuo-Hao Zeng, Tseng-Hung Chen, Juan Carlos Niebles, Min Sun.",
                image: "VTG.jpg",
                title: "Title Generation for User Generated Videos.",
                info: "European Conference on Computer Vision (ECCV), Amsterdam, Netherlands, October 2016.",
                refs: [{
                    href: "https://link.springer.com/chapter/10.1007/978-3-319-46475-6_38",
                    text: "PDF"
                }, {
                    href: "http://ug-video.com/",
                    text: "Website"
                }, {
                    href: "https://www.youtube.com/watch?v=KCTQ0vMsyDc",
                    text: "Video"
                }, {
                    href: "http://ug-video.com/",
                    text: "Data"
                }, {
                    href: "https://link.springer.com/chapter/10.1007/978-3-319-46475-6_38",
                    text: "DOI"
                }, {
                    href: "https://arxiv.org/abs/1608.07068",
                    text: "arXiv"
                }]
            }, {
                authors: [Se],
                authorsText: "Fabian Caba Heilbron, Juan Carlos Niebles and Bernard Ghanem.",
                image: "proposals.jpg",
                title: "Fast Temporal Activity Proposals for Efficient Detection of Human Actions in Untrimmed Videos.",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), Las Vegas, USA, June 2016.",
                refs: [{
                    href: "https://doi.org/10.1109/CVPR.2016.211",
                    text: "PDF"
                }, {
                    href: "http://www.cabaf.net/temporalproposals/index.html",
                    text: "Website"
                }, {
                    href: "https://doi.org/10.1109/CVPR.2016.211",
                    text: "DOI"
                }, {
                    href: "https://github.com/cabaf/sparseprop",
                    text: "Code"
                }]
            }, {
                authors: [Se],
                authorsText: "Ivan Lillo, Juan Carlos Niebles and Alvaro Soto.",
                image: "actionlets3.jpg",
                title: "A Hierarchical Pose-Based Approach to Complex Action Understanding Using Dictionaries of Actionlets and Motion Poselets.",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), Las Vegas, USA, June 2016.",
                refs: [{
                    href: "https://doi.org/10.1109/CVPR.2016.218",
                    text: "PDF"
                }, {
                    href: "http://ialillo.sitios.ing.uc.cl/ActionsCVPR2014/",
                    text: "Data"
                }, {
                    href: "https://doi.org/10.1109/CVPR.2016.218",
                    text: "DOI"
                }, {
                    href: "https://arxiv.org/abs/1606.04992",
                    text: "arXiv"
                }]
            }, {
                authors: [Pe],
                authorsText: "Guido Pusiol, Andre Esteva, Scott S. Hall, Michael Frank, Arnold Milstein, Li Fei-Fei.",
                image: "pusiol2016miccai.png",
                title: "Vision-Based Classification of Developmental Disorders Using Eye-Movements.",
                info: "MICCAI 2016.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/pusiol2016miccai.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Cewu Lu*, Ranjay Krishna*, Michael Bernstein, Li Fei-Fei.",
                image: "lu2016eccv.png",
                title: "Visual Relationship Detection with Language Priors.",
                info: "ECCV 2016 (Oral Presentation).",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/lu2016eccv.pdf",
                    text: "PDF"
                }, {
                    href: "http://cs.stanford.edu/people/ranjaykrishna/vrd/",
                    text: "Website"
                }]
            }, {
                authors: [Pe, Se],
                authorsText: "De-An Huang, Li Fei-Fei, Juan Carlos Niebles.",
                image: "ectc-1.png",
                title: "Connectionist Temporal Modeling for Weakly Supervised Action Labeling.",
                info: "European Conference on Computer Vision (ECCV), Amsterdam, Netherlands, October 2016.",
                refs: [{
                    href: "https://link.springer.com/chapter/10.1007/978-3-319-46493-0_9",
                    text: "DOI"
                }, {
                    href: "https://www.youtube.com/watch?v=RW5it641vIs",
                    text: "Video"
                }, {
                    href: "https://github.com/daahuang/lasagne-ectc",
                    text: "Code"
                }, {
                    href: "https://arxiv.org/abs/1607.08584",
                    text: "arXiv"
                }]
            }, {
                authors: [Pe],
                authorsText: "Albert Haque, Boya Peng*, Zelun Luo*, Alexandre Alahi, Serena Yeung, Li Fei-Fei.",
                image: "haque2016eccv.jpg",
                title: "ITOP Dataset: Towards Viewpoint Invariant 3D Human Pose Estimation.",
                info: "ECCV 2016.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/haque2016eccv.pdf",
                    text: "PDF"
                }, {
                    href: "https://zenodo.org/record/3932973",
                    text: "Website"
                }]
            }, {
                authors: [Pe],
                authorsText: "Justin Johnson, Alexandre Alahi, and Li Fei-Fei.",
                image: "johnson2016eccv.jpg",
                title: "Perceptual Losses for Real-time Style Transfer and Single Image Super-Resolution.",
                info: "ECCV 2016.",
                refs: [{
                    href: "/assets/publications/pdfs/JohnsonECCV16.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Amy Bearman, Olga Russakovsky, Vittorio Ferrari and Li Fei-Fei.",
                image: "bearman2016eccv.png",
                title: "What's the point: Semantic segmentation with point supervision.",
                info: "ECCV 2016.",
                refs: [{
                    href: "https://arxiv.org/abs/1506.02106",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Jonathan Krause, Benjamin Sapp, Andrew Howard, Howard Zhou, Alexander Toshev, Tom Duerig, James Philbin, Li Fei-Fei.",
                image: "krause2016eccv.jpg",
                title: "The Unreasonable Effectiveness of Noisy Data for Fine-Grained Recognition.",
                info: "ECCV 2016.",
                refs: [{
                    href: "http://arxiv.org/abs/1511.06789",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Andrej Karpathy*, Justin Johnson*, Li Fei-Fei.",
                image: "KarpathyICLR2016.png",
                title: "Visualizing and Understanding Recurrent Networks.",
                info: "ICLR 2016 Workshop.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/KarpathyICLR2016.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Albert Haque, Alexandre Alahi, Li Fei-Fei.",
                image: "haque2016cvpr.png",
                title: "Recurrent Attention Models for Depth-Based Person Identification.",
                info: "CVPR 2016.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/haque2016cvpr.pdf",
                    text: "PDF"
                }, {
                    href: "http://www.albert.cm/projects/ram_person_id/",
                    text: "Website"
                }]
            }, {
                authors: [Pe],
                authorsText: "Serena Yeung, Olga Russakovsky, Greg Mori, Li Fei-Fei.",
                image: "yeung2016cvpr.png",
                title: "End-to-end Learning of Action Detection from Frame Glimpses in Videos.",
                info: "CVPR 2016.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/yeung2016cvpr.pdf",
                    text: "PDF"
                }, {
                    href: "http://ai.stanford.edu/~syyeung/frameglimpses.html",
                    text: "Website"
                }]
            }, {
                authors: [Pe, De],
                authorsText: "Alexandre Alahi*, Kratarth Goel*, Vignesh Ramanathan, Alexandre Robicquet, Li Fei-Fei, Silvio Savarese.",
                image: "alahi2016cvpr.png",
                title: "Social LSTM: Human Trajectory Prediction in Crowded Spaces.",
                info: "CVPR 2016 (spotlight).",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/CVPR16_N_LSTM.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/alahi_cvpr16.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [Pe],
                authorsText: "Vignesh Ramanathan, Jonathan Huang, Sami Abu-El-Haija, Alexander Gorban, Kevin Murphy, Li Fei-Fei.",
                image: "ramanathan2016cvpr.png",
                title: "Detecting Events and Key Actors in Multi-person Videos.",
                info: "CVPR 2016 (Oral Presentation).",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/ramanathan2016cvpr.pdf",
                    text: "PDF"
                }, {
                    href: "http://basketballattention.appspot.com",
                    text: "Website"
                }]
            }, {
                authors: [Pe],
                authorsText: "Justin Johnson*, Andrej Karpathy*, Li Fei-Fei.",
                image: "densecap.svg",
                title: "DenseCap: Fully Convolutional Localization Networks for Dense Captioning.",
                info: "CVPR 2016 (Oral Presentation).",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/johnson2016cvpr.pdf",
                    text: "PDF"
                }, {
                    href: "http://cs.stanford.edu/people/karpathy/densecap/",
                    text: "Website"
                }]
            }, {
                authors: [Pe],
                authorsText: "Yuke Zhu, Oliver Groth, Michael Bernstein, Li Fei-Fei.",
                image: "visual7w.png",
                title: "Visual7W: Grounded Question Answering in Images.",
                info: "CVPR 2016.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/zhu2016cvpr.pdf",
                    text: "PDF"
                }, {
                    href: "http://web.stanford.edu/~yukez/visual7w/",
                    text: "Website"
                }]
            }, {
                authors: [Pe],
                authorsText: "Christopher Baldassano, Diane M. Beck, Li Fei-Fei.",
                image: "chris16.png",
                title: "Human-object Interactions are More than the Sum of Their Parts.",
                info: "Cerebral Cortex 2016.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/CC2016.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Marius Cătălin Iordan, Michelle R. Greene, Diane M. Beck, Li Fei-Fei.",
                image: "catalin16.jpg",
                title: "Typicality Sharpens Category Representations in Object-Selective Cortex.",
                info: "Neuroimage 2016.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/iordan-etal-neuroimage-2016.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Ranjay Krishna, Kenji Hata, Stephanie Chen, Joshua Kravitz, David A. Shamma, Li Fei-Fei, Michael S. Bernstein.",
                image: "krishna2016chi.jpg",
                title: "Embracing Error to Enable Rapid Crowdsourcing.",
                info: "CHI: ACM Conference on Human Factors in Computing Systems, 2016.",
                refs: [{
                    href: "http://hci.stanford.edu/publications/2016/rsvp/rsvp.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Michelle R. Greene.",
                image: "CognitionIcon.png",
                title: "Estimations of Object Frequency are Frequently Overestimated.",
                info: "Cognition 2016.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/GreeneCognition2016.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Michelle R. Greene, Christopher Baldassano, Diane M. Beck, Li Fei-Fei.",
                image: "JEPGIcon.png",
                title: "Visual Scenes Are Categorized by Function.",
                info: "Journal of Experimental Psychology: General 2016.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/GreeneJEPG2016.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Marie E. Vachovsky, Grace Wu, Sorathan Chaturapruek, Olga Russakovsky, Rick Sommer, Li Fei-Fei.",
                image: "sailors.jpg",
                title: "Towards More Gender Diversity in CS through an Artificial Intelligence Summer Program for High School Girls.",
                info: "SIGCSE 2016.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/SAILORS-SIGCSE2016.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "C. B. Choy, J. Gwak, S. Savarese, M. Chandraker,",
                image: "choy_6487-universal-correspondence-network.png",
                title: "Universal Correspondence Network",
                info: "in Neural Information Processing Systems (NIPS), 2016. oral presentation",
                refs: [{
                    href: "https://papers.nips.cc/paper/6487-universal-correspondence-network",
                    text: " PDF"
                }, {
                    href: "http://cvgl.stanford.edu/projects/ucn",
                    text: "Website"
                }, {
                    href: "assets/bibtex/choy2016universal.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "O. Sener, H. O. Song, A. Saxena, S. Savarese,",
                image: "sener_6360-learning-transferrable-representations-for-unsupervised-domain-adaptation.png",
                title: "Learning Transferrable Representations for Unsupervised Domain Adaptation",
                info: "in Neural Information Processing Systems (NIPS), 2016.",
                refs: [{
                    href: "https://papers.nips.cc/paper/6360-learning-transferrable-representations-for-unsupervised-domain-adaptation.PDF",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/sener2016learning.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "C. B. Choy, D. Xu*, J. Gwak*, K. Chen, S. Savarese,",
                image: "choy_3d-r2n2.png",
                title: "3D-R2N2: A Unified Approach for Single and Multi-view 3D Object Reconstruction",
                info: "in European Conference on Computer Vision (ECCV), 2016.",
                refs: [{
                    href: "/assets/publications/pdfs/choy_eccv_3dr2n2_16.pdf",
                    text: "PDF"
                }, {
                    href: "https://github.com/chrischoy/3D-R2N2",
                    text: "Code"
                }, {
                    href: "http://3d-r2n2.stanford.edu/",
                    text: "Website"
                }, {
                    href: "assets/bibtex/choy20163d.bib",
                    text: "BibTeX"
                }, {
                    href: "https://arxiv.org/abs/1604.00449",
                    text: "arXiv"
                }]
            }, {
                authors: [De],
                authorsText: "A. Robicquet, A. Sadeghian, A. Alahi, S. Savarese,",
                image: "robicquet_ECCV16social.png",
                title: "Learning Social Etiquette: Human Trajectory Prediction",
                info: "in European Conference on Computer Vision (ECCV), 2016.",
                refs: [{
                    href: "/assets/publications/pdfs/ECCV16social.pdf",
                    text: "PDF"
                }, {
                    href: "http://cvgl.stanford.edu/projects/uav_data/",
                    text: "Website"
                }, {
                    href: "assets/bibtex/robicquet2016learning.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "L. Ballan, F. Castaldo, A. Alahi, F. Palmieri, S. Savarese,",
                image: "ballan_ballan_eccv16.png",
                title: "Knowledge Transfer for Scene-specific Motion Prediction",
                info: "in European Conference on Computer Vision (ECCV), 2016.",
                refs: [{
                    href: "/assets/publications/pdfs/ballan_eccv16.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "A. R. Zamir, P. Agrawal, T. Wekel, J. Malik, S. Savarese,",
                image: "zamir_zamir_eccv16.png",
                title: "Generic 3D Representations via Pose Estimation and Matching",
                info: "in European Conference on Computer Vision (ECCV), 2016.",
                refs: [{
                    href: "/assets/publications/pdfs/zamir_eccv16.pdf",
                    text: "PDF"
                }, {
                    href: "/assets/publications/pdfs/zamir_eccv16_supp.pdf",
                    text: "Supplementary Material"
                }, {
                    href: "http://3drepresentation.stanford.edu/",
                    text: "Website"
                }, {
                    href: "assets/bibtex/zamir_eccv16.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "Y. Xiang, W. Kim, W. Chen, J. Ji, C. Choy, H. Su, R. Mottaghi, L. Guibas, S. Savarese,",
                image: "xiang_xiang_eccv16.png",
                title: "ObjectNet3D: A Large Scale Database for 3D Object Recognition.",
                info: "in European Conference on Computer Vision (ECCV), 2016 (spotlight).",
                refs: [{
                    href: "/assets/publications/pdfs/xiang_eccv16.pdf",
                    text: "PDF"
                }, {
                    href: "/assets/publications/pdfs/xiang_eccv16_tr.pdf",
                    text: "Technical Report"
                }, {
                    href: "assets/bibtex/xiang_eccv16.bib",
                    text: "BibTeX"
                }, {
                    href: "http://cvgl.stanford.edu/projects/objectnet3d",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "D. Held, S. Thrun, S. Savarese,",
                image: "held_1604.01802.png",
                title: "Learning to Track at 100 FPS with Deep Regression Networks",
                info: "in European Conference on Computer Vision (ECCV), 2016.",
                refs: [{
                    href: "http://arxiv.org/abs/1604.01802",
                    text: "arXiv"
                }]
            }, {
                authors: [De],
                authorsText: "C. Redondo-Cabrera, R. López-Sastre, Y. Xiang, T. Tuytelaars, S. Savarese,",
                image: "redondocabrera_eccv2016-redondo.png",
                title: "Pose Estimation Errors, the Ultimate Diagnosis",
                info: "in European Conference on Computer Vision (ECCV), 2016.",
                refs: [{
                    href: "/assets/publications/pdfs/eccv2016-redondo.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/cabrera_eccv16.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "D. Held, D. Guillory, B. Rebsamen, S. Thrun, S. Savarese,",
                image: "held_RSS_2016_Final_Version_28.png",
                title: "A Probabilistic Framework for Real-time 3D Segmentation using Spatial, Temporal, and Semantic Cues",
                info: "Proceedings of Robotics: Science and Systems (RSS), 2016.",
                refs: [{
                    href: "http://davheld.github.io/segmentation3D/segmentation3D.html",
                    text: "Website"
                }, {
                    href: "assets/bibtex/held_rss16.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "I. Armeni, O. Sener, A. R. Zamir, H. Jiang, I. Brilakis, M. Fischer, S. Savarese,",
                image: "armeni_3D_Semantic_Parsing.png",
                title: "3D Semantic Parsing of Large-Scale Indoor Spaces",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2016 (oral presentation).",
                refs: [{
                    href: "/assets/publications/pdfs/3D_Semantic_Parsing.pdf",
                    text: "PDF"
                }, {
                    href: "/assets/publications/pdfs/3dsemanticparsing_supp_mat.pdf",
                    text: "Technical Report"
                }, {
                    href: "assets/bibtex/armeni_cvpr16.bib",
                    text: "BibTeX"
                }, {
                    href: "http://buildingparser.stanford.edu/",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "A. Jain, A. R. Zamir, S. Savarese, A. Saxena.",
                image: "jain_jain_cvpr16.png",
                title: "Structural-RNN: Deep Learning on Spatio-Temporal Graphs",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2016 (oral presentation, Best Student PDF Award).",
                refs: [{
                    href: "/assets/publications/pdfs/jain_cvpr16.pdf",
                    text: "PDF"
                }, {
                    href: "/assets/publications/pdfs/srnn_supplementary.pdf",
                    text: "Technical Report"
                }, {
                    href: "http://asheshjain.org/srnn/index.html",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "H. O. Song, Y. Xiang, S. Jegelka, S. Savarese.",
                image: "song_song_cvpr16.png",
                title: "Deep Metric Learning via Lifted Structured Feature Embedding",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2016 (spotlight).",
                refs: [{
                    href: "/assets/publications/pdfs/song_cvpr16.pdf",
                    text: "PDF"
                }, {
                    href: "/assets/publications/pdfs/song_cvpr16_supp.pdf",
                    text: "Technical Report"
                }, {
                    href: "http://ai.stanford.edu/%7Ehsong/bibs/Song-CVPR16.txt",
                    text: "BibTeX"
                }, {
                    href: "https://github.com/rksltnl/Deep-Metric-Learning-CVPR16",
                    text: "Code"
                }, {
                    href: "http://cvgl.stanford.edu/projects/lifted_struct",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "Saumitro Dasgupta, Kuan Fang* , Kevin Chen*, Silvio Savarese,",
                image: "dasgupta_delay-robust-spatial.png",
                title: "DeLay: Robust Spatial Layout Estimation for Cluttered Indoor Scenes",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2016.",
                refs: [{
                    href: "/assets/publications/pdfs/delay-robust-spatial.pdf",
                    text: "PDF"
                }, {
                    href: "deeplayout.stanford.edu",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "D. Held, S. Thrun, S. Savarese,",
                image: "robust_single-view_instance_recognition.png",
                title: "Robust Single-View Instance Recognition",
                info: "in IEEE International Conference on Robotics and Automation (ICRA) 2016.",
                refs: [{
                    href: "/assets/publications/pdfs/held_icra16.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/held_icra16.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "C. Wu, J. Zhang, B. Selman, S. Savarese and A. Saxena,",
                image: "wu_wu_icra16.png",
                title: "Watch-Bot: Unsupervised Learning for Reminding Humans of Forgotten Actions",
                info: "in IEEE International Conference on Robotics and Automation (ICRA) 2016.",
                refs: [{
                    href: "/assets/publications/pdfs/wu_icra16.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/wu_icra16.bib",
                    text: "BibTeX"
                }]
            }, {
                title: "ITOP Dataset: Towards Viewpoint Invariant 3D Human Pose Estimation",
                authorsText: "Albert Haque, Boya Peng*, Zelun Luo*, Alexandre Alahi, Serena Yeung, Li Fei-Fei",
                info: "ECCV 2016",
                refs: [{
                    href: "https://zenodo.org/record/3932973",
                    text: "Website"
                }],
                authors: [Pe]
            }]
        }, {
            name: "Publications 2015",
            publications: [{
                authors: [Se],
                authorsText: "Fabian Caba, Victor Escorcia, Bernard Ghanem, Juan Carlos Niebles.",
                image: "anet_cvpr15b.jpg",
                title: "ActivityNet: A Large-Scale Video Benchmark for Human Activity Understanding.",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), Boston, USA, June 2015.",
                refs: [{
                    href: "/assets/publications/pdfs/Heilbron_ActivityNet_A_Large-Scale_2015_CVPR_paper.pdf",
                    text: "PDF"
                }, {
                    href: "http://activity-net.org",
                    text: "Website"
                }, {
                    href: "http://activity-net.org/download.html",
                    text: "Data"
                }, {
                    href: "https://doi.org/10.1109/CVPR.2015.7298698",
                    text: "DOI"
                }, {
                    href: "https://github.com/activitynet/ActivityNet",
                    text: "Code"
                }]
            }, {
                authors: [Te],
                authorsText: "Jiajun Wu*, Ilker Yildirim*, Joseph J. Lim, William T. Freeman, Joshua B. Tenenbaum",
                image: "spotlight_galileo.jpg",
                title: "Galileo: Perceiving Physical Object Properties by Integrating a Physics Engine with Deep Learning",
                info: "NeurIPS 2015",
                refs: [{
                    href: "https://jiajunwu.com/papers/galileo_nips.pdf",
                    text: "PDF"
                }, {
                    href: "http://galileo.csail.mit.edu/",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Jiajun Wu, Yinan Yu, Chang Huang, Kai Yu",
                image: "spotlight_dmil.jpg",
                title: "Deep Multiple Instance Learning for Image Classification and Auto-Annotation",
                info: "CVPR 2015",
                refs: [{
                    href: "https://jiajunwu.com/papers/dmil_cvpr.pdf",
                    text: "PDF"
                }, {
                    href: "https://jiajunwu.com/projects/dmil.html",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Jun-Yan Zhu, Jiajun Wu, Yan Xu, Eric Chang, Zhuowen Tu",
                image: "spotlight_bmcl.jpg",
                title: "Unsupervised Object Discovery via Saliency-Guided Multiple Class Learning",
                info: "TPAMI 2015",
                refs: [{
                    href: "https://jiajunwu.com/papers/bmcl_tpami.pdf",
                    text: "PDF"
                }, {
                    href: "http://people.csail.mit.edu/junyanz/projects/bMCL/index.html",
                    text: "Website"
                }]
            }, {
                authors: [Se],
                authorsText: "Victor Escorcia, Juan Carlos Niebles, Bernard Ghanem.",
                image: "cvpr15a.jpg",
                title: "On the Relationship between Visual Attributes and Convolutional Networks.",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), Boston, USA, June 2015.",
                refs: [{
                    href: "/assets/publications/pdfs/Escorcia_On_the_Relationship_2015_CVPR_paper.pdf",
                    text: "PDF"
                }, {
                    href: "https://drive.google.com/open?id=0B0ZXjo_p8lHBb3dDakFpNXRrUkU",
                    text: "Video"
                }, {
                    href: "https://doi.org/10.1109/CVPR.2015.7298730",
                    text: "DOI"
                }]
            }, {
                authors: [Se],
                authorsText: "Bernard Ghanem, Ali Thabet, Juan Carlos Niebles, Fabian Caba.",
                image: "manhattan.jpg",
                title: "Robust Manhattan Frame Estimation from a Single RGB-D Image.",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), Boston, USA, June 2015.",
                refs: [{
                    href: "/assets/publications/pdfs/Ghanem_Robust_Manhattan_Frame_2015_CVPR_paper.pdf",
                    text: "PDF"
                }, {
                    href: "https://ivul.kaust.edu.sa/Pages/Pub-Manhattan-Frame-Estimation-CVPR-2015.aspx",
                    text: "Website"
                }, {
                    href: "https://ivul.kaust.edu.sa/Documents/Data/Robust%20Manhattan%20Frame%20Estimation%20from%20a%20Single%20RGB-D%20Image.zip",
                    text: "Data"
                }, {
                    href: "https://doi.org/10.1109/CVPR.2015.7299001",
                    text: "DOI"
                }, {
                    href: "https://ivul.kaust.edu.sa/Documents/more/code/MFE.zip",
                    text: "Code"
                }]
            }, {
                authors: [De],
                authorsText: "A. X. Chang, T. Funkhouser, L. Guibas, P. Hanrahan, Q. Huang, Z. Li, S. Savarese, M. Savva, S. Song, H. Su, J. Xiao, L. Yi, F. Yu.",
                image: "chang_1512.03012v1.png",
                title: "ShapeNet: An Information-Rich 3D Model Repository",
                info: "in arXiv 2015.",
                refs: [{
                    href: "http://arxiv.org/pdf/1512.03012v1.pdf",
                    text: "PDF"
                }, {
                    href: "http://dblp.uni-trier.de/rec/bibtex/journals/corr/ChangFGHHLSSSSX15",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "W. Choi, Y. Chao, C. Pantofaru, S. Savarese.",
                image: "choi_ijcv15.png",
                title: "Indoor Scene Understanding with Geometric and Semantic Contexts",
                info: "in International Journal of Computer Vision (IJCV) April 2015, Volume 112, Issue 2, pp 204-220.",
                refs: [{
                    href: "http://link.springer.com/article/10.1007%2Fs11263-014-0779-4",
                    text: "DOI"
                }, {
                    href: "assets/bibtex/choi_ijcv15.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "F. Castaldo, A. R. Zamir, R. Angst, F. Palmieri, and S. Savarese.",
                image: "castaldo_castaldo_iccv15.png",
                title: "Semantic Cross-View Matching",
                info: "in Vision from Satellite to Street - The Second International Workshop in Conjunction with ICCV 2015. Google runner-up best paper award on VFSTS Workshop 2015.",
                refs: [{
                    href: "/assets/publications/pdfs/castaldo_iccv15.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/castaldo_vss15.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "T. Lan, Y. Zhu, A. R. Zamir and S. Savarese.",
                image: "lan_iccv2015.png",
                title: "Action Recognition by Hierarchical Mid-level Action Elements",
                info: "in International Conference on Computer Vision (ICCV), 2015.",
                refs: [{
                    href: "/assets/publications/pdfs/tian2015.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "O. Sener, A. R. Zamir, S. Savarese, A. Saxena.",
                image: "sener_video_storyline.png",
                title: "Unsupervised Semantic Parsing of Video Collections",
                info: "in International Conference on Computer Vision (ICCV), 2015.",
                refs: [{
                    href: "/assets/publications/pdfs/video_storyline.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/sener_iccv15.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "Y. Xiang, A. Alahi, and S. Savarese.",
                image: "xiang_xiang_iccv15.png",
                title: "Learning to Track: Online Multi-Object Tracking by Decision Making",
                info: "in International Conference on Computer Vision (ICCV), 2015 (Oral Presentation).",
                refs: [{
                    href: "/assets/publications/pdfs/xiang_iccv15.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/xiang_iccv15.bib",
                    text: "BibTeX"
                }, {
                    href: "/assets/publications/pdfs/xiang_iccv15_tr.pdf",
                    text: "Technical Report"
                }, {
                    href: "http://cvgl.stanford.edu/projects/MDP_tracking",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "G. Pandey, J. R. McBride, S. Savarese, R. M. Eustice.",
                image: "pandey_pandey_jfr15.png",
                title: "Automatic Extrinsic Calibration of Vision and Lidar by Maximizing Mutual Information",
                info: "In the Journal of Field Robotics, 2015",
                refs: [{
                    href: "/assets/publications/pdfs/pandey_jfr15.pdf",
                    text: "PDF"
                }, {
                    href: "http://onlinelibrary.wiley.com/doi/10.1002/rob.2015.32.issue-5/issuetoc",
                    text: "DOI"
                }]
            }, {
                authors: [De],
                authorsText: "David Held, Jesse Levinson, Sebastian Thrun, Silvio Savarese,",
                image: "held_ijrr_tracking.png",
                title: "Robust Real-Time Tracking Combining 3D Shape, Color, and Motion",
                info: "In International Journal of Robotics Research (IJRR) 2015.",
                refs: [{
                    href: "/assets/publications/pdfs/ijrr_tracking2016.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "Y. Xiang, W. Choi, Y. Lin and S. Savarese,",
                image: "xiang_xiang_cvpr15_3dvp.png",
                title: "Data-Driven 3D Voxel Patterns for Object Category Recognition",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2015 (Oral Presentation).",
                refs: [{
                    href: "/assets/publications/pdfs/xiang_cvpr15_3dvp.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/xiang_cvpr15.bib",
                    text: "BibTeX"
                }, {
                    href: "/assets/publications/pdfs/xiang_cvpr15_3dvp_tr.pdf",
                    text: "Technical Report"
                }, {
                    href: "http://cvgl.stanford.edu/projects/3DVP",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "R. Mottaghi, Y. Xiang and S. Savarese,",
                image: "mottaghi15cvpr.png",
                title: "A Coarse-to-Fine Model for 3D Pose Estimation and Sub-category Recognition",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2015.",
                refs: [{
                    href: "/assets/publications/pdfs/Mottaghi15cvpr.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/mottaghi_cvpr15.bib",
                    text: "BibTeX"
                }, {
                    href: "/assets/publications/pdfs/Mottaghi15cvpr-sm.pdf",
                    text: "Technical Report"
                }, {
                    href: "http://cvgl.stanford.edu/projects/C2F",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "C. B. Choy, M. Stark, S. Corbett-Davies, S. Savarese,",
                image: "choy_cvpr15_hire.png",
                title: "Enriching Object Detection with 2D-3D Registration and Continuous Viewpoint Estimation",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2015.",
                refs: [{
                    href: "/assets/publications/pdfs/choy_cvpr15_hires.pdf",
                    text: "PDF"
                }, {
                    href: "/assets/publications/pdfs/choy_cvpr15_supp.pdf",
                    text: "Supplementary Material"
                }, {
                    href: "assets/bibtex/choy_cvpr15.bib",
                    text: "BibTeX"
                }, {
                    href: "https://github.com/chrischoy/enriching_object_detection",
                    text: "Code"
                }]
            }, {
                authors: [De],
                authorsText: "C. Wu, J. Zhang, S. Savarese, A. Saxena,",
                image: "wu_watchnpatch_cvpr2015.png",
                title: "Watch-n-Patch: Unsupervised Understanding of Actions and Relations",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2015.",
                refs: [{
                    href: "/assets/publications/pdfs/watchnpatch_cvpr15.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/wu_watchnpatch_cvpr2015.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [Pe],
                authorsText: "Michelle R. Greene, Abraham P. Botros, Diane M. Beck, Li Fei-Fei.",
                image: "APPIcon.png",
                title: "What You See is What You Expect: Rapid Scene Understanding Benefits from Prior Experience.",
                info: "Attention, Perception, & Psychophysics 2015.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/improbableAPP2015.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Sebastian Schuster, Ranjay Krishna, Angel Chang, Li Fei-Fei, Christopher D. Manning.",
                image: "3571351_orig.png",
                title: "Generating Semantically Precise Scene Graphs from Textual Descriptions for Improved Image Retrieval.",
                info: "Empirical Methods in Natural Language Processing (EMNLP) - Vision and Language Workshop 2015 (Oral Presentation).",
                refs: [{
                    href: "http://nlp.stanford.edu/pubs/schuster-krishna-chang-feifei-manning-vl15.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Marius Cătălin Iordan, Armand Joulin, Diane M. Beck, Li Fei-Fei.",
                image: "mci_nips2015.jpg",
                title: "Locally-Optimized Inter-Subject Alignment of Functional Cortical Regions.",
                info: "Machine Learning and Interpretation in Neuroimaging (MLINI) Workshop, NIPS 2015.",
                refs: [{
                    href: "/assets/publications/pdfs/iordan-etal-mlini-preprint.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Alexandre Alahi, Albert Haque, Li Fei-Fei.",
                image: "rgbw15_1.png",
                title: "RGB-W: When Vision Meets Wireless.",
                info: "ICCV 2015.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/RGBW_ICCV15.pdf",
                    text: "PDF"
                }, {
                    href: "https://zenodo.org/record/3933039",
                    text: "Website"
                }]
            }, {
                authors: [Pe],
                authorsText: "Kevin Tang, Manohar Paluri, Li Fei-Fei, Rob Fergus, Lubomir Bourdev.",
                image: "yfcc100m.png",
                title: "Improving Image Classification with Location Context.",
                info: "ICCV 2015.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/tang2015iccv.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Vignesh Ramanathan, Kevin Tang, Greg Mori and Li Fei-Fei.",
                image: "vig15.png",
                title: "Learning temporal embeddings for complex video analysis.",
                info: "ICCV 2015.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/RamanathanICCV2015.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Justin Johnson*, Lamberto Ballan*, Li Fei-Fei.",
                image: "GraphNeighborhoodSmall.jpg",
                title: "Love Thy Neighbors: Image Annotation by Exploiting Image Metadata.",
                info: "ICCV 2015.",
                refs: [{
                    href: "http://cs.stanford.edu/people/jcjohns/papers/iccv15/JohnsonICCV2015.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Justin Johnson, Ranjay Krishna, Michael Stark, Li-Jia Li, David Ayman Shamma, Michael Bernstein, Li Fei-Fei.",
                image: "justin15.png",
                title: "Image Retrieval using Scene Graphs.",
                info: "CVPR 2015.",
                refs: [{
                    href: "http://cs.stanford.edu/people/jcjohns/papers/cvpr2015/JohnsonCVPR2015.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Andrej Karpathy, Li Fei-Fei.",
                image: "rnn7.png",
                title: "Deep Visual-Semantic Alignments for Generating Image Descriptions.",
                info: "CVPR 2015 (Oral Presentation).",
                refs: [{
                    href: "http://cs.stanford.edu/people/karpathy/cvpr2015.pdf",
                    text: "PDF"
                }, {
                    href: "http://cs.stanford.edu/people/karpathy/deepimagesent/",
                    text: "Website"
                }]
            }, {
                authors: [Pe],
                authorsText: "Jonathan Krause, Hailin Jin, Jianchao Yang, Li Fei-Fei.",
                image: "jon_cvpr15.png",
                title: "Fine-Grained Recognition without Part Annotations.",
                info: "CVPR 2015.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/joncvpr15.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Olga Russakovsky, Li-Jia Li, Li Fei-Fei.",
                image: "olga15.jpg",
                title: "Best of both worlds: human-machine collaboration for dense object annotation.",
                info: "CVPR 2015.",
                refs: [{
                    href: "http://ai.stanford.edu/%7Eolga/papers/RussakovskyCVPR15.pdf",
                    text: "PDF"
                }, {
                    href: "http://ai.stanford.edu/~olga/best_of_both_worlds.html",
                    text: "Website"
                }]
            }, {
                authors: [Pe],
                authorsText: "Christopher Baldassano, Diane M. Beck, Li Fei-Fei.",
                image: "brain.png",
                title: "Parcellating connectivity in spatial maps.",
                info: "PeerJ 2015.",
                refs: [{
                    href: "/assets/publications/pdfs/baldassano_peerj2015.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Olga Russakovsky*, Jia Deng*, Hao Su, Jonathan Krause, Sanjeev Satheesh, Sean Ma, Zhiheng Huang, Andrej Karpathy, Aditya Khosla, Michael Bernstein, Alexander C. Berg, Li Fei-Fei.",
                image: "ilsvrc.jpg",
                title: "ImageNet Large Scale Visual Recognition Challenge.",
                info: "IJCV 2015.",
                refs: [{
                    href: "http://arxiv.org/abs/1409.0575",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/ILSVRC15.bib",
                    text: "BibTeX"
                }, {
                    href: "http://image-net.org/challenges/LSVRC/",
                    text: "Website"
                }]
            }, {
                authors: [Pe],
                authorsText: "Marius Cătălin Iordan, Michelle R. Greene, Diane M. Beck, Li Fei-Fei.",
                image: "cogneuro15.jpeg",
                title: "Basic Level Category Structure Emerges Gradually Across Human Ventral Visual Cortex.",
                info: "Journal of Cognitive Neuroscience 2015.",
                refs: [{
                    href: "http://cs.stanford.edu/%7Emci/materials/iordan-etal-jocn-2015.pdf",
                    text: "PDF"
                }]
            }, {
                title: "RGB-W: When Vision Meets Wireless",
                authorsText: "Alexandre Alahi, Albert Haque, Li Fei-Fei",
                info: "ICCV 2015",
                refs: [{
                    href: "https://zenodo.org/record/3933039",
                    text: "Website"
                }],
                authors: [Pe]
            }]
        }, {
            name: "Publications 2014",
            publications: [{
                authors: [Te],
                authorsText: "Jiajun Wu*, Yibiao Zhao*, Jun-Yan Zhu, Siwei Luo, Zhuowen Tu",
                image: "spotlight_milcut.jpg",
                title: "MILCut: A Sweeping Line Multiple Instance Learning Paradigm for Interactive Image Segmentation",
                info: "CVPR 2014",
                refs: [{
                    href: "https://jiajunwu.com/papers/milcut_cvpr.pdf",
                    text: "PDF"
                }, {
                    href: "https://jiajunwu.com/projects/milcut.html",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Jiajun Wu, Yining Wang, Zhulin Li, Zhuowen Tu",
                image: "spotlight_motion.jpg",
                title: "Harvesting Motion Patterns in Still Images from the Internet",
                info: "CogSci 2014 (Oral Presentation)",
                refs: [{
                    href: "https://jiajunwu.com/papers/motion_cogsci.pdf",
                    text: "PDF"
                }, {
                    href: "https://jiajunwu.com/projects/concept.html",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Jiajun Wu, Jun-Yan Zhu, Zhuowen Tu",
                image: "spotlight_ris.jpg",
                title: "Reverse Image Segmentation: A High-Level Solution to a Low-Level Task",
                info: "BMVC 2014",
                refs: [{
                    href: "https://jiajunwu.com/papers/ris_bmvc.pdf",
                    text: "PDF"
                }, {
                    href: "https://jiajunwu.com/projects/ris.html",
                    text: "Website"
                }]
            }, {
                authors: [Se],
                authorsText: "Fabian Caba Heilbron, Ali Thabet, Juan Carlos Niebles, Bernard Ghanem.",
                image: "actioncue.jpg",
                title: "Camera Motion and Surrounding Scene Appearance as Context for Action Recognition.",
                info: "Asian Conference on Computer Vision (ACCV), Singapore, November 2014.",
                refs: [{
                    href: "https://link.springer.com/chapter/10.1007/978-3-319-16817-3_38",
                    text: "DOI"
                }]
            }, {
                authors: [Se],
                authorsText: "Ardalan Khosrowpour, Juan Carlos Niebles and Mani Golparvar-Fard.",
                image: "automation2014.png",
                title: "Vision-based workface assessment using depth images for activity analysis of interior construction operations.",
                info: "Automation in Construction, December 2014.",
                refs: [{
                    href: "http://dx.doi.org/10.1016/j.autcon.2014.08.003",
                    text: "DOI"
                }]
            }, {
                authors: [Se],
                authorsText: "Ivan Lillo, Alvaro Soto, Juan Carlos Niebles.",
                image: "cvpr2014.png",
                title: "Discriminative Hierarchical Modeling of Spatio-Temporally Composable Human Activities.",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), Colombus, USA, June 2014.",
                refs: [{
                    href: "/assets/publications/pdfs/Lillo_Discriminative_Hierarchical_Modeling_2014_CVPR_paper.pdf",
                    text: "PDF"
                }, {
                    href: "http://ialillo.sitios.ing.uc.cl/ActionsCVPR2014/",
                    text: "Website"
                }, {
                    href: "https://www.youtube.com/watch?v=_pdfLrie0_8",
                    text: "Video"
                }, {
                    href: "https://doi.org/10.1109/CVPR.2014.109",
                    text: "DOI"
                }]
            }, {
                authors: [Se],
                authorsText: "Ardalan Khosrowpour, Igor Fedorov, Aleksander Holynski, Juan Carlos Niebles and Mani Golparvar-Fard.",
                image: "indoor.png",
                title: "Automated Worker Activity Analysis in Indoor Environments for Direct-Work Rate Improvement from long sequences of RGB-D Images.",
                info: "Construction Research Congress, Atlanta, USA, May 2014.",
                refs: [{
                    href: "http://dx.doi.org/10.1061/9780784413517.075",
                    text: "DOI"
                }]
            }, {
                authors: [Se],
                authorsText: "Fabian Caba Heilbron and Juan Carlos Niebles.",
                image: "crowd.jpg",
                title: "Collecting and Annotating Human Activities in Web Videos.",
                info: "ACM International Conference on Multimedia Retrieval (ICMR). Glasgow, UK. April 2014.",
                refs: [{
                    href: "https://github.com/cabaf/activity_annotation",
                    text: "Code"
                }]
            }, {
                authors: [De],
                authorsText: "M. Sun*, B. Kim*, P. Kohli, S. Savarese,",
                image: "sunkim_pami14.png",
                title: "Relating Things and Stuff via Object Property  Interactions",
                info: "in Pattern Analysis and Machine Intelligence (PAMI), 2014. (* indicates equal contribution)",
                refs: [{
                    href: "/assets/publications/pdfs/pami14_acrf.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/pami14_acrf.bib",
                    text: "BibTeX"
                }, {
                    href: "http://cvgl.stanford.edu/projects/ACRF/ACRFproj.html",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "W. Choi and S. Savarese,",
                image: "collective_activities_of_people14.png",
                title: "Understanding Collective Activities of People from Videos",
                info: "in Pattern Analysis and Machine Intelligence (PAMI), 2014.",
                refs: [{
                    href: "/assets/publications/pdfs/choi_pami14.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/choi_pami14.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "T. Lan, T. Chen, and S. Savarese,",
                image: "lan_lan_eccv14.png",
                title: "A Hierarchical Representation for Future Action Prediction",
                info: "in European Conference on Computer Vision (ECCV), 2014.",
                refs: [{
                    href: "/assets/publications/pdfs/lan_eccv14.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "W. Choi, Y. Chao, C. Pantofaru and S. Savarese,",
                image: "discovering_groups_of_people_in_images14.png",
                title: "Discovering Groups of People in Images",
                info: "in European Conference on Computer Vision (ECCV), 2014.",
                refs: [{
                    href: "/assets/publications/pdfs/choi_eccv14.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "Y. Xiang*, C. Song*, R. Mottaghi and S. Savarese,",
                image: "xiang_xiang_eccv14.png",
                title: "Monocular Multiview Object Tracking with 3D Aspect Parts",
                info: "in European Conference on Computer Vision (ECCV), 2014.",
                refs: [{
                    href: "/assets/publications/pdfs/xiang_eccv14.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/xiang_eccv14.bib",
                    text: "BibTeX"
                }, {
                    href: "/assets/publications/pdfs/xiang_eccv14_tr.pdf",
                    text: "Technical Report"
                }, {
                    href: "http://cvgl.stanford.edu/projects/multiview_tracking/",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "R. Mittelman, B. Kuipers, S. Savarese, H. Lee,",
                image: "mittelman_srtrbm_icml14.png",
                title: "Structured Recurrent Temporal Restricted Boltzmann Machines",
                info: "in International Conference on Machine Learning (ICML), 2014.",
                refs: [{
                    href: "/assets/publications/pdfs/srtrbm_icml14.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "D. Held, J. Levinson, S. Thrun, S. Savarese,",
                image: "held_rss14_tracking.png",
                title: "Combining 3D Shape, Color, and Motion for Robust Anytime Tracking",
                info: "in Robotics: Science and Systems (RSS), 2014.",
                refs: [{
                    href: "assets/bibtex/held_rss2014.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "L. Leal-Taixé, M. Fenzi, A. Kuznetsova, B. Rosenhahn, S. Savarese,",
                image: "image-based_motion_context_multiple_people_tracking14.png",
                title: "Learning an image-based motion context for multiple people tracking",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2014.",
                refs: [{
                    href: "/assets/publications/pdfs/LeaFenKuzRosSavCVPR14.pdf",
                    text: "PDF"
                }, {
                    href: "http://www.tnt.uni-hannover.de/papers/show_bibtex.php?id=1022",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "G. Pandey, J. R. McBride, S. Savarese and R. M. Eustice,",
                image: "mutual_information_based_place_recognition14.png",
                title: "Toward mutual information based place recognition",
                info: "in IEEE International Conference on Robotics and Automation (ICRA), 2014.",
                refs: [{
                    href: "/assets/publications/pdfs/gpandey-2014a.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe, De],
                authorsText: "Y. Bao, A. Furlan, L. Fei-Fei, S. Savarese.",
                image: "bao_bao_wacv2014.png",
                title: "Understanding the 3D Layout of a Cluttered Room From Multiple Images",
                info: "in IEEE Winter Conference on Applications of Computer Vision (WACV), 2014.",
                refs: [{
                    href: "/assets/publications/pdfs/bao_wacv2014.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/bao_wacv2014.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "Y. Xiang, R. Mottaghi and S. Savarese,",
                image: "beyond_pascal.png",
                title: "Beyond PASCAL: A Benchmark for 3D Object Detection in the Wild",
                info: "in IEEE Winter Conference on Applications of Computer Vision (WACV), 2014.",
                refs: [{
                    href: "/assets/publications/pdfs/xiang_wacv14.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/xiang_wacv14.bib",
                    text: "BibTeX"
                }, {
                    href: "https://amberxu.github.io/projects/pascal3d.html",
                    text: "Website"
                }]
            }, {
                authors: [Pe],
                authorsText: "Andrej Karpathy, Armand Joulin, Li Fei-Fei.",
                image: "nips_small.jpg",
                title: "Deep Fragment Embeddings for Bidirectional Image-Sentence Mapping.",
                info: "NIPS 2014.",
                refs: [{
                    href: "http://cs.stanford.edu/people/karpathy/nips2014.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Vignesh Ramanathan, Armand Joulin, Percy Liang and Li Fei-Fei.",
                image: "vignesh14.jpeg",
                title: "Joint person naming in videos and coreference resolution in text.",
                info: "ECCV 2014.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/vignesh14.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Yuke Zhu, Alireza Fathi, and Li Fei-Fei.",
                image: "zhuECCV2014.png",
                title: "Reasoning About Object Affordances in a Knowledge Base Representation.",
                info: "ECCV 2014.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/zhu14.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Armand Joulin*, Kevin Tang*, Li Fei-Fei.",
                image: "kevin14.jpeg",
                title: "Efficient Image and Video Co-localization with Frank-Wolfe Algorithm.",
                info: "ECCV 2014.",
                refs: [{
                    href: "http://ai.stanford.edu/%7Ekdtang/papers/eccv14-vidcoloc.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Pusiol, G., Soriano, L., Fei-Fei, L., Frank, M. C..",
                image: "guido14.png",
                title: "Discovering the Signatures of Joint Attention in Child-Caregiver Interaction.",
                info: "CogSci 2014.",
                refs: [{
                    href: "/assets/publications/pdfs/guido14.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Andrej Karpathy, George Toderici, Sanketh Shetty, Thomas Leung, Rahul Sukthankar, Li Fei-Fei.",
                image: "karpathy14.png",
                title: "Large-Scale Video Classification with Convolutional Neural Networks.",
                info: "CVPR 2014 (Oral Presentation).",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/karpathy14.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Alexandre Alahi, Vignesh Ramanathan, and Li Fei-Fei.",
                image: "alahi14.png",
                title: "Socially-aware Large-scale Crowd Forecasting.",
                info: "CVPR 2014 (Oral Presentation).",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/alahi14.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Kevin Tang, Armand Joulin, Li-Jia Li, Li Fei-Fei.",
                image: "coloc14.jpeg",
                title: "Co-localization in Real-World Images.",
                info: "CVPR 2014.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/tang14.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Jia Deng, Olga Russakovsky, Jonathan Krause, Michael Bernstein, Alexander C. Berg and Li Fei-Fei..",
                image: "scalable14.jpeg",
                title: "Scalable Multi-Label Annotation.",
                info: "CHI 2014.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/chi2014-MultiLabel.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Michelle Greene, Li Fei-Fei.",
                image: "visual14.jpeg",
                title: "Visual Categorization is Automatic and Obligatory: Evidence from a Stroop-like Paradigm.",
                info: "Journal of Vision, 2014.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/14.full.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Jonathan Krause, Timnit Gebru, Jia Deng, Li-Jia Li, Li Fei-Fei.",
                image: "icpr.png",
                title: "Learning Features and Parts for Fine-Grained Recognition.",
                info: "ICPR, 2014.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/icpr14.pdf",
                    text: "PDF"
                }]
            }]
        }, {
            name: "Publications 2013",
            publications: [{
                authors: [Te],
                authorsText: "Quannan Li, Jiajun Wu, Zhuowen Tu",
                image: "spotlight_concept.jpg",
                title: "Harvesting Mid-Level Visual Concepts from Large-Scale Internet Images",
                info: "CVPR 2013",
                refs: [{
                    href: "https://jiajunwu.com/papers/concept_cvpr.pdf",
                    text: "PDF"
                }, {
                    href: "https://jiajunwu.com/projects/concept.html",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "Y. Xiang and S. Savarese,",
                image: "",
                title: "Object Detection by 3D Aspectlets and Occlusion Reasoning",
                info: "in the 4th International IEEE Workshop on 3D Representation and Recognition (3dRR), 2013.",
                refs: [{
                    href: "/assets/publications/pdfs/xiang_3drr13.pdf",
                    text: "PDF"
                }, {
                    href: "/assets/publications/pdfs/xiang_3drr13_tr.pdf",
                    text: "Technical Report"
                }, {
                    href: "assets/bibtex/xiang_3drr13.bib",
                    text: "BibTeX"
                }, {
                    href: "http://cvgl.stanford.edu/data/dataset_3dRR13.zip",
                    text: "Data"
                }]
            }, {
                authors: [De],
                authorsText: "M. Sun, S. S. Kumar, G. Bradski, S. Savarese,",
                image: "",
                title: "Object detection, shape recovery, and 3D modelling by depth-encoded hough voting",
                info: "in Computer Vision and Image Understanding (CVIU), 2013.",
                refs: [{
                    href: "/assets/publications/pdfs/sun_cviu2013.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/sun_cviu2013.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "B. Kim, J. Park, A. Gilbert, S. Savarese,",
                image: "",
                title: "Hierarchical Classification of Images by Sparse Approximation",
                info: "in Image and Vision Computing (IMAVIS), 2013 in press.",
                refs: [{
                    href: "/assets/publications/pdfs/imavis13_sparse.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/imavis13_sparse.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "R. Tokola, W. Choi, and S. Savarese,",
                image: "tokola_RT_ICCV2013_CAMERA_READY.png",
                title: "Breaking the chain: liberation from the temporal Markov assumption for tracking human poses",
                info: "Proceedings of the International Conference in Computer Vision (ICCV) 2013.",
                refs: [{
                    href: "/assets/publications/pdfs/RT_ICCV2013_CAMERA_READY.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/tokola_iccv2013.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "M. Sun, W. Huang, and S. Savarese,",
                image: "",
                title: "Find the Best Path: an Efficient and Accurate Classifier for Image Hierarchies",
                info: "Proceedings of the International Conference in Computer Vision (ICCV) 2013.",
                refs: [{
                    href: "/assets/publications/pdfs/PID2965309.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/sun_iccv2013.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "B. Kim, P. Kohli, and S. Savarese,",
                image: "kim_iccv13_final_kks.png",
                title: "3D Scene Understanding by Voxel-CRF",
                info: "Proceedings of the International Conference in Computer Vision (ICCV) 2013.",
                refs: [{
                    href: "/assets/publications/pdfs/iccv13_final_kks.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/kim_iccv2013.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "Y.-W. Chao, W. Choi, C. Pantofaru, and S. Savarese,",
                image: "",
                title: "Layout Estimation of Highly Cluttered Indoor Scenes using Geometric and Semantic Cues",
                info: "Proceedings of the International Conference on Image Analysis and Processing (ICIAP), 2013.",
                refs: [{
                    href: "/assets/publications/pdfs/chao_iciap2013.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/chao_iciap2013.bib",
                    text: "BibTeX"
                }, {
                    href: "http://www.eecs.umich.edu/vision/IndoorHumanActivity/",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "R. Mittelman, H. Lee, B. Kuipers, and S. Savarese,",
                image: "mittelman_Mittelman_cvpr13.png",
                title: "Weakly Supervised Learning of Mid-Level Features with Beta-Bernoulli Process Restricted Boltzmann Machines",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2013.",
                refs: [{
                    href: "/assets/publications/pdfs/Mittelman_cvpr13.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/Mittelman_cvpr13.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "Y. Bao, M. Chandraker, Y. Lin, and S. Savarese,",
                image: "",
                title: "Dense Object Reconstruction Using Semantic Priors",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2013 (Oral Presentation).",
                refs: [{
                    href: "/assets/publications/pdfs/Bao_semantic_reconstruction_cvpr13.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/Bao_cvpr13.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "B. Kim, S. Xu, and S. Savarese,",
                image: "",
                title: "Accurate Localization of 3D Objects from RGB-D Data using Segmentation Hypotheses",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2013.",
                refs: [{
                    href: "http://www.umich.edu/%7Ebsookim/papers/bkim_cvpr13.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/BKim_cvpr13.bib",
                    text: "BibTeX"
                }, {
                    href: "http://cvgl.stanford.edu/projects/al3d/al3dproj.html",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "W. Choi, Y.-W. Chao, C. Pantofaru, and S. Savarese.",
                image: "",
                title: "Understanding Indoor Scenes using 3D Geometric Phrases",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2013 (Oral Presentation).",
                refs: [{
                    href: "/assets/publications/pdfs/choi_cvpr13.pdf",
                    text: "PDF"
                }, {
                    href: "/assets/publications/pdfs/choi_cvpr13_supp.pdf",
                    text: "Supplementary Material"
                }, {
                    href: "assets/bibtex/choi_cvpr13.bib",
                    text: "BibTeX"
                }, {
                    href: "http://www.eecs.umich.edu/vision/3DGP/",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "W. Choi, C. Pantofaru and S. Savarese",
                image: "",
                title: "A General Framework for Tracking Multiple People from a Moving Camera",
                info: "in Pattern Analysis and Machine Intelligence (PAMI), 2012 in press.",
                refs: [{
                    href: "http://www.willowgarage.com/sites/default/files/pami_preprint.pdf",
                    text: "PDF"
                }, {
                    href: "http://www-personal.umich.edu/%7Ewgchoi/pami_track/",
                    text: "Website"
                }, {
                    href: "http://www-personal.umich.edu/%7Ewgchoi/pami_track/choi_pami12.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [Se],
                authorsText: " Victor Escorcia and Juan Carlos Niebles",
                image: "iccvw13.jpg",
                title: "Spatio-Temporal Human-Object Interactions for Action Recognition in Videos.",
                info: "IEEE International Conference on Computer Vision Workshops (ICCVW). Sydney, Australia. December 2013.",
                refs: [{
                    href: "http://www.niebles.net/iccvw13",
                    text: "Website"
                }, {
                    href: "https://doi.org/10.1109/ICCVW.2013.72",
                    text: "DOI"
                }, {
                    href: "https://www.youtube.com/watch?v=a71etgmhlpQ",
                    text: "Video"
                }]
            }, {
                authors: [Se],
                authorsText: "Mani Golparvar-Fard, Arsalan Heydarian and Juan Carlos Niebles.",
                image: "earthmoving.jpg",
                title: "Vision-based action recognition of earthmoving equipment using spatio-temporal features and support vector machine classifiers.",
                info: "Advanced Engineering Informatics, Sydney, Australia, October 2013.",
                refs: [{
                    href: "http://dx.doi.org/10.1016/j.aei.2013.09.001",
                    text: "DOI"
                }]
            }, {
                authors: [Se],
                authorsText: "Milad Memarzadeh, Mani Golparvar-Fard and Juan Carlos Niebles.",
                image: "hogc.jpg",
                title: "Automated 2D detection of construction equipment and workers from site video streams using histograms of oriented gradients and colors.",
                info: "Automation in Construction, July 2013.",
                refs: [{
                    href: "http://dx.doi.org/10.1016/j.autcon.2012.12.002",
                    text: "DOI"
                }]
            }, {
                authors: [De],
                authorsText: "R. Mittelman and M. Sun and B. Kuipers and S. Savarese.",
                image: "",
                title: "Learning Hierarchical Linguistic Descriptions of Visual Datasets",
                info: "NAACL-HLT Workshop on Vision and Language, 2013.",
                refs: [{
                    href: "/assets/publications/pdfs/Mittelman_wvl13.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/Mittelman_wvl13.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "V. Garro and A. Fusiello and S. Savarese.",
                image: "",
                title: "Label Transfer Exploiting Three-dimensional Structure for Semantic Segmentation",
                info: "Proceedings of the 6th International Conference on Computer Vision/Computer Graphics Collaboration Techniques and Applications (MIRAGE).",
                refs: [{
                    href: "/assets/publications/pdfs/garro_MIRAGE13.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/garro_MIRAGE13.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [Pe, De],
                authorsText: "Axel Furlan, Stephen Miller, Domenico Giorgio Sorrenti, Li Fei-Fei, Silvio Savarese.",
                image: "furlan13.png",
                title: "Free your Camera: 3D Indoor Scene Understanding from Arbitrary Camera Motion.",
                info: "BMVC 2013.",
                refs: [{
                    href: "/assets/publications/pdfs/furlan13.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/furlan_bmvc13.bib",
                    text: "BibTeX"
                }, {
                    href: "http://www.ira.disco.unimib.it/research/free-your-camera-3d-indoor-scene-understanding-from-arbitrary-camera-motion/",
                    text: "Website"
                }]
            }, {
                authors: [Pe],
                authorsText: "Jonathan Krause, Michael Stark, Jia Deng, Li Fei-Fei.",
                image: "3d13.jpeg",
                title: "3D Object Representations for Fine-Grained Categorization.",
                info: "ICCV 2013, Workshop on 3D Representation and Recognition.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/3drr13.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Kevin Tang, Bangpeng Yao, Li Fei-Fei, Daphne Koller.",
                image: "combining13.jpeg",
                title: "Combining the Right Features for Complex Event Recognition.",
                info: "ICCV 2013.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/iccv13-andor.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Vignesh Ramananthan, Percy Liang, and Li Fei-Fei.",
                image: "video13.jpeg",
                title: "Video Event Understanding using Natural Language Descriptions.",
                info: "ICCV 2013.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/vigneshICCV13.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "O. Russakovsky, Jia Deng, Zhiheng Huang, Alexander C. Berg and Li Fei-Fei.",
                image: "detecting13.jpeg",
                title: "Detecting avocados to zucchinis: what have we done, and where are we going?.",
                info: "ICCV 2013.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/iccv13-ILSVRCanalysis.pdf",
                    text: "PDF"
                }, {
                    href: "http://image-net.org/challenges/LSVRC/2012/analysis/",
                    text: "Website"
                }]
            }, {
                authors: [Pe],
                authorsText: "B. Yao, J. Ma, and L. Fei-Fei.",
                image: "discovering13.jpeg",
                title: "Discovering Object Functionality.",
                info: "ICCV 2013.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/Yao_Discovering_Object_Functionality_2013_ICCV_paper.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "L.-J. Li and H. Su and Y. Lim and L. Fei-Fei.",
                image: "object13.jpeg",
                title: "Object Bank: An Object-Level Image Representation for High-Level Visual Recognition.",
                info: "IJCV 2013.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/li_ijcv2013.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "J. Deng, J. Krause, and L. Fei-Fei.",
                image: "fine13.jpeg",
                title: "Fine-Grained Crowdsourcing for Fine-Grained Recognition.",
                info: "CVPR 2013 (Oral Presentation).",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/DengKrauseFei-Fei_CVPR2013.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "V. Ramanathan, B. Yao, and L. Fei-Fei.",
                image: "social13.jpeg",
                title: "Social Role Discovery in Human Events.",
                info: "CVPR 2013 (Oral Presentation).",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/334.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "K. Tang, R. Sukthankar, J. Yagnik, and L. Fei-Fei.",
                image: "discrim13.jpeg",
                title: "Discriminative Segment Annotation in Weakly Labeled Video.",
                info: "CVPR 2013 (Oral Presentation).",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/cvpr2013-crane-small.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "A. Torralbo, D.B. Walther, B. Chai, E. Caddigan, L. Fei-Fei, and D.M. Beck.",
                image: "good13.jpeg",
                title: "Good Exemplars of Natural Scene Categories Elicit Clearer Patterns than Bad Exemplars but not Greater BOLD Activity.",
                info: "PLoS ONE. 2013 (Article).",
                refs: [{
                    href: "/assets/publications/pdfs/journal.pone.0058594.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "C. Baldassano, D.M. Beck, and L. Fei-Fei.",
                image: "diff13.jpeg",
                title: "Differential Connectivity Within the Parahippocampal Place Area.",
                info: "NeuroImage 2013.",
                refs: [{
                    href: "/assets/publications/pdfs/NI2013.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "A. Karpathy, S. Miller, and L. Fei-Fei.",
                image: "objdisc13.jpeg",
                title: "Object Discovery in 3D Scenes via Shape Analysis.",
                info: "ICRA 2013 (Oral Presentation).",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/ICRA2013_ObjectDiscoveryViaShapeAnalysis.pdf",
                    text: "PDF"
                }, {
                    href: "http://cs.stanford.edu/people/karpathy/discovery/",
                    text: "Website"
                }]
            }]
        }, {
            name: "Publications 2012",
            publications: [{
                authors: [Te],
                authorsText: "Jun-Yan Zhu, Jiajun Wu, Yichen Wei, Eric Chang, Zhuowen Tu",
                image: "spotlight_bmcl.jpg",
                title: "Unsupervised Object Discovery via Saliency-Guided Multiple Class Learning",
                info: "CVPR 2012",
                refs: [{
                    href: "https://jiajunwu.com/papers/bmcl_cvpr.pdf",
                    text: "PDF"
                }, {
                    href: "http://people.csail.mit.edu/junyanz/projects/bMCL/index.html",
                    text: "Website"
                }]
            }, {
                authors: [Te],
                authorsText: "Yan Xu, Jiahua Liu, Jiajun Wu, Yue Wang, Zhuowen Tu, Jian-Tao Sun, Junichi Tsujii, Eric Chang",
                image: "spotlight_coref.jpg",
                title: "A Classification Approach to Coreference in Discharge Summaries: 2011 I2b2 Challenge",
                info: "JAMIA 2012",
                refs: [{
                    href: "https://jiajunwu.com/papers/coref_jamia.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Se],
                authorsText: "Victor Escorcia, Maria A. Dávila, Mani Golparvar-Fard, Juan Carlos Niebles.",
                image: "crc2012.jpg",
                title: "Automated Vision-based Recognition of Construction Worker Actions for Building Interior Construction Operations Using RGBD Cameras.",
                info: "Construction Research Congress, West Lafayette, Indiana, USA, May 2012.",
                refs: [{
                    href: "http://dx.doi.org/10.1061/9780784412329.089",
                    text: "DOI"
                }]
            }, {
                authors: [Se],
                authorsText: "Arsalan Heydarian, Mani Golparvar-Fard, Juan Carlos Niebles.",
                image: "equipment_actions.jpg",
                title: "Automated visual recognition of construction equipment actions using spatio-temporal features and multiple binary support vector machines.",
                info: "Construction Research Congress, West Lafayette, Indiana, USA, May 2012.",
                refs: [{
                    href: "http://dx.doi.org/10.1061/9780784412329.090",
                    text: "DOI"
                }]
            }, {
                authors: [De],
                authorsText: "W. Choi and S. Savarese.",
                image: "choi_choi_eccv_12.png",
                title: "A Unified Framework for Multi-Target Tracking and Collective Activity Recognition",
                info: "Proc. of European Conference of Computer Vision (ECCV), 2012 (oral presentation -- 5% acceptance rate).",
                refs: [{
                    href: "assets/bibtex/choi_eccv_12.bib",
                    text: "BibTeX"
                }, {
                    href: "/assets/publications/pdfs/choi_eccv_12.pdf",
                    text: "PDF"
                }, {
                    href: "/assets/publications/pdfs/choi_eccv_12_supplementary.pdf",
                    text: "Supplementary Material"
                }, {
                    href: "http://www-personal.umich.edu/%7Ewgchoi/eccv12/wongun_eccv12.html",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "Y. Bao, Y. Xiang and S. Savarese.",
                image: "bao_bao_eccv12_codetection.png",
                title: "Object Co-detection",
                info: "Proc. of European Conference of Computer Vision (ECCV), 2012,",
                refs: [{
                    href: "/assets/publications/pdfs/bao_eccv12_codetection.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/bao_eccv12_codetection.bib",
                    text: "BibTeX"
                }, {
                    href: "/assets/publications/pdfs/yingze_eccv12_co-detection.pdf",
                    text: "Poster"
                }, {
                    href: "http://cvgl.stanford.edu/projects/codetection/index.html",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "B. Kim*, M. Sun*, P. Kohli, S. Savarese.",
                image: "kim_kim_hipotws_eccv12.png",
                title: "Relating Things and Stuff by High-Order Potential Modeling",
                info: "ECCV 2012 Workshop on Higher-Order Models and Global Constraints in Computer Vision (HiPot). (* indicates equal contribution),",
                refs: [{
                    href: "/assets/publications/pdfs/kim_hipotws_eccv12.pdf",
                    text: "PDF"
                }, {
                    href: "http://www.eecs.umich.edu/vision/projects/ACRF/bibtex_eccv.bib",
                    text: "BibTeX"
                }, {
                    href: "http://cvgl.stanford.edu/projects/ACRF/ACRFproj.html",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "G. Pandey, J. McBride, S. Savarese, R. Eustice.",
                image: "pandey_gpandey-2012b.png",
                title: "Toward Mutual Information based Automatic Registration of 3D Point Clouds",
                info: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS) 2012.",
                refs: [{
                    href: "/assets/publications/pdfs/gpandey-2012b.pdf",
                    text: "PDF"
                }, {
                    href: "http://robots.engin.umich.edu/Publications?action=bibentry&bibfile=perl.bib&bibref=gpandey-2012b#gpandey-2012bBib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "*M. Sun, *S. Ying-Ze Bao and Silvio Savarese.",
                image: "sun_Sun_IJCV_2012.png",
                title: "Object Detection using Geometrical Context Feedback",
                info: "International Journal of Computer Vision 2012(2), *indicates equal contributions.",
                refs: [{
                    href: "/assets/publications/pdfs/Sun_IJCV_2012.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "M. Sun, M. Telaprolu, H. Lee, S. Savarese.",
                image: "sun_sun_bb_cvpr2012.png",
                title: "An Efficient Branch-and-Bound Algorithm for Optimal Human Pose Estimation",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2012.",
                refs: [{
                    href: "assets/bibtex/sun_bb_cvpr2012.bib",
                    text: "BibTeX"
                }, {
                    href: "/assets/publications/pdfs/sun_bb_cvpr2012.pdf",
                    text: "PDF"
                }, {
                    href: "http://www.eecs.umich.edu/vision/BBproj.html",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "Y. Bao, M. Bagra, Y.-W. Chao, S. Savarese.",
                image: "bao_bao_cvpr2012_ssfm.png",
                title: "Structure From Motion with Points, Objects, and Regions",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2012.",
                refs: [{
                    href: "assets/bibtex/bao_cvpr2012_ssfm.bib",
                    text: "BibTeX"
                }, {
                    href: "/assets/publications/pdfs/bao_cvpr2012_ssfm.pdf",
                    text: "PDF"
                }, {
                    href: "http://www.eecs.umich.edu/vision/projects/ssfm/index.html",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "Y. Xiang and S. Savarese",
                image: "",
                title: "Estimating the Aspect Layout of Object Categories",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2012.",
                refs: [{
                    href: "assets/bibtex/xiang_cvpr12.bib",
                    text: "BibTeX"
                }, {
                    href: "/assets/publications/pdfs/xiang_cvpr12.pdf",
                    text: "PDF"
                }, {
                    href: "/assets/publications/pdfs/xiang_cvpr12_tr.pdf",
                    text: "Technical Report"
                }, {
                    href: "http://www.eecs.umich.edu/vision/projects/ALM/Aspect_Layout_Model.zip",
                    text: "Code"
                }, {
                    href: "http://www.eecs.umich.edu/vision/projects/ALM/ALMproj.html",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "S. Kumar, M. Sun, S. Savarese,",
                image: "",
                title: "Mobile Object Detection through Client-Server based Vote Transfer",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2012.",
                refs: [{
                    href: "assets/bibtex/Kumar_cvpr12.bib",
                    text: "BibTeX"
                }, {
                    href: "/assets/publications/pdfs/Kumar_cvpr12.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "G. Pandey, J. R. McBride, S. Savarese and R. M. Eustice,",
                image: "",
                title: "Automatic targetless extrinsic calibration of a 3d lidar and camera by maximizing mutual information",
                info: "The AAAI National Conference on Artifical Intelligence, Toronto, Canada, July 2012.",
                refs: [{
                    href: "http://robots.engin.umich.edu/Publications?action=bibentry&bibfile=perl.bib&bibref=gpandey-2012a",
                    text: "BibTeX"
                }, {
                    href: "http://robots.engin.umich.edu/publications/gpandey-2012a.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "M. Sun, M. Telaprolu, H. Lee, S. Savarese,",
                image: "",
                title: "Efficient and Exact MAP Inference using Branch and Bound",
                info: "15th International Conference on Artificial Intelligence and Statistics (AISTATS), 2012.",
                refs: [{
                    href: "assets/bibtex/aistats_bb_final.bib",
                    text: "BibTeX"
                }, {
                    href: "/assets/publications/pdfs/aistats_bb_final.pdf",
                    text: "PDF"
                }, {
                    href: "http://www.eecs.umich.edu/vision/BBproj.html",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "M. Golparvar-Fard, F. Pena-Mora, and S. Savarese,",
                image: "",
                title: "Automated model-based progress monitoring using unordered daily construction photographs and IFC as-planned models",
                info: "ASCE Journal of Computing in Civil Engineering, 2012 (in press).",
                refs: []
            }, {
                authors: [De],
                authorsText: "X. Chen, A. Hero, S. Savarese,",
                image: "",
                title: "Multimodality video indexing and retrieval using directed information",
                info: "IEEE Transactions on Multimedia, Volume 14, No.1, Feb, 2012.",
                refs: [{
                    href: "/assets/publications/pdfs/CHEN_ITSP2010.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "J. Clemons, Y. Bao, V. Sharma, S. Savarese, T. Austin,",
                image: "",
                title: "MVSS: Michigan Visual Sonification System",
                info: "IEEE International Conference on Emerging Signal Processing Applications (ESPA), January 2012.",
                refs: [{
                    href: "http://web.eecs.umich.edu/%7Ejclemons/publications/MVSS.PDF",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "K. Tang, V. Ramanathan, L. Fei-Fei, and D. Koller.",
                image: "",
                title: "Shifting Weights: Adapting Object Detectors from Image to Video.",
                info: "NIPS 2012.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/nips12-adapt.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Christopher Baldassano, Marius Cătălin Iordan, Diane M. Beck, Li Fei-Fei.",
                image: "",
                title: "Discovering Voxel-Level Connectivity Between Cortical Regions.",
                info: "Machine Learning and Interpretation in Neuroimaging (MLINI) Workshop, NIPS 2012.",
                refs: [{
                    href: "http://cs.stanford.edu/%7Emci/materials/baldassano-iordan-etal-2012b.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "O. Russakovsky, Y. Lin, K. Yu, and L. Fei-Fei.",
                image: "",
                title: "Object-centric spatial pooling for image classification.",
                info: "ECCV 2012.",
                refs: [{
                    href: "http://ai.stanford.edu/%7Eolga/papers/eccv12-OCP.pdf",
                    text: "PDF"
                }, {
                    href: "/assets/publications/pdfs/OlgaRussakovsky_OCPtalk_032513.pdf",
                    text: "slides"
                }]
            }, {
                authors: [Pe],
                authorsText: "B. Yao and L. Fei-Fei.",
                image: "",
                title: "Action Recognition with Exemplar Based 2.5D Graph Matching.",
                info: "ECCV 2012 (Oral Presentation).",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/YaoFei-Fei_ECCV12.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Christopher Baldassano, Marius Cătălin Iordan, Diane M. Beck, and Li Fei-Fei.",
                image: "",
                title: "Voxel-Level Functional Connectivity using Spatial Regularization.",
                info: "NeuroImage 2012.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/NI2012.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "H. Su, J. Deng, and L. Fei-Fei.",
                image: "",
                title: "Crowdsourcing Annotations for Visual Object Detection.",
                info: "AAAI Human Computation Workshop 2012.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/bbox_submission.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "G. Kim, L. Fei-Fei, and E. Xingi.",
                image: "",
                title: "Web Image Prediction Using Multivariate Point Processes.",
                info: "KDD 2012.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/KimFei-FeiXing_KDD2012.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "H. Su*, A. Yu*, and L. Fei-Fei.",
                image: "",
                title: "Efficient Euclidean Projections onto the Intersection of Norm Balls.",
                info: "ICML 2012.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/SuYuFei-Fei_ICML2012.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Se],
                authorsText: "Milad Memarzadeh, Arsalan Heydarian, Mani Golparvar-Fard, Juan Carlos Niebles.",
                image: "equipment_tracking.jpg",
                title: "Real-time and automated recognition and 2D tracking of Construction workers and equipment from Site video streams.",
                info: "ASCE International Conference on Computing in Civil Engineering, Clearwater Beach, Florida, USA, June 2012.",
                refs: [{
                    href: "http://dx.doi.org/10.1061/9780784412343.0054",
                    text: "DOI"
                }]
            }, {
                authors: [Pe],
                authorsText: "B. Yao, G. Bradski, and L. Fei-Fei.",
                image: "",
                title: "A Codebook-Free and Annotation-Free Approach for Fine-Grained Image Categorization.",
                info: "ICML 2012.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/YaoBradskiFei-Fei_CVPR2012.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "K. Tang, L. Fei-Fei, and D. Koller.",
                image: "",
                title: "Learning Latent Temporal Structure for Complex Event Detection.",
                info: "CVPR 2012.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/cvpr12-temporal.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "J. Deng, J. Krause, A. Berg, and L. Fei-Fei.",
                image: "",
                title: "Hedging Your Bets: Optimizing Accuracy-Specificity Trade-offs in Large Scale Visual Recognition.",
                info: "CVPR 2012.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/DengKrauseBergFei-Fei_CVPR2012.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "B. Yao and L. Fei-Fei.",
                image: "",
                title: "Recognizing Human Actions in Still Images by Modeling the Mutual Context of Objects and Human Poses.",
                info: "PAMI 2012.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/yaopami12.pdf",
                    text: "PDF"
                }]
            }]
        }, {
            name: "Publications 2011",
            publications: [{
                authors: [Pe],
                authorsText: "J. Deng, S. Satheesh, A. C. Berg, and L. Fei-Fei.",
                image: "",
                title: "Fast and Balanced: Efficient Label Tree Learning for Large Scale Object Recognition.",
                info: "NIPS 2011.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/NIPS2011_0391.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "B. Zhao, L. Fei-Fei and E. Xing.",
                image: "",
                title: "Large-Scale Category Structure Aware Image Categorization.",
                info: "NIPS 2011.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/NIPS2011_0730.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "B. Yao, X. Jiang, A. Khosla, A.L. Lin, L.J. Guibas, and L. Fei-Fei.",
                image: "",
                title: "Human Action Recognition by Learning Bases of Action Attributes and Parts.",
                info: "ICCV 2011.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/YaoJiangKhoslaLinGuibasFei-Fei_ICCV2011.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "G. Kim, E.P. Xing, L. Fei-Fei, and T. Kanade.",
                image: "",
                title: "Distributed cosegmentation vis submodular optimization on anisotropic diffusion.",
                info: "ICCV 2011.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/KimXingFei-FeiKanade_ICCV2011.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "M. Savva, N. Kong, A. Chhajta, L. Fei-Fei, M. Agrawala, and J. Heer.",
                image: "",
                title: "ReV ReVision: Automated Classification, Analysis and Redesign of Chart Imagesision: Automated Classification, Analysis and Redesign of Chart Images.",
                info: "UIST 2011.",
                refs: [{
                    href: "/assets/publications/pdfs/2011-ReVision-UIST.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "B. Yao, A. Khosla, and L. Fei-Fei.",
                image: "",
                title: "Classifying Actions and Measuring Action Similarity by Modeling the Mutual Context of Objects and Human Poses.",
                info: "ICML 2011.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/YaoKhoslaFei-Fei_ICML2011.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "D. B. Walther, B. Chai, E. Caddigan, D. M. Beck and L. Fei-Fei.",
                image: "",
                title: "Simple line drawings suffice for functional MRI decoding of natural scene categories.",
                info: "PNAS 2011.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/WaltherChaiCaddiganBeckFei-Fei_full_PNAS2011.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "J. Deng, A. Berg, and L. Fei-Fei.",
                image: "",
                title: "Hierarchical Semantic Indexing for Large Scale Image Retrieval.",
                info: "CVPR 2011.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/DengBergFei-Fei_CVPR2011.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "B. Yao*, A. Khosla*, and L. Fei-Fei.",
                image: "",
                title: "Combining Randomization and Discrimination for Fine-Grained Image Categorization.",
                info: "CVPR 2011.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/YaoKhoslaFeiFei_CVPR2011.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "B. Zhao, L. Fei-Fei, and E.P. Xing.",
                image: "",
                title: "Online Detection of Unusual Events in Videos via Dynamic Sparse Coding.",
                info: "CVPR 2011.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/ZhaoFeiFeiXing_CVPR2011.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "M. Sun and S. Savarese,",
                image: "",
                title: "Articulated Part-based Model for Joint Object Detection and Pose Estimation",
                info: "Proceedings of the International Conference in Computer Vision (ICCV) 2011.",
                refs: [{
                    href: "assets/bibtex/SUN_ICCV2011.bib",
                    text: "BibTeX"
                }, {
                    href: "/assets/publications/pdfs/Sun_ICCV11_PID2005385.pdf",
                    text: "PDF"
                }, {
                    href: "/assets/publications/pdfs/sun_iccv11_iccv_supp_camera.pdf",
                    text: "Supplementary Material"
                }]
            }, {
                authors: [De],
                authorsText: "L. Mei, J. Liu, A. Hero, S. Savarese,",
                image: "",
                title: "Robust Object Pose Estimation via Statistical Manifold Modeling",
                info: "Proceedings of the International Conference in Computer Vision (ICCV) 2011.",
                refs: [{
                    href: "assets/bibtex/LIANG_ICCV2011.bib",
                    text: "BibTeX"
                }, {
                    href: "/assets/publications/pdfs/mei_iccv2011.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "S. Yingze Bao, M. Bagra, S. Savarese,",
                image: "",
                title: "Semantic Structure From Motion with Object and Point Interactions",
                info: "Winner of the best student paper award, IEEE Workshop on Challenges and Opportunities in Robot Perception (in conjunction with ICCV-11).",
                refs: [{
                    href: "assets/bibtex/bao_CORP2011.bib",
                    text: "BibTeX"
                }, {
                    href: "/assets/publications/pdfs/bao_CORP2011.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "S. Yingze Bao, M. Sun, S. Savarese,",
                image: "",
                title: "Toward coherent object detection and scene layout understanding",
                info: "Image and Vision Computing 2011 (9). (Editor choice)",
                refs: [{
                    href: "assets/bibtex/BAO_IVC_2011.bib",
                    text: "BibTeX"
                }, {
                    href: "/assets/publications/pdfs/BAO_IVC_2011.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "W. Choi, C. Pantofaru, S. Savarese,",
                image: "",
                title: "Detecting and Tracking People using an RGB-D Camera via Multiple Detector Fusion",
                info: "Workshop on Challenges and Opportunities in Robot Perception (in conjunction with ICCV-11).",
                refs: [{
                    href: "assets/bibtex/choi_corp11.bib",
                    text: "BibTeX"
                }, {
                    href: "/assets/publications/pdfs/choi_corp11.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "J. Clemons, H. Zhu, S. Savarese, T. Austin,",
                image: "",
                title: "MEVBench: A Mobile Computer Vision Benchmarking Suite",
                info: "IEEE International Symposium on Workload Characterization, November 2011.",
                refs: [{
                    href: "http://www.eecs.umich.edu/mevbench/publications/mevbench.bib",
                    text: "BibTeX"
                }, {
                    href: "http://www.eecs.umich.edu/mevbench/publications/IISWCFinalCopy.PDF",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "M. Golparvar-Fard, F. Pena-Mora, S. Savarese,",
                image: "",
                title: "Monitoring Changes of 3D Building Elements from Unordered Photo Collections",
                info: "IEEE workshop on Computer Vision for Remote Sensing of the Environment (in conjunction with ICCV-11).",
                refs: [{
                    href: "/assets/publications/pdfs/Golparvar-Fard-cvrse2011.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "R. Lopez, T. Tuytelaars and S. Savarese,",
                image: "",
                title: "Deformable Part Models Revisited: A Performance Evaluation for Object Category Pose Estimation",
                info: "IEEE Workshop on Challenges and Opportunities in Robot Perception (in conjunction with ICCV-11).",
                refs: [{
                    href: "assets/bibtex/lopeziccv2011.bib",
                    text: "BibTeX"
                }, {
                    href: "/assets/publications/pdfs/lopez2011-iccv.PDF",
                    text: "PDF"
                }, {
                    href: "http://agamenon.tsc.uah.es/Personales/rlopez/data/pose-estimation/",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "B. Kim, J. Park, A. Gilbert, S. Savarese,",
                image: "",
                title: "Hierarchical Classification of Images by Sparse Approximation",
                info: "Proceedings of the British Machine Vision Conference (BMVC) 2011,",
                refs: [{
                    href: "assets/bibtex/KIM_BMVC2011.bib",
                    text: "BibTeX"
                }, {
                    href: "/assets/publications/pdfs/kim_bmvc2011.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "S. Yingze Bao and S. Savarese,",
                image: "",
                title: "Semantic Structure from Motion",
                info: "Proceedings of the IEEE International Conference on Computer Vision and Pattern Recognition, 2011,",
                refs: [{
                    href: "/assets/publications/pdfs/bao_ssfm_cvpr2011.pdf",
                    text: "PDF"
                }, {
                    href: "http://www.eecs.umich.edu/vision/projects/ssfm/index.html",
                    text: "Website"
                }, {
                    href: "assets/bibtex/Bao_CVPR2011_SSFM.bib",
                    text: "BibTeX"
                }, {
                    href: "/assets/publications/pdfs/yingze_cvpr2011_poster_nologo.pdf",
                    text: "Poster"
                }]
            }, {
                authors: [De],
                authorsText: "W. Choi, K. Shahid, and S. Savarese,",
                image: "",
                title: "Learning Context for Collective Activity Recognition",
                info: "Proceedings of the IEEE International Conference on Computer Vision and Pattern Recognition, 2011,",
                refs: [{
                    href: "/assets/publications/pdfs/cvpr2011choishahid.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/Choi_CVPR_2011.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "J. Liu, M. Shah, B. Kuipers, S. Savarese,",
                image: "",
                title: "Cross-View Action Recognition via View Knowledge Transfer",
                info: "Proceedings of the IEEE International Conference on Computer Vision and Pattern Recognition, 2011 (Oral Presentation),",
                refs: [{
                    href: "/assets/publications/pdfs/cvpr11_liu_b.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/liu-cvpr11a-crossview.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "J. Liu, B. Kuipers, S. Savarese,",
                image: "",
                title: "Recognizing Human Actions by Attributes",
                info: "Proceedings of the IEEE International Conference on Computer Vision and Pattern Recognition, 2011 (Oral Presentation),",
                refs: [{
                    href: "/assets/publications/pdfs/cvpr11_liu_a.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/liu-cvpr11b-attributes.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "J. Clemons, S. Savarese, T. Austin,",
                image: "",
                title: "EFFEX: An Embedded Processor for Computer Vision Based Feature Extraction",
                info: "48th Design Automation Conference, 2011,",
                refs: [{
                    href: "/assets/publications/pdfs/Clemons_EFFEX_10.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "M. Sun, S. Kumar, Bradsky, S. Savarese,",
                image: "",
                title: "Toward Automatic 3D Generic Object Modeling from One Single Image",
                info: "3DIM-PVT 2011",
                refs: []
            }, {
                authors: [De],
                authorsText: "Gaurav Pandey, James R. McBride, Silvio Savarese and Ryan M. Eustice,",
                image: "",
                title: "Visually Bootstrapped generalized ICP",
                info: "Proceedings of the IEEE International Conference on Robotics and Automation, Shanghai, China, 2011.",
                refs: [{
                    href: "/assets/publications/pdfs/gpandey-2011b.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/gpandey-2011b.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "M. Golparvar-Fard, F. Pena-Mora, and S. Savarese,",
                image: "",
                title: "Integrated Sequential As-Built and As-Planned Representation with D4AR Tools in Support of Decision-Making Tasks in the AEC/FM Industry,",
                info: "ASCE Journal of Construction Engineering and Management,",
                refs: [{
                    href: "http://dx.doi.org/10.1061/%28ASCE%29CO.1943-7862.0000371",
                    text: "DOI"
                }]
            }, {
                authors: [De],
                authorsText: "M. Golparvar-Fard, J. Bohn, J.Teizer, S. Savarese, and F. Pena-Mora.",
                image: "",
                title: "Evaluation of image-based modeling and laser scanning accuracy for emerging automated performance monitoring techniques",
                info: "Elsevier Journal of Automation in Construction (in press), 2011.",
                refs: []
            }]
        }, {
            name: "Publications 2010",
            publications: [{
                authors: [Pe],
                authorsText: "L.-J. Li*, H. Su*, E.P. Xing and L. Fei-Fei.",
                image: "",
                title: "Object Bank: A High-Level Image Representation for Scene Classification and Semantic Feature Sparsification.",
                info: "NIPS 2010.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/LiSuXingFeiFeiNIPS2010.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "J. Zhu, L.-J. Li, L. Fei-Fei and E.P. Xing.",
                image: "",
                title: "Large Margin Learning of Upstream Scene Understanding Models.",
                info: "NIPS 2010.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/ZhuLiFeiFeiXingNIPS2010.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "J. Deng, A. Berg, K. Li and L. Fei-Fei.",
                image: "",
                title: "What does classifying more than 10,000 image categories tell us?.",
                info: "ECCV 2010.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/DengBergLiFei-Fei_ECCV2010.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe, Se],
                authorsText: "Juan Carlos Niebles, Chih-Wei Chen and Li Fei-Fei.",
                image: "NieblesChenFei-Fei_ECCV2010_icon.jpg",
                title: "Modeling Temporal Structure of Decomposable Motion Segments for Activity Classification.",
                info: "European Conference on Computer Vision (ECCV), Hersonissos, Crete, Greece, September 2010.",
                refs: [{
                    href: "/assets/publications/pdfs/NieblesChenFei-Fei_ECCV2010.pdf",
                    text: "PDF"
                }, {
                    href: "http://vision.stanford.edu/Datasets/OlympicSports/",
                    text: "Data"
                }, {
                    href: "https://link.springer.com/chapter/10.1007/978-3-642-15552-9_29",
                    text: "DOI"
                }, {
                    href: "http://vision.stanford.edu/documents/NieblesChenFei-Fei_ECCV2010.zip",
                    text: "Slides"
                }]
            }, {
                authors: [Pe],
                authorsText: "B. Zhao, L. Fei-Fei and E. P. Xing.",
                image: "",
                title: "Image Segmentation with Topic Random Fields.",
                info: "ECCV 2010.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/ZhaoFei-FeiXing_ECCV2010.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "L.J. Li*, H. Su*, Y. Lim and L. Fei-Fei.",
                image: "",
                title: "Objects as Attributes for Scene Classification.",
                info: "ECCV 2010 workshop on Parts and Attributes.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/LiSuLimFeiFei_ECCV2010.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "O. Russakovsky and L. Fei-Fei.",
                image: "",
                title: "Attribute learning in large-scale datasets.",
                info: "Parts and Attributes Workshop at ECCV 2010.",
                refs: [{
                    href: "http://ai.stanford.edu/%7Eolga/papers/eccv10workshop-Attributes.pdf",
                    text: "PDF"
                }, {
                    href: "/assets/publications/pdfs/eccv10attributes-largescale.pdf",
                    text: "slides"
                }]
            }, {
                authors: [Pe],
                authorsText: "R. Fergus, L. Fei-Fei, P. Perona and A. Zisserman.",
                image: "",
                title: "Learning object categories from Internet image searches.",
                info: "Proc. Of IEEE, Special Issue on Internet Vision 2010.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/FergusFei-FeiPeronaZisserman2010.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "L. Fei-Fei and L.-J. Li.",
                image: "",
                title: "What, Where and Who? Telling the Story of an Image by Activity Classification, Scene Recognition and Object Categorization.",
                info: 'Book chapter in "Studies in Computational Intelligence- Computer Vision". Volume 285/2010.',
                refs: [{
                    href: "http://vision.stanford.edu/pdf/Fei-Fei_Li_ICVSS09_bookchapter.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe, De],
                authorsText: "S. Savarese, and L. Fei-Fei.",
                image: "",
                title: "Multi-view Object Categorization and Pose Estimation.",
                info: 'Book chapter in "Studies in Computational Intelligence- Computer Vision". Volume 285/2010.',
                refs: [{
                    href: "http://vision.stanford.edu/pdf/SavareseFei-Fei2010.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "D. B. Walther, D. M. Beck, and L. Fei-Fei.",
                image: "",
                title: "To err is human: investigating neural function by correlating error patterns with human behavior.",
                info: "MIT Press, Cambridge, Massachusetts. 2010.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/WaltherBeckFei-Fei_2010.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "B. Yao and L. Fei-Fei.",
                image: "",
                title: "Grouplet: a Structured Image Representation for Recognizing Human and Object Interactions.",
                info: "CVPR 2010 (Oral Presentation).",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/YaoFei-Fei_CVPR2010a.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "B. Yao and L. Fei-Fei.",
                image: "",
                title: "Modeling Mutual Context of Object and Human Pose in Human-Object Interaction Activities.",
                info: "CVPR 2010 (Oral Presentation).",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/YaoFei-Fei_CVPR2010b.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Li-Jia Li*, Chong Wang*, Yongwhan Lim, David Blei and Li Fei-Fei.",
                image: "",
                title: "Building and Using a Semantivisual Image Hierarchy.",
                info: "CVPR 2010.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/LiWangLimBleiFei-Fei_CVPR2010.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe, Se],
                authorsText: "Juan Carlos Niebles, Bohyung Han and Li Fei-Fei.",
                image: "efficient_moving_people.jpg",
                title: "Efficient Extraction of Human Motion Volumes by Tracking.",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), San Francisco, USA, June 2010.",
                refs: [{
                    href: "/assets/publications/pdfs/NieblesHanFeiFei_CVPR2010.pdf",
                    text: "PDF"
                }, {
                    href: "https://doi.org/10.1109/CVPR.2010.5540152",
                    text: "DOI"
                }]
            }, {
                authors: [Pe],
                authorsText: "R. Socher and L. Fei-Fei.",
                image: "",
                title: "Connecting Modalities: Semi-supervised Segmentation and Annotation of Images Using Unaligned Text Corpora.",
                info: "CVPR 2010.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/SocherFeiFei_CVPR2010.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "*M. Sun, *S. Ying-Ze Bao and Silvio Savarese,",
                image: "",
                title: "Object Detection with Geometrical Context Feedback Loop",
                info: "Proc. of British Machine Vision Conference (BMVC), 59.1-59.11, 2010 (oral presentation). (*indicates equal contributions)",
                refs: [{
                    href: "/assets/publications/pdfs/Sun_bmvc_2010.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/MinBMVC10.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "W. Choi and S. Savarese,",
                image: "",
                title: "Multiple Target Tracking in World Coordinate with Single, Minimally Calibrated Camera",
                info: "Proc. of European Conference of Computer Vision, 553-567, 2010",
                refs: [{
                    href: "/assets/publications/pdfs/mtt_wg_eccv2010.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/Choi_ECCV_2010.bib",
                    text: "BibTeX"
                }, {
                    href: "http://www.eecs.umich.edu/vision/mttproject.html",
                    text: "Website"
                }]
            }, {
                authors: [De],
                authorsText: "M. Sun, G. Bradsky, B. Xu, and S. Savarese,",
                image: "",
                title: "Depth-Encoded Hough Voting for Joint Object Detection and Shape Recovery",
                info: "Proc. of European Conference of Computer Vision, 658-671, 2010",
                refs: [{
                    href: "/assets/publications/pdfs/Sun_Eccv_2010.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/MinECCV10.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "S.Yingze Bao, M. Sun, and Silvio Savarese,",
                image: "",
                title: "Toward Coherent Object Detection And Scene Layout Understanding",
                info: "Proc. of IEEE Conference on Computer Vision and Pattern Recognition, 65-72, 2010",
                refs: [{
                    href: "/assets/publications/pdfs/bao_cvpr2010.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/Bao_CVPR2010_Layout.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "Vineet R. Kamat, Julio C. Martinez, Martin Fischer, Mani Golparvar-Fard, Feniosky Pena-Mora, and Silvio Savarese,",
                image: "",
                title: "CEC: Research in Visualization Techniques for Field Construction",
                info: "Journal of Construction Engineering and Management doi:10.1061/(ASCE)CO.1943-7862.0000262",
                refs: []
            }, {
                authors: [De],
                authorsText: "Gaurav Pandey, James McBride, Silvio Savarese and Ryan Eustice,",
                image: "",
                title: "Extrinsic calibration of a 3d laser scanner and an omnidirectional camera",
                info: "In 7th IFAC Symposium on Intelligent Autonomous Vehicles, 2010",
                refs: [{
                    href: "http://robots.engin.umich.edu/publications/gpandey-2010a.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/gpandey-2010a.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "I.Brilakis, M. Lourakis, R. Sacks, S. Savarese, S.Christodoulou,J.Teizer and A. Makhmalbaf,",
                image: "",
                title: "Toward automated generation of parametric BIMs based on hybrid video and laser scanning data.",
                info: "In Journal of Advanced Engineering Informatics, 24(4) 456-465, 2010",
                refs: []
            }, {
                authors: [De],
                authorsText: "M. Golparvar-Fard, F. Pena-Mora, and S. Savarese,",
                image: "",
                title: "D4AR 4 Dimensional augmented reality - tools for automated remote progress tracking and support of decision-enabling tasks in the AEC/FM industry",
                info: "Proc. of The 6th Int. Conf. on Innovations in AEC Special Session - Transformative machine vision for AEC.State College, PA, Jun 9-11. Winner of the best student paper award.",
                refs: []
            }, {
                authors: [De],
                authorsText: "M. Golparvar-Fard, J. Thomas, F. Pena-Mora, and S. Savarese,",
                image: "",
                title: "Remote assessment of pre and post-disaster critical physical infrastructures using segway mobile workstation chariot and D4AR 4D augmented reality models.",
                info: "Proc. of ICCCBE 2010 EG-ICE10., page 63,Nottingham, UK, Jun 30-Jul 2.",
                refs: []
            }, {
                authors: [De],
                authorsText: "M. Golparvar-Fard, F. Pena-Mora, and S. Savarese,",
                image: "",
                title: "Model-based detection of progress using D4AR - A 4 Dimensional augmented reality- models generated by daily site photologs and building information models",
                info: "Proc. of ICCCBE 2010 EG-ICE10. page 81, Nottingham, UK, Jun 30-Jul 2.",
                refs: []
            }, {
                authors: [De],
                authorsText: "M. Golparvar-Fard, F. Pena-Mora, and S. Savarese,",
                image: "",
                title: "Automated model component-based recognition of progress using daily construction photographs and 4D IFC-based models.",
                info: "Proc. of Construction Research Congress, 51-60, Banff, Canada, May 8-11",
                refs: []
            }, {
                authors: [De],
                authorsText: "M. Golparvar-Fard, F. Pena-Mora, and S. Savarese,",
                image: "",
                title: "D4AR - 4 DIMENSIONAL AUGMENTED REALITY - MODELS FOR AUTOMATION AND INTERACTIVE VISUALIZATION OF CONSTRUCTION PROGRESS MONITORING",
                info: "Proc., 2010 International Conference on Construction Applications of Virtual Reality, 2010, Japan, 15-2",
                refs: []
            }, {
                authors: [De],
                authorsText: "V. Kamat, J. Martinez, M. Fischer, M. Golparvar-Fard, F. Pena-Mora, and S. Savarese,",
                image: "",
                title: "CEC: Research in Visualization Techniques for Field Construction",
                info: "Proc., Construction Engineering Conference, Blacksburg, VA, Sep 30- Oct 2.",
                refs: []
            }]
        }, {
            name: "Publications 2009",
            publications: [{
                authors: [Pe],
                authorsText: "B. Yao, D.B. Walther, D.M. Beck*, L. Fei-Fei*.",
                image: "",
                title: "Hierarchical Mixture of Classification Experts Uncovers Interactions between Brain Regions.",
                info: "NIPS 2009.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/YaoWaltherBeckFei-Fei_NIPS2009.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "B. Chai†, D.B. Walther†, D.M. Beck*, L. Fei-Fei*.",
                image: "",
                title: "Exploring Functional Connectivity of the Human Brain using Multivariate Information Analysis.",
                info: "NIPS 2009.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/ChaiWaltherBeckFei-Fei_NIPS2009.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "L.-J. Li and L. Fei-Fei.",
                image: "",
                title: "OPTIMOL: automatic Online Picture collecTion via Incremental MOdel Learning.",
                info: "IJCV 2009.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/JiaFei-FeiIJCV_2009.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Peelen, Marius V. and Fei-Fei, Li and Kastner, Sabine.",
                image: "",
                title: "Neural mechanisms of rapid natural scene categorization in human visual cortex.",
                info: "Nature 2009.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/PeelenFei-FeiKastner_Nature2009.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "D.B. Walther, E. Caddigan, L. Fei-Fei*, D.M. Beck*.",
                image: "",
                title: "Natural scene categories revealed in distributed patterns of activity in the human brain.",
                info: "Journal of Neuroscience, 2009.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/WaltherCaddiganFei-FeiBeck_JoN2009.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "L.-J. Li, R. Socher and L. Fei-Fei.",
                image: "",
                title: "Towards Total Scene Understanding:Classification, Annotation and Segmentation in an Automatic Framework.",
                info: "CVPR 2009 (Oral Presentation).",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/LiSocherFei-Fei_CVPR2009.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Chong Wang, David Blei and L. Fei-Fei.",
                image: "",
                title: "Simultaneous Image Classification and Annotation.",
                info: "CVPR 2009.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/WangBleiFei-Fei_CVPR2009.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "J. Deng, W. Dong, R. Socher, L.-J. Li, K. Li and L. Fei-Fei.",
                image: "",
                title: "ImageNet: A Large-Scale Hierarchical Image Database.",
                info: "CVPR 2009.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/ImageNet_CVPR2009.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe, De],
                authorsText: "*M. Sun, *H. Su, S. Savarese and L. Fei-Fei.",
                image: "",
                title: "A Multi-View Probabilistic Model for 3D Object Classes.",
                info: "CVPR 2009.",
                refs: [{
                    href: "http://vision.stanford.edu/pdf/SunSuSavareseFei-Fei_CVPR2009.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/MinHaoCVPR09.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [Pe, De],
                authorsText: "*H. Su, *M. Sun, L. Fei-Fei and S. Savarese.",
                image: "",
                title: "Learning a dense multi-view representation for detection, viewpoint classification and synthesis of object categories",
                info: "Proc. of International Conference in Computer Vision (ICCV), 213-220, 2009 oral presentation. (*indicates equal contributions);",
                refs: [{
                    href: "/assets/publications/pdfs/SuSunLiSavarese_ICCV2009.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/HaoMinICCV09.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "P. Gupta, S. Arrabolu, M. Brown, S. Savarese.",
                image: "",
                title: "Scene Categorization from Low Definition Video",
                info: "Proc. of International Conference in Computer Vision (ICCV), 1655-1662, 2009",
                refs: [{
                    href: "/assets/publications/pdfs/gupta_iccv09.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/Gupta_ICCV2009_building.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "L. Mei, M. Sun, K.M. Carter, A.O. Hero III, S. Savarese,",
                image: "",
                title: "Unsupervised Object Pose Classification from Short Video Sequences",
                info: "Proc. of British Machine Vision Conference (BMVC), 13-21, September 2009",
                refs: [{
                    href: "/assets/publications/pdfs/Liang_bmvc_09.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/LiangBMVC09.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "W. Choi, K. Shahid, S. Savarese,",
                image: "",
                title: "What are they doing? : Collective Activity Classification Using Spatio-Temporal Relationship Among People",
                info: "Proc. of 9th International Workshop on Visual Surveillance (VSWS09) in conjuction with ICCV,1282-1289, 2009",
                refs: [{
                    href: "http://www.eecs.umich.edu/vision/paper/Wongun_CollectiveActivityRecognition09.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/Choi_VSWS_2009.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "Golparvar-Fard M.,Pena-Mora F., And Savarese S",
                image: "",
                title: "D4AR- A 4-Dimensional Augmented Reality Model for Automating Construction Progress Data Collection, Processing and Communication",
                info: "ITCON Special Issue: Next Generation Construction IT: Technology Foresight, Future Studies, Road mapping, and Scenario Planning, Vol 14, 129-153, 2009",
                refs: [{
                    href: "/assets/publications/pdfs/D4AR_itcon_2009.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "Golparvar-Fard M., Savarese S. and Pena-Mora F.",
                image: "",
                title: "Interactive Visual Construction Progress Monitoring with 4D Augmented Reality Model",
                info: "Proc., Construction Research Congress, 41-50, Seattle, Washington, May 22-24, 2009 CRC First Place Poster Award",
                refs: []
            }, {
                authors: [De],
                authorsText: "Golparvar-Fard M., Pena-Mora F. and Savarese S",
                image: "",
                title: "Monitoring of Construction Performance Using Daily Progress Photograph Logs and 4D As-Planned Models",
                info: "Proc. of 2009 ASCE International Workshop on Computing in Civil Engineering, 53-63, Austin, Texas, June 24-27, 2009",
                refs: []
            }, {
                authors: [De],
                authorsText: "Golparvar-Fard M., Pena-Mora F. and Savarese S.",
                image: "",
                title: "Sparse Reconstruction and Geo-Registration of Daily Site Photographs for Representation of As-Built Construction Scene and Automatic Construction Progress Data Collection",
                info: "Proc. of 2009 International Symposium on Automation and Robotics in Construction, 535-543, Austin, TX, June 24-27,2009",
                refs: []
            }, {
                authors: [Pe, Se],
                authorsText: "Bangpeng Yao, Juan Carlos Niebles and Li Fei-Fei.",
                image: "mining.jpg",
                title: "Mining Discriminative Adjectives and Prepositions for Natural Scene Recognition.",
                info: "IEEE Conference on Computer Vision and Pattern Recognition Workshops (CVPRW), Miami, USA, June 2009.",
                refs: [{
                    href: "https://doi.org/10.1109/CVPRW.2009.5204222",
                    text: "DOI"
                }]
            }]
        }, {
            name: "Publications 2008",
            publications: [{
                authors: [Pe, Se],
                authorsText: "J.C. Niebles, B. Han, A. Ferencz and L. Fei-Fei.",
                image: "eccv08.jpg",
                title: "Extracting Moving People from Internet Videos.",
                info: "ECCV 2008.",
                refs: [{
                    href: "http://vision.stanford.edu/documents/NieblesHanFerenczFei-Fei_ECCV2008.pdf",
                    text: "PDF"
                }, {
                    href: "http://vision.stanford.edu/projects/extractingPeople.html",
                    text: "Website"
                }, {
                    href: "https://link.springer.com/chapter/10.1007/978-3-540-88693-8_39",
                    text: "DOI"
                }, {
                    href: "http://vision.stanford.edu/projects/extractingPeople/NieblesHanFerenczFei-Fei_ECCV2008_poster.pdf",
                    text: "Poster"
                }]
            }, {
                authors: [Pe],
                authorsText: "B.Collins, J. Deng, L. Kai and L. Fei-Fei.",
                image: "",
                title: "Towards scalable dataset construction: An active learning approach.",
                info: "ECCV 2008.",
                refs: [{
                    href: "http://vision.stanford.edu/documents/CollinsDengLiFei-Fei_ECCV2008.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe, De],
                authorsText: "S.Savarese and L. Fei-Fei.",
                image: "",
                title: "View synthesis for recognizing unseen poses of object classes.",
                info: "ECCV 2008.",
                refs: [{
                    href: "http://vision.stanford.edu/documents/SavareseFei-Fei_ECCV2008.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/Savarese_ECCV2008_ViewSynth.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [Pe, Se],
                authorsText: "J.C. Niebles, H. Wang and L. Fei-Fei..",
                image: "",
                title: "Unsupervised learning of human action categories using spatial-temporal words.",
                info: "IJCV 2008.",
                refs: [{
                    href: "http://vision.stanford.edu/documents/NieblesWangFei-Fei_IJCV2008.pdf",
                    text: "PDF"
                }, {
                    href: "http://vision.stanford.edu/niebles/humanactions.htm",
                    text: "Website"
                }, {
                    href: "https://doi.org/10.1007/s11263-007-0122-4",
                    text: "DOI"
                }]
            }, {
                authors: [Pe, De, Se],
                authorsText: "S. Savarese, A. Del Pozo, J.C. Niebles and L. Fei-Fei.",
                image: "",
                title: "Spatial-temporal Correlatons for Unsupervised Action Classification.",
                info: "IEEE Workshop on Motion and Video Computing, 2008.",
                refs: [{
                    href: "/assets/publications/pdfs/SavareseDelPozoEtAl_WMVC08.pdf",
                    text: "PDF"
                }, {
                    href: "https://doi.org/10.1109/WMVC.2008.4544068",
                    text: "DOI"
                }]
            }, {
                authors: [De],
                authorsText: "S. Savarese, R. Spronk, D. G. Stork, and A. DelPozo,",
                image: "",
                title: "Reflections on praxis and facture in a devotional portrait diptych: A computer analysis of the mirror in Hans Memling’s Virgin and Child and Maarten van Nieuwenhove",
                info: "IS&T/SPIE 20th Annual Symposium Electronic Imaging, Jan Jose, CA, Januray 29-31st, 2008",
                refs: [{
                    href: "/assets/publications/pdfs/Savarese_spronk_stork_etal_08.pdf",
                    text: "PDF"
                }]
            }]
        }, {
            name: "Publications 2007",
            publications: [{
                authors: [Pe],
                authorsText: "L.-J. Li and L. Fei-Fei.",
                image: "",
                title: "What, where and who? Classifying event by scene and object recognition.",
                info: "ICCV 2007.",
                refs: [{
                    href: "http://vision.stanford.edu/documents/LiFei-Fei_ICCV07.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "L. Cao and L. Fei-Fei..",
                image: "",
                title: "Spatially coherent latent topic model for concurrent object segmentation and classification.",
                info: "ICCV 2007.",
                refs: [{
                    href: "http://vision.stanford.edu/documents/CaoFei-Fei_ICCV2007.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "D. Walther and L. Fei-Fei..",
                image: "",
                title: "Task-set switching with natural scenes: Measuring the cost of deploying top-down attention.",
                info: "Journal of Vision 2007.",
                refs: [{
                    href: "http://vision.stanford.edu/documents/WaltherFei-Fei_JOV2007.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe, Se],
                authorsText: "Li-Jia Li, Juan Carlos Niebles and Li Fei-Fei.",
                image: "optimol.png",
                title: "OPTIMOL: a framework for Online Picture collecTion via Incremental MOdel Learning.",
                info: "Association for the Advancement of Artificial Intelligence (AAAI) 2007 Robot Competition and Exhibition, Vancouver, Canada, July 2007.",
                refs: [{
                    href: "http://www.aaai.org/PDFs/AAAI/2007/AAAI07-367.pdf",
                    text: "PDF"
                }, {
                    href: "http://vision.stanford.edu/srvc/",
                    text: "Website"
                }]
            }, {
                authors: [Pe],
                authorsText: "L.-J. Li, G. Wang and L. Fei-Fei..",
                image: "",
                title: "OPTIMOL: automatic Object Picture collecTion via Incremental MOdel Learning.",
                info: "CVPR 2007.",
                refs: [{
                    href: "http://vision.stanford.edu/documents/LiWangFei-Fei_CVPR2007.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe, Se],
                authorsText: "J. C. Niebles and L. Fei-Fei..",
                image: "NieblesFei-Fei_CVPR2007.jpg",
                title: "A hierarchical model of shape and appearance for human action classification.",
                info: "CVPR 2007.",
                refs: [{
                    href: "http://vision.stanford.edu/documents/NieblesFei-Fei_CVPR2007.pdf",
                    text: "PDF"
                }, {
                    href: "https://doi.org/10.1109/CVPR.2007.383132",
                    text: "DOI"
                }]
            }, {
                authors: [Pe],
                authorsText: "L. Fei-Fei, R. Fergus and P. Perona.",
                image: "",
                title: "Learning generative visual models for 101 object categories.",
                info: "Computer Vision and Image Understanding, 2007.",
                refs: [{
                    href: "assets/bibtex/feifei2007cviu.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [Pe],
                authorsText: "Fei-Fei, L., Iyer, A., Koch, C., Perona, P.",
                image: "",
                title: "What do we perceive in a glance of a real-world scene?",
                info: "Journal of Vision, 2007.",
                refs: [{
                    href: "http://vision.stanford.edu/documents/Fei-Fei_GistJoV2007.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe, De],
                authorsText: "S. Savarese and L. Fei-Fei.",
                image: "",
                title: "3D generic object categorization, localization and pose estimation",
                info: "Proc. of IEEE International Conf. in Computer Vision (ICCV), 1-8, Brazil, October, 2007 Accepted as Oral Presentation,",
                refs: [{
                    href: "/assets/publications/pdfs/3D%20generic%20object%20categorization_iccv07.pdf",
                    text: "PDF"
                }, {
                    href: "assets/bibtex/Savarese_ICCV2007_Multiview.bib",
                    text: "BibTeX"
                }]
            }, {
                authors: [De],
                authorsText: "A. DelPozo, and S. Savarese,",
                image: "",
                title: "Detecting Specular Surfaces on Natural Images",
                info: "Proc. of IEEE Conference on Computer Vision and Pattern Recognition, 1-8, Minnesota, USA, June 2007",
                refs: [{
                    href: "/assets/publications/pdfs/delpozo_savarese_cvpr07.pdf",
                    text: "PDF"
                }]
            }]
        }, {
            name: "Publications 2006",
            publications: [{
                authors: [Pe, Se],
                authorsText: "J.C. Niebles, H. Wang, L. Fei-Fei..",
                image: "NieblesWangFei-Fei_BMVC2006.jpg",
                title: "Unsupervised learning of human action categories using spatial-temporal words.",
                info: "BMVC 2006.",
                refs: [{
                    href: "http://vision.stanford.edu/documents/NieblesHWangFei-Fei_BMVC2006.pdf",
                    text: "PDF"
                }, {
                    href: "http://vision.stanford.edu/niebles/VPCVPR_06_May19.zip",
                    text: "Video"
                }, {
                    href: "http://www.bmva.org/bmvc/2006/papers/283.pdf",
                    text: "DOI"
                }, {
                    href: "http://vision.stanford.edu/niebles/NieblesWangFeiFei_IMA-Workshop-06_poster.pdf",
                    text: "Poster"
                }]
            }, {
                authors: [Pe],
                authorsText: "L. Fei-Fei.",
                image: "",
                title: "Knowledge transfer in learning to recognize visual object classes..",
                info: "ICDL 2006.",
                refs: [{
                    href: "http://vision.stanford.edu/documents/Fei-Fei_ICDL2006.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "G. Wang, Y. Zhang, and L. Fei-Fei.",
                image: "",
                title: "Using dependent regions for object categorization in a generative framework..",
                info: "CVPR 2006.",
                refs: [{
                    href: "/assets/publications/pdfs/WangZhangFei-Fei_CVPR2006.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "L. Fei-Fei, R. Fergus and P. Perona.",
                image: "",
                title: "One-Shot learning of object categories.",
                info: "PAMI 2006.",
                refs: [{
                    href: "http://vision.stanford.edu/documents/Fei-FeiFergusPerona2006.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "S. Savarese, J. Winn and A. Criminisi,",
                image: "",
                title: "Discriminative Object Class Models of Appearance and Shape by Correlatons",
                info: "Proc. of IEEE Conference on Computer Vision and Pattern Recognition, 2033-2040 ,New York, USA, June 2006 ,",
                refs: [{
                    href: "/assets/publications/pdfs/Discriminative%20_Object_Class_Models_savarese_winn_criminisi_06.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "M. Andreetto, S. Savarese, and P. Perona,",
                image: "",
                title: "Carving from ray-tracing constraints: IRT-carving",
                info: "Proc. of 3D Data Processing Visualization and Trasmission, 49-56, June 2006",
                refs: [{
                    href: "http://www.vision.caltech.edu/savarese/papers_web/3DPVT06.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "S. Savarese, M. Andreetto, H. Rushmeier, F. Bernardini and P. Perona,",
                image: "",
                title: "3D Reconstruction by Shadow Carving: Theory and Practical Evaluation,",
                info: "International Journal of Computer Vision (IJCV) , 71(3), 305-336, March 2006",
                refs: [{
                    href: "http://www.vision.caltech.edu/savarese/papers_web/shadow_carving_06.pdf",
                    text: "PDF"
                }]
            }]
        }, {
            name: "Publications 2005",
            publications: [{
                authors: [Pe],
                authorsText: "R. VanRullen, L. Reddy and L. Fei-Fei..",
                image: "",
                title: "Binding is local problem for natural objects and scenes.",
                info: "Vision Research, 2005.",
                refs: [{
                    href: "http://vision.stanford.edu/documents/VanRullenReddyFei-Fei_VR2005.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "L. Fei-Fei, R. VanRuellen, C. Koch and P. Perona..",
                image: "",
                title: "Why does natural scene categorization require little attention? Exploring attentional requirements for natural and synthetic stimuli.",
                info: "Vision Cognition, 2005.",
                refs: [{
                    href: "http://vision.stanford.edu/documents/Fei-FeiVanRullenKochPerona_VC2005.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "R. Fergus, L. Fei-Fei, P. Perona and A. Zisserman.",
                image: "",
                title: "Learning Object Categories from Google's Image Search.",
                info: "ICCV 2005.",
                refs: [{
                    href: "http://vision.stanford.edu/documents/FergusFei-FeiPeronaZisserman_ICCV05.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "L. Fei-Fei and P. Perona.",
                image: "",
                title: "A Bayesian Hierarchical Model for Learning Natural Scene Categories.",
                info: "CVPR 2005.",
                refs: [{
                    href: "http://vision.stanford.edu/documents/Fei-FeiPerona2005.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "S. Savarese, M. Chen and P. Perona,",
                image: "",
                title: "Local Shape from Mirror Reflections,",
                info: "International Journal of Computer Vision (IJCV), 64(1), 31-67, 2005,",
                refs: [{
                    href: "/assets/publications/pdfs/local_shape_savarese05.pdf",
                    text: "PDF"
                }]
            }]
        }, {
            name: "Publications 2004 & Before",
            publications: [{
                authors: [Se],
                authorsText: "Humberto Campanella P., Mauricio Pardo G., Victor Manotas A., Javier Páez, Juan Carlos Niebles and David Angulo.",
                image: "tugboat.png",
                title: "Signal Processing Unit for River Tugboat Telemetry System.",
                info: "Conference on Design of Circuits and Integrated Systems (DCIS), Bordeaux, France, November 2004.",
                refs: []
            }, {
                authors: [Pe, De],
                authorsText: "S. Savarese, L. Fei-Fei and P. Perona,",
                image: "",
                title: "What do reflections tell us about the shape of a mirror?",
                info: "in Applied Perception in Graphics and Visualization [sponsored by ACM SIGGRAPH], 115-118, Los Angeles, August 7-8, 2004",
                refs: [{
                    href: "/assets/publications/pdfs/SavareseFei-FeiPerona_SIGGRAPH2004.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "S. Savarese, M. Chen and P. Perona,",
                image: "",
                title: "Recovering local shape of a mirror surface from reflection of a regular gridI",
                info: "Proc. of European Conference of Computer Vision, 468-481, Prague, May 2004.",
                refs: [{
                    href: "http://www.vision.caltech.edu/savarese/papers_web/sav_eccv04.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "S. Savarese, M. Chen and P. Perona,",
                image: "",
                title: "Second Order Local Analysis for 3D Reconstruction of Specular Surfaces",
                info: "Proc. of 3D Data Processing Visualization and Trasmission, 356-361, Italy, June 2002.",
                refs: []
            }, {
                authors: [De],
                authorsText: "S. Savarese and P. Perona,",
                image: "",
                title: "Local Analysis for 3D Reconstruction of Specular Surfaces -- part II",
                info: "Proc. of European Conference of Computer Vision, 759-774, Denmark, May 2002.",
                refs: [{
                    href: "http://www.vision.caltech.edu/savarese/papers_web/23510759.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "S. Savarese, H. Rushmeier, F. Bernardini and P. Perona,",
                image: "",
                title: "Implementation of a Shadow Carving System for Shape Capture",
                info: "Proc. of 3D Data Processing Visualization and Trasmission, 12 - 23, Padua, Italy, June 2002.",
                refs: [{
                    href: "http://www.vision.caltech.edu/savarese/papers_web/savarese_3DPVT.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "S. Savarese and P. Perona,",
                image: "",
                title: "Local Analysis for 3D Reconstruction of Specular Surfaces",
                info: "Proc. of IEEE Conference on Computer Vision and Pattern Recognition, II-738-745, Kawa'i, USA, December 2001.",
                refs: [{
                    href: "http://www.vision.caltech.edu/savarese/papers_web/P5_28.PDF",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "S. Savarese, H. Rushmeier, F. Bernardini and P. Perona,",
                image: "",
                title: "Shadow Carving",
                info: "Proc. of the Int. Conf. on Computer Vision, 190-197 Vancouver, Canada, June 2001.",
                refs: [{
                    href: "http://www.vision.caltech.edu/savarese/papers_web/04_17.PDF",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "L. Fei-Fei, R. Fergus, and P. Perona..",
                image: "",
                title: "Learning generative visual models from few training examples: an incremental Bayesian approach tested on 101 object categories.",
                info: "CVPR 2004 Workshop on Generative-Model Based Vision.",
                refs: [{
                    href: "http://vision.stanford.edu/documents/Fei-FeiFergusPerona_GMBV04.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "L. Fei-Fei, R. Fergus, and P. Perona.",
                image: "",
                title: "A Bayesian approach to unsupervised One-Shot learning of Object categories.",
                info: "ICCV 2003.",
                refs: [{
                    href: "http://vision.stanford.edu/documents/Fei-Fei_ICCV03.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "F.F. Li, R. VanRullen, C. Koch and P. Perona.",
                image: "",
                title: "Rapid natural scene categorization in the near absence of attention.",
                info: "Proc. Natl. Acad. Sci. 99.",
                refs: [{
                    href: "http://vision.stanford.edu/documents/LiVanRullenKochPerona_PNAS2002.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Se],
                authorsText: "Carlos Cubas, Marcos Consuegra, Royman Lopez, Alexis Sierra, Jorge Leon, Fernando Mendez, Carlos Ochoa, Fabian Panesso, Edgar Sotter, Fabian Manotas, Victor Manotas, Juan Carlos Niebles, Mauricio Pardo y Eric Vallejo.",
                image: "robots.png",
                title: "Dispositivos automatas para navegacion, deteccion y recoleccion de pelotas de tenis en ambientes conocidos.",
                info: "Revista Ingenieria y Desarrollo. 2001.",
                refs: [{
                    href: "http://rcientificas.uninorte.edu.co/index.php/ingenieria/article/viewFile/2281/1490",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "G.B. Stanley, F.F. Li, and Y. Dan.",
                image: "",
                title: "Reconstruction of natural scenes from ensemble responses in the LGN.",
                info: "Journal of Neuroscience, 1999.",
                refs: [{
                    href: "/assets/publications/pdfs/StanleyLiDan_JN1999.pdf",
                    text: "PDF"
                }]
            }]
        }, {
            name: "Books and Book Chapters",
            publications: [{
                authors: [Pe, De],
                authorsText: "A. Alahi, V. Ramanathan, K. Goel, A. Robicquet, A. Sadeghian, L. Fei-Fei, S. Savarese,",
                image: "",
                title: "Learning to predict in crowds",
                info: "To appear in the book on “Group and Crowd Behavior for Computer Vision” by Elsevier.",
                refs: [{
                    href: "http://web.stanford.edu/%7Ealahi/downloads/Elsevier_Learning_to_predict_in_crowds.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [De],
                authorsText: "A.R. Zamir, A. Hakeem, L. Van Gool, M. Shah, and R. Szeliski,",
                image: "",
                title: "Large-Scale Visual Geo-Localization,",
                info: "Springer (2016).",
                refs: [{
                    href: "http://www.springer.com/gb/book/9783319257792#aboutBook",
                    text: "Book"
                }]
            }, {
                authors: [De],
                authorsText: "M. Sun and S. Savarese,",
                image: "",
                title: "Model-based object recognition",
                info: "Computer Vision, A Reference Guide 2014, Springer, pp 488-492.",
                refs: [{
                    href: "http://www.informatik.uni-trier.de/%7Eley/db/reference/vision/vision2014.html#SunS14",
                    text: "Book"
                }]
            }, {
                authors: [De],
                authorsText: "S. Savarese,",
                image: "",
                title: "3D Shape from Specularities",
                info: "Computer Vision, A Reference Guide 2014, Springer, pp 726-729.",
                refs: [{
                    href: "http://www.informatik.uni-trier.de/%7Eley/db/reference/vision/vision2014.html#SunS14",
                    text: "Book"
                }]
            }, {
                authors: [De],
                authorsText: "W. Choi and S. Savarese,",
                image: "",
                title: "Recognizing Complex Human Activities via Crowd Context",
                info: "Augmented Vision and Reality, Springer, 2013.",
                refs: [{
                    href: "http://link.springer.com/chapter/10.1007%2F8612_2012_4",
                    text: "Book"
                }]
            }, {
                authors: [De],
                authorsText: "D. Hoiem and S. Savarese,",
                image: "",
                title: "Representations and Techniques for 3D Object Recognition and Scene Interpretation",
                info: "Synthesis lecture on Artificial Intelligence and Machine Learning, Morgan Claypool Publishers, 2011.",
                refs: [{
                    href: "http://www.amazon.com/Representations-Techniques-Recognition-Interpretation-Inetlligence/dp/1608457281",
                    text: "Book"
                }]
            }, {
                authors: [De],
                authorsText: "M. Golparvar-Fard, F. Pena-Mora, and S. Savarese.",
                image: "",
                title: "Visualization of Construction Progress Monitoring using Unordered Construction Photo Collections and 4D Building Information Models",
                info: 'in "Augmented Reality", ISBN 978-953-307-631-7. 2011',
                refs: []
            }, {
                authors: [De],
                authorsText: "Y. Bao and S. Savarese,",
                image: "",
                title: "Semantic Structure from Motion: a Novel Framework for Joint Object Recognition and 3D Reconstruction",
                info: 'in "Outdoor and Large-Scale Real-World Scene Analysis", Springer, in press.',
                refs: [{
                    href: "/assets/publications/pdfs/bao_ssfm2011_extended.pdf",
                    text: "pre-print"
                }]
            }, {
                authors: [De],
                authorsText: "S. Savarese, D. G. Stork, A. DelPozo and R. Spronk,",
                image: "",
                title: "A computer analysis of the mirror in Hans Memlingis Virgin and Child and Maarten van Nieuwenhove",
                info: 'in "Digital Imaging for Cultural Heritage Preservation", CRC Press 2011.',
                refs: [{
                    href: "http://www.amazon.com/Digital-Imaging-Cultural-Heritage-Preservation/dp/1439821739",
                    text: "Book"
                }]
            }, {
                authors: [Pe, De],
                authorsText: "S. Savarese, and L. Fei-Fei,",
                image: "",
                title: "Multi-view Object Categorization and Pose Estimation",
                info: 'in "Computer Vision: Detection, Recognition and Reconstruction (Studies in Computational Intelligence)", Volume 285/2010, Springer, 2010.',
                refs: [{
                    href: "http://amzn.com/3642128475",
                    text: "Book"
                }]
            }]
        }, {
            name: "Dissertations",
            publications: [{
                authors: [Pe],
                authorsText: "Yuke Zhu",
                image: "",
                title: "Closing the Perception-Action Loop: Towards General-Purpose Robot Autonomy",
                info: "Stanford University. PhD Thesis. 2019",
                refs: [{
                    href: "http://ai.stanford.edu/~yukez/papers/yukezhu_phd_dissertation.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Jonathan Krause",
                image: "",
                title: "Fine-Grained Recognition: Data, Recognition, and Application.",
                info: "Stanford University. PhD Thesis. 2016 PDF",
                refs: [{
                    href: "/assets/publications/pdfs/krause2016dissertation.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Andrej Karpathy",
                image: "",
                title: "Connecting Images and Natural Language.",
                info: "Stanford University. PhD Thesis. 2016 PDF",
                refs: [{
                    href: "/assets/publications/pdfs/karpathy_dissertation2016.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Vignesh Ramanathan",
                image: "",
                title: "Human-Centric Video Understanding with Weak Supervision.",
                info: "Stanford University. PhD Thesis. 2016 PDF",
                refs: [{
                    href: "/assets/publications/pdfs/vignesh_ramanathan_dissertation_v3.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Marius Cătălin Iordan",
                image: "",
                title: "Uncovering the Neural Representation of Multiple Dimensions of Object Categorization in Human Visual Cortex.",
                info: "Stanford University. PhD Thesis. 2016 PDF",
                refs: [{
                    href: "/assets/publications/pdfs/iordan-dissertation-2016.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Ranjay Krishna",
                image: "",
                title: "Visual Genome: Crowdsourced Visual Knowledge Representations.",
                info: "Stanford University. Masters Thesis. 2016 [Christofer Stephenson Memorial Award] PDF",
                refs: [{
                    href: "/assets/publications/pdfs/ranjay2016thesis.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Olga Russakovsky",
                image: "",
                title: "Scaling up object detection.",
                info: "Stanford University. PhD Thesis. 2015 PDF",
                refs: [{
                    href: "/assets/publications/pdfs/Russakovsky_PhD_thesis_2015.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Chris Baldassano",
                image: "",
                title: "Visual scene perception in the human brain: connections to memory, categorization, and social cognition.",
                info: "Stanford University. PhD Thesis. 2015 PDF",
                refs: [{
                    href: "/assets/publications/pdfs/Baldassano_PhD_thesis_2015.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Kevin Tang",
                image: "",
                title: "Visual learning with weakly labeled video.",
                info: "Stanford University. PhD Thesis. 2015 PDF",
                refs: [{
                    href: "/assets/publications/pdfs/Tang_PhD_thesis_2015.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Bangpeng Yao",
                image: "",
                title: "Understanding human actions in still images.",
                info: "Stanford University. PhD Thesis. 2013 PDF",
                refs: [{
                    href: "/assets/publications/pdfs/Yao_PhD_thesis_2013.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Jia Deng",
                image: "",
                title: "Large scale visual recognition.",
                info: "Princeton University. PhD Thesis. 2012 PDF",
                refs: [{
                    href: "/assets/publications/pdfs/Deng_PhD_thesis_2012.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: "Jia Li",
                image: "",
                title: "Semantic image understanding: from the web, in large scale, with real-world challenging data.",
                info: "Stanford University. PhD Thesis. 2011 PDF",
                refs: [{
                    href: "/assets/publications/pdfs/JiaLi_PhD_thesis_2011.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe, Se],
                authorsText: Se,
                image: "",
                title: "Extracting moving people and categorizing their activities in video.",
                info: "Princeton University. PhD Thesis. 2011 PDF",
                refs: [{
                    href: "/assets/publications/pdfs/Niebles_PhD_thesis_2011.pdf",
                    text: "PDF"
                }]
            }, {
                authors: [Pe],
                authorsText: Pe,
                image: "",
                title: "Visual recognition: computational models and human psychophysics.",
                info: "California Insitute of Technology. PhD Thesis. 2005",
                refs: [{
                    href: "/assets/publications/pdfs/FeiFeiLi_phD_thesis_2005.pdf",
                    text: "PDF"
                }]
            }]
        }, {
            name: "Patents",
            publications: [{
                authors: [De],
                authorsText: "M. Golparvar-Fard, F. Pena-Mora, S. Savarese (2011)",
                image: "",
                title: "D4AR modeling for automation and interactive visualization of construction progress monitoring",
                info: "Provisional Patent, U. S. Patent and Trademark Office (61/570,491).",
                refs: []
            }, {
                authors: [De],
                authorsText: "F. Bernardini, B. Henning, H. Rushmeier, S. Savarese, G. Taubin,",
                image: "",
                title: "System, method, and program product for acquiring accurate object silhouettes for shape recovery",
                info: "IBM US Patent 6,455,835, (2001)",
                refs: [{
                    href: "https://www.google.com.pg/patents/US6455835",
                    text: "Abstract"
                }]
            }]
        }, {
            name: "Abstracts",
            publications: [{
                authors: [De],
                authorsText: "J. Clemons, Y. Bao, M. Bagra, T. Austin, S. Savarese,",
                image: "",
                title: "Scene Understanding for the Visually Impaired Using Visual Sonification by Visual Feature Analysis and Auditory Signature",
                info: "Proc. of Vision Science Society, May 2012.",
                refs: []
            }, {
                authors: [De],
                authorsText: "S. Savarese, A. Del Pozo, D. Baker, D.J. Simons,",
                image: "",
                title: "When are reflections useful in perceiving the shape of shiny surfaces?",
                info: "Proc. of Vision Science Society, Florida, May 2008",
                refs: []
            }, {
                authors: [De],
                authorsText: "M. Golparvar Fard, S. Savarese, F. Pena-Mora,",
                image: "",
                title: "Interactive Visual Construction Progress Monitoring with 4D Augmented Reality Model",
                info: "CCBE-XI, Beijing, October 16-18, 2008",
                refs: []
            }, {
                authors: [De],
                authorsText: "A. Del Pozo, S. Savarese, D. Baker, D. J. Simons,",
                image: "",
                title: "Why do we see some surfaces as reflective?",
                info: "Proc. of Vision Science Society, Florida, May 2008",
                refs: []
            }, {
                authors: [Pe, De],
                authorsText: "S. Savarese, L. Fei-Fei and P. Perona,",
                image: "",
                title: "Can We See the Shape of a Mirror?",
                info: "Proc. of Vision Science Society, Florida, May 2003.",
                refs: [{
                    href: "http://journalofvision.org/3/9/74/",
                    text: "Abstract"
                }]
            }]
        }];
        function Ae(e) {
            let t = "";
            for (let i of e.refs)
                t += '[<a class="link-sytle" href="' + i.href + '">' + i.text + "</a>] ";
            return `\n    <div class="column">\n      <p class="is-6"><b>${e.title}</b></p>\n      <p><em>${e.info}</em></p>\n      <p>${e.authorsText}</p>\n      <div>${t}</div>\n    </div>\n  `
        }
        var Le = document.getElementById("search_results")
          , we = document.getElementById("search_input");
        (async () => {
            var e = await async function() {
                const e = await Q({
                    schema: {
                        authorsText: "string",
                        image: "string",
                        title: "string",
                        info: "string"
                    },
                    hooks: {
                        afterInsert: ve
                    }
                });
                for (const t in ye)
                    await fe(e, ye[t].publications);
                return e
            }()
              , t = function(e) {
                var t = '<em>&nbsp&nbsp&nbspProf. Fei-Fei Li publishes under the name "L. Fei-Fei".</em>';
                for (const i in e.docs)
                    t += Ae(e.docs[i]);
                return Le.innerHTML = t,
                t
            }(e);
            we.addEventListener("keyup", (async function() {
                "" != we.value ? function(e) {
                    var t = '<em>&nbsp&nbsp&nbspProf. Fei-Fei Li publishes under the name "L. Fei-Fei".</em>';
                    e.sort((function(e, t) {
                        var i = "\\b(19|20)\\d{2}\\b"
                          , a = e.document.info.match(i)
                          , n = t.document.info.match(i);
                        return a = null == a ? 0 : a[0],
                        (n = null == n ? 0 : n[0]) - a
                    }
                    ));
                    for (const i in e)
                        t += Ae(e[i].document);
                    Le.innerHTML = t
                }(await async function(e, t) {
                    return await async function(e, t, i) {
                        const a = await me(e, t, void 0)
                          , n = S(t.term);
                        return a.hits.map((t => Object.assign(t, {
                            positions: Object.fromEntries(Object.entries(e.positions[t.id]).map(( ([e,t]) => [e, Object.fromEntries(Object.entries(t).filter(( ([e]) => n.find((t => e.startsWith(t))))))])))
                        })))
                    }(t, {
                        term: e,
                        properties: "*",
                        limit: 1e3
                    })
                }(we.value, e)) : Le.innerHTML = t
            }
            ))
        }
        )()
    }
    )()
}
)();
//# sourceMappingURL=index.4.7f68720a.js.map
