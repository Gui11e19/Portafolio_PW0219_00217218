window.addEventListener("load",()=>{
    console.log("hola");
    let home_show = document.getElementById("home").style.display="block";
    let a1_hide = document.getElementById("a1").style.display="none";
    let a2_hide = document.getElementById("a2").style.display="none";
    let a3_hide = document.getElementById("a3").style.display="none";
    let a4_hide = document.getElementById("a4").style.display="none";
    let a5_hide = document.getElementById("a5").style.display="none";
    let a6_hide = document.getElementById("a6").style.display="none";
    
    
    let menu_home = document.querySelector("li.home");
    let menu_a1 = document.querySelector("li.a1");
    let menu_a2 = document.querySelector("li.a2");
    let menu_a3 = document.querySelector("li.a3");
    let menu_a4 = document.querySelector("li.a4");
    let menu_a5 = document.querySelector("li.a5");
    let menu_a6 = document.querySelector("li.a6");
    
        menu_home.addEventListener("click", ()=>{
            let x =1;
            hideArticle(x);
        })
        
        menu_a1.addEventListener("click", ()=>{
            let x =2;
            hideArticle(x);
        })
    
        menu_a2.addEventListener("click", ()=>{
            let x = 3;
            hideArticle(x);
        })
        
        menu_a3.addEventListener("click", ()=>{
            let x = 4;
            hideArticle(x);
        })
    
        menu_a4.addEventListener("click", ()=>{
            let x = 5;
            hideArticle(x);
        })
    
        menu_a5.addEventListener("click", ()=>{
            let x = 6;
            hideArticle(x);
        })
    
        menu_a6.addEventListener("click", ()=>{
            let x = 7;
            hideArticle(x);
            
        })

        let hideArticle = (x) =>{
            switch(x){
                case 1:
                        home_show = document.getElementById("home").style.display="block";
                        a1_hide = document.getElementById("a1").style.display="none";
                        a2_hide = document.getElementById("a2").style.display="none";
                        a3_hide = document.getElementById("a3").style.display="none";
                        a4_hide = document.getElementById("a4").style.display="none";
                        a5_hide = document.getElementById("a5").style.display="none";
                        a6_hide = document.getElementById("a6").style.display="none";
                        
                break;
                case 2: 
                        home_show = document.getElementById("home").style.display="none";
                        a1_hide = document.getElementById("a1").style.display="block";
                        a2_hide = document.getElementById("a2").style.display="none";
                        a3_hide = document.getElementById("a3").style.display="none";
                        a4_hide = document.getElementById("a4").style.display="none";
                        a5_hide = document.getElementById("a5").style.display="none";
                        a6_hide = document.getElementById("a6").style.display="none";
                break;
                case 3: 
                        home_show = document.getElementById("home").style.display="none";
                        a1_hide = document.getElementById("a1").style.display="none";
                        a2_hide = document.getElementById("a2").style.display="block";
                        a3_hide = document.getElementById("a3").style.display="none";
                        a4_hide = document.getElementById("a4").style.display="none";
                        a5_hide = document.getElementById("a5").style.display="none";
                        a6_hide = document.getElementById("a6").style.display="none";
        
                break;
                case 4: 
                        home_show = document.getElementById("home").style.display="none";
                        a1_hide = document.getElementById("a1").style.display="none";
                        a2_hide = document.getElementById("a2").style.display="none";
                        a3_hide = document.getElementById("a3").style.display="block";
                        a4_hide = document.getElementById("a4").style.display="none";
                        a5_hide = document.getElementById("a5").style.display="none";
                        a6_hide = document.getElementById("a6").style.display="none";
        
                break;
                case 5: 
                home_show = document.getElementById("home").display="none";
                        a1_hide = document.getElementById("a1").style.display="none";
                        a2_hide = document.getElementById("a2").style.display="none";
                        a3_hide = document.getElementById("a3").style.display="none";
                        a4_hide = document.getElementById("a4").style.display="block";
                        a5_hide = document.getElementById("a5").style.display="none";
                        a6_hide = document.getElementById("a6").style.display="none";
                 
                break;
                case 6: 
                        home_show = document.getElementById("home").style.display="none";
                        a1_hide = document.getElementById("a1").style.display="none";
                        a2_hide = document.getElementById("a2").style.display="none";
                        a3_hide = document.getElementById("a3").style.display="none";
                        a4_hide = document.getElementById("a4").style.display="none";
                        a5_hide = document.getElementById("a5").style.display="block";
                        a6_hide = document.getElementById("a6").style.display="none";
        
                break;
                case 7: 
                        home_show = document.getElementById("home").style.display="none";
                        a1_hide = document.getElementById("a1").style.display="none";
                        a2_hide = document.getElementById("a2").style.display="none";
                        a3_hide = document.getElementById("a3").style.display="none";
                        a4_hide = document.getElementById("a4").style.display="none";
                        a5_hide = document.getElementById("a5").style.display="none";
                        a6_hide = document.getElementById("a6").style.display="block";
        
                break; 
            }
        }


    })
    
    
    