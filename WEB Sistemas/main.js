document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const moduleContents = document.querySelectorAll('.module-content');
  
    function showModule(moduleNumber) {
      // Hide all modules
      moduleContents.forEach(content => {
        content.classList.remove('active');
      });
  
      // Remove active class from all buttons
      navButtons.forEach(btn => {
        btn.classList.remove('active');
      });
  
      // Show selected module and activate button
      const selectedModule = document.getElementById(`module${moduleNumber}`);
      const selectedButton = document.querySelector(`[data-module="${moduleNumber}"]`);
      
      selectedModule.classList.add('active');
      selectedButton.classList.add('active');
    }
  
    // Add click event listeners to navigation buttons
    navButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const moduleNumber = e.target.getAttribute('data-module');
        showModule(moduleNumber);
      });
    });
  });