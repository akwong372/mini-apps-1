var NameEmailPass = (props) =>
  (
    <div>
      <h1>Account Creation</h1>
      <form method='POST' action='/'>
        <label htmlFor='username'>Enter Username: </label>
        <input type='text' id='username' placeholder='Username'/>
        <br/>
        <label htmlFor='password'>Enter Password: </label>
        <input type='password' id='password' placeholder='password'/>
        <br/>
        <label htmlFor='email'>Enter Email Address: </label>
        <input type='email' id='email' placeholder='example@email.com'/>
        <br/>
        <input type='submit' value='Next'/>
      </form>
    </div>
  )


window.NameEmailPass = NameEmailPass;