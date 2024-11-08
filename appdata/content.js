// Define the delay in milliseconds after the page loads
const delayAfterPageLoad = 1000; // Adjust this delay as needed

// Function to click elements with the "map-layer-selected" class
function clickMapLayerSelected() {
  // List of class selectors to check
  const layerSelectors = [
    ".map-layer.analytics-map-layer--skigebiete",
    ".map-layer.analytics-map-layer--langlaufen",
    ".map-layer.analytics-map-layer--unterkuenfte",
    ".map-layer.analytics-map-layer--sommerinfos",
    ".map-layer.analytics-map-layer--wandertouren",
    ".map-layer.analytics-map-layer--wintertouren",
    ".map-layer.analytics-map-layer--biketouren",
    ".map-layer.analytics-map-layer--lauftouren",
    ".map-layer.analytics-map-layer--badeseen"
  ];

  // Loop through each selector and click the element if it contains "map-layer-selected"
  layerSelectors.forEach(selector => {
    const element = document.querySelector(selector);
    if (element && element.classList.contains("map-layer-selected")) {
      element.click(); // Click the element if it has the "map-layer-selected" class
      console.log(`Clicked on element with selector: ${selector}`);
    }
  });
}

// Function to click the button containing class "box-header"
function clickBoxHeader() {
  const boxHeaderButton = document.querySelector(".box-header");
  if (boxHeaderButton) {
    boxHeaderButton.click(); // Click the box-header button
    console.log("Clicked the box-header button.");
  } else {
    console.log("Box-header button not found.");
  }
}

// Function to click the fullscreen button
function clickFullscreenButton() {
  const fullscreenButton = document.querySelector(".leaflet-control-fullscreen-button.leaflet-bar-part.analytics-map-action-fullscreen");
  if (fullscreenButton) {
    fullscreenButton.click(); // Click the fullscreen button
    console.log("Clicked the fullscreen button.");
  } else {
    console.log("Fullscreen button not found.");
  }
}

// Listen for clicks on the .icon-map button
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('icon-map')) {
    console.log("Map button clicked, waiting for page load...");

    // Wait until the new page is loaded
    setTimeout(() => {
      // Click on elements with the "map-layer-selected" class
      clickMapLayerSelected();

      // Click the box-header button
      clickBoxHeader();

      // Click the fullscreen button
      clickFullscreenButton();

      // Optionally, you can still hide the fullscreen-content-container if needed
      hideElement(".fullscreen-content-container");

      console.log("Clicked on 'map-layer-selected' elements, box-header button, and fullscreen button.");
    }, delayAfterPageLoad);
  }
});

// Function to hide elements with the specified selector
function hideElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.style.display = 'none';
    console.log(`Hid element with selector: ${selector}`);
  } else {
    console.log(`Element with selector ${selector} not found.`);
  }
}
