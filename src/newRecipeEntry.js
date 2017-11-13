import {React, Parse, ParseReact, server, appKey} from './reqs.js';

function scrape(url){
    var URLquery = url.toString();
    var opengraph = require('opengraph-io')({appId: '5999eabd07efcb0b00a71f16'});
    opengraph.getSiteInfo(URLquery, {cacheOk: false}, function(err, result){
        console.log('Site title is', result.hybridGraph);
    });
}

function RecipeSummary(props) {
    return (
        <tr>
            <td>
                <input value={props.title} />
            </td>
            <td>
                <input value={props.link} />
            </td>
            <td>
                <input value={props.desc} />
            </td>
        </tr>
    )
}

// class NewRecipeEntry extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: ''};
//     }

//     componentDidMount () {
//         return scrape({props.link})
//     }

//     render() {
//         return (
//             <RecipeSummary title="A test recipe" link="http://example.com" desc="Summary and some ingredients">
//             </RecipeSummary>
//         );
//     }
// }


class NewRecipeEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            link: "",
            title: "",
            desc: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <tr>
                    <td>
                        <label>
                            URL:
                        <input
                            name="link"
                            type="text"
                            value={this.state.link}
                            onChange={this.handleInputChange} />
                        </label>
                    </td>
                    <td>
                        <label>
                            Name:
                        <input
                            name="title"
                            type="text"
                            value={this.state.title}
                            onChange={this.handleInputChange} />
                        </label>
                    </td>
                </tr>
            </form>
        );
    }
}
module.exports = NewRecipeEntry