const editor = ace.edit("map-code-editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");

const editableCode = `
  async function initializeMap() {
    const htmlTemplate = await ProbableFuturesMapsHTMLGenerator.generateEmbedMap({
      datasetId: 40104,
      viewState: { zoom: 4, latitude: 3.8, longitude: -70.4},
      scenario: 2,
    });

    // Create an iframe
    const iframe = document.createElement("iframe");
    iframe.style.width = "100%";
    iframe.style.height = "600px";
    iframe.style.border = "none";
    document.getElementById("map-container").appendChild(iframe);

    // Write the generated HTML template inside the iframe
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(htmlTemplate);
    iframeDoc.close();
  }
`;

editor.setValue(editableCode.trim());

function saveAndRunCode() {
  const newCode = editor.getValue();
  document.getElementById("map-container").innerHTML = "";

  try {
    const scenarioMatch = newCode.match(/scenario:\s*([\d.]+)/);
    let scenarioValue = scenarioMatch ? parseFloat(scenarioMatch[1]) : null;

    eval(newCode);
    initializeMap();

    document.querySelectorAll(".change-scenario-button").forEach(button => {
      button.classList.remove("selected-scenario");
    });

    // Find and add "active" class to the button with the matching scenario value
    if (scenarioValue !== null) {
      const matchingButton = [...document.querySelectorAll(".change-scenario-button")]
        .find(button => button.textContent.includes(`${scenarioValue}°C`));

      if (matchingButton) {
        matchingButton.classList.add("selected-scenario");
      }
    }
  } catch (error) {
    console.error("Error executing the new code:", error);
  }
}

async function generateSimpleMap() { 
  const htmlTemplate = await ProbableFuturesMapsHTMLGenerator.generateEmbedMap({
    datasetId: 40104,
    viewState: { zoom: 4, latitude: 3.8, longitude: -70.4},
    scenario: 2,
  });

  // Create an iframe
  const iframe = document.createElement("iframe");
  iframe.style.width = "100%";
  iframe.style.height = "600px";
  iframe.style.border = "none";
  document.getElementById("map-container").appendChild(iframe);

  // Write the generated HTML template inside the iframe
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  iframeDoc.open();
  iframeDoc.write(htmlTemplate);
  iframeDoc.close();
}

async function generateCompareMap() { 
  const htmlTemplate = await ProbableFuturesMapsHTMLGenerator.generateEmbedMap({
    datasetId: 40702,
    viewState: { zoom: 4, latitude: 3.8, longitude: -70.4},
    compare: {
      scenarioBefore: 1,
      scenarioAfter: 3,
    },
  });

  // Create an iframe
  const iframe = document.createElement("iframe");
  iframe.style.width = "100%";
  iframe.style.height = "600px";
  iframe.style.border = "none";
  document.getElementById("compare-map-container").appendChild(iframe);

  // Write the generated HTML template inside the iframe
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  iframeDoc.open();
  iframeDoc.write(htmlTemplate);
  iframeDoc.close();
}

window.onload = async function () {
  if (typeof ProbableFuturesMapsHTMLGenerator === "undefined") {
    console.error("ProbableFuturesMapsHTMLGenerator is not loaded. Check the script URL.");
    return;
  }

  generateSimpleMap();
  generateCompareMap();
};

function changeScenario(event, degree) {
  const iframe = document.querySelector("#map-container iframe");
  
  document.querySelectorAll(".change-scenario-button").forEach(button => {
    button.classList.remove("selected-scenario");
  });

  event.target.classList.add("selected-scenario");

  if (iframe) {
    iframe.contentWindow.postMessage(
      { action: "onDegreeChanged", degree },
      "*"
    );
  }
}