window.onload = async function () {
  if (typeof PFMapsSimplified === "undefined") {
    console.error("PFMapsSimplified is not loaded. Check the script URL.");
    return;
  }

  const htmlTemplate = await PFMapsSimplified.generateEmbedMap({
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