var AddressInfo = props => React.createElement("div", null, React.createElement("h1", null, "Shipping Information"), React.createElement("form", {
  method: "POST",
  action: "/",
  onSubmit: e => {
    e.persist();
    props.handleSubmit(e);
  }
}, React.createElement("label", {
  htmlFor: "address"
}, "Enter Shipping Address: "), React.createElement("br", null), React.createElement("input", {
  type: "text",
  id: "address1",
  maxLength: "100",
  placeholder: "Address Line 1"
}), React.createElement("br", null), React.createElement("input", {
  type: "text",
  id: "address2",
  maxLength: "100",
  placeholder: "Address Line 2"
}), React.createElement("br", null), React.createElement("label", {
  htmlFor: "city"
}, "Enter City: "), React.createElement("input", {
  type: "text",
  id: "city",
  placeholder: "City Name"
}), React.createElement("br", null), React.createElement("label", {
  htmlFor: "state"
}, "Enter State: "), React.createElement("input", {
  type: "text",
  id: "state",
  maxLength: "2",
  size: "4",
  placeholder: "CA"
}), React.createElement("br", null), React.createElement("label", {
  htmlFor: "zipcode"
}, "Enter Zip Code: "), React.createElement("input", {
  type: "text",
  id: "zipcode",
  maxLength: "8",
  size: "10",
  placeholder: "Zip Code"
}), React.createElement("br", null), React.createElement("label", {
  htmlFor: "phone"
}, "Enter your phone number:"), React.createElement("input", {
  type: "tel",
  id: "phone",
  name: "phone",
  pattern: "([0-9]{3})[0-9]{3}[0-9]{4}",
  placeholder: "(555)5555555"
}), React.createElement("br", null), React.createElement("input", {
  type: "submit",
  value: "Next"
})));

window.AddressInfo = AddressInfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9mb3JtMi5qc3giXSwibmFtZXMiOlsiQWRkcmVzc0luZm8iLCJwcm9wcyIsImUiLCJwZXJzaXN0IiwiaGFuZGxlU3VibWl0Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxXQUFXLEdBQUlDLEtBQUQsSUFFZCxpQ0FDRSx1REFERixFQUVFO0FBQU0sRUFBQSxNQUFNLEVBQUMsTUFBYjtBQUFvQixFQUFBLE1BQU0sRUFBQyxHQUEzQjtBQUErQixFQUFBLFFBQVEsRUFBR0MsQ0FBRCxJQUFLO0FBQUNBLElBQUFBLENBQUMsQ0FBQ0MsT0FBRjtBQUFhRixJQUFBQSxLQUFLLENBQUNHLFlBQU4sQ0FBbUJGLENBQW5CO0FBQXVCO0FBQW5GLEdBQ0U7QUFBTyxFQUFBLE9BQU8sRUFBQztBQUFmLDhCQURGLEVBRUUsK0JBRkYsRUFHRTtBQUFPLEVBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsRUFBQSxFQUFFLEVBQUMsVUFBdEI7QUFBaUMsRUFBQSxTQUFTLEVBQUMsS0FBM0M7QUFBaUQsRUFBQSxXQUFXLEVBQUM7QUFBN0QsRUFIRixFQUlFLCtCQUpGLEVBS0U7QUFBTyxFQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLEVBQUEsRUFBRSxFQUFDLFVBQXRCO0FBQWlDLEVBQUEsU0FBUyxFQUFDLEtBQTNDO0FBQWlELEVBQUEsV0FBVyxFQUFDO0FBQTdELEVBTEYsRUFNRSwrQkFORixFQU9FO0FBQU8sRUFBQSxPQUFPLEVBQUM7QUFBZixrQkFQRixFQVFFO0FBQU8sRUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixFQUFBLEVBQUUsRUFBQyxNQUF0QjtBQUE2QixFQUFBLFdBQVcsRUFBQztBQUF6QyxFQVJGLEVBU0UsK0JBVEYsRUFVRTtBQUFPLEVBQUEsT0FBTyxFQUFDO0FBQWYsbUJBVkYsRUFXRTtBQUFPLEVBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsRUFBQSxFQUFFLEVBQUMsT0FBdEI7QUFBOEIsRUFBQSxTQUFTLEVBQUMsR0FBeEM7QUFBNEMsRUFBQSxJQUFJLEVBQUMsR0FBakQ7QUFBcUQsRUFBQSxXQUFXLEVBQUM7QUFBakUsRUFYRixFQVlFLCtCQVpGLEVBYUU7QUFBTyxFQUFBLE9BQU8sRUFBQztBQUFmLHNCQWJGLEVBY0U7QUFBTyxFQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLEVBQUEsRUFBRSxFQUFDLFNBQXRCO0FBQWdDLEVBQUEsU0FBUyxFQUFDLEdBQTFDO0FBQThDLEVBQUEsSUFBSSxFQUFDLElBQW5EO0FBQXdELEVBQUEsV0FBVyxFQUFDO0FBQXBFLEVBZEYsRUFlRSwrQkFmRixFQWdCRTtBQUFPLEVBQUEsT0FBTyxFQUFDO0FBQWYsOEJBaEJGLEVBaUJFO0FBQU8sRUFBQSxJQUFJLEVBQUMsS0FBWjtBQUFrQixFQUFBLEVBQUUsRUFBQyxPQUFyQjtBQUE2QixFQUFBLElBQUksRUFBQyxPQUFsQztBQUEwQyxFQUFBLE9BQU8sRUFBQyw0QkFBbEQ7QUFBK0UsRUFBQSxXQUFXLEVBQUM7QUFBM0YsRUFqQkYsRUFrQkUsK0JBbEJGLEVBbUJFO0FBQU8sRUFBQSxJQUFJLEVBQUMsUUFBWjtBQUFxQixFQUFBLEtBQUssRUFBQztBQUEzQixFQW5CRixDQUZGLENBRko7O0FBNkJBRyxNQUFNLENBQUNMLFdBQVAsR0FBcUJBLFdBQXJCIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEFkZHJlc3NJbmZvID0gKHByb3BzKSA9PlxyXG4gIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5TaGlwcGluZyBJbmZvcm1hdGlvbjwvaDE+XHJcbiAgICAgIDxmb3JtIG1ldGhvZD0nUE9TVCcgYWN0aW9uPScvJyBvblN1Ym1pdD17KGUpPT57ZS5wZXJzaXN0KCk7IHByb3BzLmhhbmRsZVN1Ym1pdChlKTt9fT5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0nYWRkcmVzcyc+RW50ZXIgU2hpcHBpbmcgQWRkcmVzczogPC9sYWJlbD5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J2FkZHJlc3MxJyBtYXhMZW5ndGg9JzEwMCcgcGxhY2Vob2xkZXI9J0FkZHJlc3MgTGluZSAxJyAvPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nYWRkcmVzczInIG1heExlbmd0aD0nMTAwJyBwbGFjZWhvbGRlcj0nQWRkcmVzcyBMaW5lIDInIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2NpdHknPkVudGVyIENpdHk6IDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdjaXR5JyBwbGFjZWhvbGRlcj0nQ2l0eSBOYW1lJyAvPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdzdGF0ZSc+RW50ZXIgU3RhdGU6IDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdzdGF0ZScgbWF4TGVuZ3RoPScyJyBzaXplPSc0JyBwbGFjZWhvbGRlcj0nQ0EnIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3ppcGNvZGUnPkVudGVyIFppcCBDb2RlOiA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nemlwY29kZScgbWF4TGVuZ3RoPSc4JyBzaXplPScxMCcgcGxhY2Vob2xkZXI9J1ppcCBDb2RlJyAvPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGhvbmVcIj5FbnRlciB5b3VyIHBob25lIG51bWJlcjo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgaWQ9XCJwaG9uZVwiIG5hbWU9XCJwaG9uZVwiIHBhdHRlcm49XCIoWzAtOV17M30pWzAtOV17M31bMC05XXs0fVwiIHBsYWNlaG9sZGVyPScoNTU1KTU1NTU1NTUnIC8+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT0nc3VibWl0JyB2YWx1ZT0nTmV4dCcgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG5cclxuXHJcbndpbmRvdy5BZGRyZXNzSW5mbyA9IEFkZHJlc3NJbmZvOyJdfQ==