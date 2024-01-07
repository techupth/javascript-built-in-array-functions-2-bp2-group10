const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) { //carBrand = ชื่อรถ
  // Start coding here
  let hasInTheCollection = false;
  let indexPosition = carCollection.indexOf(carBrand);
  let carsPosition;

  for (let value of carCollection) {
     if ( ((array, inputName) => array === inputName) (value, carBrand) ) { 
      hasInTheCollection = true;
      if (indexPosition !== -1) {
        carsPosition = indexPosition + 1;
      }
      break;
    } else {
      carCollection.push(carBrand);
      break;
    }
  }

  if (hasInTheCollection) {
    console.log(`${carBrand} already exists in position ` + carsPosition + " of the car collection.");
  } else {
    console.log("new car collection is: " + carCollection + ".");
  }
}

updateCarCollection("audi");
updateCarCollection("toyota");


//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
//console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
//console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.