const basicColorModeBtn = document.getElementById('color-mode-btn');
const dropdownColorModeBtn = document.getElementById('dropdown-color-mode-btn');
const body = document.body;
let lightText = 'Dark Mode';
let darkText = 'Light Mode';
let currentMode = localStorage.getItem('colorMode');
let originalText;

// Set the initial mode and text content of the color mode button
if (currentMode === 'light') {
  body.classList.add('light-mode');
  originalText = darkText;
  basicColorModeBtn.textContent = darkText;
  dropdownColorModeBtn.textContent = darkText;
} else {
  originalText = lightText;
  basicColorModeBtn.textContent = lightText;
  dropdownColorModeBtn.textContent = lightText;
}

// Add event listener to color mode buttons
basicColorModeBtn.addEventListener('click', toggleColorMode);
dropdownColorModeBtn.addEventListener('click', toggleColorMode);

// Function to toggle the color mode
function toggleColorMode() {
  // Toggle the light-mode class on the body element
  body.classList.toggle('light-mode');

  // Update the text content of the color mode buttons
  if (body.classList.contains('light-mode')) {
    basicColorModeBtn.textContent = darkText;
    dropdownColorModeBtn.textContent = darkText;
  } else {
    basicColorModeBtn.textContent = lightText;
    dropdownColorModeBtn.textContent = lightText;
  }

  // Save the color mode preference in localStorage
  if (body.classList.contains('light-mode')) {
    localStorage.setItem('colorMode', 'light');
  } else {
    localStorage.setItem('colorMode', 'dark');
  }
}




//                    Click

const bars = document.querySelector('#click');

bars.addEventListener('click', () => {
  body.classList.toggle('show');
});
