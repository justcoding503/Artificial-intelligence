const qs1 = document.getElementById("qs1");
const qs2 = document.getElementById("qs2");
const answer = document.getElementById("answer");
const ml = document.getElementById("ml");
const sl = document.getElementById("sl");
const deep = document.getElementById("deep");
const rule = document.getElementById("rule");
const all = document.getElementById("all");
const question = document.getElementById("question");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const botname= document.getElementById("botname");
const types = document.getElementById("types");
const span1 = document.getElementById("span1");
const span2 = document.getElementById("span2");
const header = document.getElementById("header");
const logo = document.getElementById("logo");
const waysdl1 = document.getElementById("waysdl1");
const waysdl2 = document.getElementById("waysdl2");
const waysdl3 = document.getElementById("waysdl3");
const waysdl4 = document.getElementById("waysdl4");
const waysdl5 = document.getElementById("waysdl5");
const info1 = document.getElementById("info1");
const info2 = document.getElementById("info2");
const info3 = document.getElementById("info3");
const info4 = document.getElementById("info4");
const info5 = document.getElementById("info5");
const way1 = document.getElementById("way1");
const way2 = document.getElementById("way2");
const way3 = document.getElementById("way3");
const way4 = document.getElementById("way4");
const way5 = document.getElementById("way5");
const dl = document.getElementById("dl");
const rb = document.getElementById("rb");
const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");
const df = document.getElementById("df");
const r = document.getElementById("r");
const t = document.getElementById("t");
const d = document.getElementById("d");

r.addEventListener("click", function(){
    rule.style.display="block";
})
t.addEventListener("click", function(){
    all.style.display="block";
})
d.addEventListener("click", function(){
    deep.style.display="block";
})
document.getElementById("thehow").addEventListener("mouseover", mouseyfun);
div1.addEventListener("click", supervised)
function supervised(){
    header.innerHTML="Supervised learning";
    span1.innerHTML="unsupervised learning";
    span1.onclick=unsupervised;
    span2.innerHTML="reinforcement learning";
    span2.onclick=reinforcement;
    sl.style.display="block";
    qs1.style.padding="5px";
    qs1.style.opacity=1;
    qs2.style.padding="5px";
    qs2.style.opacity=1;
    qs1.innerHTML="what is supervised learning?";
    sl.scrollIntoView({
        behavior:'smooth'
    });
    logo.src="https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/250px-Google_Translate_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail";
    qs1.addEventListener("click", function(){
        answer.innerHTML="Supervised learning is a type of machine learning where a model learns from labeled examples (inputs with correct outputs) to make predictions on new data. For example, Google Translate learns from sentences paired with their translations.";
        answer.style.padding="10px";
        qs2.style.opacity="0.5";
        qs1.style.zIndex=9999;
        qs1.style.padding="10px";
        qs2.style.padding="5px";
        qs1.style.opacity=1;
    });
    qs2.addEventListener("click", function(){
        answer.innerHTML="These models are useful because they learn patterns from existing data and use them to make accurate predictions on new data, automate tasks, and solve real-world problems, such as translating languages.";
        answer.style.padding="10px";
        qs1.style.opacity="0.5";
        qs2.style.zIndex=99999;
        qs2.style.padding="10px";
        qs1.style.padding="5px";
        qs2.style.opacity=1;
    });
};
div2.addEventListener("click", unsupervised);
function unsupervised(){
    header.innerHTML="Unsupervised learning";
    span1.innerHTML="supervised learning";
    span1.onclick = supervised;
    span2.innerHTML="reinforcement learning";
    span2.onclick=reinforcement;
    sl.style.display="block";
    qs1.innerHTML="what is unsupervised learning?";
    botname.innerHTML="K-means clustering";
    qs1.style.padding="5px";
    qs1.style.opacity=1;
    qs1.style.padding="5px";
    qs1.style.opacity=1;
    qs2.style.padding="5px";
    qs2.style.opacity=1;
    sl.scrollIntoView({
        behavior:'smooth'
    })
    logo.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHawXqHiSCpSq3RhAPnmR6tYwdH82ZWw74LioluaXSx76VkNGKjYqa6GF0&s=10";
    qs1.addEventListener("click", function(){
        answer.innerHTML="Unsupervised learning is a type of machine learning where a model finds patterns and groups similar data points without using labeled data. For example, K-means clustering groups similar data into clusters without predefined categories.";
        answer.style.padding="10px";
        qs2.style.opacity="0.5";
        qs1.style.zIndex=9999;
        qs1.style.padding="10px";
        qs2.style.padding="5px";
        qs1.style.opacity=1;
    })
    qs2.addEventListener("click", function(){
        answer.innerHTML="These models are useful because they discover hidden patterns and group similar data without needing labeled examples, helping identify trends and relationships in large datasets.";
        answer.style.padding="10px";
        qs1.style.opacity="0.5";
        qs2.style.zIndex=99999;
        qs2.style.padding="10px";
        qs1.style.padding="5px";
        qs2.style.opacity=1;
    })
}
div3.addEventListener("click", reinforcement)
function reinforcement(){
    header.innerHTML="Reinforcement learning";
    span2.innerHTML="unsupervised learning";
    span2.onclick=unsupervised;
    span1.innerHTML="supervised learning";
    span1.onclick=supervised;
    sl.style.display="block";
    qs1.innerHTML="what is reinforcement learning?";
    botname.innerHTML="AlphaGo";
    qs1.style.padding="5px";
    qs1.style.opacity=1;
    qs2.style.padding="5px";
    qs2.style.opacity=1;
    sl.scrollIntoView({
        behavior:'smooth'
    })
    logo.src="https://clamart.home.blog/wp-content/uploads/2018/12/cropped-logo-e1544188725968.png";
    logo.style.backgroundColor="white";
    qs1.addEventListener("click", function(){
        answer.innerHTML="Reinforcement learning is a type of machine learning where a model learns by interacting with an environment and receiving rewards or penalties. For example, AlphaGo learned to play Go by improving its strategies based on the outcomes of games.";
        answer.style.padding="10px";
        qs2.style.opacity="0.5";
        qs1.style.zIndex=9999;
        qs1.style.padding="10px";
        qs2.style.padding="5px";
        qs1.style.opacity=1;
    })
    qs2.addEventListener("click", function(){
        answer.innerHTML="These models are useful because they learn through trial and error to make better decisions and optimize their actions to achieve a goal, such as winning a game or controlling a robot.";
        answer.style.padding="10px";
        qs1.style.opacity="0.5";
        qs2.style.zIndex=99999;
        qs2.style.padding="10px";
        qs1.style.padding="5px";
        qs2.style.opacity=1;
    })
}
ml.addEventListener("click", mlfun);
ml.addEventListener("mouseover", mouseyfun);
function mlfun(){
    all.style.display="block";
    rule.style.display="none";
    deep.style.display="none";
    sl.style.display="none";
    direc.innerHTML="click the one you want to start with";
    question.style.padding="0px";
    types.scrollIntoView({
        behavior: 'smooth'
    }
    );
};
dl.addEventListener("click", dlfun)
function dlfun(){
    document.getElementById("deep").style.display="block";
    rule.style.display="none";
    all.style.display="none";
    sl.style.display="none";
    document.getElementById("deep").scrollIntoView({
        behavior: "smooth"
    });
}
waysdl1.addEventListener("click", waysdl1fun)
function waysdl1fun(){
    waysdl1.style.borderRadius="30px";
    waysdl1.style.width="350px";
    waysdl1.style.zIndex=9999;
    waysdl1.style.backgroundColor="rgb(3, 13, 35, 1)";
    info1.style.opacity=1;
    info1.innerHTML="Mainly used to analyze images, detects features such as edges, shapes, and objects.";
    way1.style.fontWeight=900;
    way1.style.marginTop="50px";
}
waysdl2.addEventListener("click", waysdl2fun)
function waysdl2fun(){
    waysdl2.style.borderRadius="30px";
    waysdl2.style.width="350px";
    waysdl2.style.zIndex=9999;
    waysdl2.style.backgroundColor="rgb(3, 13, 35, 1)";
    info2.style.opacity=1;
    info2.innerHTML="Used for sequential data, uses information from previous steps to understand what comes next.";
    way2.style.fontWeight=900;
    way2.style.marginTop="50px";
}
waysdl3.addEventListener("click", waysdl3fun)
function waysdl3fun(){
    waysdl3.style.borderRadius="30px";
    waysdl3.style.width="350px";
    waysdl3.style.zIndex=9999;
    waysdl3.style.backgroundColor="rgb(3, 13, 35, 1)";
    info3.style.opacity=1;
    info3.innerHTML="Designed to understand relationships between elements in data, especially words in sentences, uses a mechanism called attention.";
    way3.style.fontWeight=900;
    way3.style.marginTop="60px";
}
waysdl4.addEventListener("click", waysdl4fun)
function waysdl4fun(){
    waysdl4.style.borderRadius="30px";
    waysdl4.style.width="350px";
    waysdl4.style.zIndex=9999;
    waysdl4.style.backgroundColor="rgb(3, 13, 35, 1)";
    info4.style.opacity=1;
    info4.innerHTML="Consist of two neural networks competing against each other, one generates new data, while the other evaluates whether it looks real.";
    way4.style.fontWeight=900;
    way4.style.marginTop="20px";
}
waysdl5.addEventListener("click", waysdl5fun)
function waysdl5fun(){
    waysdl5.style.borderRadius="30px";
    waysdl5.style.width="350px";
    waysdl5.style.zIndex=9999;
    waysdl5.style.backgroundColor="rgb(3, 13, 35, 1)";
    info5.style.opacity=1;
    info5.innerHTML="Learn to compress data and reconstruct it, help remove noise and extract important features.";
    way5.style.fontWeight=900;
    way5.style.marginTop="60px";
}
waysdl1.addEventListener("dblclick", goback);
function goback(){
    waysdl1.style.borderRadius="50%";
    waysdl1.style.width="200px";
    waysdl1.style.backgroundColor="#1e5982";
    info1.style.opacity=0;
    info1.style.transitionDelay="0s";
    way1.style.fontWeight=600;
    way1.style.marginTop="75px";
};
waysdl2.addEventListener("dblclick", goback2);
function goback2(){
    waysdl2.style.borderRadius="50%";
    waysdl2.style.width="200px";
    waysdl2.style.backgroundColor="#1e5982";
    info2.style.opacity=0;
    info2.style.transitionDelay="0s";
    way2.style.marginTop="75px";
    way2.style.fontWeight=600;
};
waysdl3.addEventListener("dblclick", goback3);
function goback3(){
    waysdl3.style.borderRadius="50%";
    waysdl3.style.width="200px";
    waysdl3.style.backgroundColor="#1e5982";
    info3.style.opacity=0;
    info3.style.transitionDelay="0s";
    way3.style.marginTop="85px";
    way3.style.fontWeight=600;
};
waysdl4.addEventListener("dblclick", goback4);
function goback4(){
    waysdl4.style.borderRadius="50%";
    waysdl4.style.width="200px";
    waysdl4.style.backgroundColor="#1e5982";
    info4.style.opacity=0;
    info4.style.transitionDelay="0s";
    way4.style.fontWeight=500;
    way4.style.marginTop="75px";
};
waysdl5.addEventListener("dblclick", goback5);
function goback5(){
    waysdl5.style.borderRadius="50%";
    waysdl5.style.width="200px";
    waysdl5.style.backgroundColor="#1e5982";
    info5.style.opacity=0;
    info5.style.transitionDelay="0s";
    way5.style.marginTop="85px";
    way5.style.fontWeight=600;
};
document.getElementById("section").addEventListener("click", function(){
    sl.style.display="block";
    sl.scrollIntoView({
        behavior:"smooth"
    });
})
rb.addEventListener("click", rbfun)
function rbfun(){
    rule.style.display="block";
    all.style.display="none";
    deep.style.display="none";
    rule.scrollIntoView({
        behavior:"smooth"
    });
};


