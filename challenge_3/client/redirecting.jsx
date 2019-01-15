var Redirecting = (props) => {
    switch (props.appPage) {
      case 1:
        return <NameEmailPass handleSubmit={props.handleSubmit} />;
      case 2:
        return <AddressInfo handleSubmit={props.handleSubmit} />;
      case 3:
        return <CreditInfo handleSubmit={props.handleSubmit} />;
      case 4:
        return <CompleteCheckout nextPage={props.nextPage} user={props.user} />;
      default:
        return <form onSubmit={props.nextPage}>
          <input type='submit' value='Checkout' />
        </form>
    }
  }

  window.Redirecting = Redirecting;