import React,{useState, useEffect}from 'react';
const URL = "https://thecocktaildb.com/api/json/v1/1/search.php?s=";
const Final =() =>{

   const[drinksdata,setDrinksData]= useState([]);
   const [searchTerm,setsearchTerm] =useState('');
   const  fetchDrink = async(apiURL)=>{
    const response = await fetch(apiURL);
    const {drinks}=await response.json();
    setDrinksData(drinks);
   }
    useEffect(()=>{
      const correctURL=`${URL}${searchTerm}`
      fetchDrink(correctURL);
    },[searchTerm]);
  return (
    <div className='wrapper'>
      <div className='form-container'>
        <input
        type="text"
        className='search'
        name="search"
        id="search"
       placeholder='search something new..'
       value={searchTerm}
       onChange={(e) => setsearchTerm(e.target.value )}
       />
      </div>
      <hr />
      <ul className="cocktail-data">
        
          {drinksdata.map((eachDrink) =>{
            const{idDrink,strDrink,strDrinkThumb}=eachDrink;
            return (
              <li key={idDrink}>
              <div>
                <img src={strDrinkThumb} alt={strDrink} />
              </div>
              <div className="text">
                <h3>{strDrink}</h3>
                </div>
              

            </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Final;