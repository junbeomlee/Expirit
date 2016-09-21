function convert(programs,Exercise,Program){
  var programList = [];
  var resData = programs;
  angular.forEach(resData, function(program, index){
    var exerciseJson = program.exercise;
    var exercise = Exercise.fromJson(exerciseJson);
    var program = new Program(exercise,program.day);
    programList.push(program);
  });

  return programList;
}
