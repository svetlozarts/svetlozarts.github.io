const predmet8a = document.querySelector('.predmet8a');
const predmet8b = document.querySelector('.predmet8b');
const predmet8v = document.querySelector('.predmet8v');
const predmet8g = document.querySelector('.predmet8g');
const predmet8d = document.querySelector('.predmet8d');
const predmet8e = document.querySelector('.predmet8e');
const predmet9a = document.querySelector('.predmet9a');
const predmet9b = document.querySelector('.predmet9b');
const predmet9v = document.querySelector('.predmet9v');
const predmet9g = document.querySelector('.predmet9g');
const predmet9d = document.querySelector('.predmet9d');
const predmet9e = document.querySelector('.predmet9e');
const predmet10a = document.querySelector('.predmet10a');
const predmet10b = document.querySelector('.predmet10b');
const predmet10v = document.querySelector('.predmet10v');
const predmet10g = document.querySelector('.predmet10g');
const predmet10d = document.querySelector('.predmet10d');
const predmet10e = document.querySelector('.predmet10e');
const predmet11a = document.querySelector('.predmet11a');
const predmet11b = document.querySelector('.predmet11b');
const predmet11v = document.querySelector('.predmet11v');
const predmet11g = document.querySelector('.predmet11g');
const predmet11d = document.querySelector('.predmet11d');
const predmet11e = document.querySelector('.predmet11e');
const predmet12a = document.querySelector('.predmet12a');
const predmet12b = document.querySelector('.predmet12b');
const predmet12v = document.querySelector('.predmet12v');
const predmet12g = document.querySelector('.predmet12g');
const predmet12d = document.querySelector('.predmet12d');
const predmet12e = document.querySelector('.predmet12e');

let day = new Date().getDay();

var out = [];
var product;

fetch("programa.json")
.then(function(response){
	return response.json();
})
.then(function(products){	
	for(product of products){
		out.push(product)
	}

	setInterval(() => {

		if (predmet >= 6) {
		 	predmet = 6;
		}

        predmet8a.innerText = Object.values(out[predmet])[day];
		predmet8b.innerText = Object.values(out[predmet+(7*1)])[day];
		predmet8v.innerText = Object.values(out[predmet+(7*2)])[day];
		predmet8g.innerText = Object.values(out[predmet+(7*3)])[day];
		predmet8d.innerText = Object.values(out[predmet+(7*4)])[day];
		predmet8e.innerText = Object.values(out[predmet+(7*5)])[day];
		predmet9a.innerText = Object.values(out[predmet+(7*6)])[day];
		predmet9b.innerText = Object.values(out[predmet+(7*7)])[day];
		predmet9v.innerText = Object.values(out[predmet+(7*8)])[day];
		predmet9g.innerText = Object.values(out[predmet+(7*9)])[day];
		predmet9d.innerText = Object.values(out[predmet+(7*10)])[day];
		predmet9e.innerText = Object.values(out[predmet+(7*11)])[day];
		predmet10a.innerText = Object.values(out[predmet+(7*12)])[day];
		predmet10b.innerText = Object.values(out[predmet+(7*13)])[day];
		predmet10v.innerText = Object.values(out[predmet+(7*14)])[day];
		predmet10g.innerText = Object.values(out[predmet+(7*15)])[day];
		predmet10d.innerText = Object.values(out[predmet+(7*16)])[day];
		predmet10e.innerText = Object.values(out[predmet+(7*17)])[day];
		predmet11a.innerText = Object.values(out[predmet+(7*18)])[day];
		predmet11b.innerText = Object.values(out[predmet+(7*19)])[day];
		predmet11v.innerText = Object.values(out[predmet+(7*20)])[day];
		predmet11g.innerText = Object.values(out[predmet+(7*21)])[day];
		predmet11d.innerText = Object.values(out[predmet+(7*22)])[day];
		predmet11e.innerText = Object.values(out[predmet+(7*23)])[day];
		predmet12a.innerText = Object.values(out[predmet+(7*24)])[day];
		predmet12b.innerText = Object.values(out[predmet+(7*25)])[day];
		predmet12v.innerText = Object.values(out[predmet+(7*26)])[day];
		predmet12g.innerText = Object.values(out[predmet+(7*27)])[day];
		predmet12d.innerText = Object.values(out[predmet+(7*28)])[day];
		predmet12e.innerText = Object.values(out[predmet+(7*29)])[day];
    }, 1000);
});
