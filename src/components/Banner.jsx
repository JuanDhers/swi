import {Counter} from './Counter';
import Wave from '../assets/wave_2.svg';

export const Banner = () =>{
    return(
        <section className={'bg-yellow-200 flex items-center justify-center p-2'}> {/* bg-[url("./assets/Rectangle.svg")] bg-no-repeat*/}
        
        <div className=' m-1 text-center flex flex-col items-center gap-2 p-6 bg-white rounded-2xl hover:shadow-2xl duration-300 shadow-2xl'>
        <p className='text-2xl font-medium'>+<Counter  targetNumber={100} duration={2000} /></p>
        <p className=''>students</p>
        </div>
        <div className='m-1 text-center flex flex-col items-center gap-2 p-6 bg-white rounded-2xl hover:shadow-2xl duration-300 shadow-2xl'>
        <p className='text-2xl font-medium'>+<Counter  targetNumber={1000} duration={2000} /></p>
        <p className=''>Class hours</p>
        </div>
        <div className='m-1 text-center flex flex-col items-center gap-2 p-6 bg-white rounded-2xl hover:shadow-2xl duration-300 shadow-2xl'>
        <p className='text-2xl font-medium'>+<Counter  targetNumber={20} duration={2000} /></p>
        <p className=''>Countries</p>
        </div>
        </section>
    )
}