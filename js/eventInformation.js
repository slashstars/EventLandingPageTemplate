/*
 Event information
 */

var eventInfo = {
    en: {
        preferred: true,
		homeTitle: "Home",
        header: {
            eventType: "CONFERENCE",
            title: "MY AWESOME EVENT",
            dates: "January 14 - 16, 2016",
            location: "Seattle, USA",
            buttonMessage: "RESERVE MY SEAT"
        },
		descriptionTitle: "Description",
        description: "Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo.",
        scheduleTitle: 'Schedule',
        days: {
            1: {
                name: "Day One",
                blocks: {
                    1: {time: "17:00 - 18:00", name: "Lecture on stuff"},
                    2: {time: "18:00 - 18:10", name: "Coffee break"},
                    3: {time: "18:10 - 19:10", name: "A different lecture"},
                    4: {time: "19:10 - 19:20", name: "Coffee break"},
                    5: {time: "20:30 - 21:00", name: "Closing party"}
                }
            },
            2: {
                name: "Day Two",
                blocks: {
                    1: {time: "9:00 - 18:00", name: "Full day brunch"},
                    2: {time: "18:00 - 18:10", name: "Coffee break"},
                    3: {time: "18:10 - 19:10", name: "Recap"},
                    4: {time: "19:10 - 19:20", name: "Coffee break"},
                    5: {time: "19:20 - 20:20", name: "Dinner party"},
                    6: {time: "20:30 - 21:00", name: "Discussion"}
                }
            }
        },
        speakersTitle: 'Speakers',
        speakers: {
            1: {
                name: "John Smith",
                description: "Event Expert",
                pictureUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f1/David_Culler_Portrait.jpg"
            },
            2: {
                name: "Jane Doe",
                description: "CEO of Generic Elements",
                pictureUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Woman_with_a_light_brown_blouse_and_a_red_scarf.jpg"
            },
            3: {
                name: "George Truman",
                description: "Beard Consultant",
                pictureUrl: "https://upload.wikimedia.org/wikipedia/en/0/06/Michael_Garten_displays_his_beard.jpg"
            }
        },
		locationTitle: "Location",
        locationName: "Salmon Theater, Seattle",
        location: {
            lat: 47.544524,
            lon: -122.307359
        },
        FAQtitle: 'FAQ',
        FAQ: {
            1: {
                title: "What should I bring?",
                answer: "Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum."
            },
            2: {
                title: "Who can attend?",
                answer: "Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. "
            },
            3: {
                title: "How long does it take?",
                answer: "Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. "
            },
            4: {
                title: "Can I bring a friend?",
                answer: "Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. "
            }
        },
		registerTitle: "Register",
        register: {
            namePlaceholder: 'Your name',
            emailPlaceholder: 'Your email',
            descriptionPlaceholder: "Tell us a little bit about yourself",
            aboutPlaceholder: 'A little bit about yourself',
            buttonMessage: 'Register',
            successMessage: 'Thanks, your registration was successful!',
            errorMessage: "There was a problem. Registration not sent."
        }
    },
    bg: {
		homeTitle: "Начало",
        header: {
            eventType: "Конференция",
            title: "Страхотното ми събитие",
            dates: "Януари 14 - 16, 2016",
            location: "Сиатъл, САЩ",
            buttonMessage: "ЗАПАЗИ МЯСТО"
        },
		descriptionTitle: "Описание",
        description: "Юллюм шапэрэт зыд эа, нык ад аугюэ кэтэро омйттам, нэ про рыбюм фабулаз еракюндйа. Хаж эррэм тымпор эррорибуз ад, мэя ут кытэрож конжтетуто, хаж ут омнэжквюы опортэры ыкчпэтында. Экз эжт эвэртё патриоквюы, ты хёз трётанё мандамюч мэдиокретатым.",
        scheduleTitle: 'График',
        days: {
            1: {
                name: "Ден Първи",
                blocks: {
                    1: {
                        time: "17:00 - 18:00", name: "Лекция за неща"
                    }
                    ,
                    2: {
                        time: "18:00 - 18:10", name: "Кафе"
                    }
                    ,
                    3: {
                        time: "18:10 - 19:10", name: "Друга лекция"
                    }
                    ,
                    4: {
                        time: "19:10 - 19:20", name: "Пак кафе"
                    }
                    ,
                    5: {
                        time: "20:30 - 21:00", name: "Заключителна вечеринка"
                    }
                }
            }
            ,
            2: {
                name: "Ден Втори",
                blocks: {
                    1: {
                        time: "9:00 - 18:00", name: "Целодневен брънч"
                    }
                    ,
                    2: {
                        time: "18:00 - 18:10", name: "Кафе"
                    }
                    ,
                    3: {
                        time: "18:10 - 19:10", name: "Преговор"
                    }
                    ,
                    4: {
                        time: "19:10 - 19:20", name: "Кафе"
                    }
                    ,
                    5: {
                        time: "19:20 - 20:20", name: "Вечеринка"
                    }
                    ,
                    6: {
                        time: "20:30 - 21:00", name: "Дискусия"
                    }
                }
            }
        },
        speakersTitle: 'Лектори',
        speakers: {
            1: {
                name: "Джон Смит",
                description: "Експерт събития",
                pictureUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f1/David_Culler_Portrait.jpg"
            }
            ,
            2: {
                name: "Джейн Доу",
                description: "Изпълнителен директор, Generic Elements",
                pictureUrl: "http://mcmorris.house.gov/uploads/McM%20Official%20Photo%203-8-11.jpg"
            }
            ,
            3: {
                name: "Джордж Труман",
                description: "Консултант по брадите",
                pictureUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f1/David_Culler_Portrait.jpg"
            }
        },
		locationTitle: "Място",
        locationName: "Салмън Тиътър, Сиатъл",
        location: {
            lat: 47.544524,
            lon: -122.307359
        },
		registerTitle: "Регистрация",
        register: {
            namePlaceholder: 'Твоето име',
            emailPlaceholder: 'Твоя мейл',
            descriptionPlaceholder: "Разкажи ни малко за себе си.",
            aboutPlaceholder: 'Разкажи ни малко за себе си.',
            buttonMessage: 'Регистрирай се',
            successMessage: 'Благодаря, регистрацията е успешна!',
            errorMessage: "Имаше проблем. Регистрацията не е успешна."
        },
        FAQtitle: 'Често задавани въпроси',
        FAQ: {
            1: {
                title: "Curabitur tortor?",
                answer: "Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum."
            },
            2: {
                title: "Pellentesque nibh?",
                answer: "Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. "
            },
            3: {
                title: "Aenean quam?",
                answer: "Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. "
            },
            4: {
                title: "Ciwi jimi cikwi?",
                answer: "Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. "
            }
        }
    }
};

//Returns all the property keys in an object
function getKeys(obj) {
    var keys = [];
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            keys.push(p);
        }
    }
    return keys;
}