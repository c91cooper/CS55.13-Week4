import fs from 'fs';
import path from 'path';

const dataDir= path.join(process.cwd(), 'data');

export function getAllIds(){
  const filePath= path.join(dataDir, 'peeps.json');
  const jsonString = fs.readFileSync(filePath, 'utf8');
  const jsonObj = JSON.parse(jsonString);
  return jsonObj.map( item => {
    return {
      params: {
        id: item.id.toString()
      }
    }
  }

  );
}

export function getSortedList() {
  // get filepath to json file
  const filePath = path.join(dataDir, 'peeps.json');
  // load json file contents
  const jsonString = fs.readFileSync(filePath, 'utf8');
  // convert string from file into json array object
  const jsonObj = JSON.parse(jsonString);
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
  const filePath= path.join(dataDir, 'peeps.json', 'others.json');
  const jsonString = fs.readFileSync(filePath, 'utf8');
  const jsonObj = JSON.parse(jsonString);
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