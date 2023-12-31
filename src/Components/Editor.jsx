import { useState, createElement, Fragment } from "react";
import useCodeMirror from "./useCodeMirror";
import { unified } from "unified";
import remarkParse from "remark-parse/lib";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react/lib";
import "./Editor.css"
import Button from '@mui/material/Button';
import { Grid, Input, Typography } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import rehypePrism from "rehype-prism";


const Editor=(props)=>{

    const [outputState,setOutputState]=useState("Hello Output!");
    const [editorState,setEditorState]= useState("Hello Aditya!")
    const [title,setTitle]=useState("");
    const [editorRef,editorView]=useCodeMirror({initialDoc:editorState,setEditorState,outputState,setOutputState})
    const md = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrism)
    .use(rehypeReact, { createElement, Fragment })
    .processSync(outputState).result;


    console.log("I am rendered!");
    
    const saveNote=()=>{
        const note={
            title: title,
            content:doc
        }
        props.addNotes(note)
    }



    return <div><Grid container flexDirection="row" justifyContent="space-between" style={{paddingLeft:"auto",paddingRight:"auto"}}>
        <Grid item><Typography variant="span" color="primary">Title:<Input value={title} onChange={(e)=>setTitle(e.target.value)}/></Typography></Grid>
        <Grid item></Grid>
        <Grid item><Button onClick={saveNote}><SaveIcon/></Button></Grid>
    </Grid>
         <div className="editorContainer" style={{marginTop:"2rem"}} >
    <div ref={editorRef} className="editor" id="markdown" />
    <code className="output" id="preview">{md}</code>
   
</div></div>
   
}

export default Editor;