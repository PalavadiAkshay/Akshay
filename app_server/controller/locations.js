 /* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('locations-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
        locations: [{
            name: 'Grill-9',
            address: 'Bazar, Vikrampuri Colony, opposite Pulla Reddy Sweets, Janakapuri, Hyderabad Asbestos Staff Colony, Karkhana, Secunderabad, Telangana 500015',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m',
            href: '/location'
        }, {
            name: 'Pista House',
            address: ' Meher Garden Rd, Prashanthinagar, Prashanth Nagar, Uppal, Hyderabad, Telangana 500039',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '200m',
            href: '/location/2'
        }, {
            name: 'Cafe Niloufer',
            address: '3-5-900, Old MLA Quarters Rd, Venkata swamy Nagar, Himayatnagar, Hyderabad, Telangana 500028',
            rating: 4,
            facilities: ['Food', 'Premium wifi'],
            distance: '250m',
            href: '/location/3'
        }]
    });
  };
  
  /* GET 'Location info' page */
  module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'Grill-9',
        pageHeader: {
            title: 'Grill-9'
        },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Grill-9',
            address: 'Bazar, Vikrampuri Colony, opposite Pulla Reddy Sweets, Janakapuri, Hyderabad Asbestos Staff Colony, Karkhana, Secunderabad, Telangana 500015',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Akshay',
                rating: 5,
                timestamp: '13 July 2023',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Varshith',
                rating: 3,
                timestamp: '18 June 2023',
                reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
            }]
        }
    });
  };

    /* GET 'Location info' page */
    module.exports.locationInfo2 = function(req, res) {
        res.render('location-info2', {
            title: 'Pista House',
            pageHeader: {
                title: 'Pista House'
            },
            sidebar: {
                context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
                callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
            },
            location: {
                name: 'Pista House',
                address: 'Meher Garden Rd, Prashanthinagar, Prashanth Nagar, Uppal, Hyderabad, Telangana 500039',
                rating: 3,
                facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                coords: {
                    lat: 51.455041,
                    lng: -0.9690884
                },
                openingTimes: [{
                    days: 'Monday - Friday',
                    opening: '7:00am',
                    closing: '7:00pm',
                    closed: false
                }, {
                    days: 'Saturday',
                    opening: '8:00am',
                    closing: '5:00pm',
                    closed: false
                }, {
                    days: 'Sunday',
                    closed: true
                }],
                reviews: [{
                    author: 'Ajith',
                    rating: 5,
                    timestamp: '16 July 2023',
                    reviewText: 'What a great place. I can\'t say enough good things about it.'
                }, {
                    author: 'Sukumar',
                    rating: 3,
                    timestamp: '13 June 2023',
                    reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
                }]
            }
        });
      };

        /* GET 'Location info' page */
  module.exports.locationInfo3 = function(req, res) {
    res.render('location-info3', {
        title: 'Cafe Niloufer',
        pageHeader: {
            title: 'Cafe Niloufer'
        },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Cafe Niloufer',
            address: '3-5-900, Old MLA Quarters Rd, Venkata swamy Nagar, Himayatnagar, Hyderabad, Telangana 500028',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Prakyath',
                rating: 5,
                timestamp: '14 July 2023',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Ajith',
                rating: 3,
                timestamp: '10 June 2023',
                reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
            }]
        }
    });
  };

  /* GET 'Add review' page */
  module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review Grill9 on Loc8r',
        pageHeader: {
            title: 'Review Grill9'
        }
    });
  };
  
  /* GET 'Add review' page */
  module.exports.addReview2 = function(req, res) {
    res.render('location-review-form2', {
        title: 'Review Pista House on Loc8r',
        pageHeader: {
            title: 'Review Pista House'
        }
    });
  };

  /* GET 'Add review' page */
  module.exports.addReview3 = function(req, res) {
    res.render('location-review-form3', {
        title: 'Review Cafe Niloufer on Loc8r',
        pageHeader: {
            title: 'Review Cafe Niloufer'
        }
    });
  };