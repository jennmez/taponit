// import React, { useEffect, useState } from 'react';
// import { useHistory, useParams } from 'react-router-dom';
// import axios from 'axios';

// function UpdateLikesForm({ likes, id }) {
//   // const [loading, setLoading] = useState(false);
//   // const [error, setError] = useState(false);
//   const [product, setSingleProduct] = useState('');
//   // const { id } = useParams();

//   // const { title, imageUrl, price, likes } = product;

//   // function handleClick(id, likes) {
//   //   console.log('hello');
//   //   likes += 1;
//   //   console.log(likes);
//   //   updateLikes(id, likes);
//   // }

//   useEffect(() => {
//     function handleClick(id, likes) {
//       console.log('hello');
//       likes += 1;
//       console.log(likes);
//       updateLikes(id, likes);
//     }

//     async function updateLikes(id, likes) {
//       try {
//         // setLoading(true);
//         const response = await axios.put(`/api/products/${id}`, {
//           likes: likes,
//         });
//         const { data } = await response;
//         // dispatch({ type: 'setCheeseList', products: data });
//         // setSingleProduct(data);
//         console.log(data);
//         // setLoading(false);
//       } catch (error) {
//         console.log('err retrieving data', error);
//       }
//     }
//   }, [id, likes]);

//   return (
//     <>
//       <div>
//         <p>No. of Likes: {likes}</p>
//         <button onClick={() => handleClick(id, likes)}>Add Like</button>
//       </div>
//     </>
//   );
// }
// export default UpdateLikesForm;
