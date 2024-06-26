function App() {
  return (
    <>
      {/* Using Vanilla CSS  */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "20px",
          margin: "0.5rem",
        }}
      >
        <div style={{ backgroundColor: "red" }}>text1</div>
        <div style={{ backgroundColor: "green" }}>text2</div>
        <div style={{ backgroundColor: "lime" }}>text3</div>
        <div style={{ backgroundColor: "yellow" }}>text4</div>
      </div>

      {/* Using Tailwind CSS */}
      <div className='flex justify-around p-5 m-2'>
        <div className='bg-red-500'>text1</div>
        <div className='bg-green-500'>text2</div>
        <div className='bg-blue-500'>text3</div>
        <div className='bg-yellow-500'>text4</div>
      </div>

      {/* Using Grid */}
      <div className='grid grid-cols-3 gap-2'>
        <div className='bg-orange-500 col-span-3 md:col-span-2 m-2 p-2 rounded-md'>
          grid 1
        </div>
        <div className='bg-violet-500 col-span-3 md:col-span-1 m-2 p-2 rounded-md'>
          grid 2
        </div>
        <div className='bg-gray-500 col-span-3 m-2 p-2 rounded'>grid 3</div>
      </div>
    </>
  );
}

export default App;
