let display=document.getElementById('display');
let submit=document.getElementById('submit');
let nameInput=document.getElementById('name-input');
let courseInput=document.getElementById('course-input');
let yearInput=document.getElementById('year-input');

submit.addEventListener('click',function(){
    let card=document.createElement("div");
    let name=document.createElement('p');
    let course=document.createElement('p');
    let year=document.createElement('p');
    let removeButton=document.createElement('button');
    removeButton.textContent='remove';
    display.appendChild(card);
    name.textContent="name: "+nameInput.value;
    card.appendChild(name);
    course.textContent="course: "+courseInput.value;
    card.append(course);
    year.textContent="year: "+yearInput.value;
    card.append(year);
    card.appendChild(removeButton);
    removeButton.addEventListener('click', function(){
        card.remove();
    });
    nameInput.value = '';
    yearInput.value = '';
    courseInput.value = '';
});
