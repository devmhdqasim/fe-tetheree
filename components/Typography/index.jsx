import Arrow from './Arrow'
import ArrowUp from './ArrowUp'

export const Logo = ({ className, children, ...props }) => {
    return (
        <button {...props} className={`${className} btn theme-btn bg-transparent transition-all delay-700 whitespace-nowrap`}>
            <span class="btn-wrapper relative inline-block">
                <span class="relative top-0 left-0 flex items-center gap-20 whitespace-nowrap">
                  <img className="h-26 md:h-28" src="/assets/svg/logo-nav.svg" alt="Logo" />
                </span>
                <span class="absolute top-0 left-0 flex items-center gap-20 whitespace-nowrap">
                    <img className="h-26 md:h-28" src="/assets/svg/logo-nav.svg" alt="Logo" />
                </span>
            </span>
        </button>
    )
}

export const H1 = ({ className, children, ...props }) => {
    return (
        <h1 {...props} className={`${className}  text-white font-bold text-[30px] md:text-[45px] leading-10 sm:leading-55 md:leading-60`}>
            {children}
        </h1>
    )
}

export const H2 = ({ className, children, ...props }) => {
    return (
        <h2 {...props} className={`${className} text-white text-[28px] md:text-[40px] font-semibold leading-55 md:leading-60`}>
            {children}
        </h2>
    )
}

export const H3 = ({ className, children, ...props }) => {
    return (
        <h3 {...props} className={`${className}  text-white leading-34 md:leading-55 text-25 md:lg:text-lg`}>
            {children}
        </h3>
    )
}

export const H4 = ({ className, children, ...props }) => {
    return (
        <h4 {...props} className={`${className} font-normal text-sm md:text-24  text-white leading-7`}>
            {children}
        </h4>
    )
}

export const H5 = ({ className, children, ...props }) => {
    return (
        <h4 {...props} className={`${className} text-md`}>
            {children}
        </h4>
    )
}

export const H6 = ({ className, children, ...props }) => {
    return (
        <h5 {...props} className={`${className} text-white leading-7 sm:leading-9 text-base md:text-sm`}>
            {children}
        </h5>
    )
}

export const Paragraph = ({ className, children, ...props }) => {
    return (
        <p {...props} className={`${className} text-white text-xs`}>
            {children}
        </p>
    )
}

export const Caption = ({ className, children, ...props }) => {
    return (
        <span {...props} className={`${className} text-gray leading-6 text-2xs`}>
            {children}
        </span>
    )
}

export const Button = ({ className, arrow = true, children, ...props }) => {
return (
    <button {...props} className={`${className} btn theme-btn bg-white hover:bg-[##E95018] text-black h-40 md:h-50 transition-all whitespace-nowrap text-2xs md:text-xs font-semibold rounded-none sm:rounded-md px-28 md:px-36`}>
        <span class="btn-wrapper relative inline-block">
            <span class="relative top-0 left-0 flex items-center gap-20 whitespace-nowrap">
                {children}
                {arrow && <div><Arrow /></div>}
            </span>
            <span class="absolute top-0 left-0 flex items-center gap-20 whitespace-nowrap">
                {children}
                {arrow && <div className='relative'><ArrowUp /></div>}
            </span>
        </span>
    </button>
)}

// export const Button = ({ className, arrow = true, children, ...props }) => {
//     return (
//         <button {...props} className={`${className} bg-white hover:bg-[##E95018] text-black h-40 md:h-50 transition-all whitespace-nowrap text-2xs md:text-xs font-semibold rounded-md px-28 md:px-36`}>
//             <div className='flex items-center gap-20'>
//             {children}
//             {arrow && <span><Arrow /></span>}
//             </div>
//         </button>
//     )
// }

export const Tab = ({ className, children, ...props }) => {
    return (
        <div {...props} className={`${className} w-full md:w-auto bg-[#E4E4E733] h-full flex flex-col items-center justify-center text-white text-base font-normal rounded-md transition-all cursor-pointer py-20 px-24`}>
            {children}
        </div>
    )
}