
function bmrCalculator()
{
     var bmrResult;
     var calorie;
     var Gender = document.getElementById("male"). value;
     var Gender = document.getElementById("female"). value;
     var Age = document.getElementById("age"). value;
     var Height = document.getElementById("height"). value;
     var Weight = document.getElementById("weight"). value;
     var Activity = document.getElementById("unactive").value;
     var Activity = document.getElementById("medium").value;
     var Activity = document.getElementById("active").value;

    if (Gender==1)
    {
        bmrResultM = 66.50 + (6.76*Age) + (5.00*Height) + (13.75*Weight);
        document.getElementById("Display").value = bmrResultM;
        calorieM = bmrResultM * Activity;
        document.getElementById("Calorie").value = calorie;
    }
    
    else if (Gender==2)
    {
        bmrResultF = 65.51 + (4.67*Age) + (1.85*Height) + (9.65*Weight);
        document.getElementById("Display").value = bmrResultF;
        calorieF = bmrResultF * Activity;
        document.getElementById("Calorie").value = calorieF;
    }  
    
}

