AFRAME.registerComponent("cursorlist",{
schema:{
selected:{default:"",type:"string"}

},
init:function(){
this.handlemouseent()
this.handmouseleave()
},
handelplacelist:function(){
const id=this.el.getAttribute("id")
const placeid=["taj-mahal","budapest","eiffel-tower","new-york-city"]
if (placeid.includes(id)){
const placeContainer=document.querySelector("#places-container")
placeContainer.setAttribute("cursorlist",{selected:id})
this.el.setAttribute("material",{color:"#d76b30",opacity:1})
}



},
handlemouseent:function(){
this.el.addEventListner("mouseenter",()=>{
this.handelplacelist()


})






},
handmouseleave:function(){
this.el.addEventListner("mouseleave",()=>{
const {selected}=this.data
if (selected){
    const el=document.querySelector(`#${selected}`)
    const id=el.getAttribute("id")
    if (id==selected){
        el.setAttribute("material",{color:"#0877cc",opacity:1})
    }
}


})



}


})