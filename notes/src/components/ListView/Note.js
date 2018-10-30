import React from 'react';

//styling
import './ListView.css';

//{props.note.title} header name
//{props.note.textBody} content portion
//thumbnail content 118 char

const Note = props => {
    return (
        <div className='notesBox'>
            <p className='prevTitle'>Note Title</p>
            <p className='prevContent'>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …</p>
        </div>
    );
}
 
export default Note;