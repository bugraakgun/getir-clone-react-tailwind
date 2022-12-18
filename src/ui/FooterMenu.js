import React from 'react'

function FooterMenu({title,items}) {
  return (
    <section>
        <div className='grid gap-y-4'>
            <h3 className='text-lg text-primary-brand-color'>{title}</h3>
            <ul className='grid grap-y-2'>
                {items.map((item,i) => (
                    <li key={i}>
                        <a href='#' className='text-sm hover:text-primary-brand-color'>
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>  
    </section>
  )
}

export default FooterMenu