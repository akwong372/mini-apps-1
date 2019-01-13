var AddressInfo = props => React.createElement("div", null, React.createElement("h1", null, "Shipping Information"), React.createElement("form", {
  method: "POST",
  action: "/"
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
  pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
  required: true
}), React.createElement("br", null), React.createElement("input", {
  type: "submit",
  value: "Next"
})));

window.AddressInfo = AddressInfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9mb3JtMi5qc3giXSwibmFtZXMiOlsiQWRkcmVzc0luZm8iLCJwcm9wcyIsIndpbmRvdyJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsV0FBVyxHQUFJQyxLQUFELElBRWQsaUNBQ0UsdURBREYsRUFFRTtBQUFNLEVBQUEsTUFBTSxFQUFDLE1BQWI7QUFBb0IsRUFBQSxNQUFNLEVBQUM7QUFBM0IsR0FDRTtBQUFPLEVBQUEsT0FBTyxFQUFDO0FBQWYsOEJBREYsRUFFRSwrQkFGRixFQUdFO0FBQU8sRUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixFQUFBLEVBQUUsRUFBQyxVQUF0QjtBQUFpQyxFQUFBLFNBQVMsRUFBQyxLQUEzQztBQUFpRCxFQUFBLFdBQVcsRUFBQztBQUE3RCxFQUhGLEVBSUUsK0JBSkYsRUFLRTtBQUFPLEVBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsRUFBQSxFQUFFLEVBQUMsVUFBdEI7QUFBaUMsRUFBQSxTQUFTLEVBQUMsS0FBM0M7QUFBaUQsRUFBQSxXQUFXLEVBQUM7QUFBN0QsRUFMRixFQU1FLCtCQU5GLEVBT0U7QUFBTyxFQUFBLE9BQU8sRUFBQztBQUFmLGtCQVBGLEVBUUU7QUFBTyxFQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLEVBQUEsRUFBRSxFQUFDLE1BQXRCO0FBQTZCLEVBQUEsV0FBVyxFQUFDO0FBQXpDLEVBUkYsRUFTRSwrQkFURixFQVVFO0FBQU8sRUFBQSxPQUFPLEVBQUM7QUFBZixtQkFWRixFQVdFO0FBQU8sRUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixFQUFBLEVBQUUsRUFBQyxPQUF0QjtBQUE4QixFQUFBLFNBQVMsRUFBQyxHQUF4QztBQUE0QyxFQUFBLElBQUksRUFBQyxHQUFqRDtBQUFxRCxFQUFBLFdBQVcsRUFBQztBQUFqRSxFQVhGLEVBWUUsK0JBWkYsRUFhRTtBQUFPLEVBQUEsT0FBTyxFQUFDO0FBQWYsc0JBYkYsRUFjRTtBQUFPLEVBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsRUFBQSxFQUFFLEVBQUMsU0FBdEI7QUFBZ0MsRUFBQSxTQUFTLEVBQUMsR0FBMUM7QUFBOEMsRUFBQSxJQUFJLEVBQUMsSUFBbkQ7QUFBd0QsRUFBQSxXQUFXLEVBQUM7QUFBcEUsRUFkRixFQWVFLCtCQWZGLEVBZ0JFO0FBQU8sRUFBQSxPQUFPLEVBQUM7QUFBZiw4QkFoQkYsRUFpQkU7QUFBTyxFQUFBLElBQUksRUFBQyxLQUFaO0FBQWtCLEVBQUEsRUFBRSxFQUFDLE9BQXJCO0FBQTZCLEVBQUEsSUFBSSxFQUFDLE9BQWxDO0FBQTBDLEVBQUEsT0FBTyxFQUFDLDRCQUFsRDtBQUErRSxFQUFBLFFBQVE7QUFBdkYsRUFqQkYsRUFrQkUsK0JBbEJGLEVBbUJFO0FBQU8sRUFBQSxJQUFJLEVBQUMsUUFBWjtBQUFxQixFQUFBLEtBQUssRUFBQztBQUEzQixFQW5CRixDQUZGLENBRko7O0FBNkJBQyxNQUFNLENBQUNGLFdBQVAsR0FBcUJBLFdBQXJCIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEFkZHJlc3NJbmZvID0gKHByb3BzKSA9PlxyXG4gIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5TaGlwcGluZyBJbmZvcm1hdGlvbjwvaDE+XHJcbiAgICAgIDxmb3JtIG1ldGhvZD0nUE9TVCcgYWN0aW9uPScvJz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0nYWRkcmVzcyc+RW50ZXIgU2hpcHBpbmcgQWRkcmVzczogPC9sYWJlbD5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J2FkZHJlc3MxJyBtYXhMZW5ndGg9JzEwMCcgcGxhY2Vob2xkZXI9J0FkZHJlc3MgTGluZSAxJyAvPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nYWRkcmVzczInIG1heExlbmd0aD0nMTAwJyBwbGFjZWhvbGRlcj0nQWRkcmVzcyBMaW5lIDInIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2NpdHknPkVudGVyIENpdHk6IDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdjaXR5JyBwbGFjZWhvbGRlcj0nQ2l0eSBOYW1lJyAvPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdzdGF0ZSc+RW50ZXIgU3RhdGU6IDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdzdGF0ZScgbWF4TGVuZ3RoPScyJyBzaXplPSc0JyBwbGFjZWhvbGRlcj0nQ0EnIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3ppcGNvZGUnPkVudGVyIFppcCBDb2RlOiA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nemlwY29kZScgbWF4TGVuZ3RoPSc4JyBzaXplPScxMCcgcGxhY2Vob2xkZXI9J1ppcCBDb2RlJyAvPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGhvbmVcIj5FbnRlciB5b3VyIHBob25lIG51bWJlcjo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgaWQ9XCJwaG9uZVwiIG5hbWU9XCJwaG9uZVwiIHBhdHRlcm49XCJbMC05XXszfS1bMC05XXszfS1bMC05XXs0fVwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT0nc3VibWl0JyB2YWx1ZT0nTmV4dCcgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG5cclxuXHJcbndpbmRvdy5BZGRyZXNzSW5mbyA9IEFkZHJlc3NJbmZvOyJdfQ==