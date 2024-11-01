import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../utilities/AddToDB';
import Book from '../Book/Book';
const ListedBook = () => {
    const [readlist, setReadList] = useState([]);

    const allBooks = useLoaderData()


    useEffect(() => {

        const storedReadList = getStoredReadList()
        const storedReadListInt = storedReadList.map(id => parseInt(id))

        const bookList = allBooks.filter(book => storedReadListInt.includes(book.bookId))
        setReadList(bookList)

    }, [])

    console.log(readlist)

    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-8">Listed Books</h1>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl font-bold' >Books I Read {readlist.length} </h2>

                    {
                        readlist.map((read, index)=> <Book key={index} read={read} ></Book> )
                    }
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl font-bold' >My Wish Lists</h2>
                </TabPanel>
            </Tabs>

        </div>
    )
}

export default ListedBook
