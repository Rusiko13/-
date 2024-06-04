document.addEventListener("DOMContentLoaded", function() {
    let headers = document.querySelectorAll(".accordion-header");
    let contents = document.querySelectorAll(".accordion-content");
    let currentIndex = 0;
    const intervalTime = 3000; // Change slide every 3 seconds

    function showContent(index) {
        contents.forEach(function(content, i) {
            content.style.display = (i === index) ? "flex" : "none";
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

    // Start the automatic slide
    let slideInterval = setInterval(autoSlide, intervalTime);

    // Show the first content by default
    showContent(currentIndex);
});
function showContent(index) {
    contents.forEach(function(content, i) {
        content.style.display = (i === index) ? "block" : "none";
        if (i === index) {
            content.classList.add("active");
        } else {
            content.classList.remove("active");
        }
    });
}



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