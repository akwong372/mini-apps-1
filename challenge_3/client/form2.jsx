var AddressInfo = (props) =>
  (
    <div>
      <h1>Shipping Information</h1>
      <form method='POST' action='/' onSubmit={(e)=>{e.persist(); props.handleSubmit(e);}}>
        <label htmlFor='address'>Enter Shipping Address: </label>
        <br />
        <input type='text' id='address1' maxLength='100' placeholder='Address Line 1' />
        <br />
        <input type='text' id='address2' maxLength='100' placeholder='Address Line 2' />
        <br />
        <label htmlFor='city'>Enter City: </label>
        <input type='text' id='city' placeholder='City Name' />
        <br />
        <label htmlFor='state'>Enter State: </label>
        <input type='text' id='state' maxLength='2' size='4' placeholder='CA' />
        <br />
        <label htmlFor='zipcode'>Enter Zip Code: </label>
        <input type='text' id='zipcode' maxLength='8' size='10' placeholder='Zip Code' />
        <br />
        <label htmlFor="phone">Enter your phone number:</label>
        <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder='1234567890' />
        <br/>
        <input type='submit' value='Next' />
      </form>
    </div>
  )


window.AddressInfo = AddressInfo;