import React, { createRef, useEffect } from 'react'
import { FormeoEditor, FormeoRenderer } from 'formeo'
import 'formeo/dist/formeo.min.css'

export const FormEditor = () => {
  const editorRef = createRef()

  useEffect(() => {
    new FormeoEditor({
      editorContainer: editorRef.current
    })
  }, [editorRef])
  const handleClick = () => {
    const options = {
      dataType: "json"
    };
    const form = new FormeoEditor(options, {
      editorContainer: editorRef.current
    });
    console.log("JSON : ");
    console.log(form.json);
  };
  return <><button onClick={handleClick}>Save</button><div ref={editorRef} /></>
}

export const FormRenderer = () => {
  const rendererRef = createRef()

  useEffect(() => {
    const renderer = new FormeoRenderer({
      renderContainer: rendererRef.current
    })
    const handleUpdate = ({ detail: { formData } }) => renderer.render(formData)
    document.addEventListener('formeoSaved', handleUpdate, false)
  }, [rendererRef])

  return <div ref={rendererRef} />
}

export default { FormEditor, FormRenderer }
