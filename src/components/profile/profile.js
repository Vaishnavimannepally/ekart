import { useState } from "react";
import "./profile.css"
function Profile(){
    let [theme, setTheme]=useState({
        bgColor:"white",
        textColor:"black",
    });
    let [name, setName] = useState("kaycee");
    let [image, setImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7SrG1bjNMjCwGKPk5MC0awmMZ3as1BzrhEc_dZoG_LktvlRO_QdnS_lgvQfSfapedchc&usqp=CAU")
    const changeTok = ()=>{
        setName("kaycee");
        setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7SrG1bjNMjCwGKPk5MC0awmMZ3as1BzrhEc_dZoG_LktvlRO_QdnS_lgvQfSfapedchc&usqp=CAU")
    }
    const changeTor = ()=>{
        setName("rachel");
        setImage("https://i0.wp.com/www.torontophotographerz.com/wp-content/uploads/2017/06/Business-portrait-23.jpg?fit=800%2C1200&ssl=1")
    }
    const bbb = (event) =>{
        if(event.target.checked){
        setTheme({
            bgColor:"black",
            textColor:"white",
        });
    }else{
        setTheme({
            bgColor:"white",
            textColor:"black",
        });
    }
    };
    return(
        <div class="sty">
            <div class="row">
            <div class="column1"><img src={image} width="270px" height="350px" style={{borderRadius:"20px"}}/></div>
            <div class="column2" style={{backgroundColor: theme.bgColor , color: theme.textColor}}>
            <dl>
            <dt style={{fontStyle: "italic" , fontWeight:"bold" , fontSize:"large"}}>User Name</dt>
            <dd>{name}</dd>
            <dt style={{fontStyle: "italic" , fontWeight:"bold", fontSize:"large"}}>City</dt>
            <dd>Hyderabad</dd>
            <dt style={{fontStyle: "italic" , fontWeight:"bold" , fontSize:"large"}}>EmailId</dt>
            <dd>@gmail.com</dd>
            <dt style={{fontStyle: "italic" , fontWeight:"bold" , fontSize:"large"}}>Description</dt>
            <dd >qwertyuhcbjygshuilcjkaxop,iejmchsbjhvbfdbgkcjfsjkls nkdjhbxdsgjbl</dd>
            </dl>
            

            <button onClick={changeTok} class="btn btn-outline-success mx-3" style={{fontStyle: "italic" , fontWeight:"bold"}}>kaycee</button>
            <button onClick={changeTor} class="btn btn-outline-danger mx-3" style={{fontStyle: "italic" , fontWeight:"bold"}}>Rachel</button><br></br>
            <input type="checkbox" onChange={bbb} />check to switch dark mode
            </div>
            
            
            </div>
            

            
  

        </div>
    )
}
export default Profile;