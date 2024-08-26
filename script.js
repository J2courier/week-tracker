/*document.addEventListener('DOMContentLoaded', () => {
    const sideBar = document.getElementById("hide");

    function toggleChildDivs(event) {
        const childDivs = sideBar.getElementsByTagName("div");

        for (let i = 0; i < childDivs.length; i++) {
            if (childDivs[i].style.display === "none") {
                childDivs[i].style.display = "block"; 
                sideBar.style.position = "relative";
                sideBar.style.left = "200px";
                sideBar.style.transition = "opacity 0.5s ease;";
            } else {
                childDivs[i].style.display = "none"; 
                sideBar.style.position = "relative";
                sideBar.style.left = "-10px";
            }
        }
    }

    sideBar.addEventListener("click", toggleChildDivs);
}); 
 
document.addEventListener('DOMContentLoaded', () => {
    const sideBar = document.getElementById("hide");

    function toggleChildDivs() {
        const childDivs = sideBar.getElementsByTagName("div");
        let shouldShow = window.getComputedStyle(childDivs[0]).display === "none"; // Check if any child is hidden

        for (let i = 0; i < childDivs.length; i++) {
            childDivs[i].style.display = shouldShow ? "block" : "none";
        }

        sideBar.style.position = "relative";
        sideBar.style.left = shouldShow ? "200px" : "-10px";
        sideBar.style.transition = "left 0.5s ease";
    }

    sideBar.addEventListener("click", toggleChildDivs);
}); 

document.addEventListener('DOMContentLoaded', () => {
    const sideBar = document.getElementById("hide");
    const weekDisplay = document.querySelector('.week h4');
    const itemDivs = document.querySelectorAll('.itemParent div');

    function toggleChildDivs() {
        const childDivs = sideBar.getElementsByTagName("div");
        
        let shouldShow = window.getComputedStyle(childDivs[0]).display === "none"; 
        for (let i = 0; i < childDivs.length; i++) {
            childDivs[i].style.display = shouldShow ? "block" : "none";
        }
        sideBar.style.position = "relative";
        sideBar.style.left = shouldShow ? "200px" : "-10px";
        sideBar.style.transition = "left 0.5s ease, opacity 0.3s ease";
    }
 
    sideBar.addEventListener("click", toggleChildDivs);
    itemDivs.forEach(item => {
        item.addEventListener('click', () => {
            const weekText = item.querySelector('h4') ? item.querySelector('h4').innerText : '';
            if (weekText.startsWith('WEEK')) {
                weekDisplay.innerText = weekText;
            }
        });
    });

    //new function
    function toChangeColor(event){
        const siblings = Array.from(this.parentElement.children);
        if(this.style.backgroundColor === 'rgb(8, 23, 63)'){
            this.style.display = 'none';
        }else{
           this.style.backgroundColor = '#08173f';
        }
    }

    const mwfAttendance = document.querySelectorAll('.containerAtt > div');
    const tthAttendance = document.querySelectorAll('.container2 > div');

    mwfAttendance.forEach(div =>{
        div.addEventListener("click", toChangeColor);
    });
    tthAttendance.forEach(div =>{
        div.addEventListener("click", toChangeColor);
    });
}); */


document.addEventListener('DOMContentLoaded', () => {
    const sideBar = document.getElementById("hide");
    const weekDisplay = document.querySelector('.week h4');
    const itemDivs = document.querySelectorAll('.itemParent div');

    function toggleChildDivs() {
        const childDivs = sideBar.getElementsByTagName("div");
        
        let shouldShow = window.getComputedStyle(childDivs[0]).display === "none"; 
        for (let i = 0; i < childDivs.length; i++) {
            childDivs[i].style.display = shouldShow ? "block" : "none";
        }
        sideBar.style.position = "relative";
        sideBar.style.left = shouldShow ? "200px" : "-10px";
        sideBar.style.transition = "left 0.5s ease, opacity 0.3s ease";
        sideBar.style.boxShadow = "0px 0px 4px 0px #438EAE";
    }

    function toChangeColor(event) {
        const siblings = Array.from(this.parentElement.children);
        if (this.style.backgroundColor === 'rgb(8, 23, 63)') {
            this.style.backgroundColor = '';
            this.style.border = '';
        } else {
            this.style.backgroundColor = '#08173f';
            this.style.border = "2px solid #02ffaf";
        }
    }

    function resetAndUpdate() {
        const mwfAttendance = document.querySelectorAll('.containerAtt > div');
        const tthAttendance = document.querySelectorAll('.container2 > div');

        mwfAttendance.forEach(div => {
            div.style.backgroundColor = ''; 
            div.style.border = '';
            div.style.display = 'block';  
        });
        tthAttendance.forEach(div => {
            div.style.backgroundColor = ''; 
            div.style.display = 'block';  
            div.style.border = '';
        });

        const weekText = this.querySelector('h4') ? this.querySelector('h4').innerText : '';
        if (weekText.startsWith('WEEK')) {
            weekDisplay.innerText = weekText;
        }
        toggleChildDivs();
    }

    sideBar.addEventListener("click", toggleChildDivs);
    itemDivs.forEach(item => {
        item.addEventListener('click', resetAndUpdate);
    });

    const mwfAttendance = document.querySelectorAll('.containerAtt > div');
    const tthAttendance = document.querySelectorAll('.container2 > div');

    mwfAttendance.forEach(div => {
        div.addEventListener("click", toChangeColor);
    });
    tthAttendance.forEach(div => {
        div.addEventListener("click", toChangeColor);
    });
});


//create a function taht will count the div that has been click or called filled
//once filled week ${item-number} -  18 weeks = remaining weeks 




