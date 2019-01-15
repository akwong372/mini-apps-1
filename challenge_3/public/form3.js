var CreditInfo = props => React.createElement("div", null, React.createElement("h1", null, "Payment Information"), React.createElement("form", {
  method: "POST",
  action: "/",
  onSubmit: e => {
    e.persist();
    props.handleSubmit(e);
  }
}, React.createElement("label", {
  htmlFor: "creditcard"
}, "Enter Credit Card Information: "), React.createElement("input", {
  type: "text",
  id: "creditcard",
  pattern: "[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}",
  placeholder: "0000 0000 0000 0000",
  required: true
}), React.createElement("br", null), React.createElement("label", {
  htmlFor: "expire"
}, "Enter Expiry Date: "), React.createElement("input", {
  type: "month",
  id: "expire",
  required: true
}), React.createElement("br", null), React.createElement("label", {
  htmlFor: "cvv"
}, "Enter CVV: "), React.createElement("input", {
  type: "text",
  id: "cvv",
  maxLength: "3",
  size: "5",
  placeholder: "123",
  required: true
}), React.createElement("br", null), React.createElement("label", {
  htmlFor: "billzipcode"
}, "Enter Billing Zip Code: "), React.createElement("input", {
  type: "text",
  id: "billzipcode",
  maxLength: "8",
  size: "10",
  placeholder: "123456",
  required: true
}), React.createElement("br", null), React.createElement("input", {
  type: "submit",
  value: "Next"
})));

window.CreditInfo = CreditInfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9mb3JtMy5qc3giXSwibmFtZXMiOlsiQ3JlZGl0SW5mbyIsInByb3BzIiwiZSIsInBlcnNpc3QiLCJoYW5kbGVTdWJtaXQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLFVBQVUsR0FBSUMsS0FBRCxJQUViLGlDQUNFLHNEQURGLEVBRUU7QUFBTSxFQUFBLE1BQU0sRUFBQyxNQUFiO0FBQW9CLEVBQUEsTUFBTSxFQUFDLEdBQTNCO0FBQStCLEVBQUEsUUFBUSxFQUFHQyxDQUFELElBQUs7QUFBQ0EsSUFBQUEsQ0FBQyxDQUFDQyxPQUFGO0FBQWFGLElBQUFBLEtBQUssQ0FBQ0csWUFBTixDQUFtQkYsQ0FBbkI7QUFBdUI7QUFBbkYsR0FDRTtBQUFPLEVBQUEsT0FBTyxFQUFDO0FBQWYscUNBREYsRUFFRTtBQUFPLEVBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsRUFBQSxFQUFFLEVBQUMsWUFBdEI7QUFBbUMsRUFBQSxPQUFPLEVBQUMscUNBQTNDO0FBQWdGLEVBQUEsV0FBVyxFQUFDLHFCQUE1RjtBQUFrSCxFQUFBLFFBQVE7QUFBMUgsRUFGRixFQUdFLCtCQUhGLEVBSUU7QUFBTyxFQUFBLE9BQU8sRUFBQztBQUFmLHlCQUpGLEVBS0U7QUFBTyxFQUFBLElBQUksRUFBQyxPQUFaO0FBQW9CLEVBQUEsRUFBRSxFQUFDLFFBQXZCO0FBQWdDLEVBQUEsUUFBUTtBQUF4QyxFQUxGLEVBTUUsK0JBTkYsRUFPRTtBQUFPLEVBQUEsT0FBTyxFQUFDO0FBQWYsaUJBUEYsRUFRRTtBQUFPLEVBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsRUFBQSxFQUFFLEVBQUMsS0FBdEI7QUFBNEIsRUFBQSxTQUFTLEVBQUMsR0FBdEM7QUFBMEMsRUFBQSxJQUFJLEVBQUMsR0FBL0M7QUFBbUQsRUFBQSxXQUFXLEVBQUMsS0FBL0Q7QUFBcUUsRUFBQSxRQUFRO0FBQTdFLEVBUkYsRUFTRSwrQkFURixFQVVFO0FBQU8sRUFBQSxPQUFPLEVBQUM7QUFBZiw4QkFWRixFQVdFO0FBQU8sRUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixFQUFBLEVBQUUsRUFBQyxhQUF0QjtBQUFvQyxFQUFBLFNBQVMsRUFBQyxHQUE5QztBQUFrRCxFQUFBLElBQUksRUFBQyxJQUF2RDtBQUE0RCxFQUFBLFdBQVcsRUFBQyxRQUF4RTtBQUFpRixFQUFBLFFBQVE7QUFBekYsRUFYRixFQVlFLCtCQVpGLEVBYUU7QUFBTyxFQUFBLElBQUksRUFBQyxRQUFaO0FBQXFCLEVBQUEsS0FBSyxFQUFDO0FBQTNCLEVBYkYsQ0FGRixDQUZKOztBQXVCQUcsTUFBTSxDQUFDTCxVQUFQLEdBQW9CQSxVQUFwQiIsInNvdXJjZXNDb250ZW50IjpbInZhciBDcmVkaXRJbmZvID0gKHByb3BzKSA9PlxyXG4gIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5QYXltZW50IEluZm9ybWF0aW9uPC9oMT5cclxuICAgICAgPGZvcm0gbWV0aG9kPSdQT1NUJyBhY3Rpb249Jy8nIG9uU3VibWl0PXsoZSk9PntlLnBlcnNpc3QoKTsgcHJvcHMuaGFuZGxlU3VibWl0KGUpO319PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdjcmVkaXRjYXJkJz5FbnRlciBDcmVkaXQgQ2FyZCBJbmZvcm1hdGlvbjogPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J2NyZWRpdGNhcmQnIHBhdHRlcm49XCJbMC05XXs0fSBbMC05XXs0fSBbMC05XXs0fSBbMC05XXs0fVwicGxhY2Vob2xkZXI9JzAwMDAgMDAwMCAwMDAwIDAwMDAnIHJlcXVpcmVkLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdleHBpcmUnPkVudGVyIEV4cGlyeSBEYXRlOiA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSdtb250aCcgaWQ9J2V4cGlyZScgcmVxdWlyZWQvPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2N2dic+RW50ZXIgQ1ZWOiA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nY3Z2JyBtYXhMZW5ndGg9JzMnIHNpemU9JzUnIHBsYWNlaG9sZGVyPScxMjMnIHJlcXVpcmVkLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdiaWxsemlwY29kZSc+RW50ZXIgQmlsbGluZyBaaXAgQ29kZTogPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J2JpbGx6aXBjb2RlJyBtYXhMZW5ndGg9JzgnIHNpemU9JzEwJyBwbGFjZWhvbGRlcj0nMTIzNDU2JyByZXF1aXJlZC8+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT0nc3VibWl0JyB2YWx1ZT0nTmV4dCcvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcblxyXG5cclxud2luZG93LkNyZWRpdEluZm8gPSBDcmVkaXRJbmZvOyJdfQ==