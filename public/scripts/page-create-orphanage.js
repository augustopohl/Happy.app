// Create map
const map = L.map("mapid").setView([-30.0386065, -51.2350172], 15);

// Create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// Create and add marker

map.on("click", function (event) {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon
  marker && map.removeLayer(marker);

  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// photos field upload
function addPhotoField() {
  //get photo container #images
  const container = document.querySelector("#images");
  // get container for duplicating .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");
  // last added image clone
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);
  //verify if field is empty, if so, do not add to images container
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  //clear field before creating image container
  input.value = "";
  //add clone to the #images container
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    //clear field value
    span.parentNode.children[0].value = "";
    return;
  }

  // delete field
  span.parentNode.remove();
}

// yes/no selection

function toggleSelect(event) {
  // remove .active class (from buttons)
  document.querySelectorAll(".button-select button").forEach(function (button) {
    button.classList.remove("active");
  });

  // set .active class to clicked button
  const button = event.currentTarget;
  button.classList.add("active");

  // get clicked button

  //update my hidden input with selected value
  const input = document.querySelector('[name="open_on_weekends"]');

  // verify if yes/no
  input.value = button.dataset.value;
}

/*L.marker([-30.0386065, -51.2350172], { icon })
.addTo(map)*/
