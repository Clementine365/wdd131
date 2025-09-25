// Footer year and last modified
const currentYear = document.getElementById('currentyear');
const lastModified = document.getElementById('lastModified');

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;

// Hamburger menu toggle
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

// Array of temple pictures and comments
const temples = [
  { name: "Nairobi Kenya Temple", location: "Nairobi, Kenya", dedicated: "May 24, 2019", area: 23000, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/nairobi-kenya-temple/nairobi-kenya-temple-60488.jpg" },
  { name: "The Hague Netherlands Temple", location: "The Hague, Netherlands", dedicated: "June 18, 2002", area: 9000, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/the-hague-netherlands-temple/the-hague-netherlands-temple-5172.jpg" },
  { name: "Kinshasa Democratic Republic of the Congo Temple", location: "Kinshasa, DRC", dedicated: "April 14, 2019", area: 20000, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/kinshasa-democratic-republic-of-the-congo-temple/kinshasa-democratic-republic-of-the-congo-temple-3533.jpg" },
  { name: "Accra Ghana Temple", location: "Accra, Ghana", dedicated: "August 21, 2004", area: 10000, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-5154.jpg" },
  { name: "Helsinki Finland Temple", location: "Helsinki, Finland", dedicated: "October 22, 2006", area: 33000, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/helsinki-finland-temple/helsinki-finland-temple-4192.jpg" },
  { name: "Frankfurt Germany Temple", location: "Frankfurt, Germany", dedicated: "July 28, 1987", area: 9000, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/frankfurt-germany-temple/frankfurt-germany-temple-6600.jpg" },
  { name: "Johannesburg South Africa Temple", location: "Johannesburg, South Africa", dedicated: "September 24, 1985", area: 11800, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-43596.jpg" },
  { name: "Paris France Temple", location: "Paris, France", dedicated: "May 20, 2017", area: 35000, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2054.jpg" },
  { name: "Rome Italy Temple", location: "Rome, Italy", dedicated: "March 10, 2019", area: 40000, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642.jpg" },
  { name: "Tokyo Japan Temple", location: "Tokyo, Japan", dedicated: "October 27, 1980", area: 10200, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-27491.jpg" },
  { name: "Salt Lake Temple", location: "Salt Lake City, Utah, USA", dedicated: "April 6, 1893", area: 253000, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-8453.jpg" },
  { name: "London England Temple", location: "London, England", dedicated: "September 7, 1958", area: 8200, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-61780.jpg" }
];


const templeGrid = document.querySelector('.temple-grid');
const navLinks = document.querySelectorAll('.navigation a');

// Function to create temple cards with IntersectionObserver for lazy fade-in
function displayTemples(templesToDisplay) {
  templeGrid.innerHTML = '';

  templesToDisplay.forEach(temple => {
    const figure = document.createElement('figure');

    const img = document.createElement('img');
    img.dataset.src = temple.imageUrl; // lazy-load
    img.alt = temple.name;
    img.classList.add('fade-in');

    const figcaption = document.createElement('figcaption');
    figcaption.textContent = `${temple.name} - ${temple.location} (Dedicated: ${temple.dedicated}, Area: ${temple.area} sq ft)`;

    figure.appendChild(img);
    figure.appendChild(figcaption);
    templeGrid.appendChild(figure);
  });

  
  const options = { root: null, rootMargin: '0px', threshold: 0.1 };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('visible');
        observer.unobserve(img);
      }
    });
  }, options);

  const imgs = document.querySelectorAll('.fade-in');
  imgs.forEach(img => observer.observe(img));
}


displayTemples(temples);

// The Filter functions
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const filter = link.textContent.toLowerCase();

    switch(filter) {
      case 'home':
        displayTemples(temples);
        break;
      case 'old':
        displayTemples(temples.filter(t => parseInt(t.dedicated.split(',')[1].trim()) < 1900));
        break;
      case 'new':
        displayTemples(temples.filter(t => parseInt(t.dedicated.split(',')[1].trim()) > 2000));
        break;
      case 'large':
        displayTemples(temples.filter(t => t.area > 90000));
        break;
      case 'small':
        displayTemples(temples.filter(t => t.area < 10000));
        break;
    }
  });
});
