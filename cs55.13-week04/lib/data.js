import fs from 'fs';
import path from 'path';

const dataDir= path.join(process.cwd(), 'data');

export function getAllIds() {
  // get filepath to json file
  const filePath1 = path.join(dataDir, 'peeps.json');
  const filePath2 = path.join(dataDir, 'others.json');
  // load json file contents
  const jsonString1 = fs.readFileSync(filePath1, 'utf8');
  const jsonString2 = fs.readFileSync(filePath2, 'utf8');
  // convert string from file into json array object
  const jsonObj1 = JSON.parse(jsonString1);
  const jsonObj2 = JSON.parse(jsonString2);
  const jsonObj = jsonObj1.concat(jsonObj2);
  // use map() on array to extract just id properties into new array of obj values
  return jsonObj.map(item => {
    return {
      params: {
        id: item.id.toString()
      }
    }
  });
}


export function getSortedList() {
  // get filepath to json file
  const filePath1 = path.join(dataDir, 'peeps.json');
  const filePath2 = path.join(dataDir, 'others.json');
  // load json file contents
  const jsonString1 = fs.readFileSync(filePath1, 'utf8');
  const jsonString2 = fs.readFileSync(filePath2, 'utf8');
  // convert string from file into json array object
  const jsonObj1 = JSON.parse(jsonString1);
  const jsonObj2 = JSON.parse(jsonString2);
  const jsonObj = jsonObj1.concat(jsonObj2);
  // sort json array by name property
  jsonObj.sort(function (a, b) {
      return a.name.localeCompare(b.name);
  });

  return jsonObj.map(item => {
    return {
      id: item.id.toString(),
      name: item.name
    }
  });
}

export async function getPerson(IdRequested){
  const filePath1= path.join(dataDir, 'peeps.json');
  const filePath2= path.join(dataDir, 'others.json');
  const jsonString1 = fs.readFileSync(filePath1, 'utf8');
  const jsonString2 = fs.readFileSync(filePath2, 'utf8');
  const jsonObj1 = JSON.parse(jsonString1);
  const jsonObj2 = JSON.parse(jsonString2);
  const jsonObj = jsonObj1.concat(jsonObj2);
  const match = jsonObj.filter(obj => {
    return obj.id.toString() === IdRequested;
  }
  );

  let value;
  if (match.length>0){
    value = match[0];
  }else{
    value ={};
  }

  return value;
}