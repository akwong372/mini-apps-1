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
})));

window.NameEmailPass = NameEmailPass;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9mb3JtMS5qc3giXSwibmFtZXMiOlsiTmFtZUVtYWlsUGFzcyIsInByb3BzIiwiZSIsInBlcnNpc3QiLCJoYW5kbGVTdWJtaXQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLGFBQWEsR0FBSUMsS0FBRCxJQUVoQixpQ0FDRSxtREFERixFQUVFO0FBQU0sRUFBQSxNQUFNLEVBQUMsTUFBYjtBQUFvQixFQUFBLE1BQU0sRUFBQyxHQUEzQjtBQUErQixFQUFBLFFBQVEsRUFBR0MsQ0FBRCxJQUFLO0FBQUNBLElBQUFBLENBQUMsQ0FBQ0MsT0FBRjtBQUFhRixJQUFBQSxLQUFLLENBQUNHLFlBQU4sQ0FBbUJGLENBQW5CO0FBQXVCO0FBQW5GLEdBQ0U7QUFBTyxFQUFBLE9BQU8sRUFBQztBQUFmLHNCQURGLEVBRUU7QUFBTyxFQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLEVBQUEsRUFBRSxFQUFDLFVBQXRCO0FBQWlDLEVBQUEsV0FBVyxFQUFDLFVBQTdDO0FBQXdELEVBQUEsUUFBUTtBQUFoRSxFQUZGLEVBR0UsK0JBSEYsRUFJRTtBQUFPLEVBQUEsT0FBTyxFQUFDO0FBQWYsc0JBSkYsRUFLRTtBQUFPLEVBQUEsSUFBSSxFQUFDLFVBQVo7QUFBdUIsRUFBQSxFQUFFLEVBQUMsVUFBMUI7QUFBcUMsRUFBQSxXQUFXLEVBQUMsVUFBakQ7QUFBNEQsRUFBQSxRQUFRO0FBQXBFLEVBTEYsRUFNRSwrQkFORixFQU9FO0FBQU8sRUFBQSxPQUFPLEVBQUM7QUFBZiwyQkFQRixFQVFFO0FBQU8sRUFBQSxJQUFJLEVBQUMsT0FBWjtBQUFvQixFQUFBLEVBQUUsRUFBQyxPQUF2QjtBQUErQixFQUFBLFdBQVcsRUFBQztBQUEzQyxFQVJGLEVBU0UsK0JBVEYsRUFVRTtBQUFPLEVBQUEsSUFBSSxFQUFDLFFBQVo7QUFBcUIsRUFBQSxLQUFLLEVBQUM7QUFBM0IsRUFWRixDQUZGLENBRko7O0FBb0JBRyxNQUFNLENBQUNMLGFBQVAsR0FBdUJBLGFBQXZCIiwic291cmNlc0NvbnRlbnQiOlsidmFyIE5hbWVFbWFpbFBhc3MgPSAocHJvcHMpID0+XHJcbiAgKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPkFjY291bnQgQ3JlYXRpb248L2gxPlxyXG4gICAgICA8Zm9ybSBtZXRob2Q9J1BPU1QnIGFjdGlvbj0nLycgb25TdWJtaXQ9eyhlKT0+e2UucGVyc2lzdCgpOyBwcm9wcy5oYW5kbGVTdWJtaXQoZSk7fX0+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3VzZXJuYW1lJz5FbnRlciBVc2VybmFtZTogPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J3VzZXJuYW1lJyBwbGFjZWhvbGRlcj0nVXNlcm5hbWUnIHJlcXVpcmVkLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdwYXNzd29yZCc+RW50ZXIgUGFzc3dvcmQ6IDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9J3Bhc3N3b3JkJyBpZD0ncGFzc3dvcmQnIHBsYWNlaG9sZGVyPSdwYXNzd29yZCcgcmVxdWlyZWQvPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2VtYWlsJz5FbnRlciBFbWFpbCBBZGRyZXNzOiA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSdlbWFpbCcgaWQ9J2VtYWlsJyBwbGFjZWhvbGRlcj0nZXhhbXBsZUBlbWFpbC5jb20nLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSdzdWJtaXQnIHZhbHVlPSdOZXh0Jy8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxuXHJcblxyXG53aW5kb3cuTmFtZUVtYWlsUGFzcyA9IE5hbWVFbWFpbFBhc3M7Il19