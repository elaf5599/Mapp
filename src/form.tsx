import{useFormik} from 'formik'
import {Validation} from './Validation'
const initialValues={
    name:'',
    email:'',
    password:'',
    confirmpassword:''
}
let Form: React.FC=()=> {
   const {values, handleBlur,handleChange,handleSubmit, errors}= useFormik({
        initialValues:initialValues,
        validationSchema: Validation,
        onSubmit:(values)=>{
            console.log(values)
        }
    });
    return (
      <div>
        <div className="flex justify-center items-center h-screen bg-indigo-600"> 
        <div className="w-96 p-6 shadow-lg bg-white rounded-md">
          <h1 className="text-3xl block text-center font-semibold">Login</h1>

     

<form onSubmit={handleSubmit}>
  <div className="mt-3">
    <label className="block text-base md-2" htmlFor="name"> Username</label>
    <input type='text' name="name" value={values.name} className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Username"
    onBlur={handleBlur} onChange={handleChange}
    />
    </div> 
    <div className='text-red-600'>{errors.name &&<small>{ errors.name}  </small>}</div>

    <div className="mt-3">
    <label className="block text-base md-2" htmlFor="email"> Email</label>
    <input type='email' name="email" value={values.email}  className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter password"
    onBlur={handleBlur} onChange={handleChange}
    />
    </div>  
    <div className='text-red-600'>{errors.email &&<small>{ errors.email}  </small>}</div>

    <div className="mt-3">
    <label className="block text-base md-2" htmlFor="password"> Password</label>
    <input type='password' name="password" value={values.password}  className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter password" 
    onBlur={handleBlur} onChange={handleChange}/>
    </div>  
    <div className='text-red-600'>{errors.password &&<small>{ errors.password}  </small>}</div>


    <div className="mt-3">
    <label className="block text-base md-2" htmlFor="confirmpassword"> confirm password</label>
    <input type='password' name="confirmpassword" value={values.confirmpassword}  className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter password" 
    onBlur={handleBlur} onChange={handleChange}/>
    </div>  
    <div className='text-blue-600'>{errors.confirmpassword &&<small>{ errors.confirmpassword}  </small>}</div>

    <div className='mt-3 flex justify-center items-center'>
    <button className="  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Submit
</button>
</div>
    </form>
        </div>
       
        </div>
        <div></div>
      </div>
    );
  }
  
  export default Form;
  