import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../styles/CustomStyles.css';
import '../styles/CKEditor.css';


function PostPublish(){
    const [content, setContent] = useState('');

    return (
        <div className="App">
            <div className="ck-content" dangerouslySetInnerHTML={{__html: content}}></div>
            <h2>Using CKEditor 5 build in React</h2>
            <CKEditor
                editor={ ClassicEditor }
                data="<p>Hello from Ozgol City</p>"
                onInit={ editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor is ready to use!', editor );
                } }
                onChange={ ( event, editor ) => {
                    setContent(editor.getData());
                } }
                config={{
                    alignment: {
                        options: [ 'left', 'right' ]
                    },
                    toolbar: [
                        'heading', '|', 'bulletedList', 'numberedList', 'alignment', 'undo', 'redo'
                    ]
                }}
            />
        </div>
    );
}

export default PostPublish;