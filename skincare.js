

  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });


  // Select the collection section
const collectionSection = document.querySelector('.collection');

// Function to check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 100
  );
}

// Function to add the 'show' class when scrolled into view
function checkScroll() {
  if (isInViewport(collectionSection)) {
    collectionSection.classList.add('show');
  }
}

// Listen for scroll events
window.addEventListener('scroll', checkScroll);

// Also check on page load in case already in viewport
window.addEventListener('load', checkScroll);


document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = form.querySelector('input[type="text"]').value;
      const email = form.querySelector('input[type="email"]').value;
      const message = form.querySelector("textarea").value;
  
      const phoneNumber = "07030781377"; // NO + sign
  
      const whatsappMessage = 
        `Hello Royal Tinalz 👋%0A%0A` +
        `👤 Name: ${name}%0A` +
        `📧 Email: ${email}%0A%0A` +
        `📝 Message:%0A${message}`;
  
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
  
      window.open(whatsappURL, "_blank");
  
      form.reset();
    });
  });


document.addEventListener("DOMContentLoaded", () => {
  // Only enable on mobile
  if (window.innerWidth > 768) return;

  const sections = document.querySelectorAll(".wedding, .party, .coperate");

  sections.forEach(section => {
    const items = section.querySelectorAll(".collection-item");
    if (items.length <= 1) return;

    let currentIndex = 0;

    // Hide all items except the first
    items.forEach((item, index) => {
      item.style.display = index === 0 ? "block" : "none";
    });

    // Create Next button
    const nextBtn = document.createElement("button");
    nextBtn.innerText = "Next ▶";
    nextBtn.classList.add("next-btn");
    section.appendChild(nextBtn);

    // Click handler
    nextBtn.addEventListener("click", () => {
      // Hide current
      items[currentIndex].style.display = "none";

      // Move to next
      currentIndex = (currentIndex + 1) % items.length;

      // Show next
      items[currentIndex].style.display = "block";
    });
  });

  // Optional: update on resize
  window.addEventListener("resize", () => {
    document.querySelectorAll(".next-btn").forEach(btn => btn.remove());
    // reset all items to block for desktop
    sections.forEach(section => {
      section.querySelectorAll(".collection-item").forEach(item => item.style.display = "");
    });
    // re-run if mobile
    if(window.innerWidth <= 768) {
      document.querySelectorAll(".wedding, .party, .coperate").forEach(section => {
        const items = section.querySelectorAll(".collection-item");
        let currentIndex = 0;
        items.forEach((item, index) => {
          item.style.display = index === 0 ? "block" : "none";
        });

        const nextBtn = document.createElement("button");
        nextBtn.innerText = "Next ▶";
        section.appendChild(nextBtn);
        nextBtn.addEventListener("click", () => {
          items[currentIndex].style.display = "none";
          currentIndex = (currentIndex + 1) % items.length;
          items[currentIndex].style.display = "block";
        });
      });
    }
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".readmore-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const parent = btn.closest(".blog-post");
      const fullId = parent.dataset.full;
      const fullBlog = document.getElementById(fullId);

      if (fullBlog.style.display === "none") {
        // hide all other full blogs first
        document.querySelectorAll(".full-blog").forEach(fb => fb.style.display = "none");

        fullBlog.style.display = "block";
        fullBlog.scrollIntoView({ behavior: "smooth" });
      } else {
        fullBlog.style.display = "none";
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  // Select all Book Now buttons
  const bookButtons = document.querySelectorAll(".collection-item button");

  bookButtons.forEach(button => {
    button.addEventListener("click", () => {
      const parent = button.closest(".collection-item");
      const dressName = parent.querySelector("h4").innerText;

      // Example: Open WhatsApp with pre-filled message (works well for mobile)
      const phoneNumber = "2347030781377"; // your contact
      const message = `Hello Royal Tinalz! I want to book: ${dressName}`;
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

      // Open WhatsApp link in a new tab
      window.open(url, "_blank");
    });
  });
});


