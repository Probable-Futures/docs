const editor = ace.edit("map-code-editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");

const editableCode = `
  async function initializeMap() {
    const htmlTemplate = await ProbableFuturesMapsHTMLGenerator.generateEmbedMap({
      datasetId: 40101,
      viewState: { zoom: 4 },
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
    eval(newCode);
    initializeMap();
  } catch (error) {
    console.error("Error executing the new code:", error);
  }
}

window.onload = async function () {
  if (typeof ProbableFuturesMapsHTMLGenerator === "undefined") {
    console.error("ProbableFuturesMapsHTMLGenerator is not loaded. Check the script URL.");
    return;
  }

  const htmlTemplate = await ProbableFuturesMapsHTMLGenerator.generateEmbedMap({
    datasetId: 40101,
    viewState: { zoom: 4 },
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
};

function changeScenario(degree) {
  const iframe = document.querySelector("#map-container iframe");
  if (iframe) {
    iframe.contentWindow.postMessage(
      { action: "onDegreeChanged", degree },
      "*"
    );
  }
}