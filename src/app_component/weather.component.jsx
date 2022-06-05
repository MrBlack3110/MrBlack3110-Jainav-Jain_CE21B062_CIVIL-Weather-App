import React from 'react';

const Weather = (props) => {
    return(
     <div className="container">
         <div className="cards pt-4">
             <h1>{props.city}</h1>
             <h5 className="py-4">
                <i className={`wi ${props.weathericon} display-1`}></i>
             </h5>
            {props.temp_celsius? (<h1 className="py-2">Day 1 - {props.temp_celsius}&deg;C</h1>):null}
            {props.temp_celsius1? (<h1 className="py-2">Day 2 - {props.temp_celsius1}&deg;C</h1>):null}
            {props.temp_celsius2? (<h1 className="py-2">Day 3 - {props.temp_celsius2}&deg;C</h1>):null}
            {props.temp_celsius3? (<h1 className="py-2">Day 4 - {props.temp_celsius3}&deg;C</h1>):null}

             {/* {minmaxTemp(props.temp_min, props.temp_max)} */}

             <h4 className="py-3">{props.description}</h4>
         </div>
     </div>
    );
};



// function minmaxTemp(min, max){
//     if(min && max){
//         return(
//            <h3>
//                <span className="px-4">{min}&deg;C</span>
//                <span className="px-4">{max}&deg;C</span>
//            </h3>
//         );
//     }
// };

export default Weather;