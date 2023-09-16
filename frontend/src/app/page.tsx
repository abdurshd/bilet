import Link from 'next/link'
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <section className="items-center justify-center">
        <h1 className='text-4xl text-slate-400 py-10 font-bold' > What kinda help do u need?</h1>
        <p className='text-xl font-bold'>
          Please choose from an option below:
        </p>
      </section>
      <Link href='/new-ticket' className='flex flex-row mt-5 mb-3 p-1 rounded-md bg-slate-500'>
        <div className='px-2 pt-1'>
        <FaQuestionCircle/>
        </div>
        Create new ticket
      </Link>
      <Link href='/tickets' className='flex flex-row my-3 p-1 rounded-md bg-slate-500'>
        <div className='px-2 pt-1'>
        <FaQuestionCircle/>
        </div>
        View my tickets
      </Link>
    </div>
  )
}
