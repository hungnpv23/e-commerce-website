import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

const SortProductList = () => {
  return (
    <div className='bg-gray-300/40 py-4 px-3'>
      <div className='flex flex-warp items-center justify-between gap-2'>
        <div className='flex items-center flex-warp gap-2'>
          <div className=''>Sắp xếp theo</div>
          <button className='h-8 px-4 capitalize bg-orange text-white text-sm hover:bg-orange/80 text-center'>
            Phổ biến
          </button>
          <button className='h-8 px-4 capitalize bg-white text-black text-sm hover:bg-slate-100 text-center'>
            Mới nhất
          </button>
          <button className='h-8 px-4 capitalize bg-white text-black text-sm hover:bg-slate-100 text-center'>
            Bán chạy
          </button>
          <select
            value=''
            className='h-8 px-4 capitalize bg-white text-black text-sm hover:bg-slate-100 text-left outline-none'
          >
            <option value='' disabled>
              Giá
            </option>
            <option value='price:asc'>Giá: Thấp đến Cao</option>
            <option value='price:desc'>Giá: Cao đến Thấp</option>
          </select>
        </div>
        <div className='flex items-center'>
          <div className=''>
            <span className='text-orange'>1</span>
            <span className=''>/2</span>
          </div>
          <div className='ml-2'>
            <button className='px-3 h-8 rounded-tl-sm rounded-bl-sm bg-white/60 hover:bg-slate-100 cursor-not-allowed'>
              <FaChevronLeft className='w-3 h-3' />
            </button>
            <button className='px-3 h-8 rounded-tr-sm rounded-br-sm bg-white hover:bg-slate-100'>
              <FaChevronRight className='w-3 h-3' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SortProductList
