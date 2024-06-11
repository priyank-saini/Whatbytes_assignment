import Image from "next/image"

function Navbar() {
  return (
    <main>
      <div className="flex items-center justify-between py-7 px-10 border-b border-gray-200">
        <Image src="/whatbytes.png" width={150} height={100}/>
        <div className="flex flex-row justify-center items-center gap-3 px-5 py-3 shadow-sm shadow-gray-300 rounded-lg">
            <Image src="/Priyank.png" width={40} height={40} className="rounded-full"/>
            <p className="font-semibold">Priyank Saini</p>
        </div>
      </div>
    </main>
  );
}

export default Navbar