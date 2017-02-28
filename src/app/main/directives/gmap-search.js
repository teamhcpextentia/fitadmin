angular.module('whpmc').directive('googleplace', [function() {
    return {
        require: 'ngModel',
        scope: {
            ngModel: '=',
            details: '=?'
        },
        link: function(scope, element, attrs, model) {
            var options = {
                //types: ['(cities)'],
                componentRestrictions: {
                    country: 'ind'
                }
            };

            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

            google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                var geoComponents = scope.gPlace.getPlace();
                var latitude = geoComponents.geometry.location.lat();
                var longitude = geoComponents.geometry.location.lng();
                var addressComponents = geoComponents.address_components;

                addressComponents = addressComponents.filter(function(component) {
                    switch (component.types[0]) {
                        case "locality": // city
                            return true;
                        case "administrative_area_level_1": // state
                            return true;
                        case "country": // country
                            return true;
                        default:
                            return false;
                    }
                }).map(function(obj) {
                    return obj.long_name;
                });

                addressComponents.push(latitude, longitude);

                scope.$apply(function() {
                    scope.details = addressComponents; // array containing each location component
                    model.$setViewValue(element.val());
                    //console.log(element.val());
                    // console.log("Latitude : " + latitude + "  Longitude : " + longitude);
                    // console.log(scope.details);
                });
            });
            //clean
            /*scope.$on('$destroy', function() {
                google.maps.event.clearInstanceListeners(element[0]);
            });*/
        }
    };
}]);