
// const title = document.querySelector('.input1')
// const detail = document.querySelector('.textArea')
// const notes = document.querySelector('.notes')
// let data = []

// function addNotes() {

    
//     if(title.value === '' || detail.value === ''){
//         alert('Fill both segments')
//     }else{
//         notes.innerHTML = ''
        
        
//         let obj = {
//             title : title.value,
//             detail : detail.value
//         }
    
//         data.push(obj)
    
//         data.map((ele) => {
    
//             notes.innerHTML += `
            
//                 <div class = "notes_child">
//                     <div class = "notes_heading">
//                         <h3>${ele.title}</h3>
//                     </div>
//                     <div class = "notes_detail">
//                         <p>${ele.detail}</p>
//                     </div>
//                 </div>
            
//             `
//         })
//     }


// }

const input = document.querySelector('.input1')
const textArea = document.querySelector('.textArea')
const notes = document.querySelector('.notes')
let data = []

function addNotes(){
    if(input.value === '' || textArea.value === ''){
        alert('Fill both areas')
    }else{
        notes.innerHTML = ''


        let obj = {
            title : input.value,
            detail : textArea.value
        }

        data.push(obj)

        data.map((ele) => {
            notes.innerHTML += `
            
                <div class = "notes_child">
                
                    <div class = "notes_heading">
                        <h3>${ele.title}</h3>
                    </div>
                    <div class = "notes_detail">
                        <p>${ele.detail}</p>
                    </div>
                
                </div>
            
            `
        })

    }

}