/**
 * AeroQueue - Smart Boarding System
 * Refactored ES6 Class-based Application
 */

class AeroQueueApp {
    constructor() {
        // DOM Elements
        this.elements = {
            dashboard: document.getElementById('main-dashboard'),
            detailView: document.getElementById('flight-detail-view'),
            modal: document.getElementById('boarding-modal'),
            infoModal: document.getElementById('info-modal'),
            infoModalTitle: document.getElementById('info-modal-title'),
            infoModalMessage: document.getElementById('info-modal-message'),
            infoModalIcon: document.getElementById('info-modal-icon'),
            infoModalClose: document.getElementById('info-modal-close'),
            systemStatus: document.getElementById('system-status'),
            progressText: document.getElementById('boarding-progress-text'),
            progressPercentage: document.getElementById('boarding-percentage'),
            progressBar: document.getElementById('boarding-progress-bar'),
            nowCallingName: document.getElementById('now-calling-name'),
            nowCallingSeat: document.getElementById('now-calling-seat'),
            nowCallingId: document.getElementById('now-calling-id'),
            upNextName: document.getElementById('up-next-name'),
            upNextSeat: document.getElementById('up-next-seat'),
            upNextId: document.getElementById('up-next-id'),
            timeDisplay: document.getElementById('time-display'),
            searchInput: document.getElementById('search-input'),
            sortSelect: document.getElementById('sort-select'),
            themeToggle: document.getElementById('theme-toggle'),
            liveAnnounce: document.getElementById('live-announce'),
            inlineNotification: document.getElementById('inline-notification'),
            businessSeats: document.getElementById('business-seats'),
            economySeats: document.getElementById('economy-seats'),
            btnPause: document.getElementById('btn-pause'),
            btnSkip: document.getElementById('btn-skip'),
            btnFlag: document.getElementById('btn-flag'),
            btnEnd: document.getElementById('btn-end')
        };

        // State
        this.state = {
            currentTab: 'Domestic',
            currentFlight: null,
            currentPassengerIndex: 0,
            boardingInterval: null,
            isPaused: false,
            searchQuery: '',
            sortBy: 'time',
            theme: localStorage.getItem('aeroqueue-theme') || 'light',
            isPublicDisplay: false,
            assistanceModeActive: false,
            flaggedPassenger: null
        };

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.startClock();
        this.applyTheme(this.state.theme);
        this.renderDashboard();
    }

    setupEventListeners() {
        // Tab switching
        document.getElementById('tab-domestic').addEventListener('click', () => {
            this.switchTab('Domestic');
        });
        document.getElementById('tab-international').addEventListener('click', () => {
            this.switchTab('International');
        });

        // Search
        this.elements.searchInput.addEventListener('input', (e) => {
            this.state.searchQuery = e.target.value.toLowerCase();
            this.renderDashboard();
        });

        // Sort
        this.elements.sortSelect.addEventListener('change', (e) => {
            this.state.sortBy = e.target.value;
            this.renderDashboard();
        });

        // Theme toggle
        this.elements.themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });

        // Boarding controls
        this.elements.btnPause.addEventListener('click', () => this.togglePause());
        this.elements.btnSkip.addEventListener('click', () => this.skipPassenger());
        this.elements.btnFlag.addEventListener('click', () => this.flagForAssistance());
        this.elements.btnEnd.addEventListener('click', () => this.endBoarding());

        // Back button from boarding modal
        document.getElementById('back-from-boarding').addEventListener('click', () => {
            this.endBoarding();
        });

        // Toggle public display view
        document.getElementById('toggle-public-view').addEventListener('click', () => {
            this.togglePublicDisplay();
        });

        // Info modal close button
        this.elements.infoModalClose.addEventListener('click', () => {
            this.closeInfoModal();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !this.elements.modal.classList.contains('hidden')) {
                this.endBoarding();
            }
            if (e.key === 'Escape' && !this.elements.infoModal.classList.contains('hidden')) {
                this.closeInfoModal();
            }
        });
    }

    startClock() {
        const updateTime = () => {
            const now = new Date();
            this.elements.timeDisplay.textContent = now.toLocaleString('en-IN', {
                timeZone: 'Asia/Kolkata',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            });
        };
        updateTime();
        setInterval(updateTime, 1000);
    }

    switchTab(tab) {
        this.state.currentTab = tab;
        this.renderDashboard();
        this.updateTabButtons(tab);
    }

    updateTabButtons(activeTab) {
        const domesticBtn = document.getElementById('tab-domestic');
        const internationalBtn = document.getElementById('tab-international');

        if (activeTab === 'Domestic') {
            domesticBtn.classList.add('active');
            domesticBtn.setAttribute('aria-selected', 'true');
            internationalBtn.classList.remove('active');
            internationalBtn.setAttribute('aria-selected', 'false');
        } else {
            internationalBtn.classList.add('active');
            internationalBtn.setAttribute('aria-selected', 'true');
            domesticBtn.classList.remove('active');
            domesticBtn.setAttribute('aria-selected', 'false');
        }
    }

    toggleTheme() {
        const newTheme = this.state.theme === 'light' ? 'dark' : 'light';
        this.state.theme = newTheme;
        this.applyTheme(newTheme);
        localStorage.setItem('aeroqueue-theme', newTheme);
    }

    applyTheme(theme) {
        const body = document.body;
        const icon = this.elements.themeToggle.querySelector('i');

        if (theme === 'dark') {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            icon.className = 'ri-sun-line';
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            icon.className = 'ri-moon-line';
        }
    }

    getFilteredAndSortedFlights() {
        let filtered = flights.filter(f => f.type === this.state.currentTab);

        // Apply search filter
        if (this.state.searchQuery) {
            filtered = filtered.filter(f =>
                f.flightNumber.toLowerCase().includes(this.state.searchQuery) ||
                f.airline.toLowerCase().includes(this.state.searchQuery) ||
                f.destination.city.toLowerCase().includes(this.state.searchQuery) ||
                f.destination.iata.toLowerCase().includes(this.state.searchQuery)
            );
        }

        // Apply sorting
        filtered.sort((a, b) => {
            switch (this.state.sortBy) {
                case 'gate':
                    return a.gate.localeCompare(b.gate);
                case 'status':
                    return a.status.localeCompare(b.status);
                case 'destination':
                    return a.destination.city.localeCompare(b.destination.city);
                case 'time':
                default:
                    return a.departureTime.localeCompare(b.departureTime);
            }
        });

        return filtered;
    }

    showSkeleton() {
        this.elements.dashboard.innerHTML = `
      <div class="loading-skeleton"></div>
      <div class="loading-skeleton"></div>
      <div class="loading-skeleton"></div>
    `;
    }

    renderDashboard() {
        this.showSkeleton();

        setTimeout(() => {
            this.elements.dashboard.innerHTML = '';
            this.elements.detailView.classList.add('hidden');
            this.elements.dashboard.classList.remove('hidden');

            const filtered = this.getFilteredAndSortedFlights();

            if (filtered.length === 0) {
                this.elements.dashboard.innerHTML = `
          <div class="empty-state">
            <i class="ri-plane-line"></i>
            <p>No flights found matching your criteria.</p>
          </div>
        `;
                return;
            }

            const grid = document.createElement('div');
            grid.className = 'flight-grid';

            filtered.forEach(flight => {
                const card = this.createFlightCard(flight);
                grid.appendChild(card);
            });

            this.elements.dashboard.appendChild(grid);
        }, 300);
    }

    createFlightCard(flight) {
        const boardedCount = flight.passengers.filter(p => p.status === 'Boarded').length;
        const occupancyMax = flight.occupancy.business.total + flight.occupancy.economy.total;
        const occupancyPct = occupancyMax > 0 ? Math.round((boardedCount / occupancyMax) * 100) : 0;

        const businessBoarded = flight.passengers.filter(
            p => p.status === 'Boarded' && this.isBusinessSeat(p.seat)
        ).length;
        const economyBoarded = boardedCount - businessBoarded;

        const card = document.createElement('div');
        card.className = 'flight-card';
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `Flight ${flight.flightNumber} to ${flight.destination.city}`);

        const statusClass = this.getStatusClass(flight.status);

        card.innerHTML = `
      <div class="flight-icon-section">
        <i class="ri-plane-fill"></i>
      </div>
      <div class="flight-main-info">
        <div class="flight-header">
          <span class="flight-number">${flight.flightNumber}</span>
          <span class="airline-name">${flight.airline}</span>
        </div>
        <div class="flight-details">
          <div class="flight-detail-item">
            <i class="ri-map-pin-2-fill"></i>
            <span>${flight.destination.city} (${flight.destination.iata})</span>
          </div>
          <div class="flight-detail-item">
            <i class="ri-time-line"></i>
            <span>${flight.departureTime}</span>
          </div>
          <div class="flight-detail-item">
            <i class="ri-door-open-line"></i>
            <span>Gate ${flight.gate}</span>
          </div>
          <div class="flight-detail-item">
            <i class="ri-flight-takeoff-line"></i>
            <span>${flight.aircraftType}</span>
          </div>
        </div>
      </div>
      <div class="flight-stats">
        <span class="status-badge ${statusClass}">${flight.status}</span>
        <div class="occupancy-info">
          <div class="occupancy-numbers">${boardedCount}/${occupancyMax} Passengers</div>
          <div class="occupancy-bar">
            <div class="occupancy-fill" style="width: ${occupancyPct}%"></div>
          </div>
          <div class="occupancy-breakdown">
            Business: ${businessBoarded}/${flight.occupancy.business.total} · 
            Economy: ${economyBoarded}/${flight.occupancy.economy.total}
          </div>
        </div>
      </div>
    `;

        card.addEventListener('click', () => this.showFlightDetail(flight));
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.showFlightDetail(flight);
            }
        });

        return card;
    }

    getStatusClass(status) {
        const statusMap = {
            'Ready for Boarding': 'status-ready',
            'Boarding': 'status-boarding',
            'Delayed': 'status-delayed',
            'On Time': 'status-ontime',
            'Scheduled': 'status-scheduled',
            'Boarded': 'status-boarded'
        };
        return statusMap[status] || 'status-scheduled';
    }

    isBusinessSeat(seat) {
        const row = parseInt(seat.match(/\d+/)[0]);
        return row <= 8;
    }

    showFlightDetail(flight) {
        this.elements.dashboard.classList.add('hidden');
        this.elements.detailView.classList.remove('hidden');

        // Calculate boarding state
        const boardedCount = flight.passengers.filter(p => p.status === 'Boarded').length;
        const totalPassengers = flight.passengers.length;

        let buttonText = 'Initiate Automated Boarding Sequence';
        let buttonIcon = 'ri-rocket-line';
        let isDisabled = false;

        if (boardedCount === 0) {
            buttonText = 'Initiate Automated Boarding Sequence';
            buttonIcon = 'ri-rocket-line';
            isDisabled = flight.status === 'Delayed';
        } else if (boardedCount < totalPassengers) {
            buttonText = 'Continue Boarding';
            buttonIcon = 'ri-play-line';
            isDisabled = false;
        } else {
            buttonText = 'Boarding Complete';
            buttonIcon = 'ri-checkbox-circle-line';
            isDisabled = true;
        }

        this.elements.detailView.innerHTML = `
      <button class="back-button" id="back-to-dashboard">
        <i class="ri-arrow-left-line"></i>
        Back to Dashboard
      </button>

      <div class="detail-header">
        <h2 class="detail-title">
          <i class="ri-plane-fill"></i>
          ${flight.flightNumber} – ${flight.airline}
        </h2>
        <div class="detail-meta">
          <div class="detail-meta-item">
            <i class="ri-map-pin-2-fill"></i>
            <span>${flight.destination.city} (${flight.destination.iata})</span>
          </div>
          <div class="detail-meta-item">
            <i class="ri-door-open-line"></i>
            <span>Gate ${flight.gate}</span>
          </div>
          <div class="detail-meta-item">
            <i class="ri-calendar-line"></i>
            <span>${flight.date}</span>
          </div>
          <div class="detail-meta-item">
            <i class="ri-time-line"></i>
            <span>${flight.departureTime}</span>
          </div>
          <div class="detail-meta-item">
            <i class="ri-flight-takeoff-line"></i>
            <span>${flight.aircraftType}</span>
          </div>
          <div class="detail-meta-item">
            <i class="ri-information-line"></i>
            <span class="status-badge ${this.getStatusClass(flight.status)}">${flight.status}</span>
          </div>
        </div>
      </div>

      <button class="primary-button" id="start-boarding-btn" ${isDisabled ? 'disabled' : ''}>
        <i class="${buttonIcon}"></i>
        ${buttonText}
      </button>

      <h3 class="passenger-section-title">Optimized Boarding Queue (Back-to-Front)</h3>

      <div class="passenger-table-container">
        <table class="passenger-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Passenger Name</th>
              <th>Seat</th>
              <th>Boarding Pass ID</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${flight.passengers.map(p => `
              <tr>
                <td>${p.order}</td>
                <td>${p.name}</td>
                <td><strong>${p.seat}</strong></td>
                <td><code>${p.id}</code></td>
                <td><span class="passenger-status ${this.getPassengerStatusClass(p.status)}">${p.status}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;

        // Event listeners
        document.getElementById('back-to-dashboard').addEventListener('click', () => {
            this.renderDashboard();
        });

        document.getElementById('start-boarding-btn').addEventListener('click', () => {
            // Check flight status before starting boarding
            if (flight.status === 'Delayed') {
                this.showInfoModal(
                    'Boarding Not Available',
                    'Boarding cannot be initiated for delayed flights. Please wait for an updated flight status before proceeding.',
                    'ri-time-line'
                );
                return;
            }

            // Check if all passengers are boarded
            const boardedCount = flight.passengers.filter(p => p.status === 'Boarded').length;
            const totalPassengers = flight.passengers.length;

            if (boardedCount === totalPassengers) {
                this.showInfoModal(
                    'Boarding Complete',
                    'This flight has already completed its boarding process. No further actions are available.',
                    'ri-checkbox-circle-line'
                );
                return;
            }

            this.startBoarding(flight.id);
        });
    }

    showInfoModal(title, message, iconClass) {
        this.elements.infoModalTitle.textContent = title;
        this.elements.infoModalMessage.textContent = message;
        this.elements.infoModalIcon.className = iconClass;
        this.elements.infoModal.classList.remove('hidden');
    }

    closeInfoModal() {
        this.elements.infoModal.classList.add('hidden');
    }

    getPassengerStatusClass(status) {
        const statusMap = {
            'Waiting': 'status-waiting',
            'Priority': 'status-priority',
            'Boarded': 'status-boarded-passenger',
            'Absent': 'status-absent'
        };
        return statusMap[status] || 'status-waiting';
    }

    startBoarding(flightId) {
        const flight = flights.find(f => f.id === flightId);
        if (!flight) {
            this.showNotification('error', 'Error loading flight data. Please try again.');
            return;
        }

        // Implement back-to-front boarding strategy
        // Sort passengers by seat row numbers in descending order
        // This boards passengers from back to front (higher row numbers first)
        flight.passengers.sort((a, b) => {
            // Priority passengers always board first
            if (a.status === 'Priority' && b.status !== 'Priority') return -1;
            if (b.status === 'Priority' && a.status !== 'Priority') return 1;

            // Extract row numbers from seat strings (e.g., "31C" -> 31, "8A" -> 8)
            const rowA = parseInt(a.seat.match(/\d+/)?.[0] || 0);
            const rowB = parseInt(b.seat.match(/\d+/)?.[0] || 0);

            // Sort in descending order (higher row numbers first = back-to-front)
            return rowB - rowA;
        });

        // Re-assign order numbers after sorting to reflect new boarding sequence
        flight.passengers.forEach((passenger, index) => {
            passenger.order = index + 1;
        });

        this.state.currentFlight = flight;
        this.state.currentPassengerIndex = 0;
        this.state.isPaused = false;

        this.elements.modal.classList.remove('hidden');
        this.elements.btnEnd.classList.add('hidden');
        this.elements.inlineNotification.classList.add('hidden');

        flight.status = 'Boarding';
        this.updateBoardingModal();
        this.startAutomatedBoarding();
    }

    startAutomatedBoarding() {
        const flight = this.state.currentFlight;

        if (!flight || flight.passengers.length === 0) {
            this.updateSystemStatus('No Passengers to Board', '#FF9800', '#FFFFFF');
            this.showCompleteButton();
            return;
        }

        if (this.state.boardingInterval) {
            clearInterval(this.state.boardingInterval);
        }

        this.state.boardingInterval = setInterval(() => {
            if (this.state.isPaused) return;

            if (this.state.currentPassengerIndex >= flight.passengers.length) {
                this.updateSystemStatus('✅ Boarding Complete', '#2E7D32', '#FFFFFF');
                clearInterval(this.state.boardingInterval);
                this.showCompleteButton();
                return;
            }

            const passenger = flight.passengers[this.state.currentPassengerIndex];

            // Stage 1: Calling
            this.updateSystemStatus(`Calling Passenger: ${passenger.name}`, '#1976D2', '#FFFFFF');
            this.updateBoardingModal();

            // Stage 2: Awaiting scan
            setTimeout(() => {
                if (!this.state.isPaused && this.state.currentPassengerIndex < flight.passengers.length) {
                    this.updateSystemStatus('Awaiting Scan at Gate...', '#FFA000', '#FFFFFF');
                }
            }, 1500);

            // Stage 3: Success
            setTimeout(() => {
                if (!this.state.isPaused && this.state.currentPassengerIndex < flight.passengers.length) {
                    this.updateSystemStatus('Scan Successful ✔️', '#43A047', '#FFFFFF');
                    flight.passengers[this.state.currentPassengerIndex].status = 'Boarded';
                    this.state.currentPassengerIndex++;
                    this.updateBoardingModal();
                }
            }, 3000);

        }, 3500);
    }

    updateSystemStatus(message, backgroundColor, textColor = null) {
        this.elements.systemStatus.textContent = message;
        this.elements.systemStatus.style.background = backgroundColor;
        if (textColor) {
            this.elements.systemStatus.style.color = textColor;
        } else {
            this.elements.systemStatus.style.color = '';
        }
        this.elements.liveAnnounce.textContent = message;
    }

    updateBoardingModal() {
        const flight = this.state.currentFlight;
        const passenger = flight.passengers[this.state.currentPassengerIndex] || {};
        const next = flight.passengers[this.state.currentPassengerIndex + 1] || {};

        // Update title
        document.getElementById('modal-title').innerHTML = `
      <i class="ri-radio-button-line pulse-icon"></i>
      LIVE BOARDING: ${flight.flightNumber}
    `;

        // Update supervisor view
        this.elements.nowCallingName.textContent = passenger.name || '—';
        this.elements.nowCallingSeat.textContent = passenger.seat || '—';
        this.elements.nowCallingId.textContent = passenger.id || '—';

        this.elements.upNextName.textContent = next.name || '—';
        this.elements.upNextSeat.textContent = next.seat ? `Seat ${next.seat}` : '—';
        this.elements.upNextId.textContent = next.id ? `ID ${next.id}` : '—';

        // Update public display view
        document.getElementById('public-flight-number').textContent = flight.flightNumber;
        document.getElementById('public-destination').textContent = flight.destination.city;
        document.getElementById('public-gate').innerHTML = `
      <i class="ri-door-open-line"></i>
      <span>GATE ${flight.gate}</span>
    `;

        document.getElementById('public-now-calling-name').textContent = passenger.name || '—';
        document.getElementById('public-now-calling-seat').textContent = passenger.seat ? `SEAT ${passenger.seat}` : 'SEAT —';

        document.getElementById('public-up-next-name').textContent = next.name || '—';
        document.getElementById('public-up-next-seat').textContent = next.seat ? `SEAT ${next.seat}` : 'SEAT —';

        // Update progress
        const boardedCount = flight.passengers.filter(p => p.status === 'Boarded').length;
        const totalPassengers = flight.passengers.length;
        const percentage = totalPassengers > 0 ? Math.round((boardedCount / totalPassengers) * 100) : 0;

        // Supervisor progress
        this.elements.progressText.textContent = `Boarded: ${boardedCount}/${totalPassengers}`;
        this.elements.progressPercentage.textContent = `${percentage}%`;
        this.elements.progressBar.style.width = `${percentage}%`;

        // Public display progress
        document.getElementById('public-progress-text').textContent = `BOARDED: ${boardedCount}/${totalPassengers}`;
        document.getElementById('public-progress-percentage').textContent = `${percentage}%`;
        document.getElementById('public-progress-fill').style.width = `${percentage}%`;

        // Update seat visualization
        this.updateSeatVisualization(passenger.seat);
    }

    updateSeatVisualization(currentSeat) {
        const flight = this.state.currentFlight;

        // Business seats (rows 1-8)
        this.elements.businessSeats.innerHTML = '';
        for (let i = 1; i <= flight.occupancy.business.total; i++) {
            const seatDiv = document.createElement('div');
            seatDiv.className = 'seat-icon';

            const passengerInSeat = flight.passengers.find(p => {
                const row = parseInt(p.seat.match(/\d+/)?.[0] || 0);
                return row <= 8 && p.seat.includes(String.fromCharCode(64 + i));
            });

            if (passengerInSeat?.status === 'Boarded') {
                seatDiv.classList.add('boarded');
            }
            if (passengerInSeat?.seat === currentSeat) {
                seatDiv.classList.add('current');
            }

            this.elements.businessSeats.appendChild(seatDiv);
        }

        // Economy seats (simplified visualization)
        this.elements.economySeats.innerHTML = '';
        const economySeatsToShow = Math.min(20, flight.occupancy.economy.total);
        for (let i = 1; i <= economySeatsToShow; i++) {
            const seatDiv = document.createElement('div');
            seatDiv.className = 'seat-icon';

            const passengerInSeat = flight.passengers.find(p => {
                const row = parseInt(p.seat.match(/\d+/)?.[0] || 0);
                return row > 8 && p.seat.includes(String.fromCharCode(64 + (i % 6) + 1));
            });

            if (passengerInSeat?.status === 'Boarded') {
                seatDiv.classList.add('boarded');
            }
            if (passengerInSeat?.seat === currentSeat) {
                seatDiv.classList.add('current');
            }

            this.elements.economySeats.appendChild(seatDiv);
        }
    }

    togglePause() {
        this.state.isPaused = !this.state.isPaused;

        const icon = this.elements.btnPause.querySelector('i');
        const text = this.elements.btnPause.querySelector('span');

        if (this.state.isPaused) {
            icon.className = 'ri-play-line';
            text.textContent = 'Resume';
            this.updateSystemStatus('⏸ Paused', '#607D8B', '#FFFFFF');
        } else {
            icon.className = 'ri-pause-line';
            text.textContent = 'Pause';

            // If resuming from assistance mode, clear it
            if (this.state.assistanceModeActive) {
                this.clearAssistanceMode();
            }

            const passenger = this.state.currentFlight.passengers[this.state.currentPassengerIndex];
            this.updateSystemStatus(`Calling Passenger: ${passenger?.name || '—'}`, '#1976D2', '#FFFFFF');
        }
    }

    skipPassenger() {
        const flight = this.state.currentFlight;
        if (this.state.currentPassengerIndex < flight.passengers.length) {
            const passenger = flight.passengers[this.state.currentPassengerIndex];
            passenger.status = 'Absent';

            this.showNotification('warning', `Passenger ${passenger.name} marked as Absent`);

            this.state.currentPassengerIndex++;
            this.updateBoardingModal();

            if (!this.state.isPaused) {
                clearInterval(this.state.boardingInterval);
                this.startAutomatedBoarding();
            }
        }
    }

    flagForAssistance() {
        this.state.isPaused = true;

        const icon = this.elements.btnPause.querySelector('i');
        const text = this.elements.btnPause.querySelector('span');
        icon.className = 'ri-play-line';
        text.textContent = 'Resume';

        this.updateSystemStatus('🚨 Flagged for Assistance', '#D32F2F', '#FFFFFF');

        const flaggedPassenger = this.state.currentFlight.passengers[this.state.currentPassengerIndex] || {};

        // Store the flagged passenger
        this.state.flaggedPassenger = {
            name: flaggedPassenger.name,
            seat: flaggedPassenger.seat,
            id: flaggedPassenger.id
        };

        // Mark passenger as needing assistance (but don't advance yet)
        if (this.state.currentFlight.passengers[this.state.currentPassengerIndex]) {
            this.state.currentFlight.passengers[this.state.currentPassengerIndex].status = 'Assistance';
        }

        // Move to next passenger in queue
        this.state.currentPassengerIndex++;

        // Activate assistance mode for public display
        this.activateAssistanceMode();

        // Update the modal to show next passenger
        this.updateBoardingModal();

        // Show supervisor notification
        this.showNotification(
            'error',
            `Assistance required for ${flaggedPassenger.name || 'Unknown'} (ID: ${flaggedPassenger.id || 'Unknown'}). Next passenger has been called. Resume when ready.`
        );
    }

    showNotification(type, message) {
        const notification = this.elements.inlineNotification;
        notification.className = 'inline-notification';
        notification.classList.add(`notification-${type}`);
        notification.innerHTML = `
      <i class="${type === 'error' ? 'ri-alert-line' : type === 'warning' ? 'ri-error-warning-line' : 'ri-checkbox-circle-line'}"></i>
      ${message}
    `;
        notification.classList.remove('hidden');

        setTimeout(() => {
            notification.classList.add('hidden');
        }, 5000);
    }

    showCompleteButton() {
        this.elements.btnEnd.classList.remove('hidden');
        const text = this.elements.btnEnd.querySelector('span');
        text.textContent = 'Return to Dashboard';
    }

    activateAssistanceMode() {
        this.state.assistanceModeActive = true;

        const modalOverlay = this.elements.modal;
        const assistanceBanner = document.getElementById('assistance-banner');
        const assistancePanel = document.getElementById('awaiting-assistance-panel');

        // Add assistance mode class to modal
        modalOverlay.classList.add('assistance-mode');

        // Show banner and panel
        assistanceBanner.classList.remove('hidden');
        assistancePanel.classList.remove('hidden');

        // Update assistance panel with flagged passenger info
        if (this.state.flaggedPassenger) {
            document.getElementById('assistance-passenger-name').textContent = this.state.flaggedPassenger.name;
            document.getElementById('assistance-passenger-seat').textContent = `SEAT ${this.state.flaggedPassenger.seat}`;
        }
    }

    clearAssistanceMode() {
        this.state.assistanceModeActive = false;
        this.state.flaggedPassenger = null;

        const modalOverlay = this.elements.modal;
        const assistanceBanner = document.getElementById('assistance-banner');
        const assistancePanel = document.getElementById('awaiting-assistance-panel');

        // Remove assistance mode class
        modalOverlay.classList.remove('assistance-mode');

        // Hide banner and panel with animation
        assistanceBanner.classList.add('hidden');
        assistancePanel.classList.add('hidden');
    }

    togglePublicDisplay() {
        this.state.isPublicDisplay = !this.state.isPublicDisplay;

        const modalOverlay = this.elements.modal;
        const toggleBtn = document.getElementById('toggle-public-view');
        const toggleIcon = toggleBtn.querySelector('i');

        if (this.state.isPublicDisplay) {
            modalOverlay.classList.add('public-display');
            toggleIcon.className = 'ri-eye-line';
            toggleBtn.title = 'Switch to Supervisor View';
        } else {
            modalOverlay.classList.remove('public-display');
            toggleIcon.className = 'ri-tv-2-line';
            toggleBtn.title = 'Toggle Public LED Display';
        }
    }

    endBoarding() {
        if (this.state.boardingInterval) {
            clearInterval(this.state.boardingInterval);
        }

        this.elements.modal.classList.add('hidden');
        this.elements.modal.classList.remove('public-display');
        this.elements.modal.classList.remove('assistance-mode');

        if (this.state.currentFlight) {
            this.state.currentFlight.status = 'Boarded';
        }

        this.state.currentFlight = null;
        this.state.currentPassengerIndex = 0;
        this.state.isPaused = false;
        this.state.isPublicDisplay = false;
        this.state.assistanceModeActive = false;
        this.state.flaggedPassenger = null;

        // Hide assistance elements
        document.getElementById('assistance-banner')?.classList.add('hidden');
        document.getElementById('awaiting-assistance-panel')?.classList.add('hidden');

        this.renderDashboard();
    }
}

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.aeroQueue = new AeroQueueApp();
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (window.aeroQueue && window.aeroQueue.state.boardingInterval) {
        clearInterval(window.aeroQueue.state.boardingInterval);
    }
});
