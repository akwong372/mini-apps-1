var CreditInfo = (props) =>
  (
    <div>
      <h1>Payment Information</h1>
      <form method='POST' action='/' onSubmit={(e)=>{e.persist(); props.handleSubmit(e);}}>
        <label htmlFor='creditcard'>Enter Credit Card Information: </label>
        <input type='text' id='creditcard' pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"placeholder='0000 0000 0000 0000' required/>
        <br/>
        <label htmlFor='expire'>Enter Expiry Date: </label>
        <input type='month' id='expire' required/>
        <br/>
        <label htmlFor='cvv'>Enter CVV: </label>
        <input type='text' id='cvv' maxLength='3' size='5' placeholder='123' required/>
        <br/>
        <label htmlFor='billzipcode'>Enter Billing Zip Code: </label>
        <input type='text' id='billzipcode' maxLength='8' size='10' placeholder='123456' required/>
        <br/>
        <input type='submit' value='Next'/>
      </form>
      <br/>
      <button onClick={props.goBack}>Back</button>
    </div>
  )


window.CreditInfo = CreditInfo;