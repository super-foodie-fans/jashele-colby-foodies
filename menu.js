class Dropdown {
    constructor(element) {
      
      this.element = element.querySelector(".dropdown");
  
      
      this.button = element.querySelector('.dropdown-button');
      

      this.content = element.querySelector('.dropdown-content');
      

      this.button.addEventListener('click', () => {
        this.toggleContent();
      })
    }
  
    toggleContent() {
      this.content.classList.toggle('dropdown-hidden');
      this.content.classList.toggle('dropdown-animation')
    }
  }

  let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));




