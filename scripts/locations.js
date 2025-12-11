// ================================
// Locations Map Functionality
// ================================

document.addEventListener("DOMContentLoaded", function () {
    const locationsMapElement = document.getElementById("locationsMap");
    if (!locationsMapElement) return;

    // Initialize map centered on Montreal area
    const locationsMap = L.map("locationsMap").setView([45.5017, -73.5673], 10);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
        maxZoom: 18,
    }).addTo(locationsMap);

    // City/region data
    const cities = [
        {
            name: "Montreal",
            lat: 45.5017,
            lng: -73.5673,
            locations: 4,
            sports: 3,
        },
        { name: "Laval", lat: 45.558, lng: -73.7124, locations: 3, sports: 3 },
        {
            name: "Longueuil",
            lat: 45.4215,
            lng: -73.4917,
            locations: 2,
            sports: 2,
        },
        {
            name: "Pointe-Claire",
            lat: 45.4642,
            lng: -73.7494,
            locations: 3,
            sports: 3,
        },
        {
            name: "Dorval",
            lat: 45.4486,
            lng: -73.7536,
            locations: 2,
            sports: 2,
        },
        {
            name: "Beaconsfield",
            lat: 45.4333,
            lng: -73.8667,
            locations: 1,
            sports: 2,
        },
        {
            name: "Verdun",
            lat: 45.4736,
            lng: -73.6074,
            locations: 1,
            sports: 2,
        },
        {
            name: "Plateau Mont-Royal",
            lat: 45.5274,
            lng: -73.5986,
            locations: 2,
            sports: 2,
        },
        {
            name: "Rosemère",
            lat: 45.6367,
            lng: -73.7997,
            locations: 2,
            sports: 2,
        },
        {
            name: "Blainville",
            lat: 45.6667,
            lng: -73.8833,
            locations: 1,
            sports: 1,
        },
    ];

    // Create custom icon
    const createCityIcon = (locations) => {
        const size = locations >= 3 ? 40 : locations >= 2 ? 32 : 24;
        const color =
            locations >= 3 ? "#D62828" : locations >= 2 ? "#F6C443" : "#2B59C3";

        return L.divIcon({
            className: "custom-city-marker",
            html: `<div style="
                background: ${color};
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                border: 3px solid white;
                box-shadow: 0 2px 12px rgba(0,0,0,0.3);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: bold;
                font-size: ${size / 2}px;
            ">${locations}</div>`,
            iconSize: [size, size],
            iconAnchor: [size / 2, size / 2],
        });
    };

    // Add markers for each city
    cities.forEach((city) => {
        const marker = L.marker([city.lat, city.lng], {
            icon: createCityIcon(city.locations),
        }).addTo(locationsMap);

        const popupContent = `
            <div style="padding: 1rem; min-width: 200px;">
                <h4 style="margin-bottom: 0.5rem; color: var(--deep-charcoal);">${
                    city.name
                }</h4>
                <p style="font-size: 0.9rem; color: #666; margin-bottom: 0.5rem;">
                    <strong>${city.locations}</strong> location${
            city.locations > 1 ? "s" : ""
        }<br>
                    <strong>${city.sports}</strong> sport${
            city.sports > 1 ? "s" : ""
        } offered
                </p>
                <a href="find-program.html?city=${city.name
                    .toLowerCase()
                    .replace(/\s+/g, "")}" 
                   class="btn btn-primary btn-small" 
                   style="width: 100%; text-align: center; margin-top: 0.5rem;">
                    See Programs →
                </a>
            </div>
        `;

        marker.bindPopup(popupContent);

        // Pulse animation on hover
        marker.on("mouseover", function () {
            this.getElement().style.animation = "pulse 0.6s ease-in-out";
        });

        marker.on("mouseout", function () {
            this.getElement().style.animation = "";
        });
    });

    // Add pulse animation CSS
    if (!document.querySelector("#pulse-animation")) {
        const style = document.createElement("style");
        style.id = "pulse-animation";
        style.textContent = `
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.15); }
            }
        `;
        document.head.appendChild(style);
    }

    // Notify form handler
    const notifyForm = document.querySelector(".notify-form");
    if (notifyForm) {
        notifyForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const emailInput = this.querySelector(".notify-input");
            const submitBtn = this.querySelector(".btn");
            const originalText = submitBtn.textContent;

            // Show success message
            submitBtn.textContent = "✓ Subscribed!";
            submitBtn.style.background = "#2A9D8F";
            emailInput.value = "";

            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = "";
            }, 3000);
        });
    }

    // ================================
    // Region Dropdown Functionality
    // ================================
    const regionDropdown = document.getElementById("regionDropdown");
    const regionItems = document.querySelectorAll(".region-item");

    if (regionDropdown) {
        regionDropdown.addEventListener("change", function () {
            const selectedRegion = this.value;

            // Close all regions
            regionItems.forEach((item) => {
                item.classList.remove("active");
            });

            // Open selected region
            if (selectedRegion) {
                const targetRegion = document.querySelector(
                    `[data-region="${selectedRegion}"]`
                );
                if (targetRegion) {
                    targetRegion.classList.add("active");
                    targetRegion.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                    });
                }
            }
        });
    }

    // ================================
    // Region Accordion Functionality
    // ================================
    const regionHeaders = document.querySelectorAll(".region-header");

    regionHeaders.forEach((header) => {
        header.addEventListener("click", function () {
            const regionItem = this.parentElement;
            const isActive = regionItem.classList.contains("active");

            // Close all other regions (optional - remove if you want multiple open)
            // regionItems.forEach((item) => {
            //     if (item !== regionItem) {
            //         item.classList.remove("active");
            //     }
            // });

            // Toggle current region
            regionItem.classList.toggle("active");

            // Update dropdown to match
            if (regionDropdown) {
                if (isActive) {
                    regionDropdown.value = "";
                } else {
                    const regionValue = regionItem.getAttribute("data-region");
                    regionDropdown.value = regionValue;
                }
            }
        });
    });

    // Smooth scroll to map when location is clicked
    const locationLinks = document.querySelectorAll(".location-link");
    locationLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            // Let the link work normally, but we could add map interaction here if needed
        });
    });
});
