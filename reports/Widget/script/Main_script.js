var 
	answer="",
    urin="https://er.em70.ru/api/schedule/get",
    prms = { lpu:"0006",
			 status:1
	},
	b= {};

ajax("GET", urin, prms, parsing);

function parsing() {
	b = JSON.parse(answer);
	console.log(b.schedule.lpu[0].doctors[5].first_name);
}


