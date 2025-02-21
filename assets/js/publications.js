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


// const MXM = "Xiangming Meng",
//       YK = "Yoshiyuki Kabashima",

// // ===========================================================
// //   这里添加文章starting
// // ==========================================================
//       , ye = [{
//         name: "Publications",
//         publications: [
//             {
//                 authors: [MXM, YK],
//                 authorsText: "Xiangming Meng*, Yoshiyuki Kabashima",
//                 image: "",
//                 title: "Diffusion Model Based Posterior Sampling for Noisy Linear Inverse Problems",
//                 info: "ACML 2024 - Best Paper Runner-Up Award",
//                 refs: [
//                     { href: "https://arxiv.org/abs/2211.12343", text: "arXiv" },
//                     { href: "https://github.com/mengxiangming/dmps", text: "code" }
//                 ]
//             },
//             {
//                 authors: [MXM, YK],
//                 authorsText: "Xiangming Meng*, Yoshiyuki Kabashima",
//                 image: "",
//                 title: "QCM-SGM+: Improved Quantized Compressed Sensing With Score-Based Generative Models",
//                 info: "AAAI 2024",
//                 refs: [
//                     { href: "https://arxiv.org/abs/2302.00919v2", text: "arXiv" },
//                     { href: "https://github.com/mengxiangming/QCS-SGM-plus", text: "code" }
//                 ]
//             },
//             {
//                 authors: [MXM],
//                 authorsText: "Xiangming Meng*, Roman Bachmann, Mohammad Emtiyaz Khan",
//                 image: "",
//                 title: "Training Binary Neural Networks using the Bayesian Learning Rule",
//                 info: "ICML 2020",
//                 refs: [
//                     { href: "https://arxiv.org/abs/2002.10778", text: "arXiv" },
//                     { href: "https://github.com/team-approx-bayes/BayesBiNN", text: "code" }
//                 ]
//             },
//             {
//                 authors: [MXM],
//                 authorsText: "Xiangming Meng*, Lei Zhang, Chao Wang, Wenjin Wang, Yiqun Wu, Yan Chen",
//                 image: "",
//                 title: "Advanced NOMA Receivers From a Unified Variational Inference Perspective",
//                 info: "JSAC 2021",
//                 refs: [
//                     { href: "https://ieeexplore.ieee.org/abstract/document/9181630", text: "IEEE" }
//                 ]
//             },
//             {
//                 authors: [MXM],
//                 authorsText: "Xiangming Meng*, Sheng Wu, Linling Kuang, Jianhua Lu",
//                 image: "",
//                 title: "An Expectation Propagation Perspective on Approximate Message Passing",
//                 info: "SPL 2015",
//                 refs: [
//                     { href: "https://ieeexplore.ieee.org/abstract/document/7008468", text: "IEEE" }
//                 ]
//             },
//             {
//                 authors: [MXM],
//                 authorsText: "Xiangming Meng*, Sheng Wu, Jiang Zhu",
//                 image: "",
//                 title: "A unified Bayesian Inference Framework for Generalized Linear Models",
//                 info: "SPL 2018",
//                 refs: [
//                     { href: "https://arxiv.org/abs/1712.10288", text: "arXiv" },
//                     { href: "https://ieeexplore.ieee.org/abstract/document/8244269/", text: "IEEE" }
//                 ]
//             }
//         ]
//     }];
// // ===========================================================
// //   这里添加文章ending
// // ==========================================================
    

    
        const Se = "Juan Carlos Niebles"
          , Pe = "L. Fei-Fei"
          , De = "Silvio Savarese"
          , Te = "Jiajun Wu"
          , MXM = "Xiangming Meng"
          , YK = "Yoshiyuki Kabashima"



// ===========================================================
        //   这里添加文章starting
// ==========================================================
          , ye = [{
            name: "Abstracts",
            publications: [{
                authors: [De],
                authorsText: "J. Clemons, Y. Bao, M. Bagra, T. Austin, S. Savarese,",
                image: "",
                title: "Scene Understanding for the Visually Impaired Using Visual Sonification by Visual Feature Analysis and Auditory Signature",
                info: "Proc. of Vision Science Society, May 2012.",
                refs: []
            }, 
            {
                authors: [MXM, YK],
                authorsText: "Xiangming Meng*, Yoshiyuki Kabashima,",
                image: "",
                title: "Diffusion Model Based Posterior Sampling for Noisy Linear Inverse Problems",
                info: "ACML 2024 - Best Paper Runner-Up Award",
                refs: [
                    { href: "https://arxiv.org/abs/2211.12343", text: "arXiv" },
                    { href: "https://github.com/mengxiangming/dmps", text: "code" }
            ]
            },

           {
                authors: [MXM, YK],
                authorsText: "Xiangming Meng*, Yoshiyuki Kabashima,",
                image: "",
                title: "QCM-SGM+: Improved Quantized Compressed Sensing With Score-Based Generative Models",
                info: "AAAI 2024",
                refs: [
                    { href: "https://arxiv.org/abs/2302.00919v2", text: "arXiv" },
                    { href: "https://github.com/mengxiangming/QCS-SGM-plus", text: "code" }
                ]
            },
            {
                authors: [MXM],
                authorsText: "Xiangming Meng, Roman Bachmann, Mohammad Emtiyaz Khan*,",
                image: "",
                title: "Training Binary Neural Networks using the Bayesian Learning Rule",
                info: "ICML 2020",
                refs: [
                    { href: "https://arxiv.org/abs/2002.10778", text: "arXiv" },
                    { href: "https://github.com/team-approx-bayes/BayesBiNN", text: "code" }
                ]
            },
            {
                authors: [MXM],
                authorsText: "Xiangming Meng, Lei Zhang, Chao Wang, Wenjin Wang, Yiqun Wu, Yan Chen*,",
                image: "",
                title: "Advanced NOMA Receivers From a Unified Variational Inference Perspective",
                info: "IEEE JSAC 2021",
                refs: [
                    { href: "https://ieeexplore.ieee.org/abstract/document/9181630", text: "IEEE" }
                ]
            },
            {
                authors: [MXM, SW, LZ, WJW],
                authorsText: "Xiangming Meng, Sheng Wu, Linling Kuang, Jianhua Lu*,",
                image: "",
                title: "An Expectation Propagation Perspective on Approximate Message Passing",
                info: "SPL 2015",
                refs: [
                    { href: "https://ieeexplore.ieee.org/abstract/document/7008468", text: "IEEE" }
                ]
            },
            {
                authors: [MXM, JZ],
                authorsText: "Xiangming Meng*, Sheng Wu, Jiang Zhu,",
                image: "",
                title: "A unified Bayesian Inference Framework for Generalized Linear Models",
                info: "SPL 2018",
                refs: [
                    { href: "https://arxiv.org/abs/1712.10288", text: "arXiv" },
                    { href: "https://ieeexplore.ieee.org/abstract/document/8244269/", text: "IEEE" }
                ]
            }                           

                           
            ]
        }];

// ===========================================================
        //   这里添加文章ending
// ==========================================================



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
                var t = '<em>For an up-to-date publication list, please see the <a href="https://scholar.google.com/citations?user=oV70ZoQAAAAJ&hl=en">Google Scholar</a> page.</em>';
                for (const i in e.docs)
                    t += Ae(e.docs[i]);
                return Le.innerHTML = t,
                t
            }(e);
            we.addEventListener("keyup", (async function() {
                "" != we.value ? function(e) {
                    var t = '<em>For an up-to-date publication list, please see the <a href="https://scholar.google.com/citations?user=oV70ZoQAAAAJ&hl=en">Google Scholar</a> page.</em>';
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
