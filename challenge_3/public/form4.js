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
    return React.createElement("div", null, React.createElement("h1", null, "Review Your Order"), React.createElement("br", null), React.createElement("div", null, React.createElement("span", null, "username: ", this.state.username), React.createElement("br", null), React.createElement("span", null, "email: ", this.state.email), React.createElement("br", null), React.createElement("h2", null, "Shipping Information"), Object.keys(this.state.shippingInfo).map(item => {
      return React.createElement("div", null, React.createElement("span", {
        key: item
      }, item, ": ", this.state.shippingInfo[item]), React.createElement("br", null));
    }), React.createElement("br", null), React.createElement("h2", null, "Billing Information"), Object.keys(this.state.billingInfo).map(item => {
      return React.createElement("div", null, React.createElement("span", {
        key: item
      }, item, ": ", this.state.billingInfo[item]), React.createElement("br", null));
    })), React.createElement("br", null), React.createElement("form", {
      method: "POST",
      action: "/",
      onSubmit: this.props.nextPage
    }, React.createElement("input", {
      type: "submit",
      value: "Purchase"
    })));
  }

}

window.CompleteCheckout = CompleteCheckout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9mb3JtNC5qc3giXSwibmFtZXMiOlsiQ29tcGxldGVDaGVja291dCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwic2hpcHBpbmdJbmZvIiwiYmlsbGluZ0luZm8iLCJjb21wb25lbnREaWRNb3VudCIsImF4aW9zIiwiZ2V0IiwicGFyYW1zIiwidXNlcm5hbWUiLCJ1c2VyIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJrZXkiLCJzZXRTdGF0ZSIsImNhdGNoIiwiZXJyIiwicmVuZGVyIiwiZW1haWwiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaXRlbSIsIm5leHRQYWdlIiwid2luZG93Il0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxnQkFBTixTQUErQkMsS0FBSyxDQUFDQyxTQUFyQyxDQUErQztBQUM3Q0MsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxZQUFZLEVBQUUsRUFESDtBQUVYQyxNQUFBQSxXQUFXLEVBQUU7QUFGRixLQUFiO0FBSUQ7O0FBRURDLEVBQUFBLGlCQUFpQixHQUFHO0FBQ2xCQyxJQUFBQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxPQUFWLEVBQW1CO0FBQ2pCQyxNQUFBQSxNQUFNLEVBQUU7QUFDTkMsUUFBQUEsUUFBUSxFQUFFLEtBQUtSLEtBQUwsQ0FBV1M7QUFEZjtBQURTLEtBQW5CLEVBS0dDLElBTEgsQ0FLU0MsUUFBRCxJQUFjO0FBQ2xCQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCRixRQUFRLENBQUNHLElBQWpDOztBQUNBLFdBQUssSUFBSUMsR0FBVCxJQUFnQkosUUFBUSxDQUFDRyxJQUFULENBQWMsQ0FBZCxDQUFoQixFQUFrQztBQUNoQyxhQUFLRSxRQUFMLENBQWM7QUFDWixXQUFDRCxHQUFELEdBQU9KLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLENBQWQsRUFBaUJDLEdBQWpCO0FBREssU0FBZDtBQUdEOztBQUNESCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLWixLQUFqQjtBQUNELEtBYkgsRUFjR2dCLEtBZEgsQ0FjVUMsR0FBRCxJQUFTO0FBQ2ROLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJLLEdBQXJCO0FBQ0QsS0FoQkg7QUFpQkQ7O0FBRURDLEVBQUFBLE1BQU0sR0FBRztBQUNQLFdBQ0UsaUNBQ0Usb0RBREYsRUFFRSwrQkFGRixFQUdFLGlDQUNFLGdEQUFpQixLQUFLbEIsS0FBTCxDQUFXTyxRQUE1QixDQURGLEVBRUUsK0JBRkYsRUFHRSw2Q0FBYyxLQUFLUCxLQUFMLENBQVdtQixLQUF6QixDQUhGLEVBSUUsK0JBSkYsRUFLRSx1REFMRixFQU1HQyxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLckIsS0FBTCxDQUFXQyxZQUF2QixFQUFxQ3FCLEdBQXJDLENBQTBDQyxJQUFELElBQVU7QUFDbEQsYUFBTyxpQ0FDTDtBQUFNLFFBQUEsR0FBRyxFQUFFQTtBQUFYLFNBQWtCQSxJQUFsQixRQUEwQixLQUFLdkIsS0FBTCxDQUFXQyxZQUFYLENBQXdCc0IsSUFBeEIsQ0FBMUIsQ0FESyxFQUVMLCtCQUZLLENBQVA7QUFJRCxLQUxBLENBTkgsRUFZRSwrQkFaRixFQWFFLHNEQWJGLEVBY0dILE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtyQixLQUFMLENBQVdFLFdBQXZCLEVBQW9Db0IsR0FBcEMsQ0FBeUNDLElBQUQsSUFBVTtBQUNqRCxhQUFPLGlDQUNQO0FBQU0sUUFBQSxHQUFHLEVBQUVBO0FBQVgsU0FBa0JBLElBQWxCLFFBQTBCLEtBQUt2QixLQUFMLENBQVdFLFdBQVgsQ0FBdUJxQixJQUF2QixDQUExQixDQURPLEVBRVAsK0JBRk8sQ0FBUDtBQUlELEtBTEEsQ0FkSCxDQUhGLEVBd0JFLCtCQXhCRixFQXlCRTtBQUFNLE1BQUEsTUFBTSxFQUFDLE1BQWI7QUFBb0IsTUFBQSxNQUFNLEVBQUMsR0FBM0I7QUFBK0IsTUFBQSxRQUFRLEVBQUUsS0FBS3hCLEtBQUwsQ0FBV3lCO0FBQXBELE9BQ0U7QUFBTyxNQUFBLElBQUksRUFBQyxRQUFaO0FBQXFCLE1BQUEsS0FBSyxFQUFDO0FBQTNCLE1BREYsQ0F6QkYsQ0FERjtBQStCRDs7QUE3RDRDOztBQWlFL0NDLE1BQU0sQ0FBQzlCLGdCQUFQLEdBQTBCQSxnQkFBMUIiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDb21wbGV0ZUNoZWNrb3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2hpcHBpbmdJbmZvOiAnJyxcclxuICAgICAgYmlsbGluZ0luZm86ICcnXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGF4aW9zLmdldCgnL2RhdGEnLCB7XHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIHVzZXJuYW1lOiB0aGlzLnByb3BzLnVzZXJcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dldCBkYXRhJywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHJlc3BvbnNlLmRhdGFbMF0pIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBba2V5XTogcmVzcG9uc2UuZGF0YVswXVtrZXldXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycilcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPlJldmlldyBZb3VyIE9yZGVyPC9oMT5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHNwYW4+dXNlcm5hbWU6IHt0aGlzLnN0YXRlLnVzZXJuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPHNwYW4+ZW1haWw6IHt0aGlzLnN0YXRlLmVtYWlsfTwvc3Bhbj5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGgyPlNoaXBwaW5nIEluZm9ybWF0aW9uPC9oMj5cclxuICAgICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnN0YXRlLnNoaXBwaW5nSW5mbykubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGtleT17aXRlbX0+e2l0ZW19OiB7dGhpcy5zdGF0ZS5zaGlwcGluZ0luZm9baXRlbV19PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8aDI+QmlsbGluZyBJbmZvcm1hdGlvbjwvaDI+XHJcbiAgICAgICAgICB7T2JqZWN0LmtleXModGhpcy5zdGF0ZS5iaWxsaW5nSW5mbykubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8c3BhbiBrZXk9e2l0ZW19PntpdGVtfToge3RoaXMuc3RhdGUuYmlsbGluZ0luZm9baXRlbV19PC9zcGFuPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGZvcm0gbWV0aG9kPSdQT1NUJyBhY3Rpb249Jy8nIG9uU3VibWl0PXt0aGlzLnByb3BzLm5leHRQYWdlfT5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPSdzdWJtaXQnIHZhbHVlPSdQdXJjaGFzZScgLz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuXHJcbndpbmRvdy5Db21wbGV0ZUNoZWNrb3V0ID0gQ29tcGxldGVDaGVja291dDsiXX0=