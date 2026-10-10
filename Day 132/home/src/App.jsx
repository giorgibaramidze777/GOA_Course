function App() {
  return (
    <>
      <div className="w-[600px] h-[440px] flex">
        <div className="bg-[url(./image-product-desktop.jpg)] w-[50%] bg-size-[100%] rounded-[10px_0_0_10px]"></div>

        <div className="bg-[rgb(255,255,255)] w-[50%] rounded-[0_10px_10px_0] px-[30px] py-[20px] flex flex-col gap-[20px]">
            <h2 className="text-[hsl(228,12%,48%)] font-random text-[14px]">P E R F U M E</h2>
          <h1 className="text-[38px] font-display leading-[40px] font-[600] text-[hsl(212,21%,14%)]">Gabrielle <br />Essence Eau <br /> De Parfum</h1>
            <p className="text-[hsl(228,12%,48%)] font-random text-[14px]">A floral, solar and voluptuous <br /> interpretation composed by <br /> Olivier Polgey, Perfumer-Creator for the House of CHANEL</p>
            <div className="flex gap-[20px] items-center">
				<h1 className="font-display text-[30px] text-[hsl(158,36%,37%)] font-[600]">$149.99</h1>
				<p className="font-random line-through text-[hsl(228,12%,48%)]">$169.99</p>	  
			</div>
				  <button className="flex items-center justify-center bg-[hsl(158,36%,37%)] text-white gap-[10px] rounded-[10px] px-[20px] py-[10px] cursor-pointer"><img src="./icon-cart.svg" alt="" /> <p className="font-random font-[600]">Add to Cart</p></button>
        </div>
      </div>
    </>
  )
}

export default App
