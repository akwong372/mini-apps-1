var NameEmailPass = (props) =>
  (
    <div className='container'>
      <h1>Account Creation</h1>
      <form method='POST' action='/' onSubmit={(e)=>{e.persist(); props.handleSubmit(e);}}>
        <label htmlFor='username'>Enter Username: </label>
        <input type='text' id='username' placeholder='Username' required/>
        <br/>
        <label htmlFor='password'>Enter Password: </label>
        <input type='password' id='password' placeholder='password' required/>
        <br/>
        <label htmlFor='email'>Enter Email Address: </label>
        <input type='email' id='email' placeholder='example@email.com'/>
        <br/>
        <input type='submit' className='btn btn-primary' value='Next'/>
      </form>
      <br/>
      <button onClick={props.goBack} className='btn btn-info'>Back</button>
    </div>
  )


window.NameEmailPass = NameEmailPass;