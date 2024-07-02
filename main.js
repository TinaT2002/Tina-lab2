 document.addEventListener('DOMContentLoaded', () => {
     const sections = document.querySelectorAll('section');
            const links = document.querySelectorAll('nav ul li a');

function changeLinkState() {
  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

  links.forEach((link) => link.classList.remove('active'));

  // add the active class if within visible height of the element
  if (scrollY - sections[index].offsetHeight <
        sections[index].offsetTop) {
    links[index].classList.add('active');
  }
}


            links.forEach(function(el){

                el.addEventListener('click',function(){
                      links.forEach(function(el1){
                           console.log(el1)
                        el1.classList.remove("active")
                          })
                      this.classList.add("active")
                })
            })

            changeLinkState();
window.addEventListener('scroll', changeLinkState);
        });



