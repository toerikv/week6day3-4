 $('#createButton').on('click', function() {
    $('#comment').prepend(`
   <div id="container">
     <img src="imagen.jpg" alt="image">
     
     <div>    
     <p> ${$("#DisplayName").val()}    </p>
     <p>  ${$("#s").val()} </p>
     </div>

     <div class="edit"> EDIT</div>
     <div class="Delete"> DELETE </div>

   </div>
    `);
  });
  
  // Write your code here
   // $('#container').on('click','.toggleText', function() {
   //   let Ptext = $(this).next();
   //$(Ptext).toggleClass('noDisplay');
   //});


   $('#comment').on('click',".edit", function(){
      let Pedit = $(this).parent()[0];
      
     $(Pedit).append(`
      <div class="textContainer">
      <div class="toggleText"> 
          <input id="c" value= ${$("#s").val()} >
          <div id="createNewButton"> Submit </div>
      </div>
     
      <p class="noDisplay">Suprise! Here is some text.</p>
      </div>
      `);
     });
  $('#comment').on('click', "#createNewButton", function (){

    let InPutTag = $(this).prev()
    let NewValue = $(InPutTag).val()

    let startTag = $(this).parents()[2]
    let ConTag = $(startTag).children()[1]
    let Fintag = $(ConTag).children() [1]
    $(Fintag).text(NewValue)
   })

// Write your code here
    $('#container').on('click','.toggleText', function() {
    let Ptext = $(this).next();
    $(Ptext).toggleClass('noDisplay');
       });

   $('#comment').on('click',".Delete", function(){
    let Pdelete = $(this).parents()[0];
    $(Pdelete).remove();
    });
   