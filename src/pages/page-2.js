import React from 'react';
import Helmet from 'react-helmet';
import Leaflet from 'leaflet';
import axios from 'axios';
import Layout from 'components/Layout';
import Container from 'components/Container';
import Map from 'components/Map';

// const SecondPage = () => {
//   return (
//     <Layout pageName="two">
//       <Helmet>
//         <title>Page Two</title>
//       </Helmet>
//       <Container type="content" className="text-center">
//         <h1>Page Two</h1>
//         <p>Welcome to page 2</p>
//       </Container>
//     </Layout>
//   );
// };

const LOCATION = {
  lat: 20,
  lng: 30
};
const CENTER = [LOCATION.lat, LOCATION.lng];
const DEFAULT_ZOOM = 3;

const SecondPage = () => {

  /**
   * mapEffect
   * @description Fires a callback once the page renders
   * @example Here this is and example of being used to zoom in and set a popup on load
   */

  async function mapEffect({ leafletElement:map } = {}) {
    if(!map) return;
    let responseGeo;
    let responseTravel;
    try{
      responseGeo = await axios.get('https://corona.lmao.ninja/v2/countries');
      responseTravel = await axios.get('https://www.travel-advisory.info/api?fbclid=IwAR3SnvJQ1-dND181hi-pNwL5BH-c41Vg0j8G_FMpqHbPkhWnsbfsJQTfbYQ');
    }catch (e){
      console.log('E',e);
      return;
    }
    const {data} = responseGeo;
    const {travelData} = responseTravel;
    const hasData = Array.isArray(data)&&data.length>0;
    const hasTravelData = Array.isArray(travelData)&&travelData.length>0;
    if(!hasData) return;

    const geoJson={
      type:'FeatureCollection',
      features:data.map((country={})=>{
        const{countryInfo={}}=country;
        const{lat, long:lng}=countryInfo;
        return{
          type:'Feature',
          properties:{
            ...country,
          },
          geometry:{
            type:'Point',
            coordinates:[lng,lat]
          }
        }
      })
    }

    function countryPoint(feature={}, latlng){
      const {properties={}} = feature;
      let updatedFromatted;
      let casesString;
      let additionalClass="none";
      const{
        country,
        updated,
        cases,
        deaths,
        recovered
      } = properties
      casesString=`${cases}`;
      if(cases>1000){
        casesString = `${casesString.slice(0,-3)}k+`
      }
      if(cases<=1000) additionalClass="good";
      if(cases>1000&&cases<=10000) additionalClass="moderate";
      if(cases>10000&&cases<=100000) additionalClass="high";
      if(cases>100000) additionalClass="critical";
      if(updated){
        updatedFromatted=new Date(updated).toDateString();
      }
      let resolved = ((deaths+recovered)/cases)*100;
      const html = `
      <span class="${additionalClass} icon-marker ">
        <span class="icon-marker-tooltip">
          <h2>${country}</h2>
          <ul>
            <li><span>Travel score:</span>  <span>Travel Score</span></li>
            <hr/>
            <li><span>Confirmed:</span>  <span>${cases}</span></li>
            <li><span>Updated:</span>  <span>${updatedFromatted}</span></li>
            <li><span>Resolved rate:</span>  <span>${resolved.toFixed(2)}%</span></li>
          </ul>
        </span>
        ${casesString}
        </span>
      `;
      return Leaflet.marker(latlng,{
        icon:Leaflet.divIcon({
          className:'icon',
          html
        }),
        riseOnHover:true
      });
  } 
    //for custom markers as a second parameter provide options
    const geoJsonLayers = new Leaflet.GeoJSON(geoJson, {
      pointToLayer:countryPoint
    });
    geoJsonLayers.addTo(map);
}

  const mapSettings = {
    center: CENTER,
    defaultBaseMap: 'Mapbox',
    zoom: DEFAULT_ZOOM,
    mapEffect
  };

  return (
    <Layout pageName="home">
      <Helmet>
        <title>Covid19 Stat Map</title>
      </Helmet>
      <Map {...mapSettings}/>
    </Layout>
  );
};
export default SecondPage;
