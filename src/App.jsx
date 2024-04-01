import './App.css'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import StatefulForm from './components/SimpleForm/StatefulForm/StatefulForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {

  const handleSignUpSubmit = data =>{
   console.log('sign up data', data);
}

  const handleUpdateProfile = data =>{
     console.log('update profile', data);
  }

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm formTitle={'Sign up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign up</h2>
          <p>please Sign uo right now</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile update'} handleSubmit={handleUpdateProfile} submitBtnText='update'>
        <div>
          <h2>update profile</h2>
          <p>Always keep your profile update</p>
        </div>
      </ReusableForm>
    </>
  )
}

export default App
