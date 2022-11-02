import { serverTimestamp, collection, addDoc } from 'firebase/firestore';
import { useContext } from 'react';
import { useState } from 'react';
import { useToast } from 'react-toastify';
import { cartContext } from '../../Context/CartContext';
import { db } from '../../services/firebaseConfig';
import './form.css';
const Form = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [repeatEmail, setRepeatEmail] = useState('');
  const [orderId, setOrderId] = useState('');
  const { cart, finalPrice, buy, msgError } = useContext(cartContext);
  const total = finalPrice(cart);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      email != repeatEmail ||
      email === '' ||
      name === '' ||
      lastName === ''
    ) {
      msgError();
    } else {
      const order = {
        buyer: { name, lastName },
        items: cart,
        total: total,
        date: serverTimestamp(),
      };
      const collectionOrders = collection(db, 'orders');
      addDoc(collectionOrders, order)
        .then((res) => {
          setOrderId(res.id);
        })
        .catch((error) => {
          console.log(error);
        });
      buy();
    }
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeRepeatEmail = (e) => {
    setRepeatEmail(e.target.value);
  };
  if (orderId) {
    return <h1>Gracias por su compra su numero de seguimiento es {orderId}</h1>;
  }
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <p style={{}}>ingrese los siguientes datos para finalizar su compra</p>
        <div>
          <input
            className="input-form"
            type="text"
            name="nombre"
            placeholder="nombre..."
            onChange={handleChangeName}
            value={name}
          />
        </div>
        <div>
          <input
            className="input-form"
            type="text"
            name="apellido"
            placeholder="Apellido..."
            onChange={handleChangeLastName}
            value={lastName}
          />
        </div>
        <div>
          <input
            className="input-form"
            type="text"
            name="correo electronico"
            placeholder="email"
            onChange={handleChangeEmail}
            value={email}
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            placeholder="repita su email"
            className="input-form"
            onChange={handleChangeRepeatEmail}
            value={repeatEmail}
          />
        </div>

        <button>Enviar</button>
      </form>
    </div>
  );
};
export default Form;
