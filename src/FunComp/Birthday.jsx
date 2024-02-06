import React, { useState } from "react";
import './Birthstyle.css';

function Birthday () {

  const [dada, setdada] = useState([

  {

    id: 1,

    name: 'Bertie Yates',

    age: 29,

    image:

      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',

  },

  {

    id: 2,

    name: 'Hester Hogan',

    age: 32,

    image:

      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',

  },

  {

    id: 3,

    name: 'Larry Little',

    age: 36,

    image:

      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',

  },

  {

    id: 4,

    name: 'Sean Walsh',

    age: 34,

    image:

      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',

  },

  {

    id: 5,

    name: 'Lola Gardner',

    age: 29,

    image:

      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',

  },

]);

  return(

       <div className="container">

          <div className="container-one">

             <h1>{dada.length} Birthday Today</h1>
             
               {dada.map((fa) => (

                <div className="main-div">

                     <img className="imgg" src={fa.image} width="80" height="80"/>

                     <h2>{fa.name}</h2>
                     <p>{fa.age} years ago</p>
                     
                </div>

               ))}
               
                    <button>Clear All</button>
                    
            </div>
            
       </div>

  )
}

export default Birthday