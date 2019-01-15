class CompleteCheckout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shippingInfo: '',
      billingInfo: ''
    };
  }

  componentDidMount() {
    axios.get('/data', {
      params: {
        username: this.props.user
      }
    }).then(response => {
      console.log('get data', response.data);

      for (var key in response.data[0]) {
        this.setState({
          [key]: response.data[0][key]
        });
      }

      console.log(this.state);
    }).catch(err => {
      console.log('error', err);
    });
  }

  render() {
    return React.createElement("div", {
      className: "container"
    }, React.createElement("h1", null, "Review Your Order"), React.createElement("br", null), React.createElement("div", null, React.createElement("span", null, "username: ", this.state.username), React.createElement("br", null), React.createElement("span", null, "email: ", this.state.email), React.createElement("br", null), React.createElement("h2", null, "Shipping Information"), Object.keys(this.state.shippingInfo).map(item => {
      return React.createElement("div", {
        key: item
      }, React.createElement("span", {
        key: item
      }, item, ": ", this.state.shippingInfo[item]), React.createElement("br", null));
    }), React.createElement("br", null), React.createElement("h2", null, "Billing Information"), Object.keys(this.state.billingInfo).map(item => {
      return React.createElement("div", {
        key: item
      }, React.createElement("span", {
        key: item
      }, item, ": ", this.state.billingInfo[item]), React.createElement("br", null));
    })), React.createElement("br", null), React.createElement("form", {
      method: "POST",
      action: "/",
      onSubmit: this.props.nextPage
    }, React.createElement("input", {
      type: "submit",
      className: "btn btn-success",
      value: "Purchase"
    })), React.createElement("br", null), React.createElement("button", {
      onClick: this.props.goBack,
      className: "btn btn-info"
    }, "Back"));
  }

}

window.CompleteCheckout = CompleteCheckout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9mb3JtNC5qc3giXSwibmFtZXMiOlsiQ29tcGxldGVDaGVja291dCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwic2hpcHBpbmdJbmZvIiwiYmlsbGluZ0luZm8iLCJjb21wb25lbnREaWRNb3VudCIsImF4aW9zIiwiZ2V0IiwicGFyYW1zIiwidXNlcm5hbWUiLCJ1c2VyIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJrZXkiLCJzZXRTdGF0ZSIsImNhdGNoIiwiZXJyIiwicmVuZGVyIiwiZW1haWwiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaXRlbSIsIm5leHRQYWdlIiwiZ29CYWNrIiwid2luZG93Il0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxnQkFBTixTQUErQkMsS0FBSyxDQUFDQyxTQUFyQyxDQUErQztBQUM3Q0MsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxZQUFZLEVBQUUsRUFESDtBQUVYQyxNQUFBQSxXQUFXLEVBQUU7QUFGRixLQUFiO0FBSUQ7O0FBRURDLEVBQUFBLGlCQUFpQixHQUFHO0FBQ2xCQyxJQUFBQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxPQUFWLEVBQW1CO0FBQ2pCQyxNQUFBQSxNQUFNLEVBQUU7QUFDTkMsUUFBQUEsUUFBUSxFQUFFLEtBQUtSLEtBQUwsQ0FBV1M7QUFEZjtBQURTLEtBQW5CLEVBS0dDLElBTEgsQ0FLU0MsUUFBRCxJQUFjO0FBQ2xCQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCRixRQUFRLENBQUNHLElBQWpDOztBQUNBLFdBQUssSUFBSUMsR0FBVCxJQUFnQkosUUFBUSxDQUFDRyxJQUFULENBQWMsQ0FBZCxDQUFoQixFQUFrQztBQUNoQyxhQUFLRSxRQUFMLENBQWM7QUFDWixXQUFDRCxHQUFELEdBQU9KLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLENBQWQsRUFBaUJDLEdBQWpCO0FBREssU0FBZDtBQUdEOztBQUNESCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLWixLQUFqQjtBQUNELEtBYkgsRUFjR2dCLEtBZEgsQ0FjVUMsR0FBRCxJQUFTO0FBQ2ROLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJLLEdBQXJCO0FBQ0QsS0FoQkg7QUFpQkQ7O0FBRURDLEVBQUFBLE1BQU0sR0FBRztBQUNQLFdBQ0U7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLE9BQ0Usb0RBREYsRUFFRSwrQkFGRixFQUdFLGlDQUNFLGdEQUFpQixLQUFLbEIsS0FBTCxDQUFXTyxRQUE1QixDQURGLEVBRUUsK0JBRkYsRUFHRSw2Q0FBYyxLQUFLUCxLQUFMLENBQVdtQixLQUF6QixDQUhGLEVBSUUsK0JBSkYsRUFLRSx1REFMRixFQU1HQyxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLckIsS0FBTCxDQUFXQyxZQUF2QixFQUFxQ3FCLEdBQXJDLENBQTBDQyxJQUFELElBQVU7QUFDbEQsYUFBTztBQUFLLFFBQUEsR0FBRyxFQUFFQTtBQUFWLFNBQ0w7QUFBTSxRQUFBLEdBQUcsRUFBRUE7QUFBWCxTQUFrQkEsSUFBbEIsUUFBMEIsS0FBS3ZCLEtBQUwsQ0FBV0MsWUFBWCxDQUF3QnNCLElBQXhCLENBQTFCLENBREssRUFFTCwrQkFGSyxDQUFQO0FBSUQsS0FMQSxDQU5ILEVBWUUsK0JBWkYsRUFhRSxzREFiRixFQWNHSCxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLckIsS0FBTCxDQUFXRSxXQUF2QixFQUFvQ29CLEdBQXBDLENBQXlDQyxJQUFELElBQVU7QUFDakQsYUFBTztBQUFLLFFBQUEsR0FBRyxFQUFFQTtBQUFWLFNBQ1A7QUFBTSxRQUFBLEdBQUcsRUFBRUE7QUFBWCxTQUFrQkEsSUFBbEIsUUFBMEIsS0FBS3ZCLEtBQUwsQ0FBV0UsV0FBWCxDQUF1QnFCLElBQXZCLENBQTFCLENBRE8sRUFFUCwrQkFGTyxDQUFQO0FBSUQsS0FMQSxDQWRILENBSEYsRUF3QkUsK0JBeEJGLEVBeUJFO0FBQU0sTUFBQSxNQUFNLEVBQUMsTUFBYjtBQUFvQixNQUFBLE1BQU0sRUFBQyxHQUEzQjtBQUErQixNQUFBLFFBQVEsRUFBRSxLQUFLeEIsS0FBTCxDQUFXeUI7QUFBcEQsT0FDRTtBQUFPLE1BQUEsSUFBSSxFQUFDLFFBQVo7QUFBcUIsTUFBQSxTQUFTLEVBQUMsaUJBQS9CO0FBQWlELE1BQUEsS0FBSyxFQUFDO0FBQXZELE1BREYsQ0F6QkYsRUE0QkUsK0JBNUJGLEVBNkJBO0FBQVEsTUFBQSxPQUFPLEVBQUUsS0FBS3pCLEtBQUwsQ0FBVzBCLE1BQTVCO0FBQW9DLE1BQUEsU0FBUyxFQUFDO0FBQTlDLGNBN0JBLENBREY7QUFpQ0Q7O0FBL0Q0Qzs7QUFtRS9DQyxNQUFNLENBQUMvQixnQkFBUCxHQUEwQkEsZ0JBQTFCIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ29tcGxldGVDaGVja291dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNoaXBwaW5nSW5mbzogJycsXHJcbiAgICAgIGJpbGxpbmdJbmZvOiAnJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBheGlvcy5nZXQoJy9kYXRhJywge1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICB1c2VybmFtZTogdGhpcy5wcm9wcy51c2VyXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXQgZGF0YScsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiByZXNwb25zZS5kYXRhWzBdKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgW2tleV06IHJlc3BvbnNlLmRhdGFbMF1ba2V5XVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnIpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgICA8aDE+UmV2aWV3IFlvdXIgT3JkZXI8L2gxPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3Bhbj51c2VybmFtZToge3RoaXMuc3RhdGUudXNlcm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8c3Bhbj5lbWFpbDoge3RoaXMuc3RhdGUuZW1haWx9PC9zcGFuPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8aDI+U2hpcHBpbmcgSW5mb3JtYXRpb248L2gyPlxyXG4gICAgICAgICAge09iamVjdC5rZXlzKHRoaXMuc3RhdGUuc2hpcHBpbmdJbmZvKS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpdGVtfT5cclxuICAgICAgICAgICAgICA8c3BhbiBrZXk9e2l0ZW19PntpdGVtfToge3RoaXMuc3RhdGUuc2hpcHBpbmdJbmZvW2l0ZW1dfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGgyPkJpbGxpbmcgSW5mb3JtYXRpb248L2gyPlxyXG4gICAgICAgICAge09iamVjdC5rZXlzKHRoaXMuc3RhdGUuYmlsbGluZ0luZm8pLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2l0ZW19PlxyXG4gICAgICAgICAgICA8c3BhbiBrZXk9e2l0ZW19PntpdGVtfToge3RoaXMuc3RhdGUuYmlsbGluZ0luZm9baXRlbV19PC9zcGFuPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGZvcm0gbWV0aG9kPSdQT1NUJyBhY3Rpb249Jy8nIG9uU3VibWl0PXt0aGlzLnByb3BzLm5leHRQYWdlfT5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYnRuIGJ0bi1zdWNjZXNzJyB2YWx1ZT0nUHVyY2hhc2UnIC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5nb0JhY2t9IGNsYXNzTmFtZT0nYnRuIGJ0bi1pbmZvJz5CYWNrPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuXHJcbndpbmRvdy5Db21wbGV0ZUNoZWNrb3V0ID0gQ29tcGxldGVDaGVja291dDsiXX0=