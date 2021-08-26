import React from 'react'
import Dropzone from 'react-dropzone'
function Dropzones() {
    const onDrop = (files)=>{
        console.log(files)
        const fd = new FormData()
        fd.append('fileDrop__Name',files[0])
        console.log(fd)
        console.log(fd.get("fileDrop__Name"))
    }
    return (
        <Dropzone onDrop={onDrop}>
        {({getRootProps, getInputProps}) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </section>
        )}
      </Dropzone>
    )
}

export default Dropzones
