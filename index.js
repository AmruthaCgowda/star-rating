document.addEventListener("DOMContentLoaded", function () {
    const starContainer = document.getElementById("starContainer");
    const emojiOutput = document.getElementById("emojiOutput");
    const totalStars = 5;

    // Function to render the stars
    function renderStars(rating = 0) {
      starContainer.innerHTML = ""; // Clear any previous stars

      // Render the stars
      for (let i = 1; i <= totalStars; i++) {
        const star = document.createElement("span");
        star.classList.add("star", "text-yellow-500");
        star.textContent = i <= rating ? "★" : "☆"; // Filled or empty star

        // Add hover effect (temporary change on hover)
        star.addEventListener("mouseover", function () {
          highlightStars(i);
        });

        star.addEventListener("mouseleave", function () {
          highlightStars(rating); // Reset to the current rating on mouse leave
        });

        // Add click event listener to each star
        star.addEventListener("click", function () {
          setRating(i);
        });

        // Add to the container
        starContainer.appendChild(star);
      }
    }

    // Function to highlight stars on hover
    function highlightStars(rating) {
      const stars = document.querySelectorAll("#starContainer .star");
      stars.forEach((star, index) => {
        star.textContent = index < rating ? "★" : "☆";
      });
    }

    // Function to set the rating and update the emoji
    function setRating(rating) {
      renderStars(rating); // Re-render stars based on the rating

      switch (rating) {
        case 1:
          emojiOutput.textContent = "😠"; // Angry emoji
          break;
        case 2:
          emojiOutput.textContent = "😕"; // Confused emoji
          break;
        case 3:
          emojiOutput.textContent = "😐"; // Neutral emoji
          break;
        case 4:
          emojiOutput.textContent = "😊"; // Happy emoji
          break;
        case 5:
          emojiOutput.textContent = "🤩"; // Excited emoji
          break;
        default:
          emojiOutput.textContent = "🤔"; // Default thinking emoji
      }
    }

    // Initial rendering of stars
    renderStars(); // Call renderStars to show the empty stars initially
});