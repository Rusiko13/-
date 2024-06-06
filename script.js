// document.addEventListener("DOMContentLoaded", function() {
//     let headers = document.querySelectorAll(".slider-header");
//     let contents = document.querySelectorAll(".slider-content");
//     let currentIndex = 0;
//     const intervalTime = 3000; // Change slide every 3 seconds

//     function showContent(index) {
//         contents.forEach(function(content, i) {
//             content.style.display = (i === index) ? "flex" : "none";
//         });
//     }

//     headers.forEach(function(header, index) {
//         header.addEventListener("click", function() {
//             showContent(index);
//             currentIndex = index; // Update currentIndex to the clicked header
//         });
//     });

//     document.getElementById("prevButton").addEventListener("click", function() {
//         currentIndex = (currentIndex > 0) ? currentIndex - 1 : headers.length - 1;
//         showContent(currentIndex);
//     });

//     document.getElementById("nextButton").addEventListener("click", function() {
//         currentIndex = (currentIndex < headers.length - 1) ? currentIndex + 1 : 0;
//         showContent(currentIndex);
//     });

//     function autoSlide() {
//         currentIndex = (currentIndex < headers.length - 1) ? currentIndex + 1 : 0;
//         showContent(currentIndex);
//     }

//     // Start the automatic slide
//     let slideInterval = setInterval(autoSlide, intervalTime);

//     // Show the first content by default
//     showContent(currentIndex);
// });
// function showContent(index) {
//     contents.forEach(function(content, i) {
//         content.style.display = (i === index) ? "block" : "none";
//         if (i === index) {
//             content.classList.add("active");
//         } else {
//             content.classList.remove("active");
//         }
//     });
// }

//testi itskeba
document.addEventListener("DOMContentLoaded", function() {
    let headers = document.querySelectorAll(".slider-header");
    let contents = document.querySelectorAll(".slider-content");
    let dots = document.querySelectorAll(".dot");
    let currentIndex = 0;
    const intervalTime = 3000; // Change slide every 3 seconds

    function showContent(index) {
        contents.forEach(function(content, i) {
            content.style.display = (i === index) ? "flex" : "none";
            if (i === index) {
                content.classList.add("active");
            } else {
                content.classList.remove("active");
            }
        });

        dots.forEach(function(dot, i) {
            if (i === index) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }

    headers.forEach(function(header, index) {
        header.addEventListener("click", function() {
            showContent(index);
            currentIndex = index; // Update currentIndex to the clicked header
        });
    });

    document.getElementById("prevButton").addEventListener("click", function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : headers.length - 1;
        showContent(currentIndex);
    });

    document.getElementById("nextButton").addEventListener("click", function() {
        currentIndex = (currentIndex < headers.length - 1) ? currentIndex + 1 : 0;
        showContent(currentIndex);
    });

    function autoSlide() {
        currentIndex = (currentIndex < headers.length - 1) ? currentIndex + 1 : 0;
        showContent(currentIndex);
    }

    // Add click event to dots
    dots.forEach(function(dot) {
        dot.addEventListener("click", function() {
            let index = parseInt(dot.getAttribute("data-index"));
            showContent(index);
            currentIndex = index;
        });
    });

    // Start the automatic slide
    let slideInterval = setInterval(autoSlide, intervalTime);

    // Show the first content by default
    showContent(currentIndex);
});
//testi mtavrdeba




// წესების გამორთვა ჩართვა
let rulesPar = document.getElementById("rules");
let readRules = document.querySelector(".readRules");
rulesPar.addEventListener("click", () => {
    readRules.classList.toggle("readRulesAppear");
});

let rulesBtn = document.querySelector(".rules-btn");
rulesBtn.addEventListener("click", () => {
    readRules.classList.toggle("readRulesAppear");
});

// accordion

document.addEventListener("DOMContentLoaded", () => {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const currentContent = header.nextElementSibling;
            const currentlyActiveHeader = document.querySelector(".accordion-header.active");

            if (currentlyActiveHeader && currentlyActiveHeader !== header) {
                currentlyActiveHeader.classList.remove("active");
                currentlyActiveHeader.nextElementSibling.style.display = "none";
                currentlyActiveHeader.querySelector(".accordion-icon").textContent = "+";
            }

            header.classList.toggle("active");
            currentContent.style.display = currentContent.style.display === "block" ? "none" : "block";
            header.querySelector(".accordion-icon").textContent = header.classList.contains("active") ? "-" : "+";
        });
    });
});

//active page
// document.addEventListener("DOMContentLoaded", () => {
//     const currentPage = window.location.pathname.split("/").pop();
//     const navLinks = document.querySelectorAll("nav ul li a");

//     navLinks.forEach(link => {
//         if (link.getAttribute("index.html") === currentPage) {
//             link.style.color = 'blue';
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.style.color = '#00a3e0';
        }
    });
});

//transparent header 
window.addEventListener('scroll', function() {
    let header = document.querySelector('.header');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollTop > 0) {
      // If scrolled, make the background semi-transparent
      header.style.backgroundColor = 'rgba(26, 30, 31, 0.85)';
    } else {
      // If at the top, reset the background to its original color
      header.style.backgroundColor = '#1a1e1f';
    }
  });