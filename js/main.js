var app = angular.module('myApp', ['pascalprecht.translate', 'vcRecaptcha']);

app.config(function ($translateProvider) {
    $translateProvider.translations('en', genericInfoEN);
    $translateProvider.translations('bg', genericInfoBG);

    $translateProvider.preferredLanguage('en');
});

app.controller('myCtrl', ['$scope', '$http', '$location', '$anchorScroll', '$translate', 'vcRecaptchaService',
    function ($scope, $http, $location, $anchorScroll, $translate, recaptcha) {

        //Info objects are in js/eventInformation.js
        $scope.info = genericInfoEN;
        $scope.recaptchaPublicKey = '---- YOUR PUBLIC KEY GOES HERE ----';

        $scope.changeLanguage = function (key) {
            $translate.use(key);
        };
        $scope.registration = {
            registerText: 'Register',
            submittingText: 'Submitting',
            hasError: false,
            error: '',
            submitted: false,
            submitting: false,
            name: '',
            email: '',
            description: ''
        };
        $scope.register = function () {
            $scope.registration.submitted = false;
            $scope.registration.hasError = false;
            if (recaptcha.getResponse() === '') {
                $scope.registration.error = "Please, verify that you're not a robot.";
                $scope.registration.hasError = true;
                $scope.registration.submitted = true;
                return;
            }

            $scope.registration.submitting = true;
            $scope.registrationFormButtonText = $scope.registration.submittingText;
            $http({
                url: '---- YOUR WEB API URL GOES HERE ----',
                method: 'post',
                params: {
                    name: $scope.registration.name,
                    email: $scope.registration.email,
                    description: $scope.registration.description,
                    'g-recaptcha-response': recaptcha.getResponse()
                }
            })
                .success(function (data) {
                    $scope.registration.hasError = false;
                    $scope.registration.error = '';
                    //handle response here
                })
                .error(function (data, status) {
                    $scope.registration.hasError = true;
                    $scope.registration.error = 'Unable to submit.';
                    //handle error here
                    console.error('Submit error', status, data);
                })
                .finally(function () {
                    $scope.registrationFormButtonText = $scope.registration.registerText;
                    $scope.registration.submitted = true;
                    $scope.registration.submitting = false;
                });
        };
        $scope.goToRegistration = function () {
            $location.hash('eventRegistration');
            $anchorScroll();
        }

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

            //Replace '_' in schedule section name
            $.each($('a[data-toggle="tab"]'), function (index, value) {
                var sanitizedText = value.text;
                sanitizedText = sanitizedText.replace('_', ' ');
                value.text = sanitizedText;
            });

            console.log($scope.info.location.lat + '-' + $scope.info.location.lon);
            initialize($scope.info.location.lat, $scope.info.location.lon);
        });
    }]);
