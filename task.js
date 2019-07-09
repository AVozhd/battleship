/*
Akvelon Ivanovo10:22 AM
http://hr.gs/73696d

Akvelon Ivanovo11:00 AM
Frontend experience
* needs more structure
* focus on React and Redux mostly
* ask if it's required to describe the previous project

Akvelon Ivanovo11:02 AM
CSS Flex
* memorize flex related styles
Pub/Sub
* investigate Pub/Sub (Observer)
* try implementing it

Akvelon Ivanovo11:03 AM
Pub/Sub
* investigate Pub/Sub (Observer)
* try implementing it
* ask the permission to google

Akvelon Ivanovo11:05 AM
React Form
* http://hr.gs/akvelon-frontend-react-preparation
* try solving at home

 */

/**
 * Pub/Sub
 * Create a publish/subscribe system
 **/

/*
interface Obserber {
    dispatchEvent(eventName: string, event: Event): void;
    addEventListener(eventName: string, callback: () => void)
}
*/

class Obserber {
  dispatchEvent() {}

  addEventListener() {}
}

const pubsub = new Obserber();

// Test 1
pubsub.addEventListener("onModuleLoad", () => {
  console.log("onModuleLoad - 1");
});

pubsub.addEventListener("onModuleLoad", () => {
  console.log("onModuleLoad - 2");
});

pubsub.addEventListener("onModuleLoad", () => {
  console.log("onModuleLoad - 3");
});

pubsub.dispatchEvent("onModuleLoad", new Event());

// Test 2
pubsub.addEventListener("onSettingsOpen", () => {
  console.log("onSettingsOpen - 1");
});

pubsub.addEventListener("onSettingsOpen", () => {
  console.log("onSettingsOpen - 2");
});

pubsub.addEventListener("onSettingsOpen", () => {
  console.log("onSettingsOpen - 3");
});

pubsub.dispatchEvent("onSettingsOpen", new Event());
