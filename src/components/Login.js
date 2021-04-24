import React from 'react';
// import Navbar from 'Navbar.js';

const Login = () =>{
  return (
    <body>
    
    <div>
    <h3> Owner Log In</h3>
    <div class = "container">
      <form>
      <p>Username  :
        <input placeholder="Username">
        
        </input>
        </p>
        
        <p>Password  :
        <input placeholder="Password">
          
        </input>
        </p>
        
        <button type="button" class="btn btn-primary">Submit</button>
      </form>
    </div>
     
    </div>
    </body>
  )
}

export default Login
//     constructor() {
//     }
//     render(){
//       return (
//         <div>
//         <h3>Log In</h3>
//           <form>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
              
//             />
  
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
             
//             />
  
//             <button type="submit">Login</button>
//           </form>
//         </div>
//       );
//       ;
//   }
// }

