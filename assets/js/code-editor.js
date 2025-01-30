let getTokenEditor;
let callTheApiEditor;

const getAccessTokenJs = `
try {
    // The username and password below are only meant to be used for testing purposes. 
    // Make sure to request new ones if you wanna try it in your own apps
    const username = 'yb6Pt1TVIpjlYpUAauc7ikfUw6o3Y3EG';
    const password = 'GaBwRV_y-ueMM6sX-_V1P8UpmVPDEuSsjly8NoRHBFppaAyJIhzSP3L0adT62zmg';
    
    const url = 'https://graphql.probablefutures.org/auth/token';
    // Encode username and password
    const encodedCredentials = btoa(username + ':' + password);
    const headers = new Headers();
    headers.set('Authorization', 'Basic ' +
    btoa(username + ':' + password));
        
    const response = await fetch(url, { method: 'GET', headers: headers });
    const jsonResponse = await response.text();
    console.log(jsonResponse);
    
    return jsonResponse;
}
catch (error){
    console.error('There was a problem with your fetch operation:', error);
}
`;

const callTheApiJsCode = `
try {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer {ACCESS_TOKEN_HERE}");
    myHeaders.append("Content-Type", "application/json");

    const graphql = JSON.stringify({
        query: \`mutation {
            getDatasetStatistics(
                input: {
                    country: "us", 
                    address: "121 East 48th Street, Apt. 123, New York, NY 10001", 
                    warmingScenario: "1.5", 
                    datasetId: null
                }
            ) {
                datasetStatisticsResponses {
                    datasetId
                    highValue
                    lowValue
                    midValue
                    name
                    unit
                    warmingScenario
                    longitude
                    latitude
                }
            }
        }\`,
        variables: {}
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: graphql,
    };

    const response = await fetch("https://graphql.probablefutures.org/graphql", requestOptions);
    const result = await response.text();
    console.log(result);
    return result;
} catch (error) {
    console.log('error', error);
    throw error;
}
`;

const editors = [
    {
        id: "getTokenEditor",
        editor: null,
        jsCode: getAccessTokenJs,
        result: ""
    },
    {
        id: "callTheApiEditor",
        editor: null,
        jsCode: callTheApiJsCode,
        result: ""
    }
];

const lang = "javascript";

async function runCode(editorId, isJsonOutput) {
    const editor = getEditor(editorId);

    const code = editor.getValue();
    const output = document.getElementById(`output_${editorId}`);
    output.textContent = "";

    if (lang === 'javascript') {
        try {
            let logs = [];
            const originalLog = console.log;
            console.log = (...args) => {
                logs.push(args.join(' '));
                if(isJsonOutput) {
                    const formatted = JSON.stringify(JSON.parse(logs), null, 4);
                    output.textContent = formatted;
                    setEditorResult(editorId, formatted);
                }
                else {
                    const result = logs.join('\n');
                    output.textContent = result;
                    setEditorResult(editorId, result);
                }
                // setTimeout(() => {
                    // checkContentHeight(editorId);
                // }, 100);
            };

            // Wrap the code in an async function and await it
            const wrappedCode = `
                (async function() {
                    try {
                        ${code}
                    } catch (err) {
                        console.log("Error:", err.message);
                    }
                })()
            `;
            
            await eval(wrappedCode);
            console.log = originalLog;
        } catch (err) {
            output.textContent = `Error: ${err.message}`;
        }
    } else {
        output.textContent = `Language not supported!`;
    }
}

function initEditor(editorId) {
    const editor = ace.edit(editorId);
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode(`ace/mode/${lang}`);
    editor.setValue(editors.find(e => e.id === editorId).jsCode);
    setEditor(editorId, editor);
    return editor;
}

function getEditor(editorId) {
    return editors.find(e => e.id === editorId).editor;
}

function setEditor(editorId, editor) {
    const index = editors.findIndex(e => e.id === editorId);
    if(index !== -1) {
        editors[index].editor = editor;
    }
}

function setEditorResult(editorId, result) {
    const index = editors.findIndex(e => e.id === editorId);
    if(index !== -1) {
        editors[index].result = result;
    }
}

function checkContentHeight(editorId) {
    const outputDiv = document.getElementById(`output_${editorId}`);
    const showMoreBtn = document.getElementById(`showMoreBtn_${editorId}`);

    if (outputDiv.scrollHeight > outputDiv.clientHeight) {
      showMoreBtn.style.display = "block"; // Show button if content overflows
    } else {
      showMoreBtn.style.display = "none"; 
    }
  }

// function expand(editorId) {
//     const outputDiv = document.getElementById(`output_${editorId}`);
//     const showMoreBtn = document.getElementById(`showMoreBtn_${editorId}`);

//     if (outputDiv.classList.contains("expanded")) {
//         outputDiv.classList.remove("expanded");
//         showMoreBtn.textContent = "Show More";
//     } else {
//         outputDiv.classList.add("expanded");
//         showMoreBtn.textContent = "Show Less";
//     }
// }

initEditor('callTheApiEditor');
initEditor('getTokenEditor');
