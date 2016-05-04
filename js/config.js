var config = {
    lang: 'de',
    time: {
        timeFormat: 24,
        displaySeconds: true,
        digitFade: false
    },
    weather: {
        //change weather params here:
        //q: weather Code works with geo coordinats or 'City, Country'
        //units: metric or imperial but seriously imperial sucks
        params: {
            q: 'Stuttgart , Germany',
            units: 'metric',            
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'de',
            //Here comes your personal (free) APPID from openweathermap.org/
            APPID: 'a83921bb41ee5d832e98a4bfdf24043d'
        }
    },
    compliments: {
        interval: 30000,
        fadeInterval: 4000,
        morning: [
            'Good morning, Sir',            
            'Slept well?',
            'Running late again?'
        ],
        afternoon: [
            'Welcome back, how was work?',
            'Coffe or nap?',
            'Looked like that all day?'
        ],
        evening: [
            'That face though.',
            'There is someone behind you.',
            'Soon...',
            'Release me!'
        ],
        night: [
            'Go to bed already.',
            'Going to regret this tomorrow?',
            'I hope it was worth it staying up that long.',
            "Going to need coffee, don't we."
        ],
        weekendmorning: [
            'Headache?',
            'Up already?',
            'Drink some water.'
        ],
        weekendafternoon: [
            'Feeling better?',
            'Still wearing sweatpants?',
            "Didn't do anything today, did you?"
        ],
        weekendevening: [
            'Going out tonight?',
            'Productivity lim x->0',
            "Don't turn around..."
        ],
        weekendnight: [
            'Better drink some water',
            'Drunk or sleepless?',
            "You'll love your bed"
        ]        
    },
    calendar: {
        maximumEntries: 10, // Total Maximum Entries
		displaySymbol: true,
		defaultSymbol: 'calendar', // Fontawsome Symbol see http://fontawesome.io/cheatsheet/
        urls: [
                {
                	//Just german holydays
			 symbol: 'feiertage',
			 url: "http://www.ifeiertage.de/bw-s.ics"
                }
		]
    },
    news: {
    	//NewYork Times artikels
        //feed: 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml'
        //german IT-webpage
        feed: 'http://rss.golem.de/rss.php?feed=RSS2.0'
    }
};
