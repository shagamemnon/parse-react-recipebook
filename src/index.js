import React from 'react';
import ReactDOM from 'react-dom';
import { Editor, createEditorState} from 'medium-draft';
import RecipeBlock from './queries.js';

function App() {
    return (
        <RecipeBlock />
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('recipe-container')
);