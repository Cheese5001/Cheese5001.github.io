


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
