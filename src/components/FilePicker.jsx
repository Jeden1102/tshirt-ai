import React from 'react'
import CustomButton from './CustomButton'
function FilePicker({ file, setFile, readFile }) {
    return (
        <div className='filepicker-container'>
            <div className='flex-1 flex flex-col'>
                <input type="file" id="file-upload" accept='image/*'
                    onChange={(e) => setFile(e.target.files[0])} />
                <label htmlFor="file-upload" className='filepicker-label'>
                    Upload file
                </label>
                <p className='mt-2 text-gray-200 text-sm truncate'>
                    {file === '' ? 'No file selected' : file.name}
                </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
                <CustomButton
                    type="outline"
                    title="Logo"
                    handleClick={() => readFile('logo')}
                    customStyles="text-sm"
                />
                <CustomButton
                    type="filled"
                    title="Full"
                    handleClick={() => readFile('full')}
                    customStyles="text-sm"
                />
            </div>
        </div>
    )
}

export default FilePicker