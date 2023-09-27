'use client'


import React, { useState } from 'react'
import {tabsProps} from '@/lib/types'
import styles from '@/styles/app.module.css'
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import Image from 'next/image'
import Loading from '../shared/Loading';
import { bookmarks, categories } from '../../../lib/db/schema';
import { getDomain, toBase64 } from '@/lib/functions/utils';
import { NextResponse } from 'next/server';
import { AddPost, postit } from '@/lib/functions/dbfunctions';
import { db } from '@/lib/db';


const QuillEditor = dynamic(() => import('react-quill'),
 { ssr: false,
  loading:()=>(<Loading isloading/>) 
 });




const PostsTab:React.FC<tabsProps> = ({open}) => {
  const [contentInput, setContent] = useState('');
  const [addPost ,setAddPost] = useState(false);
  const [titleInput,setTitle] = useState('');
  const [slugInput,setSlug] = useState('');
  const [descriptionInput,setDescription] = useState('');
  const [categoriesInput,setCategories] = useState([]);
  const [coverInput,setCover] = useState('');
  const [isLoading,setIsLoading] = useState(false);
  


    const quillModules = {
      toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image'],
        [{ align: [] }],
        [{ color: [] }],
        ['code-block'],
        [{ 'script': 'sub'}, { 'script': 'super' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        ['clean'],
      ],
    };
  
  
    const quillFormats = [
      'header',
      'bold',
      'italic',
      'underline',
      'strike',
      'blockquote',
      'list',
      'bullet',
      'link',
      'image',
      'align',
      'color',
      'code-block',
      'sub',
      'super',
      'size',
      'code',
      'embed'
    ];
  
  
    const handleEditorChange = (newcontentInput:any) => {
      setContent(newcontentInput);
      console.log(contentInput)
    };
   const  handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>)=>{
     if(e.target.files){
     const imageString  = await toBase64(e.target.files[0] as File)
     console.log("this is the image string ", imageString)
     setCover(imageString as string)
     }
   }
  const handleSubmit = async()=>{

    const formData = {title:titleInput,
                      description:descriptionInput,
                      slug:slugInput,
                      thumbnail:coverInput,
                      contentInput:contentInput,
                      categories:categoriesInput
                    }
    let response ;

    try{
      response = await fetch(`${getDomain()}/api/post`,{
        method:"POST",
        body:JSON.stringify(formData),
        headers:{
          "contentInput-type":"Application/json"
        }
      })
    }
    catch(error){
      console.log("error while posting the data using fetch",error)
    }
    console.log(response)
    return response

     //handle submits here.
    //here is the post function

  }


  
  
    return (
      open && <div className="relative  transition-all duration-500 ease-in-out">
            <Loading isloading={isLoading} />
             <div className="flex w-full justify-end">
             <button onClick={()=>setAddPost(!addPost)} className={`${styles.appButton} px-5 ${styles.filled} `}>Add Post</button>
             </div>

              <form className={`${!addPost?'hidden':'mt-5'} flex flex-col gap-6`} method='post' onSubmit={()=>handleSubmit()}>
                      <div className="metadata flex flex-col gap-6">
                      <input className=' w-full  py-4 px-6  rounded-l-[10px] bg-[#ffffff] dark:bg-gray-900 outline-none  border-neutral-100 dark:border-stone-900 focus:bg-neutral-50 border-2' type='text' placeholder='Post Title' value={titleInput} onChange={(e)=>setTitle(e.target.value)}/>
                      <textarea className=' w-full h-[10rem] py-4 px-6   rounded-l-[10px] bg-[#ffffff] dark:bg-gray-900 outline-none  border-neutral-100 dark:border-stone-900 focus:bg-neutral-50 border-2'  placeholder='Write your post metadata description' value={descriptionInput} onChange={(e)=>setDescription(e.target.value)} />
                      <input className='block w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-pink-50 file:text-stone-700 hover:file:bg-stone-100"' type='file' multiple={false} placeholder='Cover Image' onChange={(e)=>handleFileChange(e)}/>

                      </div>

                      <div className="h-full w-full border-none">
                      <QuillEditor
                        value={contentInput}
                        onChange={handleEditorChange}
                        modules={quillModules}
                                  
                        formats={quillFormats}
                        className="w-full min-h-[110%] h-fit mt-6 bg-white dark:bg-stone-950 dark:outline-none dark:text-white border-none"
                      />

                      </div>
                      <button type='submit' className={`${styles.appButton} px-5 ${styles.filled} `}>Submit</button>
            </form>
            
  </div> 

 );
}

export default PostsTab