const mod = document.querySelector('#toggleDark');
const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];

mod.addEventListener('click', () => {
    document.querySelector('.mainBox').classList.toggle('dark');
    document.querySelector('.bi-brightness-high-fill').classList.toggle('bi-moon');
}); 

setInterval(() => {
    let session = '';
    let date = new Date();
    let index = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let hour = 30 * hours + minutes / 2;
    let minute = 6 * minutes;
    let second = 6 * seconds;

    if(hours >= 12){
        session = 'PM';
    }else{
        session = 'AM';
    }

    if(hours > 12){
        hours = hours - 12;
    }

    document.querySelector('.med').innerHTML = session;
    document.querySelector('.date').innerHTML = week[index];
    document.querySelector('.hr').style.transform = `rotate(${hour}deg)`;
    document.querySelector('.min').style.transform = `rotate(${minute}deg)`;
    document.querySelector('.sec').style.transform = `rotate(${second}deg)`;


    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}, 1000);

const $sub = document.querySelector("#sub")

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '55aef8f261mshe3d9a247429798fp102692jsn6a573c5a8a85',
		'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com'
	}
};



fetch('https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8', options)
	.then(response => response.json())
	.then(data => mostrarDatos(data))
	.catch(err => console.error(err)); 

    const mostrarDatos = (data) => {
        console.log(data)
       $sub.innerHTML = JSON.stringify(data.countryNativeName)
    }