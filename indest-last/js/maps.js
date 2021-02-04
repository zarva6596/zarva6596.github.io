'use strict';

const script = document.createElement('script');

// eslint-disable-next-line max-len
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCvzEBq0Js5PxaHTbgmmAm2Ejeo1pC9cgY&callback=initMap';
script.defer = true;

window.initMap = function() {
   const position = {
     lat: 49.88004784864266,
     lng: 24.07851932901339,
   };

   const map = new google.maps.Map(document.getElementById('map'), {
      center: position,
      zoom: 12,
      disableDefaultUI: true,
      styles: [
         {
            'featureType': 'water',
            'elementType': 'geometry',
            'stylers': [
               {
                  'color': '#e9e9e9',
               },
               {
                  'lightness': 17,
               },
            ],
         },
         {
            'featureType': 'landscape',
            'elementType': 'geometry',
            'stylers': [
               {
                  'color': '#f5f5f5',
               },
               {
                  'lightness': 20,
               },
            ],
         },
         {
            'featureType': 'road.highway',
            'elementType': 'geometry.fill',
            'stylers': [
               {
                  'color': '#ffffff',
               },
               {
                  'lightness': 17,
               },
            ],
         },
         {
            'featureType': 'road.highway',
            'elementType': 'geometry.stroke',
            'stylers': [
               {
                  'color': '#ffffff',
               },
               {
                  'lightness': 29,
               },
               {
                  'weight': 0.2,
               },
            ],
         },
         {
            'featureType': 'road.arterial',
            'elementType': 'geometry',
            'stylers': [
               {
                  'color': '#ffffff',
               },
               {
                  'lightness': 18,
               },
            ],
         },
         {
            'featureType': 'road.local',
            'elementType': 'geometry',
            'stylers': [
               {
                  'color': '#ffffff',
               },
               {
                  'lightness': 16,
               },
            ],
         },
         {
            'featureType': 'poi',
            'elementType': 'geometry',
            'stylers': [
               {
                  'color': '#f5f5f5',
               },
               {
                  'lightness': 21,
               },
            ],
         },
         {
            'featureType': 'poi.park',
            'elementType': 'geometry',
            'stylers': [
               {
                  'color': '#dedede',
               },
               {
                  'lightness': 21,
               },
            ],
         },
         {
            'elementType': 'labels.text.stroke',
            'stylers': [
               {
                  'visibility': 'on',
               },
               {
                  'color': '#ffffff',
               },
               {
                  'lightness': 16,
               },
            ],
         },
         {
            'elementType': 'labels.text.fill',
            'stylers': [
               {
                  'saturation': 36,
               },
               {
                  'color': '#333333',
               },
               {
                  'lightness': 40,
               },
            ],
         },
         {
            'elementType': 'labels.icon',
            'stylers': [
               {
                  'visibility': 'off',
               },
            ],
         },
         {
            'featureType': 'transit',
            'elementType': 'geometry',
            'stylers': [
               {
                  'color': '#f2f2f2',
               },
               {
                  'lightness': 19,
               },
            ],
         },
         {
            'featureType': 'administrative',
            'elementType': 'geometry.fill',
            'stylers': [
               {
                  'color': '#fefefe',
               },
               {
                  'lightness': 20,
               },
            ],
         },
         {
            'featureType': 'administrative',
            'elementType': 'geometry.stroke',
            'stylers': [
               {
                  'color': '#fefefe',
               },
               {
                  'lightness': 17,
               },
               {
                  'weight': 1.2,
               },
            ],
         },
      ],
   });

   const marker = new google.maps.Marker({
      position,
      map,
      // icon: 'https://raw.githubusercontent.com/zarva6596/zarva6596.github.io/master/ular-last/img/footer-logo.png',
      icon: './img/icons/chicken-icon.svg',
   });
};

document.head.appendChild(script);