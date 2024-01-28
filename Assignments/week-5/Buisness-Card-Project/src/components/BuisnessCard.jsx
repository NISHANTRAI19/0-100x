

const BuisnessCard =({name,description,interests})=>{


    return(<>
    <h1>{name}</h1>
    <h3>{description}</h3>
    <h4>Interests</h4>
    <ul>
        {interests.map((Element,index)=>{
            return(
                    <li key={index}><h6>{Element}</h6>  </li>
            )
        })}
    </ul>



    </>
    )



}

export default BuisnessCard;