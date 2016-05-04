var compliments = {
	complimentLocation: '.compliment',
	currentCompliment: '',
	complimentList: {
		'morning': config.compliments.morning,
		'afternoon': config.compliments.afternoon,
		'evening': config.compliments.evening,
                'night' : config.compliments.night, 
		'weekendmorning': config.compliments.weekendmorning,
		'weekendafternoon': config.compliments.weekendafternoon,
		'weekendevening': config.compliments.weekendevening,
                'weekendnight' : config.compliments.weekendnight
        },
	updateInterval: config.compliments.interval || 30000,
	fadeInterval: config.compliments.fadeInterval || 4000,
	intervalId: null
};

/**
 * Changes the compliment visible on the screen
 */
compliments.updateCompliment = function () {



	var _list = [];

	var hour = moment().hour();        
        var day = moment().weekday();
        

	// In the followign if statement we use .slice() on the
	// compliments array to make a copy by value. 
	// This way the original array of compliments stays in tact.
        if (day === 6 || day === 7) {
            
            if (hour >= 5 && hour < 12) {
		// weekend Morning compliments
		_list = compliments.complimentList['weekendmorning'].slice();
            } else if (hour >= 12 && hour < 17) {
		// weekend Afternoon compliments
		_list = compliments.complimentList['weekendafternoon'].slice();
            } else if (hour >= 18 || hour < 1) {
		// Weekend Evening compliments
		_list = compliments.complimentList['weekendevening'].slice();
            } else if (hour >= 1 && hour < 5){
                _list = compliments.complimentList['weekendnight'].slice();
            }else {
		// Edge case in case something weird happens
		// This will select a compliment from all times of day
		Object.keys(compliments.complimentList).forEach(function (_curr) {
			_list = _list.concat(compliments.complimentList[_curr]).slice();
		});
            }
        }
        else{
            if (hour >= 5 && hour < 12) {
		// Morning compliments
		_list = compliments.complimentList['morning'].slice();
            } else if (hour >= 12 && hour <= 17) {
		// Afternoon compliments
		_list = compliments.complimentList['afternoon'].slice();
            } else if (hour >= 18 && hour < 1) {
		// Evening compliments
		_list = compliments.complimentList['evening'].slice();
            } else if (hour >= 1 && hour < 5){
                _list = compliments.complimentList['night'].slice();
            } else {
		// Edge case in case something weird happens
		// This will select a compliment from all times of day
		Object.keys(compliments.complimentList).forEach(function (_curr) {
			_list = _list.concat(compliments.complimentList[_curr]).slice();
		});
            }   
        }

	// Search for the location of the current compliment in the list
	var _spliceIndex = _list.indexOf(compliments.currentCompliment);

	// If it exists, remove it so we don't see it again
	if (_spliceIndex !== -1) {
		_list.splice(_spliceIndex, 1);
	}

	// Randomly select a location
	var _randomIndex = Math.floor(Math.random() * _list.length);
	compliments.currentCompliment = _list[_randomIndex];

	$('.compliment').updateWithText(compliments.currentCompliment, compliments.fadeInterval);

};

compliments.init = function () {

	this.updateCompliment();

	this.intervalId = setInterval(function () {
		this.updateCompliment();
	}.bind(this), this.updateInterval);

};