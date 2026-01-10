/**
 * Newcastle PCYC Table Tennis Club - Main JavaScript
 */

// Schedule data
const SCHEDULE = [
  { day: 'Monday', time: '6:30 PM – 10:00 PM', dayIndex: 1 },
  { day: 'Wednesday', time: '6:30 PM – 10:00 PM', dayIndex: 3 },
  { day: 'Saturday', time: '2:30 PM – 6:00 PM', dayIndex: 6 },
  { day: 'Sunday', time: 'Email us for updates', dayIndex: 0, tba: true }
];

// Parse time string to hours/minutes
function parseTime(timeStr) {
  const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return null;
  let hours = parseInt(match[1]);
  const minutes = parseInt(match[2]);
  const period = match[3].toUpperCase();
  if (period === 'PM' && hours !== 12) hours += 12;
  if (period === 'AM' && hours === 12) hours = 0;
  return { hours, minutes };
}

// Calculate next session
function getNextSession() {
  const now = new Date();
  const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  // Filter out TBA sessions
  const activeSessions = SCHEDULE.filter(s => !s.tba);
  
  // Find next session
  let nextSession = null;
  let minDaysAway = Infinity;

  for (const session of activeSessions) {
    const startTime = parseTime(session.time.split('–')[0].trim());
    if (!startTime) continue;

    let daysAway = session.dayIndex - currentDay;
    if (daysAway < 0) daysAway += 7;
    
    // If it's today, check if the session hasn't started yet
    if (daysAway === 0) {
      const sessionMinutes = startTime.hours * 60 + startTime.minutes;
      const currentMinutes = currentHour * 60 + currentMinute;
      if (currentMinutes >= sessionMinutes) {
        daysAway = 7; // Session today has passed, next week
      }
    }

    if (daysAway < minDaysAway) {
      minDaysAway = daysAway;
      nextSession = {
        ...session,
        daysAway
      };
    }
  }

  return nextSession;
}

// Format next session text
function formatNextSession(session) {
  if (!session) return 'Check our timetable for upcoming sessions';
  
  const startTime = session.time.split('–')[0].trim();
  let dayText = session.day;
  
  if (session.daysAway === 0) {
    dayText = 'Today';
  } else if (session.daysAway === 1) {
    dayText = 'Tomorrow';
  } else if (session.daysAway < 7) {
    dayText = `This ${session.day}`;
  } else {
    dayText = `Next ${session.day}`;
  }
  
  return `${dayText} at ${startTime}`;
}

// Update next session display
function updateNextSessionDisplay() {
  const elements = document.querySelectorAll('[data-next-session]');
  const session = getNextSession();
  const text = formatNextSession(session);
  
  elements.forEach(el => {
    el.textContent = text;
  });
}

// Mobile menu toggle
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', mobileNav.classList.contains('open'));
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!menuBtn.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

// Contact form handling
function initContactForm() {
  const form = document.querySelector('#contact-form');
  const successMessage = document.querySelector('.form-success');
  
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      // Disable button and show loading
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      
      try {
        // Using Formspree - replace YOUR_FORM_ID with actual ID
        const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if (response.ok) {
          // Track form submission
          if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submit');
          }
          
          // Show success message
          form.style.display = 'none';
          if (successMessage) {
            successMessage.classList.add('show');
          }
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        console.error('Form error:', error);
        alert('Sorry, there was an error sending your message. Please try emailing us directly at enquiries@npttc.com.au');
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  }
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Track CTA clicks
function initCTATracking() {
  document.querySelectorAll('[data-track]').forEach(el => {
    el.addEventListener('click', function() {
      const eventName = this.dataset.track;
      const eventParams = {};
      
      if (this.dataset.trackParams) {
        try {
          Object.assign(eventParams, JSON.parse(this.dataset.trackParams));
        } catch (e) {}
      }
      
      // Add common params
      if (this.textContent) {
        eventParams.cta_text = this.textContent.trim();
      }
      
      // Track with GA4
      if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventParams);
      }
      
      console.log('Track event:', eventName, eventParams);
    });
  });
}

// Timetable view tracking
function initTimetableTracking() {
  const timetable = document.querySelector('#timetable');
  if (!timetable) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'timetable_view');
        }
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });
  
  observer.observe(timetable);
}

// Competitions data fetching
const COMPETITIONS_SHEET_URL = ''; // TBD - Google Sheet published CSV URL

async function loadCompetitions() {
  const container = document.querySelector('#competitions-data');
  if (!container) return;
  
  // Show loading state
  container.innerHTML = '<div class="loading">Loading competitions</div>';
  
  try {
    let data;
    
    if (COMPETITIONS_SHEET_URL) {
      // Fetch from Google Sheet
      const response = await fetch(COMPETITIONS_SHEET_URL);
      const csv = await response.text();
      data = parseCSV(csv);
    } else {
      // Use fallback local data
      const response = await fetch('/data/competitions.csv');
      const csv = await response.text();
      data = parseCSV(csv);
    }
    
    renderCompetitions(data, container);
  } catch (error) {
    console.error('Error loading competitions:', error);
    container.innerHTML = `
      <p class="text-center" style="color: var(--color-text-light); padding: 2rem;">
        Competition data is currently unavailable. 
        <a href="/location.html">Contact us</a> for upcoming event details.
      </p>
    `;
  }
}

// Parse CSV data
function parseCSV(csv) {
  const lines = csv.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.trim().toLowerCase().replace(/\s+/g, '_'));
  
  return lines.slice(1).map(line => {
    const values = line.split(',').map(v => v.trim());
    const obj = {};
    headers.forEach((header, i) => {
      obj[header] = values[i] || '';
    });
    return obj;
  });
}

// Render competitions table
function renderCompetitions(data, container) {
  if (!data || data.length === 0) {
    container.innerHTML = `
      <p class="text-center" style="color: var(--color-text-light); padding: 2rem;">
        No upcoming competitions at this time. Check back soon!
      </p>
    `;
    return;
  }
  
  // Filter to upcoming only by default
  const upcoming = data.filter(c => c.status?.toLowerCase() === 'upcoming');
  
  let html = `
    <div class="competitions-table">
      <table>
        <thead>
          <tr>
            <th>Competition</th>
            <th>Date</th>
            <th>Time</th>
            <th>Registration</th>
          </tr>
        </thead>
        <tbody>
  `;
  
  if (upcoming.length === 0) {
    html += `
      <tr>
        <td colspan="4" style="text-align: center; color: var(--color-text-light);">
          No upcoming competitions scheduled. Check back soon!
        </td>
      </tr>
    `;
  } else {
    upcoming.forEach(comp => {
      const dateFormatted = formatDate(comp.date);
      const regInfo = comp.registration_link 
        ? `<a href="${comp.registration_link}" target="_blank">${comp.registration_info || 'Register'}</a>`
        : (comp.registration_info || 'TBA');
      
      html += `
        <tr>
          <td><strong>${comp.comp_name}</strong>${comp.divisions ? `<br><small>${comp.divisions}</small>` : ''}</td>
          <td>${dateFormatted}</td>
          <td>${comp.start_time || 'TBA'}</td>
          <td>${regInfo}</td>
        </tr>
      `;
    });
  }
  
  html += `
        </tbody>
      </table>
    </div>
  `;
  
  container.innerHTML = html;
}

// Format date from YYYY-MM-DD
function formatDate(dateStr) {
  if (!dateStr) return 'TBA';
  try {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-AU', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  } catch (e) {
    return dateStr;
  }
}

// Set active nav link
function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav a, .mobile-nav a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (currentPath === href || (currentPath === '/' && href === '/index.html') || 
        (href !== '/' && currentPath.includes(href.replace('.html', '')))) {
      link.classList.add('active');
    }
  });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  updateNextSessionDisplay();
  initMobileMenu();
  initContactForm();
  initSmoothScroll();
  initCTATracking();
  initTimetableTracking();
  setActiveNavLink();
  
  // Load competitions if on that page
  if (document.querySelector('#competitions-data')) {
    loadCompetitions();
  }
});

// Update next session every minute
setInterval(updateNextSessionDisplay, 60000);
