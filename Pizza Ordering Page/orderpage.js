const form=document.getElementById("form");

form.addEventListener('submit',function(e){
    e.preventDefault();
    validate();});

    function validate(){
    var name=document.getElementById("cust_name").value;
    var phone=document.getElementById("cust_phone").value;
    var crust=document.getElementById("crust");
    var sauce=document.getElementById("sauce");
    var cheese=document.getElementById("cheese");
    var  category=document.getElementById("category");
    var toppings=document.getElementById("toppings");

    var fullname_validate="^[a-zA-Z]+ [a-zA-Z]+$";
    var name_validate="^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$";

    if(name===''){
        alert("Enter name");
    }
    else if(!((name.match(name_validate))||(name.match(fullname_validate)))){
        alert("Numbers and special characters are not permited in name");
    }
    else if(phone==='')
    {
      alert("Enter Phone No");
    }
    else if(phone.length!=10){
        alert("Phone ni should contain 10 characters");
    }
    else if(crust.value=='-'){
        alert("Select your Pizza base");
    }
    else if(sauce.value=="-"){
        alert("Select your pizza sauce");
    }
    else if(category.value=="-"){
        alert("Select the category");
    }
    else if(toppings.value=="-"){
        alert("Select your pizza toppings");
    }
    else if(cheese.value=="-"){
        alert("Select the type of cheese");
    }
    else{
        orderTable();
    }


}

function populate(category,toppings){
    var category=document.getElementById("category");
    var toppings=document.getElementById("toppings");
    toppings.innerHTML="";

    if(category.value=="veg"){
        var optionArray=["-|---","Bell Peppers|Bell Peppers","Olives|Olives","Pineapple|Pineapple","Cherry Tomatoes|Cheery Tomatoes"];
    }
    else if(category.value="non-veg")
    {
        var optionArray=["-|---","Perperoni|Perperoni","Bacon|Bacon","Chicken|Chicken","Ham|Ham"];
    }

    for(let option in optionArray){
        var pair=optionArray[option].split("|");
        var newoption=document.createElement("option");

        newoption.value=pair[0];
        newoption.innerHTML=pair[1];
        toppings.options.add(newoption);

    }
}

function orderTable(){
   
    let crust=document.getElementById("crust").value;
    let sauce=document.getElementById("sauce").value;
    let cheese=document.getElementById("cheese").value;
    let category=document.getElementById("category").value;
    let toppings=document.getElementById("toppings").value;

    
    var total=0;
    let row=1;
    let orderArray=[crust,sauce,cheese,toppings]
    const price={
        'Thin Crust': 30,
        'Thick Crust': 50,
        'Normal Crust':40,
        'Spicy Red Sauce':120,
        'Peppery Red Sauce':105,
        'Sweet Sauce':98,
        'Pesto Sauce':145,
        'Bell Peppers':80,
        'Olives':160,
        'Pineapple':50,
        'Cherry Tomatoes':50,
        'Perperoni':100,
        'Bacon':125,
        'Chicken':100,
        'Ham':90,
        'Mozzarella':100,
        'Cheddar':120,
        'Feta':100,
        'Ricotta':170,
        'Parmesan':110,
        'Mixed':130,
    }

    for(let orderItem in orderArray){
        var order_name=orderArray[orderItem];console.log(order_name)
        var order_price= price[order_name];console.log(order_price)
        var row_name="item"+row;
        document.getElementById(row_name).innerHTML=order_name;
        var row_item="price"+row;
        document.getElementById(row_item).innerHTML=order_price;
        row++;
        total=total+order_price;
    }

   document.getElementById("total").innerHTML=total;

   document.getElementById("bill").style.display='block';
   

   
    

    
}