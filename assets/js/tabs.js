function showTab(event, tabId, tabContainerId) {
    // Get the container element by its ID
    const tabContainer = document.getElementById(tabContainerId);

    // Scope the selection of tabs and contents to the specific container
    const tabs = tabContainer.querySelectorAll('.tab');
    const contents = tabContainer.querySelectorAll('.tab-content');

    // Remove 'active' class from all tabs and contents within the container
    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));

    // Add 'active' class to the clicked tab and corresponding content
    event.target.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}