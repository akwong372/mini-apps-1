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

    default:
      return React.createElement("form", null, React.createElement("input", {
        type: "submit",
        value: "Checkout"
      }));
  }
};

window.Redirecting = Redirecting;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9yZWRpcmVjdGluZy5qc3giXSwibmFtZXMiOlsiUmVkaXJlY3RpbmciLCJwcm9wcyIsImFwcFBhZ2UiLCJoYW5kbGVTdWJtaXQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLFdBQVcsR0FBSUMsS0FBRCxJQUFXO0FBQ3pCLFVBQVFBLEtBQUssQ0FBQ0MsT0FBZDtBQUNFLFNBQUssQ0FBTDtBQUNFLGFBQU8sb0JBQUMsYUFBRDtBQUFlLFFBQUEsWUFBWSxFQUFFRCxLQUFLLENBQUNFO0FBQW5DLFFBQVA7O0FBQ0YsU0FBSyxDQUFMO0FBQ0UsYUFBTyxvQkFBQyxXQUFEO0FBQWEsUUFBQSxZQUFZLEVBQUVGLEtBQUssQ0FBQ0U7QUFBakMsUUFBUDs7QUFDRixTQUFLLENBQUw7QUFDRSxhQUFPLG9CQUFDLFVBQUQ7QUFBWSxRQUFBLFlBQVksRUFBRUYsS0FBSyxDQUFDRTtBQUFoQyxRQUFQOztBQUNGO0FBQ0UsYUFBTyxrQ0FDTDtBQUFPLFFBQUEsSUFBSSxFQUFDLFFBQVo7QUFBcUIsUUFBQSxLQUFLLEVBQUM7QUFBM0IsUUFESyxDQUFQO0FBUko7QUFZRCxDQWJIOztBQWVFQyxNQUFNLENBQUNKLFdBQVAsR0FBcUJBLFdBQXJCIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFJlZGlyZWN0aW5nID0gKHByb3BzKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHByb3BzLmFwcFBhZ2UpIHtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHJldHVybiA8TmFtZUVtYWlsUGFzcyBoYW5kbGVTdWJtaXQ9e3Byb3BzLmhhbmRsZVN1Ym1pdH0gLz47XHJcbiAgICAgIGNhc2UgMjpcclxuICAgICAgICByZXR1cm4gPEFkZHJlc3NJbmZvIGhhbmRsZVN1Ym1pdD17cHJvcHMuaGFuZGxlU3VibWl0fSAvPjtcclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIHJldHVybiA8Q3JlZGl0SW5mbyBoYW5kbGVTdWJtaXQ9e3Byb3BzLmhhbmRsZVN1Ym1pdH0gLz47XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIDxmb3JtPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9J3N1Ym1pdCcgdmFsdWU9J0NoZWNrb3V0JyAvPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdpbmRvdy5SZWRpcmVjdGluZyA9IFJlZGlyZWN0aW5nOyJdfQ==