import React from 'react'

const CocktailList = () => {
  // const {cocktails, loading} = useGlobalContext()
  // if(loading){
  //   return <Loading/>
  // }
  // if(cocktails.length < 1){
  //   return(
  //     <h2 className='section-title'>
  //       no cocktails mathced your search criteria
  //     </h2>
  //   )
  // }
  return (
    <section className='section'>
      {/* <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item}/>
        })}
      </div> */}
    </section>
  )
}

export default CocktailList
