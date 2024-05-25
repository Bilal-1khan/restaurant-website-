// counter function
const counterData = document.querySelectorAll(".count")
let countSpeed= 50

counterData.forEach((curVal)=>{
    let targetCounts = curVal.dataset.count
    let initialCount = Number(curVal.innerText)

    let increementNum = Math.floor(targetCounts/countSpeed)

    const counterUpdate = ()=>{
        initialCount = initialCount + increementNum
        curVal.innerText = initialCount
        
        if(initialCount<targetCounts){
            setTimeout(()=>{counterUpdate()},50)
        }
    }
    counterUpdate()
})

//======================================================== //

// Reservation form submit

// const reservationForm = document.getElementById("resFormId")
// const reservationSubmitBtn = document.getElementById("resBtn")
// const reservationMsg = document.getElementById("resultRes")

// reservationForm.addEventListener("submit",function (e) {
//     e.preventDefault()
//      reservationValidation()
// })
// // reservation validation

// const reservationValidation = ()=>{
//     const userInputName=document.getElementById("resName")
//     const userInputEmail=document.getElementById("resEmail")

//     const userName = userInputName.value.trim()
//     const userEmail = userInputEmail.value.trim()

//     if (userName.length>=10) {
//         // console.log('user name must be 10 characters');
//         console.log('good to go');
//     }
//     // console.log(userName.length);
//     console.log(userEmail);
// }



// ===========================================//
// popup image function

document.querySelectorAll(".grid-section img").forEach(image=>{
    image.onclick=()=>{
        document.querySelector('.popupImage').style.display="block"
        document.querySelector('.popupImage img').src=image.getAttribute('src')
    }
})

document.querySelector('.popupImage span').onclick=()=>{
    document.querySelector('.popupImage').style.display="none"
}