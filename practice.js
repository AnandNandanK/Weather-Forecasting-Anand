var API="427aea3405b2b0b86ebb7304d212f78b";


async function callapi() {
    var city="delhi"
    let data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`);
    let convert=await data.json();

    console.log(convert.name);
}

callapi();
