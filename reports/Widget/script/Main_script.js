var 
	uri = "https://er.em70.ru/api/schedule/get",
    prms = { lpu:"0003", //временный объект с передаваемыми параметрами
			 status:1
	},
	returned_obj = {}, //ответ, парсированный в большой объект
	d1 = new Date();


ajax("GET", uri, prms, getDoctorsNames);

if (!isEmpty(returned_obj)) {
	getDoctorsNames();
}

function getDoctorsNames(returned_obj) {
	var doctors = [],
		i,
		result = [];
	for (i=0; i < returned_obj.schedule.lpu.length; i++) {
		doctors = returned_obj.schedule.lpu[i].doctors;
	}
		result = doctors;
		propertySort(result, "first_name");
		for (i=0; i < result.length; i++) {
			console.log(result[i].first_name + " " + result[i].last_name + " " + result[i].middle_name + "/n");
		}
}
