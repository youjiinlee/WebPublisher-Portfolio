// cursor

const innerCursor = document.querySelector(".inner-cursor");
const outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
    const x = e.clientX
    const y = e.clientY
    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));

links.forEach((link) => {
    link.addEventListener("mouseover", () => {
        innerCursor.classList.add("grow");
    });
    link.addEventListener("mouseleave", () => {
        innerCursor.classList.remove("grow");
    });
});

// toggle navbar

const navToggle = document.querySelector(".nav-toggle");
navToggle.addEventListener("click", () => {
    hideSection();
    toggleNavbar();
    document.body, classList.toggle("hide=scroling");
});

function hideSection() {
    document.querySelector("section.active").classList.toggle("fade-out");
}

function toggleNavbar() {
    document.querySelector(".header").classList.toggle("active");
}

// active
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("link-item") && e.target.hash !== "") {
        navToggle.classList.add("hide");
        const hash = e.targethash;
        if (e.target.classList.contains("nav-item")) {
            toggleNavbar();
        } else {
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0, 0);
            document.body.classList.remove("hide-scrolling");
            navToggle.classList.remove("hide");
        }, 500);
    }
});

// about tabs


const tabsContainer = document.querySelector(".about-tabs"),
    aboutSection = document.querySelector(".about");

tabsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});


// portfolio popup

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-project-btn")) {
        togglePortfolioPopup();

        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}

document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

//hide popup 화면 바깥부분 click 시 닫힘
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("pp-inner")) {
        togglePortfolioPopup();
    }
});

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp-thumnail img").src =
        portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML =
        portfolioItem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML =
        portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}