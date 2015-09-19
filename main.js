$.getJSON("ratKinArmyData.json", function( data ) {
  var armyData = data;
  
  console.log(armyData);
});

/* This is the main function for scoring based on the tables of unit data */
function printScores(unitId){
   for(i=0;i<$("."+unitId+"Score").length;i++){
      var unitSizeClass=$("."+unitId+"Score").eq(i).attr("data-scoreId");
      var unitTest=document.getElementById(unitId).querySelectorAll("."+unitSizeClass+" td")
      unitArray=[];
      for(j=0;j<unitTest.length;j++){
         var unitString=unitTest[j].innerHTML;
         unitArray[j]=unitString;
      }
      var unitScore=0;
      for(k=1;k<=unitArray.length;k++){
         switch (unitArray[k]) {
            case "Abysmal":
               unitScore += 2;
               break;
            case "Below Average":
               unitScore += 4;
               break;
            case "Average":
               unitScore += 6;
               break;
            case "Above Average":
               unitScore += 8;
               break;
            case "Exemplary":
               unitScore += 12;
               break;
           };
         };
         $("."+unitId+"Score").eq(i).html(unitScore);
       };
   };

/*function score(unitId,unitSizeClass){
   var unitTest=document.getElementById(unitId).querySelectorAll("."+unitSizeClass+" td")
   unitArray=[];
   for(i=0;i<unitTest.length;i++){
      var unitString=unitTest[i].innerHTML;
      unitArray[i]=unitString;
   }
   var unitScore=0;
   for(i=1;i<=unitArray.length;i++){
      switch (unitArray[i]) {
         case "Abysmal":
            unitScore += 2;
            break;
         case "Below Average":
            unitScore += 4;
            break;
         case "Average":
            unitScore += 6;
            break;
         case "Above Average":
            unitScore += 8;
            break;
         case "Exemplary":
            unitScore += 12;
            break;
        }
    };
   return unitScore;
};

function printScores(unitId){
      for(i=0;i<$("."+unitId+"Score").length;i++){
         var unitSizeClass=$("."+unitId+"Score").eq(i).attr("data-scoreId");
         console.log(unitSizeClass);
         $("."+unitId+"Score").eq(i).html(unitScore);
      };
   };*/
