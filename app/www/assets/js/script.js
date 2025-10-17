document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('listingContainer');

  const listings = [
    {
      title: "Peaceful Garden Shed",
      location: "Nice, France",
      price: "€15/day",
      image: "images/listing1.jpg"
    },
    {
      title: "Sunlit Studio",
      location: "Lyon, France",
      price: "€20/day",
      image: "images/listing2.jpg"
    },
    {
      title: "Quiet Balcony Corner",
      location: "Paris, France",
      price: "€10/day",
      image: "images/listing3.jpg"
    }
  ];

  listings.forEach(listing => {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4';
    card.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${listing.image}" class="card-img-top" alt="${listing.title}">
        <div class="card-body">
          <h5 class="card-title">${listing.title}</h5>
          <p class="card-text">${listing.location}</p>
          <p class="fw-bold">${listing.price}</p>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
});