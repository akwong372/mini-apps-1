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
  placeholder: "Address Line 1",
  required: true
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
  placeholder: "City Name",
  required: true
}), React.createElement("br", null), React.createElement("label", {
  htmlFor: "state"
}, "Enter State: "), React.createElement("input", {
  type: "text",
  id: "state",
  maxLength: "2",
  size: "4",
  placeholder: "CA",
  required: true
}), React.createElement("br", null), React.createElement("label", {
  htmlFor: "zipcode"
}, "Enter Zip Code: "), React.createElement("input", {
  type: "text",
  id: "zipcode",
  maxLength: "8",
  size: "10",
  placeholder: "123456",
  required: true
}), React.createElement("br", null), React.createElement("label", {
  htmlFor: "phone"
}, "Enter your phone number:"), React.createElement("input", {
  type: "tel",
  id: "phone",
  name: "phone",
  pattern: "[0-9]{10}",
  placeholder: "1234567890",
  required: true
}), React.createElement("br", null), React.createElement("input", {
  type: "submit",
  value: "Next"
})));

window.AddressInfo = AddressInfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9mb3JtMi5qc3giXSwibmFtZXMiOlsiQWRkcmVzc0luZm8iLCJwcm9wcyIsImUiLCJwZXJzaXN0IiwiaGFuZGxlU3VibWl0Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxXQUFXLEdBQUlDLEtBQUQsSUFFZCxpQ0FDRSx1REFERixFQUVFO0FBQU0sRUFBQSxNQUFNLEVBQUMsTUFBYjtBQUFvQixFQUFBLE1BQU0sRUFBQyxHQUEzQjtBQUErQixFQUFBLFFBQVEsRUFBR0MsQ0FBRCxJQUFLO0FBQUNBLElBQUFBLENBQUMsQ0FBQ0MsT0FBRjtBQUFhRixJQUFBQSxLQUFLLENBQUNHLFlBQU4sQ0FBbUJGLENBQW5CO0FBQXVCO0FBQW5GLEdBQ0U7QUFBTyxFQUFBLE9BQU8sRUFBQztBQUFmLDhCQURGLEVBRUUsK0JBRkYsRUFHRTtBQUFPLEVBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsRUFBQSxFQUFFLEVBQUMsVUFBdEI7QUFBaUMsRUFBQSxTQUFTLEVBQUMsS0FBM0M7QUFBaUQsRUFBQSxXQUFXLEVBQUMsZ0JBQTdEO0FBQThFLEVBQUEsUUFBUTtBQUF0RixFQUhGLEVBSUUsK0JBSkYsRUFLRTtBQUFPLEVBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsRUFBQSxFQUFFLEVBQUMsVUFBdEI7QUFBaUMsRUFBQSxTQUFTLEVBQUMsS0FBM0M7QUFBaUQsRUFBQSxXQUFXLEVBQUM7QUFBN0QsRUFMRixFQU1FLCtCQU5GLEVBT0U7QUFBTyxFQUFBLE9BQU8sRUFBQztBQUFmLGtCQVBGLEVBUUU7QUFBTyxFQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLEVBQUEsRUFBRSxFQUFDLE1BQXRCO0FBQTZCLEVBQUEsV0FBVyxFQUFDLFdBQXpDO0FBQXFELEVBQUEsUUFBUTtBQUE3RCxFQVJGLEVBU0UsK0JBVEYsRUFVRTtBQUFPLEVBQUEsT0FBTyxFQUFDO0FBQWYsbUJBVkYsRUFXRTtBQUFPLEVBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsRUFBQSxFQUFFLEVBQUMsT0FBdEI7QUFBOEIsRUFBQSxTQUFTLEVBQUMsR0FBeEM7QUFBNEMsRUFBQSxJQUFJLEVBQUMsR0FBakQ7QUFBcUQsRUFBQSxXQUFXLEVBQUMsSUFBakU7QUFBc0UsRUFBQSxRQUFRO0FBQTlFLEVBWEYsRUFZRSwrQkFaRixFQWFFO0FBQU8sRUFBQSxPQUFPLEVBQUM7QUFBZixzQkFiRixFQWNFO0FBQU8sRUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixFQUFBLEVBQUUsRUFBQyxTQUF0QjtBQUFnQyxFQUFBLFNBQVMsRUFBQyxHQUExQztBQUE4QyxFQUFBLElBQUksRUFBQyxJQUFuRDtBQUF3RCxFQUFBLFdBQVcsRUFBQyxRQUFwRTtBQUE2RSxFQUFBLFFBQVE7QUFBckYsRUFkRixFQWVFLCtCQWZGLEVBZ0JFO0FBQU8sRUFBQSxPQUFPLEVBQUM7QUFBZiw4QkFoQkYsRUFpQkU7QUFBTyxFQUFBLElBQUksRUFBQyxLQUFaO0FBQWtCLEVBQUEsRUFBRSxFQUFDLE9BQXJCO0FBQTZCLEVBQUEsSUFBSSxFQUFDLE9BQWxDO0FBQTBDLEVBQUEsT0FBTyxFQUFDLFdBQWxEO0FBQThELEVBQUEsV0FBVyxFQUFDLFlBQTFFO0FBQXVGLEVBQUEsUUFBUTtBQUEvRixFQWpCRixFQWtCRSwrQkFsQkYsRUFtQkU7QUFBTyxFQUFBLElBQUksRUFBQyxRQUFaO0FBQXFCLEVBQUEsS0FBSyxFQUFDO0FBQTNCLEVBbkJGLENBRkYsQ0FGSjs7QUE2QkFHLE1BQU0sQ0FBQ0wsV0FBUCxHQUFxQkEsV0FBckIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQWRkcmVzc0luZm8gPSAocHJvcHMpID0+XHJcbiAgKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPlNoaXBwaW5nIEluZm9ybWF0aW9uPC9oMT5cclxuICAgICAgPGZvcm0gbWV0aG9kPSdQT1NUJyBhY3Rpb249Jy8nIG9uU3VibWl0PXsoZSk9PntlLnBlcnNpc3QoKTsgcHJvcHMuaGFuZGxlU3VibWl0KGUpO319PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdhZGRyZXNzJz5FbnRlciBTaGlwcGluZyBBZGRyZXNzOiA8L2xhYmVsPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nYWRkcmVzczEnIG1heExlbmd0aD0nMTAwJyBwbGFjZWhvbGRlcj0nQWRkcmVzcyBMaW5lIDEnIHJlcXVpcmVkLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J2FkZHJlc3MyJyBtYXhMZW5ndGg9JzEwMCcgcGxhY2Vob2xkZXI9J0FkZHJlc3MgTGluZSAyJyAvPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdjaXR5Jz5FbnRlciBDaXR5OiA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nY2l0eScgcGxhY2Vob2xkZXI9J0NpdHkgTmFtZScgcmVxdWlyZWQvPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdzdGF0ZSc+RW50ZXIgU3RhdGU6IDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdzdGF0ZScgbWF4TGVuZ3RoPScyJyBzaXplPSc0JyBwbGFjZWhvbGRlcj0nQ0EnIHJlcXVpcmVkLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0nemlwY29kZSc+RW50ZXIgWmlwIENvZGU6IDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSd6aXBjb2RlJyBtYXhMZW5ndGg9JzgnIHNpemU9JzEwJyBwbGFjZWhvbGRlcj0nMTIzNDU2JyByZXF1aXJlZC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiPkVudGVyIHlvdXIgcGhvbmUgbnVtYmVyOjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZWxcIiBpZD1cInBob25lXCIgbmFtZT1cInBob25lXCIgcGF0dGVybj1cIlswLTldezEwfVwiIHBsYWNlaG9sZGVyPScxMjM0NTY3ODkwJyByZXF1aXJlZC8+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT0nc3VibWl0JyB2YWx1ZT0nTmV4dCcgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG5cclxuXHJcbndpbmRvdy5BZGRyZXNzSW5mbyA9IEFkZHJlc3NJbmZvOyJdfQ==