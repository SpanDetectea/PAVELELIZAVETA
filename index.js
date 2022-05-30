var date = new Date(2022, 8, 3, 16).getTime();
// 1.01.2011, 02:03:04.567

document.addEventListener('DOMContentLoaded', function () {
    var now = new Date().getTime();
    let i = date - now;
    let days = Math.floor((i) / (1000 * 60 * 60 * 24));
    // console.log(days);
    let hours = Math.floor((i - 1000 * 60 * 60 * 24 * days) / (1000 * 60 * 60));
    let minutes = Math.floor((i - 1000 * 60 * 60 * 24 * days - 1000 * 60 * 60 * hours) / (1000 * 60));
    let seconds = Math.floor((i - 1000 * 60 * 60 * 24 * days - 1000 * 60 * 60 * hours - 1000 * 60 * minutes) / 1000);
    let timer = document.createElement('div');
    timer.classList.add('deadline');
    // timer.innerHTML = `<div>Дней ${days} </div><div>Часов ${hours} </div><div>Минут ${minutes} </div><div>Секунд ${seconds} </div>`;
    timer.innerHTML = `<div class="copy">
    <div class="copy__wrapper">
        <div>Дней</div>
        <div>${days}</div>
    </div>
    <div class="copy__wrapper">
        <div>Часов</div>
        <div>${hours}</div>
    </div>
    <div class="copy__wrapper">
        <div>Минут</div>
        <div>${minutes}</div>
    </div>
    <div class="copy__wrapper">
        <div>Секунд</div>
        <div>${seconds}</div>
    </div>
</div>`;
    document.querySelector('.timer').append(timer);

    let timerId = setInterval(() => {
        var now = new Date().getTime();
        let i = date - now;
        let days = Math.floor((i) / (1000 * 60 * 60 * 24));
        let hours = Math.floor((i - 1000 * 60 * 60 * 24 * days) / (1000 * 60 * 60));
        let minutes = Math.floor((i - 1000 * 60 * 60 * 24 * days - 1000 * 60 * 60 * hours) / (1000 * 60));
        let seconds = Math.floor((i - 1000 * 60 * 60 * 24 * days - 1000 * 60 * 60 * hours - 1000 * 60 * minutes) / 1000);
        let timer = document.querySelector('.deadline');
        // timer.innerHTML = `<div>Дней ${days} </div><div>Часов ${hours} </div><div>Минут ${minutes} </div><div>Секунд ${seconds} </div>`;
        timer.innerHTML = `<div class="copy">
        <div class="copy__wrapper">
            <div>Дней</div>
            <div>${days}</div>
        </div>
        <div class="copy__wrapper">
            <div>Часов</div>
            <div>${hours}</div>
        </div>
        <div class="copy__wrapper">
            <div>Минут</div>
            <div>${minutes}</div>
        </div>
        <div class="copy__wrapper">
            <div>Секунд</div>
            <div>${seconds}</div>
        </div>
    </div>`;
    }, 1000);
    ymaps.ready(function () {
        var myMap = new ymaps.Map("YMapsID", {
            center: [61.79494768091105, 34.37435044093151],
            zoom: 15,
        });
        var myPlacemark = new ymaps.Placemark([61.79494768091105, 34.37435044093151], {
            content: 'ЗАГС',
            balloonContent: 'ЗАГС',
        });
        myMap.geoObjects.add(myPlacemark);
    });
    ymaps.ready(function () {
        var myMap = new ymaps.Map("YMapsID2", {
            center: [61.78648322572645, 34.39180417333605],
            zoom: 15,
        });
        var myPlacemark = new ymaps.Placemark([61.78648322572645, 34.39180417333605], {
            content: 'Карелия',
            balloonContent: 'Карелия',
        });
        myMap.geoObjects.add(myPlacemark);
    });
    let choice = document.querySelector('.choice3');
    let foot = choice.querySelectorAll('.foot');
    foot.forEach((items) => {
        items.addEventListener('click', (item) => {
            foot.forEach((elem) => {
                elem.classList.remove('green');
            });
            item.target.classList.add('green');
        })
    })
    let choice1 = document.querySelector('.choice1');
    let Presence = choice1.querySelectorAll('.Presence');
    Presence.forEach((items) => {
        items.addEventListener('click', (item) => {
            Presence.forEach((elem) => {
                elem.classList.remove('green');
            });
            item.target.classList.add('green');
        })
    });
    let choice2 = document.querySelector('.choice2');
    let drink = choice2.querySelectorAll('.drink');
    drink.forEach(items => {
        items.addEventListener('click', el => {
            el.target.classList.toggle('green');
        })
    });
    window.addEventListener('scroll', e => {
        if (document.documentElement.scrollTop >= 500) {
            document.querySelector('.heart').classList.add('heartan');
        }
    });
    // let audio = document.querySelector('audio');

    // document.onscroll = function(){audio.play()};
    // let audio = document.querySelector('audio');
    // console.log(audio.value);
    // let submit = document.querySelector('input[type="submit"]');
    // console.log(submit);
    // submit.addEventListener('click', () => {
    //     // console.log(e);
    //     let form = {};
    //     let drinks = [];
    //     let name = document.querySelectorAll('input[type="text"]');
    //     name.forEach((item, pos) => {
    //         if (pos == 0) {
    //             form.fname = item.value;
    //         } else {
    //             form.sname = item.value;
    //         }
    //     });
    //     let presence = document.getElementsByName('Presence');
    //     for (i = 0; i < presence.length; i++) {
    //         if (presence[i].checked) {
    //             form.presence = presence[i].value;
    //         }
    //     };
    //     let foot = document.getElementsByName('foot');
    //     for (i = 0; i < foot.length; i++) {
    //         if (foot[i].checked) {
    //             form.foot = foot[i].value;
    //         }
    //     };
    //     let drink = document.getElementsByName('drink');
    //     for (i = 0; i < drink.length; i++) {
    //         if (drink[i].checked) {
    //             drinks.push(drink[i].value);
    //         }
    //     };
    //     form.drink = drinks;
    //     // console.log(form);
    //     fetch('http://pavelelizaveta.ua', {
    //         method: 'POST',
    //         header: {
    //             'Content-Type': 'application/json',
    //             "Accept":"application/json"
    //         },
    //         // mode: 'no-cors',
    //         body: JSON.stringify(form)
    //     })
    //         .then(response => response.text())
    //         .then(response => {
    //             // console.log('dsadsa');
    //             console.log(response);
    //             // setmessageSend(true);
    //         })
    // })
    // document.querySelector('form').onsubmit = (e) => {
    //     e.preventDefault();
    // }
});