import React from 'react';
import ReactDOM from 'react-dom';
import { Editor, createEditorState} from 'medium-draft';
import RecipeBlock from './queries';
import NewRecipeEntry from './newRecipeEntry';

function App() {
    return (
        <ul>
            <NewRecipeEntry />
            <RecipeBlock />

        </ul>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('recipe-container')
);