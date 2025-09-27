//=====DEstination Data===== Used Constructor for easy data management
function Destination(name, description, duration, price, image) {
  this.name = name;
  this.description = description;
  this.duration = duration;
  this.price = price;
  this.image = image;
}

const destinations = [
  new Destination("Jaipur", "Jaipur · Udaipur · Jodhpur", "6N/7D", "₹24,999", "images/jaipur.png"),
  new Destination("Kerala", "Munnar · Alleppey · Kochi", "6N/7D", "₹26,499", "images/kerala.png"),
  new Destination("Goa", "Calangute · Baga · Dona Paula", "4N/5D", "₹22,999", "images/goa.png"),
  new Destination("Kashmir", "Srinagar · Gulmarg · Pahalgam", "6N/7D", "₹28,999", "images/kashmir.png"),
  new Destination("Manali", "Solang · Rohtang · Hidimba Temple", "5N/6D", "₹23,499", "images/manali.png"),
  new Destination("Agra (Taj Mahal)", "Taj Mahal · Agra Fort · Mehtab Bagh", "2N/3D", "₹14,999", "images/agra.png"),
];

// =====Travel Catalog Data=====
const travelCatalog = {
  Jaipur: {
    hotels: ["Hotel Royal Jaipur – ₹3,499/night", "Jaipur Heritage Stay – ₹2,999/night", "Luxury Retreat – ₹5,499/night"],
    Flights: (from) => [`${from} → Jaipur · 1h 50m`, `${from} → Jaipur via Ahmedabad · 3h 20m`, `${from} → Jaipur Morning Saver · 1h 55m`],
    Trains: (from) => [`${from}–Jaipur Express – 6:00 AM`, `Rajdhani Superfast – 8:30 PM`, `Duronto Sleeper – 10:45 PM`],
    packages: ["Jaipur City Tour · 2N/3D · ₹9,999", "Royal Circuit · 5N/6D · ₹24,999"]
  },

  Kerala: {
    hotels: [
      "Munnar Mist Resort – ₹4,200/night · Valley view",
      "Alleppey Houseboat – ₹6,500/night · All meals",
      "Kochi Boutique Stay – ₹3,300/night · Fort Kochi"
    ],
    Flights: (from) => [
      `${from} → Kochi (COK) • Non-stop • 2h 10m · ₹5,800`,
      `${from} → Trivandrum (TRV) • 1 stop • 3h 30m · ₹6,200`,
      `${from} → Calicut (CCJ) • Non-stop • 2h 20m · ₹6,000`
    ],
    Trains: (from) => [
      `${from}–Kochi Intercity – 6:40 AM · ₹1,450 (3A)`,
      `Kerala Express – Overnight · ₹1,100 (Sleeper)`,
      `Netravati Express – 3A · ₹1,950 (AC)`
    ],
    packages: [
      "Backwaters & Beaches · 4N/5D · ₹18,999 · Houseboat + Resort",
      "Tea Trails · 6N/7D · ₹27,999 · Munnar + Thekkady + Kochi"
    ]
  },

  Goa: {
    hotels: [
      "Beachfront Resort, Calangute – ₹5,000/night · Breakfast",
      "Baga Boutique Stay – ₹3,200/night · Near beach",
      "Dona Paula Luxury – ₹6,800/night · Pool & Spa"
    ],
    Flights: (from) => [
      `${from} → Goa (GOX) • Non-stop • 1h 15m · ₹4,500`,
      `${from} → Goa (GOI) • Non-stop • 1h 20m · ₹4,900`,
      `${from} → Goa • Late-night saver • 1h 25m · ₹4,200`
    ],
    Trains: (from) => [
      `${from}–Goa Konkan Express – 7:00 AM · ₹1,200 (2S)`,
      `Jan Shatabdi – 2:30 PM · ₹1,650 (CC)`,
      `Vande Bharat – 6:00 PM · ₹2,100 (EC)`
    ],
    packages: [
      "Goa Beach Escape · 3N/4D · ₹16,999 · Airport transfer + Breakfast",
      "North & South Goa · 5N/6D · ₹24,499 · Sightseeing + Cruise"
    ]
  },

  Kashmir: {
    hotels: [
      "Srinagar Houseboat – ₹4,800/night · Dal Lake",
      "Gulmarg Snow View – ₹5,200/night · Near Gondola",
      "Pahalgam Valley Inn – ₹3,700/night · River view"
    ],
    Flights: (from) => [
      `${from} → Srinagar (SXR) • 1 stop via Delhi • 3h 10m · ₹6,800`,
      `${from} → Srinagar (SXR) • Morning • 3h 20m · ₹7,200`,
      `${from} → Jammu (IXJ) + Road to Srinagar · 2h flight + 8h road · From ₹6,000`
    ],
    Trains: (from) => [
      `${from} → Jammu Tawi • Overnight · ₹1,900 (3A)`,
      `Jammu–Banihal (Rail) + Road to Srinagar · Combined · From ₹1,200`,
      `Alternate: ${from} → Delhi → Jammu (break journey)`
    ],
    packages: [
      "Heaven on Earth · 5N/6D · ₹27,999 · Srinagar + Gulmarg",
      "Valley Highlights · 6N/7D · ₹31,999 · Srinagar + Pahalgam + Sonmarg"
    ]

  },
  Manali: {
    hotels: [
      "Snow Valley Resort – ₹4,200/night · Mountain View",
      "Manali Riverside Cottages – ₹3,500/night · Near Beas River",
      "Luxury Hillside Retreat – ₹5,800/night · Spa & Jacuzzi"
    ],
    Flights: (from) => [
      `${from} → Kullu (KUU) • Non-stop • 1h 30m · ₹6,200`,
      `${from} → Kullu (KUU) • 1 stop via Delhi • 3h 10m · ₹5,900`,
      `${from} → Chandigarh (IXC) + Road to Manali · Flight 1h + 7h road · From ₹5,000`
    ],
    Trains: (from) => [
      `${from} → Chandigarh · 3h train · ₹1,200`,
      `Chandigarh → Manali by Volvo Bus · 7h · ₹950`,
      `Delhi → Joginder Nagar Rail + Road · From ₹1,500`
    ],
    packages: [
      "Manali Adventure · 4N/5D · ₹17,999 · Includes Solang & Rohtang",
      "Himalayan Escape · 6N/7D · ₹26,999 · Shimla + Kullu + Manali"
    ]
  },
  Agra: {
    hotels: [
      "Tajview – IHCL SeleQtions – ₹5,200/night · Taj-facing rooms",
      "Crystal Sarovar Premiere – ₹3,800/night · Near Taj East Gate",
      "Courtyard by Marriott – ₹6,200/night · Pool & Spa"
    ],
    Flights: (from) => [
      `${from} → Delhi (DEL) • Non-stop • 2h · From ₹4,500 + Road to Agra (3.5h)`,
      `${from} → Agra (AGR) • Limited service • 1h 30m · From ₹6,200`,
      `${from} → Jaipur (JAI) • 1h 20m + Road to Agra (4h) · From ₹5,800`
    ],
    Trains: (from) => [
      `${from} → Agra Cantt • Gatimaan Express • 1h 40m (from Delhi) · ₹1,500 (EC)`,
      `${from} → Agra Fort • Taj Express • Day train · From ₹650`,
      `${from} → Agra Cantt • Shatabdi/Vande Bharat (via Delhi) · From ₹1,200`
    ],
    packages: [
      "Taj Mahal Sunrise Tour · 1N/2D · ₹7,999 · Guide + Entry + Transport",
      "Agra Heritage · 2N/3D · ₹14,999 · Taj Mahal + Agra Fort + Mehtab Bagh",
      "Golden Triangle (Delhi–Agra–Jaipur) · 5N/6D · ₹28,999 · Hotels + Transfers"
    ]
  }

};


//==Render Destination Cards Dynamically==
function renderDestinations() {
  const container = document.querySelector("#destinationContainer");
  if (!container) return;

  destinations.forEach((place) => {
    const card = document.createElement("div");
    card.className = "tour-card";
    card.innerHTML = `
      <img src="${place.image}" alt="${place.name}" style="width:100%; border-radius:10px;" />
      <h3>${place.name}</h3>
      <p>${place.description}</p>
      <p>${place.duration}</p>
      <span class="price">${place.price}</span>
    `;
    container.appendChild(card);
  });
}

//==Search Form Handling==
function setupSearchForm() {
  const form = document.getElementById("searchForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const from = this.querySelector('input[placeholder="From"]').value.trim();
    const to = this.querySelector('input[placeholder="To"]').value.trim();
    const date = this.querySelector('input[type="date"]').value;
    const travellers = this.querySelector('input[type="number"]').value;
    const transport = document.getElementById("transportMode").value;

    if (!from || !to || !date || !travellers || !transport) {
      alert("Please fill in all travel details.");
      return;
    }

    const city = travelCatalog[to] ? to : "Jaipur";
    const cat = travelCatalog[city];

    const hotelsList = cat.hotels.map(i => `<li>${i}</li>`).join("");
    const FlightsList = cat.Flights(from).map(i => `<li>${i}</li>`).join("");
    const TrainsList = cat.Trains(from).map(i => `<li>${i}</li>`).join("");
    const packsList = cat.packages.map(i => `<li>${i}</li>`).join("");

    let transportSection = "";
    if (transport.toLowerCase() === "flight") {
      transportSection = `<div class="section"><h3>✈️ Flight Options</h3><ul>${FlightsList}</ul></div>`;
    } else if (transport.toLowerCase() === "train") {
      transportSection = `<div class="section"><h3>🚆 Train Options</h3><ul>${TrainsList}</ul></div>`;
    }

    //== Booking Popup & Form == Used InnerHTML 
    const travelWindow = window.open("", "_self");
    travelWindow.document.writeln(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Travel Details – ${city}</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
        <style>
          body { font-family: Arial, sans-serif; background:#f4f6f8; padding:30px; color:#333; }
          .section { background:#fff; padding:20px; margin-bottom:24px; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,.1); }
          .btn { display:inline-block; padding:10px 20px; background:#2193b0; color:#fff; border:none; border-radius:8px; font-weight:600; cursor:pointer; }
          ul { margin:0; padding-left:18px; }
        </style>
      </head>
      <body>
        <h2>Your Travel Plan: ${from} ➜ ${city}</h2>
        <div class="section"><h3>🛏️ Hotel Packages in ${city}</h3><ul>${hotelsList}</ul></div>
        ${transportSection}
        <div class="section"><h3>👥 Travellers</h3><p>${travellers} passenger(s) · Mode: ${transport} · Date: ${date}</p></div>
        <div class="section"><h3>📦 Holiday Packages</h3><ul>${packsList}</ul></div>
        <button class="btn btn-book">Book Now</button>

        <script>
          function showBookingForm() {
            const existing = document.getElementById("bookingPopup");
            if (existing) existing.remove();

            const popup = document.createElement("div");
            popup.id = "bookingPopup";
            popup.innerHTML = \`
              <div class="popup-overlay"></div>
              <div class="popup-content">
                <h2>Complete Your Booking</h2>
                <form id="bookingForm" class="form-grid">
                  <div class="form-group"><label>Passenger 1 Name</label><input type="text" id="passenger1" required /></div>
                  <div class="form-group"><label>Passenger 2 Name</label><input type="text" id="passenger2" /></div>
                  <div class="form-group"><label>Phone Number</label><input type="tel" id="phone" required /></div>
                  <div class="form-group"><label>Alternate Number</label><input type="tel" id="altPhone" /></div>
                  <div class="form-group"><label>Email Address</label><input type="email" id="email" required /></div>
                  <div class="form-group"><label>From</label><input type="text" value="${from}" readonly /></div>
                  <div class="form-group"><label>To</label><input type="text" value="${city}" readonly /></div>
                  <div class="form-group"><label>Date of Travel</label><input type="date" value="${date}" required /></div>
                  <div class="form-group"><label>No. of Travellers</label><input type="number" value="${travellers}" readonly /></div>
                  <div class="form-group"><label>Travel Mode</label><input type="text" value="${transport}" readonly /></div>
                  <div class="form-group"><label>Payment Mode</label>
                    <select id="payment" required>
                      <option value="">Select Payment</option>
                      <option value="UPI">UPI</option>
                      <option value="Card">Credit/Debit Card</option>
                      <option value="NetBanking">Net Banking</option>
                      <option value="Cash">Cash on Arrival</option>
                    </select>
                  </div>
                  <div class="form-buttons">
                    <button type="submit" class="btn-confirm">Confirm Booking</button>
                    <button type="button" id="closePopup" class="btn-cancel">Cancel</button>
                  </div>
                </form>
              </div>
              <style>
                #bookingPopup .popup-overlay { position: fixed; inset:0; background:rgba(0,0,0,0.5);}
                #bookingPopup .popup-content { background:#fff; padding:25px; border-radius:12px; box-shadow:0 6px 18px rgba(0,0,0,0.2); width:650px; position:fixed; top:50%; left:50%; transform:translate(-50%,-50%);}
                #bookingPopup h2 { margin-bottom:15px; text-align:center;}
                .form-grid { display:grid; grid-template-columns:1fr 1fr; gap:15px 20px;}
                .form-group { display:flex; flex-direction:column;}
                .form-group label { font-weight:600; margin-bottom:5px;}
                .form-group input, .form-group select { padding:10px; border:1px solid #ccc; border-radius:6px;}
                .form-buttons { grid-column: span 2; display:flex; gap:15px; margin-top:15px;}
                .btn-confirm, .btn-cancel { flex:1; padding:12px; border:none; border-radius:6px; font-weight:bold; cursor:pointer;}
                .btn-confirm { background:#0077b6; color:#fff;}
                .btn-cancel { background:#aaa; color:#fff;}
              </style>
            \`;
            document.body.appendChild(popup);

            document.getElementById("bookingForm").addEventListener("submit", function(e) {
              e.preventDefault();
              const booking = {
                passenger1: document.getElementById("passenger1").value,
                passenger2: document.getElementById("passenger2").value,
                phone: document.getElementById("phone").value,
                altPhone: document.getElementById("altPhone").value,
                email: document.getElementById("email").value,
                from: "${from}",
                to: "${city}",
                date: "${date}",
                travellers: "${travellers}",
                mode: "${transport}",
                payment: document.getElementById("payment").value,
                bookedOn: new Date().toLocaleString()
              };
              let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
              bookings.push(booking);
              localStorage.setItem("bookings", JSON.stringify(bookings));
              alert("🎉 Booking Confirmed! Check My Bookings.");
              popup.remove();
            });

            document.getElementById("closePopup").addEventListener("click", () => popup.remove());
          }

          document.addEventListener("click", function(e) {
            if (e.target.classList.contains("btn-book")) showBookingForm();
          });
        <\/script>
      </body>
      </html>
    `);
  });
}

//==Animation on Tour Cards==
function setupTourCardAnimations() {
  const cards = document.querySelectorAll(".tour-card");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", "animate__fadeInUp");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
}

//==Bookings Icon Update==
function updateBookingCount() {
  const countEl = document.getElementById("bookingCount");
  if (countEl) {
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    countEl.textContent = bookings.length;
  }
}

//==Initialize on DOM Load==
document.addEventListener("DOMContentLoaded", () => {
  renderDestinations();
  setupSearchForm();
  setupTourCardAnimations();
  updateBookingCount();
  window.addEventListener("focus", updateBookingCount);
});

