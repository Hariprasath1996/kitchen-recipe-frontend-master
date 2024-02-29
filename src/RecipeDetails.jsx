import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { API } from "./global";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useQuery } from '@tanstack/react-query';
import { queryClient } from './App';

export function RecipeDetails() {
  const navigate=useNavigate()
  const { id } = useParams();

 //without tanstack query =>version = 1 => LOW PERFOMANACE

  // const [recipe, setRecipe] = useState({});

  // const getrecipebyid = () => {
  //   fetch(`${API}/${id}`)
  //     .then((data) => data.json())
  //     .then((list) => setRecipe(list));
  // };

  // useEffect(() => getrecipebyid(), [id]);


 //with tanstack query =>version = 2 => HIGH PERFOMANACE

  const { isLoading ,isFetching, data: recipe } = useQuery (
    //cache name
    ["recipes",id], 
    //API request
    async () => 
       await  fetch(`${API}/${id}`)
           .then((data) => data.json()),
     //options
     {
      //stale timing
      staleTime: 10000, //3s la ithu stale akum
      //PULL METHOD
      initialData: queryClient       //ithu enna na namma direct ah cache la irunthe etukurom + fetch um panrom
      .getQueryData(["recipes"])     //cache la irunthu varrathala takkunu varum , update ah irukum
      ?.find((mv) => mv._id === id),  

     }               
   );
  
   
  
  // if(isLoading){
  //   return<h3>Loading...</h3>
  // }
  


  return (
    <div>
      {isFetching?<h1>loading...</h1>:null}
      <Button startIcon={<ArrowBackIcon/>} className='btn'  onClick={()=>navigate(-1)} variant='contained' color='primary'>Back</Button>
    <Card className='details'>
 <iframe
        width="100%" height="650px"
        src={recipe?.video}
        title="Michael - Official Trailer (Tamil) | Sundeep Kishan, Vijay Sethupathi | Ranjit Jeyakodi | Sam CS"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>

      </iframe>  
    <CardContent>
      <h3 className='recipetitle'>{recipe?.title}</h3>
      <p className='cuisin'>{recipe?.cuisines} - cuisines</p>
      
      <p className='rate'>{recipe?.rating}</p>
      <h3 className='disc'>What Makes Its Special : </h3>
      <p className='disc1'>{recipe?.discription}</p>
      <img className='detailimg' src={recipe?.image} alt={recipe?.title}/>
      <h2><span className='span'>Cook Time :</span>{recipe?.cookingtime}</h2>
      <h2><span className='span'>Servings : </span>{recipe?.servings}</h2>
      < div>
            <h3 h3 className='disc'>
            Ingredients
            </h3> 
             {recipe?.ingredients?.map((sub, index) => {
              
             
              return<p key={index}>

                 <div className='direct1'> ⭐-- {sub}</div>
              </p>
            })} 
          </div> <br/>
          
       < div>
            <h3 className='disc'>
              Directions : 
            </h3> 
             {recipe?.directions?.map((sub, index) => {
             
             
              return<p key={index}>

                <div className='direct'>-step {index+1} </div> <div className='direct1'>{sub}</div>
              </p>
            })} 
          </div><br/><br/>
      <p className='direct1'><span className='span1'>Cook's Notes : </span>{recipe?.note}</p>
  
         
      </CardContent>
      
    </Card>
    <Button  endIcon={<ArrowForwardIcon/>} className='btn1'  onClick={()=>navigate("/")} variant='contained' color='primary'>You’ll_Also_Love</Button>
    </div>
  );
}
