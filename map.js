// ================================
// Map & Filter Functionality
// ================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize map if on find-program page
    const mapElement = document.getElementById('programMap');
    if (!mapElement) return;
    
    // Sample program data
    const programs = [
        {
            id: 1,
            name: "Downtown Soccer Academy",
            sport: "soccer",
            city: "Montreal",
            lat: 45.5017,
            lng: -73.5673,
            distance: 2.5,
            ages: "4-12",
            price: 120,
            description: "Ages 4-12 • Indoor & Outdoor • Weekdays & Weekends"
        },
        {
            id: 2,
            name: "West Island Dek Center",
            sport: "hockey",
            city: "Pointe-Claire",
            lat: 45.4642,
            lng: -73.7494,
            distance: 15,
            ages: "4-12",
            price: 135,
            description: "Ages 4-12 • Indoor facility • Evening programs"
        },
        {
            id: 3,
            name: "Plateau Multi-Sport Hub",
            sport: "multisport",
            city: "Plateau Mont-Royal",
            lat: 45.5274,
            lng: -73.5986,
            distance: 3.8,
            ages: "2-6",
            price: 110,
            description: "Ages 2-6 • Indoor facility • Mornings & Afternoons"
        },
        {
            id: 4,
            name: "South Shore Soccer School",
            sport: "soccer",
            city: "Longueuil",
            lat: 45.4215,
            lng: -73.4917,
            distance: 12,
            ages: "2-12",
            price: 115,
            description: "Ages 2-12 • Outdoor fields • Weekend programs"
        },
        {
            id: 5,
            name: "Laval Hockey Academy",
            sport: "hockey",
            city: "Laval",
            lat: 45.5580,
            lng: -73.7124,
            distance: 18,
            ages: "7-12",
            price: 140,
            description: "Ages 7-12 • Indoor facility • After-school programs"
        },
        {
            id: 6,
            name: "Verdun Family Sports",
            sport: "multisport",
            city: "Verdun",
            lat: 45.4736,
            lng: -73.6074,
            distance: 5.2,
            ages: "2-6",
            price: 105,
            description: "Ages 2-6 • Indoor & Outdoor • Flexible schedules"
        }
    ];
    
    // Initialize Leaflet map
    const map = L.map('programMap').setView([45.5017, -73.5673], 11);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18
    }).addTo(map);
    
    // Custom marker icons
    const getMarkerIcon = (sport) => {
        const colors = {
            soccer: '#D62828',
            hockey: '#2B59C3',
            multisport: '#F6C443'
        };
        
        return L.divIcon({
            className: 'custom-marker',
            html: `<div style="
                background: ${colors[sport]};
                width: 30px;
                height: 30px;
                border-radius: 50%;
                border: 3px solid white;
                box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: bold;
                font-size: 16px;
            ">📍</div>`,
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        });
    };
    
    // Store markers for filtering
    let markers = [];
    
    // Add markers to map
    const addMarkers = (programsToShow = programs) => {
        // Clear existing markers
        markers.forEach(marker => map.removeLayer(marker));
        markers = [];
        
        programsToShow.forEach(program => {
            const marker = L.marker([program.lat, program.lng], {
                icon: getMarkerIcon(program.sport)
            }).addTo(map);
            
            // Create popup content
            const popupContent = `
                <div class="popup-card">
                    <h4>${program.name}</h4>
                    <p style="color: #666; font-size: 0.9rem; margin-bottom: 0.5rem;">
                        <strong>${program.city}</strong> • ${program.distance} km away
                    </p>
                    <p style="color: #666; font-size: 0.9rem; margin-bottom: 1rem;">
                        ${program.description}
                    </p>
                    <p style="color: var(--primary-red); font-weight: 700; margin-bottom: 1rem;">
                        From $${program.price}/month
                    </p>
                    <a href="#" class="btn btn-primary btn-small" style="width: 100%; text-align: center;">
                        Register →
                    </a>
                </div>
            `;
            
            marker.bindPopup(popupContent, {
                maxWidth: 300,
                className: 'custom-popup'
            });
            
            // Click handler - also highlight the result card
            marker.on('click', () => {
                highlightResultCard(program.id);
            });
            
            markers.push(marker);
        });
        
        // Fit map to show all markers
        if (markers.length > 0) {
            const group = new L.featureGroup(markers);
            map.fitBounds(group.getBounds().pad(0.1));
        }
    };
    
    // Initial marker load
    addMarkers();
    
    // Highlight result card when marker is clicked
    const highlightResultCard = (programId) => {
        const resultCards = document.querySelectorAll('.result-card');
        resultCards.forEach(card => {
            card.classList.remove('highlighted');
        });
        
        // Find and highlight the matching card
        const matchingCard = Array.from(resultCards).find(card => {
            return card.querySelector('h3').textContent.includes(programs.find(p => p.id === programId).name);
        });
        
        if (matchingCard) {
            matchingCard.classList.add('highlighted');
            matchingCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Add CSS for highlighted state if not already present
            if (!document.querySelector('#highlight-style')) {
                const style = document.createElement('style');
                style.id = 'highlight-style';
                style.textContent = `
                    .result-card.highlighted {
                        box-shadow: 0 0 0 3px var(--primary-red);
                    }
                `;
                document.head.appendChild(style);
            }
            
            // Remove highlight after 3 seconds
            setTimeout(() => {
                matchingCard.classList.remove('highlighted');
            }, 3000);
        }
    };
    
    // Click on result card to show marker
    const resultCards = document.querySelectorAll('.result-card');
    resultCards.forEach((card, index) => {
        card.addEventListener('click', (e) => {
            // Don't trigger if clicking the register button
            if (e.target.classList.contains('btn')) return;
            
            const program = programs[index];
            if (program && markers[index]) {
                map.setView([program.lat, program.lng], 14);
                markers[index].openPopup();
            }
        });
    });
    
    // Filter functionality
    const filterForm = document.getElementById('filterForm');
    const sportFilter = document.getElementById('sportFilter');
    const ageFilter = document.getElementById('ageFilter');
    const distanceFilter = document.getElementById('distanceFilter');
    const resultsCount = document.getElementById('resultsCount');
    const resultsList = document.getElementById('resultsList');
    
    const filterPrograms = (e) => {
        if (e) e.preventDefault();
        
        const sport = sportFilter.value;
        const age = ageFilter.value;
        const maxDistance = parseInt(distanceFilter.value);
        
        // Filter programs
        let filtered = programs.filter(program => {
            let match = true;
            
            if (sport && program.sport !== sport) {
                match = false;
            }
            
            if (age && !program.ages.includes(age)) {
                match = false;
            }
            
            if (program.distance > maxDistance) {
                match = false;
            }
            
            return match;
        });
        
        // Update results count
        resultsCount.textContent = filtered.length;
        
        // Update markers on map
        addMarkers(filtered);
        
        // Update results list
        updateResultsList(filtered);
    };
    
    const updateResultsList = (programsToShow) => {
        if (programsToShow.length === 0) {
            resultsList.innerHTML = `
                <div class="empty-state">
                    <h3>No programs found</h3>
                    <p>Try adjusting your filters to see more results</p>
                    <button class="btn btn-primary" onclick="document.getElementById('filterForm').reset(); document.getElementById('filterForm').dispatchEvent(new Event('submit'));">
                        Clear Filters
                    </button>
                </div>
            `;
            return;
        }
        
        const gradients = {
            soccer: 'linear-gradient(135deg, #D62828 0%, #F77F00 100%)',
            hockey: 'linear-gradient(135deg, #2B59C3 0%, #0077B6 100%)',
            multisport: 'linear-gradient(135deg, #F6C443 0%, #EE9B00 100%)'
        };
        
        resultsList.innerHTML = programsToShow.map(program => `
            <div class="result-card" data-lat="${program.lat}" data-lng="${program.lng}" data-sport="${program.sport}">
                <div class="result-image" style="background: ${gradients[program.sport]};"></div>
                <div class="result-content">
                    <div class="result-badge ${program.sport}">${program.sport.charAt(0).toUpperCase() + program.sport.slice(1)}</div>
                    <h3>${program.name}</h3>
                    <p class="result-location">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 16px; height: 16px;">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        ${program.city}, QC • ${program.distance} km away
                    </p>
                    <p class="result-description">${program.description}</p>
                    <div class="result-footer">
                        <span class="result-price">From $${program.price}/month</span>
                        <a href="#" class="btn btn-primary btn-small">Register →</a>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Re-attach click handlers to new cards
        const newCards = resultsList.querySelectorAll('.result-card');
        newCards.forEach((card, index) => {
            card.addEventListener('click', (e) => {
                if (e.target.classList.contains('btn')) return;
                const program = programsToShow[index];
                const markerIndex = programs.findIndex(p => p.id === program.id);
                if (markers[markerIndex]) {
                    map.setView([program.lat, program.lng], 14);
                    markers[markerIndex].openPopup();
                }
            });
        });
    };
    
    // Attach filter event
    if (filterForm) {
        filterForm.addEventListener('submit', filterPrograms);
        
        // Also filter on select change for better UX
        [sportFilter, ageFilter, distanceFilter].forEach(select => {
            select.addEventListener('change', filterPrograms);
        });
    }
    
    // Parse URL parameters on page load
    const urlParams = new URLSearchParams(window.location.search);
    const sportParam = urlParams.get('sport');
    const ageParam = urlParams.get('age');
    
    if (sportParam && sportFilter) {
        sportFilter.value = sportParam;
    }
    if (ageParam && ageFilter) {
        ageFilter.value = ageParam;
    }
    
    // Trigger filter if params present
    if (sportParam || ageParam) {
        filterPrograms();
    }
});

