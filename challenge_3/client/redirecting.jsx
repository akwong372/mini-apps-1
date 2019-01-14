var Redirecting = (props) => {
    switch (props.appPage) {
      case 1:
        return <NameEmailPass handleSubmit={props.handleSubmit} />;
      case 2:
        return <AddressInfo handleSubmit={props.handleSubmit} />;
      case 3:
        return <CreditInfo handleSubmit={props.handleSubmit} />;
      default:
        return <form>
          <input type='submit' value='Checkout' />
        </form>
    }
  }

  window.Redirecting = Redirecting;