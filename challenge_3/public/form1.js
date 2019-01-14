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
  placeholder: "Username"
}), React.createElement("br", null), React.createElement("label", {
  htmlFor: "password"
}, "Enter Password: "), React.createElement("input", {
  type: "password",
  id: "password",
  placeholder: "password"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9mb3JtMS5qc3giXSwibmFtZXMiOlsiTmFtZUVtYWlsUGFzcyIsInByb3BzIiwiZSIsInBlcnNpc3QiLCJoYW5kbGVTdWJtaXQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLGFBQWEsR0FBSUMsS0FBRCxJQUVoQixpQ0FDRSxtREFERixFQUVFO0FBQU0sRUFBQSxNQUFNLEVBQUMsTUFBYjtBQUFvQixFQUFBLE1BQU0sRUFBQyxHQUEzQjtBQUErQixFQUFBLFFBQVEsRUFBR0MsQ0FBRCxJQUFLO0FBQUNBLElBQUFBLENBQUMsQ0FBQ0MsT0FBRjtBQUFhRixJQUFBQSxLQUFLLENBQUNHLFlBQU4sQ0FBbUJGLENBQW5CO0FBQXVCO0FBQW5GLEdBQ0U7QUFBTyxFQUFBLE9BQU8sRUFBQztBQUFmLHNCQURGLEVBRUU7QUFBTyxFQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLEVBQUEsRUFBRSxFQUFDLFVBQXRCO0FBQWlDLEVBQUEsV0FBVyxFQUFDO0FBQTdDLEVBRkYsRUFHRSwrQkFIRixFQUlFO0FBQU8sRUFBQSxPQUFPLEVBQUM7QUFBZixzQkFKRixFQUtFO0FBQU8sRUFBQSxJQUFJLEVBQUMsVUFBWjtBQUF1QixFQUFBLEVBQUUsRUFBQyxVQUExQjtBQUFxQyxFQUFBLFdBQVcsRUFBQztBQUFqRCxFQUxGLEVBTUUsK0JBTkYsRUFPRTtBQUFPLEVBQUEsT0FBTyxFQUFDO0FBQWYsMkJBUEYsRUFRRTtBQUFPLEVBQUEsSUFBSSxFQUFDLE9BQVo7QUFBb0IsRUFBQSxFQUFFLEVBQUMsT0FBdkI7QUFBK0IsRUFBQSxXQUFXLEVBQUM7QUFBM0MsRUFSRixFQVNFLCtCQVRGLEVBVUU7QUFBTyxFQUFBLElBQUksRUFBQyxRQUFaO0FBQXFCLEVBQUEsS0FBSyxFQUFDO0FBQTNCLEVBVkYsQ0FGRixDQUZKOztBQW9CQUcsTUFBTSxDQUFDTCxhQUFQLEdBQXVCQSxhQUF2QiIsInNvdXJjZXNDb250ZW50IjpbInZhciBOYW1lRW1haWxQYXNzID0gKHByb3BzKSA9PlxyXG4gIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5BY2NvdW50IENyZWF0aW9uPC9oMT5cclxuICAgICAgPGZvcm0gbWV0aG9kPSdQT1NUJyBhY3Rpb249Jy8nIG9uU3VibWl0PXsoZSk9PntlLnBlcnNpc3QoKTsgcHJvcHMuaGFuZGxlU3VibWl0KGUpO319PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSd1c2VybmFtZSc+RW50ZXIgVXNlcm5hbWU6IDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSd1c2VybmFtZScgcGxhY2Vob2xkZXI9J1VzZXJuYW1lJy8+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0ncGFzc3dvcmQnPkVudGVyIFBhc3N3b3JkOiA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSdwYXNzd29yZCcgaWQ9J3Bhc3N3b3JkJyBwbGFjZWhvbGRlcj0ncGFzc3dvcmQnLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdlbWFpbCc+RW50ZXIgRW1haWwgQWRkcmVzczogPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT0nZW1haWwnIGlkPSdlbWFpbCcgcGxhY2Vob2xkZXI9J2V4YW1wbGVAZW1haWwuY29tJy8+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT0nc3VibWl0JyB2YWx1ZT0nTmV4dCcvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcblxyXG5cclxud2luZG93Lk5hbWVFbWFpbFBhc3MgPSBOYW1lRW1haWxQYXNzOyJdfQ==