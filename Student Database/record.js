var recordArray=[];
function student_detail(stud_name,rollNo,lang,eng,sci,social,math){
    this.stud_name=stud_name,
    this.rollNo=rollNo,
    this.lang=lang,
    this.eng=eng,
    this.sci=sci,
    this.social=social,
    this.math=math};
function checkduplicate(rollNo){
    for(var recorditem of recordArray){
        if (rollNo==recorditem.rollNo){
         return true;
        }
    }
}

function checkInput(stud_name,rollNo,lang,eng,sci,social,math){
   var fullname_validate="^[a-zA-Z]+ [a-zA-Z]+$";
    var name_validate="^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$";
    


if(stud_name===''){
    alert("Please enter student name");
}
else if(!(stud_name.match(fullname_validate)||stud_name.match(name_validate)))
{
	alert("Name cannot contain numbers and special characters");
    
}
else if(rollNo.length != 5){
    alert("Roll No must be 5 digits");
    
}
else if(checkduplicate(rollNo)){
    alert("Record with roll number already exists");
}
else if(lang==''||eng==''||sci==''||social==''||math=='')
{
    alert("Enter marks for all 5 subjects");
}
else if(lang>100 || lang<=0)
{
    alert(`Language mark must be greator than 0 and less than 100`);}
else if(eng>100 || eng<=0)
{
    alert(`English mark must be greator than 0 and less than 100`);}
else if(sci>100 || sci<=0)
{
    alert(`Science mark must be greator than 0 and less than 100`);}
else if(social>100 || social<=0){
    alert(`Social Science mark must be greator than 0 and less than 100`);}
else if(math>100 || math<=0){
    alert(`Mathematics mark must be greator than 0 and less than 100`);}
else{
    alert("Student Record added");
    var student=new student_detail(stud_name,rollNo,lang,eng,sci,social,math);
    recordArray.push(student);
    document.getElementById("form").reset();
        
}
}
function AddRecord(){
    var stud_name=document.getElementById("stud_name").value;
    var rollNo=document.getElementById("rollNo").value;
    var lang=Number(document.getElementById("lang").value);
    var eng=Number(document.getElementById("eng").value)    ;
    var sci=Number(document.getElementById("sci").value);
    var social=Number(document.getElementById("social").value);
    var math=Number(document.getElementById("math").value);

    if(checkInput(stud_name,rollNo,lang,eng,sci,social,math)){
    alert("Student Record added");
    var student=new student_detail(stud_name,rollNo,lang,eng,sci,social,math);
    recordArray.push(student);
    document.getElementById("form").reset();
    }
}
function printData(){
      

    document.getElementById("add_display").style.display="none";
    document.getElementById("editBox").style.display="none";

    document.getElementById("display").style.display="block";

    let recordTable=document.getElementById("Stud_Record");
    
    
    function passOrFail(avg){
        if(avg>35){return "Pass"}
        else{return "Fail"}
    }
    document.getElementById("Stud_Record").innerHTML="";
    document.getElementById("Stud_Record").innerHTML=`<tr><th rowspan='2'>Roll No</th><th rowspan='2'>Name</th><th colspan='5'>Mark</th><th rowspan='2'>Percentage</th><th rowspan='2'>Result</th><th rowspan='2'>Action</th>
    </tr><tr><th>Language</th><th>English</th><th>Science</th><th>Social Science</th><th>Mathematics</th></tr>`;


    for(var record of recordArray){
        console.log(record);
        var average=(record.lang+record.eng+record.math+record.sci+record.social)/5;
        var avg=average.toFixed(2);
        var result=passOrFail(avg);
        

        let Row_template=`<tr>
        <td id="stu_td">${record.rollNo}</td>
        <td id="stu_td">${record.stud_name}</td>
        <td id="stu_td">${record.lang}</td>
        <td id="stu_td">${record.eng}</td>
        <td id="stu_td">${record.sci}</td>
        <td id="stu_td">${record.social}</td>
        <td id="stu_td">${record.math}</td>
        <td id="stu_td">${avg}%</td>
        <td id="stu_td">${result}</td>
        <td id="stu_td"><button type="submit" onclick="edit(${recordArray.indexOf(record)})">EDIT</button><button type="submit" onclick="remove(${recordArray.indexOf(record)})">REMOVE</button></td></tr>`;

        recordTable.innerHTML+=Row_template;}
}

    function backtohome(){
        document.getElementById("add_display").style.display="block";
        document.getElementById("display").style.display="none";

    }

    function remove(rowIndex){
        document.getElementById("Stud_Record").deleteRow(rowIndex+2);
        recordArray.pop(rowIndex);

    }
var recordid;
    function edit(itemIndex){
        
        document.getElementById("display").style.display="none";
        document.getElementById("editBox").style.display="block";
        var records=recordArray[itemIndex];
        for (var field in records){
            
            document.getElementById(`${field}1`).value=records[field];
            console.log(field,records[field]);
        }
        recordid=itemIndex;
        
        }

        function update()
        {
            
            var stud_name=document.getElementById("stud_name1").value;
            var rollNo=document.getElementById("rollNo1").value;
            var lang=Number(document.getElementById("lang1").value);
            var eng=Number(document.getElementById("eng1").value);
            var sci=Number(document.getElementById("sci1").value);
            var social=Number(document.getElementById("social1").value);
            var math=Number(document.getElementById("math1").value);

            var fullname_validate="^[a-zA-Z]+ [a-zA-Z]+$";
    var name_validate="^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$";
    var score_validate="^[0-9]{1,2}\.[0-9]{1,2}$";
    


if(stud_name===''){
    alert("Please enter student name");
}
else if(!(stud_name.match(fullname_validate)||stud_name.match(name_validate)))
{
	alert("Name cannot contain numbers and special characters");
    
}
else if(rollNo.length != 5){
    alert("Roll No must be 5 digits");
    
}

else if(lang===''||eng===''||sci===''||social===''||math==='')
{
    alert("Enter marks for all 5 subjects");
}
else if(lang>100 || lang<=0)
{
    alert(`Language mark must be greator than 0 and less than 100`);}

else if(eng>100 || eng<=0)
{
    alert(`English mark must be greator than 0 and less than 100`);}
else if(sci>100 || sci<=0)
{
    alert(`Science mark must be greator than 0 and less than 100`);}
else if(social>100 || social<=0){
    alert(`Social Science mark must be greator than 0 and less than 100`);}
else if(math>100 || math<=0){
    alert(`Mathematics mark must be greator than 0 and less than 100`);}
else{

            var newstudent=new student_detail(stud_name,rollNo,lang,eng,sci,social,math);
            console.log(newstudent)
            recordArray[recordid]=newstudent;
        printData();
            alert("Student Record has been updated!")

        
    }}