const Se = "Juan Carlos Niebles",
      Pe = "L. Fei-Fei",
      De = "Silvio Savarese",
      Te = "Jiajun Wu",
      MXM = "Xiangming Meng",
      YK = "Yoshiyuki Kabashima";

// ===========================================================
//   这里添加文章starting
// ==========================================================
      , ye = [{
        name: "Abstracts",
        publications: [
            {
                authors: [De],
                authorsText: "J. Clemons, Y. Bao, M. Bagra, T. Austin, S. Savarese",
                image: "",
                title: "Scene Understanding for the Visually Impaired Using Visual Sonification by Visual Feature Analysis and Auditory Signature",
                info: "Proc. of Vision Science Society, May 2012.",
                refs: []
            },
            {
                authors: [MXM, YK],
                authorsText: "Xiangming Meng*, Yoshiyuki Kabashima",
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
                authorsText: "Xiangming Meng*, Yoshiyuki Kabashima",
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
                authorsText: "Xiangming Meng, Roman Bachmann, Mohammad Emtiyaz Khan*",
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
                authorsText: "Xiangming Meng, Lei Zhang, Chao Wang, Wenjin Wang, Yiqun Wu, Yan Chen*",
                image: "",
                title: "Advanced NOMA Receivers From a Unified Variational Inference Perspective",
                info: "IEEE JSAC 2021",
                refs: [
                    { href: "https://ieeexplore.ieee.org/abstract/document/9181630", text: "IEEE" }
                ]
            },
            {
                authors: [MXM],
                authorsText: "Xiangming Meng, Sheng Wu, Linling Kuang, Jianhua Lu*",
                image: "",
                title: "An Expectation Propagation Perspective on Approximate Message Passing",
                info: "IEEE SPL 2015",
                refs: [
                    { href: "https://ieeexplore.ieee.org/abstract/document/7008468", text: "IEEE" }
                ]
            },
            {
                authors: [MXM],
                authorsText: "Xiangming Meng*, Sheng Wu, Jiang Zhu",
                image: "",
                title: "A unified Bayesian Inference Framework for Generalized Linear Models",
                info: "IEEE SPL 2018",
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

// Make sure you have a div with id="publications" in your HTML to render the publications.
const publicationsContainer = document.getElementById("publications");

if (publicationsContainer) {
    ye[0].publications.forEach(pub => {
        const publicationDiv = document.createElement("div");
        publicationDiv.classList.add("publication");

        const title = document.createElement("h3");
        title.textContent = pub.title;
        publicationDiv.appendChild(title);

        const authors = document.createElement("p");
        authors.textContent = pub.authorsText;
        publicationDiv.appendChild(authors);

        const info = document.createElement("p");
        info.textContent = pub.info;
        publicationDiv.appendChild(info);

        if (pub.refs && pub.refs.length > 0) {
            const refsList = document.createElement("ul");
            pub.refs.forEach(ref => {
                const refItem = document.createElement("li");
                const refLink = document.createElement("a");
                refLink.href = ref.href;
                refLink.textContent = ref.text;
                refItem.appendChild(refLink);
                refsList.appendChild(refItem);
            });
            publicationDiv.appendChild(refsList);
        }

        publicationsContainer.appendChild(publicationDiv);
    });
}
