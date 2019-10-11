let event_field = document.querySelector("#event_field");
let calendar_dropdown = document.querySelector("#calendar_dropdown");
let accid_switch = document.querySelector("#accid_switch");
let addEvents_btn = document.querySelector("#addEvents_btn");
let submitEvents_btn = document.querySelector("#submitEvents_btn");

let table_body = document.querySelector("#table_body");
let evento_regex = new RegExp('[A-Za-z]');

let addEvent = (evento, accid ) =>{
    let new_row = document.createElement("tr");
    let datetime = new Date();

    new_row.className="table_active"
    new_row.innerHTML = `<th scope='row'>${evento}</th>
    <td>${datetime.toLocaleString}</td>
    <td>${accid}</td>
    `;

    table_body.appendChild(new_row);
    
}

let parseAccidSwitch = (value)=>{
    if(value){
        return "Tuvo accidente"
    }
    return "No tuvo accidente"
}


submitEvents_btn.addEventListener("click", ()=>{
    let event = event_field.value.split(",");
    let calendar = calendar_dropdown.value;
    let accid = parseAccidSwitch(accid_switch.checked);

    if(event_regex.test(event)){
        addStudent(event, calendar, accid);
    } else {
        alert("Formato del evento no valido");
    }
})

event_field.addEventListener("keyup", (event)=>{
    let keyCode = event.keyCode;
    let event = event_field.value;

    if(keyCode == 13){
        submitEvents_btn.click();
    }

    if(event_regex.test(carnet)){
        submitEvents_btn.disabled = false;
    } else {
        submitEvents_btn.disabled = true;
    }
})