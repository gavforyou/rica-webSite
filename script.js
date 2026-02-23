document.addEventListener('DOMContentLoaded', function() {
    // We use a specific ISO-style date string to prevent browser errors
    const startDate = new Date("2022-10-03T00:00:00").getTime();

    function updateTimer() {
        const now = new Date().getTime();
        const diff = now - startDate;

        // Check if the date is valid and the difference is positive
        if (isNaN(diff) || diff < 0) {
            console.error("Invalid start date or time has not reached the start date yet.");
            return;
        }

        // Math calculations
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        // Safety: Only update if the elements exist on the page
        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minsEl = document.getElementById("minutes");
        const secsEl = document.getElementById("seconds");

        if (daysEl) daysEl.innerText = d.toString().padStart(2, '0');
        if (hoursEl) hoursEl.innerText = h.toString().padStart(2, '0');
        if (minsEl) minsEl.innerText = m.toString().padStart(2, '0');
        if (secsEl) secsEl.innerText = s.toString().padStart(2, '0');
    }

    // Refresh every 1 second
    setInterval(updateTimer, 1000);
    
    // Initial call
    updateTimer();
});