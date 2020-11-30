import React from 'react'
import Tags from '../../images/svgs/tags';
import Calendar from '../../images/svgs/calendar';

export default function BlogMenu({
    tags,
    dates
}) {


    const [toggleTagMenu, setToggleTagMenu] = React.useState(false)
    const [toggleDateMenu, setToggleDateMenu] = React.useState(false)

    return (
        <div className="px-4 lg:px-0">

        
        <div className="mx-auto max-w-5xl py-3 bg-white font-bold text-primary rounded shadow-md -mt-8 relative z-40 flex justify-between md:flex-row flex-col ">


            <div className="flex items-center ">
                <h3 className="text-xl leading-tight mb-0 pl-4">Posts from Jan 2020</h3>
            </div>

            <div className="flex space-x-4 relative pr-4 justify-around">


            {tags && <MenuButton onMouseEnter={() => setToggleTagMenu(true)} onMouseLeave={() => setToggleTagMenu(false)}>
                    <Tags className="mr-3" /> Posts by Tag

                    <ul className={`text-primary rounded absolute ${toggleTagMenu ? "opacity-100 top-10 " : "opacity-0 top-0 pointer-events-none "} transition-all duration-500 p-4 bg-white shadow-xl  text-left`}>
                        {Object.keys(tags).map(tag => <li className="uppercase hover:text-secondary-400">{tag}<span className="ml-2 float-right">({tags[tag]})</span></li>)}
                    </ul >
                       
                </MenuButton>}

        {dates && <MenuButton onMouseEnter={() => setToggleDateMenu(true)} onMouseLeave={() => setToggleDateMenu(false)}>
                    <Calendar className="mr-3" /> Posts by Year

                    <ul className={`text-primary rounded absolute ${toggleDateMenu ? "opacity-100 top-10 " : "opacity-0 top-0 pointer-events-none "} transition-all duration-500 p-4 bg-white shadow-xl  text-left w-40 lg:right-0`}>
                        {Object.keys(dates).map(date => <li className="uppercase hover:text-secondary-400">{date}<span className="ml-2 float-right">({dates[date]})</span></li>)}
                    </ul >
            </MenuButton>
            }
            </div>
        </div>
        </div>
    )
}



const MenuButton = ({ children, ...restProps }) =>
    <button {...restProps} className="flex items-center font-bold hover:text-secondary-400 ">
        {children}
    </button>