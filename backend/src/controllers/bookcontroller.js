import Book from "../models/bookModel.js"
export async function getAllBooks(_,res){
    try{
        const books = await Book.find().sort({createAt: -1})
        res.status(200).json(books)
    }
   catch(error)
    {
        console.error("Error in getAllbook controller",error)
        res.status(500).json({message: "Internal server error"})
    } 
}
export async function getBookbyID(req,res){
    try{
        const book = await Book.findById(req.params.id)
        if (!book) return res.status(404).json({message: "Book Not Found" })
            res.status(200).json(book)
    }catch(error)
    {
        console.error("Error in getbookbyID controller",error)
        res.status(500).json({message: "Internal server error"})
    }
}
export async function createBook(req,res){
    try{
        const{title,author,PublishYear}=req.body
        if(!title || !author || !PublishYear){
            return res.status(404).json({message: 'All fields are required'})
        }
        const book = new Book({ title,author,PublishYear})
        const savedBook = await book.save()
        res.status(201).json({savedBook})
    }catch(error)
    {
        console.error("Error in createBook controller",error)
        res.status(500).json({message: "Internal server error"})
    }
    
}
export async function updateBook(req,res){
    try{
        const {title,author,PublishYear} = req.body
        const updatedBook = await
        Book.findByIdAndUpdate(req.params.id,{title,author,PublishYear},{new : true})
        if(!updatedBook) return res.status(404).json({message: "Book not found"})
            res.status(200).json(updatedBook)
    }catch{
        console.error("Error in updatebook controller",error)
        res.status(500).json({message: "Internal server error"})
    }
}
export async function deleteBook(req,res){
   try{
    const deletebook = await
    Book.findByIdAndDelete(req.params.id)
    if(!deleteBook) return res.status(404).json({message:"Book Not found"})
        res.status(200).json({message: "Book deleted successfully"})
}
    catch(error)
    {
         console.error("Error in updatebook controller",error)
        res.status(500).json({message: "Internal server error"})
    }
   }
