function toParams(obj)
{
  var res={};
  for(var propertyName in obj) {
    if (typeof obj[propertyName] != 'function'){
      res[propertyName]=obj[propertyName];
    }
  }
  return res;
}
