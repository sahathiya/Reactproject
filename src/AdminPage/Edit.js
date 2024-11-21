
// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import styles from './Add.module.css'; 
// import { FaEdit } from 'react-icons/fa';
// import api from '../axios/api';
// import { toast } from 'react-toastify';
// function Edit() {
//   const initialState = {
//     name: "",
//     category: "",
//     brand: "",
//     price: "",
//     description: "",
//     qty: "",
//     rating: "",
//     reviews: "",
//     image: null, 
//   };

//   const [image, setImage] = useState(null); 
//   const [edit, setEdit] = useState(initialState);
//   const navigate = useNavigate();
//   const { id } = useParams();
  
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await api.get(`/admin/productbyId/${id}`);
//         setEdit(response.data.products);
//         console.log("Fetched product data:", response.data.products);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEdit({ ...edit, [name]: value });
//   };

//   const handleImage = (e) => {
//     setImage(e.target.files[0]); 
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const editUpdating = async () => {
//       try {
//         const formData = new FormData();
        
        
//         if (image) {
//           formData.append('image', image);
//         } else if (edit.image) {
          
//           formData.append('image', edit.image);
//         }

        
//         Object.keys(edit).forEach((key) => {
//           if (key !== 'image') formData.append(key, edit[key]);
//         });

       
//         const res = await api.patch(`/admin/update/${id}`, formData);
//         toast.success(res.data.message)
//         navigate(`/productdetailes/${id}`); 
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     editUpdating();
//   };

//   return (
//     <div>
//       <form className={styles.form} onSubmit={handleSubmit}>
//         <h1 className="text-center mt-4">Edit <FaEdit style={{ color: 'black' }} /></h1>

//         <div className={styles.formGroup}>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={edit.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
        
//         <div className={styles.formGroup}>
//           <label htmlFor="category">Category:</label>
//           <input
//             type="text"
//             id="category"
//             name="category"
//             value={edit.category}
//             onChange={handleChange}
//             required
//           />
//         </div>
        
//         <div className={styles.formGroup}>
//           <label htmlFor="image">Image:</label>
//           <input
//             type="file"
//             id="image"
//             name="image"
//             onChange={handleImage}
//           />
//           {edit.image && !image && <img src={edit.image} alt="Current Product" width="100" />}
//         </div>

//         <div className={styles.formGroup}>
//           <label htmlFor="price">Price:</label>
//           <input
//             type="number"
//             id="price"
//             name="price"
//             value={edit.price}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className={styles.formGroup}>
//           <label htmlFor="description">Description:</label>
//           <textarea
//             id="description"
//             name="description"
//             value={edit.description}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>

//         <div className={styles.formGroup}>
//           <label htmlFor="brand">Brand:</label>
//           <input
//             type="text"
//             id="brand"
//             name="brand"
//             value={edit.brand}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className={styles.formGroup}>
//           <label htmlFor="qty">Quantity:</label>
//           <input
//             type="number"
//             id="qty"
//             name="qty"
//             value={edit.qty}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className={styles.formGroup}>
//           <label htmlFor="rating">Rating:</label>
//           <input
//             type="number"
//             id="rating"
//             name="rating"
//             min="0"
//             max="5"
//             step="0.1"
//             value={edit.rating}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className={styles.formGroup}>
//           <label htmlFor="reviews">Reviews:</label>
//           <input
//             type="number"
//             id="reviews"
//             name="reviews"
//             value={edit.reviews}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="submit" className={styles.submitButton}>
//           Save Changes
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Edit;



import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import api from '../axios/api';
import { toast } from 'react-toastify';

function Edit() {
  const initialState = {
    name: "",
    category: "",
    brand: "",
    price: "",
    description: "",
    qty: "",
    rating: "",
    reviews: "",
    image: null,
  };

  const [image, setImage] = useState(null);
  const [edit, setEdit] = useState(initialState);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/admin/productbyId/${id}`);
        setEdit(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdit({ ...edit, [name]: value });
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const editUpdating = async () => {
      try {
        const formData = new FormData();

        if (image) {
          formData.append('image', image);
        } else if (edit.image) {
          formData.append('image', edit.image);
        }

        Object.keys(edit).forEach((key) => {
          if (key !== 'image') formData.append(key, edit[key]);
        });

        const res = await api.patch(`/admin/update/${id}`, formData);
        toast.success(res.data.message);
        navigate(`/productdetailes/${id}`);
      } catch (error) {
        console.log(error);
      }
    };

    editUpdating();
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
  <form
    className="bg-white rounded-lg shadow-lg p-4 w-full max-w-2xl"
    onSubmit={handleSubmit}
  >
    <h1 className="text-xl font-bold text-center text-blue-950 mb-4">
      Edit Product <FaEdit style={{ color: 'black' }} />
    </h1>

    {/* Two-column grid layout */}
    <div className="grid grid-cols-2 gap-4">
      {/* Left Column */}
      <div>
        <div className="mb-3">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={edit.name}
            onChange={handleChange}
            className="mt-0.5 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-950"
            required
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category:
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={edit.category}
            onChange={handleChange}
            className="mt-0.5 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-950"
            required
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={edit.price}
            onChange={handleChange}
            className="mt-0.5 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-950"
            required
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="brand"
            className="block text-sm font-medium text-gray-700"
          >
            Brand:
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={edit.brand}
            onChange={handleChange}
            className="mt-0.5 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-950"
            required
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="qty"
            className="block text-sm font-medium text-gray-700"
          >
            Quantity:
          </label>
          <input
            type="number"
            id="qty"
            name="qty"
            value={edit.qty}
            onChange={handleChange}
            className="mt-0.5 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-950"
            required
          />
        </div>
      </div>

      {/* Right Column */}
      <div>
        <div className="mb-3">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImage}
            className="mt-0.5 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-blue-950 "
          />
          {edit.image && !image && (
            <img src={edit.image} alt="Current Product" width="80" />
          )}
        </div>

        <div className="mb-3">
          <label
            htmlFor="rating"
            className="block text-sm font-medium text-gray-700"
          >
            Rating:
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={edit.rating}
            onChange={handleChange}
            className="mt-0.5 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-950"
            required
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="reviews"
            className="block text-sm font-medium text-gray-700"
          >
            Reviews:
          </label>
          <input
            type="number"
            id="reviews"
            name="reviews"
            value={edit.reviews}
            onChange={handleChange}
            className="mt-0.5 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-950"
            required
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={edit.description}
            onChange={handleChange}
            className="mt-0.5 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-950"
            required
          ></textarea>
        </div>
      </div>
    </div>

    <button
      type="submit"
      className="mt-4 w-full py-2 px-4 bg-blue-950 text-white rounded-md shadow focus:ring-blue-950"
    >
      Save Changes
    </button>
  </form>
</div>

  );
}

export default Edit;
