var app = angular.module('myApp', ['pascalprecht.translate']);

app.config(function ($translateProvider) {
    $translateProvider.translations('en', genericInfoEN);
    $translateProvider.translations('bg', genericInfoBG);

    $translateProvider.preferredLanguage('en');
});

app.controller('myCtrl', function ($scope, $http, $location, $anchorScroll, $translate) {

    //Info objects are in js/eventInformation.js
    $scope.info = genericInfoEN;

    $scope.changeLanguage = function (key) {
        $translate.use(key);
    };
    $scope.registration = {
        hasError: false,
        error: '',
        submitted: false,
        submitting: false,
        name: '',
        email: '',
        description: ''
    };
    $scope.register = function () {
        $scope.registration.submitting = true;
        $http({
            url: 'your url',
            method: 'post',
            params: {
                name: $scope.registration.name,
                email: $scope.registration.email,
                description: $scope.registration.description
            }
        })
            .success(function (data) {
                $scope.registration.hasError = false;
                $scope.registration.error = '';
                //handle respose here
            })
            .error(function (data, status) {
                $scope.registration.hasError = true;
                $scope.registration.error = 'Unable to submit.';
                //handle error here
            })
            .finally(function () {
                $scope.registration.submitted = true;
                $scope.registration.submitting = false;
            });
    };
    $scope.goToRegistration = function () {
        $location.hash('eventRegistration');
        $anchorScroll();
    };
    $scope.adjustHeight = function (tabId) {
        var tabIdWithHash = '#' + tabId;
        $('.tab-content').height($(tabIdWithHash).height());
    };
    angular.element(document).ready(function () {
        //Expand first tab on initial page load
        $('.tab-content').height($('.tab-content.container div:first').height());

        //Set the first tab to active on initial page load
        $('.nav.nav-tabs li:first').addClass("active");

        //Set the first tab container to active on initial page load
        $('.tab-content.container div:first').addClass("in active");
        
        initialize($scope.info.location.lat, $scope.info.location.lon);
    });
});
