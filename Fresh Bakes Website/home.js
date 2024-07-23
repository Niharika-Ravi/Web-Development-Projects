
function Openhl(){
    document.getElementById("hourslocation").style.display="block";
    
    
}
function select(){
    let item=document.getElementById("bakeType").value;''

    if(item=='Cake'){
        var Itemarray=[{name:"Butter Cake",image:"https://assets.epicurious.com/photos/575991f3973781fc02c2a827/6:4/w_1600,c_limit/EP_06062016_Vanilla-Buttermilk-Wedding-Cake-with-Raspberries-and-Orange-Cream-Cheese-Frosting.jpg",price:120},
        {name:"Pound Cake",image:"https://assets.epicurious.com/photos/57c6f789082060f11022b586/6:4/w_1600,c_limit/no-recipe-required-pound-cake-lemon-poppy-seed-30082016.jpg",price:145},
        {name:" Sponge Cake",image:"https://assets.epicurious.com/photos/56f301595380ea2215f3b49c/6:4/w_1600,c_limit/1015-FS-CAKE01.jpg",price:100}];
        var heading='Cakes';
    }
    if(item=='Donut')
    {
        var Itemarray=[{name:"Cake Doughnuts",image:"https://www.allrecipes.com/thmb/F1TS1vVziVF1vlQ5tliBNPXdyeU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3390842-d41cdb60d25742489c40635c5ded376c.jpg",price:120},
        {name:"Doughnut Holes",image:"https://www.allrecipes.com/thmb/9-o9OJZilnT9Fw_6VvxejgqgVRQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3356160-f852b2a62dee4b8481357159aa53d92f.jpg",price:145},
        {name:"Jelly Doughnut",image:"https://www.allrecipes.com/thmb/hSHC4YzqCXuT6Qa_viKHOsM4UKE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/187302-c61e4aab37bf4595a858b56fff1ac57a.jpg",price:100}];
        var heading='Doughnuts';
    }
    if(item=='Puff')
    {
        var Itemarray=[{name:"Raspberry Chocolate Puffs",image:"https://www.tasteofhome.com/wp-content/uploads/2018/01/Raspberry-Chocolate-Puffs_EXPS_SDAM17_20395_B12_07_6b-1.jpg?w=1200",price:120},
        {name:"Blood Orange Caramel Tarte Tatin",image:"https://www.tasteofhome.com/wp-content/uploads/2019/10/Blood-Orange-Caramel-Tarte-Tatin_EXPS_TOHFM20_162127_B09_26_8b-4.jpg?w=1200",price:145},
        {name:"Puff Pastry Chicken Potpie",image:"https://www.tasteofhome.com/wp-content/uploads/2018/01/Puff-Pastry-Chicken-Potpie__EXPS_SDON16_199097_C06_08_3b-4.jpg?w=1200",price:100}];
        var heading='Puff Pastry';
    }
    if(item=='Pastry'){ }
    tablepopulate(Itemarray,heading)

}
function tablepopulate(Itemarray,heading){
    document.getElementById("homepage").style.display="none";
    document.getElementById("pastryItems").style.display="block";
    document.getElementById("pastryHeading").innerHTML=`<h1>${heading}</h1><h3>Check out the different varities of ${heading} avaliable at us!</h3>`;

    let table=document.getElementById("itemTable");
    

    for(let item of Itemarray){
        var template=`<tr id="itemTable_row">
        <td id="itemTable_data">${item.name}</td>
        <td id="itemTable_data"><img id="pastryimage" src="${item.image}"></td>
        <td id="itemTable_data">${item.price}</td></tr>`
        console.log(template)
        table.innerHTML += template;

               

    }

}
function scrolltotop(){
    window.scrollTo(0,0)
}
function viewproducts()  {
    document.getElementById("image5").style.display="grid";
    document.getElementById("image6").style.display="grid";
    document.getElementById("image7").style.display="grid";
    document.getElementById("image8").style.display="grid";
    document.getElementById("viewproducts").style.display="none";
    document.getElementById("viewproducts_shadow").style.display="none";

}
function search(){
   document.getElementById("searchResponse").style.display="flex";

    var AllItems=[
    {name:"Butter Cake",itemno:1},
    {name:"Pound Cake",itemno:2},
    {name:" Sponge Cake",itemno:3},
    {name:"Cake Doughnuts",itemno:4},
    {name:"Doughnut Holes",itemno:5},
    {name:"Jelly Doughnut",itemno:6},
    {name:"Raspberry Chocolate Puffs",itemno:7},
    {name:"Blood Orange Caramel Tarte Tatin",itemno:8},
    {name:"Puff Pastry Chicken Potpie",itemno:9}];
    
    for (let order of AllItems){
            document.getElementById(`sitem${order.itemno}`).style.display="none";
           
        } 
    var searchStr=document.getElementById("searchfield").value.toLowerCase();
    var isAvailable;
    for (let order of AllItems){
        let name=order.name.toLowerCase();
        if(name.includes(searchStr)){
            document.getElementById(`sitem${order.itemno}`).style.display="flex";
            console.log(order.itemno);
            isAvailable=true;
        } }

    if(!(isAvailable)){
        document.getElementById("searchResponse").innerHTML=`<center><h1 id="search_heading">Sorry...No match found</h1></center>`
    }
        
}
