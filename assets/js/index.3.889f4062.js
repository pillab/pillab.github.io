( () => {
    var e = {
        419: () => {
            document.addEventListener("DOMContentLoaded", ( () => {
                const e = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);
                e.length > 0 && e.forEach((e => {
                    e.addEventListener("click", ( () => {
                        const t = e.dataset.target
                          , a = document.getElementById(t);
                        e.classList.toggle("is-active"),
                        a.classList.toggle("is-active")
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
    function a(n) {
        var i = t[n];
        if (void 0 !== i)
            return i.exports;
        var s = t[n] = {
            exports: {}
        };
        return e[n](s, s.exports, a),
        s.exports
    }
    ( () => {
        "use strict";
        a(419);


// ===============================
        // 这里用来写项目start
// ===============================
        
        const e = [{
            title: "BEHAVIOR",
            image: "assets/research/carousel-behavior.jpg",
            content: '<p>BEHAVIOR is a benchmark in simulation where embodied AI agents need to plan and execute navigation and manipulation strategies based on sensor information to fulfill up to 1,000 household activities. BEHAVIOR tests the ability of agents to perceive the environment, plan, and execute complex long-horizon activities that involve multiple objects, rooms, and state changes, all with the reproducibility, safety, and observability offered by a realistic physics simulation.</p>\n              <p>Check out our <a class="link-style" href="http://behavior.stanford.edu/">Link</a>.</p>'
        }, {
            title: "ObjectFolder",
            image: "assets/research/carousel-objectfolder.jpg",
            content: '<p>ObjectFolder models the multisensory behaviors of real objects with 1) ObjectFolder 2.0, a dataset of 1,000 neural objects in the form of implicit neural representations with simulated multisensory data, and 2) ObjectFolder Real, a dataset that contains the multisensory measurements for 100 real-world household objects, building upon a newly designed pipeline for collecting the 3D meshes, videos, impact sounds, and tactile readings of real-world objects.</p>\n              <p>Check out our <a class="link-style" href="http://objectfolder.org/">Link</a>.</p>'
        }, {
            title: "Multi-Object Multi-Actor (MOMA)",
            image: "assets/research/carousel-moma.jpg",
            content: '<p>Multi-Object Multi-Actor (MOMA) is a compositional and hierarchical activity recognition framework for complex activities that involve multiple humans utilizing a variety of objects to accomplish certain tasks. We introduce activity graphs as the overarching and human interpretable representation of human activities in videos and activity parsing as the task of generating activity graphs.</p>\n              <p>Check out our <a class="link-style" href="http://moma.stanford.edu/">Link</a>.</p>'
        }, {
            title: "People, AI & Robots (PAIR)",
            image: "assets/research/carousel-pair.jpg",
            content: '<p>We work on challenging open problems at the intersection of computer vision, machine learning, and robotics. We develop algorithms and systems that unify in reinforcement learning, control theoretic modeling, and 2D/3D visual scene understanding to teach robots to perceive and to interact with the physical world.</p>\n              <p>Check out our <a class="link-style" href="http://pair.stanford.edu/">Link</a> and <a class="link-style" href="http://pair.stanford.edu/publications/">Papers</a>.</p>'
        }, {
            title: "Partnership in AI-Assisted Care (PAC)",
            image: "assets/research/carousel-pac.jpg",
            content: '<p>The Partnership in AI-Assisted Care (PAC) is an interdisciplinary collaboration between the School of Medicine and the Computer Science department focusing on cutting edge computer vision and machine learning technologies to solve some of healthcare\'s most important problems.</p>\n              <p>Check out our <a class="link-style" href="https://aicare.stanford.edu/">Link</a> and <a class="link-style" href="https://aicare.stanford.edu/projects/hand_hygiene/video/dispenser.mp4">Video</a></p>'
        }, {
            title: "Trustworthy AI",
            image: "assets/research/stai.png",
            content: '<p>Stanford Trustworthy AI (STAI) aims to supercharge innovations in artificial intelligence with human understanding. We engage in translational research across fairness, explainability, privacy, and robustness, guided by ethics. Our group does both theoretical and applied research across multiple domains of artificial intelligence.</p>\n              <p>Check out our <a class="link-style" href="https://stai.stanford.edu/">Link</a>.</p>'
        }]
          , t = [{
            title: "JackRabbot",
            image: "assets/research/carousel-jackrabbot2.jpg",
            content: '<p>Our work at the SVL is making practical a new generation of autonomous agents that can operate safely alongside humans in dynamic crowded environments such as terminals, malls, or campuses. The Stanford “Jackrabbot”, which takes it name from the nimble yet shy Jackrabbit, is a self-navigating automated electric delivery cart capable of carrying small payloads.</p>\n              <p>Check out our <a class="link-sytle" href="http://svl.stanford.edu/projects/jackrabbot/">Link</a> and <a class="link-sytle" href="http://svl.stanford.edu/projects/jackrabbot/cvgl_files/quartz_jr.mp4">Video</a>.</p>'
        }, {
            title: "ActivityNet",
            image: "assets/research/anet_cvpr15b.jpg",
            content: '<p>Our benchmark aims at covering a wide range of complex human activities that are of interest to people in their daily living. We illustrate three scenarios in which ActivityNet can be used to compare algorithms for human activity understanding: global video classification, trimmed activity classification and activity detection.</p>\n              <p>Check out our <a class="link-sytle" href="http://activity-net.org/">Link</a>.</p>'
        }, {
            title: "Visual Genome",
            image: "assets/research/interconnected_images.png",
            content: '<p>Short Description: To achieve success at cognitive tasks, models need to understand the interactions and relationships between objects in an image. Visual Genome is a new dataset to connect dense, structured image concepts to language.</p>\n              <p>Check out our <a class="link-sytle" href="http://visualgenome.org/">Link</a>.</p>'
        }, {
            title: "ObjectNet3D",
            image: "assets/research/ObjectNet3D.png",
            content: '<p>ObjectNet3D is a large scale database for 3D object recognition. With 90,127 images, 201,888 objects in these images and 44,147 3D shapes, ObjectNet3D offers a powerful tool for learning to recognize 3D pose and 3D shape of objects from 2D images.</p>\n              <p>Check out our <a class="link-sytle" href="http://cvgl.stanford.edu/projects/objectnet3d/">Link</a>.</p>'
        }, {
            title: "ImageNet Challenge",
            image: "assets/research/ilsvrc_challenge.jpg",
            content: '<p>The ImageNet Large Scale Visual Recognition Challenge (ILSVRC) evaluates algorithms for object detection and image classification at large scale. One high level motivation is to allow researchers to compare progress in computer vision across a wider variety of objects -- taking advantage of the quite expensive labeling efforts.</p>\n              <p>Check out our <a class="link-sytle" href="http://www.image-net.org/challenges/LSVRC/">Link</a>.</p>'
        }, {
            title: "ImageNet",
            image: "assets/research/ilsvrc_challenge.jpg",
            content: '<p>ImageNet is an image database organized according to the WordNet hierarchy (currently only the nouns), in which each node of the hierarchy is depicted by hundreds and thousands of images. As the largest labelled image data set at the time of its release in 2009, ImageNet has helped to pave the way for today’s advances in visual recognition.</p>\n              <p>Check out our <a class="link-sytle" href="http://www.image-net.org/">Link</a>.</p>'
        }];


// ===============================
        // 这里用来写项目end
// ===============================
        document.addEventListener("DOMContentLoaded", (function a() {
            document.removeEventListener("DOMContentLoaded", a);
            let n = document.getElementById("svl-current-research--article-container");
            for (const t of e) {
                const e = document.createElement("article");
                e.classList.add("columns", "is-desktop");
                const a = document.createElement("div");
                a.classList.add("column", "is-one-quarter"),
                a.innerHTML = `\n      <figure class="image">\n        <img src="../${t.image}"\n             alt="Research">\n      </figure>\n    `;
                const i = document.createElement("div");
                i.classList.add("column");
                const s = document.createElement("p");
                s.classList.add("title", "is-5"),
                s.innerText = t.title,
                i.appendChild(s);
                const o = document.createElement("div");
                o.innerHTML = t.content,
                i.appendChild(o),
                e.appendChild(a),
                e.appendChild(i),
                n.appendChild(e)
            }
            n = document.getElementById("svl-past-research--article-container");
            for (const e of t) {
                const t = document.createElement("article");
                t.classList.add("columns", "is-desktop");
                const a = document.createElement("div");
                a.classList.add("column", "is-one-quarter"),
                a.innerHTML = `\n      <figure class="image">\n        <img src="../${e.image}"\n             alt="Research">\n      </figure>\n    `;
                const i = document.createElement("div");
                i.classList.add("column");
                const s = document.createElement("p");
                s.classList.add("title", "is-5"),
                s.innerText = e.title,
                i.appendChild(s);
                const o = document.createElement("div");
                o.innerHTML = e.content,
                i.appendChild(o),
                t.appendChild(a),
                t.appendChild(i),
                n.appendChild(t)
            }
        }
        ))
    }
    )()
}
)();
//# sourceMappingURL=index.3.889f4062.js.map
