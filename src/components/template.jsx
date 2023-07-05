import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './template.css'; // Import custom CSS file
import PDF from './page1';
import sampleImage from '../images/highlight.png';

const Template = () => {
  const [storeName, setStoreName] = useState('');
  const [brandName, setBrandName] = useState('');
  const [postSubmitted, setPostSubmitted] = useState(false);
  const [productImage1, setProductImage1] = useState('');
  const [productImage2, setProductImage2] = useState('');
  const [spaceImage1, setSpaceImage1] = useState('');
  const [spaceImage2, setSpaceImage2] = useState('');
  const [rentOffer, setRentOffer] = useState('');
  const [counterSQFT, setCounterSQFT] = useState('');
  const [retailerMargin, setRetailerMargin] = useState('');
  const [shelfSQFT, setShelfSQFT] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    submitHandler(); // Call any additional submit logic if needed
    setPostSubmitted(true);
  };

  const submitHandler = () => {
    // Handle additional submit logic if needed
  };

  return (
    <>
      {!postSubmitted ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <form className="template-form" onSubmit={handleSubmit}>
            <div className="row">
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }} >
              <img src={sampleImage}/>
            </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="storeName">Store Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="storeName"
                    placeholder="Enter Store Name"
                    value={storeName}
                    onChange={event => setStoreName(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="brandName">Brand Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="brandName"
                    placeholder="Enter Brand Name"
                    value={brandName}
                    onChange={event => setBrandName(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="category">Category Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="category"
                    placeholder="Category Description..."
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    class="form-control"
                    id="description"
                    rows="3"
                    placeholder="write something..."
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="counterSQFT">
                    Space Required (Counter sqft)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="counterSQFT"
                    placeholder="Counter Sqft.."
                    value={counterSQFT}
                    onChange={event => setCounterSQFT(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="shelfSQFT">Space Required (shelf sqft)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="shelfSQFT"
                    placeholder="Shelf Sqft..."
                    value={shelfSQFT}
                    onChange={event => setShelfSQFT(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="retailerMargin">Retailer Margin</label>
                  <input
                    type="percent"
                    className="form-control"
                    id="retailerMargin"
                    placeholder="Retailer Margin"
                    value={retailerMargin}
                    onChange={event => setRetailerMargin(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="rentOffer">Rent Offer</label>
                  <input
                    type="text"
                    className="form-control"
                    id="rentOffer"
                    placeholder="Rent Offer"
                    value={rentOffer}
                    onChange={event => setRentOffer(event.target.value)}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="productImage1">Product Image 1</label>
                  <input
                    type="url"
                    className="form-control"
                    id="productImage1"
                    placeholder="Product Image 1"
                    value={productImage1}
                    onChange={event => setProductImage1(event.target.value)}
                  />
                </div>
                <div style={{ textAlign: 'center' }}></div>
                <div className="form-group">
                  <label htmlFor="productImage2">
                    Product Image 2 (IF NEEDED)
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    id="productImage2"
                    placeholder="Optional.."
                    value={productImage2}
                    onChange={event => setProductImage2(event.target.value)}
                  />
                </div>
                <div style={{ height: 30 }}></div>
                <div className="form-group">
                  <label htmlFor="spaceImage1">Space Image 1</label>
                  <input
                    type="url"
                    className="form-control"
                    id="spaceImage1"
                    placeholder="Space Image 1"
                    value={spaceImage1}
                    onChange={event => setSpaceImage1(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="spaceImage2">Space Image 2 (IF NEEDED)</label>
                  <input
                    type="url"
                    className="form-control"
                    id="spaceImage2"
                    placeholder="Optional..."
                    value={spaceImage2}
                    onChange={event => setSpaceImage2(event.target.value)}
                  />
                </div>
              </div>
            </div>
            <button
              onClick={submitHandler}
              type="submit"
              className="btn btn-primary"
            >
              Upload
            </button>
          </form>
        </div>
      ) : (
        <PDF
          storeName={storeName}
          brandName={brandName}
          productImage1={productImage1}
          spaceImage1={spaceImage1}
          productImage2={productImage2}
          spaceImage2={spaceImage2}
          rentOffer={rentOffer}
          counterSQFT={counterSQFT}
          retailerMargin={retailerMargin}
          shelfSQFT={shelfSQFT}
          description={description}
          category={category}
        />
      )}
    </>
  );
};

export default Template;
