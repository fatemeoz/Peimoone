import React from "react";
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
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import LinkImage from "@ckeditor/ckeditor5-link/src/linkimage";
import axios from "axios";

class MyUploadAdapter {
    constructor(loader) {
        // The file loader instance to use during the upload.
        this.loader = loader;
    }

    // Starts the upload process.
    upload() {
        return this.loader.file.then(
            (file) =>
                new Promise((resolve, reject) => {
                    let fileName = file.name;
                    let fileType = file.type;
                    axios
                        .post(
                            `${process.env.REACT_APP_SERVER}/api/signed-file-url`,
                            {
                                fileName: fileName,
                                fileType: fileType,
                            }
                        )
                        .then((response) => {
                            var returnData = response.data.data.returnData;
                            var signedRequest = returnData.signedRequest;
                            var url = returnData.url;
                            this.source = axios.CancelToken.source();

                            // Put the fileType in the headers for the upload
                            var options = {
                                headers: {
                                    "Content-Type": fileType,
                                },
                                cancelToken: this.source.token,
                            };
                            console.log("hi");
                            axios
                                .put(signedRequest, file, options)
                                .then((result) => {
                                    console.log("Response from s3");
                                    this.source = null;
                                    resolve({
                                        default: url,
                                    });
                                })
                                .catch((error) => {
                                    reject("ERROR " + JSON.stringify(error));
                                });
                        })
                        .catch((error) => {
                            console.log(JSON.stringify(error));
                        });
                })
        );
    }

    // Aborts the upload process.
    abort() {
        console.log("aborting");
        this.source.cancel();
    }
}

function MyCustomUploadAdapterPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
        // Configure the URL to the upload script in your back-end here!
        return new MyUploadAdapter(loader);
    };
}

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
            ImageUpload,
        ],
        extraPlugins: [MyCustomUploadAdapterPlugin],
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
            "imageUpload",
        ],
        language: {
            ui: "en",
            content: "fa",
        },
        image: {
            resizeOptions: [
                {
                    name: "imageResize:original",
                    value: null,
                    label: "Original",
                },
                {
                    name: "imageResize:50",
                    value: "50",
                    label: "50%",
                },
                {
                    name: "imageResize:75",
                    value: "75",
                    label: "75%",
                },
            ],
            styles: ["alignLeft", "alignCenter", "alignRight"],
            toolbar: [
                "imageStyle:alignLeft",
                "imageStyle:alignCenter",
                "imageStyle:alignRight",
                "|",
                "imageTextAlternative",
                "|",
                "linkImage",
                "imageResize",
            ],
        },
    };
    return (
        <div>
            <CKEditor
                editor={ClassicEditor}
                config={editorConfiguration}
                data={`<figure class="image"><img src="https://upload.wikimedia.org/wikipedia/commons/1/11/Test-Logo.svg" alt="..."></figure>`}
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
