import s from "./Janani.module.css";

function Janani(){

    const n = 6;
    let name = "";

    if(n>2){
        name= "Janani";
    }else{
        name ="Kevin"
    }

    return <h1 className={s.header}>{name}</h1>;
}

export default Janani;