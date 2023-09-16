setInterval(()=>{
    d = new Date();
    hr_time = d.getHours();
    min_time = d.getMinutes();
    sec_time = d.getSeconds();
    hr_rotation = 30*hr_time + min_time/2;
    min_rotation = 6*min_time;
    sec_rotation = 6*sec_time;

    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    seconds.style.transform = `rotate(${sec_rotation}deg)`;
},1000);