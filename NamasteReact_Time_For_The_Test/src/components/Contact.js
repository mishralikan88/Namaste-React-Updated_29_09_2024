const Contact = () => {
    return (
        <>
            <div className='font-bold text-3xl p-4 m-4'>
                <h1>Contact us page </h1>
            </div>
            <form>
                <input type="text" className='border border-black p-2 m-2' placeholder='name' />
                <input type="text" className='border border-black p-2 m-2' placeholder='message' />
                <button className='border border-black p-2 m-2 bg-gray-200 rounded-lg'>Submit</button>
            </form>
        </>
    )
}

export default Contact