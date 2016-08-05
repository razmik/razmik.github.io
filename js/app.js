function accessLink(area){
    switch (area){
        case 'FindOutMore':
            ga('send', {
                hitType: 'event',
                eventCategory: 'ButtonClick',
                eventAction: 'FindOutMore',
                eventLabel: ''
                });
            break;
        case 'FullProfile':
            ga('send', {
                hitType: 'event',
                eventCategory: 'ButtonClick',
                eventAction: 'FullProfile',
                eventLabel: 'LinkedIn'
                });
            break;
        case 'Blog-Card': 
            ga('send', {
                hitType: 'event',
                eventCategory: 'CardClick',
                eventAction: 'View Blog',
                eventLabel: 'Analog Perceptionz'
                });
            break;
        case 'SlideShare-Card': 
            ga('send', {
                hitType: 'event',
                eventCategory: 'CardClick',
                eventAction: 'Slides',
                eventLabel: 'SlideShare'
                });
            break;
        case 'TechExposure-Card': 
            ga('send', {
                hitType: 'event',
                eventCategory: 'CardClick',
                eventAction: 'Tech Exposure',
                eventLabel: 'GitHub'
                });
            break;
        case 'SL2College-Card': 
            ga('send', {
                hitType: 'event',
                eventCategory: 'CardClick',
                eventAction: 'SL2College',
                eventLabel: 'SL2College'
                });
            break;
        case 'GSA-Card': 
            ga('send', {
                hitType: 'event',
                eventCategory: 'CardClick',
                eventAction: 'GSA',
                eventLabel: 'GSA'
                });
            break;
        case 'WCY2014-Card': 
            ga('send', {
                hitType: 'event',
                eventCategory: 'CardClick',
                eventAction: 'WCY2014',
                eventLabel: 'WCY2014'
                });
            break;
        case 'GoogleSearch-Footprint':
            ga('send', {
                hitType: 'event',
                eventCategory: 'FootprintClick',
                eventAction: 'GoogleSearch',
                eventLabel: 'GoogleSearch'
                });
            break;
        case 'Facebook-Footprint': 
            ga('send', {
                hitType: 'event',
                eventCategory: 'FootprintClick',
                eventAction: 'Facebook',
                eventLabel: 'Facebook'
                });
            break;
        case 'Twitter-Footprint': 
            ga('send', {
                hitType: 'event',
                eventCategory: 'FootprintClick',
                eventAction: 'Twitter',
                eventLabel: 'Twitter'
                });
            break;
        case 'LinkedIn-Footprint': 
            ga('send', {
                hitType: 'event',
                eventCategory: 'FootprintClick',
                eventAction: 'LinkedIn',
                eventLabel: 'LinkedIn'
                });
            break;
        case 'Github-Footprint': 
            ga('send', {
                hitType: 'event',
                eventCategory: 'FootprintClick',
                eventAction: 'GitHub',
                eventLabel: 'GitHub'
                });
            break;
        case 'Google+-Footprint': 
            ga('send', {
                hitType: 'event',
                eventCategory: 'FootprintClick',
                eventAction: 'Google+',
                eventLabel: 'Google+'
                });
            break;
        case 'SlideShare-Footprint':
            ga('send', {
                hitType: 'event',
                eventCategory: 'FootprintClick',
                eventAction: 'Slides',
                eventLabel: 'SlideShare'
                });
            break;
        case 'Youtube-Footprint': 
            ga('send', {
                hitType: 'event',
                eventCategory: 'ButtonClick',
                eventAction: 'Youtube',
                eventLabel: 'Youtube'
                });
            break;
        default: break;
    }
}