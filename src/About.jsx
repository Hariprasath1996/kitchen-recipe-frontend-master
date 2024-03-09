import * as React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
export function About() {
  return (
    <div>
      <img className='about' src="https://i.redd.it/w3n46nk83ir81.gif" alt="about"/>
      <div className='anime'>
      <h1 >About Us</h1>
      </div>
  <div className='abouts'>
   <h1>Who I am</h1>
   <p>i am Hariprasath , from Erode.</p>
   <p>i am 28 years old. </p>
   <p>i build this recipe management website for easy  cooking.i  has always been passionate about food and eating — so much so that she spent  first year out of college driving food competition around the country. </p>
<h1>Above all, we are:</h1>
   <p>Fun Like you, we enjoy friends, family, cooking, and having a good laugh.</p>
   <p>Supportive Struggling with dinner inspo? We’re here to help!</p>
   <p>Creative Cooking is an art. We like to experiment and express ourselves.</p>
   <p>Approachable We don't judge—all cooking levels and recipes are welcome. </p>
   <p>Down-to-Earth We love good food, period. It doesn’t need to be fussy to be great. </p>
   <h1>Contact US</h1>
   <a  className='ang' href="https://www.linkedin.com/feed/" target="_blanck" ><LinkedInIcon/></a><br/>
   <a className='ang1' href="https://github.com/Hariprasath1996" target="_blanck"><GitHubIcon/></a>
  </div>
    </div>
  );
}
