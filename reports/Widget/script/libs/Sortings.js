function doctorsNameSort(doctors, type) {
    if (!isString(type)) {
        console.log("Parameter is not string");
    } else {
        if (isArray(doctors) && !isEmpty(doctors)) {
            var compareFirstName = function(personA, personB) {
                return personA.first_name.localeCompare(personB.first_name);
            }

            var compareLastName = function(personA, personB) {
                return personA.last_name.localeCompare(personB.last_name);
            }

            var compareMiddleName = function(personA, personB) {
                return personA.middle_name.localeCompare(personB.middle_name);
            }

            switch (type) {
                case "Имя":
                    return doctors.sort(compareFirstName);
                    break;
                case "Фамилия":
                    return doctors.sort(compareLastName);
                    break;
                case "Отчество":
                    return doctors.sort(compareMiddleName);
                    break;
                default:
                    console.log("Wrong sort parameter");
            }
        } else {
            console.log("Invalid array, or empty");
        }
    }
}
