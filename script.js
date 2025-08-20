window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if(window.scrollY > 50) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

window.addEventListener('load', () => {
  document.querySelectorAll('.hero h1, .hero p').forEach(el => el.classList.add('show'));
  document.querySelectorAll('.card-fade').forEach((el,i) => setTimeout(()=>el.classList.add('show'), i*300));
});

// Google Maps
function initMap() {
  const lauro = { lat: -12.924, lng: -38.321 };
  const map = new google.maps.Map(document.getElementById("map"), { center: lauro, zoom: 13 });
  const input = document.getElementById("mapSearch");
  const searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  map.addListener("bounds_changed", () => { searchBox.setBounds(map.getBounds()); });
  let markers = [];
  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();
    if(places.length == 0) return;
    markers.forEach(m => m.setMap(null));
    markers = [];
    const bounds = new google.maps.LatLngBounds();
    places.forEach(p => {
      if(!p.geometry || !p.geometry.location) return;
      markers.push(new google.maps.Marker({ map, position: p.geometry.location }));
      if(p.geometry.viewport) bounds.union(p.geometry.viewport);
      else bounds.extend(p.geometry.location);
    });
    map.fitBounds(bounds);
  });
}
