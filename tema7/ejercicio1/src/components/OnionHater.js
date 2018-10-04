import React from 'react';

class OnionHater extends React.Component {

 hater(event){
   const value = event.currentTarget.value.toLowerCase();
   if( value.includes('cebolla')) {
       alert('Odio la cebolla!!!');
   }
 }

 render(){
   return (
     <textarea onKeyUp= {this.hater}></textarea>
   );
 }
}

export default OnionHater;
