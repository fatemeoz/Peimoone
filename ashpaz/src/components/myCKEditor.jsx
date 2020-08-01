import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import List from "@ckeditor/ckeditor5-list/src/list";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize";
import LinkImage from "@ckeditor/ckeditor5-link/src/linkimage";

function myCKEditor(props) {
    const editorConfiguration = {
        plugins: [
            Essentials,
            Bold,
            Italic,
            Paragraph,
            Alignment,
            Heading,
            List,
            Image,
            ImageToolbar,
            ImageCaption,
            ImageStyle,
            ImageResize,
            LinkImage,
        ],
        alignment: {
            options: ["left", "right", "center", "justify"],
        },
        toolbar: [
            "heading",
            "|",
            "bold",
            "italic",
            "alignment",
            "|",
            "bulletedList",
            "numberedList",
            "undo",
            "redo",
        ],
    };
    return (
        <div>
            <CKEditor
                editor={ClassicEditor}
                config={editorConfiguration}
                data="<p>Hello from CKEditor 5!</p>"
                onInit={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                    props.handler(editor.getData());
                }}
                onBlur={(event, editor) => {
                    console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                    console.log("Focus.", editor);
                }}
            />
        </div>
    );
}

export default myCKEditor;
