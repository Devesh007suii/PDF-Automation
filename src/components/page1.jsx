import ReactPDF, {
  Document,
  Page,
  Text,
  View,
  Image,
  PDFViewer,
} from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import sampleImage1 from '../images/page1Image.png'; // Import the image file
import sampleImage2 from '../images/highlight.png'; // Import the image file
import sampleImage3 from '../images/bamboo.png';
import { Font } from '@react-pdf/renderer';
import { useEffect, useState } from 'react';

Font.register({
  family: 'Roboto Slab',
  fonts: [
    {
      src: 'https://fonts.gstatic.com/s/robotoslab/v13/BngMUXZYTXPIvIBgJJSb6ufN5qA.ttf',
      fontWeight: 700,
    },
  ],
});

const PDF = ({
  storeName,
  brandName,
  productImage1,
  productImage2,
  spaceImage1,
  spaceImage2,
  rentOffer,
  counterSQFT,
  shelfSQFT,
  retailerMargin,
  previewVisible1,
  description,
  category
}) => {
  const [previewVisible, setPreviewVisible] = useState(previewVisible1);
  const [productImagesArray, setProductImagesArray] = useState([]);
  const [spaceImagesArray, setSpaceImagesArray] = useState([]);

  const handleProductImagesArray = () => {
    const handleLengthOfProductImage = Boolean(productImage1 && productImage2);
    if (handleLengthOfProductImage) {
      setProductImagesArray([productImage1, productImage2]);
    } else {
      setProductImagesArray([productImage1 || productImage2]);
    }
  };
  const handleSpaceImagesArray = () => {
    const handleLengthOfSpaceImage = Boolean(spaceImage1 && spaceImage2);
    if (handleLengthOfSpaceImage) {
      setSpaceImagesArray([spaceImage1, spaceImage2]);
    } else {
      setSpaceImagesArray([spaceImage1 || spaceImage2]);
    }
  };
  useEffect(() => {
    handleProductImagesArray();
  }, [productImage1, productImage2]);

  useEffect(()=>{
    handleSpaceImagesArray();
  }, [spaceImage1, spaceImage2]);

  const togglePreview = () => {
    setPreviewVisible(!previewVisible);
  };

  const ratePersqft = () => {
    const totalSQFT = Number(counterSQFT) + Number(shelfSQFT);
    const rate = rentOffer / totalSQFT;
    const formattedRate = Number(rate.toFixed(0));
    return formattedRate;
  };

  const spaceReq = () => {
    if (shelfSQFT > 0 && counterSQFT > 0) {
      return `Counter: ${counterSQFT} And Shelf: ${shelfSQFT}`;
    } else if (counterSQFT > 0 && shelfSQFT <= 0) {
      return `Counter: ${counterSQFT}`;
    } else if (shelfSQFT > 0 && counterSQFT <= 0) {
      return `Shelf: ${shelfSQFT}`;
    }
  };

  const MyDocument = (
    <Document>
      <Page size={{ width: 800, height: 950 }}  style={styles.page}>
        <Image style={styles.image} src={sampleImage1} />
      </Page>
      <Page size={{ width: 800, height: 950 }}>
        <View style={styles.container}>
          <View style={styles.storeNamebox}>
            <Text
              style={[
                styles.storeNameText,
                { fontSize: 20 },
                { fontFamily: 'Roboto Slab' },
              ]}
            >
              {storeName}
            </Text>
          </View>
          <View style={{ paddingTop: 5 }}>
            <Image style={styles.highlightImage} src={sampleImage2} />
          </View>
        </View>
        <View style={styles.container}>
          <View>
            <Image style={styles.bambooImage} src={sampleImage3} />
          </View>
          <View style={styles.rightContainer}>
            <View>
              <Text style={[{ marginBottom: 5 }, { fontSize: 20 }, {marginLeft: 30}]}>
                Brand Name:
              </Text>
            </View>
            <View style={styles.brandNamebox}>
              <Text style={styles.brandNameText}>{brandName}</Text>
            </View>
            <View>
              <Text style={[{ fontSize: 20 }, { marginBottom: 10 }, {marginLeft: 30}]}>
                Product Description:
              </Text>
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={[{ fontFamily: 'Roboto Slab' }, { margin: 5 }]}>
                {description}
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.container, { marginTop: 30 }]}>
          <View style={styles.box1}>
            <Text style={[styles.boxText1, { paddingBottom: 14 }]}>
              Category
            </Text>
            <Text style={styles.boxText2}>{category}</Text>
          </View>

          <View style={styles.box2}>
            <Text style={styles.boxText1}>Display Rent Offered</Text>
            <Text style={[styles.boxText2, { fontSize: 28 }]}>
              Rs. {rentOffer} /-
            </Text>
          </View>
          <View style={styles.box3}>
            <Text style={styles.boxText1}>Retailer Margin</Text>
            <Text style={[styles.boxText2, { fontSize: 28 }]}>
              {retailerMargin}
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.box4}>
            <Text style={styles.boxText1}>Rate per Sqft/month</Text>
            <Text style={[styles.boxText2, { fontSize: 28 }]}>
              Rs. {ratePersqft()} /-
            </Text>
          </View>
          <View style={styles.box5}>
            <Text style={styles.boxText1}>Placement Offer</Text>
            <Text
              style={[
                styles.boxText2,
                { fontSize: 28 },
                { fontFamily: 'Roboto Slab' },
              ]}
            >
              Consignment
            </Text>
            <Text style={[styles.boxText2, { fontSize: 22 }]}>
              (No Investment Required)
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.box6}>
            <Text style={styles.boxText1}>Display Duration</Text>
            <Text style={[styles.boxText2, { fontSize: 28 }]}>1 month</Text>
          </View>
          <View style={styles.box7}>
            <Text style={[styles.boxText2, { fontSize: 22 }]}>Space Req.</Text>

            <Text
              style={[
                styles.boxText2,
                { flexDirection: 'row' },
                { fontSize: 22 },
                { fontFamily: 'Roboto Slab' },
              ]}
            >
              {' '}
              {spaceReq()}
            </Text>
          </View>
        </View>
      </Page>
      <Page size={{ width: 800}}>
        <Text
          style={[
            { margin: 20 },
            { fontFamily: 'Roboto Slab' },
            { fontSize: 20 },
          ]}
        >
          Product Images:
        </Text>
        <View
          style={
            productImagesArray.length === 2
              ? [styles.container, styles.containerRow]
              : [styles.container, styles.containerColumn]
          }
        >
          {productImagesArray.map((val, key) => (
            <Image key={key} src={val} style={styles.productImage} />
          ))}
        </View>

        <Text
          style={[
            { margin: 20 },
            { fontFamily: 'Roboto Slab' },
            { fontSize: 20 },
          ]}
        >
          Space Images:
        </Text>
        <View
          style={
            spaceImagesArray.length === 2
              ? [styles.container, styles.containerRow]
              : [styles.container, styles.containerColumn]
          }
        >
          {spaceImagesArray.map((val, key) => (
            <Image key={key} src={val} style={styles.productImage} />
          ))}
        </View>
      </Page>
    </Document>
  );

  const handleDownload = () => {
    const blob = new Blob([MyDocument], { type: 'application/pdf' });
    saveAs(blob, 'template.pdf');
  };

  return (
    <div>
      <PDFViewer width="100%" height={1000}>
        {MyDocument}
      </PDFViewer>
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
};

export default PDF;

const styles = {
  boxText1: {
    color: '#fff',
    fontSize: 17,
    padding: 5,
  },
  boxText2: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    paddingTop: 8,
  },
  page: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '250%',
    height: '100%',
  },
  container: {
    flexDirection: 'row',
    marginLeft: 20
  },
  rightContainer: {
    marginLeft: 60,
    width: 300,
  },
  highlightImage: {
    width: 200,
    marginLeft: 80,
    marginTop: 20
  },
  storeNamebox: {
    width: '45%',
    height: 50,
    borderRadius: 10,
    margin: 20, // Adjust top margin
    marginBottom: 30,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  storeNameText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Roboto Slab',
  },
  bambooImage: {
    marginLeft: 45,
    width: 300,
  },
  brandNamebox: {
    width: '100%',
    height: 60,
    borderRadius: 10,
    backgroundColor: '#1e19bf',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginLeft: 30
  },
  brandNameText: {
    color: '#ffffff',
    fontSize: 30,
    fontFamily: 'Roboto Slab',
    marginLeft: 30
  },
  descriptionContainer: {
    width: '118%',
    height: 230,
    borderRadius: 10,
    backgroundColor: '#d9d1ed',
    fontSize: 17,
    
  },
  box1: {
    width: '30%',
    height: 120,
    borderRadius: 10,
    backgroundColor: '#d41cb1',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2: {
    width: '30%',
    height: 120,
    borderRadius: 10,
    backgroundColor: '#d41cb1',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box3: {
    width: '30%',
    height: 120,
    borderRadius: 10,
    backgroundColor: '#d41cb1',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box4: {
    width: '30%',
    height: 120,
    borderRadius: 10,
    backgroundColor: '#d41cb1',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box5: {
    width: '62.5%',
    height: 120,
    borderRadius: 10,
    backgroundColor: '#d41cb1',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box6: {
    width: '30%',
    height: 120,
    borderRadius: 10,
    backgroundColor: '#d41cb1',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box7: {
    width: '62.5%',
    height: 120,
    borderRadius: 10,
    backgroundColor: '#d41cb1',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  productImage: {
    width: "auto",
    borderRadius: 10,
    height: 'auto',
    margin:10
  },
  spaceImage: {
    width: '80%',
    borderRadius: 10,
    height: 'auto',
    marginLeft: 60,
  },
  containerColumn: {
    flexDirection: 'column',
    margin: 10
  },
  containerRow: {
    flexDirection: 'row',
  },
};
