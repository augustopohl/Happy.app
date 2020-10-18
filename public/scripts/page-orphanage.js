const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// Create map
const map = L.map("mapid", options).setView([-30.0348719,-51.1259997], 15)

// Create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)

// Create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
})


// Create and add marker
L.marker([-30.0348719,-51.1259997], { icon })
.addTo(map)

/* Image gallery */

function selectImage(event) {
  const button = event.currentTarget

  // remove all .active classes
  const buttons = document.querySelectorAll(".images button")
  buttons.forEach(function(button) {
    button.classList.remove("active")
  })

  // select clicked image
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")

  // update container image
  imageContainer.src = image.src

  // add .active class to this button
  button.classList.add('active')
}