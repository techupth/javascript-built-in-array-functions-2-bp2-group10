let crimeRecordNames = ["Theodora Milenko", "Tinashe Benigno", "Mahalia Priyanka", "Maisy Sudhir"];

function searchCrimeRecord(name) {
  // Start coding here
  let hasCrimeRecord = false;

  for (let value of crimeRecordNames) {
    if (getName(value, name)) {
      hasCrimeRecord = true;
      break;
    }
  }

  if (hasCrimeRecord) {
    console.log(`${name} has a crime record!!!`)
  } else {
    console.log(`${name} has no crime record.`)
  }
}


function getName(array, inputName) { //inputName = name
  return array === inputName; // return = true;
}

searchCrimeRecord("Dilan Sandra");
searchCrimeRecord("Tinashe Benigno");

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ไม่เคยมีประวัติเกี่ยวกับอาชญากรรม
//console.log(searchCrimeRecord("Dilan Sandra")); //"Dilan Sandra has no crime record"

//ในกรณีที่เคยมีประวัติเกี่ยวกับอาชญากรรม
//console.log(searchCrimeRecord("Tinashe Benigno")); //"Tinashe Benigno has crime record !!!"