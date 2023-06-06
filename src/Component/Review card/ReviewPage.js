import React, {useState} from 'react';
import './ReviewPage.css'
import Submit from './Submit.js';
import Button from './Button.js';
import Image from './Star.js';
import Text from './Text.js';
import ThankYou_Image from './ThankYouImage';



function Review_Page() {
  
  const [display, setDisplay] = useState(true)
  const [star, setStar] = useState(0)

  const handleClick = () => {
    setDisplay(!display)
  }


  return (
    <div className="App">
      
      {display ?
        <form className="card" >
          <Image />
          
          <Text />  

          <div className='rate_button'>
            <Button text="1" action={()=> setStar(1)} />
            <Button text="2" action={()=> setStar(2)} />
            <Button text="3" action={()=> setStar(3)} />
            <Button text="4" action={()=> setStar(4)} />
            <Button text="5" action={()=> setStar(5)} />
          </div>
          
          <Submit text={"SUBMIT"} action={handleClick} />
        
        </form>

        : 

        <form className='card card2'>
          <>
            <ThankYou_Image />
            
            <div className='submit'>
              <p> You selected {star} out of 5</p>
            </div>
          
            
            <h1 className='thankyou'>Thank you!</h1>

            <p className='thankyou'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch! </p>
          </>
              
        </form>
      }
    </div>
  );


}



export default Review_Page;




 




/**
 create a normall 123 with span or either p and give it background-color and color 
 set it to when clicked it should set the variable of the star to the number it bears
 apply the styling hover and focus

 */