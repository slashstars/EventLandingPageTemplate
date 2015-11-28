/*
 Event information
 */

/*
 Generic info
 */
var genericInfo = {
    header: {
        eventType: "CONFERENCE",
        title: "MY AWESOME EVENT",
        dates: "January 14 - 16, 2016",
        location: "Seattle, USA",
        buttonMessage: "RESERVE MY SEAT"
    },
    description: "Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo.",
    days: {
        "Day_One": [
            {time: "17:00 - 18:00", name: "Lecture on stuff"},
            {time: "18:00 - 18:10", name: "Coffee break"},
            {time: "18:10 - 19:10", name: "A different lecture"},
            {time: "19:10 - 19:20", name: "Coffee break"},
            {time: "20:30 - 21:00", name: "Closing party"},
        ],
        "Day_Two": [
            {time: "9:00 - 18:00", name: "Full day brunch"},
            {time: "18:00 - 18:10", name: "Coffee break"},
            {time: "18:10 - 19:10", name: "Recap"},
            {time: "19:10 - 19:20", name: "Coffee break"},
            {time: "19:20 - 20:20", name: "Dinner party"},
            {time: "20:30 - 21:00", name: "Discussion"},
        ]
    },
    speakers: [
        {
            name: "John Smith",
            description: "Event Expert",
            pictureUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f1/David_Culler_Portrait.jpg"
        },
        {
            name: "Jane Doe",
            description: "CEO of Generic Elements",
            pictureUrl: "http://mcmorris.house.gov/uploads/McM%20Official%20Photo%203-8-11.jpg"
        },
        {
            name: "George Truman",
            description: "Beard Consultant",
            pictureUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f1/David_Culler_Portrait.jpg"
        }
    ],
    locationName: "Salmon Theater, Seattle",
    location: {
        lat: 47.544524,
        lon: -122.307359
    }
};

/*
 Generic info
 */
var fullEventInfoEnglish = {
    header: {
        eventType: "FREE WORKSHOP",
        title: "GAME DEVELOPMENT WITH UNITY",
        dates: "January 14 - 16, 2016",
        location: "Sofia, Bulgaria",
        buttonMessage: "RESERVE MY SEAT"
    },
    description: "Join our workshop and we'll give you a running start in making games with the Unity. Over three days we’ll discuss the common problems for beginners and we’ll build a game together. This is a going to be a hands-on experience. Lecturing will be minimum so be prepared to do more than just sit back and listen. We'll be doing exercises, world building and code writing.",
    days: {
        "Day_One": [
            {time: "17:00 - 18:00", name: "Introduction. Setting up Unity and IDE."},
            {time: "18:00 - 18:10", name: "Coffee break"},
            {time: "18:10 - 19:10", name: "Unity and source control."},
            {time: "19:10 - 19:20", name: "Coffee break"},
            {time: "20:20 - 20:30", name: "Coffee break"},
            {time: "20:30 - 21:00", name: "Unity editor basics"},
        ],
        "Day_Two": [
            {time: "17:00 - 18:00", name: "Recap. Basic of scripting"},
            {time: "18:00 - 18:10", name: "Coffee break"},
            {time: "18:10 - 19:10", name: "Update() and FixedUpdate()"},
            {time: "19:10 - 19:20", name: "Coffee break"},
            {time: "19:20 - 20:20", name: "Manipulating game objects and components"},
            {time: "20:20 - 20:30", name: "Coffee break"},
            {time: "20:30 - 21:00", name: "Discussion"},
        ],
        "Day_Three": [
            {time: "10:00 - 11:00", name: "Game design discussion."},
            {time: "11:00 - 11:10", name: "Coffee break."},
            {time: "11:10 - 12:30", name: "Building the game prototype."},
            {time: "12:30 - 13:30", name: "Lunch break"},
            {time: "13:30 - 14:00", name: "Building the game prototype"},
            {
                time: "14:00 - 14:45",
                name: "Lecture: The art process of game creation with George Tanev, Lead Concept Artists at GameLoft"
            },
            {time: "15:00 - 16:00", name: "Turning the prototype into a playable game"},
            {time: "16:00 - 16:10", name: "Coffee break"},
            {time: "16:10 - 18:30", name: "More game building"},
            {time: "18:30 - ?", name: "Play time with our games"},
        ]
    },
    speakers: [
        {
            name: "Stoil Stoichev",
            description: "Programmer",
            pictureUrl: "http://slashstars.com/wp-content/uploads/2015/08/StoilTeamMemberPicture.jpg"
        },
        {
            name: "Lachezar Kanavrov",
            description: "Programmer",
            pictureUrl: "http://slashstars.com/wp-content/uploads/2015/08/LachezarTeamMemberPicture.jpg"
        },
        {
            name: "George Tanev",
            description: "Lead Concept Artist at Gameloft",
            pictureUrl: "http://slashstars.com/wp-content/uploads/2015/11/SpeakerTanev.png"
        }
    ],
    locationName: "Sofia Technical University",
    location: {
        lat: 42.657103,
        lon: 23.355109
    }
};

var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
    $scope.info = genericInfo;
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
});