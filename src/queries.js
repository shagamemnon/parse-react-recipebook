var React = require('react');
var Parse = require('parse');
var ParseReact = require('parse-react');

Parse.serverURL = 'http://localhost:1337/parse';

class RecipeBlock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            recipes: []
        }
    }

    componentDidMount() {
        var that = this;
        Parse.initialize("Zw5dSHuk0i5QjGGJ");
        var Recipes = Parse.Object.extend("Recipes");
        var query = new Parse.Query(Recipes);

        query.find({
            success: function(results) {
                that.setState({
                    recipes: results
                });
            },
            error: function(error) {
                that.setState({
                    recipes: []
                });

            }
        });
    }

    render() {
        var rows = [];
            for (var i in this.state.recipes) {
                rows.push(<a className="recipe-entry" href={this.state.recipes[i].attributes.url}><tr><td>{this.state.recipes[i].attributes.name}</td><td>{this.state.recipes[i].attributes.url}</td></tr></a>);
            }
        return (
            <section>
                <table>{rows}</table>
            </section>
        );
    }
}

module.exports = RecipeBlock;