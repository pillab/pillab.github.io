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
            },{
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
