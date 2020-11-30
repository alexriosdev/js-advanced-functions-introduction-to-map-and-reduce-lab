const mapToNegativize = (src) => {
  let new_array = [];
  for (let i = 0; i < src.length; i++) {
    new_array.push(src[i] * -1);    
  }
  return new_array;
}

const mapToNoChange = (src) => {
  let new_array = [];
  for (let i = 0; i < src.length; i++) {
    new_array.push(src[i]);    
  }
  return new_array;
}

const mapToDouble = (src) => {
  let new_array = [];  
  for (let i = 0; i < src.length; i++) {
    new_array.push(src[i] * 2);    
  }
  return new_array;
}

const mapToSquare = (src) => {
  let new_array = []; 
  for (let i = 0; i < src.length; i++) {
    new_array.push(src[i] * src[i]);    
  }
  return new_array;
}

const reduceToTotal = (src, total = 0) => {
  for (let i = 0; i < src.length; i++) {
    total += src[i];    
  }
  return total;
}

const reduceToAllTrue = (src) => {
  for (let i = 0; i < src.length; i++) {
     if (!src[i]) return false;
  }
  return true;
}

const reduceToAnyTrue = (src) => {
  for (let i = 0; i < src.length; i++) {
     if (src[i]) return true;
  }
  return false;
}
