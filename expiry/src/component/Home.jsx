import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import jwtDecode from 'jwt-decode'

const HomePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  //10mins
  const inactiveTimeLimit = 10 * 60 * 1000


  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     try {
  //       const decoded = jwtDecode(token);
  //       setUser(decoded);
  //     } catch (error) {
  //       console.error('Failed to decode token', error);
  //     }
  //   } else {
  //     navigate('/login');
  //   }
  // }, [navigate]);

  useEffect(()=>{
    const handleLogout = () => {
      localStorage.removeItem('token');
      navigate('/login');
    };
    let logoutTimer = setTimeout(handleLogout, inactiveTimeLimit)
  
    //reset timer 
    const reset = ()=>{
      clearTimeout(logoutTimer)
      logoutTimer = setTimeout(handleLogout,inactiveTimeLimit)
    }
    const events = [
      'click', 'mousemove', 'keypress', 'scroll', 'touchstart'
    ]
  
    events.forEach((event) => {
      window.addEventListener(event, resetTimer);
    });

    return () => {
      clearTimeout(logoutTimer);
      events.forEach((event) => {
        window.removeEventListener(event, resetTimer);
      });
    };
  })
  const [products, setProducts] = useState("");
  const [pages, setPages] = useState(1);
  const fetchProducts = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    console.log(response.data);
    if (response && response.data) {
      setProducts(response.data.products);
    }
  };
  console.log(products);

  useEffect(() => {
    fetchProducts();
  }, []);

  const pageHandler = (selectedPage) => {
    if (selectedPage > 1 && selectedPage <= products.length / 10 && selectedPage != pages) {

      setPages(selectedPage)
    }
  }

  return (
    <>
      <div>
        {products.length > 0 && (
          <div className="products">
            {products.slice(pages * 12 - 12, pages * 12).map((prod) => {
              return (
                <span className="products__single" key={prod.id}>
                  <img src={prod.thumbnail} alt={prod.title} />
                  <span>{prod.title}</span>
                </span>
              );
            })}
          </div>
        )}
        {products.length > 0 && (
          <div className="pagination">
            <span onClick={() => pageHandler(pages - 1)}>Prev</span>

            {[...Array(products.length / 10)].map((_, i) => {
              return <span className={pages === i + 1 ? "pagination__selected" : ""} onClick={() => pageHandler(i + 1)} key={i}>{i + 1}</span>;
            })}

            <span onClick={() => pageHandler(pages + 1)}>Next</span>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
