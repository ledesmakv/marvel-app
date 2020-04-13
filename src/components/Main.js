// import React, { Fragment, useState, useEffect } from 'react';
// import Card from './Card';

// const Main = () => {
//   const [allCharacters, setAllCharacters] = useState([]);

//   useEffect(() => {
//     const API_KEY = `b43285bc0c36ac78352f600b259d6ccc`;

//     const consultarAPI = async () => {
//       const url = `public/characters?ts=12&apikey=${API_KEY}&name=${name}`;

//       const respuesta = await fetch(url);
//       const personaje = await respuesta.json();

//       setAllCharacters(allCharacters);
//     }
//     consultarAPI();
//   }, [])

//   return (
//     <Fragment>
//       <Card
//         allCharacters={allCharacters}
//       />
//     </Fragment>
//   );
// }
 
// export default Main;