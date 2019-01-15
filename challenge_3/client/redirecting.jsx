var Redirecting = (props) => {
    switch (props.appPage) {
      case 1:
        return <NameEmailPass goBack={props.goBack} handleSubmit={props.handleSubmit} />;
      case 2:
        return <AddressInfo goBack={props.goBack} handleSubmit={props.handleSubmit} />;
      case 3:
        return <CreditInfo goBack={props.goBack} handleSubmit={props.handleSubmit} />;
      case 4:
        return <CompleteCheckout goBack={props.goBack} nextPage={props.nextPage} user={props.user} />;
      default:
        return <form onSubmit={props.nextPage}>
          <input type='submit' className='btn btn-primary' value='Checkout' />
        </form>
    }
  }

  window.Redirecting = Redirecting;