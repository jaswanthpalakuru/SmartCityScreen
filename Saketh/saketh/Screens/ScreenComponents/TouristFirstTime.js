import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Places from "./Places";
import VisitingForFirstTime from "./VisitingForFirstTime";
import Visit from "../ScreenComponents/Visit";
import Eat from "./Eat";
import Movies from "./Movies";
import ShopComponentLong from "./ShopComponentLong";
import ShopComponentShort from "./ShopComponentShort";
import Transport from "./Transport";
import Stay from "./Stay";

export default function TouristFirstTime({ name = "Tirupathi" }) {
  return (
    <View>
      <Visit heading="Visiting for the firstTime?" nav="Visit tourist center">
        <Places
          name={`Must Visit Places in ${name}`}
          image="https://cms.tstdc.in/fetch?payload=bb6c033a-b0f4-4584-8c2c-609ffc116839.jpg"
        />
        <Places
          image="https://2.bp.blogspot.com/-HlODFH28oec/XDBEpWb8adI/AAAAAAABPwE/ShiX1np6tNklSEF8kN7LnCOEq_zuX8howCLcBGAs/s1600/DSC_6334.JPG"
          name={`${name} Nature Places`}
        />
        <Places
          image="https://dynamic.tourtravelworld.com/blog_images/13-famous-places-to-visit-tirupati-in-your-next-trip-20170517042201.jpg"
          name={`${name} Historical Places`}
        />
      </Visit>
      <Visit heading="Grab a Bite to eat" nav="Visit Food Court">
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <Eat image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTK3HT1NXUdAl247X4ArrS26b9Et94fHyeRQ&usqp=CAU" />
          <Eat image="https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2997%2Ftrend20201119134018.jpg" />
          <Eat image="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content6553.jpg" />
          <Eat image="https://static.toiimg.com/thumb/61589069.cms?width=1200&height=900" />
        </View>
      </Visit>
      <Movies />
      <Visit heading="It's Shopping Time" nav="Visit Shopping Area">
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <ShopComponentLong />
          <View style={{ marginBottom: 10, flex: 1 }}>
            <ShopComponentShort
              image="https://www.alliancebernstein.com/sites/library/uploads/AB_DoestheAmericanMallHaveaFuture-1600x760.w.jpg?uuid=c1205f68-0cdb-11ea-8ac7-361ef04bc852"
              name="Shopping Mall"
            />
            <ShopComponentShort image="https://images.indianexpress.com/2020/09/Nokia-newlaunches.jpg" />
          </View>
        </View>
        <View style={{ paddingVertical: 10 }}>
          <Image
            source={{
              uri: "https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/03/17183049/nrd-D6Tu_L3chLE-unsplash-scaled.jpg",
              height: 150,
              width: "100%",
            }}
          />
          <View style={{ paddingVertical: 10, backgroundColor: "#171A1B" }}>
            <Text
              style={{
                color: "#FFF",
                textAlign: "center",
                elevation: 5,
                // marginVertical: 10,
              }}
            >
              Supermarket & Groceries
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <View style={{ marginBottom: 10, flex: 1 }}>
            <ShopComponentShort
              image="https://in2english.net/wp-content/uploads/2018/01/home-appliances.jpg"
              name="Electronics"
            />
            <ShopComponentShort
              image="https://3.imimg.com/data3/HD/SV/MY-10247296/home-care-products-2-500x500.jpg"
              name="Home Care"
            />
          </View>
          <ShopComponentLong
            style={{ paddingLeft: 10 }}
            image="https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/750x750/Sumangali-Jewellery-Collection-o1.jpg"
            name="Jewellery"
          />
        </View>
      </Visit>
      <Visit heading="Transportation for you" nav="Visit Travel Section">
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <Transport
            name="Cab or Taxi"
            image="https://qph.fs.quoracdn.net/main-qimg-560df5445e5a9cc9a5be42cab7d64eed"
          />
          <Transport
            image="https://media.istockphoto.com/vectors/bus-station-passengers-waiting-for-a-bus-cityscape-urban-scene-public-vector-id979287054?s=170667a"
            name="Bus Station"
          />
          <Transport
            image="https://media.architecturaldigest.com/photos/56fe94952733b4f01485ce23/master/pass/train-stations-graz_08.jpg"
            name="Railway Station"
          />
          <Transport
            image="https://e-file.huawei.com/-/media/EBG/Images/case-study/airport/airport-banner-wap2.jpg"
            name="Airport"
          />
        </View>
      </Visit>
      <Stay />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    color: "#FFF",
    marginBottom: 50,
  },
});
