function meanCalculate() {
  const gradeValue = { A: 4, B: 3, C: 2, D: 1, E: 0 };
  const nama = document.getElementById("nama").value;
  const course = document.getElementById("course").value;
  const gradeSelect = document.getElementById("gradeSelect").value;

  const inputNama = document.querySelector("#nama");
  const inputCourse = document.querySelector("#course");
  const errorMsg = document.querySelector(".errorMsg");

  if (nama.length > 1 && course.length > 1) {
    errorMsg.style.display = "none"; // Menghilangkan pesan error
  }

  if (nama === "" && course === "") {
    errorMsg.style.display = "inline-block";
  }

  if (nama.length > 0) {
    inputNama.style.border = "1px solid #ced4da"; // Mengembalikan warna border normal
  } else {
    inputNama.style.border = "1px solid red"; // Memberi border warna merah
  }

  if (course.length > 0) {
    inputCourse.style.border = "1px solid #ced4da"; // Mengembalikan warna border normal
  } else {
    inputCourse.style.border = "1px solid red"; // Memberi border warna merah
  }

  if (gradeSelect in gradeValue) {
    const grade_value = gradeValue[gradeSelect];
    const resultTable = document.getElementById("resultTable");

    const allGradeValue = grade_value;
    const average = allGradeValue / 1;

    const newRow = resultTable.insertRow(-1);
    newRow.insertCell(0).innerHTML = nama;
    newRow.insertCell(1).innerHTML = course;
    newRow.insertCell(2).innerHTML = gradeSelect;
    newRow.insertCell(3).innerHTML = average.toFixed(2);
  }
}