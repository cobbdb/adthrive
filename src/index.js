import googletag from 'gpt';
import generateSlots from './slots/generate';

// Bootstrap defaults to make things pretty.
import 'bootstrap/dist/css/bootstrap.min.css';
// App specific styles.
import './css/index.css';

// Configure and enable the publisher service.
googletag.pubads().setCentering(true);
googletag.pubads().collapseEmptyDivs();
googletag.pubads().setTargeting('siteId', 'test');
googletag.pubads().enableSingleRequest();
googletag.enableServices();

// Generate the ad slots in the page.
generateSlots();

/**
 * Fire off the ad call. Because we are using SRM, all the midpage
 * positions will be included with this ad call for the header.
 */
googletag.display('at-ad-header');
