function hideCookiePopup() {
  document.getElementById('cookie-popup').classList.add('hide');
  localStorage.setItem('cookiePopupHidden', 'true');

}

// On page load, check if cookies were accepted
window.addEventListener('DOMContentLoaded', function() {
  if(localStorage.getItem('cookiePopupHidden') === 'true') {
    document.getElementById('cookie-popup').classList.add('hide');
  }
});


function searchPage() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    const elements = document.querySelectorAll("h1, h4, p, date, subtitle ");

    for (const element of elements) {
      if (element.textContent && element.textContent.toLowerCase().includes(query)) {
        const card = element.closest(".card");
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        card.classList.add("highlight");
        setTimeout(() => card.classList.remove("highlight"), 5000);
        return;
      }
    }
    alert("No matches found!");
  }

function scrollNews(direction) {
  const container = document.getElementById('newsCards');
  const scrollAmount = 350; // Adjust to match your card width
  container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

// Hide buttons if unavailable
function updateScrollButtons() {
  const container = document.getElementById('newsCards');
  const leftBtn = document.getElementById('leftBtn');
  const rightBtn = document.getElementById('rightBtn');


  if (container.scrollLeft <= 0) {
    leftBtn.style.opacity = "0.3";
    leftBtn.disabled = true;
  } else {
    leftBtn.style.opacity = "1";
    leftBtn.disabled = false;
  }
  
  if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
    rightBtn.style.opacity = "0.3"; 
    rightBtn.disabled = true;
  } else {
    rightBtn.style.opacity = "1";
    rightBtn.disabled = false;
  }
}

// Call this on scroll and after scrolling with buttons
document.getElementById('newsCards').addEventListener('scroll', updateScrollButtons);
window.addEventListener('DOMContentLoaded', updateScrollButtons);