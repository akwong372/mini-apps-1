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
        nextPage: props.nextPage
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9yZWRpcmVjdGluZy5qc3giXSwibmFtZXMiOlsiUmVkaXJlY3RpbmciLCJwcm9wcyIsImFwcFBhZ2UiLCJoYW5kbGVTdWJtaXQiLCJuZXh0UGFnZSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsV0FBVyxHQUFJQyxLQUFELElBQVc7QUFDekIsVUFBUUEsS0FBSyxDQUFDQyxPQUFkO0FBQ0UsU0FBSyxDQUFMO0FBQ0UsYUFBTyxvQkFBQyxhQUFEO0FBQWUsUUFBQSxZQUFZLEVBQUVELEtBQUssQ0FBQ0U7QUFBbkMsUUFBUDs7QUFDRixTQUFLLENBQUw7QUFDRSxhQUFPLG9CQUFDLFdBQUQ7QUFBYSxRQUFBLFlBQVksRUFBRUYsS0FBSyxDQUFDRTtBQUFqQyxRQUFQOztBQUNGLFNBQUssQ0FBTDtBQUNFLGFBQU8sb0JBQUMsVUFBRDtBQUFZLFFBQUEsWUFBWSxFQUFFRixLQUFLLENBQUNFO0FBQWhDLFFBQVA7O0FBQ0YsU0FBSyxDQUFMO0FBQ0UsYUFBTyxvQkFBQyxnQkFBRDtBQUFrQixRQUFBLFFBQVEsRUFBRUYsS0FBSyxDQUFDRztBQUFsQyxRQUFQOztBQUNGO0FBQ0UsYUFBTztBQUFNLFFBQUEsUUFBUSxFQUFFSCxLQUFLLENBQUNHO0FBQXRCLFNBQ0w7QUFBTyxRQUFBLElBQUksRUFBQyxRQUFaO0FBQXFCLFFBQUEsS0FBSyxFQUFDO0FBQTNCLFFBREssQ0FBUDtBQVZKO0FBY0QsQ0FmSDs7QUFpQkVDLE1BQU0sQ0FBQ0wsV0FBUCxHQUFxQkEsV0FBckIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUmVkaXJlY3RpbmcgPSAocHJvcHMpID0+IHtcclxuICAgIHN3aXRjaCAocHJvcHMuYXBwUGFnZSkge1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgcmV0dXJuIDxOYW1lRW1haWxQYXNzIGhhbmRsZVN1Ym1pdD17cHJvcHMuaGFuZGxlU3VibWl0fSAvPjtcclxuICAgICAgY2FzZSAyOlxyXG4gICAgICAgIHJldHVybiA8QWRkcmVzc0luZm8gaGFuZGxlU3VibWl0PXtwcm9wcy5oYW5kbGVTdWJtaXR9IC8+O1xyXG4gICAgICBjYXNlIDM6XHJcbiAgICAgICAgcmV0dXJuIDxDcmVkaXRJbmZvIGhhbmRsZVN1Ym1pdD17cHJvcHMuaGFuZGxlU3VibWl0fSAvPjtcclxuICAgICAgY2FzZSA0OlxyXG4gICAgICAgIHJldHVybiA8Q29tcGxldGVDaGVja291dCBuZXh0UGFnZT17cHJvcHMubmV4dFBhZ2V9IC8+O1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiA8Zm9ybSBvblN1Ym1pdD17cHJvcHMubmV4dFBhZ2V9PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9J3N1Ym1pdCcgdmFsdWU9J0NoZWNrb3V0JyAvPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdpbmRvdy5SZWRpcmVjdGluZyA9IFJlZGlyZWN0aW5nOyJdfQ==