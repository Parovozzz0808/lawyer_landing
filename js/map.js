ymaps.ready(initMap);

function initMap () {
  var myMap = new ymaps.Map("map", {
    center: [55.902823, 37.740507],
    zoom: 16
    });

    myGeoObject = new ymaps.GeoObject({
      geometry: {
        type: "Point",
        coordinates: [55.902823, 37.740507]
      },
      properties: {
        iconCaption: "Михельсон ТУТ"
      }
    });

  myMap.geoObjects.add(myGeoObject);
  };
