var Redirecting = props => {
  switch (props.appPage) {
    case 1:
      return React.createElement(NameEmailPass, {
        handleSubmit: props.handleSubmit
      });

    case 2:
      return React.createElement(AddressInfo, {
        handleSubmit: props.handleSubmit
      });

    case 3:
      return React.createElement(CreditInfo, {
        handleSubmit: props.handleSubmit
      });

    case 4:
      return React.createElement(CompleteCheckout, {
        nextPage: props.nextPage,
        user: props.user
      });

    default:
      return React.createElement("form", {
        onSubmit: props.nextPage
      }, React.createElement("input", {
        type: "submit",
        value: "Checkout"
      }));
  }
};

window.Redirecting = Redirecting;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9yZWRpcmVjdGluZy5qc3giXSwibmFtZXMiOlsiUmVkaXJlY3RpbmciLCJwcm9wcyIsImFwcFBhZ2UiLCJoYW5kbGVTdWJtaXQiLCJuZXh0UGFnZSIsInVzZXIiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLFdBQVcsR0FBSUMsS0FBRCxJQUFXO0FBQ3pCLFVBQVFBLEtBQUssQ0FBQ0MsT0FBZDtBQUNFLFNBQUssQ0FBTDtBQUNFLGFBQU8sb0JBQUMsYUFBRDtBQUFlLFFBQUEsWUFBWSxFQUFFRCxLQUFLLENBQUNFO0FBQW5DLFFBQVA7O0FBQ0YsU0FBSyxDQUFMO0FBQ0UsYUFBTyxvQkFBQyxXQUFEO0FBQWEsUUFBQSxZQUFZLEVBQUVGLEtBQUssQ0FBQ0U7QUFBakMsUUFBUDs7QUFDRixTQUFLLENBQUw7QUFDRSxhQUFPLG9CQUFDLFVBQUQ7QUFBWSxRQUFBLFlBQVksRUFBRUYsS0FBSyxDQUFDRTtBQUFoQyxRQUFQOztBQUNGLFNBQUssQ0FBTDtBQUNFLGFBQU8sb0JBQUMsZ0JBQUQ7QUFBa0IsUUFBQSxRQUFRLEVBQUVGLEtBQUssQ0FBQ0csUUFBbEM7QUFBNEMsUUFBQSxJQUFJLEVBQUVILEtBQUssQ0FBQ0k7QUFBeEQsUUFBUDs7QUFDRjtBQUNFLGFBQU87QUFBTSxRQUFBLFFBQVEsRUFBRUosS0FBSyxDQUFDRztBQUF0QixTQUNMO0FBQU8sUUFBQSxJQUFJLEVBQUMsUUFBWjtBQUFxQixRQUFBLEtBQUssRUFBQztBQUEzQixRQURLLENBQVA7QUFWSjtBQWNELENBZkg7O0FBaUJFRSxNQUFNLENBQUNOLFdBQVAsR0FBcUJBLFdBQXJCIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFJlZGlyZWN0aW5nID0gKHByb3BzKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHByb3BzLmFwcFBhZ2UpIHtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHJldHVybiA8TmFtZUVtYWlsUGFzcyBoYW5kbGVTdWJtaXQ9e3Byb3BzLmhhbmRsZVN1Ym1pdH0gLz47XHJcbiAgICAgIGNhc2UgMjpcclxuICAgICAgICByZXR1cm4gPEFkZHJlc3NJbmZvIGhhbmRsZVN1Ym1pdD17cHJvcHMuaGFuZGxlU3VibWl0fSAvPjtcclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIHJldHVybiA8Q3JlZGl0SW5mbyBoYW5kbGVTdWJtaXQ9e3Byb3BzLmhhbmRsZVN1Ym1pdH0gLz47XHJcbiAgICAgIGNhc2UgNDpcclxuICAgICAgICByZXR1cm4gPENvbXBsZXRlQ2hlY2tvdXQgbmV4dFBhZ2U9e3Byb3BzLm5leHRQYWdlfSB1c2VyPXtwcm9wcy51c2VyfSAvPjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gPGZvcm0gb25TdWJtaXQ9e3Byb3BzLm5leHRQYWdlfT5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPSdzdWJtaXQnIHZhbHVlPSdDaGVja291dCcgLz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3aW5kb3cuUmVkaXJlY3RpbmcgPSBSZWRpcmVjdGluZzsiXX0=