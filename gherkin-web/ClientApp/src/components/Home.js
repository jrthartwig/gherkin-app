import React, { Component } from 'react';

export default class home extends Component {
  static displayname = home.name;

  render () {
    return (
      <div>
        <h1>hello, world!</h1>
        <p>welcome to your new single-page application, built with:</p>
        <ul>
          <li><a href='https://get.asp.net/'>asp.net core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>c#</a> for cross-platform server-side code</li>
          <li><a href='https://facebook.github.io/react/'>react</a> for client-side code</li>
          <li><a href='http://getbootstrap.com/'>bootstrap</a> for layout and styling</li>
        </ul>
        <p>to help you get started, we have also set up:</p>
        <ul>
          <li><strong>client-side navigation</strong>. for example, click <em>counter</em> then <em>back</em> to return here.</li>
          <li><strong>development server integration</strong>. in development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
          <li><strong>efficient production builds</strong>. in production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled javascript files.</li>
        </ul>
        <p>the <code>clientapp</code> subdirectory is a standard react application based on the <code>create-react-app</code> template. if you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
      </div>
    );
  }
}



class Feature extends Component {
    constructor(props) {
        super(props)
        state = {
            features: [],
            selectedFeature: "",
            validationError: ""
        };
    }

    componentDidMount() {
        fetch("https://localhost:44347/api/Feature?projectType=web")
            .then((response) => {
                return setState({features: response.json});
            })
            .then(data => {
                let featuresFromAPI = data.map(feature => {
                    return { value: feature, display: feature }
                });
                this.setState({
                    features: [
                        {
                            value: "",
                            display:
                                '(Select a Feature)'
                        }
                    ].concat(featuresFromAPI)
                });
            }).catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <select>
                    {this.state.features.map((feature) => option key = { feature.value } value = { feature.value } > { feature.display }</option>
                    </select>
            </div >
        );
    }
}

