    let map, infoWindow;
    let points = [];

    function initMap() {
      map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 6,
      });
      console.log(map)
      infoWindow = new google.maps.InfoWindow();

      localStorage.clear();
      console.log(localStorage)
      // Read points from localStorage
      const storedPoints = localStorage.getItem("points");
      if (storedPoints) {
        points = JSON.parse(storedPoints);
      }

      // For each point, create a marker with the point's coordinates
      for (let i = 0; i < points.length; i += 1) {
        const point = points[i];
        new google.maps.Marker({
          map: map,
          position: point,
        });
      } 

      const locationButton = document.createElement("button");
      locationButton.textContent = "Pan to Current Location";
      locationButton.classList.add("custom-map-control-button");
      map.controls[google.maps.ControlPosition.TOP_CENTER].push(
        locationButton
      );
      locationButton.addEventListener("click", function () {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            function (position) {
              const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };
              infoWindow.setPosition(pos);
              infoWindow.setContent("AKI ESTA TU CASA BRO.");
              infoWindow.open(map);
              
              /*const beachMarker = new google.maps.Marker({
              position: pos,
              title: "MUERTE",
              map,
            });
              console.log(map, pos)*/
              map.setCenter(pos);
            },
            function () {
              handleLocationError(true, infoWindow, map.getCenter());
            }
          );
        } else {
          handleLocationError(false, infoWindow, map.getCenter());
        }
      });

      // Create a marker on click
      map.addListener("click", function (event) {
        /*const marker = new google.maps.Marker({
          map: map,
          position: event.latLng,
        });*/
        // Store the marker's position in localStorage
        points.push(marker.position);
        localStorage.setItem("points", JSON.stringify(points));
      });
    }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(
        browserHasGeolocation
          ? "Error: The Geolocation service failed."
          : "Error: Your browser doesn't support geolocation."
      );
      infoWindow.open(map);
    }