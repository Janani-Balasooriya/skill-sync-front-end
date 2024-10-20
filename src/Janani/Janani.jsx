function Janani(){

    const n = 6;
    let name = "";

    if(n>2){
        name= "Janani";
    }else{
        name ="Kevin"
    }

    return <h1 className="text-red-600 text-4xl font-semibold">{name}</h1>;
}

export default Janani;