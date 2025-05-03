const input = document.querySelector('.input1')
const textArea = document.querySelector('.textArea')
const notes = document.querySelector('.notes')

let arr = []

function addNotes() {

    let obj = {
        inputVal : input.value,
        textValue : textArea.value 
    }
    
    arr.push(obj)
    
  
    input.value = ''
    textArea.value = ''
    notes.innerHTML = ''
    
    arr.map((item) => {
        return (
            notes.innerHTML +=
            `
                <div class = "notes_child">
                
                    <div class = "notes_heading">${item.inputVal}</div>
                    <div class = "notes_detail">${item.textValue}</div>

                </div>
            
                
            `
        )
            
    })
        
}