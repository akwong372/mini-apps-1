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
  pattern: "[0-9]{10}",
  placeholder: "1234567890"
}), React.createElement("br", null), React.createElement("input", {
  type: "submit",
  value: "Next"
})));

window.AddressInfo = AddressInfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9mb3JtMi5qc3giXSwibmFtZXMiOlsiQWRkcmVzc0luZm8iLCJwcm9wcyIsImUiLCJwZXJzaXN0IiwiaGFuZGxlU3VibWl0Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxXQUFXLEdBQUlDLEtBQUQsSUFFZCxpQ0FDRSx1REFERixFQUVFO0FBQU0sRUFBQSxNQUFNLEVBQUMsTUFBYjtBQUFvQixFQUFBLE1BQU0sRUFBQyxHQUEzQjtBQUErQixFQUFBLFFBQVEsRUFBR0MsQ0FBRCxJQUFLO0FBQUNBLElBQUFBLENBQUMsQ0FBQ0MsT0FBRjtBQUFhRixJQUFBQSxLQUFLLENBQUNHLFlBQU4sQ0FBbUJGLENBQW5CO0FBQXVCO0FBQW5GLEdBQ0U7QUFBTyxFQUFBLE9BQU8sRUFBQztBQUFmLDhCQURGLEVBRUUsK0JBRkYsRUFHRTtBQUFPLEVBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsRUFBQSxFQUFFLEVBQUMsVUFBdEI7QUFBaUMsRUFBQSxTQUFTLEVBQUMsS0FBM0M7QUFBaUQsRUFBQSxXQUFXLEVBQUM7QUFBN0QsRUFIRixFQUlFLCtCQUpGLEVBS0U7QUFBTyxFQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLEVBQUEsRUFBRSxFQUFDLFVBQXRCO0FBQWlDLEVBQUEsU0FBUyxFQUFDLEtBQTNDO0FBQWlELEVBQUEsV0FBVyxFQUFDO0FBQTdELEVBTEYsRUFNRSwrQkFORixFQU9FO0FBQU8sRUFBQSxPQUFPLEVBQUM7QUFBZixrQkFQRixFQVFFO0FBQU8sRUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixFQUFBLEVBQUUsRUFBQyxNQUF0QjtBQUE2QixFQUFBLFdBQVcsRUFBQztBQUF6QyxFQVJGLEVBU0UsK0JBVEYsRUFVRTtBQUFPLEVBQUEsT0FBTyxFQUFDO0FBQWYsbUJBVkYsRUFXRTtBQUFPLEVBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsRUFBQSxFQUFFLEVBQUMsT0FBdEI7QUFBOEIsRUFBQSxTQUFTLEVBQUMsR0FBeEM7QUFBNEMsRUFBQSxJQUFJLEVBQUMsR0FBakQ7QUFBcUQsRUFBQSxXQUFXLEVBQUM7QUFBakUsRUFYRixFQVlFLCtCQVpGLEVBYUU7QUFBTyxFQUFBLE9BQU8sRUFBQztBQUFmLHNCQWJGLEVBY0U7QUFBTyxFQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLEVBQUEsRUFBRSxFQUFDLFNBQXRCO0FBQWdDLEVBQUEsU0FBUyxFQUFDLEdBQTFDO0FBQThDLEVBQUEsSUFBSSxFQUFDLElBQW5EO0FBQXdELEVBQUEsV0FBVyxFQUFDO0FBQXBFLEVBZEYsRUFlRSwrQkFmRixFQWdCRTtBQUFPLEVBQUEsT0FBTyxFQUFDO0FBQWYsOEJBaEJGLEVBaUJFO0FBQU8sRUFBQSxJQUFJLEVBQUMsS0FBWjtBQUFrQixFQUFBLEVBQUUsRUFBQyxPQUFyQjtBQUE2QixFQUFBLElBQUksRUFBQyxPQUFsQztBQUEwQyxFQUFBLE9BQU8sRUFBQyxXQUFsRDtBQUE4RCxFQUFBLFdBQVcsRUFBQztBQUExRSxFQWpCRixFQWtCRSwrQkFsQkYsRUFtQkU7QUFBTyxFQUFBLElBQUksRUFBQyxRQUFaO0FBQXFCLEVBQUEsS0FBSyxFQUFDO0FBQTNCLEVBbkJGLENBRkYsQ0FGSjs7QUE2QkFHLE1BQU0sQ0FBQ0wsV0FBUCxHQUFxQkEsV0FBckIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQWRkcmVzc0luZm8gPSAocHJvcHMpID0+XHJcbiAgKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPlNoaXBwaW5nIEluZm9ybWF0aW9uPC9oMT5cclxuICAgICAgPGZvcm0gbWV0aG9kPSdQT1NUJyBhY3Rpb249Jy8nIG9uU3VibWl0PXsoZSk9PntlLnBlcnNpc3QoKTsgcHJvcHMuaGFuZGxlU3VibWl0KGUpO319PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdhZGRyZXNzJz5FbnRlciBTaGlwcGluZyBBZGRyZXNzOiA8L2xhYmVsPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nYWRkcmVzczEnIG1heExlbmd0aD0nMTAwJyBwbGFjZWhvbGRlcj0nQWRkcmVzcyBMaW5lIDEnIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdhZGRyZXNzMicgbWF4TGVuZ3RoPScxMDAnIHBsYWNlaG9sZGVyPSdBZGRyZXNzIExpbmUgMicgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0nY2l0eSc+RW50ZXIgQ2l0eTogPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J2NpdHknIHBsYWNlaG9sZGVyPSdDaXR5IE5hbWUnIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3N0YXRlJz5FbnRlciBTdGF0ZTogPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J3N0YXRlJyBtYXhMZW5ndGg9JzInIHNpemU9JzQnIHBsYWNlaG9sZGVyPSdDQScgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0nemlwY29kZSc+RW50ZXIgWmlwIENvZGU6IDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSd6aXBjb2RlJyBtYXhMZW5ndGg9JzgnIHNpemU9JzEwJyBwbGFjZWhvbGRlcj0nWmlwIENvZGUnIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiPkVudGVyIHlvdXIgcGhvbmUgbnVtYmVyOjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZWxcIiBpZD1cInBob25lXCIgbmFtZT1cInBob25lXCIgcGF0dGVybj1cIlswLTldezEwfVwiIHBsYWNlaG9sZGVyPScxMjM0NTY3ODkwJyAvPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9J3N1Ym1pdCcgdmFsdWU9J05leHQnIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxuXHJcblxyXG53aW5kb3cuQWRkcmVzc0luZm8gPSBBZGRyZXNzSW5mbzsiXX0=