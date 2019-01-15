var NameEmailPass = props => React.createElement("div", null, React.createElement("h1", null, "Account Creation"), React.createElement("form", {
  method: "POST",
  action: "/",
  onSubmit: e => {
    e.persist();
    props.handleSubmit(e);
  }
}, React.createElement("label", {
  htmlFor: "username"
}, "Enter Username: "), React.createElement("input", {
  type: "text",
  id: "username",
  placeholder: "Username",
  required: true
}), React.createElement("br", null), React.createElement("label", {
  htmlFor: "password"
}, "Enter Password: "), React.createElement("input", {
  type: "password",
  id: "password",
  placeholder: "password",
  required: true
}), React.createElement("br", null), React.createElement("label", {
  htmlFor: "email"
}, "Enter Email Address: "), React.createElement("input", {
  type: "email",
  id: "email",
  placeholder: "example@email.com"
}), React.createElement("br", null), React.createElement("input", {
  type: "submit",
  value: "Next"
})), React.createElement("br", null), React.createElement("button", {
  onClick: props.goBack
}, "Back"));

window.NameEmailPass = NameEmailPass;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9mb3JtMS5qc3giXSwibmFtZXMiOlsiTmFtZUVtYWlsUGFzcyIsInByb3BzIiwiZSIsInBlcnNpc3QiLCJoYW5kbGVTdWJtaXQiLCJnb0JhY2siLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLGFBQWEsR0FBSUMsS0FBRCxJQUVoQixpQ0FDRSxtREFERixFQUVFO0FBQU0sRUFBQSxNQUFNLEVBQUMsTUFBYjtBQUFvQixFQUFBLE1BQU0sRUFBQyxHQUEzQjtBQUErQixFQUFBLFFBQVEsRUFBR0MsQ0FBRCxJQUFLO0FBQUNBLElBQUFBLENBQUMsQ0FBQ0MsT0FBRjtBQUFhRixJQUFBQSxLQUFLLENBQUNHLFlBQU4sQ0FBbUJGLENBQW5CO0FBQXVCO0FBQW5GLEdBQ0U7QUFBTyxFQUFBLE9BQU8sRUFBQztBQUFmLHNCQURGLEVBRUU7QUFBTyxFQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLEVBQUEsRUFBRSxFQUFDLFVBQXRCO0FBQWlDLEVBQUEsV0FBVyxFQUFDLFVBQTdDO0FBQXdELEVBQUEsUUFBUTtBQUFoRSxFQUZGLEVBR0UsK0JBSEYsRUFJRTtBQUFPLEVBQUEsT0FBTyxFQUFDO0FBQWYsc0JBSkYsRUFLRTtBQUFPLEVBQUEsSUFBSSxFQUFDLFVBQVo7QUFBdUIsRUFBQSxFQUFFLEVBQUMsVUFBMUI7QUFBcUMsRUFBQSxXQUFXLEVBQUMsVUFBakQ7QUFBNEQsRUFBQSxRQUFRO0FBQXBFLEVBTEYsRUFNRSwrQkFORixFQU9FO0FBQU8sRUFBQSxPQUFPLEVBQUM7QUFBZiwyQkFQRixFQVFFO0FBQU8sRUFBQSxJQUFJLEVBQUMsT0FBWjtBQUFvQixFQUFBLEVBQUUsRUFBQyxPQUF2QjtBQUErQixFQUFBLFdBQVcsRUFBQztBQUEzQyxFQVJGLEVBU0UsK0JBVEYsRUFVRTtBQUFPLEVBQUEsSUFBSSxFQUFDLFFBQVo7QUFBcUIsRUFBQSxLQUFLLEVBQUM7QUFBM0IsRUFWRixDQUZGLEVBY0UsK0JBZEYsRUFlRTtBQUFRLEVBQUEsT0FBTyxFQUFFRCxLQUFLLENBQUNJO0FBQXZCLFVBZkYsQ0FGSjs7QUFzQkFDLE1BQU0sQ0FBQ04sYUFBUCxHQUF1QkEsYUFBdkIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgTmFtZUVtYWlsUGFzcyA9IChwcm9wcykgPT5cclxuICAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+QWNjb3VudCBDcmVhdGlvbjwvaDE+XHJcbiAgICAgIDxmb3JtIG1ldGhvZD0nUE9TVCcgYWN0aW9uPScvJyBvblN1Ym1pdD17KGUpPT57ZS5wZXJzaXN0KCk7IHByb3BzLmhhbmRsZVN1Ym1pdChlKTt9fT5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0ndXNlcm5hbWUnPkVudGVyIFVzZXJuYW1lOiA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0ndXNlcm5hbWUnIHBsYWNlaG9sZGVyPSdVc2VybmFtZScgcmVxdWlyZWQvPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3Bhc3N3b3JkJz5FbnRlciBQYXNzd29yZDogPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT0ncGFzc3dvcmQnIGlkPSdwYXNzd29yZCcgcGxhY2Vob2xkZXI9J3Bhc3N3b3JkJyByZXF1aXJlZC8+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZW1haWwnPkVudGVyIEVtYWlsIEFkZHJlc3M6IDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9J2VtYWlsJyBpZD0nZW1haWwnIHBsYWNlaG9sZGVyPSdleGFtcGxlQGVtYWlsLmNvbScvPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9J3N1Ym1pdCcgdmFsdWU9J05leHQnLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8YnIvPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmdvQmFja30+QmFjazwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG5cclxuXHJcbndpbmRvdy5OYW1lRW1haWxQYXNzID0gTmFtZUVtYWlsUGFzczsiXX0=