import { useState } from 'react';

const Bookshelf = (props) => {
    const [ books, setBooks ] = useState([]);
    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
    });
    const handleInputChange = (event) => {
       setNewBook({...newBook, [event.target.name]: event.target.value});
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks([...books, newBook]);
        setNewBook({title: '', author: ''})
        console.log(books);
    }

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    name="title"
                    value={newBook.title}
                    onChange={handleInputChange}
                    placeholder='Book Title'
                    />
                    <input
                    type="text"
                    name="author"
                    value={newBook.author}
                    onChange={handleInputChange}
                    placeholder='Book Author'
                    />
                    <button type="submit">Submit Your Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
            {books.map((book, index) => (
                <div key={index}>
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                </div>
            ))}
            </div>
        </div>
    )
};

export default Bookshelf;
