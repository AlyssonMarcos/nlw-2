const removeButton = document.querySelector('#remove-time');
removeButton.addEventListener('click', removeField);

function removeField() {
    const containerScheduleIntems = document.querySelector('#schedule-items');
    const AllscheduleItems = document.querySelectorAll('.schedule-item');
    const lastPosition = AllscheduleItems.length - 1;

    if (AllscheduleItems.length === 2){
        removeButton.classList.add('hide');
        containerScheduleIntems.removeChild(AllscheduleItems[lastPosition]);
    } else if(AllscheduleItems.length > 2){
        containerScheduleIntems.removeChild(AllscheduleItems[lastPosition]);
    };

}