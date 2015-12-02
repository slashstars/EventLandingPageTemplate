var app = angular.module('myApp', ['pascalprecht.translate', 'vcRecaptcha']);

//Register translations
app.config(function ($translateProvider) {
    var translations = genericInfo;
    var preferredLanguage;

    for (var language in translations) {
        if (translations.hasOwnProperty(language)) {
            $translateProvider.translations(language, translations[language]);

            if (translations[language].hasOwnProperty('preferred'))
                preferredLanguage = language;
        }
    }

    if (preferredLanguage == undefined)
        preferredLanguage = getKeys(translations)[0];

    $translateProvider.preferredLanguage(preferredLanguage);
});

app.controller('myCtrl', ['$scope', '$http', '$location', '$anchorScroll', '$translate', 'vcRecaptchaService',
    function ($scope, $http, $location, $anchorScroll, $translate, recaptcha) {
        var info = genericInfo;

        $scope.info = info[Object.keys(info)[0]];
        $scope.translationKeys = getKeys(info);

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
            console.log($translate.getAvailableLanguageKeys());
        };

        $scope.selectedLanguage = $translate.use();

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

            initialize($scope.info.location.lat, $scope.info.location.lon);
        });
    }]);


