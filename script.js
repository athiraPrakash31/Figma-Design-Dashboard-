 //display navbar menu in phone view
 function openNav() {
    let navbar = document.getElementById("desktop-nav");
    if (navbar.style.display == "none" || navbar.style.display == "") {
      navbar.style.display = "block";
    } else {
      navbar.style.display = "none";
    }
  }

  //code to create a donut pie chart
  const chart = document.getElementById("myDonutChart").getContext("2d");

  const myDonutChart = new Chart(chart, {
    type: "doughnut",
    data: {
      labels: ["Incomplete", "Pending approval", "Approved"],
      datasets: [
        {
          label: "My Donut Chart",
          data: [60, 21, 19],
          backgroundColor: [
            // Background colors for each segment
            "rgba(243, 177, 125, 1)",
            "rgba(91, 185, 145, 1)",
            "rgba(231, 125, 118, 1)",
          ],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "70%",
      plugins: {
        legend: {
          position: "right",
          labels: {
            color: "white", // Change the color of the labels
            font: {
              size: 12, // Change the font size of the labels
            },
            usePointStyle: true, // Use circles instead of rectangles for the legend icons
            pointStyle: "circle",
            pointRadius: 5,
          },
        },
      },
    },
  });

  // Select all toggle buttons
  const toggleButtons = document.querySelectorAll(".toggle-description");

  toggleButtons.forEach(button => {
  button.addEventListener('click', function() {
      // Toggle the display of the description cell
      const description = this.closest('tr').querySelector('.description');
      if (description.style.display === 'none' || description.style.display === '') {
          description.style.display = 'block';
          this.innerHTML = '&#9652;'; // Change to up arrow (▲)
      } else {
          description.style.display = 'none';
          this.innerHTML = '&#9662;'; // Change to down arrow (▼)
      }
  });
});