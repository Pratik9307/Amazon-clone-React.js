// import React, { useState } from 'react'
import "../pages/Store.css"
import Card from '../components/Card'
import Card2 from '../pages/Card2'
import Card3 from './Card3' 
import Footer from "../components/Footer"




const store = ({stores,Stores1,Stores2,Stores3}) => {

  let Don=Stores3.Cards;

   const firstTwoStores = Stores1.slice(0, 2);
   const remainingStores = Stores1.slice(2,4);
   const remainingaAll = Stores1.slice(4)

   const firstfourStore =stores.slice(0,4);
   const remaining1Stores=stores.slice(4);

   const firstthreeStores=Stores2.slice(0,3);
   const remaining2Stores=Stores2.slice(3);     
  
   
  return (
    <div className='Parent-Wrapper '>
        <div className='Card-wrapper flex'>
             {
               firstfourStore.map((store)=>{
                    return ( <Card  key={store.id} {...store}></Card>)
                    
                })
             }    
        </div>
        <div className='Card2-Wrapppr '>
           {
            firstTwoStores.map((Store1)=>{
              return( <Card2 key={Store1.id} {...Store1}></Card2>)

            })
           }
        </div>

       <div className='Card3-wrapper '>
       {
         firstthreeStores.map((Store2)=>{
              return( <Card3 key={Store2.id} {...Store2}></Card3>)

            })
           }

        <div className='sep-Div'>   
             <div className='title-sep'>
                 <b> Flat ₹50 cashback | Fruits & vegetables | Amazon Fresh</b>
             </div>
             <div className='flex'>
                  <div className='img-sep'>
                     <div className='img-div'>
                           <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/BTF_QCs/Nov23/PC2/1x/AllSubcat_RC_PC_1x_01._SY116_CB573024744_.jpg"></img>
                           <p>Fruits</p>
                     </div>
                     <div className='img-div'>
                         <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/BTF_QCs/Nov23/PC2/1x/AllSubcat_RC_PC_1x_02._SY116_CB573024744_.jpg"></img>
                         <p>Vegitables</p>
                    </div>
              
                 </div>
                 <div className='img-sep'>
                    <div className='img-div'>
                       <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/BTF_QCs/Nov23/PC2/1x/AllSubcat_RC_PC_1x_03._SY116_CB573024744_.jpg"></img>
                       <p>Seasons Spacial</p>
                    </div>
                    <div className='img-div'>
                       <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/BTF_QCs/Nov23/PC2/1x/AllSubcat_RC_PC_1x_04._SY116_CB573024744_.jpg"></img>
                       <p>Visit the store</p>
                    </div>
                 </div>

                 
             </div>
                 <div className='option'>
                     See All Offers 
                </div>
        </div>
       </div>

       <div className='Card-wrapper4'>
       
       { 
         
         remainingStores.map((Store1)=>{
              return( <Card2 key={Store1.id} {...Store1}></Card2>)

            })   
           }
       </div>
       <div className='Card-wrapper5 flex'>
       {
         remaining1Stores.map((store)=>{
                    return ( <Card  key={store.id} {...store}></Card>)
                    
                })
             } 

             {
               remaining2Stores.map((Store2)=>{
              return( <Card3 key={Store2.id} {...Store2}></Card3>)

            })
           }

           <div className='sep-con'>
                {/* <div>
                    <div className=''>
                        <h1>
                            Jamnapaar | Streaming Now
                        </h1>
                    </div>
                    <div className='vedio-div'>
                        <VideoPlayer url={videoUrl} />
                    </div>

                </div> */}
           </div>
           
       </div>

       <div className='Card-wrapper6'>
       {
        remainingaAll.map((Store1)=>{
              return( <Card2 key={Store1.id} {...Store1}></Card2>)

            })
           }
       </div>
      
       
        <Footer/>
     

      </div>
      
  )
}
export default store;
