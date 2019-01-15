var CreditInfo = props => React.createElement("div", {
  className: "container"
}, React.createElement("h1", null, "Payment Information"), React.createElement("form", {
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
  className: "btn btn-primary",
  value: "Next"
})), React.createElement("br", null), React.createElement("button", {
  onClick: props.goBack,
  className: "btn btn-info"
}, "Back"));

window.CreditInfo = CreditInfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9mb3JtMy5qc3giXSwibmFtZXMiOlsiQ3JlZGl0SW5mbyIsInByb3BzIiwiZSIsInBlcnNpc3QiLCJoYW5kbGVTdWJtaXQiLCJnb0JhY2siLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLFVBQVUsR0FBSUMsS0FBRCxJQUViO0FBQUssRUFBQSxTQUFTLEVBQUM7QUFBZixHQUNFLHNEQURGLEVBRUU7QUFBTSxFQUFBLE1BQU0sRUFBQyxNQUFiO0FBQW9CLEVBQUEsTUFBTSxFQUFDLEdBQTNCO0FBQStCLEVBQUEsUUFBUSxFQUFHQyxDQUFELElBQUs7QUFBQ0EsSUFBQUEsQ0FBQyxDQUFDQyxPQUFGO0FBQWFGLElBQUFBLEtBQUssQ0FBQ0csWUFBTixDQUFtQkYsQ0FBbkI7QUFBdUI7QUFBbkYsR0FDRTtBQUFPLEVBQUEsT0FBTyxFQUFDO0FBQWYscUNBREYsRUFFRTtBQUFPLEVBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsRUFBQSxFQUFFLEVBQUMsWUFBdEI7QUFBbUMsRUFBQSxPQUFPLEVBQUMscUNBQTNDO0FBQWdGLEVBQUEsV0FBVyxFQUFDLHFCQUE1RjtBQUFrSCxFQUFBLFFBQVE7QUFBMUgsRUFGRixFQUdFLCtCQUhGLEVBSUU7QUFBTyxFQUFBLE9BQU8sRUFBQztBQUFmLHlCQUpGLEVBS0U7QUFBTyxFQUFBLElBQUksRUFBQyxPQUFaO0FBQW9CLEVBQUEsRUFBRSxFQUFDLFFBQXZCO0FBQWdDLEVBQUEsUUFBUTtBQUF4QyxFQUxGLEVBTUUsK0JBTkYsRUFPRTtBQUFPLEVBQUEsT0FBTyxFQUFDO0FBQWYsaUJBUEYsRUFRRTtBQUFPLEVBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsRUFBQSxFQUFFLEVBQUMsS0FBdEI7QUFBNEIsRUFBQSxTQUFTLEVBQUMsR0FBdEM7QUFBMEMsRUFBQSxJQUFJLEVBQUMsR0FBL0M7QUFBbUQsRUFBQSxXQUFXLEVBQUMsS0FBL0Q7QUFBcUUsRUFBQSxRQUFRO0FBQTdFLEVBUkYsRUFTRSwrQkFURixFQVVFO0FBQU8sRUFBQSxPQUFPLEVBQUM7QUFBZiw4QkFWRixFQVdFO0FBQU8sRUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixFQUFBLEVBQUUsRUFBQyxhQUF0QjtBQUFvQyxFQUFBLFNBQVMsRUFBQyxHQUE5QztBQUFrRCxFQUFBLElBQUksRUFBQyxJQUF2RDtBQUE0RCxFQUFBLFdBQVcsRUFBQyxRQUF4RTtBQUFpRixFQUFBLFFBQVE7QUFBekYsRUFYRixFQVlFLCtCQVpGLEVBYUU7QUFBTyxFQUFBLElBQUksRUFBQyxRQUFaO0FBQXFCLEVBQUEsU0FBUyxFQUFDLGlCQUEvQjtBQUFpRCxFQUFBLEtBQUssRUFBQztBQUF2RCxFQWJGLENBRkYsRUFpQkUsK0JBakJGLEVBa0JFO0FBQVEsRUFBQSxPQUFPLEVBQUVELEtBQUssQ0FBQ0ksTUFBdkI7QUFBK0IsRUFBQSxTQUFTLEVBQUM7QUFBekMsVUFsQkYsQ0FGSjs7QUF5QkFDLE1BQU0sQ0FBQ04sVUFBUCxHQUFvQkEsVUFBcEIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQ3JlZGl0SW5mbyA9IChwcm9wcykgPT5cclxuICAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgPGgxPlBheW1lbnQgSW5mb3JtYXRpb248L2gxPlxyXG4gICAgICA8Zm9ybSBtZXRob2Q9J1BPU1QnIGFjdGlvbj0nLycgb25TdWJtaXQ9eyhlKT0+e2UucGVyc2lzdCgpOyBwcm9wcy5oYW5kbGVTdWJtaXQoZSk7fX0+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2NyZWRpdGNhcmQnPkVudGVyIENyZWRpdCBDYXJkIEluZm9ybWF0aW9uOiA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nY3JlZGl0Y2FyZCcgcGF0dGVybj1cIlswLTldezR9IFswLTldezR9IFswLTldezR9IFswLTldezR9XCJwbGFjZWhvbGRlcj0nMDAwMCAwMDAwIDAwMDAgMDAwMCcgcmVxdWlyZWQvPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2V4cGlyZSc+RW50ZXIgRXhwaXJ5IERhdGU6IDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9J21vbnRoJyBpZD0nZXhwaXJlJyByZXF1aXJlZC8+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0nY3Z2Jz5FbnRlciBDVlY6IDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdjdnYnIG1heExlbmd0aD0nMycgc2l6ZT0nNScgcGxhY2Vob2xkZXI9JzEyMycgcmVxdWlyZWQvPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2JpbGx6aXBjb2RlJz5FbnRlciBCaWxsaW5nIFppcCBDb2RlOiA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nYmlsbHppcGNvZGUnIG1heExlbmd0aD0nOCcgc2l6ZT0nMTAnIHBsYWNlaG9sZGVyPScxMjM0NTYnIHJlcXVpcmVkLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5JyB2YWx1ZT0nTmV4dCcvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxici8+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17cHJvcHMuZ29CYWNrfSBjbGFzc05hbWU9J2J0biBidG4taW5mbyc+QmFjazwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG5cclxuXHJcbndpbmRvdy5DcmVkaXRJbmZvID0gQ3JlZGl0SW5mbzsiXX0=