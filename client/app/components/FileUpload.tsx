'use client'
import { Upload } from 'lucide-react';
import React from 'react';

const FileUpload: React.FC = () => {
   const handleFileUploadButtonClick=()=>{
    const el=document.createElement('input')
    el.setAttribute('type','file')
    el.setAttribute('accept','application/pdf')
   
    el.addEventListener('change',(ev)=>{
        if(el.files){
          console.log(el.files)
        }
    })
     el.click()
   }


    return (
        <div className="max-w-md mx-auto">
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl rounded-2xl p-6 border border-slate-700">
                <div className="flex flex-col items-center justify-center border-2 border-dashed border-slate-500 rounded-xl p-8 cursor-pointer hover:border-indigo-400 hover:bg-slate-800/40 transition duration-300 ease-in-out">
                    
                    <Upload className="w-12 h-12 text-indigo-400 mb-4 animate-pulse" />
                    
                    <h3 className="text-lg font-semibold">Upload PDF File</h3>
                    <p className="text-sm text-slate-400 mb-4">Drag & drop your file here or click to browse</p>
                    
                    <button onClick={handleFileUploadButtonClick} className="mt-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-white font-medium transition duration-300 shadow-md">
                        Choose File
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FileUpload;
