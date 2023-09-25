'use client'


import React, { useState } from 'react'
import {tabsProps} from '@/lib/types'
import styles from '@/styles/app.module.css'
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles


const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });


const PostsTab:React.FC<tabsProps> = ({open}) => {
  const [content, setContent] = useState('');
  const [addPost ,setAddPost] = useState(false);


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
  
  
    const handleEditorChange = (newContent:any) => {
      setContent(newContent);
      console.log(content)
    };
  const handleSubmit = ()=>{
    //handle submits here.
  }
  
  
    return (
      open && <div className="relative  transition-all duration-500 ease-in-out">
             <div className="flex w-full justify-end">
             <button onClick={()=>setAddPost(!addPost)} className={`${styles.appButton} px-5 ${styles.filled} `}>Add Post</button>
             </div>

              <form className={`${!addPost?'hidden':'mt-5'}`} method='post' onSubmit={()=>handleSubmit()}>
                  <div className="metadata flex flex-col gap-6">
                  <input className=' w-full  py-4 px-6  rounded-l-[10px] bg-[#ffffff] dark:bg-gray-900 outline-none  border-neutral-100 dark:border-stone-900 focus:bg-neutral-50 border-2' type='text' placeholder='Post Title' />
                  <textarea className=' w-full h-[10rem] py-4 px-6   rounded-l-[10px] bg-[#ffffff] dark:bg-gray-900 outline-none  border-neutral-100 dark:border-stone-900 focus:bg-neutral-50 border-2'  placeholder='Post Title' />

                  </div>
                  
                    <div className="h-full w-full">
                      <QuillEditor
                        value={content}
                        onChange={handleEditorChange}
                        modules={quillModules}
                        formats={quillFormats}
                        className="w-full h-[20rem] mt-1 bg-white dark:bg-stone-950 dark:outline-none dark:text-white"
                      />
                    
                  </div>
                </form>
            </div> 
      
    );
}

export default PostsTab