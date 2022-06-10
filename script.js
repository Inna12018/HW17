// Данное задание не обязательно для выполнения

// Задание
// Создать объект "студент" и проанализировать его табель. Задача должна быть реализована на языке javascript, без использования фреймворков и сторонник библиотек (типа Jquery).

// Технические требования:

// Создать пустой объект student, с полями name и lastName.
// Спросить у пользователя имя и фамилию студента, полученные значения записать в соответствующие поля объекта.
// В цикле спрашивать у пользователя название предмета и оценку по нему. Если пользователь нажмет Cancel при n-вопросе о названии предмета, закончить цикл. Записать оценки по всем предметам в свойство студента tabel.
// Посчитать количество плохих (меньше 4) оценок по предметам. Если таких нет, вывести сообщение Студент переведен на следующий курс.
// Посчитать средний балл по предметам. Если он больше 7 - вывести сообщение Студенту назначена стипендия.

const student = {
    name: '',
    lastName: '',
};


function getName(userName) {
    let str;
    do {
        str = prompt(`Enter your ${userName}, please`, str);
    } while(!str || !isNaN(str));

    return str;
}

student.name = getName('name');
student.lastName = getName('surname');


function getTabel() {
    const tabel = {};
    while(true) {
        let courseName = prompt("Enter your course");
        if(!courseName) {
            break;
        }
        let courseGrade = +prompt("Enter your grade");
        tabel[courseName] = courseGrade;
    }

    return tabel;

}

student.tabel = getTabel();


function getBadGradesCount() {
    let badGrades = 0;

    for(let grade in student.tabel) {
        if(student.tabel[grade] < 4) {
        badGrades++;
        }
    }
    return badGrades;
}


function getAverageGrade() {
    let averageGrade = 0;
    let courseCounter = 0;
    for(let key in student.tabel) {
        averageGrade += student.tabel[key];
        courseCounter++;

    }

    return averageGrade = averageGrade / courseCounter;
}

function displayMessage(badGrade, averageGrade) {
    if(!badGrade) {
        console.log(`The student is transferred to the next course`);
    }
    if(averageGrade > 7) {
        console.log("Student is assigned a scholarship");
    }
}


console.log(student);
displayMessage(getBadGradesCount(), getAverageGrade());
