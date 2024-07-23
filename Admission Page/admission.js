function validate()
{
    var name=document.getElementById("student_name").value;
    var email=document.getElementById("student_email").value;
    var score_10=document.getElementById("percentage10").value;
    var score_12=document.getElementById("percentage12").value;
    var school=document.getElementById("school_name").value;
    var phoneNo=document.getElementById("phoneNumber").value;
    

    var score_validate="^[0-9]{1,2}\.[0-9]{1,2}$";
    
    var fullname_validate="^[a-zA-Z]+ [a-zA-Z]+$";
    var name_validate="^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$";
    var email_validate="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    

if(!(name.match(fullname_validate)||name.match(name_validate)))
{
	alert("Invalid Name.Name cannot contain numbers and special characters");return false;
}


else if(!(email.match(email_validate)))
{
	alert("Invalid email id. Check your email address!");return false;

}
else if(phoneNo.length!=10){
    alert("Invalid Phone Number.Phone No must be of 10 digits");return false;
}
else if(!(school.length>=3 && school.length<=30))
{
    alert("Check school name");return false;

}
else if((score_10>100 || score_10<=0)){
    alert("Class 10 Percentage must be between 0 and 100");return false;}
else if(!(score_10.match(score_validate))){
        alert("Percentage must be provided in 00.00 format");return false;
    
    }


else if(stream.value=='')
{
    alert("Choose stream");return false;
}
else if((score_12>100 || score_12<=0)){
    alert("Class 12 Percentage must be between 0 and 100");return false;}
else if(!(score_12.match(score_validate))){
    alert("Percentage must be provided in 00.00 format");return false;

}

else if(dept.value=='')
{
    alert("Choose Department");return false;
}
else if(course.value=='default')
{
    alert("Choose course");return false;
}
else{
    location.replace("add.html");
    transferData();
}
}

function transferData()
{
    var name=document.getElementById("student_name").value;
    var email=document.getElementById("student_email").value;
    var score_10=document.getElementById("percentage10").value;
    var score_12=document.getElementById("percentage12").value;
    var school=document.getElementById("school_name").value;
    var phoneNo=document.getElementById("phoneNumber").value;

    sessionStorage.setItem("student_name",name);
    sessionStorage.setItem("student_email",email);
    sessionStorage.setItem("school",school);
    sessionStorage.setItem("stream",stream.value);
    sessionStorage.setItem("dept",dept.value);
    sessionStorage.setItem("course",course.value);
    sessionStorage.setItem("phoneNumber",phoneNo);
    sessionStorage.setItem("score_10",score_10);
    sessionStorage.setItem("score_12",score_12);

    
}

function populateCourse(dept,course)
  {
    var dept=document.getElementById(dept);
    var course=document.getElementById(course);

    course.innerHTML="";

    if(dept.value=="Arts")
    {
        var optionArray=['default|Choose Course','BA English|BA English','BA Tamil|BA Tamil'];
    }
    else if(dept.value=="Science")
    {
        var optionArray=['default|Choose Course','BSc CS|BSc CS','BSc Nutrition|Nutrition','BSc Physics|BSc Physics'];
    }
    else if(dept.value=="Commerce")
    {
        var optionArray=['default|Choose Course','B Com|B com','BBA|BBA'];
    }

    for(var option in optionArray)
    {
        var pair=optionArray[option].split("|");
        var newoption=document.createElement("option");

        newoption.value=pair[0];
        newoption.innerHTML=pair[1];
        course.options.add(newoption);
    }
        
}