var NameEmailPass = props => React.createElement("div", {
  className: "container"
}, React.createElement("h1", null, "Account Creation"), React.createElement("form", {
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
  className: "btn btn-primary",
  value: "Next"
})), React.createElement("br", null), React.createElement("button", {
  onClick: props.goBack,
  className: "btn btn-info"
}, "Back"));

window.NameEmailPass = NameEmailPass;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9mb3JtMS5qc3giXSwibmFtZXMiOlsiTmFtZUVtYWlsUGFzcyIsInByb3BzIiwiZSIsInBlcnNpc3QiLCJoYW5kbGVTdWJtaXQiLCJnb0JhY2siLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLGFBQWEsR0FBSUMsS0FBRCxJQUVoQjtBQUFLLEVBQUEsU0FBUyxFQUFDO0FBQWYsR0FDRSxtREFERixFQUVFO0FBQU0sRUFBQSxNQUFNLEVBQUMsTUFBYjtBQUFvQixFQUFBLE1BQU0sRUFBQyxHQUEzQjtBQUErQixFQUFBLFFBQVEsRUFBR0MsQ0FBRCxJQUFLO0FBQUNBLElBQUFBLENBQUMsQ0FBQ0MsT0FBRjtBQUFhRixJQUFBQSxLQUFLLENBQUNHLFlBQU4sQ0FBbUJGLENBQW5CO0FBQXVCO0FBQW5GLEdBQ0U7QUFBTyxFQUFBLE9BQU8sRUFBQztBQUFmLHNCQURGLEVBRUU7QUFBTyxFQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLEVBQUEsRUFBRSxFQUFDLFVBQXRCO0FBQWlDLEVBQUEsV0FBVyxFQUFDLFVBQTdDO0FBQXdELEVBQUEsUUFBUTtBQUFoRSxFQUZGLEVBR0UsK0JBSEYsRUFJRTtBQUFPLEVBQUEsT0FBTyxFQUFDO0FBQWYsc0JBSkYsRUFLRTtBQUFPLEVBQUEsSUFBSSxFQUFDLFVBQVo7QUFBdUIsRUFBQSxFQUFFLEVBQUMsVUFBMUI7QUFBcUMsRUFBQSxXQUFXLEVBQUMsVUFBakQ7QUFBNEQsRUFBQSxRQUFRO0FBQXBFLEVBTEYsRUFNRSwrQkFORixFQU9FO0FBQU8sRUFBQSxPQUFPLEVBQUM7QUFBZiwyQkFQRixFQVFFO0FBQU8sRUFBQSxJQUFJLEVBQUMsT0FBWjtBQUFvQixFQUFBLEVBQUUsRUFBQyxPQUF2QjtBQUErQixFQUFBLFdBQVcsRUFBQztBQUEzQyxFQVJGLEVBU0UsK0JBVEYsRUFVRTtBQUFPLEVBQUEsSUFBSSxFQUFDLFFBQVo7QUFBcUIsRUFBQSxTQUFTLEVBQUMsaUJBQS9CO0FBQWlELEVBQUEsS0FBSyxFQUFDO0FBQXZELEVBVkYsQ0FGRixFQWNFLCtCQWRGLEVBZUU7QUFBUSxFQUFBLE9BQU8sRUFBRUQsS0FBSyxDQUFDSSxNQUF2QjtBQUErQixFQUFBLFNBQVMsRUFBQztBQUF6QyxVQWZGLENBRko7O0FBc0JBQyxNQUFNLENBQUNOLGFBQVAsR0FBdUJBLGFBQXZCIiwic291cmNlc0NvbnRlbnQiOlsidmFyIE5hbWVFbWFpbFBhc3MgPSAocHJvcHMpID0+XHJcbiAgKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgIDxoMT5BY2NvdW50IENyZWF0aW9uPC9oMT5cclxuICAgICAgPGZvcm0gbWV0aG9kPSdQT1NUJyBhY3Rpb249Jy8nIG9uU3VibWl0PXsoZSk9PntlLnBlcnNpc3QoKTsgcHJvcHMuaGFuZGxlU3VibWl0KGUpO319PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSd1c2VybmFtZSc+RW50ZXIgVXNlcm5hbWU6IDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSd1c2VybmFtZScgcGxhY2Vob2xkZXI9J1VzZXJuYW1lJyByZXF1aXJlZC8+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0ncGFzc3dvcmQnPkVudGVyIFBhc3N3b3JkOiA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSdwYXNzd29yZCcgaWQ9J3Bhc3N3b3JkJyBwbGFjZWhvbGRlcj0ncGFzc3dvcmQnIHJlcXVpcmVkLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdlbWFpbCc+RW50ZXIgRW1haWwgQWRkcmVzczogPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT0nZW1haWwnIGlkPSdlbWFpbCcgcGxhY2Vob2xkZXI9J2V4YW1wbGVAZW1haWwuY29tJy8+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeScgdmFsdWU9J05leHQnLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8YnIvPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmdvQmFja30gY2xhc3NOYW1lPSdidG4gYnRuLWluZm8nPkJhY2s8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxuXHJcblxyXG53aW5kb3cuTmFtZUVtYWlsUGFzcyA9IE5hbWVFbWFpbFBhc3M7Il19