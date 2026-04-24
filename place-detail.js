document.addEventListener('DOMContentLoaded', () => {

    // ===== Mobile Menu Toggle =====
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    const headerActions = document.getElementById('header-actions');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            headerActions.classList.toggle('active');
            const icon = mobileMenu.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // ===== Calendar =====
    let currentDate = new Date();
    let selectedDate = null;
    let calMonth = currentDate.getMonth();
    let calYear = currentDate.getFullYear();

    const calMonthYear = document.getElementById('cal-month-year');
    const calDays = document.getElementById('cal-days');
    const calPrev = document.getElementById('cal-prev');
    const calNext = document.getElementById('cal-next');

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    function renderCalendar() {
        calDays.innerHTML = '';
        calMonthYear.textContent = `${monthNames[calMonth]} ${calYear}`;

        const firstDay = new Date(calYear, calMonth, 1).getDay();
        const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
        const today = new Date();

        // Empty cells before first day
        for (let i = 0; i < firstDay; i++) {
            const empty = document.createElement('div');
            empty.classList.add('cal-day', 'empty');
            calDays.appendChild(empty);
        }

        // Days
        for (let d = 1; d <= daysInMonth; d++) {
            const dayEl = document.createElement('div');
            dayEl.classList.add('cal-day');
            dayEl.textContent = d;

            const thisDate = new Date(calYear, calMonth, d);

            // Check if past day
            const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
            if (thisDate < todayStart) {
                dayEl.classList.add('disabled');
            } else {
                // Check if today
                if (d === today.getDate() && calMonth === today.getMonth() && calYear === today.getFullYear()) {
                    dayEl.classList.add('today');
                }

                // Check if selected
                if (selectedDate && d === selectedDate.getDate() && calMonth === selectedDate.getMonth() && calYear === selectedDate.getFullYear()) {
                    dayEl.classList.add('selected');
                }

                dayEl.addEventListener('click', () => {
                    selectedDate = new Date(calYear, calMonth, d);
                    renderCalendar();
                });
            }

            calDays.appendChild(dayEl);
        }
    }

    if (calPrev && calNext) {
        calPrev.addEventListener('click', () => {
            calMonth--;
            if (calMonth < 0) {
                calMonth = 11;
                calYear--;
            }
            renderCalendar();
        });

        calNext.addEventListener('click', () => {
            calMonth++;
            if (calMonth > 11) {
                calMonth = 0;
                calYear++;
            }
            renderCalendar();
        });

        renderCalendar();
    }

    // ===== Ticket Counter & Pricing =====
    const visitorRadios = document.querySelectorAll('input[name="visitor"]');
    const ticketPrices = document.querySelectorAll('.ticket-price');

    function getVisitorType() {
        const checked = document.querySelector('input[name="visitor"]:checked');
        return checked ? checked.value : 'egyptian';
    }

    function updatePriceLabels() {
        const type = getVisitorType();
        ticketPrices.forEach(el => {
            const price = type === 'egyptian' ? el.dataset.egy : el.dataset.for;
            el.textContent = `${price} EGP`;
        });
        updateTotal();
    }

    visitorRadios.forEach(radio => {
        radio.addEventListener('change', updatePriceLabels);
    });



    // ===== Total Calculation =====
    function updateTotal() {
        const type = getVisitorType();
        const rows = document.querySelectorAll('.ticket-row');
        let total = 0;
        let breakdownHTML = '';
        let hasTickets = false;

        rows.forEach(row => {
            const count = parseInt(row.querySelector('.counter-value').textContent);
            const priceEl = row.querySelector('.ticket-price');
            const label = row.querySelector('.ticket-label').textContent;
            const price = parseInt(type === 'egyptian' ? priceEl.dataset.egy : priceEl.dataset.for);

            if (count > 0) {
                hasTickets = true;
                const lineTotal = count * price;
                total += lineTotal;
                const visitorLabel = type === 'egyptian' ? 'Egyptian' : 'Foreigner';
                breakdownHTML += `<p>${count} Ticket${count > 1 ? 's' : ''} ${visitorLabel} (${label})  <strong>${lineTotal} EGP</strong></p>`;
            }
        });

        const totalBreakdown = document.getElementById('total-breakdown');
        const totalPrice = document.getElementById('total-price');

        if (hasTickets) {
            totalBreakdown.innerHTML = breakdownHTML;
        } else {
            totalBreakdown.innerHTML = '<p class="total-empty">No tickets selected</p>';
        }

        totalPrice.textContent = `$${total.toFixed(2)}`;
    }

    // ===== Book Now =====
    const bookNowBtn = document.getElementById('book-now-btn');
    if (bookNowBtn) {
        bookNowBtn.addEventListener('click', () => {
            const total = document.getElementById('total-price').textContent;
            if (total === '$0.00' || total === '$0') {
                alert('Please select at least one ticket!');
                return;
            }
            if (!selectedDate) {
                alert('Please select a date!');
                return;
            }
            const dateStr = selectedDate.toLocaleDateString('en-US', {
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
            });
            alert(`Booking confirmed!\n\nDate: ${dateStr}\nTotal: ${total}\n\nThank you for booking with Cairo Tourism!`);
        });
    }
});

// ===== Gallery Image Changer =====
function changeMainImage(thumbEl) {
    const mainImg = document.getElementById('gallery-main-img');
    const thumbImg = thumbEl.querySelector('img');
    mainImg.src = thumbImg.src;
    mainImg.alt = thumbImg.alt;

    // Update active state
    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    thumbEl.classList.add('active');
}

// ===== Ticket Counter =====
function updateCounter(btn, change) {
    const counterValue = btn.parentElement.querySelector('.counter-value');
    let value = parseInt(counterValue.textContent);
    value = Math.max(0, value + change);
    counterValue.textContent = value;

    // Animate
    counterValue.style.transform = 'scale(1.3)';
    setTimeout(() => {
        counterValue.style.transform = 'scale(1)';
    }, 150);

    // Update total
    const type = document.querySelector('input[name="visitor"]:checked').value;
    const rows = document.querySelectorAll('.ticket-row');
    let total = 0;
    let breakdownHTML = '';
    let hasTickets = false;

    rows.forEach(row => {
        const count = parseInt(row.querySelector('.counter-value').textContent);
        const priceEl = row.querySelector('.ticket-price');
        const label = row.querySelector('.ticket-label').textContent;
        const price = parseFloat(type === 'egyptian' ? priceEl.dataset.egy : priceEl.dataset.for);

        if (count > 0) {
            hasTickets = true;
            const lineTotal = count * price;
            total += lineTotal;
            const visitorLabel = type === 'egyptian' ? 'Egyptian' : 'Foreigner';
            breakdownHTML += `<p>${count} Ticket${count > 1 ? 's' : ''} ${visitorLabel} (${label})  <strong>$${lineTotal.toFixed(2)}</strong></p>`;
        }
    });

    const totalBreakdown = document.getElementById('total-breakdown');
    const totalPrice = document.getElementById('total-price');

    if (hasTickets) {
        totalBreakdown.innerHTML = breakdownHTML;
    } else {
        totalBreakdown.innerHTML = '<p class="total-empty">No tickets selected</p>';
    }

    totalPrice.textContent = `$${total.toFixed(2)}`;
}
