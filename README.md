# Welcome to the Probabilistic Inference and Learning Lab (PIL)

更新
1. add publication 
`js/publications.js` line1174


这里最简格式如图
```
        , ye = [{
                    name: "Abstracts",
                    publications: 
                    [{
                        authors: [MXM, YK],
                        authorsText: "Xiangming Meng*, Yoshiyuki Kabashima",
                        image: "",
                        title: "Diffusion Model Based Posterior Sampling for Noisy Linear Inverse Problems",
                        info: "ACML 2024 - Best Paper Runner-Up Award",
                        refs: [
                            { href: "https://arxiv.org/abs/2211.12343", text: "arXiv" },
                            { href: "https://github.com/mengxiangming/dmps", text: "code" }
                        ]
                    },{
                        authors: [MXM, YK],
                        authorsText: "Xiangming Meng*, Yoshiyuki Kabashima",
                        image: "",
                        title: "Diffusion Model Based Posterior Sampling for Noisy Linear Inverse Problems",
                        info: "ACML 2024 - Best Paper Runner-Up Award",
                        refs: [
                            { href: "https://arxiv.org/abs/2211.12343", text: "arXiv" },
                            { href: "https://github.com/mengxiangming/dmps", text: "code" }
                        ]
                    }] //这行的 } 后面粘贴下面代码块！！！！！！！！！！！！！
                }];
```
填充下面空白并粘贴到上面代码块中标记！！！！！！！！位置
```
,{
                        authors: [MXM, YK],
                        authorsText: "Xiangming Meng*, Yoshiyuki Kabashima",
                        image: "",
                        title: "Diffusion Model Based Posterior Sampling for Noisy Linear Inverse Problems",
                        info: "ACML 2024 - Best Paper Runner-Up Award",
                        refs: [
                            { href: "https://arxiv.org/abs/2211.12343", text: "arXiv" },
                            { href: "https://github.com/mengxiangming/dmps", text: "code" }
                        ]
                    }
```

2. add research project 
`js/research.js` line39

3. add people 
`people.html` line 111
可以没有照片，只需要删掉`<img src="/assets/people/personnel/youngjoong_kwon.jpg">`

即改变
```
                    <div class="column">
                        <article class="media svl-people--member-article">
                            <figure class="media-left image svl-people--member-pic"><img
                                    src="/assets/people/personnel/youngjoong_kwon.jpg">
                            </figure>
                            <div class="media-content">
                                <p><span class="svl-people--member-title"><a href="http://weiyuliu.com/">Weiyu
                                            Liu</a></span><br>Postdoctoral Researcher<br><span class="mono">weiyul [at] stanford [dot]
                                        edu</span><br></p>
                            </div>
                        </article>
                    </div>
```
为
```
                    <div class="column">
                        <article class="media svl-people--member-article">
                            <figure class="media-left image svl-people--member-pic">
                            </figure>
                            <div class="media-content">
                                <p><span class="svl-people--member-title"><a href="http://weiyuliu.com/">Weiyu
                                            Liu</a></span><br>Postdoctoral Researcher<br><span class="mono">weiyul [at] stanford [dot]
                                        edu</span><br></p>
                            </div>
                        </article>
                    </div>
```
如果要增加人，复制粘贴上面代码块
