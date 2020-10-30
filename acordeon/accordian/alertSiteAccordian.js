
const accordians = [
  {
    title: "accordian1",
    body: " accordian 1 body"
  },
  {
    title: "accordian2",
    body: " accordian 2 body"
  }
];

( function(accordiansToDisplay){
  const accordianBase = document.getElementById("accordian");

  for(let index =0;index<accordiansToDisplay.length; index++) {
    const { title, body } = accordiansToDisplay[index];
    accordianBase.innerHTML += `
    <div id="${title}_title" class="accordian">
      <h4>${title}</h4>
      <div id="${title}_body" class="accordian__bodyHidden"  >
        ${body}
      </div>
    </div>
    `
  }


  // for(let index =0;index<accordiansToDisplay.length; index++) {
  //   const { title } = accordiansToDisplay[index];
  //   const currentAccordianTitle = document.getElementById(`
  //     ${title}_title`
  //   );
  //   currentAccordianTitle.addEventListener("click",function(event){
  //     const currentaAccordianBody = document.getElementById(
  //       `${title}_body`
  //     );
  //     console.log()
  //     if(currentaAccordianBody.className.indexOf("accordian__bodyDisplayd") === -1){
  //       // add class
  //       currentaAccordianBody.className = "accordian__bodyDisplayd"; 
  //     } else {
  //       //remove class
  //       currentaAccordianBody.className = "accordian__bodyHidden"; 
  //     }

  //   })
  // }
  
  document.body.addEventListener('click',function( event ){
    console.log(event);
    if(event.target.parentElement.id.indexOf("_title") !== -1) { 

      const accordianHiddenElement = event.target.parentElement.lastElementChild;
 
      if(accordianHiddenElement.className.indexOf("accordian__bodyDisplayed") === -1){
        // add class
        accordianHiddenElement.className = "accordian__bodyDisplayed"; 
      } else { 
        //remove class
        accordianHiddenElement.className = "accordian__bodyHidden"; 
      }

    }
  }, true)



})(accordians)