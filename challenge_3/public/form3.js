var CreditInfo = props => React.createElement("div", null, React.createElement("h1", null, "Payment Information"), React.createElement("form", {
  method: "POST",
  action: "/"
}, React.createElement("label", {
  htmlFor: "creditcard"
}, "Enter Credit Card Information: "), React.createElement("input", {
  type: "text",
  id: "creditcard",
  pattern: "[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}",
  placeholder: "0000 0000 0000 0000"
}), React.createElement("br", null), React.createElement("label", {
  htmlFor: "expire"
}, "Enter Expiry Date: "), React.createElement("input", {
  type: "month",
  id: "expire"
}), React.createElement("br", null), React.createElement("label", {
  htmlFor: "cvv"
}, "Enter CVV: "), React.createElement("input", {
  type: "text",
  id: "cvv",
  maxLength: "3",
  size: "5",
  placeholder: "123"
}), React.createElement("br", null), React.createElement("label", {
  htmlFor: "billzipcode"
}, "Enter Billing Zip Code: "), React.createElement("input", {
  type: "text",
  id: "billzipcode",
  maxLength: "8",
  size: "10",
  placeholder: "Zip Code"
}), React.createElement("br", null), React.createElement("input", {
  type: "submit",
  value: "Next"
})));

window.CreditInfo = CreditInfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9mb3JtMy5qc3giXSwibmFtZXMiOlsiQ3JlZGl0SW5mbyIsInByb3BzIiwid2luZG93Il0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxVQUFVLEdBQUlDLEtBQUQsSUFFYixpQ0FDRSxzREFERixFQUVFO0FBQU0sRUFBQSxNQUFNLEVBQUMsTUFBYjtBQUFvQixFQUFBLE1BQU0sRUFBQztBQUEzQixHQUNFO0FBQU8sRUFBQSxPQUFPLEVBQUM7QUFBZixxQ0FERixFQUVFO0FBQU8sRUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixFQUFBLEVBQUUsRUFBQyxZQUF0QjtBQUFtQyxFQUFBLE9BQU8sRUFBQyxxQ0FBM0M7QUFBZ0YsRUFBQSxXQUFXLEVBQUM7QUFBNUYsRUFGRixFQUdFLCtCQUhGLEVBSUU7QUFBTyxFQUFBLE9BQU8sRUFBQztBQUFmLHlCQUpGLEVBS0U7QUFBTyxFQUFBLElBQUksRUFBQyxPQUFaO0FBQW9CLEVBQUEsRUFBRSxFQUFDO0FBQXZCLEVBTEYsRUFNRSwrQkFORixFQU9FO0FBQU8sRUFBQSxPQUFPLEVBQUM7QUFBZixpQkFQRixFQVFFO0FBQU8sRUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixFQUFBLEVBQUUsRUFBQyxLQUF0QjtBQUE0QixFQUFBLFNBQVMsRUFBQyxHQUF0QztBQUEwQyxFQUFBLElBQUksRUFBQyxHQUEvQztBQUFtRCxFQUFBLFdBQVcsRUFBQztBQUEvRCxFQVJGLEVBU0UsK0JBVEYsRUFVRTtBQUFPLEVBQUEsT0FBTyxFQUFDO0FBQWYsOEJBVkYsRUFXRTtBQUFPLEVBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsRUFBQSxFQUFFLEVBQUMsYUFBdEI7QUFBb0MsRUFBQSxTQUFTLEVBQUMsR0FBOUM7QUFBa0QsRUFBQSxJQUFJLEVBQUMsSUFBdkQ7QUFBNEQsRUFBQSxXQUFXLEVBQUM7QUFBeEUsRUFYRixFQVlFLCtCQVpGLEVBYUU7QUFBTyxFQUFBLElBQUksRUFBQyxRQUFaO0FBQXFCLEVBQUEsS0FBSyxFQUFDO0FBQTNCLEVBYkYsQ0FGRixDQUZKOztBQXVCQUMsTUFBTSxDQUFDRixVQUFQLEdBQW9CQSxVQUFwQiIsInNvdXJjZXNDb250ZW50IjpbInZhciBDcmVkaXRJbmZvID0gKHByb3BzKSA9PlxyXG4gIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5QYXltZW50IEluZm9ybWF0aW9uPC9oMT5cclxuICAgICAgPGZvcm0gbWV0aG9kPSdQT1NUJyBhY3Rpb249Jy8nPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdjcmVkaXRjYXJkJz5FbnRlciBDcmVkaXQgQ2FyZCBJbmZvcm1hdGlvbjogPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J2NyZWRpdGNhcmQnIHBhdHRlcm49XCJbMC05XXs0fS1bMC05XXs0fS1bMC05XXs0fS1bMC05XXs0fVwicGxhY2Vob2xkZXI9JzAwMDAgMDAwMCAwMDAwIDAwMDAnLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdleHBpcmUnPkVudGVyIEV4cGlyeSBEYXRlOiA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSdtb250aCcgaWQ9J2V4cGlyZScvPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2N2dic+RW50ZXIgQ1ZWOiA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nY3Z2JyBtYXhMZW5ndGg9JzMnIHNpemU9JzUnIHBsYWNlaG9sZGVyPScxMjMnLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdiaWxsemlwY29kZSc+RW50ZXIgQmlsbGluZyBaaXAgQ29kZTogPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J2JpbGx6aXBjb2RlJyBtYXhMZW5ndGg9JzgnIHNpemU9JzEwJyBwbGFjZWhvbGRlcj0nWmlwIENvZGUnIC8+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT0nc3VibWl0JyB2YWx1ZT0nTmV4dCcvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcblxyXG5cclxud2luZG93LkNyZWRpdEluZm8gPSBDcmVkaXRJbmZvOyJdfQ==