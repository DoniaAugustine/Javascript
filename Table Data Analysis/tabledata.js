



var data = [
    [" ", "Math", "Biology","Geology","English","History","Physics"],
    ["John",64,81,72,89,79,67],
    ["Mary",71,74,76,78,64,81],
    ["Anne",74,76,72,82,80,73],
    ["Mark",69,64,59,66,86,72],
    ["Rick",82,80,77,84,83,79],
    ["Eve",88,86,90,77,74,80]
    


];

function fillTable(data) 
{
    data.map((row, i) => {
        let htmlToAdd = '<tr>'
        row.map(cell => {
            if (i === 0) {
                htmlToAdd += '<th>' + cell + '</th>';
            } else {
                htmlToAdd += '<td>' + cell + '</td>';
            }
        });
        htmlToAdd += '</tr>';
        document.querySelector('#results-table table').innerHTML += htmlToAdd;
    })
}


//Lists students by GPA Decreasing
function sortByDecreasingGPA(data) {
    var sortedData = data.slice(1); // Exclude the header row from sorting
    sortedData.sort((a, b) => {
        var sumA = a.slice(1).reduce((acc, val) => acc + val, 0); // Calculate GPA by summing all subject grades
        var sumB = b.slice(1).reduce((acc, val) => acc + val, 0);
        return sumA - sumB; // Sort by descending GPA
       
    });
    //sortedData.unshift(data[0]); // Add the header row back to the sorted data
    
    var resultHTML = '';
    sortedData.forEach(row => {
        var student = row[0];
        var grades = row.slice(1);
        var gpa = grades.reduce((acc, val) => acc + val, 0) / grades.length;
        resultHTML += student + ": GPA - " + gpa.toFixed(2) + "<br>";
    });
    
    var resultContainer = document.querySelector('#result-container');
    resultContainer.innerHTML = resultHTML;
}



//Lists students by GPA Increasing
function sortByIncreasingGPA(data) {
    var sortedData = data.slice(1); // Exclude the header row from sorting
    sortedData.sort((a, b) => {
        var sumA = a.slice(1).reduce((acc, val) => acc + val, 0); // Calculate GPA by summing all subject grades
        var sumB = b.slice(1).reduce((acc, val) => acc + val, 0);
        return sumB - sumA; // Sort by ascending GPA
       
    });
   // sortedData.unshift(data[0]); // Add the header row back to the sorted data
    
    var resultHTML = '';
    sortedData.forEach(row => {
        var student = row[0];
        var grades = row.slice(1);
        var gpa = grades.reduce((acc, val) => acc + val, 0) / grades.length;
        resultHTML += student + ": GPA - " + gpa.toFixed(2) + "<br>";
    });
    
    var resultContainer = document.querySelector('#result-container');
    resultContainer.innerHTML = resultHTML;
}




function sortByIncreasingAverage(data) {
    var subjects = data[0].slice(1); // Extract subject names from the header row
    var averages = subjects.map((subject, index) => {
        var sum = data.slice(1).reduce((acc, row) => acc + row[index + 1], 0); // Calculate sum of grades for each subject
        var average = sum / (data.length - 1); // Calculate average by dividing sum by number of students
        return { subject, average };
    });
    
    averages.sort((a, b) => a.average - b.average); // Sort by ascending average
    
    return averages.map(item => item.subject); // Return sorted subject names
}

function listSubjectsByIncreasingAverage(data) {
    var sortedSubjects = sortByIncreasingAverage(data);
    var resultHTML = "Subjects sorted by increasing average:<br>";
    sortedSubjects.forEach(subject => {
        resultHTML += subject + "<br>";
    });
    
    var resultContainer = document.querySelector('#result-container');
    resultContainer.innerHTML = resultHTML;
}



function sortByDecreasingAverage(data) {
    var subjects = data[0].slice(1); // Extract subject names from the header row
    var averages = subjects.map((subject, index) => {
        var sum = data.slice(1).reduce((acc, row) => acc + row[index + 1], 0); // Calculate sum of grades for each subject
        var average = sum / (data.length - 1); // Calculate average by dividing sum by number of students
        return { subject, average };
    });
    
    averages.sort((a, b) => b.average - a.average); // Sort by descending average
    
    return averages.map(item => item.subject); // Return sorted subject names
}

function listSubjectsByDecreasingAverage(data) {
    var sortedSubjects = sortByDecreasingAverage(data);
    var resultHTML = "Subjects sorted by Decreasing average:<br>";
    sortedSubjects.forEach(subject => {
        resultHTML += subject + "<br>";
    });
    
    var resultContainer = document.querySelector('#result-container');
    resultContainer.innerHTML = resultHTML;
}




fillTable(data);

