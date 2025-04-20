document.addEventListener('DOMContentLoaded', function() {
    const filterToggle = document.getElementById('filterToggle');
    const filterSection = document.getElementById('filterSection');

    if (filterToggle && filterSection) {
        filterToggle.addEventListener('click', function() {
            filterSection.classList.toggle('active');
        });
    }

    // Price range functionality
    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        priceRange.addEventListener('input', function() {
            // You would update the displayed price range here
            // and filter products accordingly
        });
    }

    // Filter functionality would go here
    // You would add event listeners to all filter checkboxes
    // and implement the filtering logic
});

document.addEventListener('DOMContentLoaded', function() {
    const sliderMin = document.getElementById("slider-min");
    const sliderMax = document.getElementById("slider-max");
    const sliderRange = document.querySelector(".slider-range");
    const priceMinDisplay = document.getElementById("price-min");
    const priceMaxDisplay = document.getElementById("price-max");
    const toggleArrow = document.querySelector(".toggle-arrow");
    const priceHeader = document.querySelector(".price-header");

    function updateSlider() {
        const minValue = parseInt(sliderMin.value);
        const maxValue = parseInt(sliderMax.value);
        
        // Update the displayed range
        const minPercent = (minValue / 15000) * 100;
        const maxPercent = (maxValue / 15000) * 100;
        sliderRange.style.left = minPercent + "%";
        sliderRange.style.width = (maxPercent - minPercent) + "%";
        
        // Update the displayed prices
        priceMinDisplay.textContent = minValue.toLocaleString();
        priceMaxDisplay.textContent = maxValue.toLocaleString();
    }

    // Prevent min slider from going above max
    sliderMin.addEventListener("input", function() {
        if (parseInt(this.value) > parseInt(sliderMax.value)) {
            this.value = sliderMax.value;
        }
        updateSlider();
    });

    // Prevent max slider from going below min
    sliderMax.addEventListener("input", function() {
        if (parseInt(this.value) < parseInt(sliderMin.value)) {
            this.value = sliderMin.value;
        }
        updateSlider();
    });

    // Toggle arrow animation
    ;

    // Initialize the slider
    updateSlider();
});



document.getElementById('filterBtn').addEventListener('click', function() {
    const dropdown = document.getElementById('filterDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });
  
  document.getElementById('applyFilter').addEventListener('click', function() {
    const selected = [];
    document.querySelectorAll('input[name="filter"]:checked').forEach(checkbox => {
      selected.push(checkbox.value);
    });
    alert('Selected filters: ' + selected.join(', '));
    document.getElementById('filterDropdown').style.display = 'none';
  });