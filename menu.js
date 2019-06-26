class Dropdown {
    constructor(element) {
      
      // Assign this.element to the dropdown element
      this.element = element.querySelector(".dropdown");
  
      
      // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
      this.button = element.querySelector('.dropdown-button');
      
      // assign the reference to the ".dropdown-content" class found in the dropdown element
      this.content = element.querySelector('.dropdown-content');
      
      // Add a click handler to the button reference and call the toggleContent method.
      this.button.addEventListener('click', () => {
        this.toggleContent();
      })
    }
  
    toggleContent() {
      
      // Toggle the ".dropdown-hidden" class off and on
      this.content.classList.toggle('dropdown-hidden');
    }
  }
  
  

  let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));



  const toggleMenu = () => {
    menu.classList.toggle('menu--open')
  }
  
  const menu = document.querySelector('.menu');

  const menuButton = document.querySelector('.menu-button');

  const dropDownBut = document.querySelector('.dropdown-button')

