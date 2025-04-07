// File: views/pages/WomenLandingPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const WomenLandingPage = () => {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
        backgroundColor: '#f5f5dc', // Beige background for the entire page
      }}
    >
      {/* Header Section */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px',
          backgroundColor: '#e4d96f', // Slightly darker beige for header
          color: '#4a3728', // Soft brown text
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span
            role="img"
            aria-label="menu"
            style={{ marginRight: '10px', fontSize: '20px' }}
          >
            🍔
          </span>
          <span
            role="img"
            aria-label="user"
            style={{ marginRight: '10px', fontSize: '20px' }}
          >
            👤
          </span>
        </div>
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>w.oncep.</div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span
            role="img"
            aria-label="heart"
            style={{ marginRight: '10px', fontSize: '20px' }}
          >
            ❤️
          </span>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span role="img" aria-label="cart" style={{ marginRight: '5px' }}>
              🛒
            </span>
            0.00
          </div>
        </div>
      </header>

      {/* Navigation Section */}
      <nav
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          padding: '10px 0',
          backgroundColor: '#fff5e1', // Creamy off-white for nav
          borderBottom: '1px solid #d2b48c', // Muted tan border
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: '#4a3728', // Soft brown text
            fontSize: '16px',
          }}
        >
          Home
        </Link>
        <Link
          to="/shop"
          style={{
            textDecoration: 'none',
            color: '#4a3728',
            fontSize: '16px',
          }}
        >
          Shop
        </Link>
        <Link
          to="/pages"
          style={{
            textDecoration: 'none',
            color: '#4a3728',
            fontSize: '16px',
          }}
        >
          Pages
        </Link>
        <Link
          to="/blog"
          style={{
            textDecoration: 'none',
            color: '#4a3728',
            fontSize: '16px',
          }}
        >
          Blog
        </Link>
        <Link
          to="/contact"
          style={{
            textDecoration: 'none',
            color: '#4a3728',
            fontSize: '16px',
          }}
        >
          Contact
        </Link>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          backgroundColor: '#f5f5dc', // Beige background
          height: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          textAlign: 'left',
          backgroundImage: 'url(/images/hero-image.jpg)', // Update with actual image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div style={{ position: 'absolute', left: '50px' }}>
          <h1
            style={{
              fontSize: '64px',
              margin: 0,
              color: '#fff5e1', // Creamy off-white for contrast
            }}
          >
            Cozy Autumn 2020
          </h1>
          <p
            style={{
              fontSize: '24px',
              color: '#4a3728', // Soft brown text
              margin: '10px 0',
            }}
          >
            men women kids
          </p>
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#d2b48c', // Muted tan button
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              color: '#4a3728',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = '#e4d96f') // Hover effect
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = '#d2b48c')
            }
          >
            Shop Now
          </button>
        </div>
        <div
          style={{
            position: 'absolute',
            right: '50px',
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            backgroundColor: '#fff5e1', // Creamy off-white
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
            color: '#4a3728',
            position: 'relative',
          }}
        >
          <img
            src="/images/new-product.jpg"
            alt="New Product"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
          <span style={{ position: 'absolute', fontWeight: 'bold' }}>
            New Product
          </span>
        </div>
      </section>

      {/* Lookbook Section */}
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          padding: '50px 20px',
          backgroundColor: '#f5f5dc', // Beige background
        }}
      >
        <div
          style={{
            width: '300px',
            height: '400px',
            backgroundColor: '#e4d96f', // Slightly darker beige
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src="/images/lookbook-video.jpg"
            alt="Lookbook Video"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '20px',
              backgroundColor: '#fff5e1', // Creamy off-white
              padding: '5px 10px',
              fontSize: '14px',
              color: '#4a3728',
            }}
          >
            15-10-2020
          </div>
          <div
            style={{
              textAlign: 'center',
              position: 'absolute',
            }}
          >
            <h3
              style={{
                fontSize: '24px',
                margin: '0 0 10px',
                color: '#4a3728',
              }}
            >
              Lookbook Video
            </h3>
            <button
              style={{
                padding: '10px 20px',
                backgroundColor: 'transparent',
                border: '1px solid #4a3728',
                cursor: 'pointer',
                fontSize: '16px',
                color: '#4a3728',
                transition: 'background-color 0.3s',
              }}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = '#d2b48c')
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = 'transparent')
              }
            >
              Shop Now
            </button>
          </div>
        </div>
        <div
          style={{
            width: '300px',
            height: '400px',
            backgroundColor: '#e4d96f',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src="/images/women-sale.jpg"
            alt="Women Sale"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              backgroundColor: '#fff5e1',
              padding: '5px 10px',
              fontSize: '14px',
              color: '#4a3728',
            }}
          >
            Women Sale 30% off
          </div>
        </div>
        <div
          style={{
            width: '300px',
            height: '400px',
            backgroundColor: '#e4d96f',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src="/images/accessories.jpg"
            alt="Accessories"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              backgroundColor: '#fff5e1',
              padding: '5px 10px',
              fontSize: '14px',
              color: '#4a3728',
            }}
          >
            Accessories 20% off
          </div>
        </div>
      </section>

      {/* Recent Products Section */}
      <section
        style={{
          padding: '50px 20px',
          backgroundColor: '#f5f5dc', // Beige background
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '32px',
            marginBottom: '10px',
            color: '#4a3728',
          }}
        >
          Recent Products
        </h2>
        <p
          style={{
            color: '#4a3728',
            marginBottom: '20px',
          }}
        >
          Preorder now to receive exclusive deals & gifts
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
            marginTop: '20px',
          }}
        >
          <div
            style={{
              width: '200px',
              textAlign: 'center',
            }}
          >
            <img
              src="/images/printed-a-line-top.jpg"
              alt="Printed A-Line Top"
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                marginBottom: '10px',
              }}
            />
            <p
              style={{
                fontSize: '14px',
                color: '#d2b48c', // Muted tan for sale label
                margin: 0,
              }}
            >
              SALE
            </p>
            <p
              style={{
                fontSize: '16px',
                color: '#4a3728',
                margin: '5px 0',
              }}
            >
              Printed A-Line Top
            </p>
            <p
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#4a3728',
              }}
            >
              £299.00-£320.00
            </p>
          </div>
          <div
            style={{
              width: '200px',
              textAlign: 'center',
            }}
          >
            <img
              src="/images/solid-straight-kurta.jpg"
              alt="Solid Straight Kurta"
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                marginBottom: '10px',
              }}
            />
            <p
              style={{
                fontSize: '16px',
                color: '#4a3728',
                margin: '5px 0',
              }}
            >
              Solid Straight Kurta
            </p>
            <p
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#4a3728',
              }}
            >
              £86.00
            </p>
          </div>
          <div
            style={{
              width: '200px',
              textAlign: 'center',
            }}
          >
            <img
              src="/images/round-neck-tshirt.jpg"
              alt="Round Neck T-Shirt"
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                marginBottom: '10px',
              }}
            />
            <p
              style={{
                fontSize: '16px',
                color: '#4a3728',
                margin: '5px 0',
              }}
            >
              Round Neck T-Shirt
            </p>
            <p
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#4a3728',
              }}
            >
              £270.00
            </p>
          </div>
          <div
            style={{
              width: '200px',
              textAlign: 'center',
            }}
          >
            <img
              src="/images/pack-of-3-tshirts.jpg"
              alt="Pack of 3 Round Neck T-Shirts"
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                marginBottom: '10px',
              }}
            />
            <p
              style={{
                fontSize: '16px',
                color: '#4a3728',
                margin: '5px 0',
              }}
            >
              Pack of 3 Round Neck T-Shirts
            </p>
            <p
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#4a3728',
              }}
            >
              £270.00
            </p>
          </div>
          <div
            style={{
              width: '200px',
              textAlign: 'center',
            }}
          >
            <img
              src="/images/printed-polo-tshirt.jpg"
              alt="Printed Polo T-Shirt"
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                marginBottom: '10px',
              }}
            />
            <p
              style={{
                fontSize: '16px',
                color: '#4a3728',
                margin: '5px 0',
              }}
            >
              Printed Polo T-Shirt
            </p>
            <p
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#4a3728',
              }}
            >
              £270.00
            </p>
          </div>
          <div
            style={{
              width: '200px',
              textAlign: 'center',
            }}
          >
            <img
              src="/images/printed-vneck-tshirt.jpg"
              alt="Printed V-Neck T-Shirt"
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                marginBottom: '10px',
              }}
            />
            <p
              style={{
                fontSize: '16px',
                color: '#4a3728',
                margin: '5px 0',
              }}
            >
              Printed V-Neck T-Shirt
            </p>
            <p
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#4a3728',
              }}
            >
              £270.00
            </p>
          </div>
          <div
            style={{
              width: '200px',
              textAlign: 'center',
            }}
          >
            <img
              src="/images/print-crop-top.jpg"
              alt="Print Crop Top"
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                marginBottom: '10px',
              }}
            />
            <p
              style={{
                fontSize: '16px',
                color: '#4a3728',
                margin: '5px 0',
              }}
            >
              Print Crop Top
            </p>
            <p
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#4a3728',
              }}
            >
              £270.00
            </p>
          </div>
          <div
            style={{
              width: '200px',
              textAlign: 'center',
            }}
          >
            <img
              src="/images/floral-lounge-tshirt.jpg"
              alt="Women Floral Print Lounge T-Shirt"
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                marginBottom: '10px',
              }}
            />
            <p
              style={{
                fontSize: '16px',
                color: '#4a3728',
                margin: '5px 0',
              }}
            >
              Women Floral Print Lounge T-Shirt
            </p>
            <p
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#4a3728',
              }}
            >
              £270.00
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WomenLandingPage;