 
 const body = document.body

document.addEventListener("DOMContentLoaded", () => {
  // your code here
    const form = document.getElementById("create-task-form")
    const input = document.getElementById("new-task-description")
    const list = document.getElementById("tasks")
     
      function addtask(){
        if(input.value == ''){
          alert('please enter all the fields')
        }
        //create a list

        else{
             let dolists = document.createElement('li')
              dolists.innerText = input.value
              dolists.style.paddingTop= '20px'
              list.appendChild(dolists)

             //create a delete button
             const button = document.createElement('button')
            button.innerText ="Delete"
            dolists.appendChild(button)
           button.addEventListener('click',() => list.removeChild(dolists)); 
           
           //create an edit button
            const editbtn = document.createElement('button')
             editbtn.innerText='Edit'
             dolists.appendChild(editbtn)
             editbtn.addEventListener('click',()=> {
              const updatelist = prompt('Enter new task',dolists)
                if  (updatelist !=='' &&  updatelist.trim() !==''){
                   dolists.textContent = updatelist
                }

                //append the button so they do not dissapear
                 const buttons = document.createElement('div')
                 button.classname= 'buttoncontainer'
                   dolists.appendChild(buttons)
                  buttons.appendChild(button)
                  buttons.appendChild(editbtn)
             });
        }
      }
       

      function submission(event){
         event.preventDefault()
           
          if(input.value.trim()!==''){
            addtask();
            input.value='';
          }
      }

      form.addEventListener('submit', submission);

     

       

     

});
