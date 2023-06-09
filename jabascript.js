const taskValue=document.getElementsByClassName('task_value')[0]
const taskSubmit=document.getElementsByClassName('task_submit')[0]
const taskList=document.getElementsByClassName('task_list')[0]

const addtasks=(task)=>{
    const listItem=document.createElement('li')
    const showItem=taskList.appendChild(listItem)
    showItem.innerHTML=task;

    const deletebutton=document.createElement('button')
    deletebutton.innerHTML="Á‚·";
    listItem.appendChild(deletebutton)

    deletebutton.addEventListener('click',evt=>{
        evt.preventDefault();
        deleteTask(evt.target);
    });
};
const deleteTask=(deleteButton)=>{
    const chosentask=deleteButton.parentNode;
    taskList.removeChild(chosentask);
};
taskSubmit.addEventListener('click',evt=>{
    evt.preventDefault();
    const task=taskValue.value;
    addtasks(task);
    taskValue.value='';
});