  document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".room-wrapper .col-md-6.col-xl-4");
    const loadMoreBtn = document.getElementById("loadMore");
    const loader = document.querySelector(".preloader");

    let current = 6;

    // Initial show
    items.forEach((item, index) => {
      item.style.display = index < current ? "block" : "none";
    });

    loadMoreBtn.addEventListener("click", function () {
      loader.style.display = "block"; // Show loader
      loadMoreBtn.disabled = true;

      setTimeout(() => {
        const next = current + 6;

        items.forEach((item, index) => {
          if (index < next) {
            item.style.display = "block";
          }
        });

        current = next;

        loader.style.display = "none"; // Hide loader
        loadMoreBtn.disabled = false;

        if (current >= items.length) {
          loadMoreBtn.style.display = "none";
        }
      }, 1200); // 1.2s delay
    });
  });
