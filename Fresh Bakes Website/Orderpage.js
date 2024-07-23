var Itemarray;
var total=0;
var bill_template=`<tr>
<th>Item Name</th>
<th>Price</th>
</tr>`;
function populate(){
    
    let pickup=document.getElementById("pickup").checked;
    let homedelivery=document.getElementById("homedelivery").checked;


    console.log(pickup,homedelivery)
    if(pickup){
        document.getElementById("addressbox").style.display="none";
        document.getElementById("selectlocation").style.display="block";

    }
    if(homedelivery){
        document.getElementById("selectlocation").style.display="none";
        document.getElementById("addressbox").style.display="block";
    }
    

}
function productpopulate(){
    let item=document.getElementById("category").value;
    if(item=='Cake'){
        Itemarray=[{name:"Butter Cake",image:"https://assets.epicurious.com/photos/575991f3973781fc02c2a827/6:4/w_1600,c_limit/EP_06062016_Vanilla-Buttermilk-Wedding-Cake-with-Raspberries-and-Orange-Cream-Cheese-Frosting.jpg",price:120},
        {name:"Pound Cake",image:"https://assets.epicurious.com/photos/57c6f789082060f11022b586/6:4/w_1600,c_limit/no-recipe-required-pound-cake-lemon-poppy-seed-30082016.jpg",price:145},
        {name:"Sponge Cake",image:"https://assets.epicurious.com/photos/56f301595380ea2215f3b49c/6:4/w_1600,c_limit/1015-FS-CAKE01.jpg",price:100}];
        var heading='Cakes';
    }
    if(item=='Donut')
    {
        Itemarray=[{name:"Cake Doughnuts",image:"https://www.allrecipes.com/thmb/F1TS1vVziVF1vlQ5tliBNPXdyeU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3390842-d41cdb60d25742489c40635c5ded376c.jpg",price:120},
        {name:"Doughnut Holes",image:"https://www.allrecipes.com/thmb/9-o9OJZilnT9Fw_6VvxejgqgVRQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3356160-f852b2a62dee4b8481357159aa53d92f.jpg",price:145},
        {name:"Jelly Doughnut",image:"https://www.allrecipes.com/thmb/hSHC4YzqCXuT6Qa_viKHOsM4UKE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/187302-c61e4aab37bf4595a858b56fff1ac57a.jpg",price:100}];
        var heading='Doughnuts';
    }
    if(item=='Puff')
    {
        Itemarray=[{name:"Raspberry Chocolate Puffs",image:"https://www.tasteofhome.com/wp-content/uploads/2018/01/Raspberry-Chocolate-Puffs_EXPS_SDAM17_20395_B12_07_6b-1.jpg?w=1200",price:120},
        {name:"Blood Orange Caramel Tarte Tatin",image:"https://www.tasteofhome.com/wp-content/uploads/2019/10/Blood-Orange-Caramel-Tarte-Tatin_EXPS_TOHFM20_162127_B09_26_8b-4.jpg?w=1200",price:145},
        {name:"Puff Pastry Chicken Potpie",image:"https://www.tasteofhome.com/wp-content/uploads/2018/01/Puff-Pastry-Chicken-Potpie__EXPS_SDON16_199097_C06_08_3b-4.jpg?w=1200",price:100}];
        var heading='Puff Pastry';
    }

    populatediv(Itemarray)
}
function populatediv(Itemarray){

    for(let item of Itemarray){
        let template=`<center><img id="image${Itemarray.indexOf(item)+1}"width="100" height="100" src="${item.image}">
        <h4>${item.name}</h4>
        <h5>Rs.${item.price}</h5>
        <button onclick="addItem(${Itemarray.indexOf(item)})" id="button_image${Itemarray.indexOf(item)+1}">ADD</button></center>`
        console.log(template)
        let divId="item"+(Itemarray.indexOf(item)+1);
        console.log(divId)
        document.getElementById(`${divId}`).innerHTML=template;
    }
}

function homedelivery_input(){
    var doorno=document.getElementById("doorNo").value;
    var street=document.getElementById("street").value;
    var pincode=document.getElementById("pincode").value;
    var street_validate="^[a-zA-Z]+ [a-zA-Z]+$";
        
        
        if(doorno===""||street===""||pincode===""){
            alert("Enter complete address");return 0;
        }        
        else if(doorno.length<1){
            alert("Provide valid door no");return 0;

        }
        else if(!(street.match(street_validate))){
            alert("Provide valid street name");return 0;
        }
        else if(pincode.length!=6){
            alert("Pincode must be 6 digits");return 0;
        }
        else{
            var info=["Home Delivery","Delivery Address: ",`${doorno},${street},${pincode}`];
            return info;
        }
}
function pickup_input(){
    var location=document.getElementById("selectlocation_op").value;
    console.log("location :",location)
        
        if(location=="null"){
            alert("Select a branch");
            return 0;
        }
        else{
            var data=['Store Pickup','Store Location',`${location}`];
            return data;
            
        }

        
}

function CheckInput(){
    var name=document.getElementById("cust_name").value;
    var phone=document.getElementById("cust_phone").value;
    var category=document.getElementById("category").value;
    console.log(category)
    let pickup=document.getElementById("pickup").checked;
    let homedelivery=document.getElementById("homedelivery").checked;
    
    console.log(pickup||homedelivery)
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
        alert("Phone no should contain 10 characters");
    }
    else if(!(pickup||homedelivery)){
        console.log(pickup||homedelivery)
        alert("Select Mode of delivery");

    }
    else if(category=="novalue"){
        alert("Select a category");
    }
    else{
        var print;
        if(pickup===true){
            var inforArray=pickup_input();
            if(inforArray==0){
                print="no";
                //
            }
            else{
            var mode=inforArray[0];
            var type=inforArray[1];
            var del_location=inforArray[2];
            print="yes";
        }
            
            
        }
        if(homedelivery===true){
            var dataArray=homedelivery_input();
            console.log(dataArray)
            if(dataArray==0){
                print="no";
                //
            }
            else{
            var mode=dataArray[0];
            var type=dataArray[1]
            var del_location=dataArray[2];
            print="yes"}
        
    
        }
        if(print=="yes"){
        var bill_details={
            customer_name:name,
            customer_phone:phone,
            delivery_mode:mode,
            delivery_type:type,
            delivery_location:del_location
        }
        console.log(mode,type,del_location)
        console.log(bill_details);

        populateBill(bill_details);
    }}

    

}

function populateBill(bill_details){
    for(let detail in bill_details){
        document.getElementById(`${detail}`).innerHTML=bill_details[detail];
        console.log(detail,bill_details[detail])
    }

}
function addItem(index){
    console.log(index);
    console.log(Itemarray)
    var object=Itemarray[index];
    console.log(object);
    bill_template+=`<tr>
        <td>${object.name}</td>
        <td>${object.price}</td></tr>`;
        total=total+object.price;


    
    
    document.getElementById("item_price").innerHTML=bill_template;
  
    document.getElementById("total").innerHTML=total;
    document.getElementById("finalize").style.display="block";
    
    }

function ConfirmOrder(){
    location.reload();
    alert("Your order has been placed.")
    /*document.getElementById("form").reset();
    document.getElementById("productdiv").style.display="none";*/
    
}
